# 全部关联研究

[返回面板](../README.md) · 第 1 / 1 页

含尚未归入六赛道的公开研究。

### 语音Agent从模型走向公共服务工作流

ElevenLabs称Nemotron 3.5 Super VL已接入ElevenAgents；另称其语音模型与NVIDIA基础设施用于波兰中央医疗预约平台的提醒及改约语音代理。

**判断**　若提醒与改约效果提高且人工接管成本下降，语音 Agent 的竞争可能转向流程接入和交付运营。

**验证**　以短信加自动呼叫为对照，比较到诊、改约完成、人工接管及每次有效提醒总成本；确认渠道、患者风险和基线一致。

[ElevenLabs与NVIDIA合作公告](<https://elevenlabs.io/blog/nvidia>) · [Penn Medicine：Switchboard预约沟通项目](<https://chti.upenn.edu/switchboard>)

### 有边界的决策是否成为独立模型产品

Google发布Gemini Decisions API，对多模态输入返回选项概率与置信度。

**判断**　若概率校准和误判成本优于通用生成模型，有限选项决策可能成为可复用的工作流组件。

**验证**　选择真实审核或路由任务，在同一质量门槛下比较误判成本、概率校准、端到端时延及包含重试的总成本。

[Google Gemini Decisions发布](<https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/>) · [Balancing Classification and Calibration Performance in Decision-Making LLMs](<https://aclanthology.org/2026.findings-acl.610/>) · [Anthropic：Building Effective Agents](<https://www.anthropic.com/engineering/building-effective-agents>)

### 世界动作模型从伙伴测试走向开放适配

Runway公开Praxis-1权重及推理、微调代码，采用Apache 2.0。

**判断**　若模型可跨本体迁移且适配成本下降，竞争优势可能更多落在真实数据、控制接口和部署反馈。

**验证**　比较跨本体任务成功率、适配数据量和工程时长，并记录推理硬件、控制延迟、人工接管及长时间运行失败。

[Runway Praxis-1公开发布](<https://runway.com/news/company-news/praxis-1-is-now-available>) · [The Embodiment Gap in Robot Foundation Models](<https://arxiv.org/html/2608.18433>)

### 端侧小模型成为工具调用组件

Tether于11月11日发布0.8B BotPsy工具调用模型，开放Apache 2.0权重；官方同时说明它会出错，面向研究教育，不适用于安全关键、高风险自动决策，以及金钱、个人信息和健康等敏感应用。

**判断**　若本地小模型能稳定完成工具链，应用机会可能集中在权限管理、工具接入与失败恢复。

**验证**　在真实设备和授权环境测试连续任务成功率、联网依赖、耗电、内存与延迟，并记录误操作后的恢复或撤销能力。

[QVAC BotPsy官方说明](<https://qvac.tether.io/blog/on-device-ai-agent-botpsy>) · [AgentFloor: How Far Up the Tool Use Ladder Can Small Open-Weight Models Go?](<https://arxiv.org/html/2605.00334v1>) · [Anthropic：Building Effective Agents](<https://www.anthropic.com/engineering/building-effective-agents>)

### AI4S从通用预测转向细胞条件化工具

DeepMind宣布AlphaGenome 2，支持细胞类型与状态条件化预测；非商业研究可通过AlphaGenome API使用，商业研究为私有预览。

**判断**　若预测能提高实验命中率或减少无效验证，价值可能体现为实验优先级工具，而非单一预测分数提升。

**验证**　寻找独立实验验证及具体使用流程，核对实验命中率、节省的验证轮次和商业授权条件；不将模型发布等同于临床或药物研发成功。

[DeepMind AlphaGenome 2公告](<https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/>) · [Advancing regulatory variant effect prediction with AlphaGenome](<https://www.nature.com/articles/s41586-025-10014-0>)

### Agent分发可能重塑软件获客与交易基础设施

a16z提出B2A框架，讨论面向Agent的产品、分发及支付身份基础设施。

**判断**　若 Agent 带来的订单可归因且持续转化，软件分发的竞争可能转向可被调用、可被选择和可信交易。

**验证**　跟踪可归因的 Agent 来源订单、付费转化、退款与争议处理，并比较渠道集中度、平台抽成及客户关系归属。

[a16z：Welcome to the B2A Economy](<https://a16z.news/p/welcome-to-the-b2a-economy>) · [ACP Affiliate Attribution RFC（Proposal）](<https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/blob/main/rfcs/rfc.affiliate_attribution.md>)

### 千问 4 Max 的任务成本降幅能否带进业务预算？

阿里在自有 Work360 评测上报告，相比上代，High 推理档消耗的 Token 少了 35%，平均每项任务成本下降约 60%。独立测试方 Spring Prompt 在商品文案测试中测得，千问 4 Max 有 39.3% 可稳定直接发布，定价相近的 GPT-6.1 Terra 为 64.3%。

**判断**　模型选型应按具体交付物分别核算每份合格产出的成本。生成一份文案更便宜，只有在修改和重试没有吃掉节省时，才会降低交付成本。

**验证**　固定商品、合规规则和验收人，对每个模型重复跑相同简报；计入失败调用及编辑工时，再比较每份可上线文案的总成本。

[阿里云发布说明与 Work360 结果](<https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max>) · [Spring Prompt 独立商品文案等任务评测](<https://springprompt.com/blog/qwen4-max-review>)

### Agent 中途宕机，能否从上一笔已完成操作继续？

Pydantic AI Harness 新增 Azure Durable Task 集成，可将模型请求、函数工具及 MCP 调用分别记录为活动。Worker 中断后可以重放已记录结果，从中断处继续。

**判断**　有退款、写库等操作的 Agent，需要分别验证流程能否恢复、外部动作会不会重复发生。仅看任务最后是否完成，会漏掉重复执行的损失。

**验证**　对同一套订单，在退款成功、结果落盘前注入故障；测量重复退款率、人工纠错时间，并分别比较有无业务幂等键。

[Pydantic 发布与退款流程示例](<https://pydantic.dev/articles/azure-durable-task-pydantic-ai>) · [微软 Durable Task 活动执行语义](<https://learn.microsoft.com/en-us/azure/azure-functions/durable-functions-types-features-overview>)

[返回面板](../README.md) · 第 1 / 1 页
