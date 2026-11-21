# 大模型

[返回面板](../README.md) · [上一页](model-5.md) · [下一页](model-7.md) · 第 6 / 7 页

- [Qwen 发布 Qwen4-Max：2.4T 参数骨干、百万 token 上下文与长程智能体能力](<https://qwen.ai/blog?id=qwen4-max>)  
  Qwen 团队发布 Qwen4-Max，基于新 Qwen4 架构，拥有 2.4T 骨干参数、每 token 激活 71B、328B N-gram Embedding 参数，具备原生视觉能力和 100 万 token 上下文窗口。  
  Qwen：Blog Retrieval（API） · 2026-11-16 10:00

- [Anthropic CEO 阿莫迪与戴蒙对谈：算力是最深层的商业难题](<https://www.ithome.com/1/027/505.htm>)  
  Anthropic CEO 达里奥·阿莫迪上周五在纽约与摩根大通 CEO 杰米·戴蒙公开对谈，称算力是公司面临的最深层商业难题，并表示上市的重要原因就是增加现金储备，为高度不确定的算力需求提供缓冲。  
  IT之家·人工智能 · 2026-11-16 09:52

- [Claude Fable 5.2 不调用图像模型，用 Python 代码模拟真实画笔逐笔作画](<https://www.ithome.com/1/027/490.htm>)  
  Anthropic 的 Claude Fable 5.2 展示了一种不依赖图像生成模型的生图方式，通过编写 Python 程序在虚拟画布上模拟画笔、颜料和画布质感逐笔作画。  
  IT之家·人工智能 · 2026-11-16 09:01

- [Hugging Face Inference Providers 语言模型路由切换为 OpenRouter](<https://huggingface.co/blog/openrouter>)  
  Hugging Face 与 OpenRouter 合作，将语言模型的 Inference Providers 从自有路由切换到 OpenRouter，按实时价格、速度和可靠性为每次请求挑选最佳 provider，失败时自动重试到其他 provider，代码无需更改。  
  Hugging Face 官方团队博客 · 2026-11-16 08:00

- [Ollama 与 Together AI 详解开放模型长会话智能体负载的缓存优化](<https://ollama.com/blog/open-models-long-horizon-agents>)  
  Ollama 与 Together AI 联合发文，讲解如何让 DeepSeek-V4.1-Flash、GLM-5.3 等开放模型在长会话智能体负载中高效运行。  
  Ollama：Blog（RSS） · 2026-11-16 08:00

- [Apple 提出 Split-and-Scale：在推理阶段扩展潜在 3D 表示容量](<https://machinelearning.apple.com/research/split-scale-latent-3d>)  
  Apple 研究者提出 split-and-scale，通过在推理时把单个预训练 tokenizer 应用于场景的任意小空间子区域，在不增加训练成本的前提下扩展潜在 3D 表示容量、捕捉更高细节。该方法在大量消融实验中验证了计算、内存、潜在容量与重建质量之间的权衡，重建质量可与超出单 GPU 内存限制的更大模型竞争。团队还基于该方法训练了自回归 3D 生成器，表现与 SOTA 基线相当。  
  Apple Machine Learning Research（RSS） · 2026-11-16 08:00

- [OpenRouter 为 Hugging Face Inference Providers 提供模型路由](<https://openrouter.ai/blog/announcements/hugging-face-inference-providers/>)  
  OpenRouter 宣布即日起为 Hugging Face Inference Providers 的聊天模型提供路由，按实时价格、速度和可靠性选择供应商，支持自动故障转移，现有 HF token 和代码无需改动。  
  OpenRouter：Announcements（RSS） · 2026-11-16 08:00

- [Together AI 分享如何为编码智能体运行平台评测](<https://www.together.ai/blog/how-we-do-agent-evals-at-together-ai>)  
  Together AI 详解其 Agent 评测体系：用任务清单加 Baseline、MCP、Skills 三种配置跑测，以 LLM 判官打分，9 月 30 日 215 次运行通过 192 次。  
  Together AI 研究与产品博客（RSS） · 2026-11-16 08:00

- [A step toward defining the Standard Model on a lattice](<https://openai.com/index/step-toward-defining-the-standard-model>)  
  Explore a candidate nonperturbative lattice definition of the Standard Model and how GPT-6 Astra helped turn the idea…  
  OpenAI · 2026-11-16 06:00

- [METR 测量模型对对齐评测的识别能力：调查型智能体能区分对齐与能力评测](<https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/>)  
  METR 发布研究笔记，用调查型智能体在 19 个对齐评测和 36 个能力评测中探测环境，测量模型能否识别自己处于对齐评测。结果显示智能体区分两类评测的能力在过去一年持续提升，Opus 5.5 在其数据集上把所有对齐评测排在所有能力评测之上。模型识别依据包括环境看起来像模拟的蜜罐等线索，作者将对齐线索分为环境级和任务级两类，并提出可借此迭代改进对齐评测设计。  
  METR：Notes（网页） · 2026-11-16 00:00

- [Google 发布开源 TPU 模型设计与优化指南 tpu-codesign](<https://developers.googleblog.com/tpu-model-design-considerations-and-optimization-guide/>)  
  Google 发布开源指南 AI-Hypercomputer/tpu-codesign，总结 TPU 上训练和推理大模型的 8 条设计原则，覆盖 256 维度对齐、静态 shape、LatentMoE 和并行映射等，并给出 Ironwood（TPU v7x）实测证据。  
  Google Developers Blog（RSS） · 2026-11-16 00:00

- [NVIDIA Vera Rubin NVL72 在 MLPerf Training v6.1 中实现最高 2 倍于 Blackwell Ultra 的性能](<https://developer.nvidia.com/blog/nvidia-vera-rubin-nvl72-achieves-up-to-2x-blackwell-ultra-performance-in-mlperf-training-v6-1/>)  
  NVIDIA Vera Rubin NVL72 首次亮相 MLPerf Training v6.1，在七项基准中的六项取得最快训练时间，每 GPU 性能最高达优化版 GB300 NVL72 的 2 倍。  
  NVIDIA Technical Blog：Agentic AI / Generative AI · 2026-11-16 00:00

- [NVIDIA 如何后训练 Nemotron 3.5 Super VL 提升科学领域准确率](<https://developer.nvidia.com/blog/post-training-nvidia-nemotron-to-increase-accuracy-in-your-scientific-domain/>)  
  NVIDIA 发布 Nemotron for Science 科学智能体模型套件，并给出后训练 Nemotron 3.5 Super VL 的实操方案。在药物代谢预测任务上，16,384 token 输出预算下 SFT 将准确率提升 12%，RL 后训练再提升 17%。流程基于 NeMo Gym 构建 RLVR 环境、用 GRPO 加 LoRA 微调，并以 Tanimoto 分子相似度自动打分。  
  NVIDIA Technical Blog：Agentic AI / Generative AI · 2026-11-16 00:00

- [Google 在 64 颗 TPU v5p 上实现训练-推理逐位零误差的稳定 On-Policy RL](<https://developers.googleblog.com/unlocking-stable-on-policy-rl-on-tpu-with-bitwise-zero-traininference-mismatch/>)  
  Google 在 Tunix 中实现 Zero-TIM，在 64 颗 TPU v5p（DP8×TP8）多主机规模下让采样器与训练器对同一 token 给出逐位相同的 logprob，消除隐藏的 off-policy 数值偏差。  
  Google Developers Blog（RSS） · 2026-11-16 00:00

- [Anthropic Claude Fable 5.2 用约 70 万次模拟笔触画出照片级画作](<https://the-decoder.com/anthropics-claude-fable-5-2-doesnt-generate-images-it-paints-them/>)  
  Anthropic 新模型 Claude Fable 5.2 不走扩散路线，而是通过 1,000 到 2,000 行的 Python 程序驱动模拟画笔引擎，在虚拟画布上逐笔作画，Jake Eaton 演示的停车场购物车场景使用了约 700,000 次模拟笔触，不依赖外部图像模型或底图。  
  The Decoder：AI News（RSS） · 2026-11-15 23:42

- [开源盘古模型 openPangu-2.1-Pro 上线华为云，升级 Agent 开发、AI 编码与推理优化](<https://www.ithome.com/1/027/450.htm>)  
  华为云 MaaS 平台正式上线开源盘古模型 openPangu-2.1-Pro，围绕 Agent 开发、AI 编码和推理优化三大方向升级，增强深度研究、鸿蒙系统操控、鸿蒙 App 开发与昇腾算子生成等场景能力。  
  IT之家·人工智能 · 2026-11-15 21:16

- [英伟达黄仁勋卸任、阿里芯片子公司赴港IPO、Qwen4-Max 首次亮相](<https://www.recodechinaai.com/p/nvidia-without-jensen-alibabas-chip>)  
  英伟达宣布黄仁勋于11月11日卸任CEO及董事，CFO Colette Kress 出任临时CEO，董事会已就涉及其与英伟达中国业务的相关指控启动独立调查。阿里11月10日披露，芯片子公司 T-Head 已于9月11日以保密方式提交香港上市申请，发行条款尚未确定。阿里11月11日预览下一代 Qwen4 家族首款模型 Qwen4-Max，支持文本、图像、视频输入和100万 token 上下文窗口。  
  Recode China AI（RSS） · 2026-11-15 21:06

- [Sebastian Raschka 图解现代 LLM 的位置编码机制与 RoPE](<https://magazine.sebastianraschka.com/p/understanding-positional-embeddings>)  
  Sebastian Raschka 发表长文教程，讲解 LLM 如何编码 token 位置信息，覆盖 GPT-2 的可学习绝对位置嵌入、原始 Transformer 的正弦编码、RoPE 的旋转机制，并配 PyTorch 实现。  
  Ahead of AI（RSS） · 2026-11-15 20:10

- [美团开源 1.6 万亿参数智能体模型 LongCat-2.5，训练全程未用 Nvidia GPU](<https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/>)  
  美团开放 LongCat-2.5 权重，这是一款面向智能体的 1.6 万亿参数 MoE 模型，每 token 激活约 480 亿参数，采用 MIT 许可证，官方部署方案基于 194 片华为 Ascend 加速器，全程未使用 Nvidia GPU。  
  The Decoder：AI News（RSS） · 2026-11-15 18:06

- [188: 黄仁勋闪电离职之后：英伟达、AI 基建、中美竞争和算力江湖](<https://podcast.latepost.com/188>)  
  「世间万物都与性有关，除了性本身。性关乎权力。」 2026 年 11 月 12 日，英伟达宣布，创始人兼 CEO 黄仁勋辞去公司总裁、首席执行官及董事职务，即刻生效。CFO Colette Kress 被任命为临时 CEO，董事会则启…  
  晚点聊 · 2026-11-15 12:15

- [datasette-llm 0.1a11 发布：支持 OpenAI 兼容端点](<https://simonwillison.net/2026/Nov/14/datasette-llm/>)  
  Datasette 的中间插件 datasette-llm 发布 0.1a11，新增对 OpenAI 兼容端点的支持，可将 Datasette 配置为使用任何遵循该协议的 LLM 服务。这意味着用 LM Studio、Ollama 或刚发布 v1.0.0 的 llama.cpp 跑本地模型的用户，可通过 uvx 启动由本地模型驱动的 Datasette Agent 实例。  
  Simon Willison 博客 · 2026-11-15 07:59

- [Anthropic CEO Amodei 在 IPO 前承认明年存在巨大不确定性，算力是公司最深的商业两难](<https://the-decoder.com/anthropic-ceo-amodei-admits-theres-a-huge-uncertainty-in-whats-going-to-happen-next-year-days-before-a-record-ipo/>)  
  Anthropic CEO Dario Amodei 在 JPMorgan 投资者活动上表示，明年的走向存在巨大不确定性，算力是公司面临的最深商业两难：算力需提前一到两年购买，买少了影响客户和收入，买多了可能财务过度扩张。  
  The Decoder：AI News（RSS） · 2026-11-15 03:05

- [Gemini 4 Carbon 登顶 MathArena 数学基准，成本约为 GPT-6.1 Sol 的 15 倍](<https://the-decoder.com/gemini-4-carbon-takes-the-matharena-crown-but-costs-15-times-more-than-gpt-6-1-sol/>)  
  The Decoder 报道，Google 的 Gemini 4 Carbon（high）以 85.4%±3.0% 的预期成绩登顶 MathArena 数学基准，取代 GPT-6.1 Sol，Claude Fable 5.2 以 82.8% 位居第二。  
  The Decoder：AI News（RSS） · 2026-11-15 00:48

- [Cmpnd 发布 dspy-wsp，把权重空间编程做成 DSPy 优化器](<https://www.marktechpost.com/2026/11/14/cmpnd-dspy-wsp-weight-space-programming/>)  
  Cmpnd 发布开源原型优化器 dspy-wsp（MIT 许可，pip install dspy-wsp），让前沿 LLM 直接读取并编辑小模型的权重，无需梯度、训练循环或微调数据。  
  MarkTechPost（RSS） · 2026-11-15 00:45

- [Anthropic 建议弃用过时提示词习惯以充分发挥 Claude Opus 5.5](<https://the-decoder.com/anthropic-says-outdated-prompting-habits-are-slowing-down-claude-opus-5-5/>)  
  Anthropic 指出许多用户沿用旧习惯反而拖慢 Claude Opus 5.5，建议删除 think hard 等短语，让模型自主调节推理深度，并从 Medium effort 档位起步。  
  The Decoder：AI News（RSS） · 2026-11-15 00:42

- [手工式 AI 时代即将到来](<https://every.to/context-window/the-age-of-artisanal-ai-is-coming>)  
  Every 作者 Dan Shipper 在 Thesis: 2027 闭幕演讲中提出，当所有人用同样的模型时，决定差异的是你对"什么算好"的判断力。文中还提到 Fable 5.2 可整夜甚至整个周末无人值守工作，以及把对 AI 输出的每条修改意见转成可复用的对错检查项。  
  Every：最新文章（网页） · 2026-11-15 00:00

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

- [英伟达机器人开源撞上Fable 5.2发布！Jim Fan：不是寒冬是夏天](<https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw%3D%3D&mid=2247942809&idx=2&sn=6e947b51ab34901d590c22156c1db720>)  
  量子位 · 2026-11-10 15:27

- [当美国无法建设数据中心，会对 AI 产生怎样的冲击](<https://mp.weixin.qq.com/s?__biz=MTMwNDMwODQ0MQ%3D%3D&mid=2653116265&idx=1&sn=a5b1ed31fc644479b961afebac1b76f1>)  
  极客公园 · 2026-11-10 15:13

- [Fable 5.2首批实测来了！网友：Opus突然不香了](<https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw%3D%3D&mid=2247942770&idx=2&sn=4018cb8697f3c981589e71764a1affa1>)  
  量子位 · 2026-11-10 13:24

- [Fable 5.2睁眼拼魔方，中国AI闭眼搓麻将！人类「手感」首次Token化](<https://mp.weixin.qq.com/s?__biz=MzI3MTA0MTk1MA%3D%3D&mid=2652741625&idx=1&sn=cec9a700b23f53b333cc82b60cb99445>)  
  新智元 · 2026-11-10 11:38

- [Fable 5.2 还没捂热，Gemini 4 神秘新模型就刷屏了](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651115835&idx=1&sn=7114821869a486b7b2f3fbf298406182>)  
  APPSO · 2026-11-10 11:21

- [中国卷大模型，美国缺机器人：在硅谷做具身智能背后的「中国启示录」](<https://mp.weixin.qq.com/s?__biz=MzA5ODEzMjIyMA%3D%3D&mid=2247748707&idx=2&sn=9961a7f19de98ddc48368a8305639d3b>)  
  AI科技评论 · 2026-11-10 09:30

- [Codex 游戏掌机突然开卖，网友却在催更 GPT-6.2](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651115784&idx=1&sn=bcf79b8e25245607c5db48587044d3d1>)  
  APPSO · 2026-11-10 08:58

- [Fable 5.2狂刷72项世界纪录，23年黑洞难题告破！科学史又改写了](<https://mp.weixin.qq.com/s?__biz=MzI3MTA0MTk1MA%3D%3D&mid=2652741593&idx=1&sn=6c1a2418ed8ea73a9ddbbc31995bba23>)  
  新智元 · 2026-11-10 08:55

- [刚刚，Claude Fable 5.2 登顶世界第一，一夜斩杀 Opus 5.5](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651115757&idx=1&sn=8d4555eff32c80f7940bab5c6395d816>)  
  APPSO · 2026-11-10 06:42

- [最强Fable 5.2震撼发布！费马大定理30小时形式化，全面碾压Opus 5.5](<https://mp.weixin.qq.com/s?__biz=MzI3MTA0MTk1MA%3D%3D&mid=2652741547&idx=1&sn=71d6d9fb635f0ea5b0714b04b7a68bf3>)  
  新智元 · 2026-11-10 06:41

- [Fable 5.2深夜掀桌！从0造操作系统，性价比反超Opus 5.5](<https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw%3D%3D&mid=2247942444&idx=1&sn=33f7edd8c7bca1dffbcb94a11b82a34d>)  
  量子位 · 2026-11-10 05:59

- [GPT-6.2首测！网友：终于有个能压倒Opus 5.5的了？？](<https://mp.weixin.qq.com/s?__biz=MzI3MTA0MTk1MA%3D%3D&mid=2652741489&idx=1&sn=9e5afce079bbaa1db52ccabdc4bc8f2c>)  
  新智元 · 2026-11-09 12:56

[返回面板](../README.md) · [上一页](model-5.md) · [下一页](model-7.md) · 第 6 / 7 页
