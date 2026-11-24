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

## 相关资讯 · 17 条

- [元触万物做电子皮肤，获数千万元融资——星连被投动态](<https://36kr.com/p/4083249932555906?f=rss>)  
  专注于机器人柔性电子皮肤和触觉智能系统的公司「元触万物」（Ubiligence）近日完成数千万元天使轮融资，由零一创投、无限基金、智平方、星连资本、松延动力、东山产投参与投资。万甲资本担任本轮及后面轮次融资独家财务顾问。 元触万物成立于20  
  36氪 · 2026-11-24 14:04

- [AI消费硬件，即将“入冬”？](<https://36kr.com/p/4083182900893316?f=rss>)  
  随着深圳再一次走到了全球聚光灯下，在这座“硬件之都”，各种眼花缭乱的科技产品也成了主角，尤其是AI硬件。 人形机器人“爱宝”在智能茶歇区制作咖啡和冰淇淋，“椰仔”在休息区为访客递送糖果与饮用水，影像服务专区，影石和大疆作为最热门的两大展台，  
  36氪 · 2026-11-24 12:16

- [GPT、Claude、Gemini同台竞技，最新成绩来了](<https://36kr.com/p/4083223643542401?f=rss>)  
  自从GPT-6 Astra在机器人操作任务中展现出不错的能力后，Claude、Gemini等主流大模型也相继加入具身智能领域的探索。 今年10月，GPT-6 Astra在RoboLab-120仿真基准中取得74.8%的任务成功率；谷歌Gem  
  36氪 · 2026-11-24 11:55

- [章鱼动力获得数亿人民币A轮融资](<https://www.itjuzi.com/investevent/14708438>)  
  章鱼动力（SynapX）是一家以物理AGI为使命的前沿科技公司，致力于打造可持续自进化的具身智能生产力。近日，章鱼动力获得数亿人民币A轮融资，新增投资方包括芯动能投资、美的资本等投资机构与产业资本；早期股东线性资本、小米集团、Pang…  
  IT桔子 · 2026-11-24 10:19

- [傲意科技获得D轮融资](<https://www.itjuzi.com/investevent/14708119>)  
  傲意科技专注于脑机接口与具身智能机器人核心算法和整机研发。近日，傲意科技宣布完成数亿元D轮融资，本轮融资由中兵顺景、长江资本、光谷产投等联合投资。  
  IT桔子 · 2026-11-23 16:13

- [至简动力完成由蚂蚁集团领投的1亿美元融资](<https://www.itjuzi.com/investevent/14708475>)  
  至简动力是一家从真实场景出发，致力于通过高上限的大一统模型、高效的数据闭环、高可靠的机器人硬件，打造具备高用户价值的具身智能产品，至简动力打造了世界模型与 VLA一体化的模型，通过统一的Transformer实现语言逻辑、视觉语义、3…  
  IT桔子 · 2026-11-23 15:33

- [微亿智造港交所公开招股](<https://www.itjuzi.com/pre-ipo?comname=%E5%BE%AE%E4%BA%BF%E6%99%BA%E9%80%A0>)  
  微亿智造是一家工业具身智能机器人公司，致力于提供开箱即用、高度柔性且具备卓越智能水平的工业具身智能机器人（EIIR）产品及解决方案。通过自研的全栈式软硬件系统及全面的系统工程能力，成功开发能自主感知、学习、决策并执行复杂任务的EIIR…  
  IT桔子 · 2026-11-23 10:12

- [Google 发布 Gemini 4 Hydrogen 并推出 Antigravity Robotics 插件](<https://developers.googleblog.com/gemini-hydrogen-for-robotics/>)  
  Google 发布面向机器人场景的 Gemini 4 Hydrogen，主打更快的空间与具身推理，ERQA 平均分 84.8，超过 Gemini Robotics ER 2 的 75.5；在 Artificial Analysis Robotics 0.1 基准上得 58 分，接近 Argon 且每 token 成本更低。  
  Google Developers Blog（RSS） · 2026-11-17 00:00

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
