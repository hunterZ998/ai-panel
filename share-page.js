(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const list = value => Array.isArray(value) ? value : [];
  const text = value => typeof value === 'string' ? value : '';
  const make = (tag, value, className) => {
    const node = document.createElement(tag);
    if (value !== undefined && value !== null) node.textContent = String(value);
    if (className) node.className = className;
    return node;
  };
  const safeUrl = value => {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  };
  const external = (label, href, className) => {
    const url = safeUrl(href);
    const node = make(url ? 'a' : 'span', label, className);
    if (url) { node.href = url; node.target = '_blank'; node.rel = 'noopener noreferrer'; }
    return node;
  };
  const dateValue = value => { const t = Date.parse(value); return Number.isFinite(t) ? t : 0; };
  const dateFormat = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' });
  const timeFormat = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
  const dateLabel = value => dateValue(value) ? dateFormat.format(new Date(value)).replaceAll('/', '-') : '日期未注明';
  const timeLabel = value => dateValue(value) ? timeFormat.format(new Date(value)).replaceAll('/', '-') + ' 北京时间' : '时间未注明';
  let data;
  try { data = JSON.parse($('share-data').textContent); }
  catch { $('article-list').append(make('p', '公开内容未能读取，请重新打开分享链接。', 'empty-state')); $('snapshot-time').textContent = '资料读取失败'; return; }
  const tracks = list(data.tracks).filter(row => row && text(row.id) && text(row.name));
  const trackIds = new Set(tracks.map(row => row.id));
  const trackById = new Map(tracks.map(row => [row.id, row]));
  const articles = list(data.articles).filter(row => row && text(row.title) && list(row.sectors).some(id => trackIds.has(id))).sort((a,b) => dateValue(b.publishedAt) - dateValue(a.publishedAt) || dateValue(b.observedAt) - dateValue(a.observedAt));
  const opinions = list(data.opinions).filter(row => row && text(row.claim) && list(row.sectorIds).some(id => trackIds.has(id)));
  const params = new URLSearchParams(location.search);
  const state = {
    track: trackIds.has(params.get('track')) ? params.get('track') : '',
    query: params.get('q') || params.get('query') || '',
    mode: params.get('mode') === 'selected' ? 'selected' : 'signal',
    source: params.get('source') || '',
    days: ['1','7','30'].includes(params.get('days')) ? params.get('days') : 'all',
    limit: 30,
  };
  const meta = data.meta || {};
  $('source-time').textContent = '最近资料观测 ' + timeLabel(meta.snapshotAt || meta.newsUpdatedAt || meta.updatedAt || meta.fetchedAt);
  $('snapshot-time').textContent = '页面生成于 ' + timeLabel(meta.generatedAt);
  const notice = text(meta.notice) || text(meta.note) || text(meta.snapshotNote);
  if (notice) $('snapshot-note').textContent = notice.replace('公开只读快照','公开只读内容');
  const sourceNames = {feed:'公开资讯',radar:'X 雷达',daily:'关联研究',watch:'公众号',discoveries:'关键词发现','rss:36kr':'36氪','rss:techcrunch':'TechCrunch'};
  const sourceStatus = {ready:'已有资料',stale:'部分更新未完成，保留历史',pending:'等待更新',live:'已更新',error:'查询失败',failed:'查询失败',unavailable:'暂不可用',expired:'授权已过期',unauthorized:'需要续连授权'};
  for (const source of list(meta.sourceTimes).filter(Boolean)) {
    const name=sourceNames[source.source] || text(source.source).replace(/^rss:/,'') || '来源未注明';
    const line=make('li');line.append(make('strong',name),make('time',timeLabel(source.at)),make('span',sourceStatus[source.status] || '状态未注明'));
    $('source-times-list').append(line);
  }
  if (!$('source-times-list').childElementCount) $('source-times-list').append(make('li','暂未提供各信源更新时间。'));
  $('search').value = state.query;
  $('time-filter').value = state.days;

  const sources = [...new Set(articles.map(row => text(row.source)).filter(Boolean))].sort((a,b) => a.localeCompare(b,'zh-CN'));
  for (const source of sources) { const opt = make('option',source); opt.value = source; $('source-filter').append(opt); }
  if (!sources.includes(state.source)) state.source = '';
  $('source-filter').value = state.source;

  function syncUrl() {
    try {
      const url = new URL(location.href);
      for (const key of ['track','q','query','mode','source','days']) url.searchParams.delete(key);
      if (state.track) url.searchParams.set('track',state.track);
      if (state.query) url.searchParams.set('q',state.query);
      if (state.mode === 'selected') url.searchParams.set('mode','selected');
      if (state.source) url.searchParams.set('source',state.source);
      if (state.days !== 'all') url.searchParams.set('days',state.days);
      history.replaceState(null,'',url);
    } catch { /* Standalone files may restrict history changes. */ }
  }
  function empty(title, detail, reset) {
    const box = make('div',null,'empty-state'); box.append(make('strong',title),make('p',detail));
    if (reset) { const button = make('button','清除筛选','text-button'); button.type='button'; button.addEventListener('click',resetAll); box.append(button); }
    return box;
  }
  function renderTracks() {
    const focusedTrack = document.activeElement?.dataset?.track;
    const holder = $('track-list'); holder.replaceChildren();
    for (const track of tracks) {
      const button = make('button',null,'track-button'); button.type='button'; button.dataset.track=track.id;
      button.setAttribute('aria-pressed',String(state.track===track.id));
      const aCount = articles.filter(row => list(row.sectors).includes(track.id)).length;
      const oCount = opinions.filter(row => list(row.sectorIds).includes(track.id)).length;
      button.append(make('strong',track.name),make('span',aCount + ' 条资讯' + (oCount ? ' / ' + oCount + ' 条观点' : '')));
      button.addEventListener('click',() => { state.track = state.track===track.id ? '' : track.id; state.limit=30; render(); });
      holder.append(button);
    }
    if (focusedTrack) [...holder.children].find(button => button.dataset.track===focusedTrack)?.focus({preventScroll:true});
    const framework = $('track-framework'); framework.replaceChildren();
    const chosen = trackById.get(state.track);
    if (!chosen) {
      framework.append(make('p','选择一个赛道，查看研究框架、相关资讯与已有观点。支持、削弱与仅相关分别记录，未形成观点的方向会如实留空。'));
      return;
    }
    if (text(chosen.claim)) framework.append(make('p',chosen.claim,'framework-claim'));
    if (text(chosen.verify)) { const line=make('p',null,'framework-verify'); line.append(make('span','验证方向','framework-label'),document.createTextNode(chosen.verify)); framework.append(line); }
    if (text(chosen.sourceTitle)) framework.append(make('p','框架来源：'+chosen.sourceTitle+(chosen.sourceLocator?'，'+chosen.sourceLocator:''),'framework-source'));
    if (!framework.childElementCount) framework.append(make('p','此赛道暂未发布研究框架。'));
  }
  function matchesQuery(values) { return !state.query.trim() || values.map(text).join(' ').toLocaleLowerCase().includes(state.query.trim().toLocaleLowerCase()); }
  function filteredArticles() {
    const cutoff = state.days==='all' ? 0 : Date.now()-Number(state.days)*86400000;
    return articles.filter(row => (!state.track || list(row.sectors).includes(state.track)) &&
      (state.mode!=='selected' || row.level==='selected') && (!state.source || row.source===state.source) &&
      (!cutoff || dateValue(row.publishedAt)>=cutoff) && matchesQuery([row.title,row.summary,row.source,...list(row.sectors).map(id=>trackById.get(id)?.name)]));
  }
  function renderArticles() {
    const rows = filteredArticles(); $('article-count').textContent=rows.length;
    for (const button of document.querySelectorAll('[data-mode]')) button.setAttribute('aria-pressed',String(button.dataset.mode===state.mode));
    $('mode-explanation').textContent = state.mode==='selected' ? '沿用已发布的严格筛选结果，保留核验结论与来源标记。' : '相关主题的公开信息与线索；核验状态随文标注。';
    const holder=$('article-list'); holder.replaceChildren();
    if (!rows.length) holder.append(empty('当前筛选下没有资讯','可切换到主题快讯、扩大时间范围或清除筛选。本页尚未覆盖的更新，不代表没有发生。',true));
    for (const row of rows.slice(0,state.limit)) {
      const card=make('article',null,'news-item'); card.dataset.articleId=text(row.id);
      const metadata=make('div',null,'article-meta'); metadata.append(make('span',text(row.source)||'来源未注明','source-name'),make('time',dateLabel(row.publishedAt)));
      const kindLabel={x:'X 原帖',wechat:'公众号',research:'机构研究',official:'官方发布',news:'媒体资讯'}[row.kind];
      if (kindLabel) metadata.append(make('span',kindLabel,'meta-kind'));
      const title=make('h3',null,'article-title'); title.append(external(row.title,row.url)); card.append(metadata,title);
      if (text(row.summary) && row.summary.trim()!==row.title.trim()) card.append(make('p',row.summary,'article-summary'));
      const bottom=make('div',null,'article-bottom');
      if (row.level==='selected') bottom.append(make('span','精选','chip selected'));
      for (const id of list(row.sectors).filter(id=>trackIds.has(id))) bottom.append(make('span',trackById.get(id).name,'chip'));
      if (text(row.evidenceLabel)) bottom.append(make('span',row.evidenceLabel,'chip evidence'));
      if (dateValue(row.observedAt)) bottom.append(make('time','观测 '+dateLabel(row.observedAt),'article-observed'));
      card.append(bottom); holder.append(card);
    }
    $('load-more').hidden = rows.length <= state.limit;
    $('load-more').textContent='再看 '+Math.min(30,Math.max(0,rows.length-state.limit))+' 条（剩余 '+Math.max(0,rows.length-state.limit)+' 条）';
  }
  const relationLabel = relation => ({supports:'支持',weakens:'削弱',related:'仅相关'})[relation] || '待核';
  function renderOpinions() {
    const rows=opinions.filter(row => (!state.track || list(row.sectorIds).includes(state.track)) && matchesQuery([row.title,row.claim,row.supportsWhen,row.weakensWhen,...list(row.sourceRefs).filter(Boolean).map(s=>s.title)]));
    $('opinion-count').textContent=rows.length;
    const holder=$('opinion-list'); holder.replaceChildren();
    if (!rows.length) { holder.append(empty(state.track?'此赛道暂未匹配公开观点':'没有匹配的公开观点',state.query?'试试其他关键词，或清除搜索。':'已保留研究框架与相关资讯；尚未公开的判断不会用其他赛道观点代替。')); return; }
    for (const row of rows) {
      const card=make('article',null,'opinion-card'); card.dataset.opinionId=text(row.id);
      const top=make('div',null,'opinion-top');
      for (const id of list(row.sectorIds).filter(id=>trackIds.has(id))) top.append(make('span',trackById.get(id).name,'chip'));
      if (dateValue(row.asOf)) top.append(make('time',dateLabel(row.asOf),'opinion-date'));
      card.append(top,make('h3',text(row.title)||'研究判断','opinion-title'),make('p',row.claim,'opinion-claim'));
      const reviews=list(row.savedReviews).filter(Boolean);
      const counts=make('div',null,'evidence-counts');
      for (const relation of ['supports','weakens','related']) counts.append(make('span',relationLabel(relation)+' '+reviews.filter(item=>item.relation===relation).length,'evidence-count '+relation));
      card.append(counts);
      const details=make('details',null,'opinion-details'); details.append(make('summary','查看条件、依据与来源'));
      const conditions=make('div',null,'conditions');
      for (const [label,value,kind] of [['什么信息支持它',row.supportsWhen,'supports'],['什么信息削弱它',row.weakensWhen,'weakens']]) {
        const condition=make('div',null,'condition '+kind); condition.append(make('h4',label),make('p',text(value)||'尚未公开具体条件。')); conditions.append(condition);
      }
      details.append(conditions);
      if (reviews.length) {
        const reviewList=make('div',null,'review-list'); reviewList.append(make('h4','已记录的资讯依据','review-list-title'));
        for (const review of reviews) {
          const item=make('div',null,'review'); const head=make('div',null,'review-head');
          head.append(make('span',relationLabel(review.relation),'relation '+(['supports','weakens','related'].includes(review.relation)?review.relation:'')),make('time',dateLabel(review.at||review.reviewedAt),'review-date'));
          item.append(head,external(text(review.title)||'查看原始依据',review.url,'review-title'));
          if(text(review.reason)) item.append(make('p',review.reason,'review-reason'));
          const moreSources = list(review.corroboratingUrls).filter(url => safeUrl(url) && url !== review.url);
          if (moreSources.length) {
            const links = make('div',null,'corroborating-links');
            moreSources.forEach((url,index) => links.append(external('补充依据 '+(index+1),url,'review-extra')));
            item.append(links);
          }
          reviewList.append(item);
        }
        details.append(reviewList);
      } else details.append(make('p','尚未记录逐条核验的资讯依据。数量为零不代表该判断已被证实或推翻。','no-reviews'));
      const refs=list(row.sourceRefs).filter(Boolean); const sourcesBox=make('div',null,'source-list'); sourcesBox.append(make('h4','观点出处','source-list-title'));
      if (!refs.length) sourcesBox.append(make('p','出处尚未注明。'));
      for(const ref of refs) { const item=make('p',null,'source-reference'); item.append(external(text(ref.title)||'来源未注明',ref.url)); const suffix=[text(ref.kind),text(ref.date),text(ref.locator)].filter(Boolean).join('，'); if(suffix)item.append(document.createTextNode('，'+suffix)); sourcesBox.append(item); }
      details.append(sourcesBox);card.append(details);holder.append(card);
    }
  }
  function render() { syncUrl();renderTracks();renderArticles();renderOpinions(); }
  function resetAll() { state.track='';state.query='';state.mode='signal';state.source='';state.days='all';state.limit=30;$('search').value='';$('source-filter').value='';$('time-filter').value='all';render(); }
  $('reset-track').addEventListener('click',()=>{state.track='';state.limit=30;render();});
  $('clear-filters').addEventListener('click',resetAll);
  let inputTimer;
  $('search').addEventListener('input',()=>{clearTimeout(inputTimer);inputTimer=setTimeout(()=>{state.query=$('search').value;state.limit=30;render();},150);});
  $('source-filter').addEventListener('change',()=>{state.source=$('source-filter').value;state.limit=30;syncUrl();renderArticles();});
  $('time-filter').addEventListener('change',()=>{state.days=$('time-filter').value;state.limit=30;syncUrl();renderArticles();});
  for(const button of document.querySelectorAll('[data-mode]')) button.addEventListener('click',()=>{state.mode=button.dataset.mode;state.limit=30;render();});
  $('load-more').addEventListener('click',()=>{state.limit+=30;renderArticles();});
  let toastTimer;
  function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').hidden=false;toastTimer=setTimeout(()=>{$('toast').hidden=true;},3500);}
  $('copy-link').addEventListener('click',async()=>{
    syncUrl();
    try {
      if(navigator.clipboard && location.protocol==='https:') await navigator.clipboard.writeText(location.href);
      else { const temporary=make('textarea',location.href);temporary.readOnly=true;temporary.style.cssText='position:fixed;left:-9999px;top:0';document.body.append(temporary);temporary.select();const ok=document.execCommand('copy');temporary.remove();if(!ok)throw new Error('Clipboard unavailable'); }
      toast('分享链接已复制，包含当前筛选。');
    }catch{
      clearTimeout(toastTimer);const holder=$('toast');holder.replaceChildren(make('p','复制受限，请选中下方链接复制：'));
      const input=make('input');input.value=location.href;input.readOnly=true;input.setAttribute('aria-label','当前分享链接');
      input.style.cssText='display:block;width:min(580px,72vw);margin-top:8px;padding:8px;border:1px solid #dfe6ee;border-radius:4px;background:#fff;color:#172d45;font-size:12px';
      const close=make('button','关闭');close.type='button';close.style.cssText='margin-top:8px;padding:3px 8px;background:white;border:0;border-radius:3px;color:#172d45;font-size:12px';close.addEventListener('click',()=>{holder.hidden=true;$('copy-link').focus();});
      holder.append(input,close);holder.hidden=false;input.focus();input.select();
    }
  });
  render();
})();
