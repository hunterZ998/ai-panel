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

## 相关资讯 · 102 条

- [Nvidia 研究者称超大 AI 上下文窗口是死路](<https://the-decoder.com/nvidia-researchers-argue-huge-ai-context-windows-are-a-dead-end/>)  
  Nvidia 研究团队认为，模型上下文窗口一味扩大往往是过度且昂贵的做法，定期摘要加定向检索在多项测试中效果相当。GPT-4 于 2023 年 3 月发布时上下文为 8,192 tokens，如今 GPT 5.6 Sol 可处理约一百万 tokens，约为前者 120 倍。  
  The Decoder：AI News（RSS） · 2026-11-22 00:23

- [Oracle Says It Has Completed Funding to Fulfil OpenAI Deal](<https://www.theinformation.com/briefings/oracle-says-completed-funding-fulfil-openai-deal>)  
  The Information · 2026-11-22 00:09

- [台积电暂停对中16nm及以下订单，胰腺癌新药重大突破，Anthropic数学家宣称](<https://www.163.com/dy/article/LCA26PKS051196HN.html>)  
  网易科技频道 · 网易号 · 2026-11-22 00:08

- [The Verge 播客：Anthropic IPO 后能否继续把安全放在第一位](<https://www.theverge.com/podcast/1038701/anthropic-ipo-ai-safety-openai-nvidia-structure>)  
  The Verge 的 Nilay Patel 与资深 AI 记者 Hayden Field 对谈 Anthropic 在纳斯达克上市（发行价 $83，一度涨至 $111）后的前景，探讨其能否在公开市场压力下继续投入 AI 安全。  
  The Verge：AI（RSS） · 2026-11-21 23:00

- [20VC: The State of Compute: What Everyone Needs to Know \| Why Neo-Clouds are Great Businesses \| What Everyone Is Missing About GPU Prices? \| How AI Infrastructure Investors Will Win with Kush Bavaria, Co-Founder @ Ornn](<https://thetwentyminutevc.libsyn.com/20vc-the-state-of-compute-what-everyone-needs-to-know-why-neo-clouds-are-great-businesses-what-everyone-is-missing-about-gpu-prices-how-ai-infrastructure-investors-will-win-with-kush-bavaria-co-founder-ornn>)  
  Kush Bavaria is the Co-founder and CEO of Ornn, building the financial market for AI compute. Ornn helps companies pr…  
  20VC · 2026-11-21 22:50

- [韩国总统李在明：速度在 AI 竞赛中至关重要](<https://www.ithome.com/1/030/506.htm>)  
  IT之家 11 月 21 日消息，据路透社报道，当地时间 21 日，韩国总统李在明前往韩国东南部城市蔚山，视察当地一座在建数据中心，并敦促韩国加快在全球 AI 竞赛中的步伐。“ 全世界都在竞相角逐，速度至关重要 。” 数据中心是芯片需…  
  IT之家 · 2026-11-21 22:26

- [OpenAI 发布 GPT-6.2 Astra 和 Sol 的新提示词指南，修正简短回答与多余提问](<https://the-decoder.com/openai-shares-new-prompting-tips-for-gpt-6-2-astra-and-sol-to-fix-brief-answers-and-unnecessary-questions/>)  
  OpenAI 为 11 月 17 日发布的 GPT-6.2 Astra 和 Sol 公布了一套可直接复制的提示词模板，覆盖写作风格、主动性和编码，并建议迁移的开发者重新审视系统提示词。  
  The Decoder：AI News（RSS） · 2026-11-21 21:32

- [曝三星未来三年大部分存储芯片产能已被锁定，有客户希望供货保障至 2031 年](<https://www.ithome.com/1/030/475.htm>)  
  IT之家 11 月 21 日消息，韩媒 Economy Tribune 今天（21 日）下午爆料称，三星电子 2027 年至 2029 年的大部分存储芯片产能 都已被合同预订 。随着 AI 数据中心投资持续扩大，存储芯片供应短缺长期难…  
  IT之家 · 2026-11-21 20:47

- [Thinking Machines 发布开源循环 MoE 模型 Inkling 2 Mini，26.4B 参数可在 32GB Mac 上运行](<https://www.marktechpost.com/2026/11/21/thinking-machines-inkling-2-mini-looped-transformer/>)  
  Thinking Machines 发布开源权重循环 Transformer 模型 Inkling 2 Mini，总参数 26.4B、激活 3.4B，中间层权重每 token 复用 3 次，checkpoint 约 20GB，可在 32GB 内存 Mac 或 1 台 NVIDIA DGX Spark 上运行。  
  MarkTechPost（RSS） · 2026-11-21 20:13

- [【数智周报】 Anthropic敲响纳斯达克开市钟，创史上最大规模IPO纪录；美国限制远程获取AI算力，海外数据中心出租算力须许可；DeepSeek第二轮融资落地](<https://www.tmtpost.com/8213535.html>)  
  （11 月 16 日-21 日）英伟达史上首次单季营收突破1000亿美元，净利润同比翻倍；阿里巴巴：2027财年第二季度营收2715.2亿元，同比增长10%，AI相关产品收入超179亿元，连续13个季度实现三位数增长；腾讯：WorkB…  
  钛媒体 · 2026-11-21 19:19

- [华中科技大学与阿里巴巴联合成立 AI 前沿安全研究中心，课题覆盖大模型安全攻防等](<https://www.ithome.com/1/030/423.htm>)  
  IT之家 11 月 21 日消息，华中科技大学与阿里巴巴集团于 11 月 18 日签署合作协议，聚焦 AI 安全共建“智能攻防与前沿安全联合研究中心”，首批启动 9 个课题。 IT之家获悉，联合研究中心首批启动的 9 个课题，覆盖 大…  
  IT之家 · 2026-11-21 17:57

- [迈克尔·伯里谈 AI 股暴跌：早前已警告卖出英伟达、CoreWeave 与 Nebius](<https://www.ithome.com/1/030/378.htm>)  
  迈克尔·伯里在 X 平台发文称自己此前已提醒投资者可卖出英伟达、CoreWeave、Nebius 及半导体股。自 10 月 6 日盘中高点以来，三只股票分别下跌约 42%、55% 和 65%，纽交所半导体指数同期累计下跌约 30%。伯里 11 月 11 日曾呼吁股东卖出英伟达股票，认为黄仁勋离任后增长将放缓、利润率收窄，并警告 AI 企业过度投入折旧迅速的资产、采用激进会计手法和循环融资。  
  IT之家·人工智能 · 2026-11-21 15:28

- [Anthropic万亿IPO冲击波：智谱、MiniMax大跌，市场或重估大模型定价逻辑](<https://36kr.com/p/4079074198705280?f=rss>)  
  北京时间11月20日凌晨，AI大模型巨头Anthropic正式登陆纳斯达克，IPO募资约为813亿美元，加上完成的260亿美元私募配售，整体募资规模达1073亿美元，打破此前由SpaceX保持的全球IPO募资纪录。 上市首日，Anthrop  
  36氪 · 2026-11-21 14:16

- [Anthropic 上市后 7 位联合创始人靠 F 类股共同掌握 50.1% 投票权](<https://www.ithome.com/1/030/348.htm>)  
  据 Business Insider 报道，Anthropic 上市后通过特殊股权设计，让包括 CEO Dario Amodei 在内的 7 位联合创始人共同掌握 50.1% 股东投票权。  
  IT之家·人工智能 · 2026-11-21 13:14

- [东南亚AI中间商之死](<https://www.tmtpost.com/8213274.html>)  
  算力中间商的淘金时代，结束了。  
  钛媒体 · 2026-11-21 13:05

- [清析智研王欢：大模型学完了人类知识，下一步去哪儿？](<https://www.tmtpost.com/8213250.html>)  
  AI能不能不只“掌握已有知识”，而是进入真实世界，创造新知识？  
  钛媒体 · 2026-11-21 12:44

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

- [Anthropic is public, now comes the hard part](<https://www.axios.com/2026/11/20/anthropic-public-shareholders>)  
  Data: FactSet; Chart: Matt Phillips/Axios With its IPO done and dusted, Anthropic's shareholders will be watching its…  
  Axios · 2026-11-20 20:10

- [Anthropic崛起史：最强AI背后的矛与盾，布道者与伪君子](<https://36kr.com/p/4077969727673477?f=rss>)  
  五年，年化营收超过800亿美元，上市首日完全稀释估值一度触及2万亿美元。这是一条在人类商业史上几乎从未出现过的增长曲线。 先知、救世主情结、宗教领袖，这也是在一个以技术与理性著称的行业里，几乎从未看到的标签。而如今，它们同时落在了一家公司身  
  36氪 · 2026-11-20 19:39

- [Phoenix mayor walks fine line on AI boom](<https://www.axios.com/2026/11/20/phoenix-mayor-data-centers-ai-boom>)  
  Phoenix Mayor Kate Gallego wants more tech investment in her city — but on her terms, as data centers strain resource…  
  Axios · 2026-11-20 18:20

- [Unsiloed AI获得750万美元种子轮融资](<https://www.itjuzi.com/investevent/14708367>)  
  Unsiloed AI是一家文档解析AI科技研发商，自研双流视觉模型，将 PDF、扫描件、图片、表格、表单等 20 余种非结构化文档解析为带溯源引用、置信度分数与边界框的 Markdown 和结构化 JSON，供 LLM 与 AI 智…  
  IT桔子 · 2026-11-20 15:40

- [OpenAI 开发者分享在 Codex 中用 Ultrafast 保持心流的使用方法](<https://developers.openai.com/blog/how-i-stay-in-the-flow-with-ultrafast>)  
  OpenAI 开发者介绍如何用本周发布的 GPT-6.2 Astra 和 Sol Ultrafast（token 生成最快提速 4.5×）保持迭代心流。做法包括用热重载 dev server、在应用内浏览器保持预览、拆成短任务、用标注和语音模式、从 Light/Low 推理起步，并把验证移出快速迭代循环。  
  OpenAI Developers：Blog（网页） · 2026-11-20 15:00

- [星辰智算获得数百万人民币战略投资](<https://www.itjuzi.com/investevent/14708361>)  
  星辰智算SentiMind是一家认知科学多模态大模型研发商，用游戏化认知任务采集人的行为数据，再以多模态模型理解、预测与训练认知能力，已构建覆盖认知评估、训练、追踪的闭环体系，并推出端侧认知调度层Senti-OS，以1至3B的轻量化模…  
  IT桔子 · 2026-11-20 14:42

- [诚恒微获得2亿人民币A轮融资](<https://www.itjuzi.com/investevent/14708317>)  
  诚恒微锚定边端侧算力引擎，主营业务为边端侧AI芯片设计、研发与销售，采用Fabless经营模式，业务涵盖了集成电路设计前沿研发、芯片架构设计、配套软件开发及行业解决方案赋能，构建从技术探索到产业落地的全链条能力。近日，诚恒微获得2亿人…  
  IT桔子 · 2026-11-20 11:21

- [英伟达接近以逾5亿美元收购扩散式AI初创公司Inception](<https://www.itjuzi.com/merger/14599>)  
  Inception Labs 开发出了一种基于 “扩散” 技术的全新 AI 模型，称为基于扩散的大语言模型 “DLM”。Inception 的模型具备传统大语言模型的功能，包括代码生成和问答能力，但性能显著提升，且计算成本更低。据报道…  
  IT桔子 · 2026-11-20 10:30

- [Anthropic’s IPO Triumph](<https://www.theinformation.com/articles/anthropics-ipo-triumph>)  
  The Information · 2026-11-20 09:00

- [DeepSeek千亿融资落地，31家出资方入股梁文锋搭建的持股平台](<https://www.pedaily.cn/first/193674.shtml>)  
  11月19日消息，公开信息显示，DeepSeek工商主体杭州深度求索人工智能基础技术研究有限公司近日完成工商变更，新增股东杭州程砚企业管理咨询合伙企业（有限合伙）、公司注册资本变更为1991.8707万元，增幅约21.1%。 股权穿透…  
  投资界 · 2026-11-20 08:55

- [OpenAI或将进军手机市场](<https://www.pedaily.cn/first/193669.shtml>)  
  据供应链消息，富士康旗下富智康集团（02038.HK）已获得OpenAI手机项目订单，将参与相关产品的整机组装。富士康同时是苹果iPhone的主要组装商。 若OpenAI手机最终面市，其将进入手机终端市场，并可能围绕AI交互体验，与现…  
  投资界 · 2026-11-20 08:53

- [Anthropic’s 7 founders cashed out nearly $2B in record-breaking IPO](<https://techcrunch.com/2026/11/19/anthropics-7-founders-cashed-out-nearly-2b-in-record-breaking-ipo/>)  
  At the upgraded $83/share IPO price, Anthropic's seven founders each pocketed $280 million, while the company nabbed nea  
  TechCrunch · 2026-11-20 08:43

- [Hebbia sees improvements in financial research with GPT-6 Astra](<https://openai.com/business/customer-stories/hebbia>)  
  Hebbia tested GPT-6 Astra for financial research. Its prerelease evaluations found gains in source coverage, citation…  
  OpenAI · 2026-11-20 08:00

- [Browser Use 复盘 LLM-as-a-Judge 只读了五分之一答案导致的评测假阳性](<https://browser-use.com/posts/llm-as-a-judge-eval-bug>)  
  Browser Use 复盘一次 agent 评测中的 LLM judge bug：判分器只读 FINAL ANSWER: 标记后的文本，200 个任务中位数只读 2,102 字符中的 433 字符，其中 +5.1 分的提升有 1.8 到 2.6 分来自这个 bug。  
  Browser Use · 2026-11-20 08:00

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
