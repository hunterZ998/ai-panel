# 大模型

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页

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

## 相关资讯 · 209 条

- [刚刚，OpenAI发布GPT-6.2 Astra和Sol](<https://www.163.com/dy/article/LC0RSIMM0511AQHO.html>)  
  网易科技频道 · 网易号 · 2026-11-18 10:58

- [英伟达Q3日赚7亿美元？AI叙事强化国产链，算力芯片、半导体设备再度走强！](<https://www.163.com/dy/article/LC0TNA9005199NPP.html>)  
  网易科技频道 · 网易号 · 2026-11-18 10:56

- [Anthropic上市前夕，OpenAI发布GPT-6.2：成本大降，3D能力再突破](<https://www.163.com/dy/article/LC0STE3E05119734.html>)  
  网易科技频道 · 网易号 · 2026-11-18 10:55

- [OpenAI翻车！GPT-6.2 Astra被批「史上最差」，内部员工连夜弃用](<https://www.163.com/dy/article/LC0T7MR90511ABV6.html>)  
  网易科技频道 · 网易号 · 2026-11-18 10:48

- [GPT-6没拆掉的护城河，具身智能务实派先一步在服务场景找到答案](<https://36kr.com/p/4073722831508612?f=rss>)  
  具身智能行业，正在经历一场微妙而又深刻的变化。 过去，机器人公司热衷于展示自己的技术上限：能跳多高、跑多快，又能完成多少复杂动作。但到了下半年，行业开始出现另一种声音。比起证明机器人有多聪明，越来越多人开始关心它们走进真实场景后的表现。 最  
  36氪 · 2026-11-18 10:42

- [刚领完“青年科学家奖”，谢伟迪就融了数亿](<https://36kr.com/p/4074635892872066?f=rss>)  
  近日，投中网获悉，生命模型智能公司观壹智能（OneX Intelligence）宣布完成首轮数亿元融资，由IDG资本领投，创世伙伴创投\(CCV\)、沄柏资本、交大菡源资产、云启资本跟投，财务顾问为棕榈资本。本轮资金将主要用于生命智能基础模型研  
  36氪 · 2026-11-18 10:28

- [大洋彼岸的数据中心成了洪水猛兽](<https://www.tmtpost.com/8208735.html>)  
  AI算力需求激增，数据中心却因噪声、用水、电价及土地占用引发海外居民抵制。美国多地收紧审批，并要求开发商承担扩网风险。中国则以机房上架率约束新增建设，探索绿电直连和算力跨区域调度。数据中心扩张正从争抢投资转向衡量资源成本与实际需求。  
  钛媒体 · 2026-11-18 10:09

- [AMD 完成对 Taalas 收购，计划将后者芯片整合进加速器路线图](<https://www.ithome.com/1/028/640.htm>)  
  IT之家 11 月 18 日消息，AMD 当地时间昨日宣布 完成对专用 AI 推理芯片开发商 Taalas 的收购 。这家初创企业带来了差异化的技术和世界一流的工程专业知识。 AMD 表示此举将进一步加强其全栈 AI 产品组合和长期推…  
  IT之家 · 2026-11-18 10:06

- [GPT-6.2 Astra终于上线，从PPT做到发动机](<https://www.tmtpost.com/8209040.html>)  
  新模型什么活都想干，但很难伺候。  
  钛媒体 · 2026-11-18 09:58

- [深微芯创获得近亿元融资](<https://www.itjuzi.com/investevent/14708106>)  
  深微芯创是一家专注于AI算力芯片与高带宽集成技术的硬科技型企业，面向高性能芯片封装、光电共封装（CPO）及下一代数据中心互联需求，提供半导体先进封装制造装备、光电材料器件与成套工艺一体化解决方案。公司围绕玻璃基板、TGV三维互连、光通…  
  IT桔子 · 2026-11-18 09:55

- [Anthropic纳斯达克IPO获准](<https://www.pedaily.cn/first/193041.shtml>)  
  Anthropic表示，已获准在纳斯达克全球精选市场上市A类普通股，股票代码为“ANT”。（投资界）  
  投资界 · 2026-11-18 08:49

- [Edge AI Daily 早报（11月18日）](<https://www.tmtpost.com/8208923.html>)  
  Anthropic IPO由亚马逊与谷歌合计持股近三成，估值1.405万亿美元，公开市场检验现金流与算力成本。OpenAI发布GPT-6.2双模型，推进企业分层商业化，并携北约网络防御、签约AMD算力。英伟达遭SEC调查、创始人辞任、…  
  钛媒体 · 2026-11-18 08:48

- [GPT-6.2Astra与Sol突袭发布，OpenAI狙击Anthropic上市日，任务成本仅为Claude的5%](<https://36kr.com/p/4074370835977092?f=rss>)  
  就在 Anthropic 敲钟上市的同一天，OpenAI 端出了它的“贺礼”。 11 月 18 日凌晨消息，OpenAI 正式发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款新模型： 在复杂专业任务上，GPT-6.2 As  
  36氪 · 2026-11-18 08:45

- [黄仁勋事变之后，AI算力建设进入垃圾时间了吗？](<https://www.tmtpost.com/8208765.html>)  
  AI算力的黄金时代，是不是结束了？  
  钛媒体 · 2026-11-18 08:44

- [冲击人类史上最大 IPO、发行价每股 70\~78 美元：Anthropic 已获准上市，代码为“ANT”](<https://www.ithome.com/1/028/599.htm>)  
  IT之家 11 月 18 日消息，根据美国证券交易委员会（SEC）昨日（11 月 17 日）公示的上市注册文件，Anthropic 的 A 类普通股已获准在纳斯达克全球精选市场上市， 股票代码为“ANT”，IPO 发行价区间维持每股…  
  IT之家 · 2026-11-18 08:12

- [Anthropic Backers Sequoia, Lightspeed Set to Invest More in IPO](<https://www.bloomberg.com/news/articles/2026-11-17/anthropic-backers-sequoia-lightspeed-set-to-invest-more-in-ipo>)  
  Bloomberg · 2026-11-18 07:53

- [微软自研芯片 Maia 200 投入生产：每瓦 token 性能提升 1.7 倍](<https://www.ithome.com/1/028/597.htm>)  
  IT之家 11 月 18 日消息，昨日（11 月 17 日）召开的 Ignite 2026 活动中，微软宣布旗下第二代自研人工智能加速器 Maia 200 现已正式投入规模化生产， 并开始在数据中心运行微软最大规模的前沿 AI 大模型…  
  IT之家 · 2026-11-18 07:51

- [IT早报 1118：黄仁勋称愿重返英伟达任 CEO 董事会主席明确反对复职；中国“灵晟”蝉联全球超算榜首；GPT-6.2Astra 和 Sol 发布；苹果回应服务大规模中断...](<https://www.ithome.com/1/028/595.htm>)  
  “IT早报”时间，大家好，现在是 2026 年 11 月 18 日星期三，今天的重要科技资讯有： 1. 英伟达董事会主席明确表态：无意让黄仁勋回归重新担任 CEO 英伟达新任董事长哈维・琼斯在财报电话会议上表示，黄仁勋因个人行为违反公…  
  IT之家 · 2026-11-18 07:43

- [微软决策模型 Microsoft-Decision-1.1 登场，跑赢 GPT-6 Luna 与 Gemini](<https://www.ithome.com/1/028/593.htm>)  
  IT之家 11 月 18 日消息， 微软昨日（11 月 17 日）宣布正式推出 Microsoft-Decision-1.1 决策 AI 模型， 目前已在 Microsoft Foundry、OpenRouter 和 Vercel 平…  
  IT之家 · 2026-11-18 07:40

- [微软最具性价比网安 AI 模型 MAI Cyber 2 Flash 登场：性能比肩 GPT-6 Astra，每任务成本约为其 2%](<https://www.ithome.com/1/028/585.htm>)  
  IT之家 11 月 18 日消息，微软 AI 部门于 11 月 17 日发布全新专用安全模型 MAI Cyber 2 Flash， 定位为面向企业安全团队的“高性价比”网络安全 AI。 该模型旨在帮助安全人员全天候发现软件漏洞、推荐修…  
  IT之家 · 2026-11-18 07:06

- [Perplexity Computer 新增 Multiagent 档位：最多 16 个 AI 智能体交叉检查工作](<https://www.marktechpost.com/2026/11/17/perplexity-computer-multiagent-effort-level/>)  
  Perplexity 为 Computer 新增高于 Ultra 的 Multiagent 档位，主智能体最多调度 16 个并行智能体，直接共享发现、编辑共享文件并互相检查，默认团队由 Claude Opus 5.5、GPT 6.1 Sol 和 Gemini 4 Carbon 组成。  
  MarkTechPost（RSS） · 2026-11-18 06:52

- [微软发布 MAI Code 2 与 MAI Code 2 Flash，5% 成本达 Claude Opus 5.5 约 96% 性能](<https://www.ithome.com/1/028/579.htm>)  
  微软在 Ignite 2026 发布自研编程模型 MAI Code 2 和 MAI Code 2 Flash，并已在 GitHub Copilot 上线，分别面向复杂软件开发与高频日常编程。  
  IT之家·人工智能 · 2026-11-18 06:42

- [Simon Willison 实测 OpenAI 新模型 GPT-6.2 Astra 与 GPT-6.2 Sol](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>)  
  OpenAI 发布 GPT-6.2 Astra（面向高难度项目的旗舰模型）和 GPT-6.2 Sol（面向日常工作的通用模型），API 名称分别为 gpt-6.2-astra 和 gpt-6.2-sol。  
  Simon Willison 博客 · 2026-11-18 06:38

- [深度实测GPT-6.2 Astra：极致省钱但偏科严重，沟通可读性依旧拉胯](<https://mp.weixin.qq.com/s/0cEoTueGjSGtm0-glpYGcA>)  
  OpenAI 发布 GPT-6.2 Astra 与 Sol，已同步上线 ChatGPT、Codex 和 API。  
  公众号：数字生命卡兹克 · 2026-11-18 06:36

- [Amazon and Google will together own nearly 30% of Anthropic after its IPO](<https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/>)  
  Amazon will own just under 15% of Anthropic after the IPO, with the option to go much higher. Google is a close second w  
  TechCrunch · 2026-11-18 06:29

- [OpenAI 发布 GPT-6.2 Astra 和 Sol：部分成绩超越 Claude Fable 5.2 且成本大降](<https://www.ithome.com/1/028/577.htm>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款模型，重点提升专业工作、编程、计算机操作和多步骤智能体任务，同时降低完成任务所需 token 数。  
  IT之家·人工智能 · 2026-11-18 06:23

- [OpenAI 发布 GPT-6.2 Astra 与 Sol，Astra API 降价 20%](<https://www.marktechpost.com/2026/11/17/openai-gpt-6-2-astra-sol-release/>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款闭源模型，面向专业与智能体工作，API 名为 gpt-6.2-astra 和 gpt-6.2-sol。  
  MarkTechPost（RSS） · 2026-11-18 06:07

- [Redwood Research 如何为 AI 发展节奏管控定义“能力活动”](<https://blog.redwoodresearch.org/p/how-should-we-define-capabilities>)  
  Redwood Research 提出一套用于“节奏管控”的算力分类标准，将 AI 公司的活动默认视为“能力活动”，仅豁免闲置算力、狭义产品开发、客户服务和狭义安全活动四类。该定义遵循“假阳性优于假阴性”原则，并要求第三方审计以确保执行。  
  Redwood Research：Blog（RSS） · 2026-11-18 05:36

- [Anthropic’s VC Investors Hit 10X Returns in IPO](<https://www.theinformation.com/articles/anthropics-vc-investors-hit-10x-returns-ipo>)  
  The Information · 2026-11-18 05:01

- [OpenAI 发布 GPT-6.2 Astra 与 Sol，API 降价并公布多项基准表现](<https://the-decoder.com/openai-launches-gpt-6-2-astra-and-sol-with-lower-api-prices-and-some-benchmark-gains/>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款模型，面向专业与日常场景，已在 ChatGPT Work 和 Codex 向 Plus、Pro、Enterprise、Edu 用户开放，并可通过 API 调用。  
  The Decoder：AI News（RSS） · 2026-11-18 04:30

- [Microsoft to Let Customers Customize Its AI Models’ ‘Weights’](<https://www.theinformation.com/briefings/microsoft-let-customers-customize-ai-models-weights>)  
  The Information · 2026-11-18 03:40

- [Google 将 Spark 智能体更名为 Gemini Tasks 并向多国用户免费开放](<https://www.theverge.com/tech/1035756/google-spark-ai-tasks-free>)  
  Google 将此前仅限 AI Pro 和 Ultra 订阅用户的 Spark 智能体更名为 Tasks 并免费开放，由 Gemini 4 Hydrogen 模型驱动，可制定膳食计划、管理日程、筛查邮件中的重复支出。  
  The Verge：AI（RSS） · 2026-11-18 02:58

- [微软推出 MAI Licensed Weights：可在自有 Azure 环境部署定制前沿模型](<https://microsoft.ai/news/introducing-mai-licensed-weights/>)  
  微软发布 MAI Licensed Weights，允许企业在自有 Azure 环境中部署并定制微软前沿 AI 模型，数据和定制成果归企业所有。AT&amp;T 用 MAI 模型分析 5G 网络，标准任务上以 GPT-6.1 Sol 的 1/50 成本取得更优表现；Woven by Toyota 在 44% 原本需人工介入的代码修复场景中直接产出可合并修复，成本不到十分之一。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:17

- [Microsoft 发布安全专用模型 MAI Cyber 2 Flash，以更低成本匹配 GPT 6 Astra](<https://microsoft.ai/news/introducing-mai-cyber-2-flash/>)  
  Microsoft 发布专用安全模型 MAI Cyber 2 Flash，面向漏洞发现、修复建议和威胁调查。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Microsoft AI 发布 MAI Code 2 与 MAI Code 2 Flash 编码模型](<https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/>)  
  Microsoft AI 发布 MAI Code 2 和 MAI Code 2 Flash 两款编码模型，面向日常企业编码任务，定价远低于竞品。MAI Code 2 在四项基准平均下达到 GPT 6.1 Sol 98% 的性能但成本仅 40%，达到 Claude Opus 5.5 96% 的性能而成本仅 5%；盲测前端评审中 64% 的情况下胜过 GPT-6 Sol。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Microsoft Ignite 2026：MAI 发布多款模型并推出 Licensed Weights 可控权重方案](<https://microsoft.ai/news/microsoft-ignite-2026-mai-keynote/>)  
  微软 MAI 在 Ignite 2026 主题演讲中发布一系列强调性价比的模型，并推出 MAI Licensed Weights，可定制后在自己的 Azure 环境中运行、掌控权重与数据。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:14

- [决策模型用量激增，TechCrunch 探讨定制化是否成为下一个竞争前沿](<https://techcrunch.com/2026/11/17/as-decision-model-use-skyrockets-is-customization-is-the-next-frontier/>)  
  TechCrunch 报道，10 月 Vercel 的 AI 模型路由上超过四分之一的请求流向了决策模型，这类不产出 token、专用于在预设选项间快速判断的 LLM 诞生仅一个月。  
  TechCrunch：AI（RSS） · 2026-11-18 02:10

- [Introducing GPT-6.2 Astra and Sol](<https://openai.com/index/introducing-gpt-6-2-astra-sol>)  
  Introducing GPT‑6.2 Astra and Sol, with better professional outputs, coding, computer use, and efficiency at lower co…  
  OpenAI · 2026-11-18 01:45

- [Anthropic Plans to Raise IPO Price After Strong Demand](<https://www.wsj.com/finance/anthropic-plans-to-raise-ipo-price-after-strong-demand-1a6b0af1?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-18 01:02

- [Gemini 向美国等六国用户免费开放任务功能，可打电话、付款并接入 60 多款应用](<https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/>)  
  Google 宣布 Gemini 任务功能免费向美、日、韩、加、澳、印数亿用户推出，基于新的 Gemini 4 Hydrogen 模型，可自动打电话预约、查询账单、购物下单和管理日程。  
  Google Blog：AI（RSS） · 2026-11-18 01:00

- [OpenAI 推出 GPT-6 Astra 和 GPT-6 Luna 医疗行政智能体](<https://the-decoder.com/ai-agents-are-starting-to-fill-out-medical-forms-and-file-insurance-requests-in-place-of-human-staff/>)  
  OpenAI 发布面向医疗行政场景的 computer-use 智能体 GPT-6 Astra 和 GPT-6 Luna，可操作电子健康记录和保险门户完成填表、预授权等任务，无需 API。  
  The Decoder：AI News（RSS） · 2026-11-18 00:55

- [Microsoft Research 播客探讨 AI 如何改变医疗与生物科学的未来](<https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/>)  
  Microsoft Research 播客《The Shape of Things to Come》中，Doug Burger 与 Eric Horvitz、Eric Topol、Ava Amini 对谈 AI 在医疗与生物科学中的应用，涵盖序贯诊断基准、医学影像潜力、全患者模型、虚拟细胞与生物基础模型等话题。  
  Microsoft Research 博客（RSS） · 2026-11-18 00:52

- [美国拟收紧远程算力出口管制，路透社揭示中国模型蒸馏产业应对芯片短缺](<https://the-decoder.com/the-us-wants-to-block-china-from-renting-ai-power-abroad-but-china-already-built-a-parallel-supply-chain-from-us-ai-output/>)  
  美国商务部工业与安全局（BIS）发布临时规则，将远程访问算力纳入出口管制，要求新加坡、马来西亚、泰国、印度尼西亚和巴西等地的数据中心运营商在采购英伟达等美国厂商的先进AI芯片时逐案申请许可。与此同时，路透社调查显示，中国开发者通过模型蒸馏技术，从美国领先模型中提取答案、代码和解题方案，用于训练更小、成本更低的本地模型，以缓解高端硬件短缺。  
  The Decoder：AI News（RSS） · 2026-11-18 00:47

- [Pragmatic Engineer 解读软件工程师的推理工程：从前沿实验室 API 迁移到开源模型](<https://newsletter.pragmaticengineer.com/p/inference-engineering-for-software-engineers>)  
  Pragmatic Engineer 访谈 Modal、Fireworks AI 和 Baseten 三家推理供应商，讲解软件工程师如何从前沿实验室 API 迁移到开源模型以控制成本。  
  Pragmatic Engineer（RSS） · 2026-11-18 00:11

- [Anthropic Expected to Price Above $1.4 Trillion Valuation](<https://www.theinformation.com/briefings/anthropic-expected-price-1-4-trillion-valuation>)  
  The Information · 2026-11-17 23:52

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 5 页
