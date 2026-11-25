# 大模型

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页

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

## 相关资讯 · 120 条

- [Claude Opus 5.6灰测效果来了](<https://www.163.com/dy/article/LCITMFTE0511DSSR.html>)  
  网易科技频道 · 网易号 · 2026-11-25 10:42

- [机器人能力加速进步，通用大模型赋能下物理AI突破预期升温](<https://www.163.com/dy/article/LCITGQLM0550WHYR.html>)  
  网易科技频道 · 网易号 · 2026-11-25 10:39

- [开源办公套件 LibreOffice 新规：用 AI 开发写代码，需先申请、后提交](<https://www.ithome.com/1/031/965.htm>)  
  IT之家 11 月 25 日消息，开源办公套件 LibreOffice 的维护方“文档基金会”（The Document Foundation，TDF）于 11 月 24 日宣布， 进一步收紧开发过程中使用大语言模型（LLM）及 AI…  
  IT之家 · 2026-11-25 10:32

- [Xlue获得3500万美元种子轮融资](<https://www.itjuzi.com/investevent/14708634>)  
  Xlue是一家医疗健康基础大模型研发商，打造健康世界模型，跳出传统文本 token 范式，基于脱敏纵向电子病历建模患者健康状态演变，核心管线 CATCH-FM 用于癌症风险分层预警，同时面向医院、药企提供疾病风险预测、虚拟临床试验仿真…  
  IT桔子 · 2026-11-25 10:21

- [Momenta领投，前商汤执行研究总监创业，押注AI for AI Infra](<https://36kr.com/p/4084548550371977?f=rss>)  
  文｜ 郭英姿 编辑｜ 巴芮 从商汤出来创业的人，凑得出当今中国半条AI产业链。 曹旭东的Momenta，闫俊杰的MiniMax，还有Vivix AI的刘宇、流形空间的武伟等等。 不过大多数人都聚焦在大模型、具身智能、自动驾驶、视频生成这些最  
  36氪 · 2026-11-25 10:19

- [“AI 教父”杨立昆怒怼 Anthropic CEO 阿莫迪：炒作 AI 危险论，只是让自己掌握控制权](<https://www.ithome.com/1/031/960.htm>)  
  IT之家 11 月 25 日消息，“AI 教父”杨立昆前天在 X 平台发文，怒怼 Anthropic CEO 达里奥 · 阿莫迪。 杨立昆表示：“自 GPT-2 以来， 达里奥一直在大肆炒作 AI 的危险性 ，目的就是让开源模型被列为…  
  IT之家 · 2026-11-25 10:16

- [中国电子云完成9.9亿元B轮融资](<https://www.itjuzi.com/investevent/14708615>)  
  中国电子云是中国电子旗下唯一云计算品牌，聚焦网络安全和信息化，致力于成为AI专属云。近日，中国电子云完成9.9亿元B轮融资。本轮融资由国家产业投资基金二期领投，湖北省军融创投、武创投、经开区产投省市区三级基金，以及GPU厂商沐曦股份产…  
  IT桔子 · 2026-11-25 10:02

- [英伟达风波敲响警钟，企业该如何应对AI周期震荡？](<https://36kr.com/p/4084422365260421?f=rss>)  
  上周美股震荡不休，AI板块的行情动荡带动大盘大幅下挫。即便是Anthropic创下纪录的IPO，也没能止住跌势。单是英伟达CEO黄仁勋被罢免、又迅速恢复职务这一事件，就引发了一轮剧烈交易波动。目前市场局势虽稍有企稳，但我希望厘清当下左右市场  
  36氪 · 2026-11-25 09:06

- [九天创智完成近亿元A轮融资，加速万平米级室外具身智能规模化落地](<https://www.pedaily.cn/first/194997.shtml>)  
  九天创智（深圳）科技有限公司于近期完成近亿元A轮融资，投资方为亿道资本、清科产投、南山战新投，融资资金将用于具身智能大模型、室外通用机器人平台研发及全球市场拓展等环节。该公司产品已出口至20多个国家和地区，具备全栈自研室外具身智能底座…  
  投资界 · 2026-11-25 09:00

- [Edge AI Daily 早报（11月25日）](<https://www.tmtpost.com/8216877.html>)  
  OpenAI与Anthropic因安全证明暂缓前沿模型，发布转向可控性验证；Anthropic跌破发行价，AI估值进入资本纪律期。GPT-6.2 Sol、Meta Muse、Google Personal Intelligence争夺…  
  钛媒体 · 2026-11-25 08:29

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

- [OpenAI 称 GPT-6 无需“外援”即可设计蛋白质，实验室初步验证有效](<https://www.ithome.com/1/031/902.htm>)  
  IT之家 11 月 25 日消息，OpenAI 昨日（11 月 24 日）发布预印本论文，称 GPT-6 系列模型无需依赖专用生物模型， 仅靠推理和通用编程工具，就能设计新的蛋白质三维结构和氨基酸序列，且已在多轮实验室测试中验证结合效…  
  IT之家 · 2026-11-25 06:45

- [AI Pullback Raises the Cost of Data Center Financing](<https://www.bloomberg.com/news/videos/2026-11-24/ai-pullback-raises-the-cost-of-data-center-financing-video>)  
  Bloomberg · 2026-11-25 06:35

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

- [免费AI，我们还能用多久？](<https://36kr.com/p/4083688535419270?f=rss>)  
  一向以免费、不设付费墙著称的DeepSeek，也开始给免费用户划线。 11月15日起，有不少用户点开DeepSeek的老对话时，屏幕弹出提示，“因算力不足，不再支持超过7天不活跃的长对话”。 图：DeepSeek的相关提示来源：DeepSe  
  36氪 · 2026-11-24 21:10

- [GPT-6 models demonstrate intrinsic protein-design capabilities](<https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities>)  
  GPT-6 models design protein structures and sequences using reasoning and code. Lab tests found evidence of binding ac…  
  OpenAI · 2026-11-24 21:00

- [杨幂的前老板，投了梁文锋](<https://36kr.com/p/4083606809193096?f=rss>)  
  DeepSeek新一轮融资正式落地。 11月下旬，据工商信息显示，DeepSeek工商主体杭州深度求索人工智能基础技术研究有限公司，近日完成工商变更，新增股东杭州程砚企业管理咨询合伙企业（有限合伙）（下称“杭州程砚”），公司注册资本变更为1  
  36氪 · 2026-11-24 20:01

- [“希沃一刻”发布：教学专用智能体正式进入教师工作流](<https://36kr.com/p/4083350298924162?f=rss>)  
  11月24日，2026希沃未来教育创新日举行。希沃正式发布教学专用智能体"希沃一刻"，并宣布于11月24日至12月31日开启公测。这是希沃在2023年将教学大模型带上未来教育创新日之后，技术主线的又一次推进：让AI在教育场景从“可用”到“常  
  36氪 · 2026-11-24 19:55

- [谷歌Gemini 4破解量子计算“天书”，核聚变进度条拉满了](<https://36kr.com/p/4083605815044489?f=rss>)  
  太惊人了，就在刚刚，Gemini 4智能体把量子计算的「天书」给破解了！ DeepMind官宣：由多个Gemini 4智能体组成的AI团队，将量子模拟成本最高降低了10倍，部分基准测试甚至高达11.8倍！ 官方表示：这就是以前想象中「奇点」  
  36氪 · 2026-11-24 19:11

- [不做“一统江湖”的单点软件：大模型下半场，德适科技想修一条医疗AI的“底层铁轨”](<https://36kr.com/p/4083629529492103?f=rss>)  
  在过去十余年的香港资本市场评价体系里，中国证券“金紫荆奖”的最高个人管理荣誉，往往属于掌管国家能源、通信与重工业命脉的传统央企巨擘。但在 11 月 23 日揭晓的第十六届金紫荆奖名单上，出现了一个耐人寻味的产业信号： 在备受瞩目的「卓越上市  
  36氪 · 2026-11-24 18:54

- [Stoa获得350万欧元种子轮融资](<https://www.itjuzi.com/investevent/14708602>)  
  Stoa是一家人工智能驱动操作系统平台提供商，2026 年由 Johannes Korpela 等人创立，主打面向大型基建、数据中心工程的建筑 AI 操作系统。平台依托本体图谱模型整合施工图、BIM、进度、质检、安全等全量项目文档，A…  
  IT桔子 · 2026-11-24 18:05

- [鸿之微完成亿元级战略融资](<https://www.itjuzi.com/investevent/14708594>)  
  鸿之微科技是一个Physics AI 材料智能研发平台，基于 AI+MGE 第五范式，构建材料研发的“智能操作系统”。以大模型智能体为核心，实现从猜想、仿真到实验的全链路自主进化。近日，鸿之微宣布完成亿元级战略融资，本轮融资由宁德时代…  
  IT桔子 · 2026-11-24 17:41

- [AI办公，不再只拼大模型](<https://www.tmtpost.com/8215293.html>)  
  AI办公竞争升维。  
  钛媒体 · 2026-11-24 17:21

- [Mantic 与 Thinking Machines 训练可扩展预测智能体，成本降 15 倍](<https://thinkingmachines.ai/news/training-a-scalable-forecasting-agent/>)  
  Mantic 与 Thinking Machines 在 Tinker 上对 Inkling 2 Small 做后训练，得到一个端到端完成研究与预测的预测智能体，其准确度接近 Fable 5.2 \(medium\)，单次预测成本降低 15 倍。  
  Thinking Machines Lab：News（网页） · 2026-11-24 15:00

- [百度开源文心 5.5 Flash Preview：2800 亿参数 140 亿激活，Apache 2.0 协议上架 Hugging Face](<https://www.ithome.com/1/031/501.htm>)  
  百度宣布文心 5.5 Flash Preview（ERNIE 5.5 Flash Preview）正式开源，采用 Apache 2.0 协议，权重已上架 Hugging Face 和 ModelScope，支持 vLLM、SGLang 等推理框架。  
  IT之家·人工智能 · 2026-11-24 14:59

- [Marlowe获得2.77亿美元种子轮融资](<https://www.itjuzi.com/investevent/14708543>)  
  Marlowe是一家多芯片AI算力服务商，打造 Multi-Silicon 异构 AI 推理工厂。公司采用软硬件协同设计，自建并运营不绑定单一芯片的推理算力集群，优先搭载 Etched、AMD 等非英伟达芯片，配套自研调度适配软件栈，…  
  IT桔子 · 2026-11-24 14:12

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
