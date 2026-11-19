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

## 相关资讯 · 228 条

- [Anthropic IPO将造就数千名百万富翁](<https://36kr.com/p/4075975525668741?f=rss>)  
  11月19日，纳斯达克交易大厅的钟声尚未敲响，Anthropic的员工已经在账面上跨越了一条许多人一生无法企及的线。据路透社报道，这家Claude制造商的首次公开募股有望在现任和前任员工中创造数千名“账面百万富翁”，可能成为硅谷历史上最大的  
  36氪 · 2026-11-19 09:21

- [欧美AI数据中心扩张陷入资源困局](<https://www.163.com/dy/article/LC3AHVLR0514R9OJ.html>)  
  网易科技频道 · 网易号 · 2026-11-19 09:19

- [这届AI大佬，都是学物理的](<https://36kr.com/p/4075991399240578?f=rss>)  
  当年觉得自己“晚出生了一百年”，没赶上物理发现大爆发年代，当下在AI里找到了黄金时代。 史上最大IPO背后，站着一群“转行”物理学家。 美东时间11月19日，Anthropic将以代码“ANT”在纳斯达克挂牌。除公开发行外，公司还将同步进行  
  36氪 · 2026-11-19 09:16

- [Edge AI Daily 早报（11月19日）](<https://www.tmtpost.com/8210615.html>)  
  英伟达完成创始人离任后治理重置：Q3营收1158亿美元、订单积压2.5万亿美元，停售H200并设董事会出口管制委员会；美出口管制扩至第三国远程算力，AI基础设施碎片化。Anthropic拟以约1.4万亿美元估值IPO，算力成本进入公开…  
  钛媒体 · 2026-11-19 09:05

- [14%收益提升，OpenAI用AI造芯，5个月完成人工1年工作量，Astra领跑](<https://36kr.com/p/4075847312970881?f=rss>)  
  智东西11月19日消息，刚刚，OpenAI宣布，其模型在 不到五个月内 ，将AMD旗舰级GPU IP的PPA（芯片设计核心指标）提升高达 14% ，这是此前人类工程师约一整年的研发工作量。 OpenAI的研究证明，在RISC-V评估任务中，  
  36氪 · 2026-11-19 09:01

- [不用训练，Opus 5.5直接手写Transformer权重，13类任务全拿100%](<https://36kr.com/p/4075960710566792?f=rss>)  
  在13类复杂的算法任务、26次独立运行中，一个全新的神经网络在隐藏测试集上全部达到了100%的准确率。 更不可思议的是，整个过程没有喂给它海量数据，甚至完全没有使用「反向传播」和「梯度下降」。 这个晶莹剔透、小巧至极的满分神经网络，是Cla  
  36氪 · 2026-11-19 08:54

- [美股Anthropic上市，机构疯抢6倍，散户却准备跑路，9009亿美元的惊天隐患](<https://36kr.com/p/4075871106536324?f=rss>)  
  当人类第一次有机会创造出足以改变整个社会的智能时，我们面对的就不再只是一个新的行业，而是一个新的时代。 就在11月19日本周四，Claude背后的公司Anthropic，预计将在纳斯达克挂牌，代码 ANT 。 按发行区间上限算，完全稀释估值  
  36氪 · 2026-11-19 08:21

- [Anthropic IPO Raises $3 Billion in Japan, Lower End of Range](<https://www.bloomberg.com/news/articles/2026-11-19/anthropic-raises-3-billion-in-japan-tranche-of-us-mega-ipo>)  
  Bloomberg · 2026-11-19 08:10

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

- [谷歌推出 Gemini 4 Neon 模型，编程 AI 智能体指数超 Claude Opus 5.5 排第一](<https://www.ithome.com/1/029/144.htm>)  
  IT之家 11 月 19 日消息，谷歌今天（11 月 18 日）宣布推出 AI 模型 Gemini 4 Neon， 主攻复杂编程、科学研究和企业工作流程，更好平衡推理能力、任务处理速度与成本 ，目前已开始向开发者、企业及部分付费订阅用…  
  IT之家 · 2026-11-19 07:53

- [Anthropic Prices IPO at $83 a Share on Strong Demand](<https://www.wsj.com/finance/stocks/anthropic-prices-ipo-at-83-a-share-0290494c?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-19 07:49

- [Satya Nadella 在 DealBook Summit 谈 AI 时代大量关键基础设施固件无法修补](<https://techcrunch.com/2026/11/18/amidst-fears-of-ai-cyberattacks-satya-nadella-says-lots-of-critical-infrastructure-is-unpatchable/>)  
  Microsoft CEO Satya Nadella 在 The New York Times DealBook Summit 上表示，美国大量关键基础设施（包括数据中心冷却设备、HVAC 和交通系统）存在无法修补的软件漏洞，且都联网运行，在 AI 辅助网络攻击时代极易被利用。  
  TechCrunch：AI（RSS） · 2026-11-19 07:45

- [定价83美元、估值1.5万亿：Anthropic IPO规模超SpaceX](<https://www.163.com/tech/article/LC34SFB600097U7T.html>)  
  网易科技 · 2026-11-19 07:39

- [地平线发布 LoFT 原生视频几何基础模型，多项指标达到 SoTA](<https://www.ithome.com/1/029/140.htm>)  
  IT之家 11 月 19 日消息，11 月 18 日，地平线机器人实验室发布原生视频几何基础模型 LoFT（Looped Foundation Transformer for Video Geometry）。据介绍，该模型能够从 RG…  
  IT之家 · 2026-11-19 07:30

- [OpenAI 发布芯片设计最新成果：AMD 旗舰 GPU PPA 最高提升 14%，自研芯片 Jalapeño 面积最高减少 13%](<https://www.ithome.com/1/029/135.htm>)  
  IT之家 11 月 19 日消息，OpenAI 于当地时间 11 月 18 日发布最新技术报告《Advancing chip design with OpenAI models》，披露了利用 AI 模型辅助芯片设计的最新进展。 据介绍…  
  IT之家 · 2026-11-19 07:07

- [字节跳动被曝与微软洽谈 5 亿美元 Azure 合同，惹 OpenAI 强烈不满](<https://www.ithome.com/1/029/133.htm>)  
  IT之家 11 月 19 日消息，据《The Information》今日报道，字节跳动正与微软进行深入谈判，计划额外采购约 5 亿美元 （IT之家注：现汇率约合 33.4 亿元人民币） 的 Azure 云服务，其中大部分支出将用于调…  
  IT之家 · 2026-11-19 06:47

- [史上最大 IPO：Anthropic 每股定价 83 美元，预计募资 944 亿美元超 SpaceX](<https://www.ithome.com/1/029/132.htm>)  
  IT之家 11 月 19 日消息，据彭博社今日报道，Anthropic PBC 已将首次公开募股（IPO）发行价定为每股 83 美元，高于此前公布的 70 至 78 美元发行区间。 以此计算，Anthropic 完全稀释估值约 1.5…  
  IT之家 · 2026-11-19 06:36

- [Anthropic IPO Signals Strong AI Appetite, Harbor Capital's Menne Says](<https://www.bloomberg.com/news/videos/2026-11-18/anthropic-ipo-signals-strong-ai-appetite-harbor-capital-video>)  
  Bloomberg · 2026-11-19 06:24

- [Anthropic valued at over $1 trillion in historic IPO](<https://www.axios.com/2026/11/18/anthropic-ipo-1-trillion>)  
  Anthropic on Wednesday raised over $81 billion in a long-awaited IPO that valued the Claude maker at over $1 trillion…  
  Axios · 2026-11-19 06:16

- [Anthropic IPO 定价每股 $83，高于 70 至 78 美元区间](<https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/>)  
  据报道 Anthropic 将 IPO 发行价定为每股 $83，高于 $70 至 $78 的初始区间，完全稀释估值达 1.5 万亿美元，股票将于周四在纳斯达克以代码 ANT 开始交易。  
  TechCrunch：AI（RSS） · 2026-11-19 06:11

- [Anthropic Is Positive for IPO Market, Fraser Says](<https://www.bloomberg.com/news/videos/2026-11-18/anthropic-is-positive-for-ipo-market-fraser-says-video>)  
  Bloomberg · 2026-11-19 05:54

- [Anthropic Raises $81 Billion in Upsized IPO](<https://www.theinformation.com/briefings/anthropic-prices-ipo-83-share>)  
  The Information · 2026-11-19 05:51

- [Anthropic IPO 是否对投资者和社会都是坏赌注？](<https://garymarcus.substack.com/p/is-anthropics-ipo-a-bad-bet-both>)  
  Gary Marcus 对即将到来的 Anthropic IPO 高估值提出质疑，认为其收入已不再像 Q2 那样高速增长，中国模型追赶上后用户开始更谨慎地控制 token 支出，收入趋于平缓。他还认为 Dario 在医疗等领域的激进承诺不切实际，并呼吁为人类福祉考虑不要购买 Anthropic 股票。  
  Gary Marcus：The Road to AI We Can Trust（RSS） · 2026-11-19 05:45

- [Google DeepMind 发布 Gemini 4 Neon](<https://deepmind.google/blog/introducing-gemini-4-neon/>)  
  Google DeepMind 发布 Gemini 4 Neon，主打前沿智能与快速端到端任务完成，覆盖软件工程、知识工作和科学工作流。模型在 Artificial Analysis Intelligence Index 得 61 分排第 3，Vals Index 排第 2，Agent Arena Index 以 1336 分全球第 2。  
  Google DeepMind：Blog（RSS） · 2026-11-19 05:35

- [Understanding AI 用19张图表解析AI行业现状](<https://www.understandingai.org/p/19-charts-that-explain-the-state>)  
  Understanding AI 发布19张图表，量化AI对美国经济和就业的影响。文中提到 Anthropic 即将上市，估值或超万亿美元，OpenAI 预计明年跟进；五大科技公司2026年第三季度资本支出达2300亿美元，AI收入年化运行率达3450亿美元，但新增企业采用放缓，年轻软件工程师就业明显下滑。  
  Timothy B. Lee：Understanding AI（RSS） · 2026-11-19 05:34

- [Anthropic IPO Raises $107.3 Billion to Top SpaceX’s Record Debut](<https://www.bloomberg.com/news/articles/2026-11-18/anthropic-is-said-to-price-ipo-at-83-per-share>)  
  Bloomberg · 2026-11-19 05:09

- [Google 发布 Gemini 4 Neon，一个月内第四个新 Gemini 模型](<https://the-decoder.com/google-ships-gemini-4-neon-its-fourth-new-gemini-model-in-a-month/>)  
  Google 发布 Gemini 4 Neon，定位复杂软件工程、知识工作和科学工作流的快速端到端任务完成。API 定价为每百万输入 token 3 美元、输出 15 美元，高于 Carbon 和 Argon 的 $2/$10（12 月 1 日起翻倍至 $4/$20）及 Hydrogen 的 $1.50/$7.50。  
  The Decoder：AI News（RSS） · 2026-11-19 05:03

- [RadixArk 发布首个模型 DaisyRose-27B，基于 Qwen3.8-27B 强化学习训练并开源](<https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin>)  
  RadixArk 发布首个模型 DaisyRose-27B，基于 Qwen3.8-27B 用开源 RL 框架 Miles 训练，在约 1,200 个精选长程 Agent 任务上用 144 块 H200 训练 18 天。  
  Hugging Face 社区博客（混合发现） · 2026-11-19 03:54

- [The Verge 分析菲律宾 Pax Silica AI 枢纽计划中的征地与社区争议](<https://www.theverge.com/policy/1036749/trump-ai-chip-data-center-us-philippines-pax-silica>)  
  The Verge 报道特朗普访问菲律宾期间推动的 Pax Silica 计划：美菲拟在原克拉克空军基地建约 1,620 公顷的芯片厂、关键矿物加工和数据中心枢纽，BCDA 预计前 25 年可获得近 10 亿美元租金收入，预计创造最多 190,000 个直接就业岗位。  
  The Verge：AI（RSS） · 2026-11-19 03:40

- [OpenAI 称其模型在 AMD GPU IP 上实现相当于一年进度的芯片优化](<https://the-decoder.com/openai-says-its-models-delivered-a-years-worth-of-chip-optimization-on-top-of-amds-own-engineering/>)  
  媒体 The Decoder 报道，OpenAI 称与 AMD 合作用其模型在不到五个月内将 AMD 旗舰 GPU IP 的 PPA（功耗、性能、面积）提升至多 14%，相当于在 AMD 工程师多年优化之上再推进约一年的进度，部分改动已纳入送厂设计。  
  The Decoder：AI News（RSS） · 2026-11-19 02:00

- [Meta 详解如何用 AI 智能体将 ML 技术规模化推广到广告排序模型集群](<https://engineering.fb.com/2026/11/18/ml-applications/ai-agents-to-scale-ml-innovations-across-ads-ranking-models/>)  
  Meta 发文介绍其“技术传播”流程及 AI 智能体在其中的应用，此前已发布 Ranking Engineer Agent（REA）系统。自 2026 年 3 月起由智能体驱动执行以来，估算超 60% 的技术传播由 AI 智能体完成，早期结果显示工程师生产力提升 3x，选定组合的训练算力中位数降低 4x，预计到年底节省超 4500 万美元算力成本。  
  Meta Engineering Blog（RSS） · 2026-11-19 01:00

- [微软与英特尔深化合作：成 Azure 芯片首个 EMIB 客户，提前锁定下一代 Diamond Rapids 产能](<https://www.ithome.com/1/029/122.htm>)  
  IT之家 11 月 19 日消息，微软与英特尔于当地时间 11 月 18 日宣布，双方将根据一项长期协议深化合作，共同推进微软 Azure 云基础设施建设，以满足不断增长的云计算和 AI 算力需求。 根据英特尔官方公告，双方将围绕先进…  
  IT之家 · 2026-11-19 00:34

- [Hugging Face 发布 Qwen3.8-27B-pi-adapted LoRA，pi 编码 Agent 成功率从 39.2% 升至 64.7%](<https://www.marktechpost.com/2026/11/18/hugging-face-qwen3-8-27b-pi-adapted-lora/>)  
  Hugging Face harness-hub 团队发布面向 pi 编码 Agent 的 Qwen3.8-27B-pi-adapted LoRA 适配器（Apache-2.0，rank 32），用 TRL 的 AsyncGRPO 强化学习训练，工具调用经 safeagents 代理拦截以抑制 reward hacking。  
  MarkTechPost（RSS） · 2026-11-19 00:07

- [Vals AI 评测：Anthropic、OpenAI 和 Google 模型易将医护人员与投降士兵标记为自杀式无人机目标](<https://the-decoder.com/anthropic-openai-and-google-models-readily-marked-medics-journalists-and-surrendering-soldiers-as-kamikaze-drone-targets/>)  
  独立评测机构 Vals AI 测试八家厂商模型后发现，主流大模型几乎缺乏针对自主武器的防护，多数模型会把平民、救护车、医护人员、记者和投降士兵标记为军事目标，且没有任何请求被上游安全过滤器拦截。  
  The Decoder：AI News（RSS） · 2026-11-18 23:47

- [消息称 Anthropic 考虑扩大 IPO 规模，散户认购意向接近千亿美元](<https://www.ithome.com/1/029/121.htm>)  
  IT之家 11 月 18 日消息，北京时间今天（18 日）晚间，据美国 CNBC 援引知情人士消息称，Anthropic 考虑扩大 IPO 发行规模，并可能将发行价定在 远高于 80 美元 （IT之家注：现汇率约合 534.4 元人民…  
  IT之家 · 2026-11-18 23:35

- [SpaceXAI 在美国密西西比州的 AI 数据中心泄漏约 20m³ 丙二醇](<https://www.ithome.com/1/029/115.htm>)  
  IT之家 11 月 18 日消息，据 tom's hardware 报道，埃隆 · 马斯克（Elon Musk）旗下的 SpaceXAI（SpaceXSI）在美国密西西比州的 AI 数据中心发生化学品泄漏事件。 承包商在连接移动储罐时…  
  IT之家 · 2026-11-18 23:01

- [Why Anthropic’s IPO Is Making Philanthropist Craig Newmark Hold Back on AI Safety Donations](<https://www.theinformation.com/articles/anthropics-ipo-making-philanthropist-craig-newmark-hold-back-ai-safety-donations>)  
  The Information · 2026-11-18 23:01

- [OpenAI 首次向 Apollo Research 等四家机构开放现场审计其 AI 系统](<https://the-decoder.com/openai-opens-its-ai-systems-to-four-independent-on-site-auditors-for-the-first-time/>)  
  OpenAI 宣布首次允许四家独立机构在其办公室现场审计内部 AI 系统，合作方为 Apollo Research、METR、Transluce 和 Goodfire，审计范围包括未发布模型、源代码、训练数据和监控系统。  
  The Decoder：AI News（RSS） · 2026-11-18 22:36

- [Hugging Face Inference Providers 改经 OpenRouter 路由语言模型请求](<https://the-decoder.com/hugging-face-now-routes-model-requests-through-openrouter-for-the-best-price-or-speed/>)  
  Hugging Face 宣布其 Inference Providers 服务改经 OpenRouter 路由语言模型请求，默认按价格、速度和可靠性综合选择供应商，故障时自动切换。  
  The Decoder：AI News（RSS） · 2026-11-18 22:33

- [NVIDIA RTX Spark 迷你桌面主机上市，ASUS、Dell、MSI 同步开售](<https://blogs.nvidia.com/blog/rtx-spark-desktop-local-ai-available-now/>)  
  NVIDIA 宣布来自 ASUS、Dell 和 MSI 的 RTX Spark 迷你桌面主机上市，面向本地 AI Agent、图像视频生成和模型微调。  
  NVIDIA Blog（RSS） · 2026-11-18 22:00

- [张朝阳再度回应搜狐“躺平”：大模型投入太大，没资源来做这个事情](<https://www.ithome.com/1/029/086.htm>)  
  IT之家 11 月 18 日消息，据光明日报消息，搜狐张朝阳再次回应搜狐“躺平”相关话题。 对于如今外界认为搜狐“躺平”的看法，张朝阳称一个公司肯定要根据自己的资源来决定做什么。 大模型投入太大，搜狐没资源来做这个事情 。 推荐算法和…  
  IT之家 · 2026-11-18 21:46

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 6 页
