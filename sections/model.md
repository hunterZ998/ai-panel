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

## 相关资讯 · 125 条

- [Anthropic万亿上市，搅动的却是半导体江湖](<https://36kr.com/p/4080353019909248?f=rss>)  
  11月19日，人工智能大模型公司Anthropic正式在纳斯达克挂牌，股票代码“ANT”。 此次IPO最终以每股83美元定价，高于此前70美元至78美元的推介区间，基础发行9.8亿股，募资约813.4亿美元，超过SpaceX今年6月创下的全  
  36氪 · 2026-11-23 10:09

- [全球首次，DeepSeek与FlashAttention的多个生产级AI算子获得形式化验证](<https://36kr.com/p/4081655709406336?f=rss>)  
  2025 年 8 月，一些 Claude 用户遇到了一件怪事。 明明用英语提问，回答里却突然冒出泰文；让它写代码，生成的程序里又出现了明显的语法错误。对遇到问题的用户来说，大模型就像突然「失控」了。 Anthropic 后来在复盘中解释，一  
  36氪 · 2026-11-23 09:56

- [How Notable Capital, GIC, and Baillie Gifford bet big on Anthropic before its IPO](<https://techcrunch.com/2026/11/22/how-notable-capital-gic-and-baillie-gifford-bet-big-on-anthropic-before-its-ipo/>)  
  Three significant backers share what gave them conviction to bet billions on Anthropic.  
  TechCrunch · 2026-11-23 09:25

- [Edge AI Daily 早报（11月23日）](<https://www.tmtpost.com/8214195.html>)  
  英伟达季度营收1158亿美元、下季指引1300亿美元，市场焦点转向基建支出能否转化为可量化回报；Anthropic完成IPO募资约916亿美元，却背负约9009亿美元算力采购承诺，成本刚性与收入弹性错配待解；甲骨文筹足OpenAI合同…  
  钛媒体 · 2026-11-23 08:48

- [企业们抢着贴上“第一”标签，然后呢？](<https://36kr.com/p/4080910249531009?f=rss>)  
  在家电、3C数码、汽车，乃至具身智能、AI大模型等领域，企业们不仅不回避排名，反而主动寻找各种口径，争着把“第一”写在战报标题里。 「TMT星球」注意到，2026年双十一结束不久，美的、海尔、海信、联想等纷纷宣布自己拿下了不同维度的第一。  
  36氪 · 2026-11-23 08:14

- [马斯克：AI行业明年可能面临严重资金短缺](<https://www.pedaily.cn/first/194040.shtml>)  
  11月22日，深度学习领域开源项目Keras创始人弗朗索瓦·肖莱（François Chollet）在社交平台X上发文表示，当前市场对人工智能（AI）基础设施存在两种判断：一种观点认为AI基础设施建设已经结束、算力需求见顶，本轮行情只…  
  投资界 · 2026-11-23 08:05

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

- [签约后也能涨价：消息称 AI 服务器厂商交付前提价，涨幅最高达 45%](<https://www.ithome.com/1/030/713.htm>)  
  IT之家 11 月 22 日消息，据金融时报报道，随着人工智能基础设施成本飙升并向下游客户传导，销售数据中心设备的科技公司正在与买家签署合同数月后，大幅上调搭载英伟达芯片的人工智能服务器价格。 包括戴尔、慧与科技（HPE）、联想和超微…  
  IT之家 · 2026-11-22 22:00

- [美国扩大芯片管制、DeepSeek 融资股权结构曝光、腾讯 AI 投入成本揭晓](<https://www.recodechinaai.com/p/new-chip-restrictions-deepseeks-funding>)  
  美国将芯片出口管制扩展至海外数据中心租用算力，新规11月19日生效，并收紧对芯片制造与封装的要求。DeepSeek 本轮融资约 RMB105.5 亿、投后估值约 RMB615.5 亿，杭州辰岩成为运营公司股东。腾讯第三季度营收约 RMB207.3 亿、同比增长 8%，资本开支 RMB81.4 亿，WorkBuddy 日活超 1000 万、日均消耗超 100 万亿 tokens。  
  Recode China AI（RSS） · 2026-11-22 21:33

- [Dragos研究揭示低价AI推理服务商窃取密钥并窥探用户请求](<https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/>)  
  Dragos安全研究人员在2026年7月至11月期间向AI服务商发送约200万条含假凭证的请求，发现至少三家服务商遭入侵，攻击者窃取数百个AWS密钥并在数小时内试用、搜索S3存储，部分攻击者还使用了AI攻击工具ARTEX。研究还发现，部分市场转售商无需利用漏洞即可读取客户请求，仅需以最低价上架模型并开启日志记录。隐私设置如“零数据保留”（ZDR）常被忽视。OpenRouter随后从平台移除三家服务商并撤销125个端点的ZDR批准，同时邮件通知受影响用户。受影响服务商包括Novita、Phala和Together，已…  
  The Decoder：AI News（RSS） · 2026-11-22 20:07

- [拆解大厂财报：谁最舍得为AI花钱？](<https://www.tmtpost.com/8212870.html>)  
  四家大厂的业务线里，算力、模型服务和AI工具已经形成可以辨认的收入模式。  
  钛媒体 · 2026-11-22 19:05

- [研究指AI数据中心碳排放堪比中等国家，Anthropic环境信息披露引关注](<https://www.bloodinthemachine.com/p/ai-is-becoming-a-disaster-for-the>)  
  在Anthropic完成IPO之际，有气候研究指出，美国大型数据中心的碳排放合计已相当于中等国家水平。哈佛大学团队在《自然·可持续性》发表的研究估算，2024年5月至2025年4月间403个数据中心年排放约2570万吨二氧化碳，占美国电力消耗近2%。澳大利亚气候研究员Ketan Joshi的报告进一步指出，AI行业全生命周期排放可能超过国际航空业，且Anthropic从未披露任何能源、排放或环境数据，并与OnePWR达成34亿美元、1.7吉瓦燃气发电设备采购协议。相关研究认为，数据中心自建燃气发电、制冷剂泄漏等因素…  
  Hacker News：AI 热帖 · 2026-11-22 18:32

- [Artificial Analysis 评测显示 GPT-6.2 Astra 和 Sol 回答更简短但透明度低于 Claude](<https://the-decoder.com/gpt-6-2-astra-and-sol-get-to-the-point-faster-but-score-lower-on-transparency-than-claude/>)  
  The Decoder 援引 Artificial Analysis 的 AA-PersonalityBench 评测，介绍 OpenAI GPT-6.2 Astra 和 Sol 的沟通风格变化。  
  The Decoder：AI News（RSS） · 2026-11-22 17:41

- [马斯克预警：AI 行业明年或面临严重资金短缺，营运资金缺口或达数千亿美元](<https://www.ithome.com/1/030/628.htm>)  
  马斯克在回复 Keras 创始人 François Chollet 时预警，AI 行业明年可能面临严重资金短缺，若从支付算力成本到设备稳定创收的时间累计推迟数月，仅营运资金就可能需额外投入数千亿美元。Chollet 此前指出 GPU 现货价格仍在上涨，HBM 和 DRAM 到 2029 年的产能基本已被订满，前沿模型训练算力约每 5 个月翻一番。  
  IT之家·人工智能 · 2026-11-22 16:47

- [8个AI 新术语，看懂领先90%的人](<https://36kr.com/p/4054107156419714?f=rss>)  
  神译局是36氪旗下编译团队，关注科技、商业、职场、生活等领域，重点介绍国外的新技术、新观点、新风向。 编者���：大模型时代，大家熟悉提示词、幻觉这些基础词汇，但 AI 行业迭代很快，智能体、MCP、GEO 等新名词正在成为行业通用语言。读  
  36氪 · 2026-11-22 16:12

- [蚂蚁 inclusionAI 开源 LingSante-3.1-flash-MXFP4 医疗 MoE 模型](<https://huggingface.co/inclusionAI/LingSante-3.1-flash-MXFP4>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 LingSante-3.1-flash-MXFP4，这是基于 LingSante-3.1-flash 的混合 MXFP4 量化开源权重模型，主模型约 560B 参数、每 token 激活约 25B，配置 262,144 token 上下文窗口。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-22 11:19

- [Australia Spy Chief Warns of Data Center, AI Risks, Age Reports](<https://www.bloomberg.com/news/articles/2026-11-22/australia-spy-chief-warns-of-data-center-ai-risks-age-reports>)  
  Bloomberg · 2026-11-22 10:37

- [2万亿造富，25位华人员工接住Anthropic泼天富贵](<https://36kr.com/p/4079379879252868?f=rss>)  
  AI界的造富故事，正在从创始人为主的一端向内部员工扩散。Anthropic的上市，恰好将这种变化推到了聚光灯下。 11月19日，Claude大模型背后的Anthropic正式登陆纳斯达克。公司IPO发行价为每股83美元，公开发行规模高达81  
  36氪 · 2026-11-22 08:20

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

- [Anthropic万亿IPO冲击波：智谱、MiniMax大跌，市场或重估大模型定价逻辑](<https://36kr.com/p/4079074198705280?f=rss>)  
  北京时间11月20日凌晨，AI大模型巨头Anthropic正式登陆纳斯达克，IPO募资约为813亿美元，加上完成的260亿美元私募配售，整体募资规模达1073亿美元，打破此前由SpaceX保持的全球IPO募资纪录。 上市首日，Anthrop  
  36氪 · 2026-11-21 14:16

- [谷歌重磅论文：内部已实现RSI，Opus经验喂给Gemini，AI拥有进化记忆](<https://36kr.com/p/4078984519750789?f=rss>)  
  谷歌内部，或许真正实现了RSI！ 从此，Gemini已能「继承经验」持续自我进化，Gemini新模型不再从零开始！ 或许也正是这个原因，谷歌最近跟疯了似的不停发模型。 Gemini 4 Hydrogen才发布不到一周，更强的Gemini 4  
  36氪 · 2026-11-21 12:06

- [AI供电前史： 照明、汽车与工业电子如何汇入算力基础设施](<https://36kr.com/p/4078758591960197?f=rss>)  
  2008年北京奥运会，国家游泳中心“水立方”在夜色中变成了一块巨大的蓝色发光体。支撑这幅科技奥运景观的，是当时仍在快速产业化的发光二极管（LED）照明。对观众来说，这是一个醒目的城市景观；对产业来说，它是中国半导体照明产业交上的一份应用验证  
  36氪 · 2026-11-21 09:05

- [Qwen4 Max 上线 Together AI，单次调用修复 Tornado 整仓 bug](<https://www.together.ai/blog/qwen4-max>)  
  Together AI 宣布阿里旗舰模型 Qwen4 Max 上线其 Serverless 推理平台（模型串 Qwen/Qwen4-Max），1M token 上下文，截至 2026 年 11 月 22 日 7 折。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [特朗普威胁对在海外建设 AI 数据中心的企业征收「巨大税收」](<https://www.theverge.com/policy/1038892/trump-foreign-data-centers-tax>)  
  特朗普在与习近平和普京峰会后的新闻发布会上表示，不允许美国公司在海外建设数据中心，否则将对其征收「巨大税收」（tremendous tax），称否则「中国会全部拿走」。他称这一想法尚未告知自己的团队，且未给出具体细节；同时美国多州正在对数据中心新建申请设限，而数月内就职的民主党多数国会可能使该计划难以落实。  
  The Verge：AI（RSS） · 2026-11-21 02:50

- [RadixArk 发布纯 RL 训练的智能体编码模型 DaisyRose-27B，权重采用 Apache 2.0](<https://www.marktechpost.com/2026/11/20/radixark-daisyrose-27b-agentic-model/>)  
  RadixArk 本周发布首个开放权重模型 DaisyRose-27B，基于 Qwen3.8-27B 仅用强化学习做后训练，不使用 SFT 或蒸馏，权重以 Apache 2.0 开源。  
  MarkTechPost（RSS） · 2026-11-21 01:42

- [本周 AI 观察：智能体商务受阻、NVIDIA 领导层变动与 AI 可靠性研究](<https://www.oreilly.com/radar/this-week-in-ai-ais-next-reality-check/>)  
  本期 AI 观察聚焦 AI 在商业应用中暴露的新挑战：Anthropic 将 Claude 升级为更广泛的工作平台，推出 Fable 5.2 与 Mythos 5.2 模型及 Claude Meetings、Sheets、Whiteboards、Data，并扩展自托管智能体基础设施；OpenAI 将购物流程引入 ChatGPT，推出企业资料与 ChatGPT Wallet，但航空公司、银行与零售商正限制外部智能体接入。NVIDIA 方面，创始人黄仁勋辞任 CEO，董事会启动调查，长期 CFO Colette Kre…  
  O'Reilly Radar（热点 RSS） · 2026-11-21 00:55

- [Ed Zitron 长文：AI 泡沫为何必然破裂](<https://www.wheresyoured.at/premium-bursting-bubbles/>)  
  Ed Zitron 在长文中指出，AI 行业正重演泡沫的膨胀与破裂循环，超大规模厂商投入数百亿美元购买 GPU、银行放贷数千亿美元、AI 初创公司融资数百亿美元，却无人愿谈收入，OpenAI 2024 年将亏损 50 亿美元。他认为媒体对大公司、大数字和"经验"的轻信，以及追随共识的惯性，是泡沫得以维持的关键。  
  Ed Zitron 长文 / Where’s Your Ed At（RSS） · 2026-11-21 00:41

- [Anthropic IPO 后市场降温，AMD 遭做空报告重创，Google 凭 Gemini 4 Neon 重回竞争](<https://www.newcomer.co/p/after-anthropic-euphoria-nvidia-amd>)  
  Newcomer 周报指出，Anthropic IPO 顺利发行但市场对 AI 交易整体转冷。做空机构 Hunterbrook 发布《Bank of AMD》报告，指控 AMD 存在类似 Nvidia 的循环客户融资问题，AMD 否认相关指控，但股价仍下跌近 10%。同时，Nvidia 财报后股价回落，Google 发布 Gemini 4 Neon 模型，重新回到前沿模型竞争行列。  
  Newcomer 新闻长文（RSS） · 2026-11-20 23:44

- [Nvidia 拟至少 5 亿美元收购扩散语言模型初创 Inception](<https://the-decoder.com/nvidia-bets-at-least-500-million-on-inceptions-diffusion-models-to-strengthen-its-open-source-nemotron-lineup/>)  
  据 The Information 援引三位知情人士，Nvidia 接近以至少 5 亿美元收购旧金山湾区初创 Inception，交易含 30 多名员工的绩效奖金，三位联合创始人 Stefano Ermon、Aditya Grover 和 Volodymyr Kuleshov 预计全职加入。  
  The Decoder：AI News（RSS） · 2026-11-20 22:53

- [NVIDIA 发布连续扩散语言模型 Nemotron-Labs-Sigma，含 3B/8B 共 14 个开放检查点](<https://www.marktechpost.com/2026/11/20/nvidia-nemotron-labs-sigma-continuous-diffusion-language-model/>)  
  NVIDIA 发布 Nemotron-Labs-Sigma，一组在 16 维连续嵌入空间去噪的扩散语言模型，包含 3B 和 8B 的 base、instruct、蒸馏和自推测解码共 14 个开放检查点。  
  MarkTechPost（RSS） · 2026-11-20 22:44

- [Gary Marcus 称 Anthropic 股价破发，AI 股五个月跌超 50%](<https://garymarcus.substack.com/p/breaking-anthropic-stock-is-crashing>)  
  Gary Marcus 发文称 Anthropic 上市表现不佳：ANT 普通投资者交易首日从 111 开盘跌至 97 收盘，盘前再跌约 9% 至 88 左右。  
  Gary Marcus：The Road to AI We Can Trust（RSS） · 2026-11-20 22:20

- [How Anthropic Upstaged OpenAI on Road to Blockbuster IPO](<https://www.theinformation.com/articles/anthropic-upstaged-openai-road-blockbuster-ipo>)  
  The Information · 2026-11-20 22:18

- [Anthropic 破纪录 IPO 未能止住 AI 抛售，全球股市下挫](<https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off>)  
  Anthropic 上市第二天股价跌逾 9% 至 $88.17，接近 $83 发行价，其破纪录 IPO 未能止住 AI 相关公司抛售。周五 Nasdaq 跌 2%，SanDisk 跌 14%、Micron 跌 10%；亚洲股市创 2020 年以来最差一周，台湾加权指数跌 6.7%、日经跌 5%、Kospi 跌 5.5%，SoftBank 单日跌 14.5%。  
  Hacker News：AI 热帖 · 2026-11-20 21:53

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
