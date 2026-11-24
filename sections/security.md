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

## 相关资讯 · 11 条

- [2026 个人 AI 智能体横评：Hermes Agent、OpenClaw、Gemini Spark 等 7 款在记忆、安全与成本上的对比](<https://www.marktechpost.com/2026/11/22/best-personal-ai-agents-2026/>)  
  MarkTechPost 整理 2026 年 7 款个人 AI 智能体的横评，从记忆、安全、成本三个维度比较 Hermes Agent、OpenClaw、Gemini Spark、OpenAI dots、Meta Muse、Perplexity Personal Computer 及 NanoClaw 等加固分支。  
  MarkTechPost（RSS） · 2026-11-22 18:36

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Welcome Edgard Kagan](<https://www.a16z.news/p/welcome-edgard-kagan>)  
  A company building AI infrastructure, cybersecurity tools, or defense capabilities needs to understand how its techno…  
  a16z · 2026-11-20 23:03

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
