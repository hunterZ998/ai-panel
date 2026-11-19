(() => {
  'use strict';
  const NAME = 'AI应用人机台';
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const list = value => Array.isArray(value) ? value : [];
  const safeUrl = value => { try { const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password ? u.href : ''; } catch { return ''; } };
  const fmt = value => { const t = Date.parse(value); return Number.isFinite(t) ? new Intl.DateTimeFormat('zh-CN', {timeZone:'Asia/Shanghai',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(t) : '未提供'; };
  const MODULES = [
    ['purpose','目的','研究范围与工作主线'],['standards','标准','筛选与验证依据'],
    ['knowledge','知识库','六赛道与全部信源'],['judgment','判断','三知观点与证据'],
    ['strategy','策略','下一步研究安排'],['execution','执行','行动与采集记录'],
    ['review','复盘及优化','检查变化与修订条件']
  ];
  const SECTORS = [['model','大模型'],['video','视频生成'],['ai4s','AI4S'],['embodied','具身'],['edge','端侧'],['security','AI 安全']];
  const ROUTES = [['sectors','六赛道'],['fast','主题快讯'],['home','精选资讯'],['stream','全信源'],['xradar','X 雷达'],['wechat','公众号'],['institutions','机构研究'],['shows','中英文播客'],['tracks','公司与人物'],['ima','IMA 知识库'],['saved','我的收藏'],['sources','信源接入'],['aihot','AI HOT'],['xaccounts','X 账号'],['cn_media','中文媒体'],['intl_media','国际媒体'],['official','公司官网'],['pr','PR 新闻稿'],['discovery','Product Hunt'],['podcast','播客采集源']];
  const descriptors = {
    purpose:['目的','围绕研究问题组织信息，让每次更新服务于同一条工作主线。'],
    standards:['标准','先约定什么值得看、什么足以改变判断，再按同一口径核查。'],
    knowledge:['知识库','保留原文与来源，在广泛收集和严格筛选之间切换。'],
    judgment:['判断','同一条判断持续积累证据，也保留反例与替代解释。'],
    strategy:['策略','把需要验证的判断，转成可确认的下一步研究安排。'],
    execution:['执行','分别查看实际研究行动和后台采集情况。'],
    review:['复盘及优化','对照原来的问题与验证标准，检查哪些证据需要复核。']
  };
  const relationName = {supports:'支持',weakens:'削弱',related:'仅相关',pending:'待核验'};
  const tone = r => r === 'supports' ? 'good' : r === 'weakens' ? 'bad' : r === 'pending' ? 'warn' : 'neutral';
  const tag = (text, style='neutral') => '<span class="hm-tag" data-tone="'+style+'">'+escape(text)+'</span>';
  let archive, bridge, sector='', query='', module='purpose', focusAtom='', executionTab='research', condition='all';
  let rendered=false, renderQueued=false;
  const projectHref = location.protocol==='file:' ? 'https://hunterz998.github.io/ai-panel/projects.html' : /\/share(?:\/index\.html)?\/?$/.test(location.pathname) ? '../projects.html' : './projects.html';
  const moduleHref = (key, atom='') => '#work-'+key+(atom?'?atom='+encodeURIComponent(atom):'');
  function chosenAtoms() { return list(archive?.['sectors.json']?.atoms).filter(a => a.visibility === 'public' && (!sector || a.id===focusAtom || list(a.sectorIds).includes(sector))); }
  function evidence(a) {
    if (bridge?.evidence) return bridge.evidence(a);
    return {evidence:list(a.savedReviews),statusLabel:'已存证据'};
  }
  function reviewed(a) { return list(evidence(a).evidence).filter(e => e.reviewedAt); }
  const sectorLabel = id => SECTORS.find(s => s[0] === id)?.[1] || id;
  function sourceRefs(a) { return list(a.sourceRefs).map(s => escape([s.kind,s.title,s.locator].filter(Boolean).join(' · '))).join('<br>') || '来源位置待补充'; }
  function atomLink(a, label) { return '<a class="hm-link" href="'+moduleHref('judgment',a.id)+'">'+escape(label || a.title)+'</a>'; }
  function external(url, title) { const u=safeUrl(url); return u ? '<a href="'+escape(u)+'" target="_blank" rel="noopener noreferrer">'+escape(title)+'</a>' : '<span>'+escape(title)+'</span>'; }
  function heading(title, right='') { return '<div class="hm-section-heading"><h2>'+escape(title)+'</h2>'+right+'</div>'; }
  function empty(title, message, action='') { return '<div class="hm-empty"><h3>'+escape(title)+'</h3><p>'+escape(message)+'</p>'+action+'</div>'; }
  function snapshotAt() { try { return JSON.parse($('original-share-meta').textContent).generatedAt; } catch { return null; } }
  function snapshotLine() { return '页面发布 '+fmt(snapshotAt())+' · 北京时间'; }
  function frameworkNote() { return '<p class="hm-provenance">结构依据：《人机资源优化及人机台建设》七模块要求及部门工作台 Excel 的整体分析框架。具体研究内容按公开范围展示。</p>'; }

  function sourceRows() {
    const labels = {aihot:'AI HOT',x:'X 收录',wechat:'微信公众号',ima:'IMA 知识库',kr36:'36氪','36kr':'36氪',techcrunch:'TechCrunch',web:'网页信源',pedaily:'投资界',tmtpost:'钛媒体',itjuzi:'IT桔子',ithome:'IT之家',netease:'网易科技',wsj:'华尔街日报',theinformation:'The Information',axios:'Axios',bloomberg:'Bloomberg',menlo:'Menlo Ventures',a16z:'a16z',citrini:'Citrini Research',semianalysis:'SemiAnalysis',openai:'OpenAI',googleai:'Google AI',prnewswire:'美通社',producthunt:'Product Hunt',producthunt_zh:'Product Hunt 中文',latent_space:'Latent Space',shengfm:'科技早知道',pod_latetalk:'晚点聊',pod_sv101:'硅谷101',pod_jun:'张小珺商业访谈录',pod_42:'42章经',pod_20vc:'20VC',pod_a16z:'a16z 播客',pod_pigment:'Pigment Perspectives',pod_lfs:'乱翻书',pod_crossing:'十字路口'};
    const states = {'live':'最近一次采集成功','snapshot':'沿用已存资料','stale':'更新受阻，历史保留','offline':'采集失败','unconfigured':'未配置','unavailable':'暂不可用','partial':'部分覆盖','failed':'失败','error':'失败','disabled':'已停用','expired':'授权失效','auth_expired':'授权失效','pending':'等待回传'};
    const rows=Object.entries(archive?.['feed.json']?.sources || {}).filter(([,s])=>s&&typeof s==='object').map(([id,s])=>({
      id,name:s.name||s.label||labels[id]||id,status:s.status||'unknown',
      label:states[s.status] || '状态待核对',last:s.lastSuccessAt||s.fetchedAt||null,
      attempt:s.checkedAt||s.lastAttemptAt||null,count:typeof s.count==='number'?s.count:null,
      message:s.message||s.error||'',
      warn:!['live','snapshot'].includes(s.status)
    }));
    const ima=rows.find(s=>s.id==='ima');if(ima&&archive?.['library.json']?.status==='unconfigured')Object.assign(ima,{label:'完整资料仅在授权区开放',last:null,count:null,warn:false,private:true});
    const providers=archive?.['radar.json']?.providers||{};
    for(const [id,p] of Object.entries(providers).filter(([,p])=>p?.lastSuccessAt).sort((a,b)=>Date.parse(b[1].lastSuccessAt)-Date.parse(a[1].lastSuccessAt)).slice(0,1))rows.splice(2,0,{id:'radar-'+id,name:'X 雷达 · '+(id==='grokbot'?'GrokBot':id),status:p.status,label:states[p.status]||'状态待核对',last:p.lastSuccessAt,count:null,warn:p.status!=='live'&&p.status!=='ready'});
    const wx=archive?.['discoveries.json'];if(wx)rows.splice(4,0,{id:'wechat-keyword',name:'微信主题词检索',status:wx.status,label:states[wx.status]||'状态待核对',last:wx.lastSuccessAt,count:wx.retainedCount??null,warn:wx.status!=='live'&&wx.status!=='ready'});
    return rows;
  }
  function attentionSources() { return sourceRows().filter(s => !s.private&&(s.warn || !s.last || Date.now()-Date.parse(s.last)>86400000)); }
  function statusSummary() {
    return '<div class="hm-note"><b>更新情况</b><p>页面快照与各来源采集时间分别记录。X、公众号等以各自状态为准。</p><a class="hm-link" href="'+moduleHref('execution')+'?tab=collection">查看采集状态</a></div>';
  }

  function purposePage() {
    const atoms=chosenAtoms();
    const reviews=atoms.flatMap(reviewed);
    const work=[
      ['年度与赛道总览','建立共用的行业认知，再用于具体项目；研究重点覆盖端侧 AI、AI 安全和 AI 新兴应用。','knowledge'],
      ['择市','比较细分方向的需求、商业化与产业变化，明确值得持续跟踪的问题。','knowledge'],
      ['择股','在同一赛道标准下比较公司与产品，保留差异和仍缺少的依据。','judgment'],
      ['择时','把产业变化与资本变化分开观察，记录验证窗口和触发条件。','strategy'],
      ['周度三知与复盘','用新事实检查趋势、规律和逻辑，保留判断改变的原因。','review']
    ];
    return '<div class="hm-intro"><h2>从研究问题开始</h2><p>信息进入知识库，证据关联到判断；需要做什么、实际做了什么、结果如何，分别留下记录。</p></div>'+
      '<nav class="hm-path" aria-label="七模块工作流程">'+MODULES.map((m,i)=>'<a href="'+(m[0]==='knowledge'?'#sectors':moduleHref(m[0]))+'"><span>'+String(i+1).padStart(2,'0')+'</span>'+m[1]+'</a>').join('')+'</nav>'+
      '<div class="hm-split"><section>'+heading('工作主线')+'<div class="hm-focus-list">'+work.map(([name,desc,key])=>'<a class="hm-focus-row" href="'+(key==='knowledge'?'#sectors':moduleHref(key))+'"><strong>'+name+'</strong><p>'+desc+'</p><span aria-hidden="true">↗</span></a>').join('')+'</div></section><aside>'+heading('当前研究范围')+'<div class="hm-panel"><p>六赛道提供广泛的信息覆盖；重点研究在这一基础上继续收敛。</p><div class="hm-route-grid">'+SECTORS.map(([id,label])=>'<a href="#sectors" data-hm-sector-link="'+id+'">'+label+'</a>').join('')+'</div></div>'+statusSummary()+'</aside></div>'+
      '<section>'+heading('正在验证的判断','<a class="hm-link" href="'+moduleHref('judgment')+'">查看全部判断</a>')+
      '<p class="hm-statline">'+atoms.length+' 条公开试点判断 · '+reviews.length+' 条已复核证据'+(sector?' · 当前筛选 '+escape(sectorLabel(sector)):'')+'</p>'+
      (atoms.length?'<div class="hm-focus-list">'+atoms.map(a=>'<div class="hm-focus-row"><div>'+atomLink(a)+'<p>'+escape(a.claim)+'</p></div>'+tag(evidence(a).statusLabel||'待验证')+'</div>').join('')+'</div>':empty('此赛道暂无公开试点判断','可先查看相关资讯；已审核但未公开的内容不在此页展示。','<a class="hm-link" href="#sectors">查看赛道资讯</a>'))+'</section>'+frameworkNote();
  }

  function standardsPage() {
    const rows=[['关注范围','围绕六赛道、持续关注的公司与人物，以及已有研究问题。娱乐、抽奖、无内容回复不进入研究资料。'],['3Q','全面、权威、前沿。保留原发来源和适用范围，同源转载只算一份依据。'],['时间与口径','区分原文发布、资料获取、最后成功更新。比较前核对对象、期间、样本、分母、单位与版本。'],['证据强度','事实、外部观点、内部判断分别记录。媒体报道、公司自述与已核验事实不混用。'],['证伪条件','判断同时写出支持和削弱条件。反对证据照样保留，没有反证不等于已证实。'],['正式变更','正式判断、策略和执行状态的变化须有依据；建议不会自动变成已确认或已执行。']];
    return '<section>'+heading('两种信息入口')+'<div class="hm-table-wrap"><table class="hm-table"><thead><tr><th>入口</th><th>用于什么</th><th>筛选规则</th></tr></thead><tbody><tr><th><a href="#fast">主题快讯</a></th><td>快速发现相关变化</td><td>保留相关产品更新、观点及待核线索；不设互动量门槛，待核内容明确标记。</td></tr><tr><th><a href="#home">精选资讯</a></th><td>集中阅读重要进展</td><td>核对实质新事实、研究相关性和来源；优先近期原发内容，热度不替代证据。</td></tr></tbody></table></div><p class="hm-note">X 快讯告警沿用 500 赞、100 转发、100 回复或 50 引用任一门槛，并通过内容审查。该门槛不用于屏蔽主题快讯，也不排除低互动的重要事实。</p></section>'+
      '<section>'+heading('共用验证标准')+'<dl class="hm-rule-list">'+rows.map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+v+'</dd></div>').join('')+'</dl></section>'+
      '<div class="hm-split"><section class="hm-panel"><h3>分析层级</h3><p>宏观、中观、微观分别看环境、行业和具体对象。</p><h3>时间跨度</h3><p>长期、中期、短期另行记录，不用宏中微替代时间跨度。</p></section><section class="hm-panel"><h3>来源冲突时</h3><p>先比对对象、期间、口径和版本，再回到原文。仍有矛盾就并列保留，不能取平均或按转载次数判断真假。</p><a class="hm-link" href="'+moduleHref('review')+'">查看待复核证据</a></section></div>'+frameworkNote();
  }

  function evidenceRow(e) {
    return '<li class="hm-evidence">'+tag(relationName[e.relation]||'待核验',tone(e.relation))+'<div>'+external(e.url,e.title||'查看原文')+'<small>'+escape([e.source,fmt(e.at),e.reviewedAt?'复核 '+fmt(e.reviewedAt):'自动关联，待复核'].filter(Boolean).join(' · '))+'</small><p>'+escape(e.reason||'仅提示相关性，尚不足以改变判断。')+'</p>'+(e.excerpt?'<blockquote>'+escape(e.excerpt)+'</blockquote>':'')+list(e.corroboratingUrls).map((u,i)=>external(u,'对照来源 '+(i+1))).join(' · ')+'</div></li>';
  }
  function atomCard(a) {
    const result=evidence(a), checked=list(result.evidence).filter(e=>e.reviewedAt), leads=list(result.evidence).filter(e=>!e.reviewedAt);
    const counts=Object.entries(relationName).map(([k,v])=>[v,list(result.evidence).filter(e=>e.relation===k).length]);
    return '<article class="hm-atom" id="hm-atom-'+escape(a.id)+'"><header><span>'+escape(list(a.sectorIds).map(sectorLabel).join(' / '))+'</span>'+tag(result.statusLabel||'待验证')+'</header><h2>'+escape(a.title)+'</h2><p>'+escape(a.claim)+'</p><div class="hm-provenance">'+sourceRefs(a)+'<br>判断材料日期 '+escape(a.asOf||'未提供')+'</div><div class="hm-statline">'+counts.filter(([,n])=>n).map(([v,n])=>v+' '+n).join(' · ')+'</div><details '+(focusAtom===a.id?'open':'')+'><summary>查看判定条件与证据</summary><div class="hm-conditions"><div class="hm-condition"><h3>什么会支持</h3><p>'+escape(a.supportsWhen)+'</p></div><div class="hm-condition"><h3>什么会削弱</h3><p>'+escape(a.weakensWhen)+'</p></div></div>'+heading('已复核的公开证据')+(checked.length?'<ul class="hm-evidence-list">'+checked.map(evidenceRow).join('')+'</ul>':'<p class="hm-note">暂未公开复核证据。</p>')+(leads.length?'<details><summary>相关资讯待核查 · '+leads.length+'</summary><ul class="hm-evidence-list">'+leads.map(evidenceRow).join('')+'</ul></details>':'')+'</details><div class="hm-actions"><a class="hm-link" href="'+moduleHref('strategy',a.id)+'">查看下一步核查</a><a class="hm-link" href="'+moduleHref('review',a.id)+'">进入复盘</a><a class="hm-link" href="#sectors" data-hm-sector-link="'+escape(a.sectorIds?.[0]||'')+'">查看相关赛道</a></div></article>';
  }
  function judgmentPage() {
    const atoms=chosenAtoms().filter(a=>(!focusAtom||a.id===focusAtom)&&(!query||(a.title+' '+a.claim).toLowerCase().includes(query.toLowerCase()))&&(condition!=='weakens'||reviewed(a).some(e=>e.relation==='weakens')));
    return '<div class="hm-filter"><label>查找判断 <input id="hm-judgment-search" type="search" placeholder="输入研究问题或关键词" value="'+escape(query)+'"></label><label>证据状态 <select id="hm-condition"><option value="all" '+(condition==='all'?'selected':'')+'>全部判断</option><option value="weakens" '+(condition==='weakens'?'selected':'')+'>存在削弱证据</option></select></label>'+(focusAtom?'<a href="'+moduleHref('judgment')+'" class="hm-link">返回全部判断</a>':'')+'</div><p class="hm-note">当前保留 '+list(archive['sectors.json'].atoms).length+' 条公开三知拆解试点。一条判断可关联多个项目；同一批新资讯持续回到这条判断，正式改判另留记录。</p>'+(atoms.length?atoms.map(atomCard).join(''):empty('没有匹配的公开判断','调整赛道或关键词，或先到知识库查看该方向的资料。','<a class="hm-link" href="#sectors">查看六赛道</a>'));
  }
  function strategyPage() {
    const atoms=chosenAtoms().filter(a=>!focusAtom||a.id===focusAtom);
    return empty('暂无已公开的正式策略','以下是根据现有判断与检验条件整理的核查建议，尚未确认为执行计划。')+
      heading('待确认的研究安排','<a class="hm-link" href="'+moduleHref('judgment')+'">回到判断</a>')+
      (atoms.length?atoms.map(a=>{
        const sectorNote=list(archive['sectors.json'].items).find(i=>list(a.sectorIds).includes(i.sector));
        return '<article class="hm-atom"><header>'+tag('核查建议 · 待确认','warn')+'<span>'+escape(list(a.sectorIds).map(sectorLabel).join(' / '))+'</span></header><h2>'+escape(a.title)+'</h2><p>'+escape(sectorNote?.verify||'按原判断的支持与削弱条件，补充可比较的原始材料。')+'</p><div class="hm-conditions"><div><h3>继续核查的依据</h3><p>'+escape(a.supportsWhen)+'</p></div><div><h3>需要复核原判断的情形</h3><p>'+escape(a.weakensWhen)+'</p></div></div><p class="hm-note">负责人、时间和具体行动待确认；当前没有对应的已完成业务记录。</p><div class="hm-actions">'+atomLink(a,'查看关联判断与证据')+'<a class="hm-link" href="'+moduleHref('execution')+'">查看执行记录</a></div></article>';
      }).join(''):empty('此范围暂无核查建议','先形成有来源和检验条件的判断，再关联研究安排。'));
  }
  function collectionPage() {
    const rows=sourceRows();
    return '<p class="hm-note">以下是采集状态，不代表调研、投资或交易已经执行。页面发布 '+fmt(snapshotAt())+'；各来源最后成功时间见表。</p><div class="hm-table-wrap"><table class="hm-table"><thead><tr><th>信息源</th><th>当前状态</th><th>最后成功时间</th><th>已存条数</th></tr></thead><tbody>'+rows.map(s=>'<tr><th>'+escape(s.name)+'</th><td>'+tag(s.label,s.warn?'warn':'neutral')+(s.last&&Date.now()-Date.parse(s.last)>86400000?'<small>距此记录已超过 24 小时</small>':'')+'</td><td>'+escape(fmt(s.last))+'</td><td>'+(s.count===null?'未提供':s.count)+'</td></tr>').join('')+'</tbody></table></div><div class="hm-actions"><a class="hm-link" href="#sources">查看各信源说明</a><a class="hm-link" href="#xradar">查看 X 原帖与报告</a><a class="hm-link" href="#wechat">查看公众号收录</a></div>';
  }
  function executionPage() {
    return '<div class="hm-actions" role="group" aria-label="执行记录类型"><button class="hm-chip" data-hm-execution="research" aria-pressed="'+(executionTab==='research')+'">研究执行</button><button class="hm-chip" data-hm-execution="collection" aria-pressed="'+(executionTab==='collection')+'">后台采集</button></div>'+(executionTab==='collection'?collectionPage():empty('暂无已公开的研究执行记录','计划需要关联实际行动、结果和凭据后，才进入执行记录。当前公开资料没有提供这些业务凭据。','<div class="hm-actions"><a class="hm-link" href="'+moduleHref('strategy')+'">查看待确认研究安排</a><button class="hm-link" data-hm-execution="collection">查看真实采集状态</button></div>')+'<dl class="hm-rule-list"><div><dt>执行记录</dt><dd>关联策略和判断，记录行动时间、实际结果及出处，保留未完成和偏差。</dd></div><div><dt>模拟与实绩</dt><dd>情景推演、计划动作和实际完成分别标识；当前不展示没有依据的仓位、收益或完成率。</dd></div></dl>');
  }
  function reviewPage() {
    const atoms=chosenAtoms().filter(a=>!focusAtom||a.id===focusAtom);
    const timeline=atoms.flatMap(a=>reviewed(a).map(e=>({...e,atom:a}))).sort((a,b)=>(Date.parse(b.reviewedAt)||0)-(Date.parse(a.reviewedAt)||0));
    return '<div class="hm-intro"><h2>回到原问题，检查改判条件</h2><p>证据复核不自动等于改判。这里展示已公开的复核过程；未公开正式版本变更和到期样本时，不计算判断胜率。</p></div>'+
      '<section>'+heading('需要持续复验的条件')+(atoms.length?atoms.map(a=>'<article class="hm-panel">'+atomLink(a)+'<div class="hm-conditions"><div><h3>原验证标准</h3><p>'+escape(a.supportsWhen)+'</p></div><div><h3>反例与改判条件</h3><p>'+escape(a.weakensWhen)+'</p></div></div><p class="hm-note">当前证据：'+escape(evidence(a).statusLabel||'待验证')+'。尚无已公开的正式改判版本记录。</p><div class="hm-actions"><a href="'+moduleHref('strategy',a.id)+'" class="hm-link">返回核查安排</a><a href="'+moduleHref('standards')+'" class="hm-link">核对共用标准</a></div></article>').join(''):empty('此范围暂无公开复盘对象','先在判断页确认要持续检验的问题。'))+'</section>'+
      '<section>'+heading('公开证据复核记录')+(timeline.length?'<ol class="hm-timeline">'+timeline.map(e=>'<li class="hm-timeline-item"><time>'+fmt(e.reviewedAt)+'</time><div>'+tag(relationName[e.relation]||'待核验',tone(e.relation))+' '+atomLink(e.atom)+'<h3>'+external(e.url,e.title)+'</h3><p>'+escape(e.reason)+'</p></div></li>').join('')+'</ol>':empty('暂无复核记录','当前范围尚未公开有时间和原文依据的复核结果。'))+'</section>'+
      '<section>'+heading('信息覆盖也需要复盘')+'<p>'+attentionSources().length+' 个来源存在待配置、更新受阻、没有成功时间或最近记录超过 24 小时的情况。先核对这些缺口，再判断是否“没有新信息”。</p><a class="hm-link" href="'+moduleHref('execution')+'?tab=collection">检查来源更新情况</a></section>';
  }

  function route() {
    const raw=location.hash.slice(1), [path,param='']=raw.split('?');
    focusAtom=new URLSearchParams(param).get('atom')||'';
    if(focusAtom){query='';condition='all';}
    if(path.startsWith('work-')) {
      const key=path.slice(5);module=MODULES.some(m=>m[0]===key)?key:'purpose';
      if(module==='knowledge')module='knowledge';
      if(module==='execution'&&new URLSearchParams(param).get('tab')==='collection')executionTab='collection';
    } else module=raw?'knowledge':'purpose';
    if(!raw)history.replaceState(null,'',location.pathname+location.search+moduleHref('purpose'));
    if(module==='knowledge'&&path==='work-knowledge'){location.hash='sectors';return;}
    const explicit=new URLSearchParams(location.search).get('sector');
    sector=(SECTORS.some(s=>s[0]===explicit)||(module==='knowledge'&&explicit==='other'))?explicit:'';
    render();
    if(module==='knowledge'&&location.hash==='#sectors')bridge?.setSector?.(sector);
  }
  function setSector(value, syncLegacy=true) {
    sector=(SECTORS.some(s=>s[0]===value)||(module==='knowledge'&&value==='other'))?value:'';
    const u=new URL(location.href);if(sector)u.searchParams.set('sector',sector);else u.searchParams.delete('sector');
    history.replaceState(null,'',u.href);
    if(module==='knowledge'&&syncLegacy)bridge?.setSector?.(sector);
    render();
  }
  function render() {
    if(!rendered||!archive)return;
    document.body.dataset.hmModule=module;
    document.querySelectorAll('.hm-module-nav a[data-hm-module]').forEach(a=>{const on=a.dataset.hmModule===module;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    const description=descriptors[module]||descriptors.purpose;
    $('hm-heading').textContent=description[0];$('hm-description').textContent=description[1];
    $('hm-breadcrumb').textContent=NAME+' / '+description[0];
    $('hm-snapshot').textContent=snapshotLine();
    const knowledge=module==='knowledge';
    document.querySelector('.skip')?.setAttribute('href',knowledge?'#main':'#hm-content');
    $('hm-legacy').hidden=!knowledge;$('hm-content').hidden=knowledge;$('hm-knowledge-nav').hidden=!knowledge;$('hm-legacy-search').hidden=!knowledge;
    $('hm-scope').hidden=!['purpose','judgment','strategy','review'].includes(module)&&!(knowledge&&location.hash==='#sectors');
    $('hm-scope').innerHTML=[['','全部赛道'],...SECTORS,...(sector==='other'?[['other','待归类']]:[])].map(([id,name])=>'<button class="hm-chip" data-hm-sector="'+id+'" aria-pressed="'+(sector===id)+'">'+name+'</button>').join('');
    document.querySelectorAll('[data-hm-route]').forEach(a=>{const active=a.dataset.hmRoute===location.hash.slice(1);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    if(!knowledge)$('hm-content').innerHTML=({purpose:purposePage,standards:standardsPage,judgment:judgmentPage,strategy:strategyPage,execution:executionPage,review:reviewPage}[module]||purposePage)();
    document.title=(knowledge?ROUTES.find(r=>r[0]===location.hash.slice(1))?.[1]||'知识库':description[0])+' · '+NAME;
  }
  function menu(open) {
    const mobile=matchMedia('(max-width:900px)').matches;open=mobile&&open;
    document.body.classList.toggle('hm-menu-open',open);$('hm-menu').setAttribute('aria-expanded',String(open));$('hm-menu-scrim').hidden=!open;
    $('hm-sidebar').inert=mobile&&!open;document.querySelector('.hm-main').inert=open;
    if(open)requestAnimationFrame(()=>{if(document.body.classList.contains('hm-menu-open'))$('hm-sidebar').querySelector('a').focus();});
  }
  async function init() {
    archive=await window.__originalShareReady;bridge=window.__humanWorkbenchBridge;
    const legacy=document.querySelector('.app-shell');if(!legacy)throw Error('Legacy research view missing');
    const shell=document.createElement('div');shell.id='human-workbench';shell.className='hm-shell';
    shell.innerHTML='<aside class="hm-sidebar" id="hm-sidebar"><a class="hm-brand" href="'+moduleHref('purpose')+'"><span class="hm-brand-mark" aria-hidden="true">AI</span><span>'+NAME+'<small>研究与证据工作台</small></span></a><nav class="hm-module-nav" aria-label="七模块">'+MODULES.map((m,i)=>'<a href="'+(m[0]==='knowledge'?'#sectors':moduleHref(m[0]))+'" data-hm-module="'+m[0]+'"><span class="hm-step">'+String(i+1).padStart(2,'0')+'</span><span class="hm-nav-label">'+m[1]+'<small class="hm-nav-meta">'+m[2]+'</small></span></a>').join('')+'</nav><div class="hm-sidebar-foot"><span class="hm-visibility">公开只读</span><p>查看、筛选与本机收藏，不修改共享内容。</p><a href="'+projectHref+'">项目资料与本机 Excel</a></div></aside><button class="hm-menu-scrim" id="hm-menu-scrim" aria-label="关闭七模块导航" hidden></button><div class="hm-main"><header class="hm-topbar"><button class="hm-menu" id="hm-menu" aria-label="打开七模块导航" aria-controls="hm-sidebar" aria-expanded="false">☰</button><span class="hm-breadcrumb" id="hm-breadcrumb"></span><div class="hm-top-actions"><span id="hm-snapshot"></span><button class="hm-refresh" id="hm-refresh">刷新页面</button></div></header><section id="hm-context"><div class="hm-context-title"><h1 id="hm-heading"></h1><p id="hm-description" class="hm-subtitle"></p></div><div id="hm-scope" class="hm-scope" role="group" aria-label="按赛道筛选"></div><nav id="hm-knowledge-nav" class="hm-knowledge-nav" aria-label="知识库内容入口">'+ROUTES.slice(0,8).map(([id,name])=>'<a href="#'+id+'" data-hm-route="'+id+'">'+name+'</a>').join('')+'<details class="hm-more-links"><summary>全部入口</summary><div>'+ROUTES.slice(8).map(([id,name])=>'<a href="#'+id+'" data-hm-route="'+id+'">'+name+'</a>').join('')+'</div></details></nav><div id="hm-legacy-search" class="hm-legacy-search"></div></section><main id="hm-content" class="hm-content" tabindex="-1"></main><div id="hm-legacy" class="hm-legacy"></div></div>';
    legacy.before(shell);$('hm-legacy').append(legacy);
    const search=$('search')?.closest('label');if(search)$('hm-legacy-search').append(search);
    document.body.classList.add('hm-active');
    document.querySelector('.skip')?.setAttribute('href','#hm-content');
    rendered=true;route();menu(false);
    matchMedia('(max-width:900px)').addEventListener('change',()=>menu(false));
    if(module==='knowledge'&&sector)bridge?.setSector?.(sector);
    window.addEventListener('hashchange',()=>{menu(false);document.querySelectorAll('.hm-more-links[open]').forEach(d=>d.open=false);route();window.scrollTo({top:0,behavior:'instant'});});
    window.addEventListener('human-workbench-source-rendered',()=>{if(renderQueued)return;renderQueued=true;queueMicrotask(()=>{renderQueued=false;render();});});
    document.addEventListener('click',event=>{
      const oldSector=event.target.closest('[data-sector]');if(oldSector&&module==='knowledge'){setSector(bridge?.sector?.()||'',false);return;}
      const s=event.target.closest('[data-hm-sector]');if(s){setSector(s.dataset.hmSector);return;}
      const target=event.target.closest('[data-hm-sector-link]');if(target){setSector(target.dataset.hmSectorLink);setTimeout(()=>bridge?.setSector?.(sector),0);return;}
      const exec=event.target.closest('[data-hm-execution]');if(exec){executionTab=exec.dataset.hmExecution;render();return;}
      if(event.target.closest('#hm-menu'))menu(!document.body.classList.contains('hm-menu-open'));
      if(event.target.closest('#hm-menu-scrim'))menu(false);
      if(event.target.closest('#hm-refresh'))location.reload();
      const moduleLink=event.target.closest('.hm-module-nav a[data-hm-module]');if(moduleLink?.hash===location.hash)menu(false);
    });
    document.addEventListener('input',event=>{if(event.target.id==='hm-judgment-search'){const at=event.target.selectionStart;query=event.target.value;render();$('hm-judgment-search').focus();$('hm-judgment-search').setSelectionRange(at,at);}});
    document.addEventListener('change',event=>{if(event.target.id==='hm-condition'){condition=event.target.value;render();$('hm-condition').focus();}});
    document.addEventListener('keydown',event=>{
      if(!document.body.classList.contains('hm-menu-open'))return;
      if(event.key==='Escape'){menu(false);$('hm-menu').focus();}
      if(event.key==='Tab'){
        const links=[...$('hm-sidebar').querySelectorAll('a[href],button:not([disabled])')];
        const first=links[0],last=links.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      }
    });
    window.__humanWorkbench={getState:()=>({module,sector,focusAtom,executionTab,readonly:true}),render};
  }
  init().catch(error=>{console.error('Human workbench:',error);const p=document.createElement('p');p.className='hm-note';p.setAttribute('role','alert');p.textContent='七模块视图暂未载入，下方原资讯入口仍可使用。';document.querySelector('.app-shell')?.before(p);});
})();
