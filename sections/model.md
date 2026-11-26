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

## 相关资讯 · 183 条

- [GPT-6.2额度突然不耐用了？OpenAI承认计费出错](<https://www.163.com/dy/article/LCNMHC1J0511B8LM.html>)  
  网易科技频道 · 网易号 · 2026-11-27 07:13

- [国产大模型集体进军AI4S：年内融资突破200亿元，大模型从“会聊天”转向“](<https://www.163.com/dy/article/LCNMCIR20514R9P4.html>)  
  网易科技频道 · 网易号 · 2026-11-27 07:10

- [GPT-6.2 额度突然不耐用了？OpenAI 承认计费出错，修复后 Astra 消耗速度加快 40%、Sol 加快 25%](<https://www.ithome.com/1/033/138.htm>)  
  IT之家 11 月 27 日消息，OpenAI 已紧急修复 GPT-6.2 上线初期的一项计费错误 —— 此前该问题导致大多数用户使用 GPT-6.2 Astra 和 Sol 时，消耗的套餐额度按折扣价进行了计算。 OpenAI Co…  
  IT之家 · 2026-11-27 06:59

- [TDK Bets on AI Data Centers and Robots to Fuel Sensor Growth](<https://www.bloomberg.com/news/articles/2026-11-26/tdk-bets-on-ai-data-centers-and-robots-to-fuel-sensor-growth>)  
  Bloomberg · 2026-11-27 05:00

- [Nvidia 暂停向东南亚四国出货服务器芯片](<https://techcrunch.com/2026/11/26/nvidia-hits-pause-on-chip-shipments-to-southeast-asia/>)  
  据 WSJ 报道，Nvidia 已通知 Dell、Super Micro 等制造伙伴无限期暂停向马来西亚、新加坡、泰国和印尼出货服务器，以评估区域伙伴是否符合美国出口要求。背景是中国企业此前通过这些国家的数据中心远程使用 Nvidia 芯片，美国商务部已于本月关闭该漏洞；Institute for Progress 估算这类远程数据中心约供给中国 24% 的 AI 算力。  
  TechCrunch：AI（RSS） · 2026-11-27 04:03

- [OpenAI 修复 GPT-6.2 计费错误后用户额度消耗加快](<https://the-decoder.com/gpt-6-2-astra-users-now-hit-limits-40-faster-after-openai-patched-a-pricing-error/>)  
  OpenAI 修复 GPT-6.2 推出期间的计费错误，据 Codex 工程师 Thibault Sottiaux 称，用户现在触及限额的速度比上周快 40%（Astra）和 25%（Sol），但额度仍比 GPT-6 Astra 和 GPT-6.1 Sol 更耐用。  
  The Decoder：AI News（RSS） · 2026-11-27 01:28

- [GTA VI 全人工开发 vs Anthropic 813亿美元IPO：TechCrunch 论效率不该是唯一信条](<https://techcrunch.com/2026/11/26/as-anthropic-ipos-grand-theft-auto-vi-proves-why-efficiency-isnt-a-virtue/>)  
  TechCrunch 作者对比同一周的两个纪录事件：Rockstar 开发的 GTA VI 成为 Metacritic 史上评分最高游戏，首发日收入 37.9 亿美元，全程未使用生成式 AI，约 5000 人耗时十余年打造，含 30000 个有独特外观和性格的 NPC；同期 Anthropic 以 813 亿美元估值完成史上最大 IPO。  
  TechCrunch：AI（RSS） · 2026-11-27 00:00

- [在 OpenAI 和 Anthropic 封禁蒸馏数据后，月之暗面转向 Google 与 Meta 模型获取训练数据](<https://the-decoder.com/after-openai-and-anthropic-shut-the-door-on-their-data-a-chinese-ai-developer-is-turning-to-google-and-meta-instead/>)  
  据 Reuters 援引消息人士报道，因美国封堵云漏洞、NVIDIA 限制出货且 OpenAI 与 Anthropic 阻止数据抓取蒸馏，Z.AI 约 3 万亿参数的 GLM-5.5 可能从 11 月推迟到 2027 年第一季度，为此先发布了 7500 亿参数的 GLM-5.4 并称新设计可媲美 2 至 3 万亿参数系统。  
  The Decoder：AI News（RSS） · 2026-11-26 23:45

- [FCC 批准 SpaceX 至 2040 年部署最多 100 万颗 Starmind 卫星用于在轨 AI 数据中心](<https://the-decoder.com/fcc-clears-spacex-to-deploy-up-to-1-million-starmind-satellites-for-orbital-ai-data-centers-by-2040/>)  
  据 Reuters 报道，FCC 已授权 SpaceX 部署最多 100 万颗 Starmind 在轨计算模块卫星，用于在轨道上处理 AI 数据，满足地面日益增长的 AI 算力需求。FCC 同时批准了无线电链路，在光学连接失效时可让 SpaceX 监控和控制这些卫星。  
  The Decoder：AI News（RSS） · 2026-11-26 21:41

- [比亚迪、OPPO押注，芯爱科技开启IPO征程](<https://36kr.com/p/4086478092675712?f=rss>)  
  AI算力竞赛正在向半导体产业链深处延伸。 近日，芯爱科技（南京）股份有限公司（简称：芯爱科技）启动上市辅导，这家累计融资超过50亿元的封装基板企业，背后聚集了比亚迪、OPPO、胜宏科技等产业资本。高端芯片“底座”的自主可控，正在迎来新的市场  
  36氪 · 2026-11-26 21:09

- [Neocloud的好日子到头了？](<https://36kr.com/p/4086486991022473?f=rss>)  
  谁能想到，AI算力还供不应求，卖算力的Neocloud却已经跌麻了。 截至11月25日，CoreWeave、Nebius、IREN较年内高点分别暴跌69.2%、71.7%和81.8%。体量更小的SharonAI和Boost Run，跌幅更是  
  36氪 · 2026-11-26 21:00

- [闪存巨头联手英伟达，布局AI存储新赛道](<https://36kr.com/p/4086496386607497?f=rss>)  
  NAND闪存生产商铠侠周四宣布，与英伟达合作通过高性能固态硬盘（SSD）与英伟达SCADA软件，探索将GPU有效可访问容量扩展至PB级。 （来源：公司官网） 受此消息带动，铠侠周四收涨12.57%，明显好于今日冲高后显著回落的日股AI同行。  
  36氪 · 2026-11-26 20:59

- [IREN：有电没单、有地缺钱，矿场变云难在哪？](<https://36kr.com/p/4086511715596168?f=rss>)  
  在这一轮AI算力热里，IREN算是一个典型的 “半路出家” 选手：前身是一家比特币矿企，这两年把矿场改成数据中心，做起了AI算力出租的生意。它和其他新云最大的不同之处是手里攥着超过5GW已签下并网协议的电力和自有土地。 电不缺、订单也签得快  
  36氪 · 2026-11-26 20:56

- [三位前苹果研究员创业，拿下英伟达 6000 万美元融资，AI 一对一教学迎来新变量](<https://36kr.com/p/4086520077072521?f=rss>)  
  过去几年，AI 教育产品经历了从拍照搜题、文本问答到实时语音交互的演进，大模型的出现，让低成本、规模化的一对一教学成为可能。但与真人老师相比，AI 仍然缺少一种重要能力：感知学生在学习过程中的状态，并及时作出反馈。 当学生皱起眉头、陷入沉默  
  36氪 · 2026-11-26 20:50

- [能力分超多家国际头部厂商：元任务 AI 实验室开源决策模型排全球第二](<https://36kr.com/p/4086482287864448?f=rss>)  
  随着多家国际头部厂商相继推出决策模型，一款开源模型在第三方榜单上取得了较高的能力分。元任务 AI 实验室与清华经管商业模式创新研究中心联合研发的 MetaDecision-31B-Rain，在 JevBench 开源权重榜排全球第二、中国团  
  36氪 · 2026-11-26 19:25

- [历史首次，马斯克放100万颗卫星，建太空数据中心，美国批准了](<https://36kr.com/p/4086411376142979?f=rss>)  
  智东西11月26日消息，今日，美国联邦通信委员会（FCC）宣布，批准马斯克旗下SpaceX部署 至多100万颗计算卫星 ，组成名为Starmind的太空数据中心星座，为地球提供AI计算服务，在轨道上处理海量数据。FCC透露，这是 美国历史上  
  36氪 · 2026-11-26 18:58

- [Anthropic上市：从Uber的预算看Claude怎么赚钱](<https://www.tmtpost.com/8218636.html>)  
  Anthropic 在纳斯达克上市。今年前三季度，它近八成收入来自按使用量计费的业务。  
  钛媒体 · 2026-11-26 18:34

- [闪科光联连续完成两轮数千万元融资，卡位 AI 算力「最后一米」光互连新赛道](<https://www.pedaily.cn/first/195737.shtml>)  
  上海闪科光联科技有限公司11月26日宣布，连续完成两轮融资，累计数千万元人民币。种子轮由励石创投独家投资，天使轮由商汤国香、长石资本等联合领投，多家产业基金跟投。资金将用于核心芯片研发与封装样品线建设，公司已启动下一轮融资，推进Mic…  
  投资界 · 2026-11-26 17:52

- [Epic CEO 斯威尼公开批评 Claude 误判其集合论研究为模型蒸馏](<https://www.ithome.com/1/032/822.htm>)  
  Epic Games CEO 蒂姆·斯威尼本周在 X 上称 Claude 是垃圾，因为模型中断了他的集合论研究并指控其在做模型蒸馏，而他用公司账号每天仅输入一两个小时提示词。蒸馏指用强模型输出生成训练数据，各家实验室的服务条款均禁止。此事暴露了防蒸馏检测过于激进、开始干扰正常用户高水平工作的问题，Anthropic 后续是否调整过滤机制尚不明确。  
  IT之家·人工智能 · 2026-11-26 15:21

- [20VC: Jensen Huang's $1TRN Return: What Happens Now \| Anthropic Goes Public: Largest IPO Of All Time &amp; How It Changes Venture \| Applied Compute, Bill.com and Mailchimp Acquisitions Broken Down](<https://thetwentyminutevc.libsyn.com/20vc-jensen-huangs-1trn-return-what-happens-now-anthropic-goes-public-largest-ipo-of-all-time-how-it-changes-venture-applied-compute-billcom-and-mailchimp-acquisitions-broken-down>)  
  AGENDA: 04:00 Jensen's $1 Trillion Comeback: Nvidia's King Returns 13:00 Anthropic Goes Public: Inside the Biggest IP…  
  20VC · 2026-11-26 15:07

- [Zipher获得5300万美元A轮融资](<https://www.itjuzi.com/investevent/14708739>)  
  Zipher是一家AI数据基础设施提供商，为 Agent 驱动的数据工作流提供智能执行层，依据客户设定的 SLA 与预算自动调度、改写、优化云数据任务，原生兼容主流云与数据工具链，帮助企业降低算力成本、稳定数据管道。近日，Zipher…  
  IT桔子 · 2026-11-26 14:45

- [腾讯混元开源草稿模型 DFly2，让 Hy4 flash 吐字提速 4.2 倍](<https://mp.weixin.qq.com/s/d1HMHrSEChCJiBRZ0tNOyg>)  
  腾讯混元开源新一代草稿模型 DFly2，作为加速组件挂在 Hy4 flash 旁，在权重与输出不变的前提下提升吐字速度，单项最高提速 4.2×。DFly2 专为 DSA 类稀疏注意力大模型和长上下文场景设计，通过 KV Share 与 Index Share 复用目标模型的 KV cache 和 indexer 选出的至多 2,048 个位置，实现零额外 KV 显存。  
  公众号：腾讯混元 · 2026-11-26 14:33

- [闪科光联获得种子轮融资](<https://www.itjuzi.com/investevent/14708731>)  
  闪科光联是一家MicroLED光互联服务提供商，专注于 MicroLED 高速光互连芯片与光引擎研发，致力于为下一代数据中心、AI 集群和超算中心提供低成本、低功耗、高带宽密度的新一代互连方案。近日，闪科光联获得种子轮融资，励石创投投资。  
  IT桔子 · 2026-11-26 13:57

- [闪科光联获得数千万人民币天使轮融资](<https://www.itjuzi.com/investevent/14708730>)  
  闪科光联是一家MicroLED光互联服务提供商，专注于 MicroLED 高速光互连芯片与光引擎研发，致力于为下一代数据中心、AI 集群和超算中心提供低成本、低功耗、高带宽密度的新一代互连方案。近日，闪科光联获得数千万人民币天使轮融资…  
  IT桔子 · 2026-11-26 13:56

- [NVIDIA 开源 Nemotron 3.5 Parse 训练数据集与微调配方并提升推理速度](<https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin>)  
  NVIDIA 在此前发布 Nemotron 3.5 Parse 文档解析模型的基础上，开源三个训练数据集（Synthetic Charts V1 约 998 万样本、Synthetic Tables V1 100 万样本、OCR Synthetic Multilingual v2 约 790 万样本）并发布完整微调配方。  
  Hugging Face 社区博客（混合发现） · 2026-11-26 13:05

- [铠侠与英伟达合作，探索用 SSD 将 GPU 有效显存扩展至 PB 级](<https://www.ithome.com/1/032/722.htm>)  
  铠侠与英伟达启动面向 AI 应用的概念验证，探索借助英伟达 SCADA 软件与铠侠 SSD 将 GPU 有效显存扩展至 PB 级。验证在英伟达 GB200 NVL72 机架级系统上展开，搭载 144 块 7.68TB 的 KIOXIA XD8 系列 E1.S NVMe SSD，总容量约 1.106PB，将测试处理 2 万亿个向量构成的数据库，并支持以 512 字节为单位随机访问 SSD。  
  IT之家·人工智能 · 2026-11-26 12:00

- [报告称 SpaceX 下调 AI 算力租赁价格，降幅约 20%\~35%](<https://www.ithome.com/1/032/716.htm>)  
  SemiAnalysis 11 月 25 日发布报告称，SpaceX 将小型计算集群的 Blackwell GPU 现货租赁价格从每 GPU 小时约 15.0 至 15.5 美元下调至 10 至 12 美元，降幅约 20% 到 35%。  
  IT之家·人工智能 · 2026-11-26 11:50

- [中国牵头制定的人工智能训练数据质量国际标准 ISO/IEC 5259-4:2024 成 30 余个欧洲国家合规评估技术参考](<https://www.ithome.com/1/032/714.htm>)  
  中国专家牵头制定的 ISO/IEC 5259-4:2024 已被欧洲相关机构采纳，成为 30 余个欧洲国家人工智能合规评估的重要技术参考，应用于训练数据采集、标注与质量判断等环节。该标准明确了人工智能训练数据全生命周期的质量管理流程与技术要求。我国目前已牵头研制 29 项人工智能基础共性国际标准，并联合多国编制生成式人工智能风险应对指南国际标准提案。  
  IT之家·人工智能 · 2026-11-26 11:47

- [百优象获得500万人民币天使轮融资](<https://www.itjuzi.com/investevent/14708700>)  
  百优象科技是一家算力与影像设备解决方案提供商，主营计算机软硬件、面向高端AI计算硬件与智算集群，围绕合规筛选、质检交付、库存调度和资源配置，提供标准化流通服务。该公司自主研发芯片性能增强优化软件、服务器集群资源调度管理系统、集成电路性…  
  IT桔子 · 2026-11-26 10:19

- [闪科光联连续完成两轮融资，聚焦AI算力「最后一米」光互连新赛道](<https://www.pedaily.cn/first/195533.shtml>)  
  上海闪科光联科技有限公司近日宣布，于11月26日完成两轮累计数千万元融资，种子轮由励石创投独家投资，天使轮由商汤国香等联合领投，多家产业基金跟投。资金将用于核心芯片研发、封装样品线建设，公司正启动下一轮融资，推进MicroLED光互连…  
  投资界 · 2026-11-26 09:15

- [三部委印发《新一代通信网建设实施方案》：探索大小模型协同、人机协同等网络运维新范式](<https://www.ithome.com/1/032/562.htm>)  
  工业和信息化部联合国家网信办、国家发展改革委印发《新一代通信网建设实施方案》，提出探索大小模型协同、人机协同、机机协同等网络运维新范式。方案要求搭建网络大模型和智能体开发工具链与自动化运维平台，围绕网络建设、管理、运营场景打造特色智能体，并探索复杂场景下智能体协同技术，逐步建成高等级自智网络。  
  IT之家·人工智能 · 2026-11-26 09:03

- [周群飞已投百家机器人](<https://www.pedaily.cn/first/195508.shtml>)  
  女首富掌舵的蓝思科技，披露了一个颇为惊人的数字：公司已在一级市场战略投资超过50家机器人产业链企业，覆盖超过100家国内机器人客户。 从具身智能大模型、机器人本体，到灵巧手、脑机接口，甚至机器人租赁，蓝思科技的投资触角几乎延伸到了整条…  
  投资界 · 2026-11-26 08:37

- [Anthropic上市次日，创始人兄妹套现5.6亿美元](<https://www.pedaily.cn/first/195501.shtml>)  
  根据监管文件，人工智能巨头Anthropic的首席执行官兼联合创始人达里奥·阿莫代伊（Dario Amodei）在该公司上市次日出售了价值2.804亿美元的股票。与此同时，他的妹妹兼公司联合创始人丹妮拉·阿莫代伊（Daniela Am…  
  投资界 · 2026-11-26 08:31

- [Evaluating Recent Model Releases on GDPx](<https://newsletter.semianalysis.com/p/evaluating-recent-model-releases>)  
  GPT-6.2 Astra takes the crown but bad at software engineering, Gemini 4 Neon is an impressive improvement from Google…  
  SemiAnalysis · 2026-11-26 08:05

- [Hugging Face 教程：用 Qwen3-0.6B 训练四智能体集群学会通信](<https://huggingface.co/blog/training-swarms>)  
  Hugging Face 发布多智能体系列博客第一篇，用 TRL 在 Hugging Face Jobs 上复现 s³ 论文的信息聚合任务，训练四个共享 Qwen3-0.6B 策略的智能体学会通信。  
  Hugging Face 官方团队博客 · 2026-11-26 08:00

- [Together AI 将 Kimi-K3.1-Pro 的老挝语翻译能力蒸馏进 Qwen3.8-27B](<https://www.together.ai/blog/distilling-kimi-into-qwen>)  
  Together AI 发现 Qwen3.8-27B 无法写老挝语，会以泰语作答，FLORES-200 上仅得 5.5 chrF++。团队用 Kimi-K3.1-Pro 作教师做 off-policy 蒸馏，在约 3,800 条翻译上训练 LoRA 后，学生模型达到 44.3 分、为教师分数的 93%，全部输出为老挝文，且保住了泰语能力，全部实验成本 $260。  
  Together AI 研究与产品博客（RSS） · 2026-11-26 08:00

- [卡兹克把《人生意义设计课》做成AI Prompt，帮你设计人生的意义](<https://mp.weixin.qq.com/s/d-MoIMsMdxtR9qw3dn-8sg>)  
  公众号作者卡兹克将斯坦福《人生意义设计课》新书的核心方法改编成一个多轮对话Prompt，通过四个阶段6到9个问题，最终生成一份5000到7000字的《个人意义设计手册》。他用GPT-6.2完整实测并展示了手册内容，包括意义地图、思维误区重构、罗盘价值观和可执行的意义时刻设计，全程约20到30分钟。  
  公众号：数字生命卡兹克 · 2026-11-26 07:56

- [OpenAI 的 Thariq Shihipar 谈编程智能体时代的“革命与文艺复兴”](<https://latent.space/p/the_revolution_vs_the_renaissance_thariq_shihipar_openai/>)  
  在 AI Engineer CODE 演讲中，Thariq Shihipar 演示了用编程智能体批量生成软件与打磨单件作品可以并存：他在 /human 文件夹里改一块石头的尺寸后立刻试投掷，也做过一个可切换模式的 Mac Dock。他谈到自己因编程智能体改变了哪些看法、决策模型如何从设计师定义的动作中选择，以及谁来决定哪些实验值得投入算力。他在录制后宣布加入 OpenAI。  
  Latent Space（RSS） · 2026-11-26 06:28

- [OpenAI 试点 Private Inference，企业可在其最强模型上运行不外泄数据的查询](<https://the-decoder.com/openai-wants-companies-to-trust-it-with-sensitive-work-by-promising-not-to-look-at-their-data/>)  
  OpenAI 正面向首批企业客户试点 Private Inference，企业可在其最强模型上运行查询而 OpenAI 无法访问数据。查询在可独立验证安全性的隔离硬件上处理，Sam Altman 还提到 Private Safety Processing，可在不存储客户数据的前提下扫描滥用内容，被标记内容加密后存放在客户自己的云中。  
  The Decoder：AI News（RSS） · 2026-11-26 02:22

- [vLLM 新加坡 Meetup 复盘：更快 Prefill、智能体写内核与 Vera Rubin 路线](<https://pytorch.org/blog/vllm-singapore-meetup-faster-prefill-agent-written-kernels-and-the-road-to-vera-rubin/>)  
  vLLM 团队复盘 11 月 13 日在新加坡 SGInnovate 举办的技术 meetup，由 Inferact 和 NVIDIA 主办。  
  PyTorch：Blog（RSS） · 2026-11-26 02:03

- [FCC 批准 SpaceX Starmind 计划部署至多 100 万颗 AI 卫星](<https://www.theverge.com/science/1042278/spacex-fcc-starmind-ai-space-data-centers>)  
  FCC 宣布授权 SpaceX 在 Starmind 计划下部署至多 100 万颗搭载 AI 芯片的卫星，这是该机构首次批准完整的 AI 卫星星座。批准要求 SpaceX 在 2033 年前部署至少一颗卫星，2040 年达到 100 万颗里程碑；FCC 同时搁置了其在 600km 以上坟墓轨道处置卫星的请求，称处置方案信息不足。  
  The Verge：AI（RSS） · 2026-11-26 01:44

- [Runway 与 Meta 将 Praxis-1 引入 ExecuTorch](<https://runwayml.com/news/company-news/runway-meta-praxis-1-executorch>)  
  Runway 的开源权重机器人世界动作模型 Praxis-1 现已通过 Meta PyTorch 团队的工作，在 ExecuTorch 与 NVIDIA TensorRT 上运行。  
  Runway：News（网页） · 2026-11-26 01:21

- [Baseten 如何为推理工作负载实现最小权限访问](<https://www.baseten.co/blog/least-privilege-access-for-inference-workloads>)  
  Baseten 推出面向推理工作负载的最小权限访问控制，用 OIDC 短期令牌替代长期云密钥，并通过 BDN 只读卷挂载权重，使服务副本无需访问原始存储桶。运行时 OIDC 让容器按需获取临时云凭证拉取 LoRA 适配器，出站限制则把连接限定在模型实际调用的主机。  
  Baseten 工程博客（网页） · 2026-11-26 00:49

- [Newcomer：AI公开市场恐慌未传导至一级市场，推理创业公司或成风向标](<https://www.newcomer.co/p/vc-funding-keeps-flowing-as-nvidia>)  
  Newcomer撰文分析AI公开市场情绪恶化但私募市场仍在运转，Sierra以300亿美元估值融资超10亿美元，Cognition传以750亿美元估值洽谈。文章指出，公开市场对AI的悲观情绪尚未传导至私募市场，但推理创业公司可能成为先行信号；neocloud要求推理服务商预付高达50%合同金额以锁定算力，使原本轻资产的业务模式面临资本压力。  
  Newcomer 新闻长文（RSS） · 2026-11-26 00:48

- [上下文漂移如何影响你的 AI Agent：470 项实验与一个免费的 MCP 解法](<https://dev.to/googleai/how-context-drift-impacts-your-ai-agents-1iph>)  
  Google AI 开发者 Patrick Kelly 通过 470 个任务实测区分 context rot 与 context drift，在 Gemini 3.8 Flash 和 Gemini Pro 的沙盒中发现：模型在 73% 的运行中内部察觉文件冲突，但 0% 会主动告知用户，95%-100% 的情况下任务级 skill 文件会覆盖 AGENTS.md 的严格规则。  
  Google AI：DEV 作者专属（RSS） · 2026-11-26 00:19

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页
