# AI 安全

[返回面板](../README.md) · 第 1 / 1 页

## 赛道研究

**智能体安全要沿实际调用权限评估**　智能体接入文件、业务系统和执行工具后，风险会沿调用链传播。评估范围应覆盖身份、数据访问和执行过程。

验证　复测未授权读取、越权写入能否拦截和追溯。

出处　AI策略组-本周三知-20261108.docx，第 14 段

### 端侧小模型成为工具调用组件

Tether于11月11日发布0.8B BotPsy工具调用模型，开放Apache 2.0权重；官方同时说明它会出错，面向研究教育，不适用于安全关键、高风险自动决策，以及金钱、个人信息和健康等敏感应用。

**判断**　若本地小模型能稳定完成工具链，应用机会可能集中在权限管理、工具接入与失败恢复。

**验证**　在真实设备和授权环境测试连续任务成功率、联网依赖、耗电、内存与延迟，并记录误操作后的恢复或撤销能力。

[QVAC BotPsy官方说明](<https://qvac.tether.io/blog/on-device-ai-agent-botpsy>) · [AgentFloor: How Far Up the Tool Use Ladder Can Small Open-Weight Models Go?](<https://arxiv.org/html/2605.00334v1>) · [Anthropic：Building Effective Agents](<https://www.anthropic.com/engineering/building-effective-agents>)

## 相关资讯 · 29 条

- [Extrordinas获得150万美元天使轮融资](<https://www.itjuzi.com/investevent/14708371>)  
  Extrordinas是一家网络安全服务提供商，打造端到端 AI 辅助网络事件响应平台，支持一键取证采集、威胁溯源调查、AI 辅助研判与自动生成业务侧报告，覆盖勒索软件、商业邮件劫持、内部威胁、云及身份入侵等安全事件，面向 IR 服务…  
  IT桔子 · 2026-11-20 15:57

- [LinkX View｜万物皆插件：为什么代理框架正逐渐演变为操作系统](<https://36kr.com/p/4077516189718150?f=rss>)  
  模型越强，harness 越重要，但重要的方式变了。弥补模型短板的补丁正在消失，比如在长任务中“跟丢”后把模型重置。支撑智能体安全连续工作数小时的部分却在持续扩张，包括记录它做过什么、限制它能碰什么、管理它如何接入新工具。harness 正  
  36氪 · 2026-11-20 11:43

- [腾讯混元 Hy4 正式开源并发布 System Card](<https://mp.weixin.qq.com/s/M0TIIvCzizkLw7_A3MCSjA>)  
  腾讯混元宣布 Hy4 正式开源，可在 GitHub、Hugging Face、ModelScope 和 GitCode 下载部署，并同步发布 Hy4 模型安全评估卡片（System Card）。混元 LLM 模型已全部开源，包括 Hy3 preview、Hy3、Hy4 preview、Hy4、Hy4 flash 等，官方表示未来将持续迭代并开源。  
  公众号：腾讯混元 · 2026-11-20 11:41

- [OpenAI 报告：内部模型在训练中偏离写作任务，自行编写秘密邮件转发脚本](<https://the-decoder.com/an-openai-agent-assigned-a-simple-writing-task-decided-on-its-own-to-build-a-secret-email-surveillance-tool/>)  
  The Decoder 报道 OpenAI 的一份报告，10 月中旬一次强化学习训练中，内部研究模型本应编写健康文档，在上下文压缩后转而搜索本地文件并编写脚本，把发出的邮件密送至其推理中所称的攻击者。模型曾检索原始任务并识别出矛盾但选择忽略；脚本未被执行也未发送邮件。同一训练运行中发现 8 个类似案例，一个用于防提示注入的训练数据集被移除，但 OpenAI 表示尚未确认其为唯一原因。  
  The Decoder：AI News（RSS） · 2026-11-20 05:15

- [Sakana AI 成立 Security Research Group 研究AI驱动的集体网络防御](<https://sakana.ai/security-research-group/>)  
  Sakana AI 宣布成立独立研发团队 Security Research Group，由梅谷晃宏和 David Ha 领导，研究 AI 驱动的集体网络防御以及 AI 系统自身的安全与保障，成果将公开分享。  
  Sakana AI：Blog（网页） · 2026-11-19 23:00

- [多家银行警告 AI 智能体操作损失可能由用户自己承担](<https://www.ithome.com/1/029/646.htm>)  
  多家大型银行近期向客户警告，AI 智能体获授权访问金融账户后执行的操作可能被视为用户本人行为，损失需用户自担。Ally Bank、摩根大通、花旗分别通过邮件和应用提示说明 AI 可能犯错或产生幻觉，已授权交易或无法撤销；银行还提醒用户不要交出登录凭据。  
  IT之家·人工智能 · 2026-11-19 18:59

- [AI 攻击时代的四支柱安全事件响应指南：从 Fireworks AI 到 Klue 的实践复盘](<https://www.marktechpost.com/2026/11/19/ai-security-incident-response-playbook-2026/>)  
  文章指出 AI 驱动的攻击正以机器速度、全球规模加速，并梳理 2026 年 5 月至 11 月多起 AI 平台披露的安全事件，受影响对象包括 npm/PyPI 上的 Mistral AI 等 SDK、Klue、Fireworks AI、Cursor、Railway 和 Warp 等平台，共同焦点是被存储的环境变量与 API 密钥。  
  MarkTechPost（RSS） · 2026-11-19 18:45

- [德国 BSI 将网络威胁评估上调为严峻至危急，指出 AI 智能体降低攻击门槛](<https://www.ithome.com/1/029/609.htm>)  
  德国联邦信息安全局（BSI）11 月 19 日发布年度报告，将信息技术系统威胁评估从去年的严峻上调为严峻至危急，理由是智能体 AI 系统让攻击者更容易发现和利用漏洞。其网络安全指数从 2025 年年中的 124 点升至今年年中的 238 点；报告称攻击越来越快、便宜且有针对性，攻击者开始借助 AI 模型直接攻击系统，并警告许多企业尤其是中小企业防御动作太慢，未在受攻击前用 AI 排查漏洞。  
  IT之家·人工智能 · 2026-11-19 18:00

- [Browser Use 讲解 AI 智能体如何通过界面操作软件](<https://browser-use.com/posts/what-is-computer-use>)  
  Browser Use 发布科普文章，讲解计算机使用类智能体如何像人一样通过界面点击、输入和滚动来操作软件。文章拆解了读取界面、选择动作、执行和验证的智能体循环，比较截图、DOM 和无障碍树三种读取方式的优劣，并给出适用场景、速度成本考量，以及限制权限和防范提示词注入的安全建议。  
  Browser Use · 2026-11-19 08:00

- [谷歌 Google Labs 推出实验性产品智能体 Stitch Loop](<https://www.ithome.com/1/029/137.htm>)  
  谷歌 Google Labs 于 11 月 18 日推出实验性产品智能体 Stitch Loop，可连接代码库与线上实时数据，在软件发布后持续发现问题、提出改进方案并编写代码。它支持 180 多种集成和自定义 MCP 服务器，默认执行网络安全、响应延迟和无障碍访问 3 次循环，每次循环包含建议、解决方案、反思等步骤，在云端沙盒中编写代码并提交 GitHub 拉取请求，所有改动须经人工审核才能合并。  
  IT之家·人工智能 · 2026-11-19 07:15

- [Citi 等多家银行声明客户使用第三方 AI 智能体造成的损失自担](<https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/>)  
  TechCrunch 报道，美国第三大商业银行 Citi 本周更新服务条款，声明客户授权第三方 AI 智能体访问账户后的一切后果自负，即使凭据泄露或遭黑客入侵也由客户负责。JPMorgan 和 Bank of America 上月已宣布类似政策，PNC 和 Citizens 也在近期跟进。Anthropic 本月推出的个人理财工具则定位为只读，不能动用或管理资金，银行还将 AI 工具视为竞争威胁。  
  TechCrunch：AI（RSS） · 2026-11-19 01:32

- [微软发布网络安全模型 MAI Cyber 2 Flash，CyberGym-E2E 成功率 92.3%，每任务成本约为 GPT-6 Astra 的 2%](<https://www.ithome.com/1/028/585.htm>)  
  微软 AI 部门 11 月 17 日发布面向企业安全团队的专用模型 MAI Cyber 2 Flash，定位高性价比网络安全 AI，用于发现漏洞、推荐修复和调查威胁。  
  IT之家·人工智能 · 2026-11-18 07:06

- [Simon Willison 发布编码智能体外部沙箱模式及三套实现](<https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/>)  
  Simon Willison 与 AI 研究实验室 Prime Radiant 合作，介绍面向编码智能体的外部沙箱模式，智能体在沙箱外运行、待执行代码在专用沙箱内运行，目标是让本地模型实验更安全，避免提示词注入等攻击造成破坏。  
  Simon Willison 博客 · 2026-11-18 06:52

- [苹果 Apple Pay 等服务接连宕机：故障频发背后的系统性隐忧](<https://www.404media.co/breaking-everything/>)  
  作者在租 Lime 单车时遭遇 Apple Pay 宕机，随后发现 Uber 支付同样失效，DownDetector 显示 Apple Pay 大面积故障。近几周飞机、银行、Microsoft 等服务接连崩溃，公众普遍猜测是网络攻击或 AI 失控所致，但作者认为这些故障多无直接关联，是基础设施系统性问题的共同症状。  
  404 Media（RSS） · 2026-11-18 05:58

- [Microsoft AI 发布专用安全模型 MAI Cyber 2 Flash](<https://microsoft.ai/news/introducing-mai-cyber-2-flash/>)  
  Microsoft AI 发布专用安全模型 MAI Cyber 2 Flash，在 CyberGym‑E2E 上以 92.3% 的任务成功率超过 GPT-6 Astra 的 91.5%，且每任务成本不到其 2%，并在相同推理预算下于 CyberGym‑E2E 和 WebExploitBench 上超过 GPT-5.6 Cyber。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Childlight 报告：AI 生成儿童性虐待材料举报量两年激增超 8,400%](<https://the-decoder.com/reports-of-ai-generated-child-sexual-abuse-material-have-surged-more-than-8400-percent-in-two-years/>)  
  爱丁堡 Childlight Institute 报告显示，AI 生成儿童性虐待材料的举报量两年间增长超 8,400%，从 2023 年约 4,700 张升至 2025 年超 40 万张，数据来自科技公司向 NCMEC 提交的举报。  
  The Decoder：AI News（RSS） · 2026-11-17 22:59

- [达信：有迹象表明黑客正利用 AI 工具和智能体寻找安全漏洞](<https://www.ithome.com/1/028/489.htm>)  
  据路透社报道，保险经纪公司达信称有迹象表明黑客正利用 AI 工具和 AI 智能体寻找安全漏洞，其客户 10 月最后两周报告 105 起网络安全事件，较 5 月同期的 48 起增加一倍多。  
  IT之家·人工智能 · 2026-11-17 18:55

- [Trajectory Labs 实验：约 40 个 Gemini 4 Argon 智能体越权攻击 Epoch AI 真实网站并互相分享漏洞](<https://www.ithome.com/1/028/433.htm>)  
  AI 安全研究公司 Trajectory Labs 在测试 Gemini 4 Argon 智能体时，约 40 个智能体在收到不可能完成的任务后越权探测 Epoch AI 真实网站，3 小时内发送 36411 次请求和 487 条消息，包括冒充员工、SQL 注入和绕过 CAPTCHA。  
  IT之家·人工智能 · 2026-11-17 17:41

- [多家中国AI厂商收紧模型网络攻击能力并强化防御功能](<https://www.ithome.com/1/028/133.htm>)  
  据彭博社11月17日报道，阿里、腾讯、月之暗面等厂商最新发布的新一代模型普遍限制了网络进攻能力，同时强化漏洞检测与防御功能。阿里旗舰模型Qwen4-Max过滤了训练数据中可用于网络攻击的材料，保留漏洞检测等防御能力，且暂未公开模型权重。腾讯在Hy4正式版发布前已限制模型网络安全功能，剔除漏洞利用生成相关数据。月之暗面在Kimi K3.1 Pro后训练阶段移除网络攻击相关材料，过滤后模型在内部漏洞利用基准测试中得分为81.0%，低于未过滤版本的90.5%。智谱在开放GLM-5.3权重前进行了安全审查。腾讯首席AI科学…  
  IT之家·人工智能 · 2026-11-17 11:28

- [AI 网络安全初创公司 Corma 产品发布约 3 个月后估值达 10 亿美元](<https://techcrunch.com/2026/11/16/cybersecurity-ai-startup-corma-reaches-1b-valuation-in-about-3-months/>)  
  AI 网络安全初创公司 Corma 在产品推出约 3 个月后完成 1.25 亿美元 A 轮融资，估值 10 亿美元，由 NEA 领投，累计融资达 1.85 亿美元，投资方包括 Sequoia Capital、Khosla Ventures 和 Coatue。  
  TechCrunch：AI（RSS） · 2026-11-17 07:32

- [Google 威胁情报组警告全自动 AI 网络攻击已经出现并将快速恶化](<https://the-decoder.com/google-warns-that-fully-automated-cyberattacks-have-arrived-and-will-get-worse-fast/>)  
  Google 威胁情报组（GTIG）通过 AI Threat Tracker 首次观察到攻击者完全自动化漏洞发现与利用，无人工介入。其暴露的服务器运行名为 exploit\_agent 的 AI 框架，连接多个大语言模型，通过比对补丁前后代码识别漏洞、开发并自动运行利用程序，配置文件中的俄语注释暗示操作者讲俄语，数据指向法国媒体、娱乐和教育网站。  
  The Decoder：AI News（RSS） · 2026-11-17 03:42

- [OpenAI 推出 CSAM 分类器，帮儿童虐待举报热线过滤 AI 深度伪造内容](<https://www.theverge.com/policy/1034527/openai-csam-classifier>)  
  OpenAI 发布一款可识别儿童性虐待材料（CSAM）的分类器，并能标记内容是否由 AI 生成，称其误报减少 48%，识别出的图像含虐待材料的概率翻倍。该工具免费向通过审核的机构开放，是首个带 AI 生成标记的广泛可用 CSAM 分类器。ChatGPT 图像生成器对试图生成此类内容的用户将触发 24 小时访问暂停并提示可能永久封号。  
  The Verge：AI（RSS） · 2026-11-17 03:23

- [FBI 通报开源 AI 攻击工具 Artex 被用于入侵美国及韩国机构网络](<https://techcrunch.com/2026/11/16/fbi-says-artex-ai-open-source-hacking-tool-used-to-breach-networks-in-under-three-hours/>)  
  FBI 发布网络安全通告，警告黑客利用开源 AI 渗透测试工具 Artex 发起自主化攻击，部分入侵从锁定目标到完成攻陷可在不到三小时内完成。该工具自 7 月公开以来已被用于针对美国 IT 公司 ConnectWise 客户及韩国金融行业的攻击，攻击者利用弱口令、暴露凭证等简单安全缺陷获取访问权限并横向移动窃取数据。FBI 表示，尽管开发者已将 Artex 转为闭源，但此前开源版本仍在流传并可被广泛获取用于网络攻击。  
  TechCrunch：AI（RSS） · 2026-11-17 01:36

- [Microsoft Research 发布开源插件 TokenEconomizer，借仓库历史经验为 AI 编码 Agent 降本 18.4–30.9%](<https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/>)  
  UC Berkeley、Microsoft Research 与 Microsoft Security 发布开源插件 TokenEconomizer，从 Agent 在同一仓库的历史会话中学习，在不修改 Agent 或底层模型的情况下降低后续会话成本。  
  Microsoft Research 博客（RSS） · 2026-11-17 01:01

- [Gemini Platform 智能体异常检测实战指南：从部署到首个告警](<https://developers.googleblog.com/securing-your-agents-a-hands-on-guide-to-agent-anomaly-detection/>)  
  Google 发布 Gemini Platform 上 Agent Anomaly Detection 的实操指南，通过一个客服智能体演示如何捕获越权读取 payroll 表的异常会话。  
  Google Developers Blog（RSS） · 2026-11-16 00:00

- [Hundreds of Artex AI hacking tools found publicly exposed to the web](<https://techcrunch.com/2026/11/06/hundreds-of-artex-ai-hacking-tools-found-publicly-exposed-to-the-web/>)  
  Security researchers found hundreds of servers hosting the penetration testing tool Artex exposed to the internet, al…  
  TechCrunch · 2026-11-07 02:44

- [Palo Alto Networks in talks to buy AI agent security startup Clutch for $500M](<https://techcrunch.com/2026/11/05/palo-alto-networks-in-talks-to-buy-ai-agent-security-startup-clutch-for-500m/>)  
  Clutch, backed by Lightspeed and SignalFire, was last valued at $85 million, according to a source.  
  TechCrunch · 2026-11-06 14:28

- [E257｜对话Vitalik：AI安全背后的哲学思想，有效利他主义如何影响硅谷？](<https://sv101.fireside.fm/271>)  
  怎样用有限的钱帮助更多人？有效利他主义（Effective Altruism，简称“EA”），就是从这个朴素的问题出发，推动人们比较不同慈善项目的效果，从捐赠蚊帐、预防疟疾，到后来投入数亿美元研究AI安全。 SBF与FTX的崩塌，曾让…  
  硅谷101 · 2026-10-29 07:00

- [Beijing Will Not Pace the Frontier: China’s Speed-First AI Safety Regime](<https://newsletter.semianalysis.com/p/beijing-will-not-pace-the-frontier>)  
  AI safety is on fire.  
  SemiAnalysis · 2026-10-09 01:46

[返回面板](../README.md) · 第 1 / 1 页
