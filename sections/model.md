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

## 相关资讯 · 193 条

- [国产算力芯片有望成模型推理底座，物理AI迈向动作执行层或加速商业化](<https://www.163.com/dy/article/LCO9S8EO0550WHYR.html>)  
  网易科技频道 · 网易号 · 2026-11-27 12:51

- [港股“大模型双雄”、中芯国际、华虹宏力、兆易创新、天数智芯，集体大涨](<https://www.163.com/dy/article/LCO92DB60519DDQ2.html>)  
  网易科技频道 · 网易号 · 2026-11-27 12:37

- [Claude Code 灵魂人物，开始反思 Vibe Coding 的未来了](<https://36kr.com/p/4087449994181000?f=rss>)  
  Anthropic 最近真是流年不利。 一边是顶着史上最大 IPO 的光环上市不到一周就破发，另一边是自家最能打的 Claude Code 团队，接连有核心成员转投竞争对手 OpenAI。 昨天，Claude Code 核心工程师 Thar  
  36氪 · 2026-11-27 11:59

- [大模型无法击穿的，才是具身智能真正壁垒](<https://36kr.com/p/4087456845970050?f=rss>)  
  具身智能洗牌之下，投资人继续用脚投票。 投资界获悉，零次方机器人完成数亿元新一轮融资。本轮投资方包括清科产投、锡洲国际、卓源亚洲、粤民溯锋、无锡滨湖、合肥建投、合肥产投国正、杰克集团以及多家产业战略投资方。老股东同创伟业、力合基金、接力天使  
  36氪 · 2026-11-27 11:56

- [全新深蓝 S07/L07 AI 激光版车型行业首批开放域端到端豆包大模型](<https://www.ithome.com/1/033/283.htm>)  
  IT之家 11 月 27 日现场消息，在今日的 2026 广州车展上，深蓝汽车董事长邓承浩宣布，全新深蓝 S07/L07 AI 激光版车型将 行业首批开放域端到端豆包大模型 。 邓承浩介绍称，过去的车载语音是听懂听清到理解再到执行的三…  
  IT之家 · 2026-11-27 11:47

- [腾讯混元发布 3D 生成大模型 Hy3D 3.6：面向专业 3D 创作](<https://www.ithome.com/1/033/282.htm>)  
  IT之家 11 月 27 日消息，腾讯混元今天（27 日）正式发布最新一代 3D 大模型 Hy3D 3.6。新版本面向专业 3D 创作，重点优化了高模和 PBR 材质贴图的生成能力。 腾讯混元表示，通过该模型生成的 几何表面整洁、结构…  
  IT之家 · 2026-11-27 11:44

- [时空智子完成数千万元B轮融资，加速全链路闭环世界模型落地](<https://www.pedaily.cn/first/196070.shtml>)  
  浙江时空智子大数据有限公司11月27日宣布完成B轮数千万元融资，由光谷科创投、光谷人才基金及同创伟业联合投资。融资资金将主要用于时空基础大模型的研发、行业智能体的持续完善和落地以及顶 尖人才的引进。（投资界讯） 原文链接  
  投资界 · 2026-11-27 10:38

- [Gemini 4 Carbon点亮8颗太阳，70年几何悬案告破，只用6页神级证明](<https://36kr.com/p/4087355247540614?f=rss>)  
  你还记得高中地理课上的晨昏线吗？ 这个寻常的物理现象，在数学家眼中却是极具挑战的几何谜题。 如果这颗星球不是完美的圆球，而是被随意捏造、棱角歪斜的「凸多面体」，甚至表面布满平滑与尖锐交错的地形，最少需要挂几颗太阳，才能把它彻底照亮？ 195  
  36氪 · 2026-11-27 10:33

- [大模型涌入药物研发：闭环、物理卡点和押注验证](<https://36kr.com/p/4087373831371141?f=rss>)  
  范式变革、大厂落子、热钱变多，今年的AI叙事新在哪，新涌入的模型巨头会给药物研发带来什么？ AI与生物制药的结合不是新鲜事。 产业界的努力主要围绕着一个广为人知的成本法则展开：一款新药从立项到上市，通常要花10到15年，耗费超20亿美元，同  
  36氪 · 2026-11-27 10:33

- [Karpathy点燃LLM Wiki，中国公司率先做成了企业级产品](<https://36kr.com/p/4087315146963588?f=rss>)  
  用AI处理复杂资料时，“搜不到东西”不再是问题，“搜出来的东西不可信”、“搜出来的东西Agent用不了”才是。 当前的专业场景里，资料里既有动辄成百上千页的PDF，也有视频、Excel表格、图文混排文件等五花八门的格式。不同材料之间的说法互  
  36氪 · 2026-11-27 09:59

- [“我把钱退给LP了”](<https://36kr.com/p/4087346257771140?f=rss>)  
  承认抢不到份额很难吗？很难，谁都不想把好不容易募到的钱还回去。 今年，前沿科技投资几乎成了一个象征嗅觉与站位的共识。LP对“心仪标的”诉求明确，专项基金也得以迅速升温——脑机接口、AI大模型、商业航天、量子科技等赛道上，项目专项基金纵横在各  
  36氪 · 2026-11-27 09:50

- [相对论和量子力学统一有戏了？GPT-6 Astra参与，83页论文让物理圈炸锅](<https://36kr.com/p/4087282603932297?f=rss>)  
  「如果这个结论最终被证实，物理学就真正迎来了大一统。」 刚暴击完数学，AI又把「屠刀」伸向物理了。 斯坦福物理学家 Venkatesa Chandrasekaran 发了篇83页的新论文，配合GPT-6 Astra给出了一套 在四维时空中统  
  36氪 · 2026-11-27 09:44

- [投资界24h\| 马云现身平头哥办公区；蜜雪冰城，间接投了DeepSeek；哈工大系，又排队IPO](<https://www.pedaily.cn/first/196018.shtml>)  
  平头哥冲刺IPO之际，马云现身办公区与员工合影蜜雪冰城间接入股DeepSeek哈工大系工大卫星启动A股IPO湖北智数产业基金设立，规模4.8亿元宇树科技王兴兴判断5到10年中国机器人年产量或超汽车达2000万台。（投资界） 原文链接  
  投资界 · 2026-11-27 08:30

- [阿里加码北美招聘，Qwen团队今年已吸纳数百名AI人才](<https://www.pedaily.cn/first/196010.shtml>)  
  近日，阿里正加大北美招聘力度，主要面向全球顶级AI研究员。Qwen北美团队已开放多个岗位，涉及模型研究、训练与推理、多模态、智能体（Agent）和数据等方向。今年全球已有数百人加入阿里Qwen大模型团队。（投资界）  
  投资界 · 2026-11-27 08:26

- [前苹果空间智能首席科学家权龙再创业，成立Envision AI](<https://www.pedaily.cn/first/196011.shtml>)  
  11月26日，界面新闻记者获悉，香港科技大学首个计算机视觉实验室创始人、前苹果空间智能方向首席科学家权龙宣布二次创业，成立Envision AI（格秩科技），聚焦空间与物理基础模型研发。权龙此前创办的三维重建企业Altizure于20…  
  投资界 · 2026-11-27 08:26

- [国产大模型集体进军AI4S](<https://www.163.com/dy/article/LCNMCIR20514R9P4.html>)  
  网易科技频道 · 网易号 · 2026-11-27 07:10

- [TDK Bets on AI Data Centers and Robots to Fuel Sensor Growth](<https://www.bloomberg.com/news/articles/2026-11-26/tdk-bets-on-ai-data-centers-and-robots-to-fuel-sensor-growth>)  
  Bloomberg · 2026-11-27 05:00

- [OpenAI 修复 GPT-6.2 计费错误后用户额度消耗加快](<https://the-decoder.com/gpt-6-2-astra-users-now-hit-limits-40-faster-after-openai-patched-a-pricing-error/>)  
  OpenAI 修复 GPT-6.2 推出期间的计费错误，据 Codex 工程师 Thibault Sottiaux 称，用户现在触及限额的速度比上周快 40%（Astra）和 25%（Sol），但额度仍比 GPT-6 Astra 和 GPT-6.1 Sol 更耐用。  
  The Decoder：AI News（RSS） · 2026-11-27 01:28

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

- [三部委印发《新一代通信网建设实施方案》：探索大小模型协同、人机协同等网络运维新范式](<https://www.ithome.com/1/032/562.htm>)  
  工业和信息化部联合国家网信办、国家发展改革委印发《新一代通信网建设实施方案》，提出探索大小模型协同、人机协同、机机协同等网络运维新范式。方案要求搭建网络大模型和智能体开发工具链与自动化运维平台，围绕网络建设、管理、运营场景打造特色智能体，并探索复杂场景下智能体协同技术，逐步建成高等级自智网络。  
  IT之家·人工智能 · 2026-11-26 09:03

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

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页
