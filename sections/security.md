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

## 相关资讯 · 14 条

- [2026 个人 AI 智能体横评：Hermes Agent、OpenClaw、Gemini Spark 等 7 款在记忆、安全与成本上的对比](<https://www.marktechpost.com/2026/11/22/best-personal-ai-agents-2026/>)  
  MarkTechPost 整理 2026 年 7 款个人 AI 智能体的横评，从记忆、安全、成本三个维度比较 Hermes Agent、OpenClaw、Gemini Spark、OpenAI dots、Meta Muse、Perplexity Personal Computer 及 NanoClaw 等加固分支。  
  MarkTechPost（RSS） · 2026-11-22 18:36

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Welcome Edgard Kagan](<https://www.a16z.news/p/welcome-edgard-kagan>)  
  A company building AI infrastructure, cybersecurity tools, or defense capabilities needs to understand how its techno…  
  a16z · 2026-11-20 23:03

- [多家银行警告 AI 智能体操作损失可能由用户自己承担](<https://www.ithome.com/1/029/646.htm>)  
  多家大型银行近期向客户警告，AI 智能体获授权访问金融账户后执行的操作可能被视为用户本人行为，损失需用户自担。Ally Bank、摩根大通、花旗分别通过邮件和应用提示说明 AI 可能犯错或产生幻觉，已授权交易或无法撤销；银行还提醒用户不要交出登录凭据。  
  IT之家·人工智能 · 2026-11-19 18:59

- [AI 攻击时代的四支柱安全事件响应指南：从 Fireworks AI 到 Klue 的实践复盘](<https://www.marktechpost.com/2026/11/19/ai-security-incident-response-playbook-2026/>)  
  文章指出 AI 驱动的攻击正以机器速度、全球规模加速，并梳理 2026 年 5 月至 11 月多起 AI 平台披露的安全事件，受影响对象包括 npm/PyPI 上的 Mistral AI 等 SDK、Klue、Fireworks AI、Cursor、Railway 和 Warp 等平台，共同焦点是被存储的环境变量与 API 密钥。  
  MarkTechPost（RSS） · 2026-11-19 18:45

- [德国 BSI 将网络威胁评估上调为严峻至危急，指出 AI 智能体降低攻击门槛](<https://www.ithome.com/1/029/609.htm>)  
  德国联邦信息安全局（BSI）11 月 19 日发布年度报告，将信息技术系统威胁评估从去年的严峻上调为严峻至危急，理由是智能体 AI 系统让攻击者更容易发现和利用漏洞。其网络安全指数从 2025 年年中的 124 点升至今年年中的 238 点；报告称攻击越来越快、便宜且有针对性，攻击者开始借助 AI 模型直接攻击系统，并警告许多企业尤其是中小企业防御动作太慢，未在受攻击前用 AI 排查漏洞。  
  IT之家·人工智能 · 2026-11-19 18:00

- [Dragos 用约 200 万条金丝雀令牌提示词追踪 AI 供应链泄露，发现三家供应商遭入侵](<https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens>)  
  Dragos 研究团队在 2026 年 7 月至 11 月向 AI 服务商提交约 200 万条含唯一金丝雀令牌的提示词，追踪推理后的数据流向。发现三家托管供应商遭入侵（最大一起涉及约几百个 AWS 密钥被窃），推理市场转售商仅靠日志功能即可查看并留存客户提示词，且多起案例显示隐私设置被无视：发往美国供应商的提示词流向中国 AI 机构，一条链接在 24 天后出现在飞书群聊中。  
  Hacker News：AI 热帖 · 2026-11-19 13:00

- [Browser Use 讲解 AI 智能体如何通过界面操作软件](<https://browser-use.com/posts/what-is-computer-use>)  
  Browser Use 发布科普文章，讲解计算机使用类智能体如何像人一样通过界面点击、输入和滚动来操作软件。文章拆解了读取界面、选择动作、执行和验证的智能体循环，比较截图、DOM 和无障碍树三种读取方式的优劣，并给出适用场景、速度成本考量，以及限制权限和防范提示词注入的安全建议。  
  Browser Use · 2026-11-19 08:00

- [Satya Nadella 在 DealBook Summit 谈 AI 时代大量关键基础设施固件无法修补](<https://techcrunch.com/2026/11/18/amidst-fears-of-ai-cyberattacks-satya-nadella-says-lots-of-critical-infrastructure-is-unpatchable/>)  
  Microsoft CEO Satya Nadella 在 The New York Times DealBook Summit 上表示，美国大量关键基础设施（包括数据中心冷却设备、HVAC 和交通系统）存在无法修补的软件漏洞，且都联网运行，在 AI 辅助网络攻击时代极易被利用。  
  TechCrunch：AI（RSS） · 2026-11-19 07:45

- [谷歌 Google Labs 推出实验性产品智能体 Stitch Loop](<https://www.ithome.com/1/029/137.htm>)  
  谷歌 Google Labs 于 11 月 18 日推出实验性产品智能体 Stitch Loop，可连接代码库与线上实时数据，在软件发布后持续发现问题、提出改进方案并编写代码。它支持 180 多种集成和自定义 MCP 服务器，默认执行网络安全、响应延迟和无障碍访问 3 次循环，每次循环包含建议、解决方案、反思等步骤，在云端沙盒中编写代码并提交 GitHub 拉取请求，所有改动须经人工审核才能合并。  
  IT之家·人工智能 · 2026-11-19 07:15

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
