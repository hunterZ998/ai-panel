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

## 相关资讯 · 121 条

- [AI 钓鱼邮件会“自我进化”：TheMailer 曝光，不断升级文案直到骗过垃圾邮件过滤器](<https://www.ithome.com/1/031/482.htm>)  
  IT之家 11 月 24 日消息，科技媒体 TechRadar 今天（11 月 24 日）发布博文，报道称暗网论坛近期正传播名为 TheMailer 的 AI 网络钓鱼工具， 结合多种商用大模型与自动化邮件测试、个性化定制和反复改写能…  
  IT之家 · 2026-11-24 14:20

- [Marlowe获得2.77亿美元种子轮融资](<https://www.itjuzi.com/investevent/14708543>)  
  Marlowe是一家多芯片AI算力服务商，打造 Multi-Silicon 异构 AI 推理工厂。公司采用软硬件协同设计，自建并运营不绑定单一芯片的推理算力集群，优先搭载 Etched、AMD 等非英伟达芯片，配套自研调度适配软件栈，…  
  IT桔子 · 2026-11-24 14:12

- [商汤发布并开源 SenseNova U1.6 原生多模态模型，能自己修正图片错误](<https://www.ithome.com/1/031/465.htm>)  
  IT之家 11 月 24 日消息，商汤科技今日发布并开源 SenseNova U1.6 原生多模态模型，延续了 U 系列的理解与生成统一范式， 首次为该系列的 8B 开源模型带来原生图像自修正 。 开启自修正后，同一个模型可以先生成首…  
  IT之家 · 2026-11-24 12:58

- [别盲目追大模型，企业真正该落地的是 “小AI”](<https://36kr.com/p/4083006400631943?f=rss>)  
  很多企业盲目追逐通用大模型，却忽略业务未必需要超强算力。小AI的核心不是弱化能力，而是以业务需求为标尺，只配置刚刚好的智能。它适配离线、合规、低成本等约束，在制造、金融、农业等场景落地，为企业提供更可控、回报更清晰的AI方案。 企业布局AI  
  36氪 · 2026-11-24 12:55

- [国产大模型的黄仁勋变量](<https://36kr.com/p/4083259280561031?f=rss>)  
  文 \| 李炤锋 温丽虹 编辑 \| 张雨忻 今年 1 月，在北京举行的 AGI-Next 峰会上，智谱首席科学家唐杰提醒台下的开发者：美国公司手里还有未公开的模型，中美大模型的差距“说不定并没有缩小”。 同一场会议上，谈到三到五年后中国公司领  
  36氪 · 2026-11-24 12:26

- [通用半导体金刚石芯片基板项目北京点火投产，AI算力散热关键材料迈入规模化阶段](<https://36kr.com/p/4083128931570569?f=rss>)  
  11月23日，北京通创九州金刚石科技有限公司“金刚石芯片基板建设项目（一期）”在北京市房山区窦店高端现代制造业基地点火投产。该项目由半导体激光加工装备企业江苏通用半导体有限公司（下称“通用半导体”）与科创板上市公司九州一轨合资设立的通创九州  
  36氪 · 2026-11-24 11:59

- [​豆包工作下调多款模型消耗倍率，超八成日常任务免费用](<https://36kr.com/p/4082307978744707?f=rss>)  
  近日，豆包工作宣布接入多款第三方大模型，并同步推出多项优惠计划。其中，用户日常使用频率较高的 DeepSeek V4.1 Flash 和豆包 2.1 Lite 两款模型，额度消耗倍率已下调至 0.01。相关实测数据显示，借助倍率调整与部分模  
  36氪 · 2026-11-24 11:55

- [GPT、Claude、Gemini同台竞技，最新成绩来了](<https://36kr.com/p/4083223643542401?f=rss>)  
  自从GPT-6 Astra在机器人操作任务中展现出不错的能力后，Claude、Gemini等主流大模型也相继加入具身智能领域的探索。 今年10月，GPT-6 Astra在RoboLab-120仿真基准中取得74.8%的任务成功率；谷歌Gem  
  36氪 · 2026-11-24 11:55

- [我国前三季度数字产业收入 32.41 万亿元：智能算力规模同比增长 146%，生成式 AI 产品应用普及率超 50%](<https://www.ithome.com/1/031/326.htm>)  
  IT之家 11 月 24 日消息，今日，工信部运行监测协调局发布前三季度数字产业运行数据。 前三季度我国数字产业实现收入 32.41 万亿元，同比增长 14.8%，增速较上年同期加快 5.2 个百分点。其中， 生成式人工智能产品应用普…  
  IT之家 · 2026-11-24 11:01

- [全国首个“人工智能产业保险共同体”成立，目标破解“不敢保、不能保”难题](<https://www.ithome.com/1/031/315.htm>)  
  IT之家 11 月 24 日消息，“深圳创投日”四周年暨 2026 香蜜湖财富管理周开幕大会于 11 月 23 日在深圳举行。 深圳福田区 13 家财险机构共同发起成立 全国首个“人工智能产业保险共同体” ，致力于破解大模型产业链“不…  
  IT之家 · 2026-11-24 10:45

- [越来越快的AI，能不能让人老得慢一点？](<https://36kr.com/p/4083149787829378?f=rss>)  
  AI一天，人间一年。 大模型日益逼近人类顶级专家智力，数字世界里的时间尺度已被改写。为了抓住这波AI浪潮红利，人们夜以继日地追赶新技术，生怕成为那个“过时”的人。 但人终究是人，身体自有一套生命时钟，熬夜需要时间修复，疲惫也无法一键清除。  
  36氪 · 2026-11-24 10:36

- [ChatGPT又升级了！GPT-6.2 Sol上线](<https://www.163.com/dy/article/LCG2SAV30511CPVM.html>)  
  网易科技频道 · 网易号 · 2026-11-24 08:15

- [AI巨头CEO惊人暴论：人类被AI抢饭碗后，可以用沉浸式游戏安抚](<https://36kr.com/p/4082281843364741?f=rss>)  
  IPO不久，Anthropic CEO Dario Amodei就被翻出了「暴论」。 AI让人类失业怎么办？ 那就让他们来玩沉浸式电子游戏，防止大规模动荡！ 今天，不少外媒报道了Dario曾经的这一言论。 对外，Anthropic是一家强调  
  36氪 · 2026-11-23 21:35

- [打败字节猫箱，Tipsy率先盈利，AI陪伴产品杀疯了](<https://36kr.com/p/4082241709134977?f=rss>)  
  当整个市场都在质疑“AI应用为大模型打工”时，AI陪伴产品们给了行业带来了希望。 一款名为Tipsy Chat的AI陪伴产品在快速崛起，最疯狂的时候，App单月下载环比增加991.55%。这款由字节跳动、阿里前员工于2024年创业，做出来的  
  36氪 · 2026-11-23 21:16

- [斯坦福博士零AI苦研黎曼猜想12年，公开8小时反遭AI挑错](<https://36kr.com/p/4082281855193992?f=rss>)  
  Anthropic IPO次日，悬置167年的数学头号难题，在同一天收到了两份证明。 一份出自人类之手，苦研12年。 一份出自人类与Claude之手，用时41天。 这两份证明，在短短两天内迎来了截然不同的结局。 前者公开约8小时，就被人借助  
  36氪 · 2026-11-23 20:43

- [数据中心液冷，到底是怎么工作的？](<https://36kr.com/p/4082157203690633?f=rss>)  
  今天这篇文章，我们聊聊液冷。 2026年，液冷这个赛道非常火爆。不仅设备厂商疯狂布局，资本市场也是趋之若鹜。 原因大家都懂，还是因为AI。AI带动了算力，算力带动了数据中心。算力芯片和设备的发热量越来越高，传统风冷扛不住，所以要发展液冷。  
  36氪 · 2026-11-23 19:26

- [AI服务器临交付暴涨45%，台积电收紧账期要现款：黄仁勋刚走，全球供应链撕破脸](<https://36kr.com/p/4081927320786048?f=rss>)  
  过去几年，黄仁勋不只是英伟达掌门人，更像是 全球 AI 供应链的“定海神针” ，每逢AI泡沫的质疑此起彼伏，他总能镇住场子，给市场信心再添一把火。 如今，随着核心人物的突然退场，最先崩盘或许并非技术叙事，也不是算力需求，而是 支撑起这万亿投  
  36氪 · 2026-11-23 18:22

- [杉数完成数亿元D轮融资](<https://www.itjuzi.com/investevent/14708501>)  
  杉数科技专注于决策式AI技术研发与产业应用。公司构建了覆盖高性能异构算力、优化求解引擎、AI决策平台及行业应用的全栈技术体系，目前，公司产品及服务已在工业制造、能源电力、轨道交通、石油石化、航空航天、零售快消等20余个细分领域落地，服…  
  IT桔子 · 2026-11-23 18:18

- [好莱坞第一VC](<https://36kr.com/p/4082090048476034?f=rss>)  
  Anthropic上市万众瞩目，一众创始人和员工实现财富自由。顺着投资名单望去，一个好莱坞演员身影浮现。 始于2023年的一场会面，Anthropic创始人Dario Amodei来到一幢豪宅，与两位好莱坞名人相对而坐。一位是麦当娜和U2的  
  36氪 · 2026-11-23 18:14

- [Richpanel helps companies automate 50% of support in 30 days](<https://openai.com/business/customer-stories/richpanel-ai-customer-support>)  
  Richpanel uses GPT-6 Astra and GPT-6.1 Sol to equip its AI support agents with tools and procedures, and GPT-6 Luna f…  
  OpenAI · 2026-11-23 16:00

- [Pulley Studios获得4100万美元B轮融资](<https://www.itjuzi.com/investevent/14708468>)  
  Pulley Studios是一家AI 建筑审批服务商，将 AI 智能体与持证建筑专业人员结合，为商业地产、数据中心、新能源、多户住宅项目提供从前期合规尽调、施工图 AI 预审、许可申报到市政对接的一站式建筑审批服务，支持美国 200…  
  IT桔子 · 2026-11-23 15:07

- [How Notable Capital, GIC, and Baillie Gifford bet big on Anthropic before its IPO](<https://techcrunch.com/2026/11/22/how-notable-capital-gic-and-baillie-gifford-bet-big-on-anthropic-before-its-ipo/>)  
  Three significant backers share what gave them conviction to bet billions on Anthropic.  
  TechCrunch · 2026-11-23 09:25

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

- [Anthropic is public, now comes the hard part](<https://www.axios.com/2026/11/20/anthropic-public-shareholders>)  
  Data: FactSet; Chart: Matt Phillips/Axios With its IPO done and dusted, Anthropic's shareholders will be watching its…  
  Axios · 2026-11-20 20:10

- [Phoenix mayor walks fine line on AI boom](<https://www.axios.com/2026/11/20/phoenix-mayor-data-centers-ai-boom>)  
  Phoenix Mayor Kate Gallego wants more tech investment in her city — but on her terms, as data centers strain resource…  
  Axios · 2026-11-20 18:20

- [Hebbia sees improvements in financial research with GPT-6 Astra](<https://openai.com/business/customer-stories/hebbia>)  
  Hebbia tested GPT-6 Astra for financial research. Its prerelease evaluations found gains in source coverage, citation…  
  OpenAI · 2026-11-20 08:00

- [An Extraordinary Journey: Celebrating Anthropic’s IPO](<https://menlovc.com/perspective/an-extraordinary-journey-celebrating-anthropics-ipo/>)  
  What a special moment for Dario, Daniela, and the spectacular team at Anthropic. Congratulations\! In just over five y…  
  Menlo Ventures · 2026-11-20 00:50

- [20VC: Will Jensen Return to NVIDIA \| Anthropic Set for Largest IPO of All Time \| Kalshi, Mercor &amp; Fractile: Mega-Rounds Continue](<https://thetwentyminutevc.libsyn.com/20vc-will-jensen-return-to-nvidia-anthropic-set-for-largest-ipo-of-all-time-kalshi-mercor-fractile-mega-rounds-continue>)  
  AGENDA: 00:00 Nvidia's $600B Wipeout: Pressure Mounts for Jensen's Return 14:00 Anthropic's $1.4T IPO: A New Record f…  
  20VC · 2026-11-19 15:07

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
