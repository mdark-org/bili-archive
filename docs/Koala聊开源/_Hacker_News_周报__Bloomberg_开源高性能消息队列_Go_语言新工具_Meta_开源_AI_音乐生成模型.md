---
title: "[Hacker News 周报] Bloomberg 开源高性能消息队列；Go 语言新工具；Meta 开源 AI 音乐生成模型"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/662663"
tags: []
date: 1691377156
bvid: BV1m44y1w7DU
---
了解科技资讯，把握行业脉搏，大家好，我是Koala了。 欢迎收看第662和663期HackerNews周报。
本周Bloomberg开源了其内部使用多年的高性能消息队列系统BlazingMQ。 这个消息队列使用C语言开发，追求效率和性能，相比Java实现的Kafka更适合对性能要求极高的场景。 BlazingMQ在性能测试中表现强劲，其性能优于许多现有消息队列系统。 它在Bloomberg生产环境中经受住了多年检验，已使大家对其稳定性和成熟度更有信心。

---

---

日前，开源列式数据库Hydra发布了1.0版本。 Hydra是一款建立在PostgreSQL之上的开源列式数据库，其目标是兼顾PostgreSQL的可扩展性和数据仓库的高性能。 Hydra通过列式存储、向量化执行、查询并行化等技术，大幅提升了聚合查询的性能。 根据官方公布的基准测试，在求和、计数等聚合查询上，Hydra的查询速度要比原生PostgreSQL快数百甚至上千倍，并且用户可以继续使用原有的SQL语法和客户端工具，无需修改代码。 同时，它还提供了完整的PostgreSQL扩展和自定义函数支持，用户可以根据自己的需求进行定制。

---

---

PythonMonkey是一个用于实现Python和JavaScript互操作性的项目。 它基于SpiderMonkey引擎，实现了在Python中使用JavaScript和WebAssembly模块，又基于PMJS库，支持了在JavaScript中调用Python库。 开发者可以借用这个工具，在Python与JavaScript项目中，使用对方语言的库。

---


---

最近Go语言团队发布了一个名为gonew的实验性工具，用于通过预定义的模板快速初始化Go项目。 这个工具允许任何人编写模板，并以模块的形式发布和分发。 Go团队提供了两个示例模板，同时Google Cloud和Service Weaver团队也基于这个新功能发布了一些模板。 目前gonew还处于实验阶段，Go团队希望通过社区反馈来改进工具，使其对开发者更有用。

---


---

接下来这篇文章介绍的是在分析JavaScript应用中的内存泄漏时，Bloomberg的工程师发现生成V8对快照非常缓慢，对于一个500MB的快照生成就需要30多分钟。 Akali和Bloomberg的工程师进行了合作，改进了字符串的哈希算法，并且通过缓存减少原代码位置信息的计算。 经测试，这两个优化使开发环境的快照生成时间下降50%，生产环境的快照生成时间下降90%。 这些优化已经合入到V8引擎的V11.5.130版本中，Node.js的下一个大版本也会包含这些优化。

---

### 一篇介绍内存泄漏的文章？  [02:13](https://mailchi.mp/hackernewsletter/662663)

---

接下来是一周AI小结： 一，Meta开源AI音乐生成项目AudioCraft，其中包含MusicGen、AudioGen、EnCodec三个模型，基于Meta拥有版权的两万多小时音乐和其他公共音效训练而成。 作为听众的您是否支持使用AI生成音乐呢？ 二，Google DeepMind新推出的视觉语言动作模型RT2，使机器人不仅能够理解人类指令，还能将其转化为行动。 三，Creative Polly是一个基于AI学习新语言的项目，通过AI对话和翻译等功能，帮助用户更快学习一门新语言，且不再需要支付外教费用。

---

---

以上就是本期HackerNews周报摘要，谢谢您的收看。

