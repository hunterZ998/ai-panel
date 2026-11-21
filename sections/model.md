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

## 相关资讯 · 110 条

- [Oracle Says It Has Completed Funding to Fulfil OpenAI Deal](<https://www.theinformation.com/briefings/oracle-says-completed-funding-fulfil-openai-deal>)  
  The Information · 2026-11-22 00:09

- [台积电暂停对中16nm及以下订单，胰腺癌新药重大突破，Anthropic数学家宣称](<https://www.163.com/dy/article/LCA26PKS051196HN.html>)  
  网易科技频道 · 网易号 · 2026-11-22 00:08

- [20VC: The State of Compute: What Everyone Needs to Know \| Why Neo-Clouds are Great Businesses \| What Everyone Is Missing About GPU Prices? \| How AI Infrastructure Investors Will Win with Kush Bavaria, Co-Founder @ Ornn](<https://thetwentyminutevc.libsyn.com/20vc-the-state-of-compute-what-everyone-needs-to-know-why-neo-clouds-are-great-businesses-what-everyone-is-missing-about-gpu-prices-how-ai-infrastructure-investors-will-win-with-kush-bavaria-co-founder-ornn>)  
  Kush Bavaria is the Co-founder and CEO of Ornn, building the financial market for AI compute. Ornn helps companies pr…  
  20VC · 2026-11-21 22:50

- [韩国总统李在明：速度在 AI 竞赛中至关重要](<https://www.ithome.com/1/030/506.htm>)  
  IT之家 11 月 21 日消息，据路透社报道，当地时间 21 日，韩国总统李在明前往韩国东南部城市蔚山，视察当地一座在建数据中心，并敦促韩国加快在全球 AI 竞赛中的步伐。“ 全世界都在竞相角逐，速度至关重要 。” 数据中心是芯片需…  
  IT之家 · 2026-11-21 22:26

- [姚顺雨携混元团队在线答疑：腾讯旗舰大模型是怎样炼成的？](<https://www.163.com/dy/article/LC9S6TQK05199NPP.html>)  
  网易科技频道 · 网易号 · 2026-11-21 22:23

- [曝三星未来三年大部分存储芯片产能已被锁定，有客户希望供货保障至 2031 年](<https://www.ithome.com/1/030/475.htm>)  
  IT之家 11 月 21 日消息，韩媒 Economy Tribune 今天（21 日）下午爆料称，三星电子 2027 年至 2029 年的大部分存储芯片产能 都已被合同预订 。随着 AI 数据中心投资持续扩大，存储芯片供应短缺长期难…  
  IT之家 · 2026-11-21 20:47

- [【数智周报】 Anthropic敲响纳斯达克开市钟，创史上最大规模IPO纪录；美国限制远程获取AI算力，海外数据中心出租算力须许可；DeepSeek第二轮融资落地](<https://www.tmtpost.com/8213535.html>)  
  （11 月 16 日-21 日）英伟达史上首次单季营收突破1000亿美元，净利润同比翻倍；阿里巴巴：2027财年第二季度营收2715.2亿元，同比增长10%，AI相关产品收入超179亿元，连续13个季度实现三位数增长；腾讯：WorkB…  
  钛媒体 · 2026-11-21 19:19

- [华中科技大学与阿里巴巴联合成立 AI 前沿安全研究中心，课题覆盖大模型安全攻防等](<https://www.ithome.com/1/030/423.htm>)  
  IT之家 11 月 21 日消息，华中科技大学与阿里巴巴集团于 11 月 18 日签署合作协议，聚焦 AI 安全共建“智能攻防与前沿安全联合研究中心”，首批启动 9 个课题。 IT之家获悉，联合研究中心首批启动的 9 个课题，覆盖 大…  
  IT之家 · 2026-11-21 17:57

- [Anthropic万亿IPO冲击波：智谱、MiniMax大跌，市场或重估大模型定价逻辑](<https://36kr.com/p/4079074198705280?f=rss>)  
  北京时间11月20日凌晨，AI大模型巨头Anthropic正式登陆纳斯达克，IPO募资约为813亿美元，加上完成的260亿美元私募配售，整体募资规模达1073亿美元，打破此前由SpaceX保持的全球IPO募资纪录。 上市首日，Anthrop  
  36氪 · 2026-11-21 14:16

- [东南亚AI中间商之死](<https://www.tmtpost.com/8213274.html>)  
  算力中间商的淘金时代，结束了。  
  钛媒体 · 2026-11-21 13:05

- [清析智研王欢：大模型学完了人类知识，下一步去哪儿？](<https://www.tmtpost.com/8213250.html>)  
  AI能不能不只“掌握已有知识”，而是进入真实世界，创造新知识？  
  钛媒体 · 2026-11-21 12:44

- [丹佛斯展示AI数据中心全链路液冷方案](<https://www.163.com/tech/article/LC8QG2KR00098IEO.html>)  
  网易科技 · 2026-11-21 12:33

- [谷歌重磅论文：内部已实现RSI，Opus经验喂给Gemini，AI拥有进化记忆](<https://36kr.com/p/4078984519750789?f=rss>)  
  谷歌内部，或许真正实现了RSI！ 从此，Gemini已能「继承经验」持续自我进化，Gemini新模型不再从零开始！ 或许也正是这个原因，谷歌最近跟疯了似的不停发模型。 Gemini 4 Hydrogen才发布不到一周，更强的Gemini 4  
  36氪 · 2026-11-21 12:06

- [AI供电前史： 照明、汽车与工业电子如何汇入算力基础设施](<https://36kr.com/p/4078758591960197?f=rss>)  
  2008年北京奥运会，国家游泳中心“水立方”在夜色中变成了一块巨大的蓝色发光体。支撑这幅科技奥运景观的，是当时仍在快速产业化的发光二极管（LED）照明。对观众来说，这是一个醒目的城市景观；对产业来说，它是中国半导体照明产业交上的一份应用验证  
  36氪 · 2026-11-21 09:05

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

- [Anthropic Closes First Trading Day at $97 a Share, 17% Above IPO Price](<https://www.theinformation.com/briefings/anthropic-closes-first-trading-day-97-share-17-ipo-price>)  
  The Information · 2026-11-20 06:43

- [Anthropic’s IPO could deliver $156B to charity](<https://techcrunch.com/2026/11/19/anthropics-ipo-could-deliver-156-billion-to-charity/>)  
  At a stock price of $95, the frontier lab's Public Benefit Foundation, its employee donations, and the company's match t  
  TechCrunch · 2026-11-20 03:10

- [Anthropic hits Nasdaq exchanges at $111, 33% above IPO price](<https://techcrunch.com/2026/11/19/anthropic-hits-nasdaq-exchanges-at-110-27-above-ipo-price/>)  
  Anthropic's IPO price was set at $83, representing more than $80 billion in new capital raised.  
  TechCrunch · 2026-11-20 00:59

- [An Extraordinary Journey: Celebrating Anthropic’s IPO](<https://menlovc.com/perspective/an-extraordinary-journey-celebrating-anthropics-ipo/>)  
  What a special moment for Dario, Daniela, and the spectacular team at Anthropic. Congratulations\! In just over five y…  
  Menlo Ventures · 2026-11-20 00:50

- [Anthropic’s IPO puts AI’s circular financing boom to the test](<https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/>)  
  Anthropic faces enormous compute commitments as it goes public, but its biggest infrastructure partners, including Amazo  
  TechCrunch · 2026-11-19 22:54

- [元示科技获得近3亿元Pre-A融资](<https://www.itjuzi.com/investevent/14708193>)  
  元示科技专注于第二代人工智能制药技术，核心研发方向为人工智能虚拟细胞与通用细胞大模型，核心目标是搭建具备强推理、泛化与设计能力的通用细胞大模型。不同于传统单点预测工具，该模型可基于已知的药物-细胞扰动数据，推导药物对其他类型细胞的作用…  
  IT桔子 · 2026-11-19 17:52

- [Soket获得400万美元战略投资](<https://www.itjuzi.com/investevent/14708304>)  
  Soket是一家人工智能科技研发商，主打可审计的数学、代码、长逻辑推理基础模型，旗舰项目 Project EKA 已推出 EKA-1（26B 参数），正在训练 120B 主权大模型，覆盖 60 + 印度及全球南方语种，配套开源智能体编…  
  IT桔子 · 2026-11-19 17:52

- [Boltz获得1.1亿美元A轮融资](<https://www.itjuzi.com/investevent/14708280>)  
  Boltz是一家AI 生物医药研发商，依托开源生物分子基础模型 Boltz-1、Boltz-2 与 BoltzGen，打造覆盖结构预测、结合亲和力估算、小分子与蛋白从头设计的药物发现平台，商业化产品包括 BoltzMol-1 小分子设…  
  IT桔子 · 2026-11-19 16:18

- [20VC: Will Jensen Return to NVIDIA \| Anthropic Set for Largest IPO of All Time \| Kalshi, Mercor &amp; Fractile: Mega-Rounds Continue](<https://thetwentyminutevc.libsyn.com/20vc-will-jensen-return-to-nvidia-anthropic-set-for-largest-ipo-of-all-time-kalshi-mercor-fractile-mega-rounds-continue>)  
  AGENDA: 00:00 Nvidia's $600B Wipeout: Pressure Mounts for Jensen's Return 14:00 Anthropic's $1.4T IPO: A New Record f…  
  20VC · 2026-11-19 15:07

- [无涯智远宣布完成数亿元天使轮和天使+轮融资](<https://www.itjuzi.com/investevent/14704981>)  
  无涯智远聚焦 Real-Time RSI（实时自进化），以参数持续学习为核心技术路径，致力于让大模型在部署后仍能持续吸收知识、内化经验，获得新能力。近日，无涯智远宣布完成数亿元天使轮和天使加轮融资，投资方包括五源资本、红杉中国、联想之…  
  IT桔子 · 2026-11-19 11:15

- [189: Geodesic顾全全：预训练有点“无聊”了，但用scaling改变AI制药才刚开始](<https://podcast.latepost.com/189>)  
  「The best model is yet to come, scaling continues.（最好的模型尚未到来，规模化仍在继续。）」 今年 6 月 ，顾全全发推宣告离开字节，推文的最后一句如此写道。 这句话串起了他在字节 3…  
  晚点聊 · 2026-11-19 08:00

- [Anthropic valued at over $1 trillion in historic IPO](<https://www.axios.com/2026/11/18/anthropic-ipo-1-trillion>)  
  Anthropic on Wednesday raised over $81 billion in a long-awaited IPO that valued the Claude maker at over $1 trillion…  
  Axios · 2026-11-19 06:16

- [⚡️Anthropic: Know Before You IPO — Tanay Jaipuria, Wing VC](<https://www.youtube.com/watch?v=wX8nDtGIfYA>)  
  Watch the full show on YouTube: https://www.youtube.com/watch?v=wX8nDtGIfYA  
  Latent Space · 2026-11-19 04:00

- [Google 将 Spark 智能体更名为 Gemini Tasks 并向多国用户免费开放](<https://www.theverge.com/tech/1035756/google-spark-ai-tasks-free>)  
  Google 将此前仅限 AI Pro 和 Ultra 订阅用户的 Spark 智能体更名为 Tasks 并免费开放，由 Gemini 4 Hydrogen 模型驱动，可制定膳食计划、管理日程、筛查邮件中的重复支出。  
  The Verge：AI（RSS） · 2026-11-18 02:58

- [微软推出 MAI Licensed Weights：可在自有 Azure 环境部署定制前沿模型](<https://microsoft.ai/news/introducing-mai-licensed-weights/>)  
  微软发布 MAI Licensed Weights，允许企业在自有 Azure 环境中部署并定制微软前沿 AI 模型，数据和适配成果归企业所有。AT&amp;T 用 MAI 模型分析 5G 网络，标准任务上以 1/50 的成本超越 GPT-6.1 Sol；Woven by Toyota 在 44% 的代码修复场景中产出可直接合并的修复，成本不到十分之一。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:17

- [Microsoft AI 发布专用安全模型 MAI Cyber 2 Flash](<https://microsoft.ai/news/introducing-mai-cyber-2-flash/>)  
  Microsoft AI 发布专用安全模型 MAI Cyber 2 Flash，在 CyberGym‑E2E 上以 92.3% 的任务成功率超过 GPT-6 Astra 的 91.5%，且每任务成本不到其 2%，并在相同推理预算下于 CyberGym‑E2E 和 WebExploitBench 上超过 GPT-5.6 Cyber。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Microsoft AI 发布 MAI Code 2 与 Code 2 Flash 编码模型](<https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/>)  
  Microsoft AI 发布两款面向企业日常编码的模型 MAI Code 2 和 MAI Code 2 Flash，主打性价比。文中称在四个编码基准平均后，MAI Code 2 以 40% 的成本达到 GPT-6.1 Sol 98% 的性能，以 5% 的成本达到 Claude Opus 5.5 96% 的性能；盲测前端评测中开发者 64% 的情况下更偏好其结果。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
