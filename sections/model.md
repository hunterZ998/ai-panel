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

## 相关资讯 · 177 条

- [限额两日仍未松动！DeepSeek算力承压，C端会走向收费吗？](<https://www.163.com/dy/article/LC1NM8VH051492T3.html>)  
  网易科技频道 · 网易号 · 2026-11-18 18:30

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

- [腾讯 WorkBuddy 日活跃用户数超 1000 万，成为中国大语言模型日均 Token 用量最高 AI 产品](<https://www.ithome.com/1/028/914.htm>)  
  IT之家 11 月 18 日消息，腾讯今日发布 2026 年第三季度财报，截至 11 月初， WorkBuddy 日活跃用户数超过 1000 万，日均 Token 调用量超过 100 万亿 ，成为中国大语言模型日均 Token 用量最…  
  IT之家 · 2026-11-18 16:52

- [Sqwish获得300万美元种子轮融资](<https://www.itjuzi.com/investevent/14708171>)  
  Sqwish是一家AI决策模型研发商，打造 kettei 轻量级决策模型家族，不做通用生成式大模型，直接输出结构化决策结果与置信度评分，覆盖文本、图像多模态决策场景；旗舰模型 kettei fat 在 JevBench、ImageJe…  
  IT桔子 · 2026-11-18 16:17

- [瑞芯微 RK1860 规格曝光：64TOPS 稠密 INT8 算力，集成至多 10GB DRAM](<https://www.ithome.com/1/028/874.htm>)  
  IT之家 11 月 18 日消息，开源硬件制造商 Radxa 此前分享了瑞芯微 \(Rockchip\) 端侧 AI 协处理器 RK1860 的规格信息。 这一芯片的 NPU 单元具备 64TOPS 稠密 INT8 算力 ，集成至多 10…  
  IT之家 · 2026-11-18 16:08

- [上市前夕，OpenAI被索赔133亿元：蓄意设计聊天机器人，让儿童沉迷其中](<https://36kr.com/p/4074831625540744?f=rss>)  
  OpenAI的法律纠纷又添一笔。 当地时间11月17日，美国《俄勒冈人报》官网报道称，俄勒冈州总检察长丹·雷菲尔德当日对OpenAI提起诉讼，索赔20亿美元（约合人民币133亿元），指控这家公司明知故犯，将儿童置于危险之中，还向家长误导产品  
  36氪 · 2026-11-18 16:02

- [Remanence获得3000万美元种子轮融资](<https://www.itjuzi.com/investevent/14708166>)  
  Remanence是一家企业 AI 科技研发商，打造基于 AI 智能体执行轨迹的模型后训练平台，采集企业智能体的工具调用、报错与人工修正记录，自动构建仿真训练环境，通过强化学习对开源模型做专精化训练，产出归属企业自有、可本地部署的业务…  
  IT桔子 · 2026-11-18 16:00

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

- [GPT-6.2 Astra 和 Sol 使用与避雷教程](<https://mp.weixin.qq.com/s/AWddiJVMdnxagcyOx7MNhQ>)  
  作者基于灰度实测分享 GPT-6.2 Astra 和 Sol 的使用建议。  
  公众号：卡尔的AI沃茨 · 2026-11-18 11:52

- [观壹智能获得数千万元A轮投资](<https://www.itjuzi.com/investevent/14707347>)  
  观壹智能（OneX Intelligence）成立于2025年，是一家专注AI与生命科学的AI4S创业公司，致力于打造多智能体循证推理引擎与生命科学模型，为罕见病诊断、药物发现和临床决策提供可溯源、可验证的AI解决方案。近日，观壹智能…  
  IT桔子 · 2026-11-18 11:46

- [Anthropic 上市，三个预测](<https://36kr.com/p/4074702021252740?f=rss>)  
  11 月 19 日，Anthropic 在纳斯达克挂牌。发行 8.25 亿股，区间 70 到 78 美元，投行已经在讨论把定价抬到 80 美元以上，完全摊薄 1.5 万亿到 1.6 万亿。合并私募，一共募 904 亿，史上最多。 01 An  
  36氪 · 2026-11-18 11:41

- [GPT-6没拆掉的护城河，具身智能务实派先一步在服务场景找到答案](<https://36kr.com/p/4073722831508612?f=rss>)  
  具身智能行业，正在经历一场微妙而又深刻的变化。 过去，机器人公司热衷于展示自己的技术上限：能跳多高、跑多快，又能完成多少复杂动作。但到了下半年，行业开始出现另一种声音。比起证明机器人有多聪明，越来越多人开始关心它们走进真实场景后的表现。 最  
  36氪 · 2026-11-18 10:42

- [刚领完“青年科学家奖”，谢伟迪就融了数亿](<https://36kr.com/p/4074635892872066?f=rss>)  
  近日，投中网获悉，生命模型智能公司观壹智能（OneX Intelligence）宣布完成首轮数亿元融资，由IDG资本领投，创世伙伴创投\(CCV\)、沄柏资本、交大菡源资产、云启资本跟投，财务顾问为棕榈资本。本轮资金将主要用于生命智能基础模型研  
  36氪 · 2026-11-18 10:28

- [AMD 完成对 Taalas 的收购，计划将其 AI 推理芯片技术整合进加速器路线图](<https://www.ithome.com/1/028/640.htm>)  
  AMD 当地时间昨日宣布完成对专用 AI 推理芯片开发商 Taalas 的收购，表示此举将加强其全栈 AI 产品组合和长期推理路线图。AMD 计划将 Taalas 技术整合进加速器路线图，结合 Instinct GPU 共同开发系统级解决方案。Taalas 采用把 AI 模型固化到 ASIC 上的路线，针对特定模型工作负载优化，牺牲通用性以显著提升推理效率。  
  IT之家·人工智能 · 2026-11-18 10:06

- [深微芯创获得近亿元融资](<https://www.itjuzi.com/investevent/14708106>)  
  深微芯创是一家专注于AI算力芯片与高带宽集成技术的硬科技型企业，面向高性能芯片封装、光电共封装（CPO）及下一代数据中心互联需求，提供半导体先进封装制造装备、光电材料器件与成套工艺一体化解决方案。公司围绕玻璃基板、TGV三维互连、光通…  
  IT桔子 · 2026-11-18 09:55

- [Anthropic纳斯达克IPO获准](<https://www.pedaily.cn/first/193041.shtml>)  
  Anthropic表示，已获准在纳斯达克全球精选市场上市A类普通股，股票代码为“ANT”。（投资界）  
  投资界 · 2026-11-18 08:49

- [GPT-6.2Astra与Sol突袭发布，OpenAI狙击Anthropic上市日，任务成本仅为Claude的5%](<https://36kr.com/p/4074370835977092?f=rss>)  
  就在 Anthropic 敲钟上市的同一天，OpenAI 端出了它的“贺礼”。 11 月 18 日凌晨消息，OpenAI 正式发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款新模型： 在复杂专业任务上，GPT-6.2 As  
  36氪 · 2026-11-18 08:45

- [Anthropic 获准在纳斯达克上市，代码 ANT，发行价每股 70\~78 美元](<https://www.ithome.com/1/028/599.htm>)  
  根据 SEC 11 月 17 日公示的文件，Anthropic 的 A 类普通股获准在纳斯达克全球精选市场上市，代码 ANT，发行价区间维持每股 70 至 78 美元。  
  IT之家·人工智能 · 2026-11-18 08:12

- [微软发布 Microsoft-Decision-1.1 决策模型，基准得分领先 GPT-6 Luna 与 Gemini](<https://www.ithome.com/1/028/593.htm>)  
  微软于 11 月 17 日正式推出 Microsoft-Decision-1.1 决策 AI 模型，已在 Microsoft Foundry、OpenRouter 和 Vercel 上线，面向路由、分类、优先级排序、内容核验和工作流控制等企业决策场景。  
  IT之家·人工智能 · 2026-11-18 07:40

- [微软发布网络安全模型 MAI Cyber 2 Flash，CyberGym-E2E 成功率 92.3%，每任务成本约为 GPT-6 Astra 的 2%](<https://www.ithome.com/1/028/585.htm>)  
  微软 AI 部门 11 月 17 日发布面向企业安全团队的专用模型 MAI Cyber 2 Flash，定位高性价比网络安全 AI，用于发现漏洞、推荐修复和调查威胁。  
  IT之家·人工智能 · 2026-11-18 07:06

- [Perplexity Computer 新增 Multiagent 档位：最多 16 个 AI 智能体交叉检查工作](<https://www.marktechpost.com/2026/11/17/perplexity-computer-multiagent-effort-level/>)  
  Perplexity 为 Computer 新增高于 Ultra 的 Multiagent 档位，主智能体最多调度 16 个并行智能体，直接共享发现、编辑共享文件并互相检查，默认团队由 Claude Opus 5.5、GPT 6.1 Sol 和 Gemini 4 Carbon 组成。  
  MarkTechPost（RSS） · 2026-11-18 06:52

- [微软发布 MAI Code 2 与 MAI Code 2 Flash，5% 成本达 Claude Opus 5.5 约 96% 性能](<https://www.ithome.com/1/028/579.htm>)  
  微软在 Ignite 2026 发布自研编程模型 MAI Code 2 和 MAI Code 2 Flash，并已在 GitHub Copilot 上线，分别面向复杂软件开发与高频日常编程。  
  IT之家·人工智能 · 2026-11-18 06:42

- [Simon Willison 实测 OpenAI 新模型 GPT-6.2 Astra 与 GPT-6.2 Sol](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>)  
  OpenAI 发布 GPT-6.2 Astra（面向高难度项目的旗舰模型）和 GPT-6.2 Sol（面向日常工作的通用模型），API 名称分别为 gpt-6.2-astra 和 gpt-6.2-sol。  
  Simon Willison 博客 · 2026-11-18 06:38

- [深度实测GPT-6.2 Astra：极致省钱但偏科严重，沟通可读性依旧拉胯](<https://mp.weixin.qq.com/s/0cEoTueGjSGtm0-glpYGcA>)  
  OpenAI 发布 GPT-6.2 Astra 与 Sol，已同步上线 ChatGPT、Codex 和 API。  
  公众号：数字生命卡兹克 · 2026-11-18 06:36

- [Amazon and Google will together own nearly 30% of Anthropic after its IPO](<https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/>)  
  Amazon will own just under 15% of Anthropic after the IPO, with the option to go much higher. Google is a close second w  
  TechCrunch · 2026-11-18 06:29

- [OpenAI 发布 GPT-6.2 Astra 和 Sol：部分成绩超越 Claude Fable 5.2 且成本大降](<https://www.ithome.com/1/028/577.htm>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款模型，重点提升专业工作、编程、计算机操作和多步骤智能体任务，同时降低完成任务所需 token 数。  
  IT之家·人工智能 · 2026-11-18 06:23

- [OpenAI 发布 GPT-6.2 Astra 与 Sol，Astra API 降价 20%](<https://www.marktechpost.com/2026/11/17/openai-gpt-6-2-astra-sol-release/>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款闭源模型，面向专业与智能体工作，API 名为 gpt-6.2-astra 和 gpt-6.2-sol。  
  MarkTechPost（RSS） · 2026-11-18 06:07

- [Redwood Research 如何为 AI 发展节奏管控定义“能力活动”](<https://blog.redwoodresearch.org/p/how-should-we-define-capabilities>)  
  Redwood Research 提出一套用于“节奏管控”的算力分类标准，将 AI 公司的活动默认视为“能力活动”，仅豁免闲置算力、狭义产品开发、客户服务和狭义安全活动四类。该定义遵循“假阳性优于假阴性”原则，并要求第三方审计以确保执行。  
  Redwood Research：Blog（RSS） · 2026-11-18 05:36

- [Anthropic IPO Yields 10X Returns for Venture Firms](<https://www.theinformation.com/articles/anthropics-vc-investors-hit-10x-returns-ipo>)  
  The Information · 2026-11-18 05:01

- [OpenAI 发布 GPT-6.2 Astra 与 Sol，API 降价并公布多项基准表现](<https://the-decoder.com/openai-launches-gpt-6-2-astra-and-sol-with-lower-api-prices-and-some-benchmark-gains/>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款模型，面向专业与日常场景，已在 ChatGPT Work 和 Codex 向 Plus、Pro、Enterprise、Edu 用户开放，并可通过 API 调用。  
  The Decoder：AI News（RSS） · 2026-11-18 04:30

- [Microsoft to Let Customers Customize Its AI Models’ ‘Weights’](<https://www.theinformation.com/briefings/microsoft-let-customers-customize-ai-models-weights>)  
  The Information · 2026-11-18 03:40

- [Google 将 Spark 智能体更名为 Gemini Tasks 并向多国用户免费开放](<https://www.theverge.com/tech/1035756/google-spark-ai-tasks-free>)  
  Google 将此前仅限 AI Pro 和 Ultra 订阅用户的 Spark 智能体更名为 Tasks 并免费开放，由 Gemini 4 Hydrogen 模型驱动，可制定膳食计划、管理日程、筛查邮件中的重复支出。  
  The Verge：AI（RSS） · 2026-11-18 02:58

- [微软推出 MAI Licensed Weights：可在自有 Azure 环境部署定制前沿模型](<https://microsoft.ai/news/introducing-mai-licensed-weights/>)  
  微软发布 MAI Licensed Weights，允许企业在自有 Azure 环境中部署并定制微软前沿 AI 模型，数据和定制成果归企业所有。AT&amp;T 用 MAI 模型分析 5G 网络，标准任务上以 GPT-6.1 Sol 的 1/50 成本取得更优表现；Woven by Toyota 在 44% 原本需人工介入的代码修复场景中直接产出可合并修复，成本不到十分之一。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:17

- [Microsoft 发布安全专用模型 MAI Cyber 2 Flash，以更低成本匹配 GPT 6 Astra](<https://microsoft.ai/news/introducing-mai-cyber-2-flash/>)  
  Microsoft 发布专用安全模型 MAI Cyber 2 Flash，面向漏洞发现、修复建议和威胁调查。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Microsoft AI 发布 MAI Code 2 与 MAI Code 2 Flash 编码模型](<https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/>)  
  Microsoft AI 发布 MAI Code 2 和 MAI Code 2 Flash 两款编码模型，面向日常企业编码任务，定价远低于竞品。MAI Code 2 在四项基准平均下达到 GPT 6.1 Sol 98% 的性能但成本仅 40%，达到 Claude Opus 5.5 96% 的性能而成本仅 5%；盲测前端评审中 64% 的情况下胜过 GPT-6 Sol。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Microsoft Ignite 2026：MAI 发布多款模型并推出 Licensed Weights 可控权重方案](<https://microsoft.ai/news/microsoft-ignite-2026-mai-keynote/>)  
  微软 MAI 在 Ignite 2026 主题演讲中发布一系列强调性价比的模型，并推出 MAI Licensed Weights，可定制后在自己的 Azure 环境中运行、掌控权重与数据。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:14

- [决策模型用量激增，TechCrunch 探讨定制化是否成为下一个竞争前沿](<https://techcrunch.com/2026/11/17/as-decision-model-use-skyrockets-is-customization-is-the-next-frontier/>)  
  TechCrunch 报道，10 月 Vercel 的 AI 模型路由上超过四分之一的请求流向了决策模型，这类不产出 token、专用于在预设选项间快速判断的 LLM 诞生仅一个月。  
  TechCrunch：AI（RSS） · 2026-11-18 02:10

- [GPT-6.2 Astra and Sol](<https://www.producthunt.com/products/openai>)  
  Two new OpenAI models: frontier Astra and efficient Sol  
  Product Hunt · English · 2026-11-18 02:06

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 4 页
