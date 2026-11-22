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

## 相关资讯 · 118 条

- [大模型竞赛进入AI4S深水区，“沪牌”模型在密码学领域取得重要突破](<https://www.163.com/dy/article/LCD5RF8L055040N3.html>)  
  网易科技频道 · 网易号 · 2026-11-23 05:09

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

- [MiniMax宣布大模型破解多项密码学前沿方案](<https://www.163.com/dy/article/LCCEPF2F0519DFFO.html>)  
  网易科技频道 · 网易号 · 2026-11-22 22:26

- [签约后也能涨价：消息称 AI 服务器厂商交付前提价，涨幅最高达 45%](<https://www.ithome.com/1/030/713.htm>)  
  IT之家 11 月 22 日消息，据金融时报报道，随着人工智能基础设施成本飙升并向下游客户传导，销售数据中心设备的科技公司正在与买家签署合同数月后，大幅上调搭载英伟达芯片的人工智能服务器价格。 包括戴尔、慧与科技（HPE）、联想和超微…  
  IT之家 · 2026-11-22 22:00

- [美国扩大芯片管制、DeepSeek 融资股权结构曝光、腾讯 AI 投入成本揭晓](<https://www.recodechinaai.com/p/new-chip-restrictions-deepseeks-funding>)  
  美国将芯片出口管制扩展至海外数据中心租用算力，新规11月19日生效，并收紧对芯片制造与封装的要求。DeepSeek 本轮融资约 RMB105.5 亿、投后估值约 RMB615.5 亿，杭州辰岩成为运营公司股东。腾讯第三季度营收约 RMB207.3 亿、同比增长 8%，资本开支 RMB81.4 亿，WorkBuddy 日活超 1000 万、日均消耗超 100 万亿 tokens。  
  Recode China AI（RSS） · 2026-11-22 21:33

- [Dragos研究揭示低价AI推理服务商窃取密钥并窥探用户请求](<https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/>)  
  Dragos安全研究人员在2026年7月至11月期间向AI服务商发送约200万条含假凭证的请求，发现至少三家服务商遭入侵，攻击者窃取数百个AWS密钥并在数小时内试用、搜索S3存储，部分攻击者还使用了AI攻击工具ARTEX。研究还发现，部分市场转售商无需利用漏洞即可读取客户请求，仅需以最低价上架模型并开启日志记录。隐私设置如“零数据保留”（ZDR）常被忽视。OpenRouter随后从平台移除三家服务商并撤销125个端点的ZDR批准，同时邮件通知受影响用户。受影响服务商包括Novita、Phala和Together，已…  
  The Decoder：AI News（RSS） · 2026-11-22 20:07

- [开发者将微型 Transformer 模型塞进软盘，让 486 老电脑也能用上 AI](<https://www.ithome.com/1/030/699.htm>)  
  IT之家 11 月 22 日消息，开发者 WollyMonjac 完成了一项颇具复古科技色彩的项目：将一个语言模型塞进软盘，让运行 DOS 系统的 486DX 和 Pentium 老电脑也能使用 AI。 不过需要说明的是，WollyM…  
  IT之家 · 2026-11-22 19:24

- [拆解大厂财报：谁最舍得为AI花钱？](<https://www.tmtpost.com/8212870.html>)  
  四家大厂的业务线里，算力、模型服务和AI工具已经形成可以辨认的收入模式。  
  钛媒体 · 2026-11-22 19:05

- [研究指AI数据中心碳排放堪比中等国家，Anthropic环境信息披露引关注](<https://www.bloodinthemachine.com/p/ai-is-becoming-a-disaster-for-the>)  
  在Anthropic完成IPO之际，有气候研究指出，美国大型数据中心的碳排放合计已相当于中等国家水平。哈佛大学团队在《自然·可持续性》发表的研究估算，2024年5月至2025年4月间403个数据中心年排放约2570万吨二氧化碳，占美国电力消耗近2%。澳大利亚气候研究员Ketan Joshi的报告进一步指出，AI行业全生命周期排放可能超过国际航空业，且Anthropic从未披露任何能源、排放或环境数据，并与OnePWR达成34亿美元、1.7吉瓦燃气发电设备采购协议。相关研究认为，数据中心自建燃气发电、制冷剂泄漏等因素…  
  Hacker News：AI 热帖 · 2026-11-22 18:32

- [Artificial Analysis 评测显示 GPT-6.2 Astra 和 Sol 回答更简短但透明度低于 Claude](<https://the-decoder.com/gpt-6-2-astra-and-sol-get-to-the-point-faster-but-score-lower-on-transparency-than-claude/>)  
  The Decoder 援引 Artificial Analysis 的 AA-PersonalityBench 评测，介绍 OpenAI GPT-6.2 Astra 和 Sol 的沟通风格变化。  
  The Decoder：AI News（RSS） · 2026-11-22 17:41

- [马斯克预警：AI 行业明年可能面临严重资金短缺，或需要数千亿美元额外投入](<https://www.ithome.com/1/030/628.htm>)  
  IT之家 11 月 22 日消息，深度学习领域开源项目 Keras 创始人弗朗索瓦・肖莱（François Chollet）在 X 上发文称，要么你认为 AI 基础设施建设已经结束，AI 只是一场昙花一现的泡沫，且算力需求已经见顶；要…  
  IT之家 · 2026-11-22 16:47

- [8个AI 新术语，看懂领先90%的人](<https://36kr.com/p/4054107156419714?f=rss>)  
  神译局是36氪旗下编译团队，关注科技、商业、职场、生活等领域，重点介绍国外的新技术、新观点、新风向。 编者按：大模型时代，大家熟悉提示词、幻觉这些基础词汇，但 AI 行业迭代很快，智能体、MCP、GEO 等新名词正在成为行业通用语言。读懂这  
  36氪 · 2026-11-22 16:12

- [Anthropic万亿上市，搅动的却是半导体江湖](<https://www.tmtpost.com/8213769.html>)  
  大买主登陆公开市场，芯片、代工与存储环节都在随之调整。  
  钛媒体 · 2026-11-22 14:16

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

- [The Verge 播客：Anthropic IPO 后能否继续把安全放在第一位](<https://www.theverge.com/podcast/1038701/anthropic-ipo-ai-safety-openai-nvidia-structure>)  
  The Verge 的 Nilay Patel 与资深 AI 记者 Hayden Field 对谈 Anthropic 在纳斯达克上市（发行价 $83，一度涨至 $111）后的前景，探讨其能否在公开市场压力下继续投入 AI 安全。  
  The Verge：AI（RSS） · 2026-11-21 23:00

- [20VC: The State of Compute: What Everyone Needs to Know \| Why Neo-Clouds are Great Businesses \| What Everyone Is Missing About GPU Prices? \| How AI Infrastructure Investors Will Win with Kush Bavaria, Co-Founder @ Ornn](<https://thetwentyminutevc.libsyn.com/20vc-the-state-of-compute-what-everyone-needs-to-know-why-neo-clouds-are-great-businesses-what-everyone-is-missing-about-gpu-prices-how-ai-infrastructure-investors-will-win-with-kush-bavaria-co-founder-ornn>)  
  Kush Bavaria is the Co-founder and CEO of Ornn, building the financial market for AI compute. Ornn helps companies pr…  
  20VC · 2026-11-21 22:50

- [OpenAI 发布 GPT-6.2 Astra 和 Sol 的新提示词指南，修正简短回答与多余提问](<https://the-decoder.com/openai-shares-new-prompting-tips-for-gpt-6-2-astra-and-sol-to-fix-brief-answers-and-unnecessary-questions/>)  
  OpenAI 为 11 月 17 日发布的 GPT-6.2 Astra 和 Sol 公布了一套可直接复制的提示词模板，覆盖写作风格、主动性和编码，并建议迁移的开发者重新审视系统提示词。  
  The Decoder：AI News（RSS） · 2026-11-21 21:32

- [Thinking Machines 发布开源权重模型 Inkling 2 Mini：26.4B 循环 MoE 可在 32GB Mac 上运行](<https://www.marktechpost.com/2026/11/21/thinking-machines-inkling-2-mini-looped-transformer/>)  
  Thinking Machines 发布开源权重循环 Transformer 模型 Inkling 2 Mini，总参数 26.4B、每 token 激活 3.4B，以 Apache 2.0 协议上架 Hugging Face。  
  MarkTechPost（RSS） · 2026-11-21 20:13

- [迈克尔·伯里谈 AI 股暴跌：早前已警告卖出英伟达、CoreWeave 与 Nebius](<https://www.ithome.com/1/030/378.htm>)  
  迈克尔·伯里在 X 平台发文称自己此前已提醒投资者可卖出英伟达、CoreWeave、Nebius 及半导体股。自 10 月 6 日盘中高点以来，三只股票分别下跌约 42%、55% 和 65%，纽交所半导体指数同期累计下跌约 30%。伯里 11 月 11 日曾呼吁股东卖出英伟达股票，认为黄仁勋离任后增长将放缓、利润率收窄，并警告 AI 企业过度投入折旧迅速的资产、采用激进会计手法和循环融资。  
  IT之家·人工智能 · 2026-11-21 15:28

- [Anthropic万亿IPO冲击波：智谱、MiniMax大跌，市场或重估大模型定价逻辑](<https://36kr.com/p/4079074198705280?f=rss>)  
  北京时间11月20日凌晨，AI大模型巨头Anthropic正式登陆纳斯达克，IPO募资约为813亿美元，加上完成的260亿美元私募配售，整体募资规模达1073亿美元，打破此前由SpaceX保持的全球IPO募资纪录。 上市首日，Anthrop  
  36氪 · 2026-11-21 14:16

- [Anthropic 上市后 7 位联合创始人靠 F 类股共同掌握 50.1% 投票权](<https://www.ithome.com/1/030/348.htm>)  
  据 Business Insider 报道，Anthropic 上市后通过特殊股权设计，让包括 CEO Dario Amodei 在内的 7 位联合创始人共同掌握 50.1% 股东投票权。  
  IT之家·人工智能 · 2026-11-21 13:14

- [谷歌重磅论文：内部已实现RSI，Opus经验喂给Gemini，AI拥有进化记忆](<https://36kr.com/p/4078984519750789?f=rss>)  
  谷歌内部，或许真正实现了RSI！ 从此，Gemini已能「继承经验」持续自我进化，Gemini新模型不再从零开始！ 或许也正是这个原因，谷歌最近跟疯了似的不停发模型。 Gemini 4 Hydrogen才发布不到一周，更强的Gemini 4  
  36氪 · 2026-11-21 12:06

- [Baseten 发布基于 Gemma 4 的决策模型 Bison-1 与 Groundhog-1，登顶 Decision Index](<https://www.marktechpost.com/2026/11/20/baseten-bison-1-groundhog-1-gemma-4-decision-models/>)  
  Baseten 发布开源权重决策模型 bison-1 和 groundhog-1，基于 Google 的 Gemma 4 训练，只返回校准概率而不生成文本。  
  MarkTechPost（RSS） · 2026-11-21 12:01

- [腾讯混元姚顺雨团队 AMA：Hy4 仍有改进空间，计划训练更大规模模型](<https://www.ithome.com/1/030/338.htm>)  
  腾讯首席 AI 科学家姚顺雨与混元团队 11 月 21 日凌晨在 Reddit 进行 120 分钟 AMA。针对为何不做 3 万亿以上超大模型的提问，团队回应 Hy3 和 Hy4 表明扎实的小模型也能超过更大的模型且成本更低，但 Hy4 仍有很大改进空间，尤其在通过后训练改进方面，正投入大规模强化学习，并计划训练更大规模的模型。  
  IT之家·人工智能 · 2026-11-21 11:24

- [OpenAI 公布反蒸馏防护进展：GPT-6.2 Astra 思考链提取成功率从 54% 降至 0.2%](<https://www.ithome.com/1/030/319.htm>)  
  OpenAI 发布公告介绍针对对抗性蒸馏的防御措施，加强了 GPT-6.2 Astra 和 GPT-6.2 Sol 对内部推理思考链的保护。  
  IT之家·人工智能 · 2026-11-21 09:45

- [AI供电前史： 照明、汽车与工业电子如何汇入算力基础设施](<https://36kr.com/p/4078758591960197?f=rss>)  
  2008年北京奥运会，国家游泳中心“水立方”在夜色中变成了一块巨大的蓝色发光体。支撑这幅科技奥运景观的，是当时仍在快速产业化的发光二极管（LED）照明。对观众来说，这是一个醒目的城市景观；对产业来说，它是中国半导体照明产业交上的一份应用验证  
  36氪 · 2026-11-21 09:05

- [OpenAI 推出 MedChemBench 基准，评估 AI 辅助药物研发能力](<https://www.ithome.com/1/030/301.htm>)  
  OpenAI 发布 MedChemBench 基准，用 99 道取自 117 篇论文与专利、涉及 761 个分子结构的题目评估 AI 的药物化学推理能力。在 xhigh 推理档下，GPT-6.2 Astra 获 84.5% 可用分数，GPT-6 Astra 为 83.3%，GPT-6.1 Sol 为 82.0%，GPT-5.6 Sol 仅 58.2%。  
  IT之家·人工智能 · 2026-11-21 08:06

- [Qwen4 Max 上线 Together AI，单次调用修复 Tornado 整仓 bug](<https://www.together.ai/blog/qwen4-max>)  
  Together AI 宣布阿里旗舰模型 Qwen4 Max 上线其 Serverless 推理平台（模型串 Qwen/Qwen4-Max），1M token 上下文，截至 2026 年 11 月 22 日 7 折。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [匿名 AI 模型 Gestalt 登顶 Contra 前沿设计榜单，Elo 1931 分超 Claude Fable 5.2 与 GPT-6.1 Sol](<https://www.ithome.com/1/030/291.htm>)  
  匿名隐身模型 Gestalt 在 Contra Labs 11 月 18 日发布的 Frontier Design Benchmark 上以 Elo 1931 分、90% 胜率登顶，超过 Claude Fable 5.2（1713 分）和 GPT-6.1 Sol（1668 分），并高于人类设计师参考作品的 1739 分。  
  IT之家·人工智能 · 2026-11-21 07:17

- [Meta 重新评估 2030 净零目标，AI 数据中心致碳排放同比增长近 40%](<https://arstechnica.com/ai/2026/11/meta-reconsiders-2030-net-zero-goal-amid-record-emissions-from-ai-data-centers/>)  
  Meta 在 2026 年 11 月 19 日发布的可持续发展报告中表示正在重新评估 2030 净零排放目标及近期强度指标，称 AI 基础设施需求增长超出预期。  
  Ars Technica：AI（RSS） · 2026-11-21 05:47

- [形式验证如何对抗 AI 代码 slop：&amp;Truth、Harmonic、Theorem 与 Axiom Math 的路线](<https://latent.space/p/formal-verification/>)  
  Latent Space 撰文分析形式验证如何成为对抗 LLM 低质量代码输出的手段，采访了 &amp;Truth 联合创始人 Clark Barrett。&amp;Truth 基于 Lean 构建“验证机”，首个工具 &amp;Atlas 从 C 语言开源代码起步，聚焦内存安全；Barrett 表示其 cvc5 求解器已在 Amazon 生产管线中每天被调用数十亿次。  
  Latent Space（RSS） · 2026-11-21 05:18

- [MIT-IBM 研究：多模态基础模型如何实现更像人的交互与理解](<https://news.mit.edu/2026/qa-enabling-more-human-interactions-understanding-multimodal-foundation-models-1120>)  
  MIT-IBM Computing Research Lab 团队在 Jim Glass 共同带领下研究多模态基础模型的感知与语言关联，并针对 GPT-4o 等模型的失败案例开发新基准与少监督方法。  
  MIT News（RSS） · 2026-11-21 05:00

- [OpenAI 大幅强化 GPT-6.2 Astra 与 GPT-6.2 Sol 的推理抽取防护](<https://the-decoder.com/openai-makes-it-much-harder-for-attackers-to-extract-how-its-latest-ai-models-think/>)  
  OpenAI 大幅收紧了 GPT-6.2 Astra 与 GPT-6.2 Sol 防止内部推理被抽取的防护。  
  The Decoder：AI News（RSS） · 2026-11-21 04:31

- [How Anthropic Upstaged OpenAI on Road to Blockbuster IPO](<https://www.theinformation.com/articles/anthropic-upstaged-openai-road-blockbuster-ipo>)  
  The Information · 2026-11-20 22:18

- [AI硬件的牛市结束了](<https://36kr.com/p/4078041124574081?f=rss>)  
  最强势的市场，也顶不住这轮AI回调了。 从10月的高点算起，涵盖AI硬件全链条的费城半导体指数跌去27.8%。其中，算力龙头英伟达跌去36.1%、存储龙头美光跌去43%，就连给他们供货的寡头台积电也跌去26.2%。看下来，逻辑最硬、订单最多  
  36氪 · 2026-11-20 20:51

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
