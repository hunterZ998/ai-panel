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

## 相关资讯 · 16 条

- [Momenta领投，前商汤执行研究总监创业，押注AI for AI Infra](<https://36kr.com/p/4084548550371977?f=rss>)  
  文｜ 郭英姿 编辑｜ 巴芮 从商汤出来创业的人，凑得出当今中国半条AI产业链。 曹旭东的Momenta，闫俊杰的MiniMax，还有Vivix AI的刘宇、流形空间的武伟等等。 不过大多数人都聚焦在大模型、具身智能、自动驾驶、视频生成这些最  
  36氪 · 2026-11-25 10:19

- [九天创智完成近亿元A轮融资，加速万平米级室外具身智能规模化落地](<https://www.pedaily.cn/first/194997.shtml>)  
  九天创智（深圳）科技有限公司于近期完成近亿元A轮融资，投资方为亿道资本、清科产投、南山战新投，融资资金将用于具身智能大模型、室外通用机器人平台研发及全球市场拓展等环节。该公司产品已出口至20多个国家和地区，具备全栈自研室外具身智能底座…  
  投资界 · 2026-11-25 09:00

- [马斯克：特斯拉 AI4 足以实现“超人驾驶”，AI5 优先留给 Optimus 机器人](<https://www.ithome.com/1/031/915.htm>)  
  IT之家 11 月 25 日消息，全球首富埃隆 · 马斯克（Elon Musk）于 11 月 22 日在 X 平台发布推文，表示下一代 AI5 芯片将优先部署到 Optimus 人形机器人及相关 AI 训练系统。 网友 @JBrunn…  
  IT之家 · 2026-11-25 07:38

- [Amazon 用“冷热气体”模型求解仓库多智能体路径规划](<https://www.amazon.science/blog/lazy-gas-hot-gas-and-a-thousand-robots>)  
  Amazon Robotics 在 ICML 论文中把仓库机器人路径规划建模为气体粒子运动，用 Schrödinger bridge（热气体模型）快速逼近最优传输（冷气体模型）的解。其多边际最优传输（MMOT）方法在 150×150 网格、1,125 台机器人、T=30 的场景下以 478 秒求出最优轨迹，而非 TU 的 NP-hard 形式 12 小时常连一个可行解都找不到。  
  Amazon Science（RSS） · 2026-11-25 01:49

- [百度智能云等发起香港前沿科技产业发展联盟，助力具身智能企业拓展全球市场](<https://36kr.com/p/4083731217148545?f=rss>)  
  11月23日，第十六届香港国际金融论坛暨第七届领航“9+2”粤港澳大湾区发展论坛举办。作为论坛重要活动，香港国际具身智能领袖峰会同期举行，并正式发布香港前沿科技产业发展联盟。该联盟由百度智能云、香港特区政府商务及经济发展局、香港特区政府创新  
  36氪 · 2026-11-24 20:26

- [具身智能48小时三笔亿元级融资：热钱全绕开了“人形整机”](<https://36kr.com/p/4083520759600768?f=rss>)  
  11月23日到24日，短短48小时里，章鱼动力、傲意科技、英汉思动力先后拿到亿元级融资。三家公司成立时间跨度从十个月到十年，切入点截然不同，却有一个刺眼的共同点——它们都不造通用双足人形机器人。2026年底，具身智能的钱正在逃离整机内卷，往  
  36氪 · 2026-11-24 18:56

- [章鱼动力获得数亿人民币A轮融资](<https://www.itjuzi.com/investevent/14708438>)  
  章鱼动力（SynapX）是一家以物理AGI为使命的前沿科技公司，致力于打造可持续自进化的具身智能生产力。近日，章鱼动力获得数亿人民币A轮融资，新增投资方包括芯动能投资、美的资本等投资机构与产业资本；早期股东线性资本、小米集团、Pang…  
  IT桔子 · 2026-11-24 17:32

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
