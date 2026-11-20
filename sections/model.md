# 大模型

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 7 页

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

## 相关资讯 · 285 条

- [匿名 AI 模型 Gestalt 登顶 Contra 前沿设计榜单：性能远超 Claude Fable 5.2、GPT-6.1 Sol，Elo 评分超越人类参考作品](<https://www.ithome.com/1/030/291.htm>)  
  IT之家 11 月 21 日消息，Contra Labs 于当地时间 11 月 18 日发布 AI 设计能力评测榜单 Frontier Design Benchmark。 其中，一款代号为 Gestalt、目前处于隐身开发状态（Ste…  
  IT之家 · 2026-11-21 07:17

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

- [特朗普威胁对在海外建设 AI 数据中心的企业征收「巨大税收」](<https://www.theverge.com/policy/1038892/trump-foreign-data-centers-tax>)  
  特朗普在与习近平和普京峰会后的新闻发布会上表示，不允许美国公司在海外建设数据中心，否则将对其征收「巨大税收」（tremendous tax），称否则「中国会全部拿走」。他称这一想法尚未告知自己的团队，且未给出具体细节；同时美国多州正在对数据中心新建申请设限，而数月内就职的民主党多数国会可能使该计划难以落实。  
  The Verge：AI（RSS） · 2026-11-21 02:50

- [Anthropic与SpaceX两大IPO前一个月，比特币均跌22%，流动性逻辑如何驱动后](<https://www.163.com/dy/article/LC7ML3VG05198NMR.html>)  
  网易科技频道 · 网易号 · 2026-11-21 02:20

- [RadixArk 发布纯 RL 训练的智能体编码模型 DaisyRose-27B，权重采用 Apache 2.0](<https://www.marktechpost.com/2026/11/20/radixark-daisyrose-27b-agentic-model/>)  
  RadixArk 本周发布首个开放权重模型 DaisyRose-27B，基于 Qwen3.8-27B 仅用强化学习做后训练，不使用 SFT 或蒸馏，权重以 Apache 2.0 开源。  
  MarkTechPost（RSS） · 2026-11-21 01:42

- [黄仁勋被传募资500亿美元创业，Anthropic上市首日遭硅谷联合抵制，腾讯大幅](<https://www.163.com/dy/article/LC7KPGF4051196HN.html>)  
  网易科技频道 · 网易号 · 2026-11-21 01:35

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

- [Anthropic 上市次日股价下跌 9%，AI 板块雪上加霜](<https://www.ithome.com/1/030/246.htm>)  
  IT之家 11 月 20 日消息，据路透社报道，当地时间 20 日，Anthropic 上市次日股价下跌，令低迷的 AI 板块雪上加霜。这场备受期待的 IPO，也没能重新点燃投资者的热情。 作为 AI 投资热潮的重要风向标，Anthr…  
  IT之家 · 2026-11-20 22:05

- [Anthropic 破纪录 IPO 未能止住 AI 抛售，全球股市下挫](<https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off>)  
  Anthropic 上市第二天股价跌逾 9% 至 $88.17，接近 $83 发行价，其破纪录 IPO 未能止住 AI 相关公司抛售。周五 Nasdaq 跌 2%，SanDisk 跌 14%、Micron 跌 10%；亚洲股市创 2020 年以来最差一周，台湾加权指数跌 6.7%、日经跌 5%、Kospi 跌 5.5%，SoftBank 单日跌 14.5%。  
  Hacker News：AI 热帖 · 2026-11-20 21:53

- [AI硬件的牛市结束了](<https://36kr.com/p/4078041124574081?f=rss>)  
  最强势的市场，也顶不住这轮AI回调了。 从10月的高点算起，涵盖AI硬件全链条的费城半导体指数跌去27.8%。其中，算力龙头英伟达跌去36.1%、存储龙头美光跌去43%，就连给他们供货的寡头台积电也跌去26.2%。看下来，逻辑最硬、订单最多  
  36氪 · 2026-11-20 20:51

- [Anthropic is public, now comes the hard part](<https://www.axios.com/2026/11/20/anthropic-public-shareholders>)  
  Data: FactSet; Chart: Matt Phillips/Axios With its IPO done and dusted, Anthropic's shareholders will be watching its…  
  Axios · 2026-11-20 20:10

- [Anthropic崛起史：最强AI背后的矛与盾，布道者与伪君子](<https://36kr.com/p/4077969727673477?f=rss>)  
  五年，年化营收超过800亿美元，上市首日完全稀释估值一度触及2万亿美元。这是一条在人类商业史上几乎从未出现过的增长曲线。 先知、救世主情结、宗教领袖，这也是在一个以技术与理性著称的行业里，几乎从未看到的标签。而如今，它们同时落在了一家公司身  
  36氪 · 2026-11-20 19:39

- [1.5万亿美元新贵，搅动美股七姐妹](<https://36kr.com/p/4077880935797636?f=rss>)  
  Anthropic挂牌上市，创下了历史最大规模IPO纪录，顺便带崩了美股。 11月19日，Anthropic正式登陆美股，开盘价111.5美元，较83美元的发行价上涨34.3%，此后涨幅回落，收报97.17美元，首日上涨17.07%。按基本  
  36氪 · 2026-11-20 19:22

- [腾讯姚顺雨重返清华姚班：聊大模型不靠“赛马”拼指标，RSI要落到具体工程](<https://36kr.com/p/4077969369322632?f=rss>)  
  11 月 18 日晚，腾讯首席 AI 科学家、混元大模型负责人姚顺雨回到母校清华大学交叉信息研究院（姚班），与本科同窗、清华交叉信息院助理教授吕凯风做了一场近距离的闭门问答交流。 作为姚班 2015 级校友与普林斯顿博士，姚顺雨曾参与提出将  
  36氪 · 2026-11-20 19:11

- [生数科技朱军团队获北京市自然科学奖一等奖，扩散模型成果支撑 Vidu 研发](<https://mp.weixin.qq.com/s/VBxPIZGeRcYD8XyBcL_kYw>)  
  生数科技创始人朱军、CTO 鲍凡领衔团队的“高效可扩展的扩散模型理论与方法”成果获 2025 年度北京市自然科学奖一等奖。该成果在扩散模型基础理论、采样算法与模型架构三方面取得突破，其中免训练采样方法实现近百倍加速，并被 Diffusers 等开源工具库集成。相关研究为生数科技 Vidu 视频生成大模型及 Vidu Q、Vidu S 系列提供技术支撑。  
  公众号：生数科技（Vidu·视频） · 2026-11-20 18:58

- [DeepSeek 新一轮千亿级融资落地，梁文锋保留绝对控制权](<https://www.ithome.com/1/030/199.htm>)  
  IT之家 11 月 20 日消息，工商信息显示，DeepSeek 运营主体杭州深度求索人工智能基础技术研究有限公司近日完成工商变更，新增股东杭州程砚企业管理咨询合伙企业（有限合伙）。 IT之家查询国家企业信用信息公示系统获悉，杭州深度…  
  IT之家 · 2026-11-20 18:47

- [50天推出4款模型，谷歌想当“造物主”了？](<https://36kr.com/p/4077865913407366?f=rss>)  
  OpenAI时隔75天的顶级模型刚刚发布， 社区里的吐槽就炸开了。 有人直言新模型“几乎没法用”，有人抱怨它过分谨慎、难以指挥，还有人认为，这家伙解释起自己的工作就像在“说外星话”。 甚至有人用漫画玩了个梗，吐槽GPT-6.2 Astra的  
  36氪 · 2026-11-20 18:41

- [阿里发布2027年Q2财报：阿里云AI收入增长53%，即时零售减亏](<https://www.tmtpost.com/8212798.html>)  
  AI相关产品收入已经连续第十三个季度保持三位数同比增长，互联网、汽车、具身智能、金融、生物科技等行业客户持续扩容算力采购需求。  
  钛媒体 · 2026-11-20 18:31

- [字节，该造手机了](<https://36kr.com/p/4077729297667205?f=rss>)  
  11 月 19 日，财联社援引供应链人士的消息称，富士康旗下的富智康已经拿到 OpenAI 手机的组装订单，首款产品有望在 2027 年底或 2028 年面市。OpenAI 至今没有确认自己在做手机，但从今年 4 月起，围绕这台手机的供应链  
  36氪 · 2026-11-20 18:26

- [Phoenix mayor walks fine line on AI boom](<https://www.axios.com/2026/11/20/phoenix-mayor-data-centers-ai-boom>)  
  Phoenix Mayor Kate Gallego wants more tech investment in her city — but on her terms, as data centers strain resource…  
  Axios · 2026-11-20 18:20

- [抢跑 OpenAI 敲出史上最大 IPO，Anthropic 却惹怒了半个硅谷](<https://36kr.com/p/4077584643675013?f=rss>)  
  11 月 19 日，成立仅仅 5 年的 AI 巨头 Anthropic 正式上市。 一举打破 SpaceX 此前创下的纪录，成为人类商业史上规模最大的一次 IPO。 更夸张的是，开盘后它的市值更是一度冲破 2 万亿美元 大关，收盘市值约1.  
  36氪 · 2026-11-20 18:17

- [光禾AI用企业级智能体应用解企业改造难题](<https://36kr.com/p/4077924992390278?f=rss>)  
  大模型进入企业后，如何与内部知识、业务系统和工作流程结合，成为企业推进AI应用的一道实际门槛。员工可以借助通用工具完成问答和内容生成，但涉及内部数据、多系统协作和具体业务执行时，企业仍需要解决系统接入、权限管理和持续运维等问题。 光禾AI选  
  36氪 · 2026-11-20 18:02

- [Nous Research 的 Hermes Agent 将登陆 Microsoft Teams 并推出 Collective Wisdom 技能共享功能](<https://the-decoder.com/hermes-agents-collective-wisdom-feature-turns-one-employees-ai-trick-into-the-whole-teams-skill/>)  
  Nous Research 宣布开源 Hermes Agent 将可直接在 Microsoft Teams 内运行，员工可把财务分析、文档起草或收件箱整理等任务交给它并在同一聊天中审阅结果。该智能体运行于 Azure Container Apps 沙箱（隔离微虚拟机）中，会自动将成功的工作流转化为由描述和代码组成的可复用技能；新功能 Collective Wisdom 允许员工在审核后与团队共享这些技能，且收集的知识保留在公司内部，不会进入任何 AI 提供商的训练数据。Nous 称 Hermes Agent 是 O…  
  The Decoder：AI News（RSS） · 2026-11-20 17:59

- [Anthropic正式登陆纳斯达克：敲钟那天，账已经在另一张纸上？](<https://www.tmtpost.com/8212716.html>)  
  这场上市真正的赢家不在敲钟的那几个人里，在那七家收着算力钱又拿着股票的公司身上，它们把未来十五年的订单提前折成了今天的股权。  
  钛媒体 · 2026-11-20 17:22

- [Anthropic 上市当天，前研究员考克森在其总部外抗议呼吁禁止 AI 递归自我改进](<https://www.ithome.com/1/030/127.htm>)  
  据《商业内幕》报道，当地时间 19 日 Anthropic 股票首次上市交易，前研究员雅各布·考克森与数十名抗议者在其旧金山总部外抗议，呼吁禁止 AI 递归自我改进，即让先进 AI 参与训练下一代 AI。  
  IT之家·人工智能 · 2026-11-20 17:06

- [Unsiloed AI获得750万美元种子轮融资](<https://www.itjuzi.com/investevent/14708367>)  
  Unsiloed AI是一家文档解析AI科技研发商，自研双流视觉模型，将 PDF、扫描件、图片、表格、表单等 20 余种非结构化文档解析为带溯源引用、置信度分数与边界框的 Markdown 和结构化 JSON，供 LLM 与 AI 智…  
  IT桔子 · 2026-11-20 15:40

- [Anthropic 以 83 美元定价完成史上最大 IPO，上市首日估值近 2 万亿美元](<https://latent.space/p/ainews-anthropic-successfully-completes-largest-ipo-in-history-valued-at-1-5t/>)  
  Anthropic 以每股 83 美元在纳斯达克上市（代码 $ANT），融资 813 亿美元超过 SpaceX 成为史上最大 IPO，首日开盘价 111.50 美元、较发行价高 34.3%，完全稀释估值约 2 万亿美元。  
  Latent Space（RSS） · 2026-11-20 15:12

- [Thinking Machines Lab 发布可跑在笔记本上的开源权重模型 Inkling 2 Mini](<https://thinkingmachines.ai/news/inkling-2-mini/>)  
  Thinking Machines Lab 发布开源权重模型 Inkling 2 Mini，采用循环 Transformer 架构，将中间 12 层每 token 运行三次，总参数 26.4B、激活 3.4B，内存占用约 20GB，可在 32GB 内存以上的 Mac 本地运行。  
  Thinking Machines Lab：News（网页） · 2026-11-20 15:00

- [星辰智算获得数百万人民币战略投资](<https://www.itjuzi.com/investevent/14708361>)  
  星辰智算SentiMind是一家认知科学多模态大模型研发商，用游戏化认知任务采集人的行为数据，再以多模态模型理解、预测与训练认知能力，已构建覆盖认知评估、训练、追踪的闭环体系，并推出端侧认知调度层Senti-OS，以1至3B的轻量化模…  
  IT桔子 · 2026-11-20 14:42

- [消息称英伟达将逾 5 亿美元收购扩散式大语言模型公司 Inception](<https://www.ithome.com/1/029/886.htm>)  
  据 The Information 11 月 20 日报道，英伟达计划收购 AI 初创公司 Inception，双方已深入谈判，估值至少超过 5 亿美元（约合 33.46 亿元人民币），并可能附加与业绩挂钩的奖励。  
  IT之家·人工智能 · 2026-11-20 14:15

- [高通携手 Cirrascale 启动 Dragonfly AI200 推理加速器客户评估](<https://www.ithome.com/1/029/874.htm>)  
  高通与 AI 私有云企业 Cirrascale 合作，向部分客户开放 Dragonfly AI200 推理加速器的云上评估。这是高通首款机架级 AI 解决方案，单卡配备 768GB LPDDR5X 内存，每个 140kW 液冷 ORv3 机架由 56 卡组成、总内存 43TB、内存带宽 0.414 PB/s，可在单机架内运行 10T 级超大模型推理。  
  IT之家·人工智能 · 2026-11-20 13:43

- [腾讯混元 Hy4 正式开源，混元 LLM 系列实现全量开放](<https://www.ithome.com/1/029/841.htm>)  
  腾讯混元团队宣布 Hy4 大模型正式开源，权重已在 GitHub、Hugging Face、ModelScope 和 GitCode 上线，混元 LLM 系列至此全部开源。  
  IT之家·人工智能 · 2026-11-20 11:47

- [腾讯混元 Hy4 正式开源并发布 System Card](<https://mp.weixin.qq.com/s/M0TIIvCzizkLw7_A3MCSjA>)  
  腾讯混元宣布 Hy4 正式开源，可在 GitHub、Hugging Face、ModelScope 和 GitCode 下载部署，并同步发布 Hy4 模型安全评估卡片（System Card）。混元 LLM 模型已全部开源，包括 Hy3 preview、Hy3、Hy4 preview、Hy4、Hy4 flash 等，官方表示未来将持续迭代并开源。  
  公众号：腾讯混元 · 2026-11-20 11:41

- [Gemini 4 全系列使用与避雷教程：两个提示词修复 Antigravity 的 swarm 和 Orchestrator 坑](<https://mp.weixin.qq.com/s/ZVq5t2agOhVEEKHPZyQ4hA>)  
  作者盘点 Gemini 4 系列模型定位与差异：Hydrogen 对标 Claude Haiku，速度 175-200 tokens 每秒；Neon 相当于 Opus 5.5，代码动画和 UI 表现接近但缓存和额度存在问题；Carbon 偏 coding，Argon 设计和文风更发散。  
  公众号：卡尔的AI沃茨 · 2026-11-20 11:22

- [诚恒微获得2亿人民币A轮融资](<https://www.itjuzi.com/investevent/14708317>)  
  诚恒微锚定边端侧算力引擎，主营业务为边端侧AI芯片设计、研发与销售，采用Fabless经营模式，业务涵盖了集成电路设计前沿研发、芯片架构设计、配套软件开发及行业解决方案赋能，构建从技术探索到产业落地的全链条能力。近日，诚恒微获得2亿人…  
  IT桔子 · 2026-11-20 11:21

- [英伟达接近以逾5亿美元收购扩散式AI初创公司Inception](<https://www.itjuzi.com/merger/14599>)  
  Inception Labs 开发出了一种基于 “扩散” 技术的全新 AI 模型，称为基于扩散的大语言模型 “DLM”。Inception 的模型具备传统大语言模型的功能，包括代码生成和问答能力，但性能显著提升，且计算成本更低。据报道…  
  IT桔子 · 2026-11-20 10:30

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 7 页
