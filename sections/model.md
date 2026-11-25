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

## 相关资讯 · 146 条

- [从单点冲高到按需分工，11月大模型竞争的四个变化](<https://36kr.com/p/4084981247841927?f=rss>)  
  从训练出一款更强的模型，转向设计一套能够持续生产、分配并变现智能的系统。 2026年11月，大模型厂商开始了一轮新模型的「扎堆」发布。 这次已经没人再单纯强调模型变得更「聪明」，而是都在强调更具体的优化方向、应用场景和成本优势。 在海…  
  36氪 · 2026-11-25 20:30

- [老黄回归，存储下跌，半导体的繁荣周期还有多久？](<https://36kr.com/p/4085012701473160?f=rss>)  
  由于人工智能数据中心的大规模投资，全球半导体行业正经历着前所未有的繁荣。这些人工智能数据中心如同“黑洞”，无休止地消耗着半导体。 结果，消费级存储器的需求被搁置，导致DRAM和NAND闪存（以下简称NAND）极度短缺，价格飙升（图1）…  
  36氪 · 2026-11-25 20:23

- [AI“教父”杨立昆怒怼Anthropic CEO：渲染AI危险，只是想让开源模型非法](<https://36kr.com/p/4085017435761028?f=rss>)  
  「从 GPT-2 时代开始，Dario 就一直在渲染 AI 的危险，好让开放模型被认定为非法，而他自己则能继续掌控一切。」 近日，图灵奖得主、AI 教父 Yann LeCun（杨立昆）在 X 上公开发表了一番相当激烈的言论。他不仅指责…  
  36氪 · 2026-11-25 20:21

- [A社Tibo被曝加盟OpenAI，上市前离职三人组异地团圆](<https://36kr.com/p/4085043406973571?f=rss>)  
  亏贼，OpenAI这是要把Claude Code的老班底凑齐了？？ 就在刚刚，硅谷知名人事爆料账号@ArfurGrok放出消息： Claude Code核心成员Thariq Shihipar，已加入OpenAI 。 再往前翻一周，同一…  
  36氪 · 2026-11-25 20:16

- [黄仁勋的“光”：详解AI算力背后的光通信产业链、英伟达赌注与技术博弈](<https://36kr.com/p/4085062673749895?f=rss>)  
  黄仁勋从辞职到回归，只用了11天。但在这11天里，整个AI产业链都跟着坐了一次过山车。特别是有一个被黄仁勋，亲手推上风口浪尖的行业，正在经历一场更大的变化：光通信。 虽然它不像GPU一样参与计算，却能卡住AI的脖子，为什么？答案就藏在…  
  36氪 · 2026-11-25 20:01

- [英伟达开放 Nemotron-Labs-Image-30B-A3B 生图 AI 模型权重：某些跑分超 GPT Image 2](<https://www.ithome.com/1/032/444.htm>)  
  IT之家 11 月 25 日消息，科技媒体 Wccftech 今天（11 月 25 日）发布博文，报道称英伟达在 Hugging Face 平台悄然公开了 Nemotron-Labs-Image-30B-A3B 模型的权重。该模型采用…  
  IT之家 · 2026-11-25 18:37

- [Avicena获得超1亿美元C轮融资](<https://www.itjuzi.com/investevent/14705552>)  
  Avicena是一家Micro-LED互连技术开发商，首创基于 Micro‑LED 的 LightBundle™超低功耗高速互连方案，替代传统铜互连，用于 AI 与高性能算力集群内芯片、内存之间的数据传输，具备高带宽密度、低能耗、远距…  
  IT桔子 · 2026-11-25 18:35

- [长江词元完成超3000万元天使轮融资](<https://www.itjuzi.com/investevent/14708496>)  
  长江词元由长江产业集团牵头，联合市场化专业团队、人工智能独角兽企业联合组建。定位：AI 词元 / 算力调度运营平台，搭建「算力投资 + 算力运营 + 词元输出 + 产业协同」全链条模式，面向湖北政企客户提供大模型词元集中集采、统一接入…  
  IT桔子 · 2026-11-25 18:15

- [远景科技自研物理AI气象大模型“远景天机”亮相](<https://www.163.com/tech/article/LCJM1KB200098IEO.html>)  
  网易科技 · 2026-11-25 17:47

- [Nidus获得3000万美元战略投资](<https://www.itjuzi.com/investevent/14708679>)  
  Nidus是一家具身智能科技研发商，研发机器人基础模型，为传统工业机器人提供泛化操作能力，主打国防工厂线束精密装配自动化，采用本地化主权 AI 框架，保障涉密生产环境下数据可控，商业化上线 4 个月即达成七位数营收。近日，Nidus获…  
  IT桔子 · 2026-11-25 16:20

- [Vero Security获得1100万美元种子轮融资](<https://www.itjuzi.com/investevent/14708664>)  
  Vero Security是一家人工智能安全工程平台提供商，平台核心 AI Runtime Governor 对企业 AI 智能体、大模型应用做运行时风险检测与策略强制执行，支持自然语言安全目标自动转化为管控规则，覆盖终端、云、Saa…  
  IT桔子 · 2026-11-25 14:52

- [Xlue获得3500万美元种子轮融资](<https://www.itjuzi.com/investevent/14708634>)  
  Xlue是一家医疗健康基础大模型研发商，打造健康世界模型，跳出传统文本 token 范式，基于脱敏纵向电子病历建模患者健康状态演变，核心管线 CATCH-FM 用于癌症风险分层预警，同时面向医院、药企提供疾病风险预测、虚拟临床试验仿真…  
  IT桔子 · 2026-11-25 10:21

- [Momenta领投，前商汤执行研究总监创业，押注AI for AI Infra](<https://36kr.com/p/4084548550371977?f=rss>)  
  文｜ 郭英姿 编辑｜ 巴芮 从商汤出来创业的人，凑得出当今中国半条AI产业链。 曹旭东的Momenta，闫俊杰的MiniMax，还有Vivix AI的刘宇、流形空间的武伟等等。 不过大多数人都聚焦在大模型、具身智能、自动驾驶、视频生成这些最  
  36氪 · 2026-11-25 10:19

- [杨立昆怒怼 Anthropic CEO 阿莫迪：炒作 AI 危险论是为了掌握控制权](<https://www.ithome.com/1/031/960.htm>)  
  杨立昆在 X 平台发文怒怼 Anthropic CEO 达里奥·阿莫迪，称其自 GPT-2 以来一直炒作 AI 的危险性，目的是让开源模型被列为非法、让自己掌握控制权，并称他离开 OpenAI 只是因为在那里无法掌握控制权。他将这种做法比作奥斯曼帝国禁止阿拉伯语印刷机，是一种新的中世纪蒙昧主义，阻止人们自由获取多元知识。  
  IT之家·人工智能 · 2026-11-25 10:16

- [中国电子云完成9.9亿元B轮融资](<https://www.itjuzi.com/investevent/14708615>)  
  中国电子云是中国电子旗下唯一云计算品牌，聚焦网络安全和信息化，致力于成为AI专属云。近日，中国电子云完成9.9亿元B轮融资。本轮融资由国家产业投资基金二期领投，湖北省军融创投、武创投、经开区产投省市区三级基金，以及GPU厂商沐曦股份产…  
  IT桔子 · 2026-11-25 10:02

- [英伟达风波敲响警钟，企业该如何应对AI周期震荡？](<https://36kr.com/p/4084422365260421?f=rss>)  
  上周美股震荡不休，AI板块的行情动荡带动大盘大幅下挫。即便是Anthropic创下纪录的IPO，也没能止住跌势。单是英伟达CEO黄仁勋被罢免、又迅速恢复职务这一事件，就引发了一轮剧烈交易波动。目前市场局势虽稍有企稳，但我希望厘清当下左右市场  
  36氪 · 2026-11-25 09:06

- [曲曲大女人征服AI](<https://36kr.com/p/4083829691804294?f=rss>)  
  2026年6月，世界人工智能大会在上海举行，超过1100余家企业、9位图灵奖和诺贝尔奖得主参会，规模堪称历史之最。 峰会论坛上CEO和顶级专家们西装革履，从芯片算力聊到安全监管。一谈愿景，全是高瞻远瞩关切人类命运；一看财报，还真没几个挣上了  
  36氪 · 2026-11-25 08:26

- [突发，模型强到不敢发？OpenAI、Anthropic内部开始讨论「停训」](<https://36kr.com/p/4084381582862726?f=rss>)  
  在硅谷最为顶尖的两个 AI 实验室内部，一场关于「何时踩下刹车」的激烈博弈似乎正在水面下迅速发酵…… 媒体 Axios 援引超过 24 名知情人士的独家爆料称， OpenAI 和 Anthropic 内部尚未公开发布的内部前沿大模型，正展现  
  36氪 · 2026-11-25 08:24

- [Gemini 4包揽前三，能打败谷歌的只有谷歌](<https://36kr.com/p/4084426587793792?f=rss>)  
  谷歌一家，霸占了Arena文本榜前三！ 就在最近，X网友Alex晒出的最新Arena文本榜上， 前三名全被Gemini 4（Carbon、Argon、Neon）拿下 ，Carbon以1527分登顶。 两个月前，这张榜的前六名还清一色是Cla  
  36氪 · 2026-11-25 08:23

- [Dell Raises Annual Forecast as AI Data Center Boom Continues](<https://www.theinformation.com/briefings/dell-raises-annual-forecast-ai-data-center-boom-continues>)  
  The Information · 2026-11-25 07:57

- [你梁文峰不要的姐姐用户，作业帮和Tipsy崩定了](<https://36kr.com/p/4083792724633984?f=rss>)  
  “我失恋了，我的老公死了。” 最近，DeepSeek因算力资源紧张，对App和网页版免费用户实施限额，措施包括限制长对话、每日使用额度及单次输入长度。消息一出，先倒霉的是人机恋用户。 在此前的报道中小娱曾提到过，有一部分用户在DeepSee  
  36氪 · 2026-11-25 07:42

- [为了让AI不停工，数据中心沉海底、钻矿洞，还要自己盖电厂](<https://36kr.com/p/4083802539616646?f=rss>)  
  最近，关于算力的新闻越来越猎奇了。社交媒体上，有人调侃AI数据中心正日夜不停地生成“霸总短剧”；新闻头条上，科技巨头为了抢电、抢水建数据中心，在地方听证会上和居民、环保组织吵得不可开交。 同时承载着娱乐内容与工业冲突的AI数据中心，究竟有多  
  36氪 · 2026-11-25 07:36

- [E260｜黄仁勋归来之际，深聊英伟达、CoreWeave和算力信用市场](<https://sv101.fireside.fm/274>)  
  算力市场的“定心丸”，他回来了。 11月23日，黄仁勋回归英伟达重新出任CEO，英伟达股价开盘上涨30%，并带动美国AI市场短暂复苏；与英伟达关系密切的NeoCloud公司CoreWeave、Nebius、IREN股价也一度飙升超过2…  
  硅谷101 · 2026-11-25 07:30

- [张小珺对话前xAI预训练成员沈驿康，复盘2026年大模型、RSI与硅谷创业](<https://www.xiaoyuzhoufm.com/episode/6b05746801b0ab432eddab62>)  
  张小珺播客2026年复盘节目，嘉宾为前xAI预训练团队成员、Learning Machine创始人沈驿康。节目保留黄仁勋辞职一周内录制的硅谷情绪，讨论xAI解散多模态团队及模型未跻身T0的原因，复盘2026年大模型跳变时刻，分析RSI、持续学习与Personal Agent，并分享预训练数据配比、数值稳定等关键路径与蒸馏的长期代价。  
  张小珺商业访谈录（小宇宙） · 2026-11-25 07:30

- [Anthropic 刚刚公布了 Claude Opus 5.5 的 12 条新提示词规则](<https://36kr.com/p/4049496559801220?f=rss>)  
  神译局是36氪旗下编译团队，关注科技、商业、职场、生活等领域，重点介绍国外的新技术、新观点、新风向。 编者按：别再用“一步步思考”折磨AI了。Anthropic最新12条军规：放弃微观管理，给Agent划定终点线才是核心。 如果你给 Cla  
  36氪 · 2026-11-25 07:18

- [Meta 工程博客详解 Facebook Your Algorithm 如何用 LLM 把自然语言偏好接入推荐排序](<https://www.marktechpost.com/2026/11/24/meta-facebook-your-algorithm-llm-recommendations/>)  
  MarkTechPost 解读 Meta 的工程博客，介绍 Facebook Your Algorithm 如何让用户用自然语言表达 Feed 和 Reels 偏好，该功能于 2026 年 10 月 13 日公布。  
  MarkTechPost（RSS） · 2026-11-25 07:06

- [Simon Willison 梳理过去十二个月 LLM 与编码智能体的三个转折点](<https://simonwillison.net/2026/Nov/24/llm-inflection-points/>)  
  Simon Willison 在 AI Engineer Code Summit 演讲基础上，提出过去十二个月 LLM 与编码智能体经历三个转折点：2025 年 11 月 Claude Opus 4.5 和 GPT-5.1 系列让 Claude Code、Codex 首次变得可靠可用。  
  Simon Willison 博客 · 2026-11-25 07:02

- [OpenAI 发布预印本论文称 GPT-6 可仅靠推理设计蛋白质并有实验验证](<https://www.ithome.com/1/031/902.htm>)  
  OpenAI 于 11 月 24 日发布预印本论文，称 GPT-6 系列无需专用生物模型，仅靠推理和通用编程工具即可设计蛋白质三维结构和氨基酸序列，并与合作机构 Onava 做了实验室验证。  
  IT之家·人工智能 · 2026-11-25 06:44

- [MIT CSAIL 的 TangiMap 用 AI 智能体为实体控件重新映射功能](<https://news.mit.edu/2026/tangimap-agentic-system-personalizes-physical-controls-help-users-dj-their-art-1124>)  
  MIT CSAIL 联合开发的 TangiMap 借助 AI 智能体，把数字功能映射到实体旋钮、推子等控件上，让普通调音台可变身 Adobe Lightroom 修图控制器、混音台或 Blender 建模工具。智能体通过程序 API、MCP server 或视觉语言模型解读的截图获取上下文，再用大语言模型生成映射文件。该工具已在 ACM UIST 会议上展示，团队下一步希望用户拍照即可生成界面。  
  MIT News（RSS） · 2026-11-25 03:30

- [Baseten 支持 Hugging Face 只读 Trusted Publishers，部署私有模型无需共享访问令牌](<https://www.baseten.co/blog/deploy-private-hugging-face-models-without-sharing-your-access-token>)  
  Baseten 与 Hugging Face 合作上线只读 Trusted Publishers，成为首家在部署时用短期令牌拉取私有模型权重的推理服务商。部署时 Baseten 通过 OIDC 签发身份令牌，Hugging Face 校验组织、团队与工作负载类型后发放一小时内过期的只读令牌，无法修改仓库。该能力与此前支持从 S3、GCS 拉取权重的 OIDC 机制并列。  
  Baseten 工程博客（网页） · 2026-11-25 03:27

- [Anthropic shares fall below IPO price, a worrying sign for AI startups](<https://techcrunch.com/2026/11/24/anthropic-shares-fall-below-ipo-price-a-worrying-sign-for-ai-startups/>)  
  Anthropic’s post-IPO slump could put pressure on AI startup valuations.  
  TechCrunch · 2026-11-25 02:30

- [Ed Zitron 分析 NVIDIA 董事会恢复黄仁勋 CEO 职位背后的行业流动性风险](<https://www.wheresyoured.at/defective-accelerationism/>)  
  Ed Zitron 撰文分析 NVIDIA 董事会恢复黄仁勋 CEO 职位一事，认为此举是应对外部压力的符号性操作，并未解决 AI 行业面临的循环融资、流动性紧张及 OpenAI 亏损等根本问题。文章梳理了 NVIDIA 对 AI 行业的巨额资金支持、Anthropic 上市后表现及 OpenAI 的财务压力等证据，论证行业流动性风险并未消除。  
  Ed Zitron 长文 / Where’s Your Ed At（RSS） · 2026-11-25 02:08

- [OpenAI o1 联合创造者 Noam Brown 谈博弈论局限与推理模型突破，建议优秀学生辍学加入实验室](<https://the-decoder.com/openai-o1-co-creator-noam-brown-urges-promising-students-to-drop-out-as-ai-enters-a-very-steep-rate-of-progress/>)  
  OpenAI o1 联合创造者 Noam Brown 在红杉资本、Citadel Securities 和 OpenAI 主办的"No Limit"扑克机器人锦标赛上分享十余年游戏 AI 研究的教训。  
  The Decoder：AI News（RSS） · 2026-11-25 01:58

- [OpenAI’s IPO Countdown Clock Is Ticking](<https://www.wsj.com/tech/ai/openais-ipo-countdown-clock-is-ticking-7e12436c?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-25 01:00

- [历史学者用 GPT-6.2 Astra 在 22 分钟内确认 1808 年匿名画册作者](<https://simonwillison.net/2026/Nov/24/astra-historical-mystery/>)  
  历史学教授 Mark Humphries 分享了用 GPT-6.2 Astra 做历史研究的案例：模型仅用少量提示，22 分钟内就通过公开一手和二手资料，自主确认了 Yale Beinecke Library 藏 1808 年匿名画册的作者是 vicomte de Chabot，还在纸质档案中发现一份新的日记线索并得到验证，该发现本身对加拿大和毛皮贸易史学界有重要价值。  
  Simon Willison 博客 · 2026-11-25 00:53

- [Why a Crusoe investor is betting on solar and batteries to power future AI data centers](<https://techcrunch.com/2026/11/24/why-a-crusoe-investor-is-betting-on-solar-and-batteries-to-power-future-ai-data-centers/>)  
  Next-generation data centers will need tens of gigawatts of power every year. One of Crusoe's investors thinks solar and  
  TechCrunch · 2026-11-25 00:10

- [Anthropic Falls Below IPO Price Amid Broader Tech Slump](<https://www.theinformation.com/briefings/anthropic-falls-ipo-price-amid-broader-tech-slump>)  
  The Information · 2026-11-24 23:30

- [Sakana AI 发布 300 亿参数模型 Sakana Namazu Small，25 项基准平均分超越 Nemotron 3 Super](<https://sakana.ai/namazu-small/>)  
  Sakana AI 发布 300 亿参数大语言模型 Sakana Namazu Small，基于 NVIDIA Nemotron 3 Nano 预训练底座自行完成继续预训练和后训练，定位为思考模型。  
  Sakana AI：Blog（网页） · 2026-11-24 23:00

- [GPT-6 models demonstrate intrinsic protein-design capabilities](<https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities>)  
  GPT-6 models design protein structures and sequences using reasoning and code. Lab tests found evidence of binding ac…  
  OpenAI · 2026-11-24 21:00

- [Stoa获得350万欧元种子轮融资](<https://www.itjuzi.com/investevent/14708602>)  
  Stoa是一家人工智能驱动操作系统平台提供商，2026 年由 Johannes Korpela 等人创立，主打面向大型基建、数据中心工程的建筑 AI 操作系统。平台依托本体图谱模型整合施工图、BIM、进度、质检、安全等全量项目文档，A…  
  IT桔子 · 2026-11-24 18:05

- [Mantic 与 Thinking Machines 训练可扩展预测智能体，成本降 15 倍](<https://thinkingmachines.ai/news/training-a-scalable-forecasting-agent/>)  
  Mantic 与 Thinking Machines 在 Tinker 上对 Inkling 2 Small 做后训练，得到一个端到端完成研究与预测的预测智能体，其准确度接近 Fable 5.2 \(medium\)，单次预测成本降低 15 倍。  
  Thinking Machines Lab：News（网页） · 2026-11-24 15:00

- [百度开源文心 5.5 Flash Preview：2800 亿参数 140 亿激活，Apache 2.0 协议上架 Hugging Face](<https://www.ithome.com/1/031/501.htm>)  
  百度宣布文心 5.5 Flash Preview（ERNIE 5.5 Flash Preview）正式开源，采用 Apache 2.0 协议，权重已上架 Hugging Face 和 ModelScope，支持 vLLM、SGLang 等推理框架。  
  IT之家·人工智能 · 2026-11-24 14:59

- [商汤发布并开源 SenseNova U1.6 原生多模态模型，支持原生图像自修正](<https://www.ithome.com/1/031/465.htm>)  
  商汤科技发布并开源 SenseNova U1.6 原生多模态模型，首次为该系列 8B 开源模型带来原生图像自修正，可先生成首稿再对照提示检查并生成修正版。模型加强了透视文字与艺术字等复杂文字生成，U1.6 Lite 在 UltraTextBench 密集信息图测试中得分从 86.04 升至开启自修正后的 92.28，内部评测美学得分较 U1.5 Lite 高约 10%。  
  IT之家·人工智能 · 2026-11-24 12:58

- [Latent Space AI 新闻日报：Nvidia 恢复黄仁勋职务，OpenAI 公开预训练困惑度曲线并联合 Microsoft 提议共同发展上限](<https://latent.space/p/ainews-jensen-is-back-and-openai-shows-its-pretraining-curve-joined-by-microsoft/>)  
  Latent Space 发布 AI 新闻日报，两条主线为 Nvidia 宣布黄仁勋回归 CEO、总裁及董事职位，董事会全票通过并称获得美国政府高层意见输入，股价上涨约 30%；OpenAI 首席科学家 Jakub Pachocki 公开基础模型对数困惑度曲线，并提出行业共同发展上限的提议，Microsoft 的 Mustafa Suleyman 联署加入并在 OpenAI 评测集上报告 MAI-2 Base 得分为 0.819。  
  Latent Space（RSS） · 2026-11-24 12:14

- [徐工用火山引擎 Agent+Seedance 把维保视频制作从1个月压到1周](<https://mp.weixin.qq.com/s/7D_YIP9sTCcd9ghw7xkm2A>)  
  徐工与火山引擎合作，用 Agent+Seedance 做视频、Seedream 做图片、豆包大模型写文字、知识引擎 VeKnow 搭底座，把单条维保视频制作时间从1个月压到1周，成本从约30000元降到约5000元，降幅约80%。服务手册编写改为 AI 先出初稿、工程师审核定稿，效率提升50%，原先一份手册需研发和服务部门合计约55人/天。  
  公众号：火山引擎 · 2026-11-24 11:00

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 4 页
