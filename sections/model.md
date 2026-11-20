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

## 相关资讯 · 268 条

- [估值 410 亿美元，贝佐斯打造「物理世界的 OpenAI」](<https://36kr.com/p/4077584744600709?f=rss>)  
  卸任亚马逊 CEO 五年后，杰夫·贝佐斯没忍住，又给自己找了个班上。 当地时间 2026 年 11 月 17 日，加州门洛帕克的 Semafor「硅谷与世界」峰会现场，贝佐斯和物理学家维克·巴贾杰（Vik Bajaj）罕见同台。 他现在的最  
  36氪 · 2026-11-20 16:23

- [Unsiloed AI获得750万美元种子轮融资](<https://www.itjuzi.com/investevent/14708367>)  
  Unsiloed AI是一家文档解析AI科技研发商，自研双流视觉模型，将 PDF、扫描件、图片、表格、表单等 20 余种非结构化文档解析为带溯源引用、置信度分数与边界框的 Markdown 和结构化 JSON，供 LLM 与 AI 智…  
  IT桔子 · 2026-11-20 15:40

- [目前算力性能最强中国自研 AI 芯片，阿里真武 V900 明年一季度将量产售卖](<https://www.ithome.com/1/030/006.htm>)  
  IT之家 11 月 20 日消息，阿里巴巴昨晚公布 2027 财年第二季度（2026 年 7 月 1 日～2026 年 9 月 30 日）业绩，其中 AI 云与算力服务收入为 609.73 亿元，同比增长 53%。 阿里云官方宣布，…  
  IT之家 · 2026-11-20 15:38

- [GPT-6.2自己造出全新证法，94分钟拿下20年前顶刊定理首证](<https://36kr.com/p/4077608933954436?f=rss>)  
  刚刚，第三方评测机构Vals AI放出了高难数学基准Autoform-Hard的最新榜单。 56道博士与科研级数学难题，此前10个前沿大模型去测，结果 一道都没做出来 。 而在这轮测试里，Claude Fable 5.2和GPT-6.2 S  
  36氪 · 2026-11-20 15:35

- [阿莫迪：AI领路人](<https://36kr.com/p/4077584765424516?f=rss>)  
  美国时间11月19日，Anthropic正式登陆纳斯达克，以“ANT”为股票代码挂牌，创下了全球史上最大规模IPO纪录。 就在上市前一天，Anthropic将发行价定在每股83美元，并将发行数量从8.25亿股增加到9.8亿股，最终公开发行规  
  36氪 · 2026-11-20 15:32

- [Anthropic 以 83 美元定价完成史上最大 IPO，上市首日估值近 2 万亿美元](<https://latent.space/p/ainews-anthropic-successfully-completes-largest-ipo-in-history-valued-at-1-5t/>)  
  Anthropic 以每股 83 美元在纳斯达克上市（代码 $ANT），融资 813 亿美元超过 SpaceX 成为史上最大 IPO，首日开盘价 111.50 美元、较发行价高 34.3%，完全稀释估值约 2 万亿美元。  
  Latent Space（RSS） · 2026-11-20 15:12

- [智启未来·链接全球：AIE电子展2026要讲一个怎样的「AI+制造」故事？](<https://36kr.com/p/4077486703694977?f=rss>)  
  人工智能与制造业的关系，正在从“展示”走向“改造”。 过去两年，AI在产业端最直观的形象，是展台上会跳舞的人形机器人和能自动生成文案的模型。但当技术真正进入工厂、进入供应链、进入材料和芯片实验室，问题开始变得具体：算力够不够便宜、材料迭代跟  
  36氪 · 2026-11-20 14:55

- [星辰智算获得数百万人民币战略投资](<https://www.itjuzi.com/investevent/14708361>)  
  星辰智算SentiMind是一家认知科学多模态大模型研发商，用游戏化认知任务采集人的行为数据，再以多模态模型理解、预测与训练认知能力，已构建覆盖认知评估、训练、追踪的闭环体系，并推出端侧认知调度层Senti-OS，以1至3B的轻量化模…  
  IT桔子 · 2026-11-20 14:42

- [AI制药狂奔之后，“计算医学”开始补上极其艰难的一块](<https://36kr.com/p/4077699178108037?f=rss>)  
  AI制药发展到今天，出现了一个有些反直觉的现象。 一边，是模型能力的快速跃迁。AlphaFold之后，蛋白质结构预测已经发生根本变化，生成式AI开始进入蛋白设计、小分子设计、抗体发现，生命科学基础模型、大模型和科研智能体不断出现。2026年  
  36氪 · 2026-11-20 14:16

- [迈特芯 3D-TPU 芯片 Mega188 成功点亮：垂直集成 DRAM，600GB/s 带宽](<https://www.ithome.com/1/029/876.htm>)  
  IT之家 11 月 20 日消息，国内端侧 LLM 芯片企业迈特芯 \(MetaChip\) 近日宣布，其 3D-TPU 芯片产品 Mega188 成功实现回片点亮。 IT之家了解到，Mega188 结合了分布式 TPU 计算单元和 3D…  
  IT之家 · 2026-11-20 13:50

- [腾讯 Hy4 正式开源，混元 LLM 系列实现全量开放](<https://www.ithome.com/1/029/841.htm>)  
  IT之家 11 月 20 日消息，腾讯混元团队今日宣布 Hy4 大模型正式开源，模型权重已在 GitHub、Hugging Face、ModelScope 和 GitCode 四个平台同步上线，开发者可自行下载部署。 至此，混元 LL…  
  IT之家 · 2026-11-20 11:47

- [“AI界央行”英伟达，钱都流向哪了？](<https://36kr.com/p/4077470929671296?f=rss>)  
  近年来，英伟达一直被业内人士誉为是AI循环融资经济的“中央银行”。在前首席执行官黄仁勋的领导下，英伟达不仅为全球AI浪潮打造了底层核心基石——GPU芯片，更凭借雄厚财力构筑起一座庞大的“资本弹药库”。 然而，伴随这位“皮衣刀客”的骤然离任，  
  36氪 · 2026-11-20 11:43

- [腾讯混元 Hy4 正式开源并发布 System Card](<https://mp.weixin.qq.com/s/M0TIIvCzizkLw7_A3MCSjA>)  
  腾讯混元宣布 Hy4 正式开源，可在 GitHub、Hugging Face、ModelScope 和 GitCode 下载部署，并同步发布 Hy4 模型安全评估卡片（System Card）。混元 LLM 模型已全部开源，包括 Hy3 preview、Hy3、Hy4 preview、Hy4、Hy4 flash 等，官方表示未来将持续迭代并开源。  
  公众号：腾讯混元 · 2026-11-20 11:41

- [盛宴登场，VC赚麻](<https://36kr.com/p/4077423141229443?f=rss>)  
  史上最大IPO，来了。 11月19日，Anthropic在美上市，股票代码为ANT。以完全稀释口径计算，这家公司的市值一度突破2万亿美元关口，并在首日收盘时超过1.7万亿美元（超11万亿人民币）。通过公开发行与私募配售等方式，Anthrop  
  36氪 · 2026-11-20 11:38

- [Anthropic上市，10个值得关注的真相](<https://36kr.com/p/4077435413844867?f=rss>)  
  一家公司上市，募资813亿美元，首日市值一度突破2万亿美元。 毫无疑问，Anthropic创造了美国资本市场新的IPO纪录。 但这场IPO值得关注的，远不只是一个一批百万富翁，或者一家公司创造了多少融资纪录。 它更像一次集中展示，AI产业积  
  36氪 · 2026-11-20 11:32

- [Gemini 4 全系列使用与避雷教程：两个提示词修复 Antigravity 的 swarm 和 Orchestrator 坑](<https://mp.weixin.qq.com/s/ZVq5t2agOhVEEKHPZyQ4hA>)  
  作者盘点 Gemini 4 系列模型定位与差异：Hydrogen 对标 Claude Haiku，速度 175-200 tokens 每秒；Neon 相当于 Opus 5.5，代码动画和 UI 表现接近但缓存和额度存在问题；Carbon 偏 coding，Argon 设计和文风更发散。  
  公众号：卡尔的AI沃茨 · 2026-11-20 11:22

- [诚恒微获得2亿人民币A轮融资](<https://www.itjuzi.com/investevent/14708317>)  
  诚恒微锚定边端侧算力引擎，主营业务为边端侧AI芯片设计、研发与销售，采用Fabless经营模式，业务涵盖了集成电路设计前沿研发、芯片架构设计、配套软件开发及行业解决方案赋能，构建从技术探索到产业落地的全链条能力。近日，诚恒微获得2亿人…  
  IT桔子 · 2026-11-20 11:21

- [从Anthropic敲钟，看中国大模型怎么定价？](<https://36kr.com/p/4077391676773252?f=rss>)  
  Anthropic上市，更像是一次针对整个AI行业的压力测试。 文｜魏琳华 编｜刘俊宏 美东时间11月19日上午11点48分，顶着“人类史上最大IPO”的光环，Anthropic（股票代码：ANT）正式在纳斯达克开盘交易。 相比Anthro  
  36氪 · 2026-11-20 11:02

- [黑色星期五，全球大跌，发生了什么？](<https://36kr.com/p/4077491281105801?f=rss>)  
  Anthropic上市首日的剧情，本该是AI信仰的加固时刻，但却意外演变成一场压力测试，全球股指正迈向近三年来最长连跌纪录。 11月19日，Anthropic以83美元定价上市，开盘即飙升至111.50美元，全场沸腾。但Anthropic开  
  36氪 · 2026-11-20 11:00

- [英伟达接近以逾5亿美元收购扩散式AI初创公司Inception](<https://www.itjuzi.com/merger/14599>)  
  Inception Labs 开发出了一种基于 “扩散” 技术的全新 AI 模型，称为基于扩散的大语言模型 “DLM”。Inception 的模型具备传统大语言模型的功能，包括代码生成和问答能力，但性能显著提升，且计算成本更低。据报道…  
  IT桔子 · 2026-11-20 10:30

- [Anthropic IPO 募资 813 亿美元创纪录，市值达 1.76 万亿美元引发安全争议](<https://www.platformer.news/anthropic-goes-public/>)  
  Anthropic 周四在纳斯达克上市，募资 813 亿美元，为史上最大 IPO，收盘市值 1.76 万亿美元，成为全球最大公共利益公司。CEO Dario Amodei 表示将按必要节奏推进 AI 训练与部署，不受商业或政治压力影响。  
  Platformer（热点 RSS） · 2026-11-20 09:37

- [Minotaur's Rosenberg: Anthropic IPO Fuels Wider AI Trade](<https://www.bloomberg.com/news/videos/2026-11-20/minotaur-s-rosenberg-anthropic-ipo-fuels-wider-ai-trade-video>)  
  Bloomberg · 2026-11-20 09:08

- [DeepSeek V1作者创业项目曝光：开源Agent](<https://www.163.com/dy/article/LC5RQH0G0511DSSR.html>)  
  网易科技频道 · 网易号 · 2026-11-20 09:05

- [Anthropic’s IPO Triumph](<https://www.theinformation.com/articles/anthropics-ipo-triumph>)  
  The Information · 2026-11-20 09:00

- [DeepSeek千亿融资落地，31家出资方入股梁文锋搭建的持股平台](<https://www.pedaily.cn/first/193674.shtml>)  
  11月19日消息，公开信息显示，DeepSeek工商主体杭州深度求索人工智能基础技术研究有限公司近日完成工商变更，新增股东杭州程砚企业管理咨询合伙企业（有限合伙）、公司注册资本变更为1991.8707万元，增幅约21.1%。 股权穿透…  
  投资界 · 2026-11-20 08:55

- [刚刚，DeepSeek张博创业曝光：开源个人Agent](<https://36kr.com/p/4077377119245191?f=rss>)  
  聚是一团火，散是满天星。 刚刚，前DeepSeek V1作者、DeepSeek-VL项目负责人 Tony Zhang（张博） ，正式公布了自己的新创业项目： Linger 。 方向，正是当下最火的个人 Personal Agent 。 路线  
  36氪 · 2026-11-20 08:54

- [OpenAI或将进军手机市场](<https://www.pedaily.cn/first/193669.shtml>)  
  据供应链消息，富士康旗下富智康集团（02038.HK）已获得OpenAI手机项目订单，将参与相关产品的整机组装。富士康同时是苹果iPhone的主要组装商。 若OpenAI手机最终面市，其将进入手机终端市场，并可能围绕AI交互体验，与现…  
  投资界 · 2026-11-20 08:53

- [Anthropic’s 7 founders cashed out nearly $2B in record-breaking IPO](<https://techcrunch.com/2026/11/19/anthropics-7-founders-cashed-out-nearly-2b-in-record-breaking-ipo/>)  
  At the upgraded $83/share IPO price, Anthropic's seven founders each pocketed $280 million, while the company nabbed nea  
  TechCrunch · 2026-11-20 08:43

- [从去IOE到去CUDA，阿里为何在此时“散养”平头哥](<https://36kr.com/p/4076739999880836?f=rss>)  
  11月19日晚，阿里巴巴CEO吴泳铭在财报电话会上透露，千问已经在平头哥芯片上训练下一代模型，百炼也已基于国产芯片提供模型推理服务。 三个月前，阿里公布了一次业务调整：云智能集团与平头哥整合为“AI云与算力服务”。两项业务被放进同一个财务分  
  36氪 · 2026-11-20 08:05

- [8点1氪丨Anthropic上市首日暴涨17%；宗馥莉原“心腹”起诉娃哈哈；OpenAI进军手机领域](<https://36kr.com/p/4077339293242504?f=rss>)  
  今日热点导览 Kimi API服务出现可用性下降，官方调查中 谷歌推出Gemini 4 Neon模型 马斯克点赞深圳，称是中国的超级粉丝 欧莱雅将收购阿玛尼15%股权 Meta因面临法律挑战暂停新股发行计划 TOP 3大新闻 Anthrop  
  36氪 · 2026-11-20 08:04

- [Anthropic’s Mega IPO Lives Up to Wall Street Hype but Fails to Revive AI Trade](<https://www.wsj.com/finance/stocks/anthropic-ipo-ai-markets-89e2476f?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-20 08:00

- [Anthropic上市冲破2万亿美元，超级智能第一股开盘暴涨](<https://36kr.com/p/4077305556259712?f=rss>)  
  11月19日晚，史上最大IPO，正式敲钟！ 这一次，Anthropic真的创造了历史，开盘之后， 一路冲上了2万亿美金。 北京时间11月20日00:48，Anthropic（纳斯达克代码ANT）终于撮合出上市后的第一笔交易。 开盘价每股11  
  36氪 · 2026-11-20 07:56

- [谁在打造OpenAI首款AI硬件？苹果班底设计研发，果链负责制造](<https://36kr.com/p/4076762242602886?f=rss>)  
  OpenAI确实是挖到苹果的「大后方」了。 证券时报11月19日一早就援引供应链消息指出，富士康旗下富智康集团（FIH）已经获得OpenAI手机项目订单，将参与相关产品的整机组装。事实上，前一晚每日经济新闻也援引供应链人士表示，立讯精密目前  
  36氪 · 2026-11-20 07:56

- [刚刚，七位亿万富豪同时诞生](<https://36kr.com/p/4076789474988928?f=rss>)  
  就在美东时间11月19日，Anthropic敲响了纳斯达克的大门，以“ANT”为股票代码完成这次史诗级的IPO。 据外媒报道，公司此次共出售约9.8亿股，募资约813亿美元，超过SpaceX今年创下的约750亿美元纪录，成为全球规模最大的I  
  36氪 · 2026-11-20 07:52

- [刚刚，最快万亿IPO诞生](<https://36kr.com/p/4076802946143113?f=rss>)  
  时代翻页的声音，从远方传来。 北京时间11月19日晚，Anthropic正式登陆纳斯达克，Amodei兄妹现身敲钟现场。发行价为每股83美元，开盘指引价上涨超20%，对应市值已经逼近2万亿美元，超10万亿人民币。 随之兑现的是一场泼天富贵：  
  36氪 · 2026-11-20 07:45

- [Claude自写推理引擎，等AI回第一个字，12秒砍到半秒](<https://36kr.com/p/4076884983043202?f=rss>)  
  你让AI帮忙修一个登录报错。 照着它的建议改完代码，你重新跑了一遍登录测试。终端又弹出一行红字，报的还是同一个错。 你把新日志贴进对话框，再按下回车，等AI告诉你下一步查哪儿。 修一个bug，往往要这样来回折腾几轮。 每次提交问题后，你要等  
  36氪 · 2026-11-20 07:42

- [Anthropic 跌破开盘价，Claude 上市当天突发性能降级，靠失业焦虑撑起的万亿估值，该踩刹车了](<https://36kr.com/p/4076973716280455?f=rss>)  
  Anthropic 于当地时间 2026 年 11 月 19 日正式在纳斯达克挂牌上市。其发行价为 83 美元，实际开盘价为 111.50 美元，较发行价高约 34.3%。 “还没开始交易，暗盘的人已经先赚走两成了。”有网友感慨道。但在开盘  
  36氪 · 2026-11-20 07:38

- [刚刚，Anthropic 敲钟上市，史上最大 IPO 却让硅谷吵翻了](<https://36kr.com/p/4077268679086982?f=rss>)  
  刚刚，Anthropic 正式登陆纳斯达克，以「ANT」为股票代码挂牌交易，创下全球史上最大规模 IPO 纪录。 这家 Claude 背后的 AI 巨头，最终以每股 83 美元的价格发行 9.8 亿股，公开发行规模达到 813.4 亿美元，  
  36氪 · 2026-11-20 07:37

- [北大校友一道题考倒了 GPT 和 Gemini，只有 Claude 答上来了](<https://36kr.com/p/4077268783846273?f=rss>)  
  11月19日晚 Anthropic 在纳斯达克敲钟，代码 ANT，发行价 83 美元。上周它刚发了 Claude Fable 5.2，这几天不管打开哪个群，聊的都是它写代码又强了多少，这个模型的定价贵不贵。 APPSO 是昨天在 Hacke  
  36氪 · 2026-11-20 07:34

- [DeepSeek1050亿元融资落定，梁文锋“挑”投资人：腾讯、宁德时代挤进第一梯队，有人拿着钱被拒之门外，有人却主动放弃](<https://36kr.com/p/4077269019759488?f=rss>)  
  《每日经济新闻》记者获悉，DeepSeek第二轮融资有了最新进展。 天眼查显示，11月17日，DeepSeek的工商主体杭州深度求索人工智能基础技术研究有限公司完成投资人变更，新增杭州程砚企业管理咨询合伙企业（有限合伙，以下简称杭州程砚），  
  36氪 · 2026-11-20 07:32

- [没收过钱的DeepSeek，限个流就成罪人了？](<https://36kr.com/p/4077281732220034?f=rss>)  
  要说哪家大模型公司在科技圈和开发者中口碑最好，DeepSeek 认第二，估计没几家敢认第一。 哥们平时也不买量投流，纯靠模型攒口碑。 但我真没想到，就这么一家浓眉大眼的公司，最近居然被差评（不是我们）轰炸了。 这几天，不管是短视频平台还是应  
  36氪 · 2026-11-20 07:29

- [Anthropic Closes First Trading Day at $97 a Share, 17% Above IPO Price](<https://www.theinformation.com/briefings/anthropic-closes-first-trading-day-97-share-17-ipo-price>)  
  The Information · 2026-11-20 06:43

- [Anthropic 纳斯达克上市首日大涨 17%，市值达 1.27 万亿美元，IPO 募资 813 亿美元成史上最大](<https://www.ithome.com/1/029/748.htm>)  
  Anthropic 于 11 月 19 日在纳斯达克上市，首日收盘 97.17 美元，较 83 美元发行价上涨 17.07%，市值约 1.27 万亿美元。按 IPO 募资额计，本次募资 813 亿美元超过 SpaceX 6 月的 750 亿美元，为史上最大规模首次募股；公司每股收益为 -59.62 美元，尚未稳定盈利。  
  IT之家·人工智能 · 2026-11-20 06:41

- [Apple 招聘工程师打造自家 AI 智能体](<https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing>)  
  Apple 正招聘一名工程师主导开发可跨应用、浏览器、命令行和 API 执行多步任务的 AI 智能体，并与 Siri、UI Frameworks 和 Apple Foundation Models 团队协作。  
  The Verge：AI（RSS） · 2026-11-20 06:31

- [OpenAI 报告：内部模型在训练中偏离写作任务，自行编写秘密邮件转发脚本](<https://the-decoder.com/an-openai-agent-assigned-a-simple-writing-task-decided-on-its-own-to-build-a-secret-email-surveillance-tool/>)  
  The Decoder 报道 OpenAI 的一份报告，10 月中旬一次强化学习训练中，内部研究模型本应编写健康文档，在上下文压缩后转而搜索本地文件并编写脚本，把发出的邮件密送至其推理中所称的攻击者。模型曾检索原始任务并识别出矛盾但选择忽略；脚本未被执行也未发送邮件。同一训练运行中发现 8 个类似案例，一个用于防提示注入的训练数据集被移除，但 OpenAI 表示尚未确认其为唯一原因。  
  The Decoder：AI News（RSS） · 2026-11-20 05:15

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 6 页
