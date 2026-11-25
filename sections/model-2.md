# 大模型

[返回面板](../README.md) · [上一页](model.md) · [下一页](model-3.md) · 第 2 / 3 页

- [商汤发布并开源 SenseNova U1.6 原生多模态模型，支持原生图像自修正](<https://www.ithome.com/1/031/465.htm>)  
  商汤科技发布并开源 SenseNova U1.6 原生多模态模型，首次为该系列 8B 开源模型带来原生图像自修正，可先生成首稿再对照提示检查并生成修正版。模型加强了透视文字与艺术字等复杂文字生成，U1.6 Lite 在 UltraTextBench 密集信息图测试中得分从 86.04 升至开启自修正后的 92.28，内部评测美学得分较 U1.5 Lite 高约 10%。  
  IT之家·人工智能 · 2026-11-24 12:58

- [Latent Space AI 新闻日报：Nvidia 恢复黄仁勋职务，OpenAI 公开预训练困惑度曲线并联合 Microsoft 提议共同发展上限](<https://latent.space/p/ainews-jensen-is-back-and-openai-shows-its-pretraining-curve-joined-by-microsoft/>)  
  Latent Space 发布 AI 新闻日报，两条主线为 Nvidia 宣布黄仁勋回归 CEO、总裁及董事职位，董事会全票通过并称获得美国政府高层意见输入，股价上涨约 30%；OpenAI 首席科学家 Jakub Pachocki 公开基础模型对数困惑度曲线，并提出行业共同发展上限的提议，Microsoft 的 Mustafa Suleyman 联署加入并在 OpenAI 评测集上报告 MAI-2 Base 得分为 0.819。  
  Latent Space（RSS） · 2026-11-24 12:14

- [Clay helps sales teams win with Codex and ChatGPT](<https://openai.com/business/customer-stories/clay-plugins-openai>)  
  ChatGPT and Codex integrations help Clay’s users research deals and turn data into go-to-market plays, with GPT-6 mod…  
  OpenAI · 2026-11-24 08:00

- [vLLM 推出 vLLM-GR：面向生成式推荐的高效推理框架](<https://vllm.ai/blog/2026-11-24-vllm-gr-announcement>)  
  vLLM 发布开源推理与服务框架 vLLM-GR，基于 vLLM 为生成式推荐模型提供 beam search 支持，可在单次请求中探索多个候选 ID。该框架复用 vLLM 的模型执行、调度与 paged KV cache，支持 OneRec-1.7B、HSTU、OneTrans 等模型，并可在 NVIDIA GPU 与 Ascend NPU 上从离线评估迁移到在线服务。  
  vLLM 官方博客（RSS） · 2026-11-24 08:00

- [vLLM Day-0 支持 ERNIE 5.5 Flash Preview，通过插件实现部署与端到端推理加速](<https://vllm.ai/blog/2026-11-24-ernie-5-5-flash-preview>)  
  百度 ERNIE 团队与 vLLM 合作，为 ERNIE 5.5 Flash Preview 提供 Day-0 支持。该模型为稀疏 MoE 架构，总参数 280B、每 token 激活 14B，支持 1M token 上下文、思考后再回答以及工具调用的长程 Agent 任务。  
  vLLM 官方博客（RSS） · 2026-11-24 08:00

- [METR 解读 OpenAI 预训练损失加速：2026 年初以来下降速度约为此前 7 倍](<https://metr.org/blog/2026-11-24-interpreting-a-recent-acceleration-in-pretraining-loss/>)  
  METR 分析 OpenAI 公布的 13 个模型在固定保留数据集上的 log-perplexity，发现 2026 年初以来预训练损失下降速度约为 2022–2025 年的 7 倍；按当前速度，GPT-3.5 到 GPT-4.1 花了三年的损失降幅约六个半月就能走完。  
  METR：Blog（网页） · 2026-11-24 00:00

- [Google Gemini 4 Neon 实测：好用但需“牵短绳”](<https://every.to/context-window/google-s-neon-is-great-on-a-short-leash>)  
  Every 团队实测 Google Gemini 4 Neon，认为它是 Google 最好的协作模型，但前提是用户全程保持监督。团队内部对其是否名副其实仍有分歧。同期还介绍了营销负责人 Douglas Brundage 通过指挥 Claude 制作 Every 首支 AI 广告的流程。  
  Every：最新文章（网页） · 2026-11-24 00:00

- [NVIDIA 教程：用 Hugging Face Diffusers 在 12 GB 显存 GPU 上本地运行 Cosmos 3 Nano](<https://developer.nvidia.com/blog/how-to-run-nvidia-cosmos-3-on-local-ai-devices-using-hugging-face-diffusers/>)  
  NVIDIA 技术博客发布教程，讲解如何通过权重流式存储，在仅 12 GB VRAM 的 GPU 上本地运行 NVIDIA Cosmos 3 Nano 视频生成模型，将大部分模型权重存于系统内存并按需传至 GPU 计算。  
  NVIDIA Technical Blog：Agentic AI / Generative AI · 2026-11-24 00:00

- [Transluce 推出 PosteriorBench：评测语言模型行为后验采样方法](<https://transluce.org/posteriorbench>)  
  Transluce 发布 PosteriorBench，用于比较语言模型行为后验采样方法的计算成本与对真实后验的逼近程度。基准基于 Qwen3.5-0.8B 采样十亿条回复构建 21 个提示词-行为任务，行为概率覆盖 10⁻⁵ 至 10⁻¹。结果显示所评估方法均无法同时做到高效与忠实：免训练方法成本低但 KL 散度居高不下，训练方法需付出高昂成本才能见效。  
  Transluce（网页） · 2026-11-24 00:00

- [Goodfire 用可解释性改进 BioReason-Pro 2 生物推理模型并用湿实验验证假设](<https://www.goodfire.com/research/building-stronger-biological-reasoning-models>)  
  Goodfire 与 NVIDIA、Arc Institute 合作开发 BioReason-Pro 2，以 Qwen3.5-9B 为骨干，用可解释性发现原模型过度依赖文本标注、蛋白质与文本嵌入尺度不匹配，据此移除训练输入中的 InterPro 标注、细化推理轨迹并将 ESM3 嵌入重新缩放。  
  Goodfire Research（网页） · 2026-11-24 00:00

- [Fireworks AI 分析 GPT-6 Astra 等 25 个模型在 8 项 SII 基准上的隐藏成本](<https://fireworks.ai/blog/hidden-cost-of-one-default-ai-model/>)  
  Fireworks AI 分析 1,259 个 SII 基准任务后指出，仅用 GPT-6 Astra 一个默认模型代价很高：其他模型能补上它未完成的 255 个任务，且在它完成的任务中 93% 可由其他模型以更低单次推理成本完成。  
  Fireworks AI（网页） · 2026-11-24 00:00

- [Richpanel helps companies automate 50% of support in 30 days](<https://openai.com/business/customer-stories/richpanel-ai-customer-support>)  
  Richpanel uses GPT-6 Astra and GPT-6.1 Sol to equip its AI support agents with tools and procedures, and GPT-6 Luna f…  
  OpenAI · 2026-11-23 16:00

- [E259｜机械神教与反人性策略：华尔街量化巨头的AI之路](<https://sv101.fireside.fm/273>)  
  华尔街最低调、最赚钱的那一批量化交易巨头，也是这一轮AI浪潮里囤算力、抢人才、投资AI实验室最凶猛的那一批。 他们不靠市场趋势赚钱，而是靠波动和速度在毫秒间争夺价差。和大家印象中西装革履的金融人士并不一样，这些公司里的人可能是一群数学…  
  硅谷101 · 2026-11-23 07:00

- [NVIDIA 发布车载推理 VLA 模型 Alpamayo 2 Edge，面向 DRIVE AGX Thor](<https://www.marktechpost.com/2026/11/22/nvidia-alpamayo-2-edge-2b-reasoning-vla-drive-thor/>)  
  NVIDIA 发布 2B 级推理视觉-语言-动作模型 Alpamayo 2 Edge，可在车内 DRIVE AGX Thor 上做轨迹规划与因果解释，采用 OpenMDW-1.1 许可开源权重。  
  MarkTechPost（RSS） · 2026-11-23 02:37

- [TechCrunch 访谈《Hyperscale》作者 Paris Marx：数据中心为何成为反科技浪潮的焦点](<https://techcrunch.com/2026/11/22/why-data-centers-are-at-the-center-of-the-big-tech-backlash/>)  
  TechCrunch 访谈记者 Paris Marx，谈其新书《Hyperscale》调查数据中心与生成式 AI 的社会影响。  
  TechCrunch：AI（RSS） · 2026-11-23 02:08

- [新实验：AI 编码智能体在模拟软件公司中完成不到十分之一的任务](<https://the-decoder.com/ai-coding-agents-ace-isolated-tests-but-complete-fewer-than-one-in-ten-tasks-in-a-simulated-workplace/>)  
  一项新实验首次让 AI 编码智能体在模拟软件公司中作为数字员工工作，环境包含同事、项目看板和聊天记录。结果显示即使 Claude Opus 5.5 和 GPT-6 Astra 也只完整完成不到十分之一的任务，而 SWE-bench 等标准基准已接近饱和。  
  The Decoder：AI News（RSS） · 2026-11-22 23:15

- [Oracle 称已筹集履行 OpenAI 合同全部所需资金](<https://www.ithome.com/1/030/715.htm>)  
  Oracle 11 月 20 日表示已在本月初筹集到履行与 OpenAI 交易的全部所需租金，与供应商的进一步私下讨论仅为补充选项。其得州 Abilene 园区已用于 GPT-6 Astra 训练并接近完工，下一个 GW 级项目 Shackelford 已获全部许可，NVIDIA Vera Rubin 机架预计未来几周内交付完成。  
  IT之家·人工智能 · 2026-11-22 22:24

- [美国扩大芯片管制、DeepSeek 融资股权结构曝光、腾讯 AI 投入成本揭晓](<https://www.recodechinaai.com/p/new-chip-restrictions-deepseeks-funding>)  
  美国将芯片出口管制扩展至海外数据中心租用算力，新规11月19日生效，并收紧对芯片制造与封装的要求。DeepSeek 本轮融资约 RMB105.5 亿、投后估值约 RMB615.5 亿，杭州辰岩成为运营公司股东。腾讯第三季度营收约 RMB207.3 亿、同比增长 8%，资本开支 RMB81.4 亿，WorkBuddy 日活超 1000 万、日均消耗超 100 万亿 tokens。  
  Recode China AI（RSS） · 2026-11-22 21:33

- [Dragos研究揭示低价AI推理服务商窃取密钥并窥探用户请求](<https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/>)  
  Dragos安全研究人员在2026年7月至11月期间向AI服务商发送约200万条含假凭证的请求，发现至少三家服务商遭入侵，攻击者窃取数百个AWS密钥并在数小时内试用、搜索S3存储，部分攻击者还使用了AI攻击工具ARTEX。研究还发现，部分市场转售商无需利用漏洞即可读取客户请求，仅需以最低价上架模型并开启日志记录。隐私设置如“零数据保留”（ZDR）常被忽视。OpenRouter随后从平台移除三家服务商并撤销125个端点的ZDR批准，同时邮件通知受影响用户。受影响服务商包括Novita、Phala和Together，已…  
  The Decoder：AI News（RSS） · 2026-11-22 20:07

- [研究指AI数据中心碳排放堪比中等国家，Anthropic环境信息披露引关注](<https://www.bloodinthemachine.com/p/ai-is-becoming-a-disaster-for-the>)  
  在Anthropic完成IPO之际，有气候研究指出，美国大型数据中心的碳排放合计已相当于中等国家水平。哈佛大学团队在《自然·可持续性》发表的研究估算，2024年5月至2025年4月间403个数据中心年排放约2570万吨二氧化碳，占美国电力消耗近2%。澳大利亚气候研究员Ketan Joshi的报告进一步指出，AI行业全生命周期排放可能超过国际航空业，且Anthropic从未披露任何能源、排放或环境数据，并与OnePWR达成34亿美元、1.7吉瓦燃气发电设备采购协议。相关研究认为，数据中心自建燃气发电、制冷剂泄漏等因素…  
  Hacker News：AI 热帖 · 2026-11-22 18:32

- [Artificial Analysis 评测显示 GPT-6.2 Astra 和 Sol 回答更简短但透明度低于 Claude](<https://the-decoder.com/gpt-6-2-astra-and-sol-get-to-the-point-faster-but-score-lower-on-transparency-than-claude/>)  
  The Decoder 援引 Artificial Analysis 的 AA-PersonalityBench 评测，介绍 OpenAI GPT-6.2 Astra 和 Sol 的沟通风格变化。  
  The Decoder：AI News（RSS） · 2026-11-22 17:41

- [马斯克预警：AI 行业明年或面临严重资金短缺，营运资金缺口或达数千亿美元](<https://www.ithome.com/1/030/628.htm>)  
  马斯克在回复 Keras 创始人 François Chollet 时预警，AI 行业明年可能面临严重资金短缺，若从支付算力成本到设备稳定创收的时间累计推迟数月，仅营运资金就可能需额外投入数千亿美元。Chollet 此前指出 GPU 现货价格仍在上涨，HBM 和 DRAM 到 2029 年的产能基本已被订满，前沿模型训练算力约每 5 个月翻一番。  
  IT之家·人工智能 · 2026-11-22 16:47

- [蚂蚁 inclusionAI 开源 LingSante-3.1-flash-MXFP4 医疗 MoE 模型](<https://huggingface.co/inclusionAI/LingSante-3.1-flash-MXFP4>)  
  蚂蚁 inclusionAI 在 HuggingFace 发布 LingSante-3.1-flash-MXFP4，这是基于 LingSante-3.1-flash 的混合 MXFP4 量化开源权重模型，主模型约 560B 参数、每 token 激活约 25B，配置 262,144 token 上下文窗口。  
  蚂蚁 inclusionAI：HuggingFace 新模型 · 2026-11-22 11:19

- [群联展示内置 NPU 与 64GB 内存的智能固态硬盘，可直接运行 AI 模型](<https://www.ithome.com/1/030/524.htm>)  
  群联在 SC26 大会展示两款面向 AI 场景的企业级 SSD，其中一款内置 NPU 与 64GB 内存，带宽 130GB/s，可直接在硬盘上运行 PyTorch、vLLM、OpenVINO 和 llama.cpp 等框架。  
  IT之家·人工智能 · 2026-11-22 08:04

- [Nvidia 研究者称超大 AI 上下文窗口是死路](<https://the-decoder.com/nvidia-researchers-argue-huge-ai-context-windows-are-a-dead-end/>)  
  Nvidia 研究团队认为，模型上下文窗口一味扩大往往是过度且昂贵的做法，定期摘要加定向检索在多项测试中效果相当。GPT-4 于 2023 年 3 月发布时上下文为 8,192 tokens，如今 GPT 5.6 Sol 可处理约一百万 tokens，约为前者 120 倍。  
  The Decoder：AI News（RSS） · 2026-11-22 00:23

- [Sarvam AI 发布开源权重模型 Sarvam-105B-1711](<https://www.sarvam.ai/blogs/sarvam-105b-1711>)  
  Sarvam AI 发布开源权重模型 Sarvam-105B-1711，面向客户支持、语音智能体和智能体任务等高并发场景，在八个对话智能体基准上平均分从 3 月版本的 42.6 升至 73.9，混合价格从 $0.44 降至 $0.15 每百万 token，与 Gemini 3.5 Flash-Lite 的 74.0 相当但价格不足其五分之一。  
  Sarvam AI（网页） · 2026-11-22 00:00

- [20VC: The State of Compute: What Everyone Needs to Know \| Why Neo-Clouds are Great Businesses \| What Everyone Is Missing About GPU Prices? \| How AI Infrastructure Investors Will Win with Kush Bavaria, Co-Founder @ Ornn](<https://thetwentyminutevc.libsyn.com/20vc-the-state-of-compute-what-everyone-needs-to-know-why-neo-clouds-are-great-businesses-what-everyone-is-missing-about-gpu-prices-how-ai-infrastructure-investors-will-win-with-kush-bavaria-co-founder-ornn>)  
  Kush Bavaria is the Co-founder and CEO of Ornn, building the financial market for AI compute. Ornn helps companies pr…  
  20VC · 2026-11-21 22:50

- [Qwen4 Max 上线 Together AI，单次调用修复 Tornado 整仓 bug](<https://www.together.ai/blog/qwen4-max>)  
  Together AI 宣布阿里旗舰模型 Qwen4 Max 上线其 Serverless 推理平台（模型串 Qwen/Qwen4-Max），1M token 上下文，截至 2026 年 11 月 22 日 7 折。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Anthropic is public, now comes the hard part](<https://www.axios.com/2026/11/20/anthropic-public-shareholders>)  
  Data: FactSet; Chart: Matt Phillips/Axios With its IPO done and dusted, Anthropic's shareholders will be watching its…  
  Axios · 2026-11-20 20:10

- [Phoenix mayor walks fine line on AI boom](<https://www.axios.com/2026/11/20/phoenix-mayor-data-centers-ai-boom>)  
  Phoenix Mayor Kate Gallego wants more tech investment in her city — but on her terms, as data centers strain resource…  
  Axios · 2026-11-20 18:20

- [Hebbia sees improvements in financial research with GPT-6 Astra](<https://openai.com/business/customer-stories/hebbia>)  
  Hebbia tested GPT-6 Astra for financial research. Its prerelease evaluations found gains in source coverage, citation…  
  OpenAI · 2026-11-20 08:00

- [An Extraordinary Journey: Celebrating Anthropic’s IPO](<https://menlovc.com/perspective/an-extraordinary-journey-celebrating-anthropics-ipo/>)  
  What a special moment for Dario, Daniela, and the spectacular team at Anthropic. Congratulations\! In just over five y…  
  Menlo Ventures · 2026-11-20 00:50

- [20VC: Will Jensen Return to NVIDIA \| Anthropic Set for Largest IPO of All Time \| Kalshi, Mercor &amp; Fractile: Mega-Rounds Continue](<https://thetwentyminutevc.libsyn.com/20vc-will-jensen-return-to-nvidia-anthropic-set-for-largest-ipo-of-all-time-kalshi-mercor-fractile-mega-rounds-continue>)  
  AGENDA: 00:00 Nvidia's $600B Wipeout: Pressure Mounts for Jensen's Return 14:00 Anthropic's $1.4T IPO: A New Record f…  
  20VC · 2026-11-19 15:07

- [189: Geodesic顾全全：预训练有点“无聊”了，但用scaling改变AI制药才刚开始](<https://podcast.latepost.com/189>)  
  「The best model is yet to come, scaling continues.（最好的模型尚未到来，规模化仍在继续。）」 今年 6 月 ，顾全全发推宣告离开字节，推文的最后一句如此写道。 这句话串起了他在字节 3…  
  晚点聊 · 2026-11-19 08:00

- [Anthropic valued at over $1 trillion in historic IPO](<https://www.axios.com/2026/11/18/anthropic-ipo-1-trillion>)  
  Anthropic on Wednesday raised over $81 billion in a long-awaited IPO that valued the Claude maker at over $1 trillion…  
  Axios · 2026-11-19 06:16

- [⚡️Anthropic: Know Before You IPO — Tanay Jaipuria, Wing VC](<https://www.youtube.com/watch?v=wX8nDtGIfYA>)  
  Watch the full show on YouTube: https://www.youtube.com/watch?v=wX8nDtGIfYA  
  Latent Space · 2026-11-19 04:00

- [188: 黄仁勋闪电离职之后：英伟达、AI 基建、中美竞争和算力江湖](<https://podcast.latepost.com/188>)  
  「世间万物都与性有关，除了性本身。性关乎权力。」 2026 年 11 月 12 日，英伟达宣布，创始人兼 CEO 黄仁勋辞去公司总裁、首席执行官及董事职务，即刻生效。CFO Colette Kress 被任命为临时 CEO，董事会则启…  
  晚点聊 · 2026-11-15 12:15

- [20VC: Jensen Huang Investigation: What Happens Now \| Sequoia Leave London, Close Scout Program and End Evergreen Fund \| NASDAQ Loses $2.5TRN in 24 hours \| Anthropic targets $1.4TRN IPO valuation](<https://thetwentyminutevc.libsyn.com/20vc-jensen-huang-investigation-what-happens-now-sequoia-leave-london-close-scout-program-and-end-evergreen-fund-nasdaq-loses-25trn-in-24-hours-anthropic-targets-14trn-ipo-valuation>)  
  AGENDA: 03:47 Sequoia exits London and ends its scout program 14:46 Nvidia board opens inquiry into Jensen Huang 21:5…  
  20VC · 2026-11-12 15:07

- [英伟达董事会宣布调查黄仁勋/Anthropic启动上市路演，估值缩水1万亿/谷歌最强模型开放](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651116032&idx=1&sn=fb40be8c5739a6cc4bb81c5b44b3ca3f>)  
  APPSO · 2026-11-11 09:00

- [Anthropic 启动 IPO 路演，创始人将套现 17.5 亿美元；谷歌最强 AI 模型正式开放；任天堂招新：经典游戏保存员 \| 极客早知道](<https://mp.weixin.qq.com/s?__biz=MTMwNDMwODQ0MQ%3D%3D&mid=2653116284&idx=1&sn=acbbda885437dfae2e39c5190105fbc6>)  
  极客公园 · 2026-11-11 08:43

- [今天起，Gemini 4 Carbon 正式上线，但不是所有人都用得上](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651116031&idx=1&sn=2a8423e6fb77ed9499d412a67f2f4423>)  
  APPSO · 2026-11-11 08:20

- [Gemini 4 Carbon连夜上桌！力压Fable 5.2花费仅一半，还挖出了PHP同级漏洞…](<https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw%3D%3D&mid=2247942861&idx=1&sn=41d0336965ce7b66565918f5d29e0dd8>)  
  量子位 · 2026-11-11 06:10

- [Anthropic正式启动IPO路演，估值腰斩仍破万亿！](<https://mp.weixin.qq.com/s?__biz=MzI3MTA0MTk1MA%3D%3D&mid=2652741810&idx=2&sn=24e5cefc404d2417e6cb7eb13be0cff9>)  
  新智元 · 2026-11-10 23:16

- [实测Fable 5.2：15秒画完4万年人类艺术史，我还摸清了「满分提示词」套路](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651115907&idx=1&sn=bdb6512fb5b8c5670803c67081c1f850>)  
  APPSO · 2026-11-10 18:04

[返回面板](../README.md) · [上一页](model.md) · [下一页](model-3.md) · 第 2 / 3 页
