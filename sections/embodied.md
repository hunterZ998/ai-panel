# 具身智能

[返回面板](../README.md) · 第 1 / 1 页

## 赛道研究

**用真机复测检验仿真训练的收益**　世界模型有助于复现昂贵或少见的训练场景。长时程漂移、摩擦和接触力误差会影响迁移，因此要在相同任务上比较真机表现。

验证　观察引入仿真前后的真机任务成功率、接管次数与训练成本。

出处　AI策略组-本周三知-20261101.docx，第 5 段

**仿真得分能预测机器人在真机上的表现吗？**　周报把仿真用于机器人策略评测，也指出摩擦、接触力和长时程漂移会限制评测的可信度。据此可检验：在涉及接触的操作中，仿真给策略排出的名次或估计的成功率，可能偏离同一任务的真机结果。

出处　AI策略组-本周三知-20261101.docx · 正文第5段

- 支持 · [同任务比较中，仿真场景与真机的匹配程度影响策略排名](<https://www.withplayground.ai/blog/sim-to-real-gap>) · 同任务评测中，未复刻真机场景的仿真排名与真机排名相关系数为 0.75；场景匹配的研究中为 0.91。跨团队、跨场景的 260 组比较中，仅 73% 选出同一胜者。结果支持跨场景使用时需真机核验；视觉、设备也会影响排序，无法单独归因于摩擦误差。

- 削弱 · [Genie Sim 的 22 组配对测试中，仿真与真机得分高度一致](<https://arxiv.org/html/2611.15020v1>) · 局部反例。研究者用真机数据微调策略并对齐场景，在 22 组机器人和任务配对上测得评分相关系数 0.9686、平均绝对误差 0.0405。对这些已经校准的任务，仿真可以较好预测真机评分。该结果未检验向新材质、新设备或新生产线迁移。

## 相关资讯 · 21 条

- [字节押注的机器人“手”闯关IPO，大寰已八轮融资加身](<https://36kr.com/p/4086477958031752?f=rss>)  
  当人形机器人企业还在寻找规模化量产的突破口，上游核心零部件厂商已开始叩响资本市场的大门。 近日，大寰机器人科技股份有限公司（简称：大寰机器人）启动上市辅导。 这家获得字节跳动、IDG资本等机构加持的企业，正在从工业自动化迈向具身智能。 01  
  36氪 · 2026-11-26 21:27

- [具身智能，2027年或迎洗牌](<https://36kr.com/p/4086453904091784?f=rss>)  
  融资遇冷下，具身智能企业现在面临一个现实问题：钱该继续花在基础研发上，还是先用商业化项目造血。 在智源REAL物理AI开放日“物理AI模型会客厅”上，智源具身模型研究中心负责人王鹏伟把这个问题抛给现场嘉宾。参与讨论的有千寻智能联合创始人高阳  
  36氪 · 2026-11-26 21:25

- [具身智能生态大集结：喧嚣、内卷与自救](<https://36kr.com/p/4086496959638149?f=rss>)  
  二手玫瑰的有一句很火的歌曲片段，大家一定刷到过： “大哥你玩摇滚，你玩它有啥用。” 把这句词换一个词，就贴到了2026年具身智能行业的前台：大哥你玩生态，你玩它有啥用。 过去几个月，行业像赶场一样在开会。 1月，傅利叶在上海举办第二届具身智  
  36氪 · 2026-11-26 21:04

- [价值判断：跌停板的投资机会和风险提示（11月24日）｜上市公司观察](<https://www.tmtpost.com/8219199.html>)  
  盘面上人形机器人与消费电子走强，工业金属与贵金属领跌。本期两只标的均为首次跌停且处高估值一端：英力特因重大资产重组复牌，停牌前累积的涨幅在首日一字跌停中回吐，收盘约为定价的近五倍；鑫铂股份受光伏铝型材板块走低与业绩由盈转亏拖累，高开后…  
  钛媒体 · 2026-11-26 17:11

- [价值判断：涨停板的投资机会和风险提示（11月24日）｜上市公司观察](<https://www.tmtpost.com/8219191.html>)  
  盘面主线是猪肉与机器人双线活跃，生猪价格走强带动养殖股，人形机器人延续热度。本期六只标的分为两端：三只首板折价，东方精工收在定价的三成四，阳光照明与天龙股份约在七成二与七成四；一只四连板与两只三连板溢价，中京电子收在一点九倍，金新农达…  
  钛媒体 · 2026-11-26 17:10

- [夏仙创新连续完成三轮数千万元融资](<https://www.itjuzi.com/investevent/14708747>)  
  夏仙创新专注机器人操作零样本泛化，提出以物体为中心的 ORGA 架构，让机器人从少量示教中理解物体结构、空间约束与交互关系，而非死记动作轨迹，从而在新物体、新场景、新本体中举一反三完成操作。近日获悉，夏仙创新在三个月内连续完成三轮数千…  
  IT桔子 · 2026-11-26 15:36

- [周群飞已投百家机器人](<https://www.pedaily.cn/first/195508.shtml>)  
  女首富掌舵的蓝思科技，披露了一个颇为惊人的数字：公司已在一级市场战略投资超过50家机器人产业链企业，覆盖超过100家国内机器人客户。 从具身智能大模型、机器人本体，到灵巧手、脑机接口，甚至机器人租赁，蓝思科技的投资触角几乎延伸到了整条…  
  投资界 · 2026-11-26 08:37

- [Nidus获得3000万美元战略投资](<https://www.itjuzi.com/investevent/14708679>)  
  Nidus是一家具身智能科技研发商，研发机器人基础模型，为传统工业机器人提供泛化操作能力，主打国防工厂线束精密装配自动化，采用本地化主权 AI 框架，保障涉密生产环境下数据可控，商业化上线 4 个月即达成七位数营收。近日，Nidus获…  
  IT桔子 · 2026-11-25 16:20

- [Amazon 用“冷热气体”模型求解仓库多智能体路径规划](<https://www.amazon.science/blog/lazy-gas-hot-gas-and-a-thousand-robots>)  
  Amazon Robotics 在 ICML 论文中把仓库机器人路径规划建模为气体粒子运动，用 Schrödinger bridge（热气体模型）快速逼近最优传输（冷气体模型）的解。其多边际最优传输（MMOT）方法在 150×150 网格、1,125 台机器人、T=30 的场景下以 478 秒求出最优轨迹，而非 TU 的 NP-hard 形式 12 小时常连一个可行解都找不到。  
  Amazon Science（RSS） · 2026-11-25 01:49

- [Artificial Analysis 发布 AA-Robotics-Sim v0.1，测试语言模型控制仿真人形机器人](<https://artificialanalysis.ai/articles/aa-robotics-sim>)  
  Artificial Analysis 推出 AA-Robotics-Sim v0.1，让前沿语言模型在编码 Agent 框架中控制仿真 Unitree G1 人形机器人（29 关节、三指手、头部相机），完成 10 项家庭与轻工业任务，每任务 5 次练习后在新场景评估 10 次。  
  Artificial Analysis 完整文章（网页） · 2026-11-25 00:00

- [Ai2 发布 RoboTrack 点跟踪基准、RoboTrack-15M 数据集与 RoboTracker 系列模型](<https://huggingface.co/blog/allenai/robotrack>)  
  Ai2 发布面向机器人操作的点跟踪基准与训练数据套件 RoboTrack，包含 307 段人工标注视频的 RoboTrack-Bench（2522 条轨迹，来自 DROID、Ego-Exo4D、MolmoAct 2 和 EgoVerse）和基于 MolmoSpaces 生成 1500 万条轨迹的 RoboTrack-15M。  
  Hugging Face 社区博客（混合发现） · 2026-11-24 01:20

- [Ai2 发布 RoboTrack 点跟踪基准与数据集，并推出 RoboTracker 模型](<https://allenai.org/blog/robotrack>)  
  Ai2 发布 RoboTrack，一套面向机器人操作的点跟踪基准与训练数据套件，含 307 段人工标注视频、2522 条点轨迹的 RoboTrack-Bench，以及基于 MolmoSpaces 生成的 RoboTrack-15M 合成训练集。  
  Ai2 / Allen Institute for AI（RSS） · 2026-11-23 16:00

- [Token卷到触觉了！机器人终于有了通用手感](<https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw%3D%3D&mid=2247942770&idx=1&sn=8fa8b6872870888a01b478c05b7bbaac>)  
  量子位 · 2026-11-10 13:24

- [中国卷大模型，美国缺机器人：在硅谷做具身智能背后的「中国启示录」](<https://mp.weixin.qq.com/s?__biz=MzA5ODEzMjIyMA%3D%3D&mid=2247748707&idx=2&sn=9961a7f19de98ddc48368a8305639d3b>)  
  AI科技评论 · 2026-11-10 09:30

- [500小时人类视觉-触觉数据，到底能让机器人学到什么？\| GAIR Paper 140](<https://mp.weixin.qq.com/s?__biz=MzA5ODEzMjIyMA%3D%3D&mid=2247748650&idx=2&sn=b1bb761d93a9cf76643161b247f47a27>)  
  AI科技评论 · 2026-11-09 16:16

- [苹果罕见公布人形机器人进展，宇树 G1 背着一台跑千问的 Mac mini](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651115625&idx=1&sn=5c60f9caed20fc1741a5bd18de6c45e4>)  
  APPSO · 2026-11-09 15:41

- [具身智能出海，物流先行](<https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw%3D%3D&mid=2247940695&idx=2&sn=6c551886ee57dd136d7f99371d2c7fb0>)  
  量子位 · 2026-11-09 15:07

- [State of the Themes](<https://www.citriniresearch.com/p/state-of-the-themes-556>)  
  We started in AI, and repeated the blueprint with fiscal primacy, GLP-1s, robotics, energy, defense, healthcare… …and…  
  Citrini Research · 2026-11-05 04:28

- [深度丨宇树上市首份季报：增收不增利，具身智能开始为模型和算力买单](<https://mp.weixin.qq.com/s?__biz=MzA3NzUxMzM5MQ%3D%3D&mid=2453901261&idx=1&sn=66e992da6fed1ed0a81d25ec8da5191c>)  
  Z Finance · 2026-11-01 19:52

- [154. 对Dyna创始人Lindon的3小时访谈：机器人世界的迷雾、分歧与抉择，修心、《沉思录》与王阳明](<https://www.xiaoyuzhoufm.com/episode/6acf81f0195d838e2af1e281?utm_source=rss>)  
  今天我们的嘉宾是一位美国连续创业者，Dyna Robotics创始人兼CEO Lindon Gao。此前，他做过两段生意，一次完整的创业。Dyna可以说是他的第四次创业了。 在硅谷，Dyna和之前来过我们节目的Pi（Physical…  
  张小珺商业访谈录 · 2026-10-15 08:00

- [Robotics Tipping Point: A Citrini Field Trip](<https://www.citriniresearch.com/p/robotics-tipping-point-a-citrini>)  
  Under its new branding of “Physical AI” , is robotics evolving from Bay Area backwaters to a true technological renai…  
  Citrini Research · 2026-09-16 22:34

[返回面板](../README.md) · 第 1 / 1 页
