# 大模型

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 6 页

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

## 相关资讯 · 258 条

- [Anthropic人均3亿的IPO盛宴前，OpenAI急发GPT-6.2狙击却遭反噬？](<https://www.163.com/dy/article/LC55I70205319LDA.html>)  
  网易科技频道 · 网易号 · 2026-11-20 02:33

- [2026 年 13 款 Agent Gateway 评测：Kong、Bifrost、AgentCore、Arcade 等横评 MCP 与 A2A 支持](<https://www.marktechpost.com/2026/11/19/best-agent-gateways-2026/>)  
  文章按流量覆盖、身份授权、部署、成熟度和价格透明度五项标准，横评 13 款 agent gateway。  
  MarkTechPost（RSS） · 2026-11-20 02:13

- [Claude自写推理引擎！等AI回第一个字，12秒砍到半秒](<https://www.163.com/dy/article/LC53L5DD0511ABV6.html>)  
  网易科技频道 · 网易号 · 2026-11-20 01:57

- [Perplexity 发布 Orchestrator API，支持跨供应商故障转移与模型路由](<https://www.marktechpost.com/2026/11/19/perplexity-orchestrator-api-failover-model-routing/>)  
  Perplexity 发布 Orchestrator API，一个端点聚合 OpenAI、Anthropic、Google、xAI 及 GLM、Kimi、DeepSeek 等开源权重模型，内部已在 85+ 模型和十余家供应商上运行同一层。  
  MarkTechPost（RSS） · 2026-11-20 01:47

- [Anthropic Investor: IPO Is ‘Day One’ for AI Giant](<https://www.bloomberg.com/news/videos/2026-11-19/anthropic-investor-ipo-is-day-one-for-ai-giant-video>)  
  Bloomberg · 2026-11-20 01:46

- [Anthropic Investor Sees Opportunity Beyond IPO](<https://www.bloomberg.com/news/videos/2026-11-19/anthropic-investor-sees-opportunity-beyond-ipo-video>)  
  Bloomberg · 2026-11-20 01:44

- [芯片停运叠加海外云通道关闭，中国科技公司面临双重冲击](<https://the-decoder.com/chinese-tech-firms-face-a-double-hit-as-chip-shipments-stop-and-overseas-cloud-access-disappears/>)  
  美国商务部收紧AI芯片出口管制并关闭第三方国家云算力通道后，亚洲多笔大型AI数据中心交易开始瓦解。Moonshot AI取消了与印尼云服务商的1.5亿美元合同，原计划租用Nvidia Blackwell Ultra B300集群训练Kimi K4，此前已预付约50%而非行业标准的15%。台积电和三星暂停向中国客户交付部分处理器，需申请许可；字节跳动、百度昆仑等客户受影响，非AI芯片豁免取消也波及小米、Oppo、vivo等智能手机处理器。  
  The Decoder：AI News（RSS） · 2026-11-20 01:02

- [Anthropic IPO Provides Cash to Continue R&amp;D Spending, CFO Says](<https://www.bloomberg.com/news/articles/2026-11-19/anthropic-ipo-provides-cash-to-continue-r-d-spending-cfo-says>)  
  Bloomberg · 2026-11-20 01:02

- [Anthropic 登陆纳斯达克，开盘价 111 美元较发行价高出 33%](<https://techcrunch.com/2026/11/19/anthropic-hits-nasdaq-exchanges-at-110-27-above-ipo-price/>)  
  Anthropic 在纳斯达克完成 IPO，开盘几分钟内股价达 111.50 美元，较 83 美元发行价高出 33%，发行价已超过公司此前 70 至 78 美元的预期区间。本次发行募资超过 810 亿美元，叠加同期私募融资后公司现金储备预计达 2200 亿美元；按开盘价计算市值超过 2 万亿美元，CEO Dario Amodei 在开盘致辞中强调公司对安全的承诺。  
  TechCrunch：AI（RSS） · 2026-11-20 00:59

- [Anthropic 登陆纳斯达克，首日以 $111.50 开盘](<https://www.theverge.com/ai-artificial-intelligence/1035384/anthropic-ipo-trading-nasdaq>)  
  Anthropic 正式在纳斯达克上市，代码 ANT，以 $111.50 开盘，高于 $83 的发行价，对应估值约 $1.5 万亿。其 S-1 文件披露上半年净亏损 $80.7 亿（主要来自不影响业务的会计费用）、营收 $16.3B，并保留创始人而非股东控制公司的治理结构；CEO Dario Amodei 表示将按需放缓 AI 训练与部署以确保安全，不屈服于商业或政治压力。  
  The Verge：AI（RSS） · 2026-11-20 00:52

- [An Extraordinary Journey: Celebrating Anthropic’s IPO](<https://menlovc.com/perspective/an-extraordinary-journey-celebrating-anthropics-ipo/>)  
  What a special moment for Dario, Daniela, and the spectacular team at Anthropic. Congratulations\! In just over five y…  
  Menlo Ventures · 2026-11-20 00:50

- [Anthropic IPO 融资 810 亿美元后，八个思考看后续挑战](<https://www.bigtechnology.com/p/eight-thoughts-on-anthropics-ipo>)  
  Alex Kantrowitz 在 Anthropic IPO 当天提出八点观察。Anthropic 此次发行 9.8 亿股、每股 83 美元，融资 810 亿美元，股价即将站上 100 美元，估值接近 2 万亿美元，成为史上最大 IPO。  
  Big Technology（热点 RSS） · 2026-11-20 00:48

- [Zino: Anthropic is Most Important IPO That I've Seen](<https://www.bloomberg.com/news/videos/2026-11-19/zino-anthropic-is-most-important-ipo-that-i-ve-seen-video>)  
  Bloomberg · 2026-11-20 00:46

- [Nasdaq Expects Smooth Anthropic IPO, Griggs Says](<https://www.bloomberg.com/news/videos/2026-11-19/nasdaq-expects-smooth-anthropic-ipo-griggs-says-video>)  
  Bloomberg · 2026-11-20 00:36

- [Anthropic 完成史上最大规模 IPO，Dario Amodei 敲钟演讲重申放慢 AI 开发节奏](<https://techcrunch.com/2026/11/19/at-nasdaq-opening-bell-anthropic-ceo-recommits-to-pacing-ai-development/>)  
  Anthropic 周四在纳斯达克完成号称史上最大规模 IPO 上市，CEO Dario Amodei 在敲钟演讲中重申将放慢 AI 训练与部署节奏，不受商业或政治压力影响，保持 AI 在人类控制之下。  
  TechCrunch：AI（RSS） · 2026-11-20 00:19

- [How Anthropic Plans to Use IPO Proceeds](<https://www.bloomberg.com/news/videos/2026-11-19/how-anthropic-plans-to-use-ipo-proceeds-video>)  
  Bloomberg · 2026-11-20 00:04

- [Anthropic IPO Delivers Wall Street Windfall](<https://www.bloomberg.com/news/videos/2026-11-19/anthropic-ipo-delivers-wall-street-windfall-video>)  
  Bloomberg · 2026-11-20 00:03

- [Anthropic 完成史上最大规模 IPO，上市估值达 1.5 万亿美元](<https://www.ithome.com/1/029/708.htm>)  
  IT之家 11 月 19 日消息，北京时间今天（19 日）深夜，AI 初创企业 Anthropic 正式登陆美股，以 813 亿美元 （IT之家注：现汇率约合 5,431.47 亿元人民币） 的募资额创下 IPO 历史纪录。 公司 C…  
  IT之家 · 2026-11-19 23:50

- [Will Anthropic’s IPO Lead To An Exodus of Anthropic Employees?](<https://www.theinformation.com/articles/will-anthropics-ipo-lead-exodus-anthropic-employees>)  
  The Information · 2026-11-19 23:01

- [Anthropic IPO 检验 AI 循环融资模式，Amazon 和 Google 持股市值约 3079 亿美元](<https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/>)  
  TechCrunch 分析 Anthropic IPO 如何检验 AI 行业的循环融资模式。Amazon 14.7% 股份价值超 1590 亿美元，Google 13.7% 股份约 1490 亿美元；Nvidia、AMD、Microsoft、Broadcom、Micron、TSMC 还以 83 美元/股参与 260 亿美元私募。  
  TechCrunch：AI（RSS） · 2026-11-19 22:54

- [谷歌与蓝色起源合作，计划 2029 年发射 AI 服务器卫星](<https://www.ithome.com/1/029/695.htm>)  
  IT之家 11 月 19 日消息，谷歌与蓝色起源（Blue Origin）今天达成合作，计划将 AI 服务器卫星送上太空。 IT之家了解到，蓝色起源的新格伦火箭将于 2029 年第一季度，发射带有谷歌 TPU（张量处理单元）的卫星，算…  
  IT之家 · 2026-11-19 22:26

- [Anthropic 完成史上最大规模 IPO，其安全治理结构受到审视](<https://www.theverge.com/ai-artificial-intelligence/1037459/anthropic-ipo-safe-ai-reputation-power-structure>)  
  The Verge 报道 Anthropic 完成 IPO，募资 813 亿美元，超过 SpaceX 成为史上估值最高的上市，完全稀释市值约 1.5 万亿美元。  
  The Verge：AI（RSS） · 2026-11-19 22:25

- [Anthropic IPO 定价每股 83 美元募资 813 亿美元，超越 SpaceX 纪录](<https://the-decoder.com/anthropics-81-3-billion-ipo-shatters-spacexs-record-as-rising-rates-and-political-headwinds-shake-the-sector/>)  
  Anthropic IPO 定价每股 83 美元，高于 70 至 78 美元目标区间，募资 813 亿美元，超过 SpaceX 6 月创下的 750 亿美元纪录，股票周四以代码 ANT 在纳斯达克交易。  
  The Decoder：AI News（RSS） · 2026-11-19 22:02

- [Anthropic Is Pushing New Products, and Big Discounts, to Justify Its Huge Valuation](<https://www.theinformation.com/articles/anthropic-pushing-new-products-big-discounts-justify-huge-valuation>)  
  The Information · 2026-11-19 22:00

- [宁德时代投资DeepSeek：电池帝国的隐秘扩张](<https://36kr.com/p/4076530370368641?f=rss>)  
  1000亿，中国AI融资的天花板，终于落地了。 11月19日，DeepSeek运营主体杭州深度求索完成工商变更，31家出资方正式进入股东名册。就在四个月前，DeepSeek刚完成510亿元融资。 两轮融资的投资人名单，不乏腾讯、京东和网易等  
  36氪 · 2026-11-19 21:02

- [阿里巴巴 CEO 吴泳铭：千问已在平头哥芯片训练下一代模型，百炼基于国产芯片提供模型推理服务](<https://www.ithome.com/1/029/676.htm>)  
  IT之家 11 月 19 日消息，据财联社今日报道，在 2027 财年第二季度财报分析师电话会上，阿里巴巴集团 CEO 吴泳铭表示， 千问已经在平头哥芯片上训练下一代模型，百炼已经基于国产芯片提供模型推理服务 。 吴泳铭强调， 阿里的…  
  IT之家 · 2026-11-19 20:58

- [超39万亿元的公募基金，三季度经历了一次压力测试](<https://36kr.com/p/4076619559441288?f=rss>)  
  随着公募基金2026年三季报披露完毕，行业前三季度的运行轮廓也清晰地展现出来。 收益方面，前三季度公募基金的业绩呈现明显的“前高后低”特征。2026年上半年，在AI算力、半导体、光模块等热门概念的带动下，相关科技成长板块大涨，主动权益产品一  
  36氪 · 2026-11-19 20:32

- [DeepSeek千亿融资落停：完美横店华策是怎么挤进去的](<https://36kr.com/p/4076543534158985?f=rss>)  
  11月17日，杭州深度求索（DeepSeek）完成工商变更，企查查显示，其新增股东杭州程砚企业管理咨询合伙企业，第二轮融资终于在工商层面落地。 娱乐资本论根据公开报道口径发现：本轮募集约1055亿元（158亿美元），投后估值约6155亿元（  
  36氪 · 2026-11-19 20:21

- [O'Reilly 撰文解析 AI 递归自我改进的四级方法与现实风险](<https://www.oreilly.com/radar/who-builds-the-next-model/>)  
  O'Reilly 发文分析 AI 正在参与构建下一代 AI 的递归自我改进趋势，给出四级框架：改进答案（Reflexion 将 GPT-4 编码测试成绩从 80% 提到 91%）、改写提示词（OPRO）、积累工具箱（Voyager）和修改自身（Darwin Godel Machine 将编码测试从 20% 提到 50%。  
  O'Reilly Radar（热点 RSS） · 2026-11-19 19:45

- [Counterpoint：存储成本飙涨，印度高端旗舰手机 2026 年底将较 2025 年涨价超 30%](<https://www.ithome.com/1/029/653.htm>)  
  IT之家 11 月 19 日消息，Counterpoint Research 报告显示，受 AI 数据中心需求拉动 DRAM、NAND 价格持续上涨影响，印度高端旗舰智能手机的价格门槛正从原先的 5 万至 7 万卢比 （IT之家注：现…  
  IT之家 · 2026-11-19 19:45

- [千亿融资落地，梁文锋隔离个人份额，31家机构入局DeepSeek](<https://36kr.com/p/4076523051422852?f=rss>)  
  今日，据企查查披露的工商信息， DeepSeek关联企业 杭州程砚企业管理咨询合伙企业（有限合伙）（以下简称“杭州程砚”）发生工商变更， 新增上海珩岫、中移投资等31家合伙人 ，企业 登记出资额由0.6万元增至约34.39亿元 。 结合此前  
  36氪 · 2026-11-19 19:20

- [Google DeepMind 发布 Gemini 4 Neon，速度更快价格更低并超越 Carbon](<https://the-decoder.com/googles-latest-ai-model-is-faster-cheaper-and-smarter-than-its-flagship-predecessor-from-just-weeks-ago/>)  
  Google DeepMind 发布 Gemini 4 Neon，这是其七周内的第四款模型，定位介于 Carbon 和 Hydrogen 之间，在 Artificial Analysis Intelligence Index 以 61 分位列第三，仅次于 GPT-6.2 Astra 和 Claude Fable 5.2。  
  The Decoder：AI News（RSS） · 2026-11-19 19:18

- [马斯克：目前 SpaceX 每个月约新增 0.5GW 算力，明年底将提速至每月 1GW](<https://www.ithome.com/1/029/649.htm>)  
  IT之家 11 月 19 日消息，据《科创板日报》今天报道，马斯克在视频连线采访中表示，目前 SpaceX 每个月大约新增 0.5GW AI 算力。 这大致相当于部署 22 万颗 GB300 芯片 ，以及与之配套的 CPU、网络设备、…  
  IT之家 · 2026-11-19 19:17

- [OpenAI印证了梁文锋的“预言”](<https://36kr.com/p/4076518957979271?f=rss>)  
  GPT-6.2 Astra在真实机械臂测试中登顶，通用大模型直驱机器人的能力又进了一步。 据独立评测机构Artificial Analysis发布的AA-Robotics v0.1榜单，GPT-6.2 Astra得分79，完成8项物理任务中  
  36氪 · 2026-11-19 19:14

- [蚂蚁 inclusionAI 发布 DeepSeek-V4.1-Flash-1017-singprobe 流式安全探针](<https://huggingface.co/inclusionAI/DeepSeek-V4.1-Flash-1017-singprobe>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 SingProbe 流式护栏 DeepSeek-V4.1-Flash-1017-singprobe，探针仅 10.10M 参数，读取基座模型第 12、25、39 层隐藏状态，逐 token 输出 8 类查询意图、响应不安全和幻觉风险评分。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-19 19:02

- [博帝推出 AI Matrix 系列 DDR5 内存、M.2 SSD，专为端侧 AI 设计](<https://www.ithome.com/1/029/645.htm>)  
  IT之家 11 月 19 日消息，博帝（Patriot）今日宣布推出 AI Matrix 系列 DDR5 内存和 PCIe M.2 2280 NVMe SSD，专为端侧运行大语言模型设计。 IT之家附该系列产品详情如下： PRO 档（…  
  IT之家 · 2026-11-19 18:58

- [国产GPU，风浪越大鱼越贵](<https://www.tmtpost.com/8210657.html>)  
  黄仁勋卸任英伟达CEO，全球AI算力格局发生转变，中国AI产业面临供给风险挑战。  
  钛媒体 · 2026-11-19 18:58

- [AI需要一个“通话键”](<https://36kr.com/p/4076277944488835?f=rss>)  
  2026年的AI行业，正卡在一个反直觉的尴尬期。 一面是当前的AI需求在一路疯涨。据OpenRouter数据，其平台调度的Token处理量在20个月内增长了约250倍，达到128.4万亿枚；算力租赁市场也随之水涨船高，H200的租赁价格年内  
  36氪 · 2026-11-19 18:43

- [元示科技获得近3亿元Pre-A融资](<https://www.itjuzi.com/investevent/14708193>)  
  元示科技专注于第二代人工智能制药技术，核心研发方向为人工智能虚拟细胞与通用细胞大模型，核心目标是搭建具备强推理、泛化与设计能力的通用细胞大模型。不同于传统单点预测工具，该模型可基于已知的药物-细胞扰动数据，推导药物对其他类型细胞的作用…  
  IT桔子 · 2026-11-19 17:52

- [Soket获得400万美元战略投资](<https://www.itjuzi.com/investevent/14708304>)  
  Soket是一家人工智能科技研发商，主打可审计的数学、代码、长逻辑推理基础模型，旗舰项目 Project EKA 已推出 EKA-1（26B 参数），正在训练 120B 主权大模型，覆盖 60 + 印度及全球南方语种，配套开源智能体编…  
  IT桔子 · 2026-11-19 17:52

- [Gartner 预测 2027 年全球 AI 支出将达 4.05 万亿美元，同比增长 47.5%](<https://www.ithome.com/1/029/546.htm>)  
  Gartner 于本月 12 日发布预测，2027 年全球 AI 支出将达 4.05 万亿美元（约合 27.06 万亿元人民币），同比增长 47.5%。其中 AI 基础设施支出接近 2.4 万亿美元、增长 53%，AI 优化服务器支出 9572 亿美元、同比提升 81%；生成式 AI 模型支出提升 82% 至 510 亿美元，基础模型占其中超八成。  
  IT之家·人工智能 · 2026-11-19 17:26

- [不用写提示词、拖拽定位置：零宙做可控 AI 生图](<https://36kr.com/p/4067668262065280?f=rss>)  
  AI 生成的时候您是否遇到过这样的问题？ 我不懂 AI，我生成的东西没法用 我懂 AI，但是模型没有按照我想要的去生成 大模型生成的图片元素位置不是我想要的，那么请看零宙平台用户生成的实际案例展示 相信大多数玩过 AI 绘画的人都会遇到上面  
  36氪 · 2026-11-19 16:57

- [一手实测 \| 给GPT-6.2 Astra出了四道题，后两道把我看愣了](<https://www.163.com/tech/article/LC43TRAB00097U7T.html>)  
  网易科技 · 2026-11-19 16:42

- [Anthropic IPO造富：7位创始人百亿身家，数千员工将成百万富翁](<https://36kr.com/p/4076360836436868?f=rss>)  
  Anthropic即将开启自己的造富之路。这家以Claude大模型出圈的AI公司，定于当地时间11月19日在纳斯达克挂牌，股票代码ANT。 此前一日，Anthropic将其IPO的A类普通股定价为每股83美元，这一定价高于该公司此前的预估。  
  36氪 · 2026-11-19 16:27

- [退役飞机发动机，被马斯克“返聘”了](<https://36kr.com/p/4076184353888128?f=rss>)  
  给AI数据中心供电的设备里，居然有从退役客机上拆下来的航空发动机。 经过翻新和改造，这些发动机被重新组装成燃气轮机发电设备，重新投入工作。它们曾经在万米高空为飞机提供动力，如今摇身一变，成了地面数据中心的电力希望。 美国亚利桑那州戴维斯-蒙  
  36氪 · 2026-11-19 16:26

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 6 页
