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

## 相关资讯 · 26 条

- [融资首发｜3D打印批量化制造向具身智能拓展，博理科技连续完成超5亿元融资](<https://36kr.com/p/4072516740797318?f=rss>)  
  36氪获悉，近日，博理科技（POLLYPOLYMER）连续完成B2轮与B+轮两轮股权融资，合计融资金额超5亿元人民币。其中，B2轮由基石资本与老股东金沙江联合资本联合领投，格致资本、天堂硅谷、中时资本、云锦资本、卓璞基金跟投；B+轮由经纬创  
  36氪 · 2026-11-17 18:07

- [英伟达、百度、宇树…32个世界模型揭开物理AI底牌](<https://36kr.com/p/4073451656992641?f=rss>)  
  让机器人拿起一只杯子，它要解决的问题远比识别物体多：杯子在哪里，机械臂从哪个方向伸过去，夹爪什么时候合拢，移动过程中会不会碰到桌沿。无人车经过路口时，也要判断：如果现在加速，旁边的车和行人接下来会怎样行动。 这类需要在现实环境中感知、决策和  
  36氪 · 2026-11-17 18:02

- [蚂蚁灵波朱兴：具身智能尚未迎来Scaling Law，中国具身基模终将收敛至3到5](<https://www.163.com/tech/article/LBV1BEPR00098IEO.html>)  
  网易科技 · 2026-11-17 17:21

- [蚂蚁灵波朱兴：具身智能尚未迎来Scaling Law，中国具身基模终将收敛至3到5](<https://www.163.com/tech/article/LBV0V3HI00099DKL.html>)  
  网易科技 · 2026-11-17 17:14

- [理想汽车 CEO 李想：会逐步开放马赫 M100 芯片的外供](<https://www.ithome.com/1/028/357.htm>)  
  IT之家 11 月 17 日消息，理想汽车 CEO 李想今日发文称，不少机器人企业问马赫 M100 能不能提供给他们。李想表示， 会逐步开放马赫 M100 芯片的外供 。 在今年 6 月的 Livis Day 理想汽车软件与具身智能发…  
  IT之家 · 2026-11-17 16:30

- [湖北大数据集团数字产业投资基金完成设立](<https://www.pedaily.cn/first/192911.shtml>)  
  近日，湖北大数据集团旗下产业投资公司联合湖北科投、湖北省人形机器人母基金共同发起设立的湖北科投数科产业基金合伙企业（有限合伙）在武汉东湖高新区完成工商注册登记，标志着湖北大数据集团专业化数字产业投资基金正式启航。（投资界） 原文链接  
  投资界 · 2026-11-17 16:15

- [鹰瞰智翼获得数千万人民币Pre-B轮融资](<https://www.itjuzi.com/investevent/14708034>)  
  鹰瞰智翼致力于研发全球首款具身智能仿生扑翼机器人及其流体仿真引擎。通过分阶段的产品布局，团队构建技术与商业双重壁垒，目标在低空经济的万亿级全球市场中占据重要位置，推动具身智能机器人技术在城市近人低空物流、影视拍摄、安防等场景的应用。近…  
  IT桔子 · 2026-11-17 13:58

- [思灵人形机器人完成 5 亿美元融资背后，真正产生收入的业务却是产线自动化？](<https://www.tmtpost.com/8208200.html>)  
  工厂才是产品。  
  钛媒体 · 2026-11-17 13:55

- [OpenAI’s Astra Is a Boon to Robotics, Says Nvidia Robotics Chief Deepu Talla](<https://www.theinformation.com/articles/openais-astra-boon-robotics-says-nvidia-robotics-chief-deepu-talla>)  
  The Information · 2026-11-17 13:03

- [Remedy Robotics获得6200万美元B轮融资](<https://www.itjuzi.com/investevent/14708033>)  
  Remedy Robotics是一家医疗机器人研发商，开发 N1 AI 赋能血管内介入机器人平台，支持专科医生远程操控机器人完成取栓等神经血管介入手术，瞄准急性缺血性中风等时间窗极短的急救场景，解决偏远地区优质介入资源不足、救治延误的…  
  IT桔子 · 2026-11-17 11:08

- [智动未来完成Pre-A+轮融资](<https://www.itjuzi.com/investevent/14708017>)  
  智动未来是一家专注于具身智能机器人研发的创新企业，致力于打造高性价比、多功能、多应用场景的智能人形机器人。近日，智动未来正式宣布完成Pre-A+轮亿元级融资交割。本轮由中美绿色基金领投，南曦创投联合领投，老股东海珠城发继续加码。  
  IT桔子 · 2026-11-17 10:51

- [考拉悠然联合同济大学发布悠然无界世界模型新成果BWM-Forge：可编程的世界模型，让具身世界生产规模化！](<https://mp.weixin.qq.com/s/bS_KY6oJCuMR_ipoLo7Vig>)  
  考拉悠然联合同济大学推出的悠然无界系列代码驱动具身世界模型框架BWM-Forge，给出的正是这套可规模化的解法：它把机器人本体、场景物体、动作过程与相机视角写进一段可执行的三维场景程序。 先用代码搭出世界骨架，机器人怎么动、物体在哪里…  
  IT桔子 · 2026-11-17 10:39

- [蓝点触控完成数亿元D3轮融资](<https://www.itjuzi.com/investevent/14708011>)  
  蓝点触控是一家提供机器人力传感器硬件、力控算法、行业工艺算法的力控方案提供商，自主研发的核心部件已全部实现国产化，已形成包括人形机器人六维力传感器、通用六维力传感器、关节扭矩传感器、拉压力传感器等系列。蓝点触控近日完成数亿元D3轮融资…  
  IT桔子 · 2026-11-17 09:59

- [获 Eric Trump 背书的人形机器人公司 Foundation Future Industries 发薪失败或濒临倒闭](<https://arstechnica.com/ai/2026/11/robo-soldier-startup-backed-by-eric-trump-misses-payroll-may-collapse/>)  
  据 CNBC 报道，获 Eric Trump 投资并担任首席战略顾问的人形机器人公司 Foundation Future Industries 未能支付截至 10 月 30 日的工资周期薪酬，内部人士担心若无法继续融资公司可能很快倒闭。报道还梳理了该公司的资金缺口、发薪失败以及对外宣传与实际进展不符等疑点。  
  Ars Technica：AI（RSS） · 2026-11-17 06:58

- [Mosaico获得750万欧元种子轮融资](<https://www.itjuzi.com/investevent/14707994>)  
  Mosaico是一家开源机器人传感数据平台提供商，推出 Apache 2.0 协议开源的端到端机器人数据管理平台，统一接入 ROS、MCAP 等主流机器人传感数据格式，兼容全版本 ROS、可私有化部署在客户自有基础设施，支持 PB 级…  
  IT桔子 · 2026-11-16 16:09

- [智元发布 WITA-Omni：行业首个具身全模态端到端交互大模型](<https://www.agibot.com.cn/article/315/detail/270.html>)  
  智元正式发布 WITA-Omni（硅光动语全模态大模型），称其为行业首个具身全模态端到端交互大模型，在音视频之外新增触觉、本体状态输入与动作、表情输出。其交互响应最快约400毫秒、平均约600毫秒，较业内平均水平快近3倍，并登顶 DailyOmni、MMAU、EmbSpatialBench 等四个榜单。该模型已在量产机器人远征 A3-Ultra 本体部署，并在文娱导览等场景开展验证。  
  AGIBOT 智元（网页） · 2026-11-16 15:11

- [World Labs发布Atlas工具与开发API，提供图像重建、可控场景构建及splats转网格，并面向影视、设计和机器人研究/仿真工作流。已核对官方入口与功能说明，尚未验证生成质量、物理真实性或机器人训练收益。](<https://x.com/Clairef9vu/status/2121056821431640116>)  
  World Labs opened Atlas to everyone. a sketch, a photo, or up to 64 images in, a consistent 3D world out, exportable as video or Gaussian splats. they shipped the API endpoints too, so agents can drive it. world models leaving the demo reel phase feels like a …  
  @Clairef9vu · 2026-11-13 09:45

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

- [20VC: Why Robotics Will be 100x Bigger than Coding Agents \| Inference Will Be a $10TRN Market: What No One Sees \| Why Software Investors are F\*\*\*\*\* Today with Naveen Rao, Unconventional](<https://thetwentyminutevc.libsyn.com/20vc-why-robotics-will-be-100x-bigger-than-coding-agents-inference-will-be-a-10trn-market-what-no-one-sees-why-software-investors-are-f-today-with-naveen-rao-unconventional>)  
  AGENDA: 05:00 Will we run out of energy? 19:00 Will specialised chips threaten NVIDIA's dominance? 26:00 Can we trust…  
  20VC · 2026-10-24 15:07

- [Robotics Tipping Point: A Citrini Field Trip](<https://www.citriniresearch.com/p/robotics-tipping-point-a-citrini>)  
  Under its new branding of “Physical AI” , is robotics evolving from Bay Area backwaters to a true technological renai…  
  Citrini Research · 2026-09-16 22:34

[返回面板](../README.md) · 第 1 / 1 页
