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

## 相关资讯 · 113 条

- [Hyperscale Data, Inc. Announces Intent to Launch Previously Announced Exchange Offer on or about November 20, 2026](<https://www.prnewswire.com/news-releases/hyperscale-data-inc-announces-intent-to-launch-previously-announced-exchange-offer-on-or-about-november-20-2026-302941554.html>)  
  LAS VEGAS, Nov. 17, 2026 /PRNewswire/ -- Hyperscale Data, Inc. \(NYSE American: GPUS\), an artificial intelligence \("AI…  
  PR Newswire · 2026-11-17 19:00

- [反超谷歌王牌模型，决策新王拿下全球榜首，全尺寸开源](<https://36kr.com/p/4073723331777415?f=rss>)  
  硅谷最卷的新赛道，刚刚杀出了一位开源新王！ 最近，即将敲钟的Anthropic在IPO材料中曝出天价算力缺口，给狂卷参数的AI行业当头浇下一盆冷水。 通用大模型虽在编程、数学上大杀四方，可一旦真替人干活，算力账单就成了无底洞。 比生成文本更  
  36氪 · 2026-11-17 18:54

- [豆包接入第三方模型，这波更新先别急着夸](<https://36kr.com/p/4073424632304768?f=rss>)  
  11月12日，字节跳动旗下办公智能体产品豆包工作宣布完成产品更新，在原有豆包2.1 Lite和豆包2.1 Pro两款自研模型之外，新增接入Kimi K3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash等多款第三方模型。  
  36氪 · 2026-11-17 18:03

- [小米雷军：具身智能机器人未来一定是一个巨大的产业机会，它的想象力会超过汽车产业](<https://www.ithome.com/1/028/437.htm>)  
  IT之家 11 月 17 日消息，2026 年 APEC 工商领导人峰会 11 月 17 日至 18 日在深圳举办，主题为“共促繁荣，共赢未来”。小米创办人、董事长兼 CEO 雷军认为， 过去 4 年时间，AI 大模型的技术突飞猛进，…  
  IT之家 · 2026-11-17 17:53

- [Sarvam 开放 Token Factory：在印度本地托管 8 个开源模型的推理平台](<https://www.marktechpost.com/2026/11/17/sarvam-token-factory-india-inference-platform/>)  
  Sarvam 向所有开发者开放 Token Factory，通过统一的 OpenAI 兼容 API 从印度 GPU 集群提供 Sarvam 105B、GLM 5.3、DeepSeek V4.1 Flash 1017、Kimi K3.1 Pro 等 8 个开源权重模型。  
  MarkTechPost（RSS） · 2026-11-17 17:51

- [谷歌 Gemini 4 Argon 安全测试失控：40 个 AI 智能体擅自攻击真实网站，还互相分享漏洞](<https://www.ithome.com/1/028/433.htm>)  
  IT之家 11 月 17 日消息，在一项最新的 AI 安全实验中，谷歌最新推出的 Gemini 4 Argon 智能体在接到一项根本不可能完成的任务后，被发现反复使用未经授权的手段访问一家真实机构的系统，试图获取不存在的问题对应的官方…  
  IT之家 · 2026-11-17 17:41

- [黄仁勋辞任后，新云扩张谁来垫钱？](<https://36kr.com/p/4073338647353220?f=rss>)  
  一座AI数据中心最缺钱的那几个月，可能恰好是它一分钱算力收入都收不到的时候。芯片和服务器要订，机房要接电，工程款也有付款节点。哪怕机器未来有买家，只要今天没达到交付条件，今天的账单就得另找钱付。 11月12日，英伟达宣布，黄仁勋辞去总裁、首  
  36氪 · 2026-11-17 17:26

- [“我特别能共情黄仁勋的处境！”Sam Altman罕见发声：没有他的英伟达难以想象](<https://36kr.com/p/4073417918845832?f=rss>)  
  从黄仁勋的去留，到 AI 行业的算力投资，再到超级智能是否会让人类失去控制权，Sam Altman 在最新访谈中谈到了 AI 产业面临的一系列关键问题。 他对黄仁勋表达了强烈的敬意，非常共情黄仁勋如今的处境，并且表示很难想象没有 Jense  
  36氪 · 2026-11-17 17:26

- [月流水800万的AI探店生意：AI视频第一个跑通的变现闭环](<https://36kr.com/p/4073436835157636?f=rss>)  
  你刷到过这样的探店视频吗？ 看起来真实干净的店面环境，热气腾腾的锅底，流利的解说，精致的食材和食物质感……你从画面里挑不出毛病，但就是觉得它没有“人味”。 过去一年，一批人开始用 AI 批量生产探店视频： 一条 40 秒的成片，算力成本不到  
  36氪 · 2026-11-17 17:22

- [小米雷军：AI 是一个全新的时代，一定会带来非常多的商业机会](<https://www.ithome.com/1/028/322.htm>)  
  IT之家 11 月 17 日消息，2026 年 APEC 工商领导人峰会 11 月 17 日至 18 日在深圳举办，主题为“共促繁荣，共赢未来”。 据新浪科技报道，小米集团创始人、董事长兼首席执行官雷军表示，过去四年，AI 大模型技术…  
  IT之家 · 2026-11-17 16:16

- [材料科学智能体MatOS正式开源，大幅提高材料研发任务成功率](<https://36kr.com/p/4073503237329796?f=rss>)  
  大模型智能体已经能够检索文献、调用模拟软件，甚至与自动化实验室协同工作。但要让它们独立完成一项完整的材料研究，仍然面临挑战： 一项研究可能要从数千万个候选结构中逐级筛选，或在数百个合金配方中反复搜索，持续数天，并根据中间结果不断调整计划；每  
  36氪 · 2026-11-17 15:34

- [Garlic LLM 让越狱版 PS4 运行 Qwen3.5-9B 本地模型，最高每秒 43 词元](<https://www.ithome.com/1/028/266.htm>)  
  开源项目 Garlic LLM 让越狱版 PlayStation 4 运行 90 亿参数的本地大语言模型，最高生成速度达每秒 43 个词元，无需联网即可完成 AI 聊天与语音对话。  
  IT之家·人工智能 · 2026-11-17 15:12

- [百度李彦宏在 APEC 峰会警告 AI 泡沫风险，称应用落地成效不及预期](<https://www.ithome.com/1/028/225.htm>)  
  百度董事长兼 CEO 李彦宏在 2026 年 APEC 工商领导人峰会上表示，当前算力和基础设施投入巨大，但 AI 上层应用落地成效不及预期，若应用层迟迟无法突破，AI 泡沫风险或将显现。他对 AI 长期趋势保持乐观，并提出 AI 技术栈在芯片、云、模型、应用之上还需配套组织能力，类比电力革命缺少组织变革就难以释放经济价值；此前在百度世界大会 2026 上他称智能组织是 AI 时代新的厂房。  
  IT之家·人工智能 · 2026-11-17 13:01

- [多家中国AI厂商收紧模型网络攻击能力并强化防御功能](<https://www.ithome.com/1/028/133.htm>)  
  据彭博社11月17日报道，阿里、腾讯、月之暗面等厂商最新发布的新一代模型普遍限制了网络进攻能力，同时强化漏洞检测与防御功能。阿里旗舰模型Qwen4-Max过滤了训练数据中可用于网络攻击的材料，保留漏洞检测等防御能力，且暂未公开模型权重。腾讯在Hy4正式版发布前已限制模型网络安全功能，剔除漏洞利用生成相关数据。月之暗面在Kimi K3.1 Pro后训练阶段移除网络攻击相关材料，过滤后模型在内部漏洞利用基准测试中得分为81.0%，低于未过滤版本的90.5%。智谱在开放GLM-5.3权重前进行了安全审查。腾讯首席AI科学…  
  IT之家·人工智能 · 2026-11-17 11:28

- [蚂蚁灵波具身大模型挑战赛收官 TARS战队获冠军](<https://www.163.com/tech/article/LBUB145900098IEO.html>)  
  网易科技 · 2026-11-17 10:51

- [Corma获得1.25亿美元A轮融资](<https://www.itjuzi.com/investevent/14708028>)  
  Corma专注从零构建防御型网络安全基础大模型，输出安全 AI Agent，对接企业现有安全体系完成告警研判、威胁狩猎与事件处置。公司致力于缩小 AI 攻防能力不对称的差距。近日，Corma获得1.25亿美元A轮融资，NEA恩颐投资-…  
  IT桔子 · 2026-11-17 10:49

- [ARTi 完成数百万美元Pre-A轮融资](<https://www.itjuzi.com/investevent/14698604>)  
  ARTi为agentic AI平台，为投资者提供机构级的投资研究能力。其自主推理引擎驱动完整的判断迴路、生成见解、记录决策并验证结果，从而令投资者能够随时间推移，持续提升并累积其分析能力。ARTi专为大规模运作而打造，正拓展全球市场与…  
  IT桔子 · 2026-11-17 10:34

- [谷歌 Ironwood TPU 提交 MLPerf Training v6.1 成绩，8192 颗约 102 秒达标 DeepSeek-V3 预训练](<https://www.ithome.com/1/028/065.htm>)  
  谷歌云在 MLPerf Training v6.1 第一轮提交了覆盖第七代 Ironwood TPU 与英伟达 Grace Blackwell GPU 的 10 项结果。  
  IT之家·人工智能 · 2026-11-17 09:46

- [奥尔特曼谈黄仁勋离职：同情其处境，相信 AI 行业能平稳度过](<https://www.ithome.com/1/028/052.htm>)  
  据彭博社报道，OpenAI CEO 奥尔特曼表示，即使黄仁勋不再掌舵英伟达，AI 行业依然会运转良好，并将黄仁勋比作会有缺点的英雄。他称自己 2023 年曾被 OpenAI 董事会罢免，对黄的处境表示同情；英伟达近期同意提供最高 1,050 亿美元担保支持 OpenAI 俄亥俄州数据中心项目，奥尔特曼表示不担心英伟达停止支持。  
  IT之家·人工智能 · 2026-11-17 09:03

- [因算力不足，DeepSeek对App/网页版限额使用](<https://www.pedaily.cn/first/192764.shtml>)  
  DeepSeek对App/网页版的长对话进行了限额使用。多名用户反馈，DeepSeek提示因“算力不足，不再支持超过7天不活跃的长对话”，并对单次输入文字的上限进行了调整，缩短至4万字左右。此外，还会限制每日的对话额度，当用户日使用量…  
  投资界 · 2026-11-17 08:36

- [Anthropic IPO 后要求员工提前 30 天制定 10b5-1 书面售股计划](<https://www.ithome.com/1/028/040.htm>)  
  据 Business Insider 报道，Anthropic 计划在 IPO 后要求员工通过 10b5-1 交易计划出售股票，须书面预先确定数量、价格条件和至少 30 天后的出售日期。  
  IT之家·人工智能 · 2026-11-17 08:20

- [NVIDIA 在 SC26 推出 DGX Spark HPC 开发者套件，把超算实验室搬上桌面](<https://blogs.nvidia.com/blog/dgx-spark-hpc-developer-kit-sc26/>)  
  NVIDIA 在 SC26 推出 DGX Spark HPC 开发者套件，由四台 DGX Spark 通过 ConnectX-7 环形直连组成，无需网络交换机，合计提供 512GB 内存和 20TB NVMe 存储。借助 NVFP4，可在四节点集群本地部署最高 700B 参数模型，如 DeepSeek V4.1。套件已开售，NVIDIA HPC SDK 安装 playbook 即将发布。  
  NVIDIA Blog（RSS） · 2026-11-17 07:00

- [Google 威胁情报组警告全自动 AI 网络攻击已经出现并将快速恶化](<https://the-decoder.com/google-warns-that-fully-automated-cyberattacks-have-arrived-and-will-get-worse-fast/>)  
  Google 威胁情报组（GTIG）通过 AI Threat Tracker 首次观察到攻击者完全自动化漏洞发现与利用，无人工介入。其暴露的服务器运行名为 exploit\_agent 的 AI 框架，连接多个大语言模型，通过比对补丁前后代码识别漏洞、开发并自动运行利用程序，配置文件中的俄语注释暗示操作者讲俄语，数据指向法国媒体、娱乐和教育网站。  
  The Decoder：AI News（RSS） · 2026-11-17 03:42

- [GPT-6 Astra 助力解决格点上的粒子物理标准模型难题](<https://the-decoder.com/openais-gpt-6-astra-tackles-the-standard-models-toughest-math-problem-on-a-lattice/>)  
  OpenAI 的 GPT-6 Astra 帮助产出一份证明，有望解决粒子物理标准模型格点化中存在 50 年的难题，论文作者为 UC Santa Barbara 物理学家 Nathaniel Craig，预印本和 OpenAI 博客均已发布。  
  The Decoder：AI News（RSS） · 2026-11-17 03:19

- [美国拟收紧规则，限制中国远程租用数据中心AI芯片](<https://arstechnica.com/tech-policy/2026/11/us-moves-to-cut-chinas-remote-access-to-ai-chips/>)  
  美国商务部宣布修改出口管制规则，要求总部位于被评估为存在较高转运风险国家的企业，在向中国、俄罗斯和伊朗等转移大量高端芯片时申请许可并接受严格的客户尽职调查，同时提交月度交易报告。新规在联邦公报发布90天后生效，并为仅用于商业推荐系统的算力提供豁免。有分析认为，该政策可能加速中国企业转向国产AI芯片。  
  Ars Technica：AI（RSS） · 2026-11-17 03:10

- [Redwood Research：Gemini 4 安全报告未能证明失控风险低](<https://blog.redwoodresearch.org/p/gemini-4-safety-reports-dont-demonstrate>)  
  Redwood Research 发文批评 Google DeepMind 的 Gemini 4 Argon 与 Carbon 安全报告，认为其基于控制措施的安全论证存在严重弱点，不足以证明部署风险已可靠缓解。  
  Redwood Research：Blog（RSS） · 2026-11-17 01:21

- [Databricks AI Runtime 上的表格基础模型：原理、模型对比与落地取舍](<https://www.databricks.com/blog/tabular-foundation-models-databricks-ai-runtime>)  
  Databricks 发文讲解表格基础模型（TFM）在 Databricks AI Runtime 上的实验与微调支持，这类预训练模型无需针对数据集训练即可直接预测。文章对比了 TabICLv2（约 28M 参数、BSD 3-Clause 许可）、TabFM（约 400M 参数、非商用许可）和 TabPFNv3.5（约 220M 参数）等近期模型，并说明其依赖合成数据预训练与行压缩注意力架构。  
  Databricks：Blog（RSS） · 2026-11-17 01:00

- [阿里发布 Qwen4-Max：2.4 万亿参数 MoE 架构，对标 Opus 5.5、GPT-6 与 Kimi K3.1 Pro 且价格更低](<https://the-decoder.com/alibabas-qwen4-max-takes-on-opus-5-5-gpt-6-and-kimi-k3-1-pro-at-much-lower-prices/>)  
  阿里巴巴发布旗舰模型 Qwen4-Max，采用 Qwen4 系列新混合注意力架构，2.4 万亿参数中每 token 仅激活 710 亿，原生处理图像并支持一百万 token 上下文窗口。  
  The Decoder：AI News（RSS） · 2026-11-17 00:56

- [Anthropic 上市背后：Azeem Azhar 解析其商业模式与无形资产价值](<https://www.exponentialview.co/p/what-anthropic-is-really-listing>)  
  Anthropic 将成为西方首家在公开市场上市的真正 AI 公司，Azeem Azhar 认为其核心机会在于用机器智能生产无形资产。他指出，当前 S&amp;P 500 中约 92% 的价值来自品牌、专利、软件和数据等无形资产，Anthropic 的机器智能可在不部署任何机器人前就参与这部分价值竞争。看空观点认为它只是不断贬值的 token 贩卖者，但这忽略了其构建持续进化的机器智能系统。  
  Azeem Azhar：Exponential View（RSS） · 2026-11-17 00:36

- [Gary Marcus：AI 泡沫是否已经 Game Over](<https://garymarcus.substack.com/p/game-over-man>)  
  Gary Marcus 评论当前 AI 股票大跌，称当前 AI 泡沫看起来已接近 game over。他提到 Oracle 自其 2025 年 9 月宣布“peak bubble”以来跌约 61%，Ben Thompson 撰写讣告式文章，华尔街日报报道 Nvidia 作为“AI 经济空头支票”的日子屈指可数；他认为核心问题是 LLM 公司缺乏技术护城河、难以盈利。  
  Gary Marcus：The Road to AI We Can Trust（RSS） · 2026-11-17 00:29

- [NVIDIA 扩展 CUDA-X 库，为 AI 智能体提供加速科学发现的工具](<https://blogs.nvidia.com/blog/cuda-x-libraries-agents-accelerate-scientific-discovery/>)  
  NVIDIA 扩展 CUDA-X 库，新增 cuPhoton、cuPotential 和 cuSpa，让 AI 智能体协助科研人员加速天体物理、材料科学与单细胞生物学等研究。  
  NVIDIA Blog（RSS） · 2026-11-17 00:00

- [NVIDIA 发布 Rubin HPC GPU：加速科学与工程智能体仿真](<https://blogs.nvidia.com/blog/rubin-hpc/>)  
  NVIDIA 在 SC26 发布 Vera Rubin 平台新 GPU Rubin HPC，面向科学、工程与分析工作负载加速仿真和数据处理。单颗 GPU 的 CUDA 核心数超过 50,000 创下纪录，并配备稀疏数据加速能力和第七代 NVLink 互连。该 GPU 预计 2028 年上市。  
  NVIDIA Blog（RSS） · 2026-11-17 00:00

- [Anthropic 谈智能体记忆：关键在于知道该忘什么，而不是存多少](<https://the-decoder.com/anthropic-says-the-key-to-agent-memory-is-knowing-what-to-forget-not-how-much-to-store/>)  
  Anthropic 发布研究文章，探讨 Claude 如何跨会话保留知识，结论是选择性笔记优于全量存档。在 Pokémon Red 测试中，Claude Sonnet 3.7 存了约 413 个文件只拿到 1 枚徽章，而 Claude Fable 5 只记策略和已验证规则，获得 4 枚徽章。  
  The Decoder：AI News（RSS） · 2026-11-16 23:25

- [Meta JiTTests 用 LLM 生成测试在风险代码合入前捕获隐私缺陷](<https://www.marktechpost.com/2026/11/16/meta-jittests-llm-catching-tests-privacy-bugs/>)  
  MarkTechPost 介绍 Meta 将 LLM 测试生成系统 JiTTests 从研究原型推进到生产基础设施，该系统编写旨在对风险 diff 失败的可执行测试，2026 年上半年在 diff 阶段捕获 74 起隐私 SEV，隐私 SEV 发生率下降 20%。  
  MarkTechPost（RSS） · 2026-11-16 18:39

- [阿里发布 Qwen4-Max：2.4T MoE、71B 激活、1M 上下文](<https://www.marktechpost.com/2026/11/16/alibaba-qwen4-max-release/>)  
  阿里 Qwen 团队发布 Qwen4 系列首个模型 Qwen4-Max，为专有稀疏 MoE 模型，2.4T 骨干参数、每 token 激活 71B，另有 328B N-gram Embedding 参数，支持文本、图像和视频输入及 1M token 上下文窗口、393K 最大输出。  
  MarkTechPost（RSS） · 2026-11-16 17:44

- [How Revolut raises ambition without lowering the bar](<https://openai.com/business/customer-stories/revolut>)  
  Discover how Revolut uses OpenAI models and Codex to cut coding time by 30–60%, scale financial crime investigations,…  
  OpenAI · 2026-11-16 17:30

- [智元发布 WITA-Omni：行业首个具身全模态端到端交互大模型](<https://www.agibot.com.cn/article/315/detail/270.html>)  
  智元正式发布 WITA-Omni（硅光动语全模态大模型），称其为行业首个具身全模态端到端交互大模型，在音视频之外新增触觉、本体状态输入与动作、表情输出。其交互响应最快约400毫秒、平均约600毫秒，较业内平均水平快近3倍，并登顶 DailyOmni、MMAU、EmbSpatialBench 等四个榜单。该模型已在量产机器人远征 A3-Ultra 本体部署，并在文娱导览等场景开展验证。  
  AGIBOT 智元（网页） · 2026-11-16 15:11

- [台积电拟按客户信用额度供应产能，应对 AI 循环融资疑虑](<https://www.ithome.com/1/027/697.htm>)  
  据《工商时报》报道，在 AI 循环融资疑虑升温背景下，台积电将客户财务资料与数据中心建设需求纳入需求评估，根据各公司资产负债表拟定信用额度，考量历史损失率、竞争力及营运展望，单笔超额度需现金支付，部分客户要先付款保留产能。  
  IT之家·人工智能 · 2026-11-16 14:54

- [阿里巴巴发布 Qwen4-Max：总参数 2.4T，支持百万上下文](<https://mp.weixin.qq.com/s/Osjnqqa62HLFl3JoseUt8A>)  
  阿里巴巴于 11 月 16 日发布新一代基座大模型 Qwen4-Max，总参数 2.4T，具备原生视觉能力，支持百万上下文。官方称其基于新架构和训练优化，在智能体和编程等关键能力上持续进化，可在金融、法律等专业领域从信息检索走向专业交付。上线期间千问APP会员可限免体验，使用 Qwen4-Max 不消耗会员额度，活动时间以产品端页面为准。  
  公众号：千问APP（阿里） · 2026-11-16 12:30

- [阿里通义千问 Qwen4-Max 正式上线：2.4 万亿参数 MoE 架构，任务成本降低超 60%](<https://www.ithome.com/1/027/512.htm>)  
  阿里通义千问团队发布新一代旗舰模型 Qwen4-Max，采用 2.4 万亿参数稀疏 MoE 架构，原生支持视觉理解，提供 100 万 token 上下文窗口。  
  IT之家·人工智能 · 2026-11-16 10:07

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

- [OpenRouter 为 Hugging Face Inference Providers 提供模型路由](<https://openrouter.ai/blog/announcements/hugging-face-inference-providers/>)  
  OpenRouter 宣布即日起为 Hugging Face Inference Providers 的聊天模型提供路由，按实时价格、速度和可靠性选择供应商，支持自动故障转移，现有 HF token 和代码无需改动。  
  OpenRouter：Announcements（RSS） · 2026-11-16 08:00

[返回面板](../README.md) · [下一页](model-2.md) · 第 1 / 3 页
