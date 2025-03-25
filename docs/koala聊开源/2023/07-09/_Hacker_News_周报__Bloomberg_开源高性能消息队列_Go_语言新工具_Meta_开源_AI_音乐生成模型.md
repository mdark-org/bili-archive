---
title: "[Hacker News 周报] Bloomberg 开源高性能消息队列；Go 语言新工具；Meta 开源 AI 音乐生成模型"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/662663"
tags: []
date: 1691377156
bvid: BV1m44y1w7DU
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala 了，欢迎收看第 662 和 663 期 HackerNews 周报。


### Bloomberg 开源高性能消息队列 BlazingMQ 
https://bloomberg.github.io/blazingmq/

本周 Bloomberg 开源了其内部使用多年的高性能消息队列系统 BlazingMQ。这个消息队列使用 C 语言开发，追求效率和性能，相比 Java 实现的 Kafka 更适合对性能要求极高的场景。BlazingMQ 在性能测试中表现强劲，其性能优于许多现有消息队列系统。它在 Bloomberg 的生产环境中经受住了多年检验，已使大家对其稳定性和成熟度更有信心。


---

### 开源列式数据库 Hydra 发布 1.0 版本 

https://www.hydra.so/

日前开源历史数据库 Hydra 发布了 1.0 版本。Hydra 是一款建立在 Postgress SQL 之上的开源历史数据库，其目标是兼具 Postgress SQL 的可扩展性和数据仓库的高性能。Hydra 通过历史存储、向量化执行、查询并行化等技术，大幅提升了聚合查询的性能。根据官方公布的基准测试，在求和、计数等聚合查询上，Hydra 的查询速度要比原生 Postgress SQL 快数百甚至上千倍，并且用户可以继续使用原有的 SQL 语法和客户端工具，无需修改代码。同时，它还提供了完整的 Postgress SQL 扩展和自定义函数支持，用户可以根据自己的需求进行定制。

---
### PythonMonkey｜实现 Python 与 JavaScript 的互操作性

https://medium.com/@willkantorpringle/pythonmonkey-javascript-wasm-interop-in-python-using-spidermonkey-bindings-4a8efce2e598

Python Monkey 是一个用于实现 Python 和 JavaScript 互操作性的项目，它基于 SpiderMonkey 引擎，实现了在 Python 中使用 JavaScript 和 WebAssembly 模块，又基于 PMGS 库，支持了在 JavaScript 中调用 Python 库。开发者可以借用这个工具在 Python 和 JavaScript 项目中使用对方语言的库。

---
### gonew｜Go 语言新工具

https://go.dev/blog/gonew

最近 Go 语言团队发布了一个名为 Gonew 的实验性工具，用于通过预定义的模板快速初始化 Go 项目。这个工具允许任何人编写模板，并以模块的形式发布和分发。Go 团队提供了两个示例模板，同时 Google Cloud 和 Service Weaver 团队也基于这个新功能发布了一些模板。目前 Gonew 还处于实验阶段，Go 团队希望通过社区反馈来改进工具，使其对开发者更有用。

---


### 

https://v8.dev/blog/speeding-up-v8-heap-snapshots

接下来这篇文章介绍的是在分析 JavaScript 应用中的内存泄漏时，Bloomberg 的工程师发现，生成 V8 对快照非常缓慢，对于一个 500MB 的快照生成就需要 30 多分钟。Akalia 和 Bloomberg 的工程师进行了合作，改进了字符串的哈希算法，并且通过缓存减少源代码位置信息的计算。经测试，这两个优化使开发环境的快照生成时间下降 50%，生产环境的快照生成时间下降 90%。这些优化已经合入到 V8 引擎的 V111.5.130 版本中，Node.js 的下一个大版本也会包含这些优化。

---

### 一周 AI 小结 

接下来是一周 AI 小结：

https://about.fb.com/news/2023/08/audiocraft-generative-ai-for-music-and-audio

1. Meta 开源 AI 音乐生成项目 AudioCraft，其中包括 MusicGen、AudioGen、Encodec 三个模型，基于 Meta 拥有版权的 2 万多小时音乐和其他公共音效训练而成。作为听众的您是否支持使用 AI 生成音乐呢？

https://blog.google/technology/ai/google-deepmind-rt2-robotics-vla-model/

2. Google DeepMind 新推出的视觉语言动作模型 RT2，使机器人不仅能够理解人类指令，还能将其转化为行动。


https://www.prettypolly.app/

3. Creative Polly 是一个基于 AI 学习新语言的项目，通过 AI 对话和翻译等功能，帮助用户更快学习一门新语言，且不再需要支付外教费用。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

