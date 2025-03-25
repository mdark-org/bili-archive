---
title: "[Hacker News 周报] Facebook 发布图像识别新模型；Twitter 开源推荐算法；Rust 编写流式计算引擎"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址: https://mailchi.mp/hackernewsletter/645-2562316?e=afe3b8e060"
tags: []
date: 1681011989
bvid: BV1hT411x7Mi
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第646期 Hacker News 周报。

---

### Meta 发布图像识别新模型
https://github.com/facebookresearch/segment-anything

在图像与文字生成类 AI 愈演愈烈的竞争中，本周 Meta AI 部门推出了图像识别场景的模型 Segment Anything。与模型名字相对应，Segment Anything 可以从图片中识别不同的内容，并切分出其轮廓。使用者也可以通过标记点或区域的方式，引导模型输出更正确的结果。模型发布的同时，在官网上也提供了 demo 可以在线体验。据 Meta 工程师介绍，这个 demo 是将模型编译为 WebAssembly，在浏览器中直接运行。

---

### Twitter 开源推荐算法
https://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm

自马斯克入驻 Twitter 以来，开源 Twitter 推荐算法的计划始终在进行着。最近，该推荐算法的代码终于在 GitHub 上正式开源。Twitter 的技术博客也发表了文章介绍相关细节。推荐算法通常是社交平台的机密信息，本次 Twitter 开源推荐算法是否能够让内容创作者们获得更公平透明的环境是许多人都关心的问题。

---

### Rust 编写流式计算引擎
https://github.com/ArroyoSystems/arroyo

Arroyo 是一个基于 Rust 开发的分布式流处理引擎。与基于批处理的大数据引擎相比，流处理能够带来更高的时效性。在项目的 readme 中，作者也介绍了在业界已经存在 Flink、Spark Streaming 等成熟方案的情况下，为什么还要开发 Arroyo。按照作者的描述，Arroyo 在设计上更易于在越来越流行的 serverless 环境中运行，并且提供了高性能的 SQL 引擎，使得普通开发者也能开发出应用的大数据 pipeline。

---

### Github CEO 发起的 AI playground 项目
https://github.com/nat/openplayground

Github CEO Nat Friedman 发起的 Open Playground 项目，目前也发布了可用版本。Open Playground 集成了 OpenAI、Cohere、Hugging Face 中的主流大语言模型，并且提供了参数调试、历史记录、模型结果对比等功能，让使用者可以更好的理解在大语言模型中如何输入提示与优化 AI 输出结果。

---

### 一个有创意的数据工具
https://www.quadratichq.com/

Quadratic 是一个比较有创意的数据工具，提供的和 Excel 类似的数据表格界面。除了基础的公式功能之外，还支持基于 Python 脚本进行更复杂的统计和分析功能。与许多基于 Web 的工具相同，Quadratic 也提供了多人在线协同的功能，并且在未来还计划支持 SQL 和 JavaScript 的分析功能。

---

### Midjourney 与 Adobe Firefly 对比引发对版权关注
https://twitter.com/DrJimFan/status/1642921475849203712

最后一则消息是对于图像生成领域的两大产品 Midjourney 和 Adobe Firefly 的对比。在推文中作者输入了多组提示语，并且对比了两款产品的生成结果。从结果上看，Midjourney 的生成结果非常贴合提示语，并且在细节上更加细腻。不过作者最后也提到 Adobe Firefly 的训练素材仅来源于 Adobe 拥有版本的图像。这一点对于对版权有严格要求的用户来说，可能比图像的生成质量更加重要。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


