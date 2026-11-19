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

## 相关资讯 · 237 条

- [不用写提示词、拖拽定位置：零宙做可控 AI 生图](<https://36kr.com/p/4067668262065280?f=rss>)  
  AI 生成的时候您是否遇到过这样的问题？ 我不懂 AI，我生成的东西没法用 我懂 AI，但是模型没有按照我想要的去生成 大模型生成的图片元素位置不是我想要的，那么请看零宙平台用户生成的实际案例展示 相信大多数玩过 AI 绘画的人都会遇到上面  
  36氪 · 2026-11-19 16:57

- [Anthropic IPO造富：7位创始人百亿身家，数千员工将成百万富翁](<https://36kr.com/p/4076360836436868?f=rss>)  
  Anthropic即将开启自己的造富之路。这家以Claude大模型出圈的AI公司，定于当地时间11月19日在纳斯达克挂牌，股票代码ANT。 此前一日，Anthropic将其IPO的A类普通股定价为每股83美元，这一定价高于该公司此前的预估。  
  36氪 · 2026-11-19 16:27

- [退役飞机发动机，被马斯克“返聘”了](<https://36kr.com/p/4076184353888128?f=rss>)  
  给AI数据中心供电的设备里，居然有从退役客机上拆下来的航空发动机。 经过翻新和改造，这些发动机被重新组装成燃气轮机发电设备，重新投入工作。它们曾经在万米高空为飞机提供动力，如今摇身一变，成了地面数据中心的电力希望。 美国亚利桑那州戴维斯-蒙  
  36氪 · 2026-11-19 16:26

- [Boltz获得1.1亿美元A轮融资](<https://www.itjuzi.com/investevent/14708280>)  
  Boltz是一家AI 生物医药研发商，依托开源生物分子基础模型 Boltz-1、Boltz-2 与 BoltzGen，打造覆盖结构预测、结合亲和力估算、小分子与蛋白从头设计的药物发现平台，商业化产品包括 BoltzMol-1 小分子设…  
  IT桔子 · 2026-11-19 16:18

- [European Stocks Rebound as Anthropic IPO Revives the AI Trade](<https://www.bloomberg.com/news/articles/2026-11-19/european-stocks-rebound-as-anthropic-ipo-revives-the-ai-trade>)  
  Bloomberg · 2026-11-19 16:17

- [Anthropic Tops SpaceX With $107.3B Raise as Trump and Xi Meet at APEC](<https://www.bloomberg.com/news/videos/2026-11-19/horizons-middle-east-africa-11-19-2026-video>)  
  Bloomberg · 2026-11-19 16:14

- [AI+项目制学习，歌若思探索终身成长新路径](<https://36kr.com/p/4065001067107205?f=rss>)  
  AI正在快速改变教育。过去，一个人进入陌生领域，首先面对的是“知识从哪里来”；今天，大模型已经可以在几秒钟内解释概念、整理学习路径，甚至直接生成代码、方案和作品。 但知识越来越容易获得以后，另一个问题反而更加明显： 为什么很多人学了很多，人  
  36氪 · 2026-11-19 15:59

- [三个00后用中国模型做外包，18个月拿到320亿“大结果”](<https://36kr.com/p/4076292785854080?f=rss>)  
  Anthropic上市，硅谷正在诞生新一轮财富神话。而在这场狂欢的另一角，三个从OpenAI离职的00后也提前拿到了自己的“大结果”—— 创业不到18个月，直接把公司卖了45亿美元（约合人民币320亿元）。 美东时间11月18日，美国网络安  
  36氪 · 2026-11-19 15:56

- [史上最大 IPO 带来新一轮造富神话：Anthropic 上市或催生数千名百万富翁](<https://www.ithome.com/1/029/509.htm>)  
  IT之家 11 月 19 日消息，据路透社今天（19 日）上午报道，随着 AI 初创企业 Anthropic 的上市，数千名现任和前员工有望 凭借手中的公司股票成为百万美元富翁 ，就算这些财富暂时还停留在账面上也无妨。此次 IPO 有…  
  IT之家 · 2026-11-19 15:43

- [Google DeepMind 发布 Gemini 4 Neon，约七周内第四款 Gemini 4 模型](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)  
  Google DeepMind 发布 Gemini 4 Neon，为其约七周内的第四款 Gemini 4 模型，定价为每百万 token 输入 $3、缓存输入 $0.15、输出 $15，具备 1M token 上下文窗口和四档 effort 设置。  
  Latent Space（RSS） · 2026-11-19 15:07

- [20VC: Will Jensen Return to NVIDIA \| Anthropic Set for Largest IPO of All Time \| Kalshi, Mercor &amp; Fractile: Mega-Rounds Continue](<https://thetwentyminutevc.libsyn.com/20vc-will-jensen-return-to-nvidia-anthropic-set-for-largest-ipo-of-all-time-kalshi-mercor-fractile-mega-rounds-continue>)  
  AGENDA: 00:00 Nvidia's $600B Wipeout: Pressure Mounts for Jensen's Return 14:00 Anthropic's $1.4T IPO: A New Record f…  
  20VC · 2026-11-19 15:07

- [Google DeepMind 发布 Gemini 4 Neon：1M 上下文，AA Coding Agent Index 第一](<https://www.marktechpost.com/2026/11/18/google-gemini-4-neon-release/>)  
  Google DeepMind 发布 Gemini 4 Neon，定位于 Gemini 4 Carbon 与 Hydrogen 之间的推理模型，定价每 1M tokens 输入 $3、输出 $15，提供 1M 统一上下文窗口。  
  MarkTechPost（RSS） · 2026-11-19 14:52

- [Anthropic Raises $107.3 Billion in Watershed AI Debut](<https://www.bloomberg.com/news/videos/2026-11-19/anthropic-raises-107-3-billion-in-watershed-ai-debut-video>)  
  Bloomberg · 2026-11-19 14:39

- [Anthropic IPO 规模达 1073 亿美元创纪录，灰市交易显示开盘涨幅或超 20%](<https://www.ithome.com/1/029/290.htm>)  
  IT之家 11 月 19 日消息，据彭博社报道，人工智能公司 Anthropic 的股票在灰市交易中显示，上市首日开盘涨幅可能达到 20% 至 26%。此前，这家人工智能实验室将首次公开募股（IPO）规模扩大至 1,073 亿美元 （…  
  IT之家 · 2026-11-19 14:37

- [Anthropic上市前夕，奥特曼重申OpenAI上市计划，此前曾因安全考量暂缓](<https://www.163.com/dy/article/LC3Q14SU0514R9P4.html>)  
  网易科技频道 · 网易号 · 2026-11-19 13:49

- [AI虚拟细胞：从“解释生命”到“预测生命”\| CMC资本参投元示科技近3亿元Pre-A轮融资](<https://36kr.com/p/4075089698395008?f=rss>)  
  近日，AI虚拟细胞（AIVC）企业元示科技宣布完成近3亿元人民币Pre-A轮融资， CMC资本参与本轮投资 。募集资金将用于数据积累、算力设施与自动化实验平台搭建，以及模型迭代和团队建设。 元示科技聚焦AI虚拟细胞，以“生物学原始数据引擎+  
  36氪 · 2026-11-19 13:30

- [英伟达收紧对云厂商的采购担保，需通过融资与验收才生效](<https://www.ithome.com/1/029/268.htm>)  
  据 The Verge 报道，英伟达在最新财报电话会上收紧对 AI 公司的支持门槛，临时首席执行官科莱特·克雷斯（Colette Kress）表示，对新云（neocloud）厂商的采购担保只有在对方完成融资、建成数据中心、部署算力并通过英伟达验收后才生效，建设延期或受阻则担保不再存在。  
  IT之家·人工智能 · 2026-11-19 13:08

- [消息称 OpenAI 手机组装订单花落富士康旗下富智康](<https://www.ithome.com/1/029/267.htm>)  
  据证券时报报道，富士康旗下富智康集团获得 OpenAI 手机项目订单，将承担整机组装；每日经济新闻援引供应链消息称，OpenAI 首款 AI 硬件计划于 2026 年底启动出货，立讯精密独家承担整机制造并供应核心零部件。此前传闻称该设备由 OpenAI 与 Jony Ive 的 LoveFrom 合作开发，可能是一款无屏设备，定价或在 300 至 400 美元区间，均未获官方确认。  
  IT之家·人工智能 · 2026-11-19 13:01

- [Anthropic Raises $81 Billion in Biggest IPO Ever](<https://www.wsj.com/finance/stocks/anthropic-prices-ipo-at-83-a-share-0290494c?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-19 12:19

- [警惕，ChatGPT、Gemini翻车：大模型正疯狂推送虚假购物网站](<https://36kr.com/p/4076152212100740?f=rss>)  
  最近有一项新研究爆出了一个很值得大家警惕的问题： AI聊天机器人居然会主动给用户推荐虚假购物网站。 品牌保护服务商Podqi做了一组测试，一共覆盖151个不同品牌。 测试结果显示，Perplexity给出风险网址的概率高达15%，ChatG  
  36氪 · 2026-11-19 12:07

- [GFTN's Mohanty on Fintech, Anthropic IPO](<https://www.bloomberg.com/news/videos/2026-11-19/gftn-s-mohanty-on-fintech-anthropic-ipo-video>)  
  Bloomberg · 2026-11-19 11:44

- [Anthropic上市，但价值观可能决定走得多远](<https://36kr.com/p/4076048235008899?f=rss>)  
  从OpenAI出走，到1.5万亿美元IPO；从AI安全的理想主义者，到被资本、算力和美国国家安全体系裹挟的商业巨头。Anthropic真正需要回答的，或许不是模型还能有多强，而是它还能不能坚持自己曾经相信的东西。 2026年11月19日，人  
  36氪 · 2026-11-19 11:28

- [无涯智远宣布完成数亿元天使轮和天使+轮融资](<https://www.itjuzi.com/investevent/14704981>)  
  无涯智远聚焦 Real-Time RSI（实时自进化），以参数持续学习为核心技术路径，致力于让大模型在部署后仍能持续吸收知识、内化经验，获得新能力。近日，无涯智远宣布完成数亿元天使轮和天使加轮融资，投资方包括五源资本、红杉中国、联想之…  
  IT桔子 · 2026-11-19 11:15

- [Gemini 4 Neon](<https://www.producthunt.com/products/gemini-6>)  
  Frontier reasoning with faster task completion  
  Product Hunt · English · 2026-11-19 10:32

- [元示科技获得近3亿元Pre-A融资](<https://www.itjuzi.com/investevent/14708193>)  
  元示科技专注于第二代人工智能制药技术，核心研发方向为人工智能虚拟细胞与通用细胞大模型，核心目标是搭建具备强推理、泛化与设计能力的通用细胞大模型。不同于传统单点预测工具，该模型可基于已知的药物-细胞扰动数据，推导药物对其他类型细胞的作用…  
  IT桔子 · 2026-11-19 10:13

- [Anthropic纳斯达克正式上市](<https://www.itjuzi.com/pre-ipo?comname=Anthropic>)  
  Anthropic是一家人工智能技术服务商，以宪法AI（Constitutional AI）安全对齐技术为底层基础，面向企业、开发者提供大模型API接口、私有化企业AI工作台Claude for Work两类商业化服务，收入主要来自企…  
  IT桔子 · 2026-11-19 09:52

- [Anthropic IPO筹集813亿美元](<https://www.itjuzi.com/investevent/14708190>)  
  Anthropic是一家人工智能技术服务商，以宪法AI（Constitutional AI）安全对齐技术为底层基础，面向企业、开发者提供大模型API接口、私有化企业AI工作台Claude for Work两类商业化服务，收入主要来自企…  
  IT桔子 · 2026-11-19 09:51

- [Anthropic IPO将造就数千名百万富翁](<https://36kr.com/p/4075975525668741?f=rss>)  
  11月19日，纳斯达克交易大厅的钟声尚未敲响，Anthropic的员工已经在账面上跨越了一条许多人一生无法企及的线。据路透社报道，这家Claude制造商的首次公开募股有望在现任和前任员工中创造数千名“账面百万富翁”，可能成为硅谷历史上最大的  
  36氪 · 2026-11-19 09:21

- [这届AI大佬，都是学物理的](<https://36kr.com/p/4075991399240578?f=rss>)  
  当年觉得自己“晚出生了一百年”，没赶上物理发现大爆发年代，当下在AI里找到了黄金时代。 史上最大IPO背后，站着一群“转行”物理学家。 美东时间11月19日，Anthropic将以代码“ANT”在纳斯达克挂牌。除公开发行外，公司还将同步进行  
  36氪 · 2026-11-19 09:16

- [Claude Code v2.1.328 发布：Opus 4.6 与 Sonnet 4.6 新增自动模式](<https://github.com/anthropics/claude-code/releases/tag/v2.1.328>)  
  Claude Code v2.1.328 为 Claude Opus 4.6 和 Sonnet 4.6 在 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 及 Claude apps gateway 上新增自动模式，无权限模式的交互会话默认从该模式启动。  
  Claude Code：GitHub Releases（RSS） · 2026-11-19 09:14

- [14%收益提升，OpenAI用AI造芯，5个月完成人工1年工作量，Astra领跑](<https://36kr.com/p/4075847312970881?f=rss>)  
  智东西11月19日消息，刚刚，OpenAI宣布，其模型在 不到五个月内 ，将AMD旗舰级GPU IP的PPA（芯片设计核心指标）提升高达 14% ，这是此前人类工程师约一整年的研发工作量。 OpenAI的研究证明，在RISC-V评估任务中，  
  36氪 · 2026-11-19 09:01

- [不用训练，Opus 5.5直接手写Transformer权重，13类任务全拿100%](<https://36kr.com/p/4075960710566792?f=rss>)  
  在13类复杂的算法任务、26次独立运行中，一个全新的神经网络在隐藏测试集上全部达到了100%的准确率。 更不可思议的是，整个过程没有喂给它海量数据，甚至完全没有使用「反向传播」和「梯度下降」。 这个晶莹剔透、小巧至极的满分神经网络，是Cla  
  36氪 · 2026-11-19 08:54

- [美股Anthropic上市，机构疯抢6倍，散户却准备跑路，9009亿美元的惊天隐患](<https://36kr.com/p/4075871106536324?f=rss>)  
  当人类第一次有机会创造出足以改变整个社会的智能时，我们面对的就不再只是一个新的行业，而是一个新的时代。 就在11月19日本周四，Claude背后的公司Anthropic，预计将在纳斯达克挂牌，代码 ANT 。 按发行区间上限算，完全稀释估值  
  36氪 · 2026-11-19 08:21

- [刚刚，谷歌Gemini 4再发新款，对标超越GPT-6.2 Sol，世界模型Genie 4也已开放](<https://36kr.com/p/4075845199402119?f=rss>)  
  一觉醒来，谷歌又双叒叕发 Gemini 4 模型了。 谷歌最近一直在基础模型上发力，从最高智能到最高效率的模型不停发布，为了重返王座真是拼了。 在 Carbon、Argon、Hydrogen 之后，填补最高智能和最高效率之间的 「中杯」模型  
  36氪 · 2026-11-19 08:09

- [人生不过三万天，Anthropic一万亿](<https://36kr.com/p/4075288308732800?f=rss>)  
  Anthropic上市前夕，达里奥·阿莫代伊与摩根大通CEO杰米·戴蒙做了一次访谈。被问到“为什么现在上市”，达叔表示自己也是第一次去敲钟，因此咨询过很多人的建议： 其中最常见、也最让我有共鸣的建议——虽然大家表述各异，但意思是一样的： 绝  
  36氪 · 2026-11-19 08:08

- [刚刚，Gemini 4 Neon 突袭发布，性价比一夜斩杀 Opus 5.5](<https://36kr.com/p/4075907868955785?f=rss>)  
  不得不佩服 Gemini 挑日子发新闻的勇气，昨晚《GTA 6》刚解锁上线把全球互联网热搜屠了个干净，劈柴老哥今天依然顶着漫天游戏贴，硬生生从元素周期表里又掏出了一款新模型。 就在刚刚，距离上一款旗舰模型 Gemini 4 Carbon 发  
  36氪 · 2026-11-19 08:04

- [8点1氪丨Anthropic IPO定价83美元；iPhone Duo铰链风波升级；浑水宣布做空英伟达](<https://36kr.com/p/4075920892581000?f=rss>)  
  今日热点导览 OpenAI发布GPT-6.2 Astra，GPT-6.2双模型分层定价 董明珠APEC现场寻找合作机会，称格力研发机器人十几年了 马斯克：预计SpaceX不会向OpenAI出售任何算力 大疆Osmo Pocket 4系列涨价  
  36氪 · 2026-11-19 08:01

- [189: Geodesic顾全全：预训练有点“无聊”了，但用scaling改变AI制药才刚开始](<https://podcast.latepost.com/189>)  
  「The best model is yet to come, scaling continues.（最好的模型尚未到来，规模化仍在继续。）」 今年 6 月 ，顾全全发推宣告离开字节，推文的最后一句如此写道。 这句话串起了他在字节 3…  
  晚点聊 · 2026-11-19 08:00

- [Google 发布 Gemini 4 Neon，Simon Willison 实测指其让 Gemini 4 系列定价更混乱](<https://simonwillison.net/2026/Nov/18/llm-gemini/>)  
  Simon Willison 评测 Google 新发布的 Gemini 4 Neon，认为它让本已混乱的 Gemini 4 系列定价更复杂：Neon 为 $3/million 输入、$15/million 输出，当前高于 Carbon（$2/$10，12 月 1 日将涨至 $4/$20）和 Hydrogen（$1.50/$7.50）。  
  Simon Willison 博客 · 2026-11-19 07:59

- [谷歌推出 Gemini 4 Neon 模型，编程 AI 智能体指数排名第一](<https://www.ithome.com/1/029/144.htm>)  
  谷歌 11 月 18 日宣布推出 Gemini 4 Neon 模型，主攻复杂编程、科学研究和企业工作流程，已向开发者、企业及部分付费订阅用户开放。  
  IT之家·人工智能 · 2026-11-19 07:53

- [定价83美元、估值1.5万亿：Anthropic IPO规模超SpaceX](<https://www.163.com/tech/article/LC34SFB600097U7T.html>)  
  网易科技 · 2026-11-19 07:39

- [地平线发布原生视频几何基础模型 LoFT，多项深度估计指标达 SoTA](<https://www.ithome.com/1/029/140.htm>)  
  地平线机器人实验室发布原生视频几何基础模型 LoFT，可从 RGB 视频中联合预测相机位姿、内参及逐帧深度，恢复场景三维结构。该模型采用双循环 Transformer 架构，训练数据约 297 万条有效序列、9.62 亿帧图像记录。在 SpatialBench、ClassicBench 和 VRBench 评测中，LoFT 多项深度估计指标达到 SoTA。  
  IT之家·人工智能 · 2026-11-19 07:30

- [Anthropic valued at over $1 trillion in historic IPO](<https://www.axios.com/2026/11/18/anthropic-ipo-1-trillion>)  
  Anthropic on Wednesday raised over $81 billion in a long-awaited IPO that valued the Claude maker at over $1 trillion…  
  Axios · 2026-11-19 06:16

- [Anthropic reportedly prices IPO at $83 a share, above projected range](<https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/>)  
  The long-awaited IPO reportedly values the company at $1.5 trillion on a fully diluted basis.  
  TechCrunch · 2026-11-19 06:11

- [Anthropic Raises $81 Billion in Upsized IPO](<https://www.theinformation.com/briefings/anthropic-prices-ipo-83-share>)  
  The Information · 2026-11-19 05:51

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 6 页
