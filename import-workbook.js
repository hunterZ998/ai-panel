/* Local, read-only OOXML import. No workbook bytes or results leave this invocation. */
(() => {
  'use strict';

  const MiB = 1024 * 1024;
  const badFile = '请选择按七模块原表填写的 .xlsx 工作簿。';
  const stages = [
    ['purpose', '目的', 'A'], ['standards', '标准', 'B'], ['evidence', '知识库', 'CDEFGHIJKLMNO'],
    ['judgment', '判断', 'P'], ['strategy', '策略', 'Q'], ['execution', '执行', 'RS'],
    ['review', '复盘及优化', 'T']
  ];
  const elements = (node, tag) => Array.from(node.getElementsByTagNameNS('*', tag));
  const first = (node, tag) => node.getElementsByTagNameNS('*', tag)[0];
  const lines = value => value.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const parts = value => value.split(/[｜|]/).map(part => part.trim());
  const relationshipId = node => Array.from(node.attributes).find(attr => attr.localName === 'id')?.value;
  const formatError = () => new Error('工作簿的 ZIP 结构不完整，或使用了不支持的加密格式。');

  function openZip(bytes) {
    if (bytes.length < 22) throw formatError();
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const word = offset => view.getUint16(offset, true);
    const dword = offset => view.getUint32(offset, true);
    let end = bytes.length - 22;
    const limit = Math.max(0, end - 65535);
    while (end >= limit && (dword(end) !== 0x06054b50 || end + 22 + word(end + 20) !== bytes.length)) end--;
    if (end < limit || word(end + 4) || word(end + 6)) throw formatError();
    const count = word(end + 10);
    let cursor = dword(end + 16);
    if (word(end + 8) !== count || count > 4096 || cursor + dword(end + 12) > end) throw formatError();
    const files = new Map();
    let total = 0;
    for (let index = 0; index < count; index++) {
      if (cursor + 46 > end || dword(cursor) !== 0x02014b50) throw formatError();
      const nameSize = word(cursor + 28);
      const next = cursor + 46 + nameSize + word(cursor + 30) + word(cursor + 32);
      if (next > end) throw formatError();
      const name = new TextDecoder().decode(bytes.subarray(cursor + 46, cursor + 46 + nameSize));
      const entry = { flags: word(cursor + 8), method: word(cursor + 10), length: dword(cursor + 20),
        size: dword(cursor + 24), offset: dword(cursor + 42) };
      total += entry.size;
      if (files.has(name) || total > 160 * MiB || entry.flags & 1) throw formatError();
      files.set(name, entry);
      cursor = next;
    }
    async function xml(name) {
      const entry = files.get(name);
      if (!entry) throw new Error('工作簿缺少工作表或内部引用。' + badFile);
      const offset = entry.offset;
      if (entry.size > 20 * MiB || offset + 30 > end || dword(offset) !== 0x04034b50) throw formatError();
      const start = offset + 30 + word(offset + 26) + word(offset + 28);
      if (start + entry.length > end || ![0, 8].includes(entry.method)) throw formatError();
      const compressed = bytes.subarray(start, start + entry.length);
      let data = compressed;
      if (entry.method === 8) {
        if (typeof DecompressionStream === 'undefined') throw new Error('当前浏览器不能解压工作簿，请更新浏览器后重试。');
        const reader = new Blob([compressed]).stream().pipeThrough(new DecompressionStream('deflate-raw')).getReader();
        data = new Uint8Array(entry.size);
        let written = 0;
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            if (written + value.byteLength > data.length) throw formatError();
            data.set(value, written);
            written += value.byteLength;
          }
          if (written !== data.length) throw formatError();
        } finally {
          await reader.cancel().catch(() => {});
        }
      }
      if (data.length !== entry.size) throw formatError();
      const encoding = data[0] === 255 && data[1] === 254 ? 'utf-16le' :
        data[0] === 254 && data[1] === 255 ? 'utf-16be' : 'utf-8';
      const content = new TextDecoder(encoding).decode(data);
      if (/<!DOCTYPE|<!ENTITY/i.test(content)) throw formatError();
      const doc = new DOMParser().parseFromString(content, 'application/xml');
      if (first(doc, 'parsererror')) throw formatError();
      return doc;
    }
    return { has: name => files.has(name), xml };
  }

  function resolvePart(base, target) {
    const pieces = target.startsWith('/') ? [] : base.split('/').slice(0, -1);
    for (const piece of target.split('/')) {
      if (piece === '..') {
        if (!pieces.length) throw formatError();
        pieces.pop();
      } else if (piece && piece !== '.') pieces.push(piece);
    }
    return pieces.join('/');
  }

  async function relationships(zip, part) {
    const pieces = part.split('/');
    const filename = pieces.pop();
    const name = [...pieces, '_rels', filename + '.rels'].join('/');
    const result = new Map();
    if (!zip.has(name)) return result;
    for (const rel of elements(await zip.xml(name), 'Relationship')) {
      const target = rel.getAttribute('Target');
      const external = rel.getAttribute('TargetMode') === 'External';
      result.set(rel.getAttribute('Id'), {
        type: rel.getAttribute('Type').split('/').pop(),
        target: external ? target : resolvePart(part, target), external
      });
    }
    return result;
  }

  function richText(node) {
    if (!node) return '';
    return elements(node, 't').filter(t => t.parentElement?.localName !== 'rPh')
      .map(t => t.textContent).join('').replace(/_x([\da-f]{4})_/gi, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))).trim();
  }

  function readRows(sheet, strings) {
    const rows = new Map();
    for (const row of elements(sheet, 'row')) {
      const rowNumber = Number(row.getAttribute('r'));
      const values = {};
      for (const cell of elements(row, 'c')) {
        const ref = /^([A-T])(\d+)$/.exec(cell.getAttribute('r') || '');
        if (!ref || Number(ref[2]) !== rowNumber) continue;
        const type = cell.getAttribute('t');
        const value = first(cell, 'v')?.textContent || '';
        const text = type === 's' ? strings[Number(value)] : type === 'inlineStr' ? richText(cell) : value;
        if (text) values[ref[1]] = text;
      }
      if (Object.keys(values).length) rows.set(rowNumber, values);
      if (rows.size > 12000) throw new Error('工作表过大，请导出七模块研究页后再导入。');
    }
    return rows;
  }

  function headerRow(row) {
    return row.A?.trim() === '目的' && row.B?.trim() === '标准' && /知识库|认知/.test(row.C) &&
      row.P?.trim() === '判断' && row.Q?.trim() === '策略' && row.R?.trim() === '执行' && /复盘/.test(row.T);
  }

  function groupAnchors(workbook, sheetName, rows, top) {
    const named = new Map();
    for (const def of elements(workbook, 'definedName')) {
      if (def.getAttribute('name').startsWith('_xlnm.')) continue;
      const ref = /^=(.*)$/.exec(def.textContent)?.[1] || def.textContent;
      const m = /^(?:'((?:[^']|'')+)'|([^!]+))!\$?A\$?(\d+)(?::\$?[A-T]\$?\d+)?$/i.exec(ref.trim());
      if (m && (m[1] || m[2]).replace(/''/g, "'") === sheetName && +m[3] >= top && rows.get(+m[3])?.A)
        named.set(+m[3], def.getAttribute('name'));
    }
    for (const [index, row] of rows) {
      if (index < top || named.has(index) || !row.A || !row.B || !row.P || !row.Q) continue;
      const title = lines(row.A)[0];
      if (title && parts(title).length > 1 && !/[?？]/.test(title) && !row.B.includes('本行依据') && (row.R || row.S))
        named.set(index, parts(title)[0]);
    }
    return Array.from(named.keys()).sort((a, b) => a - b);
  }

  async function rowCitations(zip, sheet, rels) {
    const notes = new Map(), links = new Map();
    const rel = Array.from(rels.values()).find(r => r.type === 'comments' && !r.external);
    if (rel) {
      for (const node of elements(await zip.xml(rel.target), 'comment'))
        notes.set(node.getAttribute('ref'), richText(node));
    }
    for (const node of elements(sheet, 'hyperlink')) {
      const link = rels.get(relationshipId(node));
      if (link?.external && link.type === 'hyperlink') links.set(node.getAttribute('ref'), link.target);
    }
    return { notes, links };
  }

  function makeSourceIndex() {
    const sources = [], keys = new Map(), cache = new Map();
    function add(label, locator, url = '') {
      const key = JSON.stringify([label, locator, url]);
      if (!keys.has(key)) {
        const id = 's' + (sources.length + 1);
        keys.set(key, id);
        sources.push({ id, label, locator, url });
      }
      return keys.get(key);
    }
    function fromNotes(note) {
      if (!note) return { detail: '', ids: [] };
      if (!cache.has(note)) {
        const ids = [];
        const blocks = note.trim().split(/\r?\n\s*\r?\n/);
        // The original template may put the full evidence behind a short cell label.
        // A leading prose paragraph precedes source blocks (title, locator and link).
        const detail = lines(blocks[0]).length === 1 ? blocks.shift() : '';
        for (const block of blocks) {
          const [label, ...details] = lines(block);
          if (!label) continue;
          const url = details.find(line => /^https?:\/\/\S+$/i.test(line)) || '';
          ids.push(add(label, details.filter(line => line !== url).join('\n'), url));
        }
        cache.set(note, { detail, ids });
      }
      return cache.get(note);
    }
    return { sources, add, fromNotes };
  }

  function importCase({ rows, name: sheet, headers, rowIds, notes, links }, sequence) {
    const overview = rows.get(rowIds[0]), heading = lines(overview.A);
    const [name, ...sector] = parts(heading[0]);
    const company = name.replace(/[（(].*?[)）]/g, '').trim();
    const question = heading.slice(1).join('\n') || heading[0];
    const summaries = [question, overview.B, '', overview.P, overview.Q, '', overview.T];
    const groups = stages.map(([key, label], index) => ({ key, label, summary: summaries[index] || '', items: [] }));
    const sourceIndex = makeSourceIndex();
    for (const rowId of rowIds) {
      const row = rows.get(rowId), isOverview = rowId === rowIds[0], aLines = lines(row.A || '');
      const questionLine = aLines.find(line => {
        const [subject, topic] = parts(line);
        return topic && (subject === name || (company && subject.replace(/[（(].*?[)）]/g, '').trim() === company));
      });
      const topic = isOverview ? question : questionLine && parts(questionLine).slice(1).join('｜');
      const fallbackIds = sourceIndex.fromNotes(notes.get('B' + rowId)).ids.slice();
      const bLink = links.get('B' + rowId);
      if (bLink && !fallbackIds.length) {
        const web = /^https?:\/\//i.test(bLink);
        fallbackIds.push(sourceIndex.add('本行来源', web ? sheet + '!B' + rowId : bLink, web ? bLink : ''));
      }
      const sourceText = (row.B || '').split(/(?:^|\n)本行依据(?:\r?\n|$)/);
      if (!fallbackIds.length && sourceText[1]) {
        for (const label of lines(sourceText[1])) fallbackIds.push(sourceIndex.add(label, sheet + '!B' + rowId));
      }
      for (const [stageNo, [, label, letters]] of stages.entries()) {
        for (const letter of letters) {
          const value = row[letter];
          if (!value) continue;
          const ref = letter + rowId;
          let title = headers[letter] || label, text = value;
          if (letter === 'A' && questionLine) text = aLines.slice(aLines.indexOf(questionLine) + 1).join('\n');
          else if (letter === 'B') text = sourceText[0].trim();
          else if (!isOverview && /^[^｜\n]{1,60}｜/.test(value)) {
            const cut = value.indexOf('｜');
            title = value.slice(0, cut);
            text = value.slice(cut + 1);
          }
          const own = sourceIndex.fromNotes(notes.get(ref));
          if (own.detail && !text.includes(own.detail))
            text = text ? text + '\n\n' + own.detail : own.detail;
          if (!text) continue;
          groups[stageNo].items.push({ title, text, sheetRef: sheet + '!' + ref,
            question: topic || '', sourceIds: own.ids.length ? own.ids : fallbackIds });
        }
      }
    }
    return {
      id: 'local-' + sequence, name, sector: sector.join('｜'), market: overview.I || '',
      status: '原表导入', question, judgment: overview.P || '', nextAction: overview.Q || '',
      stages: groups, sources: sourceIndex.sources
    };
  }

  window.readResearchWorkbook = async file => {
    if (!file || typeof file.arrayBuffer !== 'function' || !/\.xlsx$/i.test(file.name || '')) throw new Error(badFile);
    if (file.size > 24 * MiB) throw new Error('工作簿超过 24 MB，请单独导出研究工作表后再导入。');
    const zip = openZip(new Uint8Array(await file.arrayBuffer()));
    const part = 'xl/workbook.xml';
    const workbook = await zip.xml(part), rels = await relationships(zip, part);
    const str = Array.from(rels.values()).find(r => r.type === 'sharedStrings' && !r.external);
    const strings = str ? elements(await zip.xml(str.target), 'si').map(richText) : [];
    const cases = [];
    let found = false;
    for (const tab of elements(workbook, 'sheet')) {
      const rel = rels.get(relationshipId(tab));
      if (!rel || rel.type !== 'worksheet' || rel.external) continue;
      const sheet = await zip.xml(rel.target);
      const rows = readRows(sheet, strings);
      const head = Array.from(rows.keys()).find(id => id <= 24 && headerRow(rows.get(id)));
      if (!head) continue;
      found = true;
      const name = tab.getAttribute('name'), headers = rows.get(head + 2) || {};
      const starts = groupAnchors(workbook, name, rows, head + 3);
      const citations = await rowCitations(zip, sheet, await relationships(zip, rel.target));
      const sortedRows = Array.from(rows.keys()).sort((a, b) => a - b);
      let cursor = 0;
      for (const [i, start] of starts.entries()) {
        while (cursor < sortedRows.length && sortedRows[cursor] < start) cursor++;
        const firstRow = cursor, end = starts[i + 1] || Infinity;
        while (cursor < sortedRows.length && sortedRows[cursor] < end) cursor++;
        cases.push(importCase({ rows, name, headers, rowIds: sortedRows.slice(firstRow, cursor), ...citations }, cases.length + 1));
      }
    }
    if (!cases.length) throw new Error(found ? '已识别七模块表头。请先填写项目总览行，或用命名区域指向项目首行 A 列。' : '未找到原表 A 至 T 列的七模块表头。' + badFile);
    return { schemaVersion: 1, asOf: '', visibility: 'private', cases };
  };
})();
