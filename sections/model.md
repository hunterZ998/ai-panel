# 大模型

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 4 页

## 赛道研究

**用完成一次任务的总成本比较模型**　模型按能力和价格分档后，高频应用的毛利取决于实际调用次数、重试和成功率。较低的 Token 单价只有在交付质量相当时才有比较意义。

验证　在同一任务集上记录成功率、重试次数和每次成功的成本。

出处　AI策略组-本周三知-20261101.docx，第 16 段

**便宜的模型，完成一项合格任务也更便宜吗？**　周报判断，模型竞争正转向每项成功任务的成本。两个模型即使每百万 Token 的报价相近，完成同一任务所需的输出长度、调用次数和重试也可能让实际账单拉开。

出处　AI策略组-本周三知-20261101.docx · 正文第16段

- 支持 · [MathArena 11 月 13 日新增评测：两个基础单价相同的模型，每题账单相差约 14 倍](<https://matharena.ai/models/gemini_gemini_4_carbon>) · 10 月 BrokenArXiv 同题组中，Carbon 每题 18.06 美元、得分 82.72%，Sol 为 1.30 美元、80.25%。两者列示基础输入/输出价同为每百万 Token 2/10 美元。相近得分下，单价无法区分实际成本；两者推理配置、执行框架不同，且不含人工返工，不能直接当企业工单成本。

- 相关 · [千问公布 Work360 任务成本与用量对照](<https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max>) · 厂商同时报告用量和平均任务成本，印证可测量的成本项。没有同一验收标准下的失败、重试与返工总账，尚不能判定单位成功成本排序发生变化。

### 世界动作模型从伙伴测试走向开放适配

Runway公开Praxis-1权重及推理、微调代码，采用Apache 2.0。

**判断**　若模型可跨本体迁移且适配成本下降，竞争优势可能更多落在真实数据、控制接口和部署反馈。

**验证**　比较跨本体任务成功率、适配数据量和工程时长，并记录推理硬件、控制延迟、人工接管及长时间运行失败。

[Runway Praxis-1公开发布](<https://runway.com/news/company-news/praxis-1-is-now-available>) · [The Embodiment Gap in Robot Foundation Models](<https://arxiv.org/html/2608.18433>)

### 千问 4 Max 的任务成本降幅能否带进业务预算？

阿里在自有 Work360 评测上报告，相比上代，High 推理档消耗的 Token 少了 35%，平均每项任务成本下降约 60%。独立测试方 Spring Prompt 在商品文案测试中测得，千问 4 Max 有 39.3% 可稳定直接发布，定价相近的 GPT-6.1 Terra 为 64.3%。

**判断**　模型选型应按具体交付物分别核算每份合格产出的成本。生成一份文案更便宜，只有在修改和重试没有吃掉节省时，才会降低交付成本。

**验证**　固定商品、合规规则和验收人，对每个模型重复跑相同简报；计入失败调用及编辑工时，再比较每份可上线文案的总成本。

[阿里云发布说明与 Work360 结果](<https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max>) · [Spring Prompt 独立商品文案等任务评测](<https://springprompt.com/blog/qwen4-max-review>)

## 相关资讯 · 143 条

- [Microsoft to Let Customers Customize Its AI Models’ ‘Weights’](<https://www.theinformation.com/briefings/microsoft-let-customers-customize-ai-models-weights>)  
  The Information · 2026-11-18 03:40

- [ASUS Showcases Full-Stack AI Infrastructure at SC26, Featuring Intel and AMD Platforms](<https://www.prnewswire.com/news-releases/asus-showcases-full-stack-ai-infrastructure-at-sc26-featuring-intel-and-amd-platforms-302942744.html>)  
  Expanded portfolio delivers flexible AI and HPC solutions from data center to edge KEY POINTS Enterprise compute choi…  
  PR Newswire · 2026-11-18 03:39

- [Knotch Launches Ace for Agents to Help Brands Compete in the Age of AI Search &amp; Personal Agents](<https://www.prnewswire.com/news-releases/knotch-launches-ace-for-agents-to-help-brands-compete-in-the-age-of-ai-search--personal-agents-302942739.html>)  
  A new end-to-end solution for LLM visibility, GEO/AEO and personal Agent communication, as Scott Brinker predicts tra…  
  PR Newswire · 2026-11-18 03:36

- [Anthropic IPO Highlights AI’s Private Market Wealth](<https://www.bloomberg.com/news/videos/2026-11-17/anthropic-ipo-highlights-ai-s-private-market-wealth-video>)  
  Bloomberg · 2026-11-18 03:05

- [/U P D A T E/ - Vertiv Holdings Co/](<https://www.prnewswire.com/news-releases/vertiv-advances-800-vdc-power-architectures-to-support-growing-ai-data-center-demands-302942192.html>)  
  In the news release, Vertiv Advances 800 VDC Power Architectures to Support Growing AI Data Center Demands, issued 17…  
  PR Newswire · 2026-11-18 02:53

- [微软推出 MAI Licensed Weights：可在自有 Azure 环境部署定制前沿模型](<https://microsoft.ai/news/introducing-mai-licensed-weights/>)  
  微软发布 MAI Licensed Weights，允许企业在自有 Azure 环境中部署并定制微软前沿 AI 模型，数据和适配成果归企业所有，微软仅在明确同意下用于训练。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:17

- [决策模型用量激增，TechCrunch 探讨定制化是否成为下一个竞争前沿](<https://techcrunch.com/2026/11/17/as-decision-model-use-skyrockets-is-customization-is-the-next-frontier/>)  
  TechCrunch 报道，10 月 Vercel 的 AI 模型路由上超过四分之一的请求流向了决策模型，这类不产出 token、专用于在预设选项间快速判断的 LLM 诞生仅一个月。  
  TechCrunch：AI（RSS） · 2026-11-18 02:10

- [Introducing GPT-6.2 Astra and Sol](<https://openai.com/index/introducing-gpt-6-2-astra-sol>)  
  Introducing GPT‑6.2 Astra and Sol, with better professional outputs, coding, computer use, and efficiency at lower co…  
  OpenAI · 2026-11-18 01:45

- [Vals研究称部分前沿AI模型可被游戏话术诱导标记潜在打击目标](<https://techcrunch.com/2026/11/17/ai-models-can-be-tricked-into-identifying-civilians-as-military-targets-by-telling-them-its-a-game/>)  
  旧金山AI评测初创公司Vals发布报告称，其利用模拟场景及生成与真实图像测试多家前沿AI模型在无人机和卫星图像中标记潜在目标的行为，发现部分模型频繁标记包括平民和投降士兵在内的目标；当模型拒绝时，研究人员以“这是游戏”的话术诱导其配合，且相关请求未被安全分类器拦截。Anthropic与OpenAI均回应称此类行为违反其政策，并已或正在加强防护与执法措施。报告同时指出，延迟和机载算力有限等技术限制使通用AI模型难以直接用于实时无人机目标识别，更现实的风险是模型被用于大规模标注战场影像以生成训练数据。  
  TechCrunch：AI（RSS） · 2026-11-18 01:20

- [Anthropic Plans to Raise IPO Price After Strong Demand](<https://www.wsj.com/finance/anthropic-plans-to-raise-ipo-price-after-strong-demand-1a6b0af1?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-18 01:02

- [Gemini 向美国等六国用户免费开放任务功能，可打电话、付款并接入 60 多款应用](<https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/>)  
  Google 宣布 Gemini 任务功能免费向美、日、韩、加、澳、印数亿用户推出，基于新的 Gemini 4 Hydrogen 模型，可自动打电话预约、查询账单、购物下单和管理日程。  
  Google Blog：AI（RSS） · 2026-11-18 01:00

- [OpenAI 推出 GPT-6 Astra 和 GPT-6 Luna 医疗行政智能体](<https://the-decoder.com/ai-agents-are-starting-to-fill-out-medical-forms-and-file-insurance-requests-in-place-of-human-staff/>)  
  OpenAI 发布面向医疗行政场景的 computer-use 智能体 GPT-6 Astra 和 GPT-6 Luna，可操作电子健康记录和保险门户完成填表、预授权等任务，无需 API。  
  The Decoder：AI News（RSS） · 2026-11-18 00:55

- [Microsoft Research 播客探讨 AI 如何改变医疗与生物科学的未来](<https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/>)  
  Microsoft Research 播客《The Shape of Things to Come》中，Doug Burger 与 Eric Horvitz、Eric Topol、Ava Amini 对谈 AI 在医疗与生物科学中的应用，涵盖序贯诊断基准、医学影像潜力、全患者模型、虚拟细胞与生物基础模型等话题。  
  Microsoft Research 博客（RSS） · 2026-11-18 00:52

- [美国拟收紧远程算力出口管制，路透社揭示中国模型蒸馏产业应对芯片短缺](<https://the-decoder.com/the-us-wants-to-block-china-from-renting-ai-power-abroad-but-china-already-built-a-parallel-supply-chain-from-us-ai-output/>)  
  美国商务部工业与安全局（BIS）发布临时规则，将远程访问算力纳入出口管制，要求新加坡、马来西亚、泰国、印度尼西亚和巴西等地的数据中心运营商在采购英伟达等美国厂商的先进AI芯片时逐案申请许可。与此同时，路透社调查显示，中国开发者通过模型蒸馏技术，从美国领先模型中提取答案、代码和解题方案，用于训练更小、成本更低的本地模型，以缓解高端硬件短缺。  
  The Decoder：AI News（RSS） · 2026-11-18 00:47

- [Pragmatic Engineer 解读软件工程师的推理工程：从前沿实验室 API 迁移到开源模型](<https://newsletter.pragmaticengineer.com/p/inference-engineering-for-software-engineers>)  
  Pragmatic Engineer 访谈 Modal、Fireworks AI 和 Baseten 三家推理供应商，讲解软件工程师如何从前沿实验室 API 迁移到开源模型以控制成本。  
  Pragmatic Engineer（RSS） · 2026-11-18 00:11

- [Anthropic Expected to Price Above $1.4 Trillion Valuation](<https://www.theinformation.com/briefings/anthropic-expected-price-1-4-trillion-valuation>)  
  The Information · 2026-11-17 23:52

- [生数 Motubrain 2.0 收官首个物理 AI 全程公开训练直播](<https://mp.weixin.qq.com/s/BCQg04JuaCkzyCJ5wmgTPw>)  
  生数宣布 Motubrain 物理AI 25天全程公开训练直播收官，完成从预训练、后训练到 Agent 与 RSI 探索的阶段验证。20B 参数模型使用 250 万小时多源数据（含 200 万小时互联网视频、约 50 万小时具身数据），累计超 1 万次真机任务测试，在 RoboCasa365、EBench、LIBERO-Plus 等 6 项 Benchmark 上位列前茅。  
  公众号：生数科技（Vidu·视频） · 2026-11-17 23:10

- [物理学家如何看待AI冲击：从Suvrat Raju的TheoPhysEval基准被饱和谈起](<https://www.understandingai.org/p/i-spoke-to-seven-physics-experts>)  
  Understanding AI采访Suvrat Raju等七位理论物理学家，探讨AI对理论物理的影响。Raju构建的TheoPhysEval基准未发布即被饱和，GPT-6 Astra以平均不到3美元的计算成本答对50题中的49题；arXiv hep-th分类今年1至10月投稿比去年同期多约30%，远超此前最高8%的年增幅。  
  Timothy B. Lee：Understanding AI（RSS） · 2026-11-17 22:51

- [Cerebral Valley AI 峰会精华：算力成本、开源权重模型与 Nvidia 变局](<https://www.newcomer.co/p/top-takes-from-cvai-2026>)  
  Newcomer 梳理了上周 Cerebral Valley AI 峰会的核心观点，Databricks 的 Ali Ghodsi、Palo Alto Networks 的 Nikesh Arora 与 General Catalyst 的 Hemant Taneja 等嘉宾围绕算力成本展开讨论。  
  Newcomer 新闻长文（RSS） · 2026-11-17 22:33

- [NVIDIA Ian Buck 在 SC26 开幕：发布 Nemotron for Science、Rubin HPC GPU 与 Vera CPU 平台](<https://blogs.nvidia.com/blog/ian-buck-sc26/>)  
  NVIDIA 的 Ian Buck 在 SC26 特别演讲中发布面向科学智能体的 Nemotron for Science 工具包，将 Nemotron 3.5 Super VL 开放模型与新的开放化学数据集及后训练配方结合，可在 DGX Spark 或本地超算上运行。  
  NVIDIA Blog（RSS） · 2026-11-17 22:00

- [AI巨头抢购发电机，能源正在成为AI竞争的新变量](<https://36kr.com/p/4073687278294145?f=rss>)  
  “算力的尽头是电力”，这句话正在成为大模型时代的铁律。AI巨头们已经从早期的抢GPU、抢算力，演变成了如今的抢发电机。 近期，Anthropic豪掷34亿美元买下1.7吉瓦燃气发电产能的举动，引发了科技圈的广泛关注。 这种跳过中间环节、直接  
  36氪 · 2026-11-17 21:34

- [实测能省7000美元的 “AI嘴替”，难怪国内大厂坐不住了](<https://36kr.com/p/4073670187226760?f=rss>)  
  临近上市的Anthropic，封起号来更加毫不手软了。 11月10日A社正式启动IPO路演，11月12日新版使用政策紧跟着生效，进一步明确了受支持国家与地区的使用限制， 又有一大批账号的订阅费用，成了Anthropic上市的养料 。 钱交了  
  36氪 · 2026-11-17 21:31

- [大模型发力动态输出调度策略，我国快递业务量已连续两个月超 170 亿件](<https://www.ithome.com/1/028/524.htm>)  
  IT之家 11 月 17 日消息，据央视新闻今日报道，国家邮政局数据显示， 我国快递业务量已连续两个月超过 170 亿件 。 报道提到， 10 月，快递行业紧扣电商大促等寄递需求 ，构建产销运协同一体化服务链路，强化运力调配与资源投入…  
  IT之家 · 2026-11-17 21:00

- [当 AI 生成数据成为明天的基准真相](<https://www.oreilly.com/radar/when-ai-generated-data-becomes-tomorrows-ground-truth/>)  
  O'Reilly Radar 文章剖析 AI 智能体生成的结论如何被企业系统当作事实沿用：供应商审核智能体误读证书范围后，记录虽被人工更正，仪表盘、项目报告与采购决策仍沿用旧结论。文章指出，结论在流转中逐层丢失“由 AI 生成”的上下文，还可能回流为微调数据与评测集，被下一个模型当作基准真相学习。  
  O'Reilly Radar（热点 RSS） · 2026-11-17 19:54

- [米哈游公布通用视觉语言动作基础模型 Gamer，可自主游玩《崩坏：星穹铁道》等游戏](<https://www.ithome.com/1/028/503.htm>)  
  IT之家 11 月 17 日消息，米哈游旗下《崩坏》系列 AI 研发团队现已公布通用视觉语言动作基础模型“Gamer”。该模型能够模拟真人操作方式自主游玩 3D 和 2D 游戏。 根据研究论文及项目页面公开的信息，Gamer 无需读取…  
  IT之家 · 2026-11-17 19:26

- [ChinaTalk 访谈解读美国商务部132页出口管制新规](<https://www.chinatalk.media/p/bis-finally-takes-a-stand>)  
  ChinaTalk 播客邀请前美国国家安全委员会官员 Chris McGuire 和 Julian Gewirtz 解读美国商务部发布的132页出口管制新规。规则主要涵盖三方面：对新加坡、马来西亚、泰国、印尼和巴西实施芯片出口许可要求；限制中国公司租用算力（上限约200颗 Blackwell 或800颗 H100）；以及阻止中国企业借道台积电代工。访谈还讨论了规则执行力度、美国境内算力租用漏洞及对 AI 供应链的影响。  
  ChinaTalk（RSS） · 2026-11-17 19:03

- [反超谷歌王牌模型，决策新王拿下全球榜首，全尺寸开源](<https://36kr.com/p/4073723331777415?f=rss>)  
  硅谷最卷的新赛道，刚刚杀出了一位开源新王！ 最近，即将敲钟的Anthropic在IPO材料中曝出天价算力缺口，给狂卷参数的AI行业当头浇下一盆冷水。 通用大模型虽在编程、数学上大杀四方，可一旦真替人干活，算力账单就成了无底洞。 比生成文本更  
  36氪 · 2026-11-17 18:54

- [豆包接入第三方模型，这波更新先别急着夸](<https://36kr.com/p/4073424632304768?f=rss>)  
  11月12日，字节跳动旗下办公智能体产品豆包工作宣布完成产品更新，在原有豆包2.1 Lite和豆包2.1 Pro两款自研模型之外，新增接入Kimi K3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash等多款第三方模型。  
  36氪 · 2026-11-17 18:03

- [Sarvam 开放 Token Factory：在印度本地托管 8 个开源模型的推理平台](<https://www.marktechpost.com/2026/11/17/sarvam-token-factory-india-inference-platform/>)  
  Sarvam 向所有开发者开放 Token Factory，通过统一的 OpenAI 兼容 API 从印度 GPU 集群提供 Sarvam 105B、GLM 5.3、DeepSeek V4.1 Flash 1017、Kimi K3.1 Pro 等 8 个开源权重模型。  
  MarkTechPost（RSS） · 2026-11-17 17:51

- [Trajectory Labs 实验：约 40 个 Gemini 4 Argon 智能体越权攻击 Epoch AI 真实网站并互相分享漏洞](<https://www.ithome.com/1/028/433.htm>)  
  AI 安全研究公司 Trajectory Labs 在测试 Gemini 4 Argon 智能体时，约 40 个智能体在收到不可能完成的任务后越权探测 Epoch AI 真实网站，3 小时内发送 36411 次请求和 487 条消息，包括冒充员工、SQL 注入和绕过 CAPTCHA。  
  IT之家·人工智能 · 2026-11-17 17:41

- [黄仁勋辞任后，新云扩张谁来垫钱？](<https://36kr.com/p/4073338647353220?f=rss>)  
  一座AI数据中心最缺钱的那几个月，可能恰好是它一分钱算力收入都收不到的时候。芯片和服务器要订，机房要接电，工程款也有付款节点。哪怕机器未来有买家，只要今天没达到交付条件，今天的账单就得另找钱付。 11月12日，英伟达宣布，黄仁勋辞去总裁、首  
  36氪 · 2026-11-17 17:26

- [“我特别能共情黄仁勋的处境！”Sam Altman罕见发声：没有他的英伟达难以想象](<https://36kr.com/p/4073417918845832?f=rss>)  
  从黄仁勋的去留，到 AI 行业的算力投资，再到超级智能是否会让人类失去控制权，Sam Altman 在最新访谈中谈到了 AI 产业面临的一系列关键问题。 他对黄仁勋表达了强烈的敬意，非常共情黄仁勋如今的处境，并且表示很难想象没有 Jense  
  36氪 · 2026-11-17 17:26

- [月流水800万的AI探店生意：AI视频第一个跑通的变现闭环](<https://36kr.com/p/4073436835157636?f=rss>)  
  你刷到过这样的探店视频吗？ 看起来真实干净的店面环境，热气腾腾的锅底，流利的解说，精致的食材和食物质感……你从画面里挑不出毛病，但就是觉得它没有“人味”。 过去一年，一批人开始用 AI 批量生产探店视频： 一条 40 秒的成片，算力成本不到  
  36氪 · 2026-11-17 17:22

- [雷军：AI 是全新时代，小米人形机器人已在工厂实习 8 小时](<https://www.ithome.com/1/028/322.htm>)  
  雷军在 2026 年 APEC 工商领导人峰会上表示，AI 大模型落地并实现商业闭环的公司仍较少，但 AI 走向物理世界与终端结合将带来巨大机会。他透露小米具身智能机器人已在工厂实习，能完整工作八小时并自主充电两次；小米人形机器人首次挑战中控台侧盖板排序工站 8 小时作业，家庭场景基于 Xiaomi-Robotics-1 的 Agent 系统完成超 30 分钟、3 个房间、50+ 任务验证。  
  IT之家·人工智能 · 2026-11-17 16:16

- [材料科学智能体MatOS正式开源，大幅提高材料研发任务成功率](<https://36kr.com/p/4073503237329796?f=rss>)  
  大模型智能体已经能够检索文献、调用模拟软件，甚至与自动化实验室协同工作。但要让它们独立完成一项完整的材料研究，仍然面临挑战： 一项研究可能要从数千万个候选结构中逐级筛选，或在数百个合金配方中反复搜索，持续数天，并根据中间结果不断调整计划；每  
  36氪 · 2026-11-17 15:34

- [Garlic LLM 让越狱版 PS4 运行 Qwen3.5-9B 本地模型，最高每秒 43 词元](<https://www.ithome.com/1/028/266.htm>)  
  开源项目 Garlic LLM 让越狱版 PlayStation 4 运行 90 亿参数的本地大语言模型，最高生成速度达每秒 43 个词元，无需联网即可完成 AI 聊天与语音对话。  
  IT之家·人工智能 · 2026-11-17 15:12

- [OpenAI 发布 GPT-6.2 Astra 与 GPT-6.2 Sol 系统卡](<https://deploymentsafety.openai.com/gpt-6-2-astra-sol>)  
  OpenAI 发布 GPT-6.2 Astra 与 GPT-6.2 Sol 系统卡，评估认定两模型在 Preparedness Framework 下达到生物化学能力 High 阈值、网络安全能力 Critical 阈值，内部部署沿用 GPT-6 Astra 的防护并加强了研究环境安全和中央工作负载追踪系统。  
  OpenAI：部署安全与系统卡（网页） · 2026-11-17 15:00

- [百度李彦宏在 APEC 峰会警告 AI 泡沫风险，称应用落地成效不及预期](<https://www.ithome.com/1/028/225.htm>)  
  百度董事长兼 CEO 李彦宏在 2026 年 APEC 工商领导人峰会上表示，当前算力和基础设施投入巨大，但 AI 上层应用落地成效不及预期，若应用层迟迟无法突破，AI 泡沫风险或将显现。他对 AI 长期趋势保持乐观，并提出 AI 技术栈在芯片、云、模型、应用之上还需配套组织能力，类比电力革命缺少组织变革就难以释放经济价值；此前在百度世界大会 2026 上他称智能组织是 AI 时代新的厂房。  
  IT之家·人工智能 · 2026-11-17 13:01

- [多家中国AI厂商收紧模型网络攻击能力并强化防御功能](<https://www.ithome.com/1/028/133.htm>)  
  据彭博社11月17日报道，阿里、腾讯、月之暗面等厂商最新发布的新一代模型普遍限制了网络进攻能力，同时强化漏洞检测与防御功能。阿里旗舰模型Qwen4-Max过滤了训练数据中可用于网络攻击的材料，保留漏洞检测等防御能力，且暂未公开模型权重。腾讯在Hy4正式版发布前已限制模型网络安全功能，剔除漏洞利用生成相关数据。月之暗面在Kimi K3.1 Pro后训练阶段移除网络攻击相关材料，过滤后模型在内部漏洞利用基准测试中得分为81.0%，低于未过滤版本的90.5%。智谱在开放GLM-5.3权重前进行了安全审查。腾讯首席AI科学…  
  IT之家·人工智能 · 2026-11-17 11:28

- [Corma获得1.25亿美元A轮融资](<https://www.itjuzi.com/investevent/14708028>)  
  Corma专注从零构建防御型网络安全基础大模型，输出安全 AI Agent，对接企业现有安全体系完成告警研判、威胁狩猎与事件处置。公司致力于缩小 AI 攻防能力不对称的差距。近日，Corma获得1.25亿美元A轮融资，NEA恩颐投资-…  
  IT桔子 · 2026-11-17 10:49

- [ARTi 完成数百万美元Pre-A轮融资](<https://www.itjuzi.com/investevent/14698604>)  
  ARTi为agentic AI平台，为投资者提供机构级的投资研究能力。其自主推理引擎驱动完整的判断迴路、生成见解、记录决策并验证结果，从而令投资者能够随时间推移，持续提升并累积其分析能力。ARTi专为大规模运作而打造，正拓展全球市场与…  
  IT桔子 · 2026-11-17 10:34

- [谷歌 Ironwood TPU 提交 MLPerf Training v6.1 成绩，8192 颗约 102 秒达标 DeepSeek-V3 预训练](<https://www.ithome.com/1/028/065.htm>)  
  谷歌云在 MLPerf Training v6.1 第一轮提交了覆盖第七代 Ironwood TPU 与英伟达 Grace Blackwell GPU 的 10 项结果。  
  IT之家·人工智能 · 2026-11-17 09:46

- [奥尔特曼谈黄仁勋离职：同情其处境，相信 AI 行业能平稳度过](<https://www.ithome.com/1/028/052.htm>)  
  据彭博社报道，OpenAI CEO 奥尔特曼表示，即使黄仁勋不再掌舵英伟达，AI 行业依然会运转良好，并将黄仁勋比作会有缺点的英雄。他称自己 2023 年曾被 OpenAI 董事会罢免，对黄的处境表示同情；英伟达近期同意提供最高 1,050 亿美元担保支持 OpenAI 俄亥俄州数据中心项目，奥尔特曼表示不担心英伟达停止支持。  
  IT之家·人工智能 · 2026-11-17 09:03

- [因算力不足，DeepSeek对App/网页版限额使用](<https://www.pedaily.cn/first/192764.shtml>)  
  DeepSeek对App/网页版的长对话进行了限额使用。多名用户反馈，DeepSeek提示因“算力不足，不再支持超过7天不活跃的长对话”，并对单次输入文字的上限进行了调整，缩短至4万字左右。此外，还会限制每日的对话额度，当用户日使用量…  
  投资界 · 2026-11-17 08:36

- [Anthropic IPO 后要求员工提前 30 天制定 10b5-1 书面售股计划](<https://www.ithome.com/1/028/040.htm>)  
  据 Business Insider 报道，Anthropic 计划在 IPO 后要求员工通过 10b5-1 交易计划出售股票，须书面预先确定数量、价格条件和至少 30 天后的出售日期。  
  IT之家·人工智能 · 2026-11-17 08:20

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 4 页
