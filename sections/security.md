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

- [华中科技大学与阿里巴巴联合成立 AI 前沿安全研究中心，课题覆盖大模型安全攻防等](<https://www.ithome.com/1/030/423.htm>)  
  IT之家 11 月 21 日消息，华中科技大学与阿里巴巴集团于 11 月 18 日签署合作协议，聚焦 AI 安全共建“智能攻防与前沿安全联合研究中心”，首批启动 9 个课题。 IT之家获悉，联合研究中心首批启动的 9 个课题，覆盖 大…  
  IT之家 · 2026-11-21 17:57

- [Wall Street Week \| Gaming Blockbuster, Healthcare Costs, Cybersecurity Meets AI](<https://www.bloomberg.com/news/videos/2026-11-21/wall-street-week-gaming-blockbuster-cybersecurity-video>)  
  Bloomberg · 2026-11-21 08:13

- [Welcome Edgard Kagan](<https://www.a16z.news/p/welcome-edgard-kagan>)  
  A company building AI infrastructure, cybersecurity tools, or defense capabilities needs to understand how its techno…  
  a16z · 2026-11-20 23:03

- [Extrordinas获得150万美元天使轮融资](<https://www.itjuzi.com/investevent/14708371>)  
  Extrordinas是一家网络安全服务提供商，打造端到端 AI 辅助网络事件响应平台，支持一键取证采集、威胁溯源调查、AI 辅助研判与自动生成业务侧报告，覆盖勒索软件、商业邮件劫持、内部威胁、云及身份入侵等安全事件，面向 IR 服务…  
  IT桔子 · 2026-11-20 15:57

- [Microsoft AI 发布专用安全模型 MAI Cyber 2 Flash](<https://microsoft.ai/news/introducing-mai-cyber-2-flash/>)  
  Microsoft AI 发布专用安全模型 MAI Cyber 2 Flash，在 CyberGym‑E2E 上以 92.3% 的任务成功率超过 GPT-6 Astra 的 91.5%，且每任务成本不到其 2%，并在相同推理预算下于 CyberGym‑E2E 和 WebExploitBench 上超过 GPT-5.6 Cyber。  
  Microsoft AI：官方博客（RSS） · 2026-11-18 02:15

- [Childlight 报告：AI 生成儿童性虐待材料举报量两年激增超 8,400%](<https://the-decoder.com/reports-of-ai-generated-child-sexual-abuse-material-have-surged-more-than-8400-percent-in-two-years/>)  
  爱丁堡 Childlight Institute 报告显示，AI 生成儿童性虐待材料的举报量两年间增长超 8,400%，从 2023 年约 4,700 张升至 2025 年超 40 万张，数据来自科技公司向 NCMEC 提交的举报。  
  The Decoder：AI News（RSS） · 2026-11-17 22:59

- [达信：有迹象表明黑客正利用 AI 工具和智能体寻找安全漏洞](<https://www.ithome.com/1/028/489.htm>)  
  据路透社报道，保险经纪公司达信称有迹象表明黑客正利用 AI 工具和 AI 智能体寻找安全漏洞，其客户 10 月最后两周报告 105 起网络安全事件，较 5 月同期的 48 起增加一倍多。  
  IT之家·人工智能 · 2026-11-17 18:55

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
