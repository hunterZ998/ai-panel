# 全信源资讯

[返回面板](../README.md) · [上一页](all-8.md) · [下一页](all-10.md) · 第 9 / 17 页

- [微软 CEO 纳德拉坦言 Claude Code 仅半年动摇 VS Code 地位](<https://www.ithome.com/1/030/733.htm>)  
  据 Windows Latest 报道，微软 CEO 纳德拉表示 Anthropic 推出 Claude Code 后，开发者开始接受命令行形态，传统 IDE 约六个月就失去存在感，微软并未立刻拿出应对方案。  
  IT之家·人工智能 · 2026-11-23 08:10

- [Anthropic 推出 Claude Ship 测试版，自动完成 PR 审查、修复与审批](<https://claude.com/blog/introducing-claude-ship>)  
  Anthropic 发布 Claude Ship 测试版，由 Code Review（已正式可用）、PR Steward 和 Claude Approvals 两个 beta 智能体组成，可审查 PR、推送修复并按团队写进仓库的策略文件决定能否合并。  
  Claude：Blog（网页） · 2026-11-23 08:00

- [OpenRouter 实测用 MCP 连接器让 Claude 生成图像并对比四款模型](<https://openrouter.ai/blog/tutorials/can-claude-generate-images/>)  
  OpenRouter 发布教程演示如何通过 OpenRouter MCP 服务器（https://mcp.openrouter.ai/mcp）作为连接器让 Claude 调用图像模型生成真实图片，覆盖截至 2026 年 11 月 19 日的 74 款图像模型。  
  OpenRouter：Announcements（RSS） · 2026-11-23 08:00

- [Conductor 0.99.0 为 Claude Code 和 Codex 加入用量限制自动恢复](<https://www.conductor.build/changelog/0.99.0-auto-resume-for-claude-code-and-codex>)  
  Conductor 0.99.0 为 Claude Code 和 Codex 加入自动恢复功能：当对话因用量限制中断，额度重置后 Conductor 可自动续接，智能体从断点继续。该功能可在对话触发限制时或 Settings → General 中开启，同时 Conductor 为 Codex 支持 Ultrafast，Codex 子智能体也会作为后台任务显示。  
  Conductor 官方更新 · 2026-11-23 08:00

- [Anthropic 发布编码智能体企业安全指南，详解 Claude Code 分层防护](<https://claude.com/blog/enterprise-guide-to-securing-coding-agents>)  
  Anthropic 发布面向 Team 和 Enterprise 用户的编码智能体企业安全指南，从评估问题、四类智能体风险到判断层和固定边界层给出框架。  
  Claude：Blog（网页） · 2026-11-23 08:00

- [Anthropic 重访神经元可解释性：回应三大质疑](<https://alignment.anthropic.com/2026/neuron-basis-theory/>)  
  Anthropic 重新审视"单个神经元难以解释"的三条理由，改为考察每个神经元对模型输出的贡献，并通过关闭神经元或迁移其输出到其他层来验证假设。在 Llama-3.1-8B-Instruct 等四个模型中，一个神经元同时贡献两个无关概念的情况仅占约 1% 或更少，且神经元输出在多数层间含义大致不变。团队追踪了 18 个事实，发现事实虽分布存储但可通过可解释神经元读取。  
  Anthropic：Alignment Science Blog（网页） · 2026-11-23 08:00

- [Anthropic 研究用 MLP 神经元做安全检测、引导与隐藏行为审计](<https://alignment.anthropic.com/2026/neuron-basis-applications/>)  
  Anthropic 在开放权重模型上测试用模型自身的 MLP 神经元作为零样本安全检测器和引导向量，无需标注或额外训练。神经元在多数评测中优于文本搜索和 SAE latents，引导效果与训练过的引导向量相当（21% 对 2% 无引导）；在 68 个 LoRA 的盲审计中，结合神经元读出的审计员对 58 个隐藏行为模型命名成功率达 75%，远高于仅看输出的 40%。  
  Anthropic：Alignment Science Blog（网页） · 2026-11-23 08:00

- [Anthropic 开放 Enterprise Frontier Safeguards 公测，零数据保留下实现自动化安全监测](<https://claude.com/blog/zero-data-retention-with-enterprise-frontier-safeguards>)  
  Anthropic 宣布 Enterprise Frontier Safeguards（EFS）进入公开 beta。EFS 在兼容零数据保留的前提下新增自动化安全监测层，跨多个请求识别单条请求看不出危害的复杂攻击模式，发现风险时生成不含输入输出的 Safety Case。  
  Claude：Blog（网页） · 2026-11-23 08:00

- [Google Research 提出 DeepCrossAttention，改进 Transformer 残差连接](<https://research.google/blog/supercharging-transformer-residual-connections/>)  
  Google Research 在 ICML 2025 论文中提出 DeepCrossAttention（DCA），将 Transformer 残差连接改为按 token 动态路由历史层特征。  
  Google Research：Blog（网页） · 2026-11-23 08:00

- [Hugging Face 发布智能体评测构建与维护指南，用 raman-lab 案例走通八步流程](<https://huggingface.co/blog/agentic-evals>)  
  Hugging Face 发布智能体评测构建指南，讲解评测从问答、智能体到多智能体团队三个阶段的演进，并以物理实验室拉曼光谱拟合任务 raman-lab 为例，演示从定义 claim 到对比六个模型的八个步骤。  
  Hugging Face 官方团队博客 · 2026-11-23 08:00

- [vLLM 上用 AMD MoRI UMBP 把 KV 缓存池直接放到 NVMe，同容量吞吐追平 DRAM](<https://vllm.ai/blog/2026-11-23-skip-the-dram-tier>)  
  AMD 与 vLLM 团队在 AgentX 和 kvlab 智能体负载上实测，1.8 TB NVMe KV 池（基于 AMD 开源 MoRI 库的 UMBP）在 Kimi-K3 上吞吐与同容量 1.8 TB DRAM 池差距保持在 1% 以内，48、70、96 并发会话下分别为 +0.3%、+0.8%、−0.2%。  
  vLLM 官方博客（RSS） · 2026-11-23 08:00

- [卡兹克分享 Claude、GPT、Gemini 三模型协同调度方法](<https://mp.weixin.qq.com/s/gwj0xLNHPfToQnQJN7IkMA>)  
  自媒体作者卡兹克分享自己让 Claude、GPT 和 Gemini 协同工作的方法：把 Claude Opus 5.5 当总指挥负责沟通、拆解和验收，Gemini 4 Neon 当军师出方案和改界面文案，GPT 负责后端、算法、修 BUG 和代码审查。  
  公众号：数字生命卡兹克 · 2026-11-23 07:56

- [E259｜机械神教与反人性策略：华尔街量化巨头的AI之路](<https://sv101.fireside.fm/273>)  
  华尔街最低调、最赚钱的那一批量化交易巨头，也是这一轮AI浪潮里囤算力、抢人才、投资AI实验室最凶猛的那一批。 他们不靠市场趋势赚钱，而是靠波动和速度在毫秒间争夺价差。和大家印象中西装革履的金融人士并不一样，这些公司里的人可能是一群数学…  
  硅谷101 · 2026-11-23 07:00

- [AISI 红队论文：攻击策略选择会让 LLM 监视器评估结果失真](<https://www.aisi.gov.uk/blog/attack-policy-selection-can-make-monitor-evaluations-misleading>)  
  英国 AI Security Institute 发布论文，测试合成攻击生成方式对监视器评估的影响。评估一个 OpenAI 前生产监视器时，同一监视器对不同攻击策略的漏报率从 0.2%（基础提示）到 23%（转录编辑）不等，优化程度也会显著改变结果。作者指出合成转录只是真实有害行为代理，其代表性难以证明，仅凭监视器评估不足以保证部署安全，需辅以能力限制、人工在环和沙箱等分层防护。  
  英国 AI Security Institute：Blog（网页） · 2026-11-23 07:00

- [OpenAI 首席科学家 Jakub Pachocki 提议为先进 AI 设共同开发门槛，警告 2027 年或现能力加速](<https://www.ithome.com/1/030/720.htm>)  
  OpenAI 首席科学家 Jakub Pachocki 发文提议 AI 企业建立行业统一标准，在安全监控能力可靠之前不突破约定的发展门槛，CEO 奥尔特曼公开支持。  
  IT之家·人工智能 · 2026-11-23 06:50

- [Microsoft 与美国政府警告未来数月还会有更多重大技术故障](<https://www.theverge.com/tech/1039851/major-tech-outages>)  
  The Verge 梳理近期一连串技术故障，包括全国性 FAA 停飞令、持续多日的 Outlook 故障和 JPMorgan Chase 银行系统故障。  
  The Verge：AI（RSS） · 2026-11-23 06:48

- [OpenAI 首席科学家 Jakub Pachocki 提议以 perplexity 作为限制 AI 发展速度的度量](<https://techcrunch.com/2026/11/22/openais-chief-scientist-has-thoughts-on-how-to-limit-ai-development/>)  
  OpenAI 首席科学家 Jakub Pachocki 发文提议以 perplexity 作为衡量 AI 进展的共同基准，用于在企业间建立发展速度的共同限制。  
  TechCrunch：AI（RSS） · 2026-11-23 05:14

- [Simon Willison 用 Claude Fable 5.2 生成 HTML select 样式展示页](<https://simonwillison.net/2026/Nov/22/select-styling/>)  
  Simon Willison 因不满 HTML select 下拉框在各浏览器默认样式不一、在 Chrome 中尤其难看，让 Claude Fable 5.2 生成了一个展示 select 各种可样式化方式的页面，计划在每个桌面和移动浏览器中截图。他实验后给出自己最喜欢的 select CSS 写法，并展示了该样式在三个浏览器中的效果。  
  Simon Willison 博客 · 2026-11-23 03:45

- [NVIDIA 发布车载推理 VLA 模型 Alpamayo 2 Edge，面向 DRIVE AGX Thor](<https://www.marktechpost.com/2026/11/22/nvidia-alpamayo-2-edge-2b-reasoning-vla-drive-thor/>)  
  NVIDIA 发布 2B 级推理视觉-语言-动作模型 Alpamayo 2 Edge，可在车内 DRIVE AGX Thor 上做轨迹规划与因果解释，采用 OpenMDW-1.1 许可开源权重。  
  MarkTechPost（RSS） · 2026-11-23 02:37

- [Gary Marcus 评 Levent Alpöge 借助 Claude 证明黎曼猜想：不是 AI 独立完成，也难以泛化](<https://garymarcus.substack.com/p/levent-alpoge-has-solved-the-riemann>)  
  Gary Marcus 分析 Levent Alpöge 在 Claude 协助下疑似证明黎曼猜想一事，指出并非 AI 独立完成，而是这位数学家数月深度协作的成果。  
  Gary Marcus：The Road to AI We Can Trust（RSS） · 2026-11-23 02:37

- [TechCrunch 访谈《Hyperscale》作者 Paris Marx：数据中心为何成为反科技浪潮的焦点](<https://techcrunch.com/2026/11/22/why-data-centers-are-at-the-center-of-the-big-tech-backlash/>)  
  TechCrunch 访谈记者 Paris Marx，谈其新书《Hyperscale》调查数据中心与生成式 AI 的社会影响。  
  TechCrunch：AI（RSS） · 2026-11-23 02:08

- [《以撒的结合：Repentance Plus》因 AI 音乐被发现后遭差评轰炸，Nicalis 已移除相关文件](<https://www.theverge.com/games/1039770/binding-of-isaac-ai-music>)  
  《以撒的结合：Repentance Plus》被发现某段 GTA 主题内容使用 AI 生成音乐后在 Steam 遭差评轰炸。Reddit 用户 ShweetsStuff 找到带 Suno 元数据的音频文件，作者 Edmund McMillen 在 X 上道歉，称自己不知情；发行方 Nicalis 数小时内更新游戏并移除了生成的音乐文件。  
  The Verge：AI（RSS） · 2026-11-23 01:25

- [本地 AI 入门指南：用 Unsloth Desktop 和 Qwen3.8-27B 在家用 PC 搭建私有 ChatGPT](<https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth>)  
  作者分享在 Windows PC 上用 Unsloth Desktop 搭建本地 AI 的入门教程，以 RTX 5090 运行 4-bit 量化的 Qwen3.8-27B，全程约 10-15 分钟，无需终端命令或订阅。  
  Hacker News：AI 热帖 · 2026-11-23 00:00

- [SGLang 为 ERNIE 5.5 Flash 实现 1074 tokens/s 低延迟解码](<https://www.lmsys.org/blog/2026-11-23-ernie55-flash-low-latency>)  
  SGLang 为 ERNIE 5.5 Flash 加入低延迟解码支持并完成端到端优化，在 4 块 SM100 GPU、BS=1、55K 输入与 1K 输出下达到 1074 tokens/s。  
  LMSYS Blog · 2026-11-23 00:00

- [Anthropic 访谈 58 家企业客户：AI 采用的价值、雇佣影响与组织重组](<https://www.anthropic.com/research/working-with-ai>)  
  Anthropic 研究团队对 58 家企业客户进行 66 次面对面访谈，分析企业采用 AI 的方式、瓶颈与组织变化。研究发现多数 AI 应用通过扩大产出而非削减成本创造价值；直接裁员案例很少，但约三分之二的公司因 AI 减少招聘，九家削减外包和离岸承包商；高价值应用通常需要更深度的组织重组，如拓宽岗位职责、把员工转向 AI 无法完成的瓶颈任务，以及为非技术员工建设数据和基础设施支持。  
  Anthropic：Research（发表成果 · 网页） · 2026-11-23 00:00

- [AI 智能体可以多任务并行，人类跟得上吗？](<https://every.to/p/your-ai-agents-can-multitask-can-you>)  
  Every 的九位成员分享了各自同时管理多个 AI 智能体的做法。作者本人曾独自承担公司整个运营部门的工作，靠一支 AI 智能体团队完成会议、发票、账号开通和 Slack 回复等事务；其智能体 Dot 的 Sebastian 记录到他曾在 29 分钟内切换 7 条不同的工作线。  
  Every：最新文章（网页） · 2026-11-23 00:00

- [Google 介绍 Semantic governance policies 如何防御智能体意图劫持](<https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/>)  
  Google 介绍 Semantic governance policies 通过默认开启的用户意图匹配，在每次工具调用执行前检查该动作是否来自用户请求，以拦截间接提示词注入导致的意图劫持。  
  Google Developers Blog（RSS） · 2026-11-23 00:00

- [Sarvam AI 发布语音听写 API Sarvam Dictate，支持英语和 22 种印度语言](<https://www.sarvam.ai/blogs/sarvam-dictate>)  
  Sarvam AI 发布 Sarvam Dictate，一个面向开发者的听写 API，将语音转为说话者想输入的文本，支持英语、22 种印度语言和 Hinglish，定价为每分钟音频 ₹0.50（约 $0.33 每小时）。  
  Sarvam AI（网页） · 2026-11-23 00:00

- [LlamaIndex 开源 8.1M 参数文档解析模型 OCRia-nano-1](<https://www.llamaindex.ai/blog/introducing-ocria-nano-1>)  
  LlamaIndex 发布 OCRia-nano-1 的开放权重，一个 8.1M 参数的轻量文档解析模型，可在本地 CPU 上运行，权重托管在 Hugging Face，配套开源解析器 LiteParse（Apache 2.0）。  
  LlamaIndex：产品、工程与评测 · 2026-11-23 00:00

- [报道称 Dario Amodei 曾建议用游戏安抚因 AI 失业的民众](<https://www.theverge.com/ai-artificial-intelligence/1039745/dario-amodei-video-games-ai-joblessness>)  
  《华尔街日报》在 Anthropic 创纪录 IPO 后刊发的 Amodei 兄妹特写提到，Dario Amodei 曾在 Slack 讨论中建议用沉浸式电子游戏缓解 AI 导致失业所引发的政治冲突。相关说法来自广泛流传的 Slack 消息，报道称他当时已承认 AI 可能破坏世界稳定。  
  Hacker News：AI 热帖 · 2026-11-22 23:52

- [Architect Labs 公布 AI 自研 CPU 架构 Frostbite，能效为传统处理器 4.59 倍](<https://www.ithome.com/1/030/717.htm>)  
  美国帕洛阿尔托初创公司 Architect Labs 宣布，其 AI 系统自主发现、设计并验证了采用全新指令集的通用 CPU Frostbite。在 25 项工作负载测试中，4 个计算单元组成的 Frostbite 集群每瓦性能达到尺寸相近、已完成硅验证的双发射顺序执行 CPU 核心的 4.59 倍，单位面积性能为 8.77 倍。  
  IT之家·人工智能 · 2026-11-22 23:15

- [新实验：AI 编码智能体在模拟软件公司中完成不到十分之一的任务](<https://the-decoder.com/ai-coding-agents-ace-isolated-tests-but-complete-fewer-than-one-in-ten-tasks-in-a-simulated-workplace/>)  
  一项新实验首次让 AI 编码智能体在模拟软件公司中作为数字员工工作，环境包含同事、项目看板和聊天记录。结果显示即使 Claude Opus 5.5 和 GPT-6 Astra 也只完整完成不到十分之一的任务，而 SWE-bench 等标准基准已接近饱和。  
  The Decoder：AI News（RSS） · 2026-11-22 23:15

- [Oracle 称已筹集履行 OpenAI 合同全部所需资金](<https://www.ithome.com/1/030/715.htm>)  
  Oracle 11 月 20 日表示已在本月初筹集到履行与 OpenAI 交易的全部所需租金，与供应商的进一步私下讨论仅为补充选项。其得州 Abilene 园区已用于 GPT-6 Astra 训练并接近完工，下一个 GW 级项目 Shackelford 已获全部许可，NVIDIA Vera Rubin 机架预计未来几周内交付完成。  
  IT之家·人工智能 · 2026-11-22 22:24

- [Perplexity 发布 Monitor API，把网页搜索变成持续监控的看门程序](<https://the-decoder.com/perplexitys-new-monitor-api-turns-web-search-from-a-one-off-query-into-a-nonstop-watchdog/>)  
  Perplexity 推出 Monitor API，按计划持续监控网页并在相关变化出现时通过 webhook 唤醒应用和智能体。  
  The Decoder：AI News（RSS） · 2026-11-22 22:20

- [金融时报：戴尔、HPE 等 AI 服务器厂商交付前提价，涨幅最高达 45%](<https://www.ithome.com/1/030/713.htm>)  
  据金融时报报道，戴尔、慧与（HPE）、联想和超微电脑（Supermicro）等供应商在与买家签约数月后、交付前大幅上调搭载英伟达芯片的 AI 服务器价格，涨幅达 25% 至 45%。  
  IT之家·人工智能 · 2026-11-22 22:00

- [Behind the Curtain — AI 2027: The reckoning](<https://www.axios.com/2026/11/22/behind-the-curtain-ai-2027-the-reckoning>)  
  We've talked to more than 50 leaders in government, AI, business and cyber — from let-'er-rip AI accelerationists to…  
  Axios · 2026-11-22 21:36

- [美国扩大芯片管制、DeepSeek 融资股权结构曝光、腾讯 AI 投入成本揭晓](<https://www.recodechinaai.com/p/new-chip-restrictions-deepseeks-funding>)  
  美国将芯片出口管制扩展至海外数据中心租用算力，新规11月19日生效，并收紧对芯片制造与封装的要求。DeepSeek 本轮融资约 RMB105.5 亿、投后估值约 RMB615.5 亿，杭州辰岩成为运营公司股东。腾讯第三季度营收约 RMB207.3 亿、同比增长 8%，资本开支 RMB81.4 亿，WorkBuddy 日活超 1000 万、日均消耗超 100 万亿 tokens。  
  Recode China AI（RSS） · 2026-11-22 21:33

- [MiniMax 用内部模型自动化破解多个密码学前沿方案并刷新挑战赛纪录](<https://www.ithome.com/1/030/711.htm>)  
  MiniMax 宣布其研究团队利用最新内部模型对现代密码方案开展系统性自动化密码分析，发掘出多处此前未知的算法构造缺陷，并把多项论文理论攻击推进到秒级至分钟级可执行破解。  
  IT之家·人工智能 · 2026-11-22 21:23

- [MiniMax 内部模型攻破多个 NIST 候选算法与顶会密码方案，刷新破解纪录](<https://mp.weixin.qq.com/s/L81hPMQ66ddC260HwgePXw>)  
  MiniMax 研究团队用最新内部模型对现代密码方案开展自动化密码分析，首次实际攻破多个 NIST 竞赛中尚无已知实用攻击的候选算法。  
  公众号：MiniMax（稀宇科技） · 2026-11-22 21:06

- [METR 警告 AI 能力提升快于专家可靠评估新系统安全性的速度](<https://the-decoder.com/ai-is-getting-better-faster-than-experts-can-reliably-test-whether-new-systems-are-safe-metr-warns/>)  
  AI 研究机构 METR 发布 2026 年 11 月 AI 能力测量更新，警告现有公开数据不足以排除未来几年 AI 研究急剧加速的可能，可能使人类无法有效理解和应对新 AI 系统的灾难性风险。  
  The Decoder：AI News（RSS） · 2026-11-22 21:00

- [The Verge：vibe coding 正席卷各类硬件改装](<https://www.theverge.com/column/1039139/vibe-coding-gadgets-tv-camera>)  
  David Pierce 在 The Stepback 专栏中梳理 vibe coding 改装硬件的趋势：只需提示 Claude Code 或 Codex，非开发者也能给电视去广告、给相机加固件功能、给游戏机加特性。印度开发者 Gathin 的 CleanYourTV 成为 GitHub 热门仓库；行业则以更强 DRM 和法律手段反制，作者建议只在可承受损失的设备上尝试并勤做备份。  
  The Verge：AI（RSS） · 2026-11-22 21:00

- [Dragos研究揭示低价AI推理服务商窃取密钥并窥探用户请求](<https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/>)  
  Dragos安全研究人员在2026年7月至11月期间向AI服务商发送约200万条含假凭证的请求，发现至少三家服务商遭入侵，攻击者窃取数百个AWS密钥并在数小时内试用、搜索S3存储，部分攻击者还使用了AI攻击工具ARTEX。研究还发现，部分市场转售商无需利用漏洞即可读取客户请求，仅需以最低价上架模型并开启日志记录。隐私设置如“零数据保留”（ZDR）常被忽视。OpenRouter随后从平台移除三家服务商并撤销125个端点的ZDR批准，同时邮件通知受影响用户。受影响服务商包括Novita、Phala和Together，已…  
  The Decoder：AI News（RSS） · 2026-11-22 20:07

- [开发者将微型 Transformer 模型 Tiny 2.1 塞进软盘，让 486 老电脑也能用上 AI](<https://www.ithome.com/1/030/699.htm>)  
  开发者 WollyMonjac 用 Turbo C 2.0 编写了微型问答 Transformer 模型 Tiny 2.1，可让运行 DOS 的 486DX 和 Pentium 老电脑使用 AI。该模型参数量 36.7 万个，采用 4 层网络、隐藏维度 96 和 8 位量化，总大小约 380 KB，需约 540 KB 可用常规内存。软件以 MIT 许可证发布，附带训练文件夹供用户自行补充数据。  
  IT之家·人工智能 · 2026-11-22 19:24

- [纽约音乐厅 Domino 官网宣传“Human Made”却被发现满是 AI 生成痕迹](<https://www.ithome.com/1/030/696.htm>)  
  IT之家报道，纽约音乐厅 Domino 官网使用 AI 生成图片，出现虚构的 The Strokes 演唱会门票、文字模糊和拼写错误，页面中央却放着写有“Human Made”的明信片。Domino 代表回应称 AI 只是过渡工具，已换成完全由人类制作的网站，并强调场馆核心理念是庆祝人类亲手创造的事物。  
  IT之家·人工智能 · 2026-11-22 19:13

- [Lean 与 Mathlib 社区确认 Levent Alpöge 黎曼猜想证明正确](<https://the-decoder.com/lean-and-mathlib-community-officially-confirms-levent-alpoges-proof-of-the-riemann-hypothesis-is-correct/>)  
  Lean 与 Mathlib 社区发表声明，确认斯坦福数学家 Levent Alpöge 的黎曼猜想证明正确。Alpöge 于 2026 年 11 月 20 日以 1700 万行 Lean 代码发布该证明，数十人独立运行得到相同结果，且验证程序被设计为可证明不会接受有缺陷的证明。  
  The Decoder：AI News（RSS） · 2026-11-22 19:08

[返回面板](../README.md) · [上一页](all-8.md) · [下一页](all-10.md) · 第 9 / 17 页
