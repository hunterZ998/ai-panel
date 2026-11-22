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

## 相关资讯 · 9 条

- [The Verge 播客：Anthropic IPO 后能否继续把安全放在第一位](<https://www.theverge.com/podcast/1038701/anthropic-ipo-ai-safety-openai-nvidia-structure>)  
  The Verge 的 Nilay Patel 与资深 AI 记者 Hayden Field 对谈 Anthropic 在纳斯达克上市（发行价 $83，一度涨至 $111）后的前景，探讨其能否在公开市场压力下继续投入 AI 安全。  
  The Verge：AI（RSS） · 2026-11-21 23:00

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [研究者向 AI 供应链埋入 200 万个金丝雀，揭露敏感数据泄露](<https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/>)  
  研究者在经过 OpenRouter 等 AI 路由的请求中埋入 200 万个金丝雀链接，测试敏感信息是否会沿 AI 服务链泄露，结果显示这些数据像筛子一样大量外泄。  
  Ars Technica：AI（RSS） · 2026-11-21 04:59

- [Welcome Edgard Kagan](<https://www.a16z.news/p/welcome-edgard-kagan>)  
  A company building AI infrastructure, cybersecurity tools, or defense capabilities needs to understand how its techno…  
  a16z · 2026-11-20 23:03

- [Extrordinas获得150万美元天使轮融资](<https://www.itjuzi.com/investevent/14708371>)  
  Extrordinas是一家网络安全服务提供商，打造端到端 AI 辅助网络事件响应平台，支持一键取证采集、威胁溯源调查、AI 辅助研判与自动生成业务侧报告，覆盖勒索软件、商业邮件劫持、内部威胁、云及身份入侵等安全事件，面向 IR 服务…  
  IT桔子 · 2026-11-20 15:57

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
