# 端侧 AI

[返回面板](../README.md) · 第 1 / 1 页

## 赛道研究

**端侧模型的可用性要按设备和任务评估**　本地推理能缩短部分任务的响应时间，并让数据留在设备上。设备内存、持续功耗和更新成本决定这种收益能否稳定交付。

验证　在目标机型上同步测量首响、连续运行功耗和内存峰值。

出处　AI策略组-本周三知-20261018.docx，第 8 段

### 端侧小模型成为工具调用组件

Tether于11月11日发布0.8B BotPsy工具调用模型，开放Apache 2.0权重；官方同时说明它会出错，面向研究教育，不适用于安全关键、高风险自动决策，以及金钱、个人信息和健康等敏感应用。

**判断**　若本地小模型能稳定完成工具链，应用机会可能集中在权限管理、工具接入与失败恢复。

**验证**　在真实设备和授权环境测试连续任务成功率、联网依赖、耗电、内存与延迟，并记录误操作后的恢复或撤销能力。

[QVAC BotPsy官方说明](<https://qvac.tether.io/blog/on-device-ai-agent-botpsy>) · [AgentFloor: How Far Up the Tool Use Ladder Can Small Open-Weight Models Go?](<https://arxiv.org/html/2605.00334v1>) · [Anthropic：Building Effective Agents](<https://www.anthropic.com/engineering/building-effective-agents>)

## 相关资讯 · 9 条

- [Pete Warden 谈本地 AI、开放模型、语音界面与硬件未来](<https://thedataexchange.media/pete-warden-moonshine/>)  
  Moonshine Voice 联合创作者 Pete Warden 在播客中讨论本地 AI 为何越来越倾向在设备端而非云端运行，并称本地模型在基准测试上仅比 Anthropic 和 OpenAI 的商业模型落后几个月。  
  Hacker News：AI 热帖 · 2026-11-19 20:00

- [博帝推出 AI Matrix 系列 DDR5 内存、M.2 SSD，专为端侧 AI 设计](<https://www.ithome.com/1/029/645.htm>)  
  IT之家 11 月 19 日消息，博帝（Patriot）今日宣布推出 AI Matrix 系列 DDR5 内存和 PCIe M.2 2280 NVMe SSD，专为端侧运行大语言模型设计。 IT之家附该系列产品详情如下： PRO 档（…  
  IT之家 · 2026-11-19 18:58

- [韩国高考临时屏蔽考点及周边 100 米内公共 WiFi 防 AI 作弊](<https://www.ithome.com/1/029/075.htm>)  
  韩国自当地时间 18 日下午 6 时起，要求 SK 电信、KT、LG U+ 三大运营商暂停全国高考考场及周边 100 米内的公共 WiFi 和运营商 WiFi，至 19 日下午 6 时，以防考生用智能眼镜、微型摄像头等 AI 设备作弊。  
  IT之家·人工智能 · 2026-11-18 21:23

- [MiniCPM 全球下载超 7000 万次：面壁智能披露老挝国家大模型等落地案例](<https://mp.weixin.qq.com/s/4eCXPoSciD5MSH43-sbIOQ>)  
  面壁智能宣布截至 2026 年 11 月 MiniCPM 系列模型全球下载量超过 7000 万次。其 8B 参数的老挝国家大模型已接入该国政务通讯系统 G-Chat v2，老挝语翻译能力在国际评测中超过 GPT-4o。公司还披露了马来西亚 VoxCPM2 语音交互、肯尼亚银行端侧风控智能体，以及开发者基于 MiniCPM5-1B 和 MiniCPM-o-4.5 的离线应用案例。  
  公众号：面壁智能（MiniCPM） · 2026-11-18 19:54

- [微信私人 AI 助理小微 DAU 达 3000 万，部分推理任务未来将在设备端运行](<https://www.ithome.com/1/029/018.htm>)  
  腾讯在 2026 年第三季度财报发布当日，微信官方宣布私人 AI 助理小微用户测试范围扩大，日活跃用户数已达 3000 万，正逐步融入聊天、朋友圈、公众号、视频号等场景。小微采用针对成本效率优化的 WeLM 定制模型，推理成本极低且持续下降，官方预计未来部分推理任务将在用户设备端运行；小微依托支付及小程序生态构建智能体能力，官方称其将对微信商业化能力产生倍增效应。  
  IT之家·人工智能 · 2026-11-18 18:59

- [Meta 个人 AI 智能体 Muse 在澳大利亚上线](<https://about.fb.com/news/2026/11/muse-is-now-available-in-australia/>)  
  Meta 宣布个人 AI 智能体 Muse 在澳大利亚上线，可通过 iOS、Android、muse.ai 和 Mac 应用使用，并将登陆 AI 眼镜。  
  Meta：Newsroom · AI（RSS） · 2026-11-18 02:00

- [面壁智能亮相 Web Summit 2026：展示 MiniCPM-V 4.7 与端侧智能方案](<https://mp.weixin.qq.com/s/f6RZH2DJ1_cKsqLrmj3v6g>)  
  面壁智能在里斯本 Web Summit 2026 上展示了全新发布的 MiniCPM-V 4.7 及面壁智舱 SuperMate 等端侧产品。MiniCPM-V 4.7 35B-A3B 是全球首个可在端侧无损运行的开源 MoE 模型，单次推理仅激活 30 亿参数，在最新款 iPhone 上以约 3GB 运行内存实现约 20 token/s 解码速度。  
  公众号：面壁智能（MiniCPM） · 2026-11-17 20:50

- [三星宣布搭载Gemini的Intelligent Eyewear开启预订，12月10日在美国及韩国推出不同款式；美国Warby Parker款395美元起。官方场景包括视觉问答、翻译和会议摘要。价格与上市计划已核对，续航和佩戴体验尚未独立实测。](<https://x.com/SVTrivo/status/2121102780328984624>)  
  Samsung just opened pre-orders for Intelligent Eyewear — Gemini-powered AI glasses with no display, launching Dec 10 in the US and Korea. 30 designs from Gentle Monster and Warby Parker. Starts at $395 \(Warby Parker\). \~41g, 12MP camera, Snapdragon AR1 Gen 1, u…  
  @SVTrivo · 2026-11-13 12:48

- [英伟达遭大劫案，超7600万元芯片被盗/曝苹果CEO对AI进度不满/男子考驾照戴AI眼镜作弊多选题全错](<https://mp.weixin.qq.com/s?__biz=MjM5MjAyNDUyMA%3D%3D&mid=2651115531&idx=1&sn=087292b88852973974d8ee0b78096e24>)  
  APPSO · 2026-11-09 07:59

[返回面板](../README.md) · 第 1 / 1 页
