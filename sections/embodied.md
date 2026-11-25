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

## 相关资讯 · 22 条

- [具身智能2026下半场：订单挤水分，大脑“祛魅”，资本算细账](<https://36kr.com/p/4085020019632775?f=rss>)  
  这段时间，宇树科技创始人王兴兴在公开场合反复表示，人形机器人技术的发展已接近临界点，可能在1到2年就会迎来具身智能的“ChatGPT时刻”。 但他也表达过一个观点，从技术突破到扩散至每个人使用，大概率仍需要5–10年的时间。 然而有些…  
  36氪 · 2026-11-25 20:17

- [正式开场就在明天！请以我的名字呼唤我，WISE2026就差你了](<https://36kr.com/p/4085010597210754?f=rss>)  
  今年是WISE的第十四年，也是头一回把会期从两天拉到三天。主题就一句话：“请以我的名字呼唤我，CALL ME BY NAME”。主会场、2000平米的未来之城、世界咖啡产业对接全拉满，另外另开两桌——具身智能与文商旅、了不起的OPC两…  
  36氪 · 2026-11-25 18:11

- [错过宇树，日韩等外资抢投中国具身智能公司](<https://36kr.com/p/4084865144826246?f=rss>)  
  过去两年，宇树科技的机器人不止在国内火，更是火到了全球，在海外多次刷屏。 王兴兴不仅成为英伟达年会晚宴的受邀客人，宇树更是被马斯克评价“实力超群，堪称顶级强劲对手”。 但翻遍了宇树科技历史以来的所有融资，股东名单是清一色的中资，没有一…  
  36氪 · 2026-11-25 17:54

- [Nidus获得3000万美元战略投资](<https://www.itjuzi.com/investevent/14708679>)  
  Nidus是一家具身智能科技研发商，研发机器人基础模型，为传统工业机器人提供泛化操作能力，主打国防工厂线束精密装配自动化，采用本地化主权 AI 框架，保障涉密生产环境下数据可控，商业化上线 4 个月即达成七位数营收。近日，Nidus获…  
  IT桔子 · 2026-11-25 16:20

- [逐际动力与商汤大装置合作，推进机器人仿真训练与测试](<https://www.163.com/tech/article/LCJAQTGC00098IEO.html>)  
  网易科技 · 2026-11-25 14:31

- [逐际动⼒与商汤⼤装置达成合作 ⽀撑机器⼈仿真训练与测试](<https://www.163.com/dy/article/LCJAK388053469RG.html>)  
  网易科技频道 · 网易号 · 2026-11-25 14:28

- [Momenta领投，前商汤执行研究总监创业，押注AI for AI Infra](<https://36kr.com/p/4084548550371977?f=rss>)  
  文｜ 郭英姿 编辑｜ 巴芮 从商汤出来创业的人，凑得出当今中国半条AI产业链。 曹旭东的Momenta，闫俊杰的MiniMax，还有Vivix AI的刘宇、流形空间的武伟等等。 不过大多数人都聚焦在大模型、具身智能、自动驾驶、视频生成这些最  
  36氪 · 2026-11-25 10:19

- [Amazon 用“冷热气体”模型求解仓库多智能体路径规划](<https://www.amazon.science/blog/lazy-gas-hot-gas-and-a-thousand-robots>)  
  Amazon Robotics 在 ICML 论文中把仓库机器人路径规划建模为气体粒子运动，用 Schrödinger bridge（热气体模型）快速逼近最优传输（冷气体模型）的解。其多边际最优传输（MMOT）方法在 150×150 网格、1,125 台机器人、T=30 的场景下以 478 秒求出最优轨迹，而非 TU 的 NP-hard 形式 12 小时常连一个可行解都找不到。  
  Amazon Science（RSS） · 2026-11-25 01:49

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

- [优理奇机器人（UniX AI）完成5亿元Pre-A轮融资，推动具身智能规模化落地](<https://www.pedaily.cn/first/190983.shtml>)  
  优理奇智能科技（苏州）有限公司完成5亿元Pre-A轮融资，老股东谢诺投资、涌铧投资超额追加投资，新进机构含绿地集团、柯力传感等。本轮融资将支持其深化具身智能研发与产品迭代，拓展物业、酒店等场景应用，推动产业化落地。（投资界讯） 原文链接  
  投资界 · 2026-11-09 14:47

- [刻行时空完成新一轮近亿元融资，向机器人部署态数据公司全面迈进](<https://www.pedaily.cn/first/190951.shtml>)  
  上海刻行时空科技有限公司完成新一轮近亿元融资，本轮由咏归基金领投，天机TIANJI、常州智融等跟投，本轮资金将重点投入：为机器人提供多样性数据与能力评测的预部署环境高精度姿态追踪与多维度标注的数据理解专用模型加速机器人落地的“采集-训…  
  投资界 · 2026-11-09 13:49

- [原方智能完成数千万元天使轮融资，推进世界模型研发与家庭场景落地](<https://www.pedaily.cn/first/190928.shtml>)  
  11月9日消息，原方（南京）智能科技有限公司近日完成数千万元天使轮融资，由金雨茂物领投，我乐家居、南京市创新投资集团跟投。公司专注具身智能世界模型研发，以家庭服务为核心场景，融资将用于核心技术攻关、产品开发及团队建设，加速技术落地应用…  
  投资界 · 2026-11-09 11:17

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
