# 大模型

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页

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

## 相关资讯 · 206 条

- [大疆今起涨价，GTA6锁死30帧，OpenAI发布GPT-6.2，豆包工作日活突破800万，](<https://www.163.com/dy/article/LC2LQ7FD051196HN.html>)  
  网易科技频道 · 网易号 · 2026-11-19 03:17

- [Carlyle’s Jenkins Warns on Rush to Fund AI Data Centers](<https://www.bloomberg.com/news/videos/2026-11-18/carlyle-s-jenkins-warns-on-rush-to-fund-ai-data-centers-video>)  
  Bloomberg · 2026-11-19 03:16

- [Anthropic IPO Is Fairly Priced, Says Dharmesh Thakker](<https://www.bloomberg.com/news/videos/2026-11-18/anthropic-ipo-is-fairly-priced-says-dharmesh-thakker-video>)  
  Bloomberg · 2026-11-19 02:20

- [Nvidia Moves On From Huang as Anthropic IPO Looms](<https://www.bloomberg.com/news/videos/2026-11-18/bloomberg-tech-11-18-2026-video>)  
  Bloomberg · 2026-11-19 02:10

- [Anthropic’s VC Backers Double Down Ahead of IPO](<https://www.bloomberg.com/news/videos/2026-11-18/anthropic-s-vc-backers-double-down-ahead-of-ipo-video>)  
  Bloomberg · 2026-11-19 02:04

- [Anthropic IPO Demand Sets Stage for Historic Debut](<https://www.bloomberg.com/news/videos/2026-11-18/anthropic-ipo-demand-sets-stage-for-historic-debut-video>)  
  Bloomberg · 2026-11-19 02:02

- [OpenAI 称其模型在 AMD GPU IP 上实现相当于一年进度的芯片优化](<https://the-decoder.com/openai-says-its-models-delivered-a-years-worth-of-chip-optimization-on-top-of-amds-own-engineering/>)  
  媒体 The Decoder 报道，OpenAI 称与 AMD 合作用其模型在不到五个月内将 AMD 旗舰 GPU IP 的 PPA（功耗、性能、面积）提升至多 14%，相当于在 AMD 工程师多年优化之上再推进约一年的进度，部分改动已纳入送厂设计。  
  The Decoder：AI News（RSS） · 2026-11-19 02:00

- [Meta 详解如何用 AI 智能体将 ML 技术规模化推广到广告排序模型集群](<https://engineering.fb.com/2026/11/18/ml-applications/ai-agents-to-scale-ml-innovations-across-ads-ranking-models/>)  
  Meta 发文介绍其“技术传播”流程及 AI 智能体在其中的应用，此前已发布 Ranking Engineer Agent（REA）系统。自 2026 年 3 月起由智能体驱动执行以来，估算超 60% 的技术传播由 AI 智能体完成，早期结果显示工程师生产力提升 3x，选定组合的训练算力中位数降低 4x，预计到年底节省超 4500 万美元算力成本。  
  Meta Engineering Blog（RSS） · 2026-11-19 01:00

- [中科紫东太初王金桥：多模态大模型加速进厂，制造业正迈向“AI原生”时代](<https://www.163.com/dy/article/LC2C5NF8053469RG.html>)  
  网易科技频道 · 网易号 · 2026-11-19 00:28

- [Hugging Face 发布 Qwen3.8-27B-pi-adapted LoRA，pi 编码 Agent 成功率从 39.2% 升至 64.7%](<https://www.marktechpost.com/2026/11/18/hugging-face-qwen3-8-27b-pi-adapted-lora/>)  
  Hugging Face harness-hub 团队发布面向 pi 编码 Agent 的 Qwen3.8-27B-pi-adapted LoRA 适配器（Apache-2.0，rank 32），用 TRL 的 AsyncGRPO 强化学习训练，工具调用经 safeagents 代理拦截以抑制 reward hacking。  
  MarkTechPost（RSS） · 2026-11-19 00:07

- [Anthropic IPO: CFO Krishna Rao Helps Grow Startup Into AI Powerhouse](<https://www.bloomberg.com/news/articles/2026-11-18/anthropic-s-low-profile-cfo-guides-firm-through-cone-of-uncertainty>)  
  Bloomberg · 2026-11-19 00:01

- [Vals AI 评测：Anthropic、OpenAI 和 Google 模型易将医护人员与投降士兵标记为自杀式无人机目标](<https://the-decoder.com/anthropic-openai-and-google-models-readily-marked-medics-journalists-and-surrendering-soldiers-as-kamikaze-drone-targets/>)  
  独立评测机构 Vals AI 测试八家厂商模型后发现，主流大模型几乎缺乏针对自主武器的防护，多数模型会把平民、救护车、医护人员、记者和投降士兵标记为军事目标，且没有任何请求被上游安全过滤器拦截。  
  The Decoder：AI News（RSS） · 2026-11-18 23:47

- [消息称 Anthropic 考虑扩大 IPO 规模，散户认购意向接近千亿美元](<https://www.ithome.com/1/029/121.htm>)  
  IT之家 11 月 18 日消息，北京时间今天（18 日）晚间，据美国 CNBC 援引知情人士消息称，Anthropic 考虑扩大 IPO 发行规模，并可能将发行价定在 远高于 80 美元 （IT之家注：现汇率约合 534.4 元人民…  
  IT之家 · 2026-11-18 23:35

- [SpaceXAI 在美国密西西比州的 AI 数据中心泄漏约 20m³ 丙二醇](<https://www.ithome.com/1/029/115.htm>)  
  IT之家 11 月 18 日消息，据 tom's hardware 报道，埃隆 · 马斯克（Elon Musk）旗下的 SpaceXAI（SpaceXSI）在美国密西西比州的 AI 数据中心发生化学品泄漏事件。 承包商在连接移动储罐时…  
  IT之家 · 2026-11-18 23:01

- [Why Anthropic’s IPO Is Making Philanthropist Craig Newmark Hold Back on AI Safety Donations](<https://www.theinformation.com/articles/anthropics-ipo-making-philanthropist-craig-newmark-hold-back-ai-safety-donations>)  
  The Information · 2026-11-18 23:01

- [OpenAI 首次向 Apollo Research 等四家机构开放现场审计其 AI 系统](<https://the-decoder.com/openai-opens-its-ai-systems-to-four-independent-on-site-auditors-for-the-first-time/>)  
  OpenAI 宣布首次允许四家独立机构在其办公室现场审计内部 AI 系统，合作方为 Apollo Research、METR、Transluce 和 Goodfire，审计范围包括未发布模型、源代码、训练数据和监控系统。  
  The Decoder：AI News（RSS） · 2026-11-18 22:36

- [Hugging Face Inference Providers 改经 OpenRouter 路由语言模型请求](<https://the-decoder.com/hugging-face-now-routes-model-requests-through-openrouter-for-the-best-price-or-speed/>)  
  Hugging Face 宣布其 Inference Providers 服务改经 OpenRouter 路由语言模型请求，默认按价格、速度和可靠性综合选择供应商，故障时自动切换。  
  The Decoder：AI News（RSS） · 2026-11-18 22:33

- [NVIDIA RTX Spark 迷你桌面主机上市，ASUS、Dell、MSI 同步开售](<https://blogs.nvidia.com/blog/rtx-spark-desktop-local-ai-available-now/>)  
  NVIDIA 宣布来自 ASUS、Dell 和 MSI 的 RTX Spark 迷你桌面主机上市，面向本地 AI Agent、图像视频生成和模型微调。  
  NVIDIA Blog（RSS） · 2026-11-18 22:00

- [张朝阳再度回应搜狐“躺平”：大模型投入太大，没资源来做这个事情](<https://www.ithome.com/1/029/086.htm>)  
  IT之家 11 月 18 日消息，据光明日报消息，搜狐张朝阳再次回应搜狐“躺平”相关话题。 对于如今外界认为搜狐“躺平”的看法，张朝阳称一个公司肯定要根据自己的资源来决定做什么。 大模型投入太大，搜狐没资源来做这个事情 。 推荐算法和…  
  IT之家 · 2026-11-18 21:46

- [腾讯高管：预计 2028 年 AI 投入产出效率改善，得益于基础设施复用、硬件降价与算力效率提升](<https://www.ithome.com/1/029/080.htm>)  
  IT之家 11 月 18 日消息，据科创板日报报道，腾讯高管在业绩会上表示， 公司当前的资本开支主要用于 AI 基础设施建设 ，这类投入并非一次性消耗，而是能够形成可持续使用的基础设施，既可用于新一代模型训练，也能持续支撑 Token…  
  IT之家 · 2026-11-18 21:31

- [腾讯 WorkBuddy 日活破千万，一个什么信号？](<https://36kr.com/p/4075162266735752?f=rss>)  
  刚刚，腾讯宣布其旗下的 AI Agent 产品 WorkBuddy 日活跃用户突破千万，日均 Token 消耗量超 100 亿，成为中国大语言模型 Token 用量最高 AI 产品。 WorkBuddy 不是传统意义上的 AI 聊天机器人，  
  36氪 · 2026-11-18 21:05

- [多台Mac组成算力集群，苹果或进入数据中心市场](<https://36kr.com/p/4075167490184323?f=rss>)  
  在本地部署大模型，从而实现Token自由、隐私安全和自主可控，这是一个AI圈子里的经典meme（模因）。为了满足这类用户的需要，英伟达做了DGX Spark、AMD推出Strix Halo，现在苹果似乎也准备入局了。 日前有消息显示，苹果旗  
  36氪 · 2026-11-18 21:01

- [Nvidia 停止向中国发货 H200 AI 芯片](<https://www.theverge.com/tech/1036445/nvidia-h200-ai-chips-china-stop-selling>)  
  Nvidia 临时 CEO Colette Kress 在周二财报电话会上宣布，公司已停止向中国发货获许可的 Hopper 架构 H200 数据中心芯片，业绩指引也不再包含相关产品。尽管白宫去年 12 月批准对华销售，此前路透报道约 600,000 颗 H200 芯片因北京未批准大规模进口滞留香港；文章还提到 Huang 上周卸任 CEO 及芯片审查担忧，但 Kress 未解释停售原因。  
  The Verge：AI（RSS） · 2026-11-18 21:01

- [Nvidia 澄清对 neocloud 贷款担保何时生效、何时失效](<https://techcrunch.com/2026/11/18/nvidia-clarifies-when-it-will-and-wont-keep-financing-neoclouds/>)  
  Nvidia 临时 CEO、CFO Colette Kress 在财报电话会上澄清，公司为 neocloud 和数据中心客户提供的贷款担保并非直接出资，只有在客户筹齐融资、建成设施并装好 Nvidia 设备后才生效，否则担保不存在，并以 OpenAI 俄亥俄州 PORTS-Pike 园区 1050 亿美元担保为例。  
  TechCrunch：AI（RSS） · 2026-11-18 21:00

- [从腾讯AI到AI腾讯](<https://36kr.com/p/4075202762904708?f=rss>)  
  又到腾讯交AI成绩单的时候。 刚刚发布的2026年Q3财报，腾讯对外界备受关注的混元HY4，WorkBuddy、小微等关键业务或产品，给出新的进展和数据。 其中首次披露WorkBuddy核心运营数据，日活已经超千万，是目前中国大语言模型To  
  36氪 · 2026-11-18 20:59

- [小米的MiMo人才激励考题](<https://36kr.com/p/4075104005116800?f=rss>)  
  随着大模型研发投入持续增长，将AI业务独立出来融资，正在成为科技公司探索的一种资本运作方式。 今年以来，快手旗下可灵AI完成独立增资，阿里巴巴也宣布拟分拆旗下AI芯片企业平头哥赴港上市。对于拥有核心技术团队的大厂而言，引入外部资本不仅有助于  
  36氪 · 2026-11-18 20:33

- [GPT-6.2 Astra首发24小时口碑大翻车，硅谷大佬集体差评](<https://36kr.com/p/4075178142864513?f=rss>)  
  GPT-6.2刚发24小时口碑两极分化！API再砍20%登顶性价比之王，硅谷大佬却连夜写长信：写代码不如Opus 5.5 GPT-6.2 Astra和Sol，口碑好割裂，给我看不会了。 一边是榜单又杀疯了。 另一边，拿到早期测试权限的硅谷头  
  36氪 · 2026-11-18 20:02

- [MiniCPM 全球下载超 7000 万次：面壁智能披露老挝国家大模型等落地案例](<https://mp.weixin.qq.com/s/4eCXPoSciD5MSH43-sbIOQ>)  
  面壁智能宣布截至 2026 年 11 月 MiniCPM 系列模型全球下载量超过 7000 万次。其 8B 参数的老挝国家大模型已接入该国政务通讯系统 G-Chat v2，老挝语翻译能力在国际评测中超过 GPT-4o。公司还披露了马来西亚 VoxCPM2 语音交互、肯尼亚银行端侧风控智能体，以及开发者基于 MiniCPM5-1B 和 MiniCPM-o-4.5 的离线应用案例。  
  公众号：面壁智能（MiniCPM） · 2026-11-18 19:54

- [印度 Humyn Labs 融资 4700 万美元，为美国机器人公司提供训练数据](<https://techcrunch.com/2026/11/18/accel-backs-indias-humyn-labs-to-supply-training-data-needed-by-u-s-robotics-ai-developers/>)  
  印度 Humyn Labs 完成 4700 万美元 A 轮融资，其中 2600 万美元股权由 Accel 领投，2100 万美元为 Lighthouse Canton 领投的创业债务。该公司用自研双摄像头硬件记录日常任务，再通过软件标注手部动作与物体交互，在拉美和亚洲 20 多个国家采集数据，目前有 12 家付费客户，约 90% 收入来自美国。  
  TechCrunch：AI（RSS） · 2026-11-18 19:30

- [Anthropic IPO 估值最高或达 1.4 万亿美元，华尔街提前造势散户争抢](<https://www.ithome.com/1/029/015.htm>)  
  据路透社报道，Anthropic 预计于当地时间 11 月 19 日登陆公开市场，IPO 估值最高可能达到 1.4 万亿美元。金融机构已推出 2 倍做多与做空 ETF 等挂钩产品，Vanda Research 预计上市将吸引约 2.5 亿美元散户净买入，为 SpaceX IPO 期间 1.18 亿美元纪录的两倍。  
  IT之家·人工智能 · 2026-11-18 18:45

- [OpenAI 发布 GPT-6.2 Astra 和 Sol：更便宜但口碑分化，Anthropic 仍握最强模型](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)  
  Latent Space 汇总 OpenAI 发布的 GPT-6.2 Astra 和 Sol：Artificial Analysis 测得 Sol 以约 15% 的单任务成本追平 9 月的 Astra，新 Astra 以 62 分位居 Intelligence Index 第二，仅次于 Fable 5.2 的 65 分，两者均为 1M 上下文、128K 输出。  
  Latent Space（RSS） · 2026-11-18 18:19

- [长鑫科技毛利率逼近茅台，手握2852亿现金被追问分红](<https://36kr.com/p/4075005158691718?f=rss>)  
  11月17日，国产DRAM IDM龙头长鑫科技（688825.SH）召开三季度线上业绩说明会。受益于AI算力需求爆发带动全球DRAM供需趋紧，长鑫科技前三季度营收约2690亿元，同比大增739%；截至三季度末账面货币资金则攀升至2852亿元  
  36氪 · 2026-11-18 18:14

- [洽道量子再获深圳高新投领投](<https://www.itjuzi.com/investevent/14708182>)  
  洽道量子是一家AI+量子计算应用公司，通过科学问题建模、任务拆解和异构算力调度，将量子计算引入新材料与药物研发等领域，开发可交付、可复用的计算工具与应用方案。洽道量子近日完成新一轮融资，由深圳高新投领投，雪域资本担任长期的财务顾问。这…  
  IT桔子 · 2026-11-18 18:02

- [Anthropic IPO被疯抢：超额认购达10至20倍，红杉资本等追加投资](<https://36kr.com/p/4075023407748232?f=rss>)  
  11月18日，据财联社消息，美国科技投资公司Altimeter Capital首席执行官布拉德·格斯纳（Brad Gerstner）近日在一场活动中表示，该公司申请认购Anthropic首次公开募股价值50亿美元的股票，并称这是这家投资机构  
  36氪 · 2026-11-18 17:53

- [GPT-6.2 实测：强得离谱，但又难用得要死](<https://36kr.com/p/4075007825450116?f=rss>)  
  千呼万唤之中，OpenAI 终于把 GPT-6.2 推到了台前，一口气推出两个版本：GPT-6.2 Astra 和 GPT-6.2 Sol。 有意思的是，OpenAI 这次又赶在了一个微妙的时间点出牌。 眼下，Anthropic 上市的消息  
  36氪 · 2026-11-18 17:46

- [SFT只会“死记硬背”？NUS、耶鲁团队：数据对齐后，泛化反超RL](<https://36kr.com/p/4074735176078473?f=rss>)  
  监督微调（SFT）只会“死记硬背”，强化学习（RL）才能学会泛化？ 这一判断在大模型推理研究中颇具影响力。然而，如果 SFT 接触的训练数据与 RL 并不相当，那么， 两者之间的差距，究竟有多少来自训练方式，又有多少来自数据？ 来自 新加坡  
  36氪 · 2026-11-18 17:09

- [腾讯财报：WorkBuddy 日活跃用户超 1000 万，成为中国日均 Token 用量最高的 AI 产品](<https://www.ithome.com/1/028/914.htm>)  
  腾讯发布 2026 年第三季度财报，截至 11 月初 WorkBuddy 日活跃用户数超 1000 万，日均 Token 调用量超 100 万亿，成为中国大语言模型日均 Token 用量最高的 AI 产品。  
  IT之家·人工智能 · 2026-11-18 16:52

- [Sqwish获得300万美元种子轮融资](<https://www.itjuzi.com/investevent/14708171>)  
  Sqwish是一家AI决策模型研发商，打造 kettei 轻量级决策模型家族，不做通用生成式大模型，直接输出结构化决策结果与置信度评分，覆盖文本、图像多模态决策场景；旗舰模型 kettei fat 在 JevBench、ImageJe…  
  IT桔子 · 2026-11-18 16:17

- [上市前夕，OpenAI被索赔133亿元：蓄意设计聊天机器人，让儿童沉迷其中](<https://36kr.com/p/4074831625540744?f=rss>)  
  OpenAI的法律纠纷又添一笔。 当地时间11月17日，美国《俄勒冈人报》官网报道称，俄勒冈州总检察长丹·雷菲尔德当日对OpenAI提起诉讼，索赔20亿美元（约合人民币133亿元），指控这家公司明知故犯，将儿童置于危险之中，还向家长误导产品  
  36氪 · 2026-11-18 16:02

- [Remanence获得3000万美元种子轮融资](<https://www.itjuzi.com/investevent/14708166>)  
  Remanence是一家企业 AI 科技研发商，打造基于 AI 智能体执行轨迹的模型后训练平台，采集企业智能体的工具调用、报错与人工修正记录，自动构建仿真训练环境，通过强化学习对开源模型做专精化训练，产出归属企业自有、可本地部署的业务…  
  IT桔子 · 2026-11-18 16:00

- [Ai2 与 Taylor Geospatial 合作，让地理空间 AI 更易比较、运行和构建](<https://allenai.org/blog/taylor-geospatial-partnership>)  
  Ai2 与 Taylor Geospatial 在 SatSummit 上宣布合作，共同推进地理空间 AI 的构建、测试与落地。合作产出包括用于模型比较的 The World 基准、带无代码微调平台的完全开源地球观测模型系列 OlmoEarth，以及扩展后支持更高边界精度和作物类型、产量的 Fields of The World 开放数据集。  
  Ai2 / Allen Institute for AI（RSS） · 2026-11-18 16:00

- [5300人，人均3个亿，Anthropic即将敲钟，泼天富贵要来了](<https://36kr.com/p/4074882886751112?f=rss>)  
  泼天的富贵，真的要来了！ 据悉，Anthropic上市前夜，估值将会涨到1.5万亿至 1.6万亿美金 。 A/正准备把原定70-78美元的发行价， 直接拉高到80美元以上 。 这么做，还不是因为华尔街抢红了眼....... 对冲基金仅一家A  
  36氪 · 2026-11-18 15:50

- [Voyage Labs获得1200万美元种子轮融资](<https://www.itjuzi.com/investevent/14708165>)  
  Voyage Labs是一家AI旅行规划服务提供商，主打个人 AI 旅行助手 Atlas，定位专属垂直智能体（而非通用大模型助手），覆盖从灵感发现、规划、预订到行程管理的全流程，既服务长途出行，也覆盖就近晚餐、徒步、空闲傍晚等本地场景…  
  IT桔子 · 2026-11-18 15:50

- [拖更两个月的GPT-6.2，居然是一个“汇报狂魔”？](<https://36kr.com/p/4074882625590151?f=rss>)  
  美国当地时间11月17日，OpenAI正式推出GPT-6.2 Astra和GPT-6.2 Sol。 这场发布来得比外界预期更晚。早在10月底，就有网友从ChatGPT用量记录中扒出疑似GPT-6.2的灰测痕迹，此后模型标识和测试截图不断流出  
  36氪 · 2026-11-18 15:23

- [Genesis完成A轮融资，估值超230亿](<https://www.itjuzi.com/investevent/14708129>)  
  Genesis AI是一家机器人通用模型研发商，致力于打造为各类机器人提供动力的基础模型，并使用专有物理引擎生成合成数据，该引擎能够精确模拟物理世界。近日，Genesis AI完成5亿美金A轮，投后估值来到35亿美金。投资方包括，NV…  
  IT桔子 · 2026-11-18 11:53

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页
