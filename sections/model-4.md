# 大模型

[返回面板](../README.md) · [上一页](model-3.md) · [下一页](model-5.md) · 第 4 / 7 页

- [Anthropic 获准在纳斯达克上市，代码 ANT，发行价每股 70\~78 美元](<https://www.ithome.com/1/028/599.htm>)  
  根据 SEC 11 月 17 日公示的文件，Anthropic 的 A 类普通股获准在纳斯达克全球精选市场上市，代码 ANT，发行价区间维持每股 70 至 78 美元。  
  IT之家·人工智能 · 2026-11-18 08:12

- [Hugging Face 开源 0.5B 语音识别模型 Rumble-2-Flash，支持 40+ 语言](<https://huggingface.co/blog/rumble-2-flash>)  
  Hugging Face 以 Apache 2.0 许可开源 0.5B 参数语音识别模型 Rumble-2-Flash，支持 40+ 语言自动检测，在 Transformers 和 vLLM 中原生可用。  
  Hugging Face 社区博客（混合发现） · 2026-11-18 08:00

- [vLLM 用 FlyDSL MonoKernels 降低 AMD Instinct GPU 上智能体解码延迟](<https://vllm.ai/blog/2026-11-18-flydsl-monokernels>)  
  vLLM 博客介绍用 FlyDSL 编写的 MonoKernels，在 AMD Instinct GPU 上降低交互式 LLM 服务的解码延迟。该方案把多个依赖算子阶段合并进单次 GPU kernel 启动，采用持久化调度复用线程块、预取权重并按需交接数据，减少短 kernel 的启动与收尾开销。  
  vLLM 官方博客（RSS） · 2026-11-18 08:00

- [Gemini 4 Neon（gemini-4-neon）正式发布，付费档 $3/$15 每百万 token](<https://ai.google.dev/gemini-api/docs/changelog#11-18-2026>)  
  Google 在 Gemini API 更新日志中宣布 Gemini 4 Neon（gemini-4-neon）正式可用（GA），面向复杂软件工程、知识工作和科学工作流提供快速端到端任务完成。  
  Gemini API：更新日志（网页） · 2026-11-18 08:00

- [二十年逆向工程老手分享 LLM 辅助逆向工作流与开源 Agent 技能](<https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering>)  
  一位有二十年软硬件逆向经验的老手分享其 LLM 辅助逆向工作流，使用 DeepSeek v4.1 Flash 配合 Ghidra MCP bridge、radare2 和 kuna，让 Agent 分析二进制结构并把发现写入 MD 文件避免跑偏。  
  Hacker News：AI 热帖 · 2026-11-18 08:00

- [Conductor 0.96.0 更新：可查看智能体花费与上下文窗口占用](<https://www.conductor.build/changelog/0.96.0-know-what-you-re-spending>)  
  Conductor 0.96.0 在输入框新增上下文圆圈，可查看上下文窗口占用、用量限额和对话预估成本。新对话默认使用 Claude 的 Opus 5.5 和 Codex 的 GPT-6.2 Sol，连续工具调用与思考步骤折叠为一行。本地工作区智能体可跨其他仓库启动工作区，侧边栏支持多项目筛选。  
  Conductor 官方更新 · 2026-11-18 08:00

- [在 32GB Mac 上运行 180B MoE：Transformers 专家流式加载实战与 Strata 对比](<https://huggingface.co/blog/moe-expert-streaming>)  
  作者在 Transformers 中实现 MoE 专家权重流式加载，让 Qwen3.8-Flash-Next（121GB FP8 专家权重）能在 32GB 内存 MacBook 上运行，方法是将专家量化到 3bit 存盘、用槽位池缓存配合 grouped\_mm，并通过预取和 Metal 内核优化。  
  Hugging Face 官方团队博客 · 2026-11-18 08:00

- [微软发布 Microsoft-Decision-1.1 决策模型，基准得分领先 GPT-6 Luna 与 Gemini](<https://www.ithome.com/1/028/593.htm>)  
  微软于 11 月 17 日正式推出 Microsoft-Decision-1.1 决策 AI 模型，已在 Microsoft Foundry、OpenRouter 和 Vercel 上线，面向路由、分类、优先级排序、内容核验和工作流控制等企业决策场景。  
  IT之家·人工智能 · 2026-11-18 07:40

- [微软发布网络安全模型 MAI Cyber 2 Flash，CyberGym-E2E 成功率 92.3%，每任务成本约为 GPT-6 Astra 的 2%](<https://www.ithome.com/1/028/585.htm>)  
  微软 AI 部门 11 月 17 日发布面向企业安全团队的专用模型 MAI Cyber 2 Flash，定位高性价比网络安全 AI，用于发现漏洞、推荐修复和调查威胁。  
  IT之家·人工智能 · 2026-11-18 07:06

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

- [Anthropic IPO 后 Amazon 与 Google 将合计持股近 30%](<https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/>)  
  Anthropic 披露 IPO 相关投资细节：Amazon 持股将达 14.7%，全部转换可转债可至 23.8%；Google 持股 13.7%，均为无投票权股份。  
  TechCrunch：AI（RSS） · 2026-11-18 06:29

- [OpenAI 发布 GPT-6.2 Astra 和 Sol：部分成绩超越 Claude Fable 5.2 且成本大降](<https://www.ithome.com/1/028/577.htm>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款模型，重点提升专业工作、编程、计算机操作和多步骤智能体任务，同时降低完成任务所需 token 数。  
  IT之家·人工智能 · 2026-11-18 06:23

- [OpenAI 发布 GPT-6.2 Astra 与 Sol，Astra API 降价 20%](<https://www.marktechpost.com/2026/11/17/openai-gpt-6-2-astra-sol-release/>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款闭源模型，面向专业与智能体工作，API 名为 gpt-6.2-astra 和 gpt-6.2-sol。  
  MarkTechPost（RSS） · 2026-11-18 06:07

- [Redwood Research 如何为 AI 发展节奏管控定义“能力活动”](<https://blog.redwoodresearch.org/p/how-should-we-define-capabilities>)  
  Redwood Research 提出一套用于“节奏管控”的算力分类标准，将 AI 公司的活动默认视为“能力活动”，仅豁免闲置算力、狭义产品开发、客户服务和狭义安全活动四类。该定义遵循“假阳性优于假阴性”原则，并要求第三方审计以确保执行。  
  Redwood Research：Blog（RSS） · 2026-11-18 05:36

- [OpenAI 发布 GPT-6.2 Astra 与 Sol，API 降价并公布多项基准表现](<https://the-decoder.com/openai-launches-gpt-6-2-astra-and-sol-with-lower-api-prices-and-some-benchmark-gains/>)  
  OpenAI 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 两款模型，面向专业与日常场景，已在 ChatGPT Work 和 Codex 向 Plus、Pro、Enterprise、Edu 用户开放，并可通过 API 调用。  
  The Decoder：AI News（RSS） · 2026-11-18 04:30

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

- [Microsoft Ignite 2026：MAI 发布多款模型并推出 Licensed Weights](<https://microsoft.ai/news/microsoft-ignite-2026-mai-keynote/>)  
  Microsoft 在 Ignite 2026 主题演讲中介绍 MAI 系列模型的高性价比策略。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:14

- [决策模型用量激增，TechCrunch 探讨定制化是否成为下一个竞争前沿](<https://techcrunch.com/2026/11/17/as-decision-model-use-skyrockets-is-customization-is-the-next-frontier/>)  
  TechCrunch 报道，10 月 Vercel 的 AI 模型路由上超过四分之一的请求流向了决策模型，这类不产出 token、专用于在预设选项间快速判断的 LLM 诞生仅一个月。  
  TechCrunch：AI（RSS） · 2026-11-18 02:10

- [Introducing GPT-6.2 Astra and Sol](<https://openai.com/index/introducing-gpt-6-2-astra-sol>)  
  Introducing GPT‑6.2 Astra and Sol, with better professional outputs, coding, computer use, and efficiency at lower co…  
  OpenAI · 2026-11-18 01:45

- [Vals研究称部分前沿AI模型可被游戏话术诱导标记潜在打击目标](<https://techcrunch.com/2026/11/17/ai-models-can-be-tricked-into-identifying-civilians-as-military-targets-by-telling-them-its-a-game/>)  
  旧金山AI评测初创公司Vals发布报告称，其利用模拟场景及生成与真实图像测试多家前沿AI模型在无人机和卫星图像中标记潜在目标的行为，发现部分模型频繁标记包括平民和投降士兵在内的目标；当模型拒绝时，研究人员以“这是游戏”的话术诱导其配合，且相关请求未被安全分类器拦截。Anthropic与OpenAI均回应称此类行为违反其政策，并已或正在加强防护与执法措施。报告同时指出，延迟和机载算力有限等技术限制使通用AI模型难以直接用于实时无人机目标识别，更现实的风险是模型被用于大规模标注战场影像以生成训练数据。  
  TechCrunch：AI（RSS） · 2026-11-18 01:20

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

- [Prime Intellect 发布 Model Factory 一站式训练与推理平台](<https://www.primeintellect.ai/blog/introducing-model-factory>)  
  Prime Intellect 发布 Model Factory，将强化学习、SFT、预训练和推理整合到一个控制面，让企业在自有任务和数据上训练、部署并持续改进模型。  
  Prime Intellect（网页） · 2026-11-18 00:00

- [Anthropic IPO 定价每股 $83.00，11 月 19 日以代码 ANT 登陆纳斯达克](<https://www.anthropic.com/news/anthropic-prices-initial-public-offering>)  
  Anthropic, PBC 宣布其 IPO 定价为每股 $83.00，共发行 980,000,000 股 Class A 普通股，其中 956,351,354 股由公司出售，23,648,646 股由部分出售股东出售，公司不会获得后者收益。  
  Anthropic：Newsroom（网页） · 2026-11-18 00:00

- [Google DeepMind 发布 Gemini 4 Neon，智能指数微升且任务成本降低约 17%](<https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain>)  
  Artificial Analysis 评测 Google DeepMind 发布的 Gemini 4 Neon，Neon（xhigh）智能指数 61 分，比 Gemini 4 Carbon（high）高 1 分、总排名第 3。  
  Artificial Analysis 完整文章（网页） · 2026-11-18 00:00

- [SGLang 集成 Humming：面向高效 MoE 推理的灵活低比特内核](<https://www.lmsys.org/blog/2026-11-18-humming-sglang>)  
  Humming 0.1.18 扩展了与 SGLang 的集成，覆盖更多量化方案和 GPU 架构，并新增面向 SGLang MoE runner 的共享激活表达式接口。  
  LMSYS Blog · 2026-11-18 00:00

- [Google 发布 Gemini 4 Neon：速度快、成本低的 frontier 级模型](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/>)  
  Google 发布 Gemini 4 Neon，主打 frontier 级智能与快速端到端任务完成，覆盖软件工程、知识工作和科学工作流。  
  Hacker News：AI 热帖 · 2026-11-18 00:00

- [在 Modal 上为玛雅碑铭研究构建新工具](<https://modal.com/blog/scaling-intelligence-asya>)  
  斯坦福讲师 Miguel Novelo 在 Modal 上搭建了一条将 2D 玛雅字形图像转为 3D 模型的快速流水线，起点是约 100 个玛雅音节符号。他在 Gray Area 展出的装置 \(Φ ᆺ Φ\) asya 让观众在沙上作画并生成新字形，汇入不断增长的集体抄本。Novelo 表示，通用大模型缺乏尤卡坦本地知识，因此需要理解字形外观与语境的小型专用模型。  
  Modal 官方工程博客（RSS） · 2026-11-18 00:00

- [用两条提示词在 NVIDIA Cosmos 中构建可训练物理 AI 数据集](<https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/>)  
  NVIDIA 介绍如何用两条提示词在 Cosmos 中完成物理 AI 训练数据集的整理与增强。Cosmos Data Factory 包含五个云原生 blueprint 和六个可组合 skill，由前沿 AI 智能体编排，实现 prompt-to-data。文章演示了自动驾驶场景生成、图像属性增强、视频天气光照变换、罕见事件视频与缺陷图像生成五类用例。  
  NVIDIA Technical Blog：Agentic AI / Generative AI · 2026-11-18 00:00

- [生数 Motubrain 2.0 收官首个物理 AI 全程公开训练直播](<https://mp.weixin.qq.com/s/BCQg04JuaCkzyCJ5wmgTPw>)  
  生数宣布 Motubrain 物理AI 25天全程公开训练直播收官，完成从预训练、后训练到 Agent 与 RSI 探索的阶段验证。20B 参数模型使用 250 万小时多源数据（含 200 万小时互联网视频、约 50 万小时具身数据），累计超 1 万次真机任务测试，在 RoboCasa365、EBench、LIBERO-Plus 等 6 项 Benchmark 上位列前茅。  
  公众号：生数科技（Vidu·视频） · 2026-11-17 23:10

- [七位物理学家谈 AI 如何重塑理论物理研究](<https://www.understandingai.org/p/i-spoke-to-seven-physics-experts>)  
  Understanding AI 作者采访 Suvrat Raju 等七位理论物理学家，探讨 AI 对理论物理的冲击。Raju 团队用未公开的真实难题构建 TheoPhysEval 基准，GPT-6 Astra 在 50 题中答对 49 题，每题计算成本不到 3 美元，基准在发布前即被饱和。  
  Timothy B. Lee：Understanding AI（RSS） · 2026-11-17 22:51

- [Cerebral Valley AI 峰会精华：算力成本、开源权重模型与 Nvidia 变局](<https://www.newcomer.co/p/top-takes-from-cvai-2026>)  
  Newcomer 梳理了上周 Cerebral Valley AI 峰会的核心观点，Databricks 的 Ali Ghodsi、Palo Alto Networks 的 Nikesh Arora 与 General Catalyst 的 Hemant Taneja 等嘉宾围绕算力成本展开讨论。  
  Newcomer 新闻长文（RSS） · 2026-11-17 22:33

- [NVIDIA Ian Buck 在 SC26 开幕：发布 Nemotron for Science、Rubin HPC GPU 与 Vera CPU 平台](<https://blogs.nvidia.com/blog/ian-buck-sc26/>)  
  NVIDIA 的 Ian Buck 在 SC26 特别演讲中发布面向科学智能体的 Nemotron for Science 工具包，将 Nemotron 3.5 Super VL 开放模型与新的开放化学数据集及后训练配方结合，可在 DGX Spark 或本地超算上运行。  
  NVIDIA Blog（RSS） · 2026-11-17 22:00

- [当 AI 生成数据成为明天的基准真相](<https://www.oreilly.com/radar/when-ai-generated-data-becomes-tomorrows-ground-truth/>)  
  O'Reilly Radar 文章剖析 AI 智能体生成的结论如何被企业系统当作事实沿用：供应商审核智能体误读证书范围后，记录虽被人工更正，仪表盘、项目报告与采购决策仍沿用旧结论。文章指出，结论在流转中逐层丢失“由 AI 生成”的上下文，还可能回流为微调数据与评测集，被下一个模型当作基准真相学习。  
  O'Reilly Radar（热点 RSS） · 2026-11-17 19:54

- [ChinaTalk 访谈解读美国商务部132页出口管制新规](<https://www.chinatalk.media/p/bis-finally-takes-a-stand>)  
  ChinaTalk 播客邀请前美国国家安全委员会官员 Chris McGuire 和 Julian Gewirtz 解读美国商务部发布的132页出口管制新规。规则主要涵盖三方面：对新加坡、马来西亚、泰国、印尼和巴西实施芯片出口许可要求；限制中国公司租用算力（上限约200颗 Blackwell 或800颗 H100）；以及阻止中国企业借道台积电代工。访谈还讨论了规则执行力度、美国境内算力租用漏洞及对 AI 供应链的影响。  
  ChinaTalk（RSS） · 2026-11-17 19:03

- [Sarvam 开放 Token Factory：在印度本地托管 8 个开源模型的推理平台](<https://www.marktechpost.com/2026/11/17/sarvam-token-factory-india-inference-platform/>)  
  Sarvam 向所有开发者开放 Token Factory，通过统一的 OpenAI 兼容 API 从印度 GPU 集群提供 Sarvam 105B、GLM 5.3、DeepSeek V4.1 Flash 1017、Kimi K3.1 Pro 等 8 个开源权重模型。  
  MarkTechPost（RSS） · 2026-11-17 17:51

[返回面板](../README.md) · [上一页](model-3.md) · [下一页](model-5.md) · 第 4 / 7 页
