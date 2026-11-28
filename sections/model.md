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

- [老黄罕见认错！Anthropic 市值暴涨10%，万亿巨兽算力却只给英伟达 10%](<https://www.163.com/dy/article/LCR4CI1C0511ABV6.html>)  
  网易科技频道 · 网易号 · 2026-11-28 15:13

- [2027 款长城坦克 400 家族上市：24.98 万元起，新增 VLA 辅助驾驶大模型](<https://www.ithome.com/1/033/843.htm>)  
  IT之家 11 月 28 日消息，长城汽车 2027 款坦克 400 家族今日在 2026 广州车展上正式上市，共推出 5 款车型，售价区间为 24.98 万至 31.98 万元。 新车提供汽油、柴油、Hi4-T 和 Hi4-Z 多种…  
  IT之家 · 2026-11-28 14:25

- [奥特曼宣布：OpenAI推出隐私推理，GPT-6.2修正额度错误，开发者却怒了](<https://36kr.com/p/4088907395070594?f=rss>)  
  就在刚刚，奥特曼宣布：OpenAI推出「隐私推理模式」！ 与此同时，Tibo在X上承认了错误，表示GPT-6.2 Astra和Sol的使用量的确被错误计算了。 而与之对应的对策是居然是：问题已修复，同样的工作会消耗更多流量，额度达上限的速度  
  36氪 · 2026-11-28 13:30

- [Inside the AI Training Data Market — Gabe Greenberg, G2i](<https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/inside_the_ai_training_data_market_gabe_greenberg_g2i>)  
  A frontier lab can pay more for training data it gets to keep exclusive, or take a discount on data another lab can b…  
  Latent Space · 2026-11-28 06:19

- [AWS Challenger: Trainium3 Inference and Microarchitecture Deep Dive](<https://newsletter.semianalysis.com/p/trainium3-inferencex>)  
  The Nvidia GPU was originally built to shade pixels, and every Nvidia generation since 2017 has bolted on another pie…  
  SemiAnalysis · 2026-11-27 23:54

- [“打不过，”马斯克公开认输AI模型之争，向员工承认“落后于对手”，警告浪费GPU者将被开除](<https://36kr.com/p/4087944117123713?f=rss>)  
  “因为打不过，所以卖算力。”这不是外界的嘲讽，而是马斯克（Elon Musk）亲自给AI部门员工群起的名字。 据美国媒体报道，马斯克近期已经在SpaceX内部向员工摊牌：公司自家的AI模型开发落后于竞争对手，与其拿GPU训练Grok，不如直  
  36氪 · 2026-11-27 20:31

- [AI算力基础设施盈利分化加剧，主体与收入性质决定谁能先盈利](<https://36kr.com/p/4087846166821249?f=rss>)  
  同样一座智算中心，由地方国资平台出资建设，与由云厂商联合芯片厂共建运营，从立项第一天起就在两本不同的账上： 前者的钱来自财政资金与固定资产投资，收入靠机架出租、政府购买与补贴政策；后者的钱来自经营性现金流，收入跟着自有业务的调用量走，按用量  
  36氪 · 2026-11-27 19:15

- [AI发现物理学“大一统理论”？斯坦福学者联手GPT-6 Astra，提出量子引力新框架](<https://36kr.com/p/4087817299573129?f=rss>)  
  AI正在从科研助手走向基础科学研究的深水区。 一项由斯坦福大学物理学家与OpenAI GPT-6 Astra合作开展的量子引力研究，引发了科技与物理学界关注。 11月25日，斯坦福大学莱因韦伯理论物理研究所物理学家Venkatesa Cha  
  36氪 · 2026-11-27 18:28

- [都说要给AI设限，OpenAI和Anthropic限的却不是一回事](<https://36kr.com/p/4087817655138690?f=rss>)  
  11月22日，OpenAI首席科学家Jakub Pachocki发文，首次公布自家模型的预训练进度数据，并提议各家实验室约定一个共同上限。三天后，Anthropic CEO Dario Amodei在X上发长文，提出需要限制的是AI自主研发  
  36氪 · 2026-11-27 18:24

- [Lute获得2000万美元种子轮融资](<https://www.itjuzi.com/investevent/14708848>)  
  Lute是一家触觉物理AI科技研发商，自研融合视觉与触觉的机器人基础模型 Lute-0，弥补纯视觉方案无法感知握力、滑移、材质的缺陷，面向仓储、零售、制造的灵巧抓取场景，模型可对接第三方机器人硬件。近日，Lute获得2000万美元种子…  
  IT桔子 · 2026-11-27 16:36

- [极端年代：万亿市值、AI 泡沫与资本的信仰｜2026 科技股复盘 S10E37](<https://guiguzaozhidao.fireside.fm/20240452>)  
  同样是科技巨头宣布加大 AI 投入，资本市场为什么会给出截然不同的反应？ 今年 5 月，我们和老朋友 Aaron 聊过 AI 泡沫与循环投资。半年过去，芯片、数据中心和大模型依然牵动着市场，但投资人追问的问题，逐渐从“还要投入多少钱”…  
  科技早知道 · 2026-11-27 14:30

- [OpenAI 修复 GPT-6.2 计费错误后用户额度消耗加快](<https://the-decoder.com/gpt-6-2-astra-users-now-hit-limits-40-faster-after-openai-patched-a-pricing-error/>)  
  OpenAI 修复 GPT-6.2 推出期间的计费错误，据 Codex 工程师 Thibault Sottiaux 称，用户现在触及限额的速度比上周快 40%（Astra）和 25%（Sol），但额度仍比 GPT-6 Astra 和 GPT-6.1 Sol 更耐用。  
  The Decoder：AI News（RSS） · 2026-11-27 01:28

- [在 OpenAI 和 Anthropic 封禁蒸馏数据后，月之暗面转向 Google 与 Meta 模型获取训练数据](<https://the-decoder.com/after-openai-and-anthropic-shut-the-door-on-their-data-a-chinese-ai-developer-is-turning-to-google-and-meta-instead/>)  
  据 Reuters 援引消息人士报道，因美国封堵云漏洞、NVIDIA 限制出货且 OpenAI 与 Anthropic 阻止数据抓取蒸馏，Z.AI 约 3 万亿参数的 GLM-5.5 可能从 11 月推迟到 2027 年第一季度，为此先发布了 7500 亿参数的 GLM-5.4 并称新设计可媲美 2 至 3 万亿参数系统。  
  The Decoder：AI News（RSS） · 2026-11-26 23:45

- [FCC 批准 SpaceX 至 2040 年部署最多 100 万颗 Starmind 卫星用于在轨 AI 数据中心](<https://the-decoder.com/fcc-clears-spacex-to-deploy-up-to-1-million-starmind-satellites-for-orbital-ai-data-centers-by-2040/>)  
  据 Reuters 报道，FCC 已授权 SpaceX 部署最多 100 万颗 Starmind 在轨计算模块卫星，用于在轨道上处理 AI 数据，满足地面日益增长的 AI 算力需求。FCC 同时批准了无线电链路，在光学连接失效时可让 SpaceX 监控和控制这些卫星。  
  The Decoder：AI News（RSS） · 2026-11-26 21:41

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

- [AI data centers are becoming harder to build, and neoclouds are feeling it](<https://techcrunch.com/podcast/ai-data-centers-are-becoming-harder-to-build-and-neoclouds-are-feeling-it/>)  
  ⁠Nvidia has made clear⁠ it won’t backstop an AI data center until it’s nearly ready to run, and that’s landing just as n  
  TechCrunch · 2026-11-25 23:41

- [DeepMind 副总裁谈 AI 智能体自主控制部分 Gemini 实验算力，但离递归自我改进尚远](<https://the-decoder.com/ai-agents-now-control-part-of-deepminds-compute-for-gemini-experiments-but-recursive-self-improvement-remains-distant/>)  
  Google DeepMind 研究副总裁 Koray Kavukcuoglu 在公司播客中表示，AI 智能体已自主控制部分算力为下一代 Gemini 模型运行实验，但距离完全递归自我改进还很远。  
  The Decoder：AI News（RSS） · 2026-11-25 21:23

- [理论物理学家如何看待 AI 改变本行：TheoPhysEval 基准被 GPT-6 Astra 解出近九成](<https://arstechnica.com/ai/2026/11/ai-can-do-the-calculations-physicists-are-figuring-out-what-comes-next/>)  
  Ars Technica 报道理论物理界正在被 AI 改变。物理学家 Suvrat Raju 用从未公开的未发表问题构建 TheoPhysEval 基准，结果显示领先模型可独立解决约 60% 的题目，GPT-6 Astra 实际答对 50 题中的 49 题，且平均每题计算成本不足 3 美元，基准在发布前已被饱和。  
  Ars Technica：AI（RSS） · 2026-11-25 20:00

- [PrismML 发布三元量化模型 Ternary Bonsai 2.5 27B，54 GB 压缩至 5.9 GB](<https://the-decoder.com/prismml-squeezes-an-agent-based-coding-model-with-27-billion-parameters-into-5-9-gb/>)  
  PrismML 发布基于 Qwen3.8-27B 的压缩模型 Ternary Bonsai 2.5 27B，通过三元量化把每个权重压缩为 -1、0 或 +1 三种取值，内存占用仅 5.9 GB，而全精度约需 54 GB。  
  The Decoder：AI News（RSS） · 2026-11-25 19:51

- [MIT 团队发现：不真实的训练数据反而让 AI 气候预测更可靠](<https://the-decoder.com/mit-team-discovers-that-unrealistic-training-data-makes-ai-climate-predictions-more-reliable/>)  
  MIT 联合 ETH Zurich 和帝国理工学院提出一种用合成极端情景数据训练 AI 气候模型的方法，只需一次大规模物理模拟即可完成训练，而此前需要六到八次。该团队称，2050 年 CO2 骤升、2037 年甲烷骤降这类针对性极端变化能让 AI 更精确理解气候系统，并能可靠计算局部环境政策的影响。  
  The Decoder：AI News（RSS） · 2026-11-25 18:47

- [英伟达在 Hugging Face 开放 Nemotron-Labs-Image-30B-A3B 生图模型权重，部分跑分超 GPT Image 2](<https://www.ithome.com/1/032/444.htm>)  
  英伟达在 Hugging Face 公开 Nemotron-Labs-Image-30B-A3B 模型权重。  
  IT之家·人工智能 · 2026-11-25 18:37

- [小红书开源 3DCodeFactory：全自动合成复杂 3D 多轮代码训练数据](<https://mp.weixin.qq.com/s/uX76wMlAIA69bY1tE-I2ng>)  
  小红书发布开源 3D 数据合成框架 3DCodeFactory，并开源数据集 3DCodeFactory-Data，含 5,045 个复杂 3D 任务多轮交互轨迹，单条轨迹平均超 100 万 tokens，总规模 5.52B tokens。  
  公众号：小红书技术（dots.llm） · 2026-11-25 17:59

- [Spark AI](<https://www.producthunt.com/products/spark-ai-7>)  
  AI-native permitting &amp; diligence services for data centers  
  Product Hunt · English · 2026-11-25 15:30

- [Sand.ai 发布视频生成模型 MAGI-2，总参数量 480B](<https://www.ithome.com/1/032/124.htm>)  
  Sand.ai 三呆科技今日发布视频生成模型 MAGI-2，总参数量从 114B 扩展至 480B，激活参数量增至 28B，训练数据规模扩大约 3 倍。模型支持单次生成 4–30 秒视频、一镜到底与多镜头切换，单次最多输入 10 张图片、5 段视频和 5 段音频共 20 份素材，支持 2 万字符提示词和对已有视频的二次编辑，并已完成海光、摩尔线程等国产芯片适配。  
  IT之家·人工智能 · 2026-11-25 14:50

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页
