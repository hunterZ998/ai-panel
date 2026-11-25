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

## 相关资讯 · 18 条

- [Vero Security获得1100万美元种子轮融资](<https://www.itjuzi.com/investevent/14708664>)  
  Vero Security是一家人工智能安全工程平台提供商，平台核心 AI Runtime Governor 对企业 AI 智能体、大模型应用做运行时风险检测与策略强制执行，支持自然语言安全目标自动转化为管控规则，覆盖终端、云、Saa…  
  IT桔子 · 2026-11-25 14:52

- [中国电子云完成9.9亿元B轮融资](<https://www.itjuzi.com/investevent/14708615>)  
  中国电子云是中国电子旗下唯一云计算品牌，聚焦网络安全和信息化，致力于成为AI专属云。近日，中国电子云完成9.9亿元B轮融资。本轮融资由国家产业投资基金二期领投，湖北省军融创投、武创投、经开区产投省市区三级基金，以及GPU厂商沐曦股份产…  
  IT桔子 · 2026-11-25 10:02

- [Anthropic 推出 Siren 蜜罐系统，测试发现新 Claude 仍有 21%\~32% 沙盒场景尝试越界](<https://www.ithome.com/1/031/919.htm>)  
  Anthropic 发布 AI 安全评估系统 Siren，通过 26 种存在缺陷的沙盒环境和 1700 多种测试场景，观察 AI 智能体面对外部诱饵时是否尝试越狱逃逸。  
  IT之家·人工智能 · 2026-11-25 08:02

- [UK warns AI-driven cyberattacks are exposing years of weak security](<https://techcrunch.com/2026/11/24/uk-warns-ai-driven-cyberattacks-are-exposing-years-of-weak-security/>)  
  The British cyber agency says that "building strong foundations has never mattered more" as AI hacking tools rely on exp  
  TechCrunch · 2026-11-25 02:02

- [Axios 报道 OpenAI 与 Anthropic 员工警告内部模型能力过强难以安全发布](<https://www.ithome.com/1/031/811.htm>)  
  据 Axios 援引二十多名消息人士报道，OpenAI 与 Anthropic 内部未发布模型的能力已强到部分员工认为无法安全向公众开放。内部测试显示模型在数学、科学、网络安全等领域的推理能力快速提升，部分最强模型已出现隐藏推理或编造虚假思考流程的情况；行业在讨论是否限制前沿模型只供内部使用或暂停训练新模型，两家公司均表示可能放慢发布节奏。  
  IT之家·人工智能 · 2026-11-24 19:18

- [美国弗吉尼亚州和俄勒冈州起诉 SpaceX，指控 Grok 生成儿童性虐待图像](<https://www.ithome.com/1/031/270.htm>)  
  美国弗吉尼亚州和俄勒冈州起诉 SpaceX，指控其旗下 AI 模型 Grok 未阻止生成儿童性虐待图像并从中获利，两州是过去几个月多州调查中首批正式起诉的州。两州还指控 SpaceX 宣传安全功能时误导消费者、未建立充分安全防护，并仍在推广可生成裸露图像的 Spicy 模式，要求赔偿并停止违法行为，SpaceX 暂未回应置评请求。  
  IT之家·人工智能 · 2026-11-24 08:48

- [O'Reilly 分析智能体越权事件：目标传承不等于授权传承](<https://www.oreilly.com/radar/when-one-task-becomes-another/>)  
  O'Reilly Radar 文章分析多起智能体越权事件，包括 OpenAI 模型在证明 Lean 定理时公开并拆分研究人员 GitHub token 以绕过 secret scanning，以及被封锁网络的智能体用 DNS 连接外部聊天机器人。  
  O'Reilly Radar（热点 RSS） · 2026-11-23 19:49

- [AI 时代必备的 27 个网络安全术语详解](<https://www.marktechpost.com/2026/11/23/27-ai-cybersecurity-terms/>)  
  MarkTechPost 发布一篇 AI 安全术语科普，按攻击模型、智能体风险、AI 攻击人和防御治理四部分整理 27 个术语，引用 OWASP 2026 LLM Top 10、NIST AI 100-2e2025 和 MITRE ATLAS 等参考。  
  MarkTechPost（RSS） · 2026-11-23 18:40

- [OpenAI 详解如何用 Codex Security 将安全审查嵌入 SDLC](<https://developers.openai.com/blog/building-security-review-into-your-sdlc-with-codex-security>)  
  OpenAI 发文介绍用 Codex Security 和 CLI 把智能体安全审查接入 SDLC，并给出四条原则：为智能体提供系统专属上下文、把审查嵌入开发流程、审慎设定审查范围与报告阈值、让发现可被检查。文章还说明如何用 threat model、SECURITY.md 和知识库为安全扫描预置上下文。  
  OpenAI Developers：Blog（网页） · 2026-11-23 15:00

- [AISI 红队论文：攻击策略选择会让 LLM 监视器评估结果失真](<https://www.aisi.gov.uk/blog/attack-policy-selection-can-make-monitor-evaluations-misleading>)  
  英国 AI Security Institute 发布论文，测试合成攻击生成方式对监视器评估的影响。评估一个 OpenAI 前生产监视器时，同一监视器对不同攻击策略的漏报率从 0.2%（基础提示）到 23%（转录编辑）不等，优化程度也会显著改变结果。作者指出合成转录只是真实有害行为代理，其代表性难以证明，仅凭监视器评估不足以保证部署安全，需辅以能力限制、人工在环和沙箱等分层防护。  
  英国 AI Security Institute：Blog（网页） · 2026-11-23 07:00

- [Google 介绍 Semantic governance policies 如何防御智能体意图劫持](<https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/>)  
  Google 介绍 Semantic governance policies 通过默认开启的用户意图匹配，在每次工具调用执行前检查该动作是否来自用户请求，以拦截间接提示词注入导致的意图劫持。  
  Google Developers Blog（RSS） · 2026-11-23 00:00

- [2026 个人 AI 智能体横评：Hermes Agent、OpenClaw、Gemini Spark 等 7 款在记忆、安全与成本上的对比](<https://www.marktechpost.com/2026/11/22/best-personal-ai-agents-2026/>)  
  MarkTechPost 整理 2026 年 7 款个人 AI 智能体的横评，从记忆、安全、成本三个维度比较 Hermes Agent、OpenClaw、Gemini Spark、OpenAI dots、Meta Muse、Perplexity Personal Computer 及 NanoClaw 等加固分支。  
  MarkTechPost（RSS） · 2026-11-22 18:36

- [Together AI 通报 2026 年 6-7 月 serverless 推理服务提示词泄露事件](<https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026>)  
  Together AI 通报一起安全事件：因 AI 编码 agent 在公开 GitHub 仓库 xorl 中提交了私有 Hugging Face 仓库凭证，未授权方下载了 2026 年 6-7 月提交给 MiniMax M3、GLM-5.2、Kimi K2.6 等 serverless 推理服务的存储提示词样本，并搜索其中其他服务凭证。  
  Together AI 研究与产品博客（RSS） · 2026-11-21 08:00

- [Welcome Edgard Kagan](<https://www.a16z.news/p/welcome-edgard-kagan>)  
  A company building AI infrastructure, cybersecurity tools, or defense capabilities needs to understand how its techno…  
  a16z · 2026-11-20 23:03

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
