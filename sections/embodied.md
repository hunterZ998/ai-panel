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

## 相关资讯 · 19 条

- [傲意科技获得D轮融资](<https://www.itjuzi.com/investevent/14708119>)  
  傲意科技专注于脑机接口与具身智能机器人核心算法和整机研发。近日，傲意科技宣布完成数亿元D轮融资，本轮融资由中兵顺景、长江资本、光谷产投等联合投资。  
  IT桔子 · 2026-11-23 16:13

- [至简动力完成由蚂蚁集团领投的1亿美元融资](<https://www.itjuzi.com/investevent/14708475>)  
  至简动力是一家从真实场景出发，致力于通过高上限的大一统模型、高效的数据闭环、高可靠的机器人硬件，打造具备高用户价值的具身智能产品，至简动力打造了世界模型与 VLA一体化的模型，通过统一的Transformer实现语言逻辑、视觉语义、3…  
  IT桔子 · 2026-11-23 15:33

- [章鱼动力获得数亿人民币A轮融资](<https://www.itjuzi.com/investevent/14708438>)  
  章鱼动力（SynapX）是一家以物理AGI为使命的前沿科技公司，致力于打造可持续自进化的具身智能生产力。公司以 SYNTH 深思架构为技术底座，致力于推动机器人真正走向操作智能，加速物理 AGI 时代的到来。持续构造/驱动任务-数据闭…  
  IT桔子 · 2026-11-23 14:51

- [微亿智造港交所公开招股](<https://www.itjuzi.com/pre-ipo?comname=%E5%BE%AE%E4%BA%BF%E6%99%BA%E9%80%A0>)  
  微亿智造是一家工业具身智能机器人公司，致力于提供开箱即用、高度柔性且具备卓越智能水平的工业具身智能机器人（EIIR）产品及解决方案。通过自研的全栈式软硬件系统及全面的系统工程能力，成功开发能自主感知、学习、决策并执行复杂任务的EIIR…  
  IT桔子 · 2026-11-23 10:12

- [元触万物完成数千万元天使轮融资](<https://www.itjuzi.com/investevent/14703117>)  
  元触万物成立于2026年，专注于机器人柔性电子皮肤与触觉智能系统，致力于为灵巧手、具身智能和工业机器人，提供高密度、低功耗、可规模化部署的触觉感知能力。近日，元触万物完成数千万元天使轮融资，由零一创投、无限基金、智平方、星连资本、松延…  
  IT桔子 · 2026-11-23 10:01

- [MIT 扑翼微型机器人首次自带传感器与计算能力，可在动捕环境外精准降落](<https://news.mit.edu/2026/featherweight-flying-robot-carries-its-own-sensors-and-computers-1118>)  
  MIT 研究团队在 Science Robotics 发表研究，为仅重约一个回形针的扑翼微型机器人加装总重 244 毫米的传感与计算组件，使其脱离实验室动捕系统后仍能沿复杂轨迹飞行并精准降落在向日葵上。  
  MIT News（RSS） · 2026-11-19 03:00

- [印度 Humyn Labs 融资 4700 万美元，为美国机器人公司提供训练数据](<https://techcrunch.com/2026/11/18/accel-backs-indias-humyn-labs-to-supply-training-data-needed-by-u-s-robotics-ai-developers/>)  
  印度 Humyn Labs 完成 4700 万美元 A 轮融资，其中 2600 万美元股权由 Accel 领投，2100 万美元为 Lighthouse Canton 领投的创业债务。该公司用自研双摄像头硬件记录日常任务，再通过软件标注手部动作与物体交互，在拉美和亚洲 20 多个国家采集数据，目前有 12 家付费客户，约 90% 收入来自美国。  
  TechCrunch：AI（RSS） · 2026-11-18 19:30

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
