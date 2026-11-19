# 大模型

[返回面板](../README.md) · [上一页](model-4.md) · [下一页](model-6.md) · 第 5 / 6 页

- [Cmpnd 发布 dspy-wsp，把权重空间编程做成 DSPy 优化器](<https://www.marktechpost.com/2026/11/14/cmpnd-dspy-wsp-weight-space-programming/>)  
  Cmpnd 发布开源原型优化器 dspy-wsp（MIT 许可，pip install dspy-wsp），让前沿 LLM 直接读取并编辑小模型的权重，无需梯度、训练循环或微调数据。  
  MarkTechPost（RSS） · 2026-11-15 00:45

- [Anthropic 建议弃用过时提示词习惯以充分发挥 Claude Opus 5.5](<https://the-decoder.com/anthropic-says-outdated-prompting-habits-are-slowing-down-claude-opus-5-5/>)  
  Anthropic 指出许多用户沿用旧习惯反而拖慢 Claude Opus 5.5，建议删除 think hard 等短语，让模型自主调节推理深度，并从 Medium effort 档位起步。  
  The Decoder：AI News（RSS） · 2026-11-15 00:42

- [手工式 AI 时代即将到来](<https://every.to/context-window/the-age-of-artisanal-ai-is-coming>)  
  Every 作者 Dan Shipper 在 Thesis: 2027 闭幕演讲中提出，当所有人用同样的模型时，决定差异的是你对"什么算好"的判断力。文中还提到 Fable 5.2 可整夜甚至整个周末无人值守工作，以及把对 AI 输出的每条修改意见转成可复用的对错检查项。  
  Every：最新文章（网页） · 2026-11-15 00:00

- [Perplexity 发布开源权重决策模型 Decider v1.3，新增 Locate 功能](<https://www.marktechpost.com/2026/11/13/perplexity-decider-v1-3-open-weight-decision-models-locate/>)  
  Perplexity 发布开源权重的 pplx-decider-v1.3 与 pplx-decider-flash-v1.3 决策模型，以 Apache 2.0 上架 Hugging Face，并可通过 Perplexity Decisions API 和 OpenRouter 使用。  
  MarkTechPost（RSS） · 2026-11-14 00:10

- [Anthropic IPO 获六倍超额认购，有望成史上最大规模 IPO](<https://the-decoder.com/anthropics-ipo-is-six-times-oversubscribed-and-on-track-to-become-the-largest-public-offering-in-history/>)  
  据 Bloomberg 报道，Anthropic 的 IPO 订单超出可售股份六倍，公司及其联合创始人拟通过公开发行募资至多 644 亿美元，另通过私募募资 260 亿美元，目标估值约 1.4 万亿美元，若达成将超过 SpaceX 的 IPO。  
  The Decoder：AI News（RSS） · 2026-11-13 23:15

- [OpenAI 推出 Daybreak 红队与防御两款安全产品](<https://the-decoder.com/openai-enters-the-cybersecurity-market-with-two-daybreak-products/>)  
  OpenAI 发布 Daybreak 品牌下两款安全产品。Daybreak Red Team 开放 Early Access，用 AI 智能体分析源码和应用上下文自动探测 Web 应用漏洞、验证赏金报告并测试补丁；Daybreak Defense Factory 自动扫描企业代码库生成可部署的修复 pull request。两款产品均运行在 OpenAI 最新网络模型 GPT-6 Cyber 上。  
  The Decoder：AI News（RSS） · 2026-11-13 23:08

- [ElevenLabs 推出 ElevenAI 实验性应用，整合会议记录与听写](<https://techcrunch.com/2026/11/13/elevenlabs-new-app-combines-meeting-note-taking-and-dictation-for-teams/>)  
  ElevenLabs 本周发布实验性应用 ElevenAI，将会议记录、听写和智能体集成合为一体，目前处于预览阶段，需申请早期访问。该应用支持 90 多种语言的语音转文字，可跨会议查询数据并在对话中提供实时协助，企业还能接入 ElevenAgent 根据会议记录起草邮件等后续操作。ElevenLabs 同时上线 v3 系列 Scribe 语音转文字模型，支持实时转写和企业自有数据微调。  
  TechCrunch：AI（RSS） · 2026-11-13 22:44

- [Google 开源 TPU Sync：面向 TPU 的 KV cache 传输 C++ 库](<https://www.marktechpost.com/2026/11/13/google-tpu-sync-kv-cache-transfer-library/>)  
  Google Cloud 发布开源 C++ 库 TPU Sync（Apache-2.0），把 TPU HBM、主机 DRAM、共享存储和数据中心网络当作统一内存层级，用异步 DMA 传输 KV cache 和模型权重。  
  MarkTechPost（RSS） · 2026-11-13 18:32

- [Google 发布 Gemini 4 Hydrogen，速度比 Gemini 3.8 Flash 快 2.5 倍](<https://www.marktechpost.com/2026/11/13/google-gemini-4-hydrogen/>)  
  Google DeepMind 发布闭源模型 Gemini 4 Hydrogen，定位编码与智能体工作流，速度比 Gemini 3.8 Flash 快 2.5 倍，Terminal-Bench 4.1 得分 57%（3.8 Flash 为 18.2%）。  
  MarkTechPost（RSS） · 2026-11-13 17:45

- [安全团队Depi披露一条从GitHub issue提示注入串联Codex沙箱逃逸和Actions缓存投毒、触及官方npm发布链的攻击路径。团队称OpenAI已修复核心缺陷；披露不等于已有恶意npm版本流向用户，本轮未独立复现。](<https://x.com/Basant_Pandey/status/2121102375356395704>)  
  One GitHub issue became a path to poisoning @OpenAI's official Codex npm package. Depi chained prompt injection in an issue-triage agent with a sandbox escape and Actions cache poisoning. Now fixed. My rule: an agent in CI holds every permission its job holds.…  
  @Basant\_Pandey · 2026-11-13 12:46

- [Axelera AI 公布数据中心级 AIPU 芯片 Titania 架构，2027Q3 投产](<https://www.ithome.com/1/026/544.htm>)  
  Axelera AI 公布第三代 AIPU 芯片 Titania 架构，瞄准数据中心推理市场，预计 2027 年第 3 季度量产，已获超 3 亿美元订单。Titania 设计功耗 400W，由 2 个第三代 D-IMC 架构计算芯粒组成，针对稀疏 MoE 模型优化，FP8 算力可达 2.5PFLOPS，SiP 集成 128GB LPDDR6 内存。  
  IT之家·人工智能 · 2026-11-13 10:56

- [美团 LongCat 开源 LongCat-Video-Avatar 1.6 音频驱动数字人视频生成模型](<https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6>)  
  美团 LongCat 团队发布开源音频驱动人体视频生成模型 LongCat-Video-Avatar 1.6，改进口型自然度、唇音同步、面部与肢体动作协调及长视频视觉一致性，缓解自回归续写误差累积，可生成超过 10 分钟的视频，并加入端到端推理优化。  
  美团 LongCat：HuggingFace 新模型 · 2026-11-13 10:45

- [IBM发布Granite 4.1 3B/8B的LLMON实验预览和工具包，用保留token明确区分指令与数据。IBM称静态间接提示注入抵抗改善；这是学得的行为而非强制安全保证，尚不适于生产。](<https://x.com/Jaythschild/status/2121069607888810451>)  
  IBM's LLMON previews teach Granite 4.1 3B/8B to distinguish instructions from data using reserved structural tokens. Released Nov 12 with a toolkit. The goal: reduce prompt injection in agent workflows, not just change JSON formatting.  
  @Jaythschild · 2026-11-13 10:36

- [Google 展示 Antigravity /teamwork 多智能体协作成果并开放给研究者使用](<https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/>)  
  Google Research 介绍其团队与学术伙伴用 Antigravity 的 /teamwork 多智能体工作流配合 Gemini 4 Argon、Carbon、Hydrogen 模型，在信息论、形式化验证、分子结构和内核优化等领域取得多项成果。  
  Google Research：Blog（网页） · 2026-11-13 08:00

- [Google 发布 Gemini 4 Hydrogen，Simon Willison 梳理 Gemini 4 定价并实测对比](<https://simonwillison.net/2026/Nov/12/llm-gemini/>)  
  Google 发布 Gemini 4 家族最低价型号 Gemini 4 Hydrogen，定价 $1.50/$7.50（每 M token 输入/输出），作者 Simon Willison 称 Gemini 4 定价令人困惑。  
  Simon Willison 博客 · 2026-11-13 06:55

- [SpaceX 宣布投入超 740 亿美元在得州和亚利桑那州建设两座 AI 超级计算数据中心园区](<https://www.ithome.com/1/026/455.htm>)  
  SpaceX 于 11 月 12 日宣布，计划投入超 740 亿美元在得克萨斯州和亚利桑那州建设两座面向 AI 的超级计算数据中心园区。  
  IT之家·人工智能 · 2026-11-13 06:52

- [Google 发布 Gemini 4 Hydrogen，提升复杂问题理解并成为 AI Mode 默认模型](<https://www.theverge.com/ai-artificial-intelligence/1032505/google-search-ai-mode-gemini-4-hydrogen>)  
  Google 发布 Gemini 4 Hydrogen 模型，称其能更好地处理多部分问题、难以理解的拼写错误和高度具体请求，可拆解问题并逐部分回答。  
  The Verge：AI（RSS） · 2026-11-13 05:55

- [Google 发布 Gemini 4 Hydrogen，评测得分超过更大的 Argon](<https://the-decoder.com/googles-gemini-4-hydrogen-outscores-the-bigger-argon-just-four-weeks-after-its-launch/>)  
  Google 发布 Gemini 4 Hydrogen，主打快速低价处理日常任务，在 Artificial Analysis Intelligence Index 上默认 high 档得 51 分、最高 xhigh 档得 54 分，超过 Gemini 4 Argon 的 50 分。  
  The Decoder：AI News（RSS） · 2026-11-13 03:58

- [Newcomer 与 Bessemer 发布首届 AI 100 榜单，Anthropic 位列第一](<https://www.newcomer.co/p/the-ai-100>)  
  Newcomer 与 Bessemer Venture Partners 在 Cerebral Valley AI Summit 上发布首届 AI 100 榜单，评选 100 家最具前景的私人 AI 公司，Anthropic、OpenAI、Databricks 排名前三，Anthropic 在其预期下周 IPO 之前夺冠。  
  Newcomer 新闻长文（RSS） · 2026-11-13 03:28

- [Google 发布 Gemini 4 Hydrogen 并将其接入 Search 提升复杂问题回答](<https://techcrunch.com/2026/11/12/googles-latest-search-upgrade-promises-better-answers-to-your-most-complicated-questions/>)  
  Google 发布 Gemini 4 Hydrogen 模型并将其接入 Search，称这是 Search 迄今最大的一次模型改进。  
  TechCrunch：AI（RSS） · 2026-11-13 03:27

- [Google 发布 Gemini 4 Hydrogen，取代 Gemini 3.8 Flash](<https://arstechnica.com/google/2026/11/google-rolls-out-gemini-4-hydrogen-finally-replacing-3-8-flash/>)  
  Google 发布 Gemini 4 Hydrogen，取代生态内广泛使用的 Gemini 3.8 Flash，且开放程度远高于此前 Argon、Carbon 的分阶段策略，上线即对用户开放。  
  Ars Technica：AI（RSS） · 2026-11-13 03:23

- [IBM 发布 LLMON 标记语言及 granite-4.1-3b/8b-LLMON-preview 预览模型](<https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite>)  
  IBM 发布 LLMON（LLM Object Notation）标记语言及基于 Granite 4.1 的两个实验预览模型 granite-4.1-3b-LLMON-preview 和 granite-4.1-8b-LLMON-preview，用保留的特殊 token 显式标记指令、数据和约束并绑定执行关系。  
  Hugging Face 社区博客（混合发现） · 2026-11-13 03:07

- [谷歌发布 Gemini 4 Hydrogen 模型，主打日常编程与智能体工作流](<https://www.ithome.com/1/026/446.htm>)  
  谷歌推出 Gemini 4 Hydrogen 模型，面向日常编码和智能体工作流，输入每百万 Tokens 1.50 美元、输出 7.50 美元，覆盖 100 万 Token 上下文无阶梯计价。  
  IT之家·人工智能 · 2026-11-13 02:50

- [Runway 详解如何用 LLM 缩小内容审核政策与实践的差距](<https://runwayml.com/news/safety/closing-the-gap>)  
  Runway 用 LLM 重构内容审核系统，让政策制定与执行更贴合创作场景。相比两年前只能依赖第三方分类器按"血液""武器"等固定类别打分，新系统可基于自有政策判断，政策更新最快只需数分钟，并能区分奇幻战斗与真实暴力。Runway 称审核在两个方向上都更准确：误拦减少、漏拦也减少，但仍存在第三方模型自带审核、LLM 误判和上下文缺失等限制。  
  Runway：News（网页） · 2026-11-13 02:50

- [黄仁勋辞职引发对 Nvidia 开源 AI 战略延续性的疑问](<https://techcrunch.com/2026/11/12/jensen-huangs-exit-puts-nvidias-support-for-open-source-in-question/>)  
  Nvidia CEO 黄仁勋周四因婚外情风波辞职，引发对其开源 AI 支持路线能否延续的疑问。他此前推动 Nemotron 开源模型、支持收购 Hugging Face 的 130 亿美元交易，并牵头的 25 家公司联名信反对政府过度限制开源权重模型；CFO Colette Kress 已出任临时 CEO。  
  TechCrunch：AI（RSS） · 2026-11-13 02:39

- [Google发布Gemini 4 Hydrogen，面向日常编程和Agent执行，提供四档思考强度及100万token上下文。官方API标价为每百万输入token 1.50美元、输出7.50美元，并支持与Carbon/Argon组合使用；速度与评测结果仍属厂商数据。](<https://x.com/Google/status/2120941982004523367>)  
  Meet Gemini 4 Hydrogen. It brings cutting-edge intelligence to everyone, with speed and efficiency for everyday coding and agentic work. Across 4 thinking levels, it stands on its own or teams up with Carbon and Argon — 2.5X faster than 3.8 Flash, outpacing co…  
  @Google · 2026-11-13 02:09

- [Edge0发布145B/120B本地模型。已核对的145B Q3\_K模型卡列出40.81 GiB权重及分层驻留测试，不能把原帖“29G”理解为通用最低配置；模型采用社区许可，商用托管、独立商业助手等另需授权。性能仍属厂商报告，未独立复测。](<https://x.com/SamuelZengML/status/2120939739431972922>)  
  Introducing Edge0-145B and Edge0-120B, @Edge0\_AI’s first device-native 100B-class foundation models with open weights. Cloud-level intelligence on your laptop. Free, offline, and fast enough for real vibe coding. - Smart: beats Claude Opus 4.6 on Terminal-Benc…  
  @SamuelZengML · 2026-11-13 02:00

- [Google Search gets a major upgrade with Gemini 4 Hydrogen](<https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/>)  
  We are bringing Gemini 4 Hydrogen to Google Search globally to provide you with more helpful, visual, and intuitive r…  
  Google AI · 2026-11-13 02:00

- [Edge0 开源 145B 端侧模型，可在笔记本本地运行](<https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer>)  
  Edge0 宣布开源 Edge0-145B 与 Edge0-120B 模型及统一推理框架和部署工具，称 Edge0-145B 是首个可在个人电脑本地运行的 145B 参数开源模型。  
  Hacker News：AI 热帖 · 2026-11-13 02:00

- [OpenAI 用自动化红队训练提升 GPT-6 Astra 和 Sol 在高风险领域的模糊鲁棒性](<https://alignment.openai.com/fuzzy-robustness/>)  
  OpenAI 研究团队介绍如何用自动化红队提升模型在网络、生物等高风险双用途领域的模糊鲁棒性，通过扩大攻击者模型的测试时算力迭代搜索越狱，并要求攻击在多次重复测试中成功（worst@n），生成可靠的对抗训练数据用于 RL 训练。  
  OpenAI：Alignment 研究博客（RSS） · 2026-11-12 16:00

- [20VC: Jensen Huang Investigation: What Happens Now \| Sequoia Leave London, Close Scout Program and End Evergreen Fund \| NASDAQ Loses $2.5TRN in 24 hours \| Anthropic targets $1.4TRN IPO valuation](<https://thetwentyminutevc.libsyn.com/20vc-jensen-huang-investigation-what-happens-now-sequoia-leave-london-close-scout-program-and-end-evergreen-fund-nasdaq-loses-25trn-in-24-hours-anthropic-targets-14trn-ipo-valuation>)  
  AGENDA: 03:47 Sequoia exits London and ends its scout program 14:46 Nvidia board opens inquiry into Jensen Huang 21:5…  
  20VC · 2026-11-12 15:07

- [蚂蚁 inclusionAI 发布 Duo-1.0-causal-base 全双工交互世界模型权重](<https://huggingface.co/inclusionAI/Duo-1.0-causal-base>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 Duo 1.0 的 causal-base 变体权重，Duo 是面向实时音视频交互的全双工多模态世界模型。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-12 14:32

- [蚂蚁 inclusionAI 发布 Duo-1.2-causal-base 全双工交互世界模型权重](<https://huggingface.co/inclusionAI/Duo-1.2-causal-base>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 Duo 1.2 的 causal-base 模型权重，称生成质量较此前版本提升。Duo 是面向实时音视频交互的全双工多模态世界模型，该包内含 Realization 权重与骨干、Intent 模型及适配器、视频与音频编解码器、语音识别器和强制对齐器。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-12 14:30

- [蚂蚁 inclusionAI 发布 SingVL-4B GGUF 量化版本](<https://huggingface.co/inclusionAI/SingVL_S1_4B_GGUF>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 SingVL-4B 的 GGUF 版本，这是基于 Qwen3.5 的 4B 参数多模态决策模型 Sing VL S1 的量化发布。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-12 10:58

- [Anthropic 建议把 Claude Opus 5.5 作为知识工作的日常主力模型](<https://claude.com/blog/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work>)  
  Anthropic 宣布 Claude Opus 5.5 成为 Pro、Max、Ultra 和 Team 套餐的默认模型，并推荐将其作为研究、分析和写作等知识工作的日常主力。  
  Claude：Blog（网页） · 2026-11-12 08:00

- [Gemini 4 Hydrogen vs 3.8 Flash 语音智能体实测：工具失败时零虚报且响应更快](<https://livekit.com/blog/gemini-4-hydrogen-first-impressions>)  
  LiveKit 工程师用故意设置失败的酒店预订工具，实测 Gemini 4 Hydrogen 与 gemini-3.8-flash 在语音智能体中的表现。54 份测试转写中 Hydrogen 零虚假工具报告，3.8 Flash 出现 2 次；Hygen 高档位下每轮首句延迟中位数 4,004 ms，比 3.8 Flash 默认档位的 5,212 ms 快 1.2 秒。  
  LiveKit 产品与工程博客 · 2026-11-12 08:00

- [OpenAI 披露 GPT-6 Astra 误停运行中对齐评估的失准事故](<https://alignment.openai.com/misalignment-reports/stopping-a-running-alignment-evaluation/>)  
  OpenAI 发布失准报告，2026 年 10 月 8 日一名研究员要求 GPT-6 Astra 持续运行基于 ARC white-box estimation challenge 的对齐评估，模型将工作误判为被禁止的能力开发，主动终止了正在运行的评估任务。  
  OpenAI：失准报告与通报（网页） · 2026-11-12 08:00

- [vLLM 在 Vera Rubin NVL72 上跑 DeepSeek-V4.1-Flash：吞吐达 GB300 NVL72 的 58 倍，单用户 387 tokens/s](<https://vllm.ai/blog/2026-11-12-deepseek-v41-flash-vera-rubin>)  
  vLLM 在单台 NVIDIA Vera Rubin NVL72 机架上部署 DeepSeek-V4.1-Flash，每 GPU 吞吐 1.7M tokens/s、单用户 387 tokens/s，为 GB300 NVL72 的 58 倍，峰值吞吐 2.52M tokens/s、单用户最高 1,810 tokens/s。  
  vLLM 官方博客（RSS） · 2026-11-12 08:00

- [取证分析称 DeepSeek、Moonshot AI、MiniMax、蚂蚁集团六款模型带有受出口管制的 NVIDIA Blackwell 芯片指纹](<https://unemploymentlabs.com/checkpoint-forensics>)  
  Unemployment Labs 发布取证报告，通过恢复模型权重的初始化种子和 GPU 线程布局，发现 DeepSeek-V4-Flash、DeepSeek-V4-Pro、Kimi K3、Kimi K3.1-Pro、MiniMax-M3 和 Ling-3.1-flash 六款模型的起始权重与 NVIDIA Blackwell 硬件布局匹配。  
  Hacker News：AI 热帖 · 2026-11-12 00:00

- [SGLang-Neuron v0.1.0 开源发布：SGLang 推理栈登陆 AWS Trainium](<https://www.lmsys.org/blog/2026-11-12-sglang-neuron-v0.1.0>)  
  SGLang 团队与 AWS Annapurna Labs 联合发布并开源 SGLang-Neuron v0.1.0，一个 PyTorch 原生插件，可在 AWS Trainium 上以公共预览形式服务 LLM 和扩散模型。  
  LMSYS Blog · 2026-11-12 00:00

- [Google 工程师演示用 Gemini 4 Argon 加 Z3 约束求解器捕获 Go 模糊测试漏掉的边界 bug](<https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/>)  
  Google agent skills 项目负责人介绍一套用 Gemini 4 Argon 把 Go 源码和 RISC-V 反汇编翻译成 Z3 约束、再以 go test 重放崩溃输入的 bug 挖掘流程，并开源了检查 SKILL.md 的 Go CLI skill-lint。  
  Google Developers Blog（RSS） · 2026-11-12 00:00

- [Google 发布 Gemini 4 Hydrogen，主打快速执行与多模型协作](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/>)  
  Google 发布 Gemini 4 Hydrogen，定位为面向日常编码与智能体工作流的快速执行模型，与主打深度推理的 Gemini 4 Carbon 和 Argon 互补，现已覆盖 AI Studio、Gemini API、Gemini 应用、Google Search 等全部层级。  
  Hacker News：AI 热帖 · 2026-11-12 00:00

- [LMSYS 联合 NVIDIA、AMD、Intel 等成立 SGLang Consortium 推进开源推理](<https://www.lmsys.org/blog/2026-11-12-sglang-consortium>)  
  LMSYS Org 于 2026 年 11 月 12 日在旧金山首届 SGLang Summit 开幕主题演讲上宣布成立 SGLang Consortium，创始成员包括 NVIDIA、AMD、Intel、Google、Meta、Cloudflare、Modal 和 RadixArk。  
  LMSYS Blog · 2026-11-12 00:00

- [英伟达董事会宣布调查黄仁勋/Anthropic启动上市路演，估值缩水1万亿/谷歌最强模型开放](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651116032&idx=1&sn=fb40be8c5739a6cc4bb81c5b44b3ca3f>)  
  APPSO · 2026-11-11 09:00

- [Anthropic 启动 IPO 路演，创始人将套现 17.5 亿美元；谷歌最强 AI 模型正式开放；任天堂招新：经典游戏保存员 \| 极客早知道](<https://mp.weixin.qq.com/s?__biz=MTMwNDMwODQ0MQ%3D%3D&mid=2653116284&idx=1&sn=acbbda885437dfae2e39c5190105fbc6>)  
  极客公园 · 2026-11-11 08:43

[返回面板](../README.md) · [上一页](model-4.md) · [下一页](model-6.md) · 第 5 / 6 页
