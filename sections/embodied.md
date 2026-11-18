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

- [消息称三星电子计划在 CES 2027 发布 2 款人形机器人](<https://www.ithome.com/1/029/087.htm>)  
  IT之家 11 月 18 日消息，韩媒《韩民族日报》当地时间昨日报道称，三星电子计划在明年 1 月举行的 CES 2027 消费电子展上发布 2 款人形机器人。 这两款产品的 名称分别为 HR \(Human Reference\) 和…  
  IT之家 · 2026-11-18 21:51

- [印度 Humyn Labs 融资 4700 万美元，为美国机器人公司提供训练数据](<https://techcrunch.com/2026/11/18/accel-backs-indias-humyn-labs-to-supply-training-data-needed-by-u-s-robotics-ai-developers/>)  
  印度 Humyn Labs 完成 4700 万美元 A 轮融资，其中 2600 万美元股权由 Accel 领投，2100 万美元为 Lighthouse Canton 领投的创业债务。该公司用自研双摄像头硬件记录日常任务，再通过软件标注手部动作与物体交互，在拉美和亚洲 20 多个国家采集数据，目前有 12 家付费客户，约 90% 收入来自美国。  
  TechCrunch：AI（RSS） · 2026-11-18 19:30

- [这30家企业，撑起了灵巧手的半边天](<https://36kr.com/p/4075019280406408?f=rss>)  
  11月16日，星动纪元宣布推出五指灵巧手XHAND 1 Pro-U。与单纯增加关节不同，这款产品围绕英伟达GEAR实验室的DexUMI外骨骼调整了手部结构，让人类示范动作更直接地映射到机器人手上。 两个月前，韩国Wonik Robotics  
  36氪 · 2026-11-18 18:04

- [第一批打工的人形机器人，有的已经失业了](<https://www.tmtpost.com/8209375.html>)  
  辞退原因是什么？  
  钛媒体 · 2026-11-18 17:51

- [柏川数据完成5000万元Pre-A轮融资，打造物理AI全栈数据基座](<https://www.pedaily.cn/first/193109.shtml>)  
  苏州柏川数据科技有限公司完成5000万元Pre-A轮融资，投资方包括元禾厚望、毅峰资本等顶级具身智能产业机构。（投资界讯） 原文链接  
  投资界 · 2026-11-18 13:31

- [雷军、王兴兴、李彦宏，在APEC讲了什么？](<https://36kr.com/p/4074664257017729?f=rss>)  
  雷军披露，小米具身智能机器人已经能在工厂完成8小时工作；王兴兴认为，机器人模型泛化能力接近突破临界点；李彦宏则提醒，AI应用如果迟迟不能带来收入和利润增长，行业就可能面临泡沫风险。 11月17日，2026年亚太经合组织（APEC）工商领导人  
  36氪 · 2026-11-18 11:46

- [柏川数据宣布完成5000万元Pre-A轮融资](<https://www.itjuzi.com/investevent/14708118>)  
  柏川数据是一家物理AI数据基座服务商。最初主要提供自动驾驶数据服务，目前已服务近百家车企及智能驾驶厂商。2025年下半年，公司开始拓展具身智能数据业务。截至目前，柏川已服务智元、自变量、优必选、它石智航、星海图、优理奇等近20家具身智…  
  IT桔子 · 2026-11-18 10:31

- [「鹰瞰智翼」完成数千万元Pre-B轮融资，加速空中具身智能商业化](<https://www.pedaily.cn/first/193071.shtml>)  
  鹰瞰智翼完成数千万元Pre-B轮融资，由商汤国香资本独家投资，募集资金将用于下一代扑翼机器人与仿真引擎研发、产线建设及海外市场拓展。（投资界讯） 原文链接  
  投资界 · 2026-11-18 10:03

- [宇树科技董事长兼首席执行官王兴兴：机器人行业当前的机遇与现实挑战](<https://www.pedaily.cn/first/193044.shtml>)  
  2026年APEC工商领导人峰会17日在深圳举办。在“共建开放普惠的人工智能创新生态”研讨环节，宇树科技董事长兼首席执行官王兴兴表示，大众所见到的AI、机器人成果仅是冰山一角，水下底层技术迭代速度迅猛，行业发展前景值得期待，各界应当主…  
  投资界 · 2026-11-18 08:50

- [生数 Motubrain 2.0 收官首个物理 AI 全程公开训练直播](<https://mp.weixin.qq.com/s/BCQg04JuaCkzyCJ5wmgTPw>)  
  生数宣布 Motubrain 物理AI 25天全程公开训练直播收官，完成从预训练、后训练到 Agent 与 RSI 探索的阶段验证。20B 参数模型使用 250 万小时多源数据（含 200 万小时互联网视频、约 50 万小时具身数据），累计超 1 万次真机任务测试，在 RoboCasa365、EBench、LIBERO-Plus 等 6 项 Benchmark 上位列前茅。  
  公众号：生数科技（Vidu·视频） · 2026-11-17 23:10

- [Genesis AI, a Robotics Startup, Raises $500 Million](<https://www.wsj.com/cio-journal/genesis-ai-a-robotics-startup-raises-500-million-35198457?mod=rss_Technology>)  
  The Wall Street Journal · 2026-11-17 22:00

- [百度、小米 CEO 在 Apec 峰会警告 AI 热潮与商业回报差距扩大](<https://www.scmp.com/tech/big-tech/article/3374774/baidu-xiaomi-ceos-warn-growing-gap-between-ai-hype-and-returns>)  
  百度 CEO 李彦宏与小米 CEO 雷军在深圳 Apec CEO 峰会上警告，巨额 AI 投入正超过商业回报，当务之急是开发高价值应用，否则泡沫担忧可能成真。李彦宏以工业革命电力类比，称 AI 最大经济价值在应用层，并援引青岛港 AI 智能体优化集装箱装载的案例；雷军指出真正落地的场景有限，看好 AI 手机、汽车与人形机器人。  
  Hacker News：AI 热帖 · 2026-11-17 20:30

- [雷军：AI 是全新时代，小米人形机器人已在工厂实习 8 小时](<https://www.ithome.com/1/028/322.htm>)  
  雷军在 2026 年 APEC 工商领导人峰会上表示，AI 大模型落地并实现商业闭环的公司仍较少，但 AI 走向物理世界与终端结合将带来巨大机会。他透露小米具身智能机器人已在工厂实习，能完整工作八小时并自主充电两次；小米人形机器人首次挑战中控台侧盖板排序工站 8 小时作业，家庭场景基于 Xiaomi-Robotics-1 的 Agent 系统完成超 30 分钟、3 个房间、50+ 任务验证。  
  IT之家·人工智能 · 2026-11-17 16:16

- [获 Eric Trump 背书的人形机器人公司 Foundation Future Industries 发薪失败或濒临倒闭](<https://arstechnica.com/ai/2026/11/robo-soldier-startup-backed-by-eric-trump-misses-payroll-may-collapse/>)  
  据 CNBC 报道，获 Eric Trump 投资并担任首席战略顾问的人形机器人公司 Foundation Future Industries 未能支付截至 10 月 30 日的工资周期薪酬，内部人士担心若无法继续融资公司可能很快倒闭。报道还梳理了该公司的资金缺口、发薪失败以及对外宣传与实际进展不符等疑点。  
  Ars Technica：AI（RSS） · 2026-11-17 06:58

- [Google 发布 Gemini 4 Hydrogen 并推出 Antigravity Robotics 插件](<https://developers.googleblog.com/gemini-hydrogen-for-robotics/>)  
  Google 发布面向机器人场景的 Gemini 4 Hydrogen，主打更快的空间与具身推理，ERQA 平均分 84.8，超过 Gemini Robotics ER 2 的 75.5；在 Artificial Analysis Robotics 0.1 基准上得 58 分，接近 Argon 且每 token 成本更低。  
  Google Developers Blog（RSS） · 2026-11-17 00:00

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
