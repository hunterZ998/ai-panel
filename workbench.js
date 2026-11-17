(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const array = value => Array.isArray(value) ? value : [];
  let original;
  try {
    original = JSON.parse($("project-data").textContent);
  } catch {
    $("empty-message").textContent = "项目数据未能读取。请重新打开页面，或从上方导航查看六赛道资讯。";
    $("empty-message").hidden = false;
    return;
  }

  const newsBase = original.visibility === "private"
    ? "https://hunterz998.github.io/ai-panel/news.html"
    : "./news.html";
  document.querySelectorAll("[data-news]").forEach(a => {
    a.href = newsBase + "#" + a.dataset.news;
  });
  const currentHash = () => {
    try { return decodeURIComponent(location.hash.slice(1)); }
    catch { return ""; }
  };
  const isLegacyRoute = hash =>
    /^[a-z][a-z0-9_]*$/.test(hash) && !["projects", "content"].includes(hash);
  if (isLegacyRoute(currentHash())) {
    location.replace(newsBase + "#" + currentHash());
    return;
  }

  let data = original;
  let selected = null;
  let selectedStage = null;
  let sourcesById = new Map();
  const imported = () => data !== original;
  const caseRoute = (item, stage) => "#project/" + encodeURIComponent(item.id) +
    (stage ? "/" + encodeURIComponent(stage) : "");
  const counts = new Intl.NumberFormat("zh-CN");
  const setText = (id, text) => { $(id).textContent = text || ""; };
  function sourceUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" && !url.username && !url.password ? url.href : "";
    } catch { return ""; }
  }

  function createSource(source) {
    const row = element("li");
    const url = sourceUrl(source.url);
    const label = element(url ? "a" : "span", source.label || source.id);
    if (url) {
      label.href = url;
      label.target = "_blank";
      label.rel = "noopener noreferrer";
    }
    row.append(label);
    if (source.locator) row.append(element("span", source.locator, "source-location"));
    return row;
  }

  function setCurrent(container, value) {
    for (const control of container.querySelectorAll("[data-id]")) {
      if (control.dataset.id === value) control.setAttribute("aria-current", "true");
      else control.removeAttribute("aria-current");
    }
  }

  function makeChoice(item, stage) {
    const id = stage ? stage.key : item.id;
    // An imported workbook is kept in memory, including its project and stage selection.
    const control = element(imported() ? "button" : "a");
    if (imported()) {
      control.type = "button";
      control.addEventListener("click", () => showCase(item, stage?.key));
    } else {
      control.href = caseRoute(item, stage?.key);
    }
    control.dataset.id = id;
    return control;
  }

  function buildIndex() {
    const cases = array(data.cases);
    $("case-list").replaceChildren();
    $("case-select").replaceChildren();
    for (const item of cases) {
      const choice = makeChoice(item);
      choice.append(element("strong", item.name), element("small", item.sector));
      $("case-list").append(choice);
      const option = element("option", item.name);
      option.value = item.id;
      $("case-select").append(option);
    }
    setText("case-count", counts.format(cases.length));
    setText("visibility", imported() ? "本机 Excel" : data.visibility === "private" ? "内部只读" : "公开只读");
    $("file-tools").hidden = original.visibility !== "public";
    $("back-public").hidden = !imported();
    const news = original.newsSnapshot;
    const ts = Date.parse(news?.fetchedAt);
    if (Number.isFinite(ts)) {
      const date = new Intl.DateTimeFormat("zh-CN", {timeZone:"Asia/Shanghai",month:"numeric",day:"numeric",
        hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(ts);
      const note = (news.cached ? "资讯沿用上次快照" : "资讯快照") + " " + date + "（北京时间）";
      setText("news-stamp", note);
      $("mobile-news-stamp").textContent = note;
    }
  }

  function renderCase(item) {
    selected = item;
    selectedStage = null;
    sourcesById = new Map(array(item.sources).map(source => [source.id, source]));
    $("case-select").value = item.id;
    setCurrent($("case-list"), item.id);
    setText("sector", item.sector);
    setText("market", item.market);
    setText("case-status", item.status);
    setText("case-name", item.name);
    setText("asof", data.asOf ? "资料截至 " + data.asOf : "");
    setText("question", item.question || "尚未填写研究问题");
    setText("judgment", item.judgment || "尚未形成判断");
    setText("next-action", item.nextAction || "后续动作待定");
    document.title = imported() ? "本机工作簿 · AI应用面板" : item.name + " · AI应用面板";
    const sectorName = String(item.sector || "").replace(/\s/g, "").toLowerCase();
    const topics = [
      ["ai安全", "security", "AI 安全"], ["ai网络安全", "security", "AI 安全"],
      ["端侧", "edge", "端侧"], ["视频生成", "video", "视频生成"],
      ["大模型", "model", "大模型"], ["ai4s", "ai4s", "AI4S"], ["具身", "embodied", "具身"],
    ];
    const topic = topics.find(([match]) => sectorName.includes(match));
    const link = $("related-news");
    link.href = topic ? newsBase + "?sector=" + topic[1] + "#sectors" : newsBase + "#stream";
    link.textContent = topic ? "查看" + topic[2] + "赛道资讯" : "查看全信源资讯";

    $("stage-nav").replaceChildren();
    array(item.stages).forEach((stage, index) => {
      const choice = makeChoice(item, stage);
      choice.append(element("span", String(index + 1), "stage-number"), element("span", stage.label));
      $("stage-nav").append(choice);
    });
    $("sources-section").open = false;
    $("sources-section").hidden = sourcesById.size === 0;
    setText("source-count", counts.format(sourcesById.size) + " 项");
    $("sources-list").replaceChildren(...Array.from(sourcesById.values(), createSource));
  }

  function renderStage(stage) {
    selectedStage = stage.key;
    setCurrent($("stage-nav"), stage.key);
    setText("stage-name", stage.label);
    const items = array(stage.items);
    setText("stage-summary", stage.summary || (!items.length ? "本环节尚未录入明细。" : ""));
    setText("stage-count", counts.format(items.length) + " 条记录");
    const entries = items.map((item, index) => {
      const entry = element("details", "", "entry");
      const label = item.title || "记录 " + String(index + 1);
      const summary = element("summary");
      summary.append(element("span", label));
      if (item.sheetRef) summary.append(element("small", item.sheetRef, "sheet-ref"));
      entry.append(summary);
      const content = element("div", "", "entry-content");
      if (item.question && item.question !== selected.question && item.question !== label) {
        content.append(element("div", item.question, "entry-question"));
      }
      if (item.text) content.append(element("p", item.text));
      const refs = [...new Set(array(item.sourceIds))].map(id => sourcesById.get(id)).filter(Boolean);
      if (refs.length) {
        const section = element("div", "", "entry-sources");
        const list = element("ul", "", "source-list");
        list.append(...refs.map(createSource));
        section.append(element("h4", "依据"), list);
        content.append(section);
      }
      if (!content.childElementCount) content.append(element("p", "本条暂无补充明细。"));
      entry.append(content);
      entry.open = index === 0;
      return entry;
    });
    $("stage-items").replaceChildren(...entries);
  }

  function showCase(item, stageKey) {
    if (!item) {
      $("project").hidden = true;
      setText("empty-message", "当前没有可展示的研究项目。上方仍可查看六赛道和资讯。");
      $("empty-message").hidden = false;
      return;
    }
    $("empty-message").hidden = true;
    $("project").hidden = false;
    if (item !== selected) renderCase(item);
    const stages = array(item.stages);
    const stage = stages.find(s => s.key === stageKey) || stages.find(s => s.key === "evidence") || stages[0];
    $("stage-panel").hidden = !stage;
    if (stage && stage.key !== selectedStage) renderStage(stage);
  }

  function applyRoute() {
    const hash = currentHash();
    if (hash === "content") return;
    if (isLegacyRoute(hash)) {
      location.replace(newsBase + "#" + hash);
      return;
    }
    const [route, id, stage] = hash.split("/");
    const cases = array(data.cases);
    const requested = route === "project" && !imported() ? cases.find(item => item.id === id) : null;
    showCase(requested || cases[0], requested ? stage : undefined);
  }

  $("case-select").addEventListener("change", event => {
    const item = array(data.cases).find(row => row.id === event.target.value);
    if (!item) return;
    if (imported()) showCase(item);
    else location.hash = caseRoute(item);
  });
  $("open-workbook").addEventListener("click", () => $("workbook-file").click());
  $("workbook-file").addEventListener("change", async event => {
    const file = event.target.files[0];
    event.target.value = "";
    if (!file) return;
    const button = $("open-workbook");
    button.disabled = true;
    setText("file-feedback", "正在本机读取工作簿…");
    try {
      if (!file.name.toLowerCase().endsWith(".xlsx")) throw new Error("请选择 .xlsx 项目工作簿。");
      if (typeof window.readResearchWorkbook !== "function") throw new Error("Excel 读取组件未加载，请重新打开页面。");
      const parsed = await window.readResearchWorkbook(file);
      if (!array(parsed?.cases).length) throw new Error("未找到七模块项目，请核对工作簿格式。");
      data = parsed;
      buildIndex();
      showCase(data.cases[0]);
      setText("file-feedback", "已在本机打开。文件仅在当前页面内读取，关闭页面后清除。");
    } catch (err) {
      setText("file-feedback", "无法打开。" + (err?.message || "请核对是否为七模块项目工作簿。"));
    } finally { button.disabled = false; }
  });
  $("back-public").addEventListener("click", () => {
    data = original;
    selected = null;
    buildIndex();
    setText("file-feedback", "");
    applyRoute();
    $("open-workbook").focus();
  });
  window.addEventListener("hashchange", applyRoute);
  buildIndex();
  if (currentHash() === "content") showCase(array(data.cases)[0]);
  else applyRoute();
})();
