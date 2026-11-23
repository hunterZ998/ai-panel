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

## 相关资讯 · 134 条

- [AI服务器临交付暴涨45%，台积电收紧账期要现款：黄仁勋刚走，全球供应链撕破脸](<https://36kr.com/p/4081927320786048?f=rss>)  
  过去几年，黄仁勋不只是英伟达掌门人，更像是 全球 AI 供应链的“定海神针” ，每逢AI泡沫的质疑此起彼伏，他总能镇住场子，给市场信心再添一把火。 如今，随着核心人物的突然退场，最先崩盘或许并非技术叙事，也不是算力需求，而是 支撑起这万亿投  
  36氪 · 2026-11-23 18:22

- [杉数完成数亿元D轮融资](<https://www.itjuzi.com/investevent/14708501>)  
  杉数科技专注于决策式AI技术研发与产业应用。公司构建了覆盖高性能异构算力、优化求解引擎、AI决策平台及行业应用的全栈技术体系，目前，公司产品及服务已在工业制造、能源电力、轨道交通、石油石化、航空航天、零售快消等20余个细分领域落地，服…  
  IT桔子 · 2026-11-23 18:18

- [好莱坞第一VC](<https://36kr.com/p/4082090048476034?f=rss>)  
  Anthropic上市万众瞩目，一众创始人和员工实现财富自由。顺着投资名单望去，一个好莱坞演员身影浮现。 始于2023年的一场会面，Anthropic创始人Dario Amodei来到一幢豪宅，与两位好莱坞名人相对而坐。一位是麦当娜和U2的  
  36氪 · 2026-11-23 18:14

- [定投纳斯达克的人，被狠狠上了一课](<https://36kr.com/p/4082131148198788?f=rss>)  
  11月20日，华尔街过了一个不折不扣的“黑色星期五”，纳斯达克综合指数暴跌5.28%，一天之内抹平了2026年的全部涨幅。单日跌幅已够惨烈，放到一周里看更加触目惊心，跌幅超10%。市场原本以为巨无霸Anthropic的上市，能提振信心，没想  
  36氪 · 2026-11-23 17:53

- [OpenAI爆改旗舰GPU，AMD直接送厂流片](<https://36kr.com/p/4082036544361602?f=rss>)  
  AI这把火，彻底烧进芯片圈了。 OpenAI官宣，自家GPT给AMD旗舰GPU改电路， 不到5个月，核心指标PPA最高提升14% 。 要知道，这套设计AMD工程师，可是优化了好几年。 算下来，OpenAI一上手直接把一年的进度条，暴力压缩到  
  36氪 · 2026-11-23 17:39

- [杉数完成数亿元D轮融资：十年“冷门创业”，走到AI产业的关键处](<https://www.tmtpost.com/8214351.html>)  
  从数学优化算法到GPU加速，再到AI原生求解器，杉数十年的技术积累有了新的时代坐标。  
  钛媒体 · 2026-11-23 17:26

- [Dario内部备忘录：AGI有两三成概率毁灭人类](<https://36kr.com/p/4082035928650889?f=rss>)  
  11月19日，纳斯达克开盘钟敲响，史上募资最多的一场 IPO 诞生了。 Anthropic 正式上市，代码「ANT」，发行价 83 美元，完全稀释估值约 1.5 万亿美元，开盘市值一度冲破 2 万亿。CEO Dario Amodei 在聚光  
  36氪 · 2026-11-23 17:00

- [OpenAI要给生物医药立规矩了](<https://36kr.com/p/4081906772661890?f=rss>)  
  11月20日，OpenAI发布药物化学推理基准MedChemBench，用于评测AI模型在药物化学研究中的推理能力。基准包含99道题，取自117篇论文和专利，覆盖761个分子结构。 成绩方面，在最高推理档（xhigh）下，GPT-6.2 A  
  36氪 · 2026-11-23 16:31

- [OpenAI预训练指标曝光：27年AI将雪崩式爆发](<https://36kr.com/p/4082036398068610?f=rss>)  
  就在刚刚，OpenAI罕见把自家核心机密摊开！ 首席科学家 Jakub Pachocki 发表重磅长文，直言： OpenAI内部模型已越过数学突破线，全行业应该为 AI 模型设置安全线！ 他警告：2027年，AI将迎来「雪崩式爆发」！内部模  
  36氪 · 2026-11-23 16:21

- [LG U+ 围绕 AI 调整企业业务架构，新设基础设施 / 平台部门](<https://www.ithome.com/1/030/938.htm>)  
  IT之家 11 月 23 日消息，据韩媒 The Elec 报道，LG U+ 正围绕人工智能（AI）基础设施和平台业务调整企业业务架构，计划将相关业务划分为 AI 基础设施部门和 AI 平台部门，分别负责 AI 数据中心及有线、无线通…  
  IT之家 · 2026-11-23 16:06

- [AI 大模型周榜：谷歌 Gemini 4 Neon 新登综合第 3，阿里 Qwen4-Max 智能体首秀第 18](<https://www.ithome.com/1/030/935.htm>)  
  IT之家 11 月 23 日消息，Arena（ arena.ai ）现已发布第 47 周（2026 年 11 月 16 日至 22 日）周榜。本周综合榜迎来三款重量级新模型首秀：谷歌 Gemini 4 Neon \(High\) 以 EL…  
  IT之家 · 2026-11-23 16:00

- [Pinecone真的不可替代吗？](<https://36kr.com/p/4082028533437313?f=rss>)  
  “只需将你的知识投入向量商店，连接大模型，奇迹就会发生。” 两年前，这句充满诱惑力的承诺让无数企业CTO夜不能寐。向量数据库——这个能够“理解语义”的新型数据库——被视为打开AI宝藏的最后一把钥匙。 风险资本疯狂涌入，创业者前赴后继，仿佛错  
  36氪 · 2026-11-23 15:55

- [字节背后的算力供应商，IPO暂停了](<https://36kr.com/p/4082012098466953?f=rss>)  
  字节背后的“AI卖水人”，IPO按下暂停键。 据外媒11月20日报道，知情人士称，新加坡数据中心运营商DayOne据悉暂停美国IPO计划，因数据中心和市场担忧；如果市场好转，DayOne可能在2027年寻求赴美上市。 此前报道，公司原本计划  
  36氪 · 2026-11-23 15:46

- [Pulley Studios获得4100万美元B轮融资](<https://www.itjuzi.com/investevent/14708468>)  
  Pulley Studios是一家AI 建筑审批服务商，将 AI 智能体与持证建筑专业人员结合，为商业地产、数据中心、新能源、多户住宅项目提供从前期合规尽调、施工图 AI 预审、许可申报到市政对接的一站式建筑审批服务，支持美国 200…  
  IT桔子 · 2026-11-23 15:07

- [China’s Next AI Deals Clouded by Selloff After Anthropic IPO](<https://www.bloomberg.com/news/articles/2026-11-23/china-s-next-ai-deals-clouded-by-selloff-after-anthropic-ipo>)  
  Bloomberg · 2026-11-23 15:05

- [新款深蓝 L07 车型将于 11 月 27 日广州车展亮相：采用 800V 高压平台、搭载豆包大模型](<https://www.ithome.com/1/030/911.htm>)  
  IT之家 11 月 23 日消息，深蓝汽车宣布旗下新款 L07 车型将于 11 月 27 日开幕的 2026 广州车展上亮相。 据介绍，新款深蓝 L07 采用 800V 高压平台，全系标配激光雷达，其智能辅助驾驶能力可覆盖通勤、高速、…  
  IT之家 · 2026-11-23 15:04

- [US AI Chip Curbs Test Southeast Asia Data Center Boom](<https://www.bloomberg.com/news/videos/2026-11-23/us-ai-chip-curbs-test-southeast-asia-data-center-boom-video>)  
  Bloomberg · 2026-11-23 11:21

- [语用科技已完成新一轮融资](<https://www.itjuzi.com/investevent/14708420>)  
  语用科技是前阿里巴巴千问大模型负责人林俊旸创办的AI实验室，研究方向为横跨数字世界和物理世界的下一代智能体（Agent）。近日获悉，语用科技已完成新一轮融资，估值达到 50 亿美元，按当前汇率约合 334.6 亿元人民币。距官宣首轮融…  
  IT桔子 · 2026-11-23 10:40

- [Anthropic万亿上市，搅动的却是半导体江湖](<https://36kr.com/p/4080353019909248?f=rss>)  
  11月19日，人工智能大模型公司Anthropic正式在纳斯达克挂牌，股票代码“ANT”。 此次IPO最终以每股83美元定价，高于此前70美元至78美元的推介区间，基础发行9.8亿股，募资约813.4亿美元，超过SpaceX今年6月创下的全  
  36氪 · 2026-11-23 10:09

- [全球首次，DeepSeek与FlashAttention的多个生产级AI算子获得形式化验证](<https://36kr.com/p/4081655709406336?f=rss>)  
  2025 年 8 月，一些 Claude 用户遇到了一件怪事。 明明用英语提问，回答里却突然冒出泰文；让它写代码，生成的程序里又出现了明显的语法错误。对遇到问题的用户来说，大模型就像突然「失控」了。 Anthropic 后来在复盘中解释，一  
  36氪 · 2026-11-23 09:56

- [How Notable Capital, GIC, and Baillie Gifford bet big on Anthropic before its IPO](<https://techcrunch.com/2026/11/22/how-notable-capital-gic-and-baillie-gifford-bet-big-on-anthropic-before-its-ipo/>)  
  Three significant backers share what gave them conviction to bet billions on Anthropic.  
  TechCrunch · 2026-11-23 09:25

- [企业们抢着贴上“第一”标签，然后呢？](<https://36kr.com/p/4080910249531009?f=rss>)  
  在家电、3C数码、汽车，乃至具身智能、AI大模型等领域，企业们不仅不回避排名，反而主动寻找各种口径，争着把“第一”写在战报标题里。 「TMT星球」注意到，2026年双十一结束不久，美的、海尔、海信、联想等纷纷宣布自己拿下了不同维度的第一。  
  36氪 · 2026-11-23 08:14

- [逃不出的AI泡沫](<https://36kr.com/p/4080493894063238?f=rss>)  
  一个AI投资者至少要在一定程度上准确预判：技术的演进、算力需求、竞争格局、技术受益者、融资可得性，以及上述所有事项发生的时间点，而评估这些关键要素异常困难。 但可以确定的是，每一轮颠覆性技术的诞生，未必会给投资者带来回报，甚至大多数人都在技  
  36氪 · 2026-11-23 07:55

- [孙正义，又悬了](<https://36kr.com/p/4080714655356032?f=rss>)  
  11月的AI圈，地动山摇。 英伟达市值从10月高点一度蒸发近1.4万亿美元，执掌公司33���的黄仁勋黯然辞职；Anthropic创纪录上市当天，纳指收跌2.3%。 但这场风暴里，最头疼的，可能不是黄仁勋，而是孙正义。 11月20日，软银股  
  36氪 · 2026-11-23 07:43

- [史上最大IPO，14位中国年轻人���富](<https://36kr.com/p/4080938958214279?f=rss>)  
  一夜之间，硅谷又诞生了一批超级富豪。 11月19日，AI巨头Anthropic正式登陆纳斯达克，以每股83美元的价格发行9.8亿股，募资约813亿美元，创下全球IPO募资规模新纪录。 上市首日，公司股价一度冲至111.50美元，对应完全稀释  
  36氪 · 2026-11-23 07:33

- [E259｜机械神教与反人性策略：华尔街量化巨头的AI之路](<https://sv101.fireside.fm/273>)  
  华尔街最低调、最赚钱的那一批量化交易巨头，也是这一轮AI浪潮里囤算力、抢人才、投资AI实验室最凶猛的那一批。 他们不靠市场趋势赚钱，而是靠波动和速度在毫秒间争夺价差。和大家印象中西装革履的金融人士并不一样，这些公司里的人可能是一群数学…  
  硅谷101 · 2026-11-23 07:00

- [NVIDIA 发布车载推理 VLA 模型 Alpamayo 2 Edge，面向 DRIVE AGX Thor](<https://www.marktechpost.com/2026/11/22/nvidia-alpamayo-2-edge-2b-reasoning-vla-drive-thor/>)  
  NVIDIA 发布 2B 级推理视觉-语言-动作模型 Alpamayo 2 Edge，可在车内 DRIVE AGX Thor 上做轨迹规划与因果解释，采用 OpenMDW-1.1 许可开源权重。  
  MarkTechPost（RSS） · 2026-11-23 02:37

- [TechCrunch 访谈《Hyperscale》作者 Paris Marx：数据中心为何成为反科技浪潮的焦点](<https://techcrunch.com/2026/11/22/why-data-centers-are-at-the-center-of-the-big-tech-backlash/>)  
  TechCrunch 访谈记者 Paris Marx，谈其新书《Hyperscale》调查数据中心与生成式 AI 的社会影响。  
  TechCrunch：AI（RSS） · 2026-11-23 02:08

- [What Comes Next After Anthropic’s Historic IPO](<https://www.wsj.com/tech/ai/what-comes-next-after-anthropics-historic-ipo-464368c1?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-22 23:55

- [新实验：AI 编码智能体在模拟软件公司中完成不到十分之一的任务](<https://the-decoder.com/ai-coding-agents-ace-isolated-tests-but-complete-fewer-than-one-in-ten-tasks-in-a-simulated-workplace/>)  
  一项新实验首次让 AI 编码智能体在模拟软件公司中作为数字员工工作，环境包含同事、项目看板和聊天记录。结果显示即使 Claude Opus 5.5 和 GPT-6 Astra 也只完整完成不到十分之一的任务，而 SWE-bench 等标准基准已接近饱和。  
  The Decoder：AI News（RSS） · 2026-11-22 23:15

- [Oracle 称已筹集履行 OpenAI 合同全部所需资金](<https://www.ithome.com/1/030/715.htm>)  
  Oracle 11 月 20 日表示已在本月初筹集到履行与 OpenAI 交易的全部所需租金，与供应商的进一步私下讨论仅为补充选项。其得州 Abilene 园区已用于 GPT-6 Astra 训练并接近完工，下一个 GW 级项目 Shackelford 已获全部许可，NVIDIA Vera Rubin 机架预计未来几周内交付完成。  
  IT之家·人工智能 · 2026-11-22 22:24

- [美国扩大芯片管制、DeepSeek 融资股权结构曝光、腾讯 AI 投入成本揭晓](<https://www.recodechinaai.com/p/new-chip-restrictions-deepseeks-funding>)  
  美国将芯片出口管制扩展至海外数据中心租用算力，新规11月19日生效，并收紧对芯片制造与封装的要求。DeepSeek 本轮融资约 RMB105.5 亿、投后估值约 RMB615.5 亿，杭州辰岩成为运营公司股东。腾讯第三季度营收约 RMB207.3 亿、同比增长 8%，资本开支 RMB81.4 亿，WorkBuddy 日活超 1000 万、日均消耗超 100 万亿 tokens。  
  Recode China AI（RSS） · 2026-11-22 21:33

- [Dragos研究揭示低价AI推理服务商窃取密钥并窥探用户请求](<https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/>)  
  Dragos安全研究人员在2026年7月至11月期间向AI服务商发送约200万条含假凭证的请求，发现至少三家服务商遭入侵，攻击者窃取数百个AWS密钥并在数小时内试用、搜索S3存储，部分攻击者还使用了AI攻击工具ARTEX。研究还发现，部分市场转售商无需利用漏洞即可读取客户请求，仅需以最低价上架模型并开启日志记录。隐私设置如“零数据保留”（ZDR）常被忽视。OpenRouter随后从平台移除三家服务商并撤销125个端点的ZDR批准，同时邮件通知受影响用户。受影响服务商包括Novita、Phala和Together，已…  
  The Decoder：AI News（RSS） · 2026-11-22 20:07

- [研究指AI数据中心碳排放堪比中等国家，Anthropic环境信息披露引关注](<https://www.bloodinthemachine.com/p/ai-is-becoming-a-disaster-for-the>)  
  在Anthropic完成IPO之际，有气候研究指出，美国大型数据中心的碳排放合计已相当于中等国家水平。哈佛大学团队在《自然·可持续性》发表的研究估算，2024年5月至2025年4月间403个数据中心年排放约2570万吨二氧化碳，占美国电力消耗近2%。澳大利亚气候研究员Ketan Joshi的报告进一步指出，AI行业全生命周期排放可能超过国际航空业，且Anthropic从未披露任何能源、排放或环境数据，并与OnePWR达成34亿美元、1.7吉瓦燃气发电设备采购协议。相关研究认为，数据中心自建燃气发电、制冷剂泄漏等因素…  
  Hacker News：AI 热帖 · 2026-11-22 18:32

- [Artificial Analysis 评测显示 GPT-6.2 Astra 和 Sol 回答更简短但透明度低于 Claude](<https://the-decoder.com/gpt-6-2-astra-and-sol-get-to-the-point-faster-but-score-lower-on-transparency-than-claude/>)  
  The Decoder 援引 Artificial Analysis 的 AA-PersonalityBench 评测，介绍 OpenAI GPT-6.2 Astra 和 Sol 的沟通风格变化。  
  The Decoder：AI News（RSS） · 2026-11-22 17:41

- [马斯克预警：AI 行业明年或面临严重资金短缺，营运资金缺口或达数千亿美元](<https://www.ithome.com/1/030/628.htm>)  
  马斯克在回复 Keras 创始人 François Chollet 时预警，AI 行业明年可能面临严重资金短缺，若从支付算力成本到设备稳定创收的时间累计推迟数月，仅营运资金就可能需额外投入数千亿美元。Chollet 此前指出 GPU 现货价格仍在上涨，HBM 和 DRAM 到 2029 年的产能基本已被订满，前沿模型训练算力约每 5 个月翻一番。  
  IT之家·人工智能 · 2026-11-22 16:47

- [蚂蚁 inclusionAI 开源 LingSante-3.1-flash-MXFP4 医疗 MoE 模型](<https://huggingface.co/inclusionAI/LingSante-3.1-flash-MXFP4>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 LingSante-3.1-flash-MXFP4，这是基于 LingSante-3.1-flash 的混合 MXFP4 量化开源权重模型，主模型约 560B 参数、每 token 激活约 25B，配置 262,144 token 上下文窗口。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-22 11:19

- [群联展示内置 NPU 与 64GB 内存的智能固态硬盘，可直接运行 AI 模型](<https://www.ithome.com/1/030/524.htm>)  
  群联在 SC26 大会展示两款面向 AI 场景的企业级 SSD，其中一款内置 NPU 与 64GB 内存，带宽 130GB/s，可直接在硬盘上运行 PyTorch、vLLM、OpenVINO 和 llama.cpp 等框架。  
  IT之家·人工智能 · 2026-11-22 08:04

- [Nvidia 研究者称超大 AI 上下文窗口是死路](<https://the-decoder.com/nvidia-researchers-argue-huge-ai-context-windows-are-a-dead-end/>)  
  Nvidia 研究团队认为，模型上下文窗口一味扩大往往是过度且昂贵的做法，定期摘要加定向检索在多项测试中效果相当。GPT-4 于 2023 年 3 月发布时上下文为 8,192 tokens，如今 GPT 5.6 Sol 可处理约一百万 tokens，约为前者 120 倍。  
  The Decoder：AI News（RSS） · 2026-11-22 00:23

- [Oracle Says It Has Completed Funding to Fulfil OpenAI Deal](<https://www.theinformation.com/briefings/oracle-says-completed-funding-fulfil-openai-deal>)  
  The Information · 2026-11-22 00:09

- [Sarvam AI 发布开源权重模型 Sarvam-105B-1711](<https://www.sarvam.ai/blogs/sarvam-105b-1711>)  
  Sarvam AI 发布开源权重模型 Sarvam-105B-1711，面向客户支持、语音智能体和智能体任务等高并发场景，在八个对话智能体基准上平均分从 3 月版本的 42.6 升至 73.9，混合价格从 $0.44 降至 $0.15 每百万 token，与 Gemini 3.5 Flash-Lite 的 74.0 相当但价格不足其五分之一。  
  Sarvam AI（网页） · 2026-11-22 00:00

- [20VC: The State of Compute: What Everyone Needs to Know \| Why Neo-Clouds are Great Businesses \| What Everyone Is Missing About GPU Prices? \| How AI Infrastructure Investors Will Win with Kush Bavaria, Co-Founder @ Ornn](<https://thetwentyminutevc.libsyn.com/20vc-the-state-of-compute-what-everyone-needs-to-know-why-neo-clouds-are-great-businesses-what-everyone-is-missing-about-gpu-prices-how-ai-infrastructure-investors-will-win-with-kush-bavaria-co-founder-ornn>)  
  Kush Bavaria is the Co-founder and CEO of Ornn, building the financial market for AI compute. Ornn helps companies pr…  
  20VC · 2026-11-21 22:50

- [Qwen4 Max 上线 Together AI，单次调用修复 Tornado 整仓 bug](<https://www.together.ai/blog/qwen4-max>)  
  Together AI 宣布阿里旗舰模型 Qwen4 Max 上线其 Serverless 推理平台（模型串 Qwen/Qwen4-Max），1M token 上下文，截至 2026 年 11 月 22 日 7 折。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [How Anthropic Upstaged OpenAI on Road to Blockbuster IPO](<https://www.theinformation.com/articles/anthropic-upstaged-openai-road-blockbuster-ipo>)  
  The Information · 2026-11-20 22:18

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
