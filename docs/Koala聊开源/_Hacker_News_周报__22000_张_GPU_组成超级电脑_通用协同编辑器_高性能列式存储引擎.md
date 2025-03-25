---
title: "[Hacker News 周报] 22000 张 GPU 组成超级电脑；通用协同编辑器；高性能列式存储引擎"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/659"
tags: []
date: 1688876204
bvid: BV13z4y1J73N
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala，欢迎收看第659期 Hacker News 周报。

---
### Watermill｜Go 的事件驱动开发框架
[https://github.com/ThreeDotsLabs/watermill](https://github.com/ThreeDotsLabs/watermill)

如果想在Go中开发事件驱动的应用程序，那么你可以尝试 Watermill。该项目对Kafka、Nats Streaming、RabbitMQ等常见的流式数据源进行了封装。在 Watermill 中，通过订阅即可获得一个消费实时数据的 Go channel。除了简单易用的API之外，Watermill 在性能、稳定性等方面也做了许多深入的工作，使其适用于生产环境中。

---
### BlockSuite｜通用协同编辑器
[https://blocksuite.affine.pro/](https://blocksuite.affine.pro/)

BlockSuite 是之前介绍过的开源知识库项目 Affine 内部所使用的协同编辑方案，目前也以独立项目的方式对外开源。该项目的核心概念是将协同编辑器内的各个区域都定义为 block，无论是文本编辑还是状态管理，都是逐个 block 处理。Block 状态管理的协同逻辑基于 CRDT 技术实现。在代码架构上，BlockSuite 将数据层与UI层分离，使得其渲染逻辑不受特定平台或UI框架的限制。

---
### Columnar｜高性能列式存储引擎
[https://github.com/kelindar/column](https://github.com/kelindar/column)

Columnar 是一个高性能的列式内存存储引擎，基于列式存储结构和零堆分配技术，优化查询性能，对于更新、删除等场景进行批量化处理，优化写入性能。支持基于SIMD的聚合函数和过滤函数的功能。无论是有列式存储的需求，还是对上述技术细节感兴趣，都可以了解一下 Columnar 项目的代码，获得更多信息。

---
### Kine｜使用 SQL 数据库运行 k8s
[https://github.com/k3s-io/kine](https://github.com/k3s-io/kine)

长期以来，ETCD 都是K8S集群中的标配数据库，那么我们是否有可基于MySQL、Postgres等SQL数据库运行一个K8S集群呢？答案是肯定的。Rancher 的 K3S 项目中，为了支持更轻量级的数据库，额外开发了 Kine 这个项目，基于 SQL 实现了 ETCD 的适配器。对于一些不希望引入 ETCD，但又需要使用 K8S 特定场景，该项目是一个值得参考的方案。

---
### 基于 Three.js 的 3D 解密小游戏
[https://www.thomasfriday.com/cuboid/](https://www.thomasfriday.com/cuboid/)

本周的轻松一刻是基于 3js 开发的 3D 解密小游戏，通过键盘操作黑色立方体的滚动方向，抵达绿色区域即可通关。

---
### 一周 AI 小结

接下来是本周AI小结：

1. OpenAI 连续发布多项更新。GPT4 API 开始对所有付费用户开放。ChatGPT 中的浏览器插件因安全性考虑暂时禁用。下周 ChatGPT 付费用户将可以开始使用 Code Interpreter 插件。

2. AI 初创公司 Inflection 打造了一台由22000张 Nvidia H100 GPU 组成的超级电脑。据分析，该超级电脑将包含近700个四节点机架。在当下 GPU 供货紧张的情况下，业界认为 Inflection 能获得如此多的 GPU，与其被 Nvidia 投资有很大关系。

[https://wccftech.com/inflection-ai-develops-supercomputer-equipped-with-22000-nvidia-h100-ai-gpus](https://wccftech.com/inflection-ai-develops-supercomputer-equipped-with-22000-nvidia-h100-ai-gpus)
[https://twitter.com/OpenAI/status/1677029947544838144](https://twitter.com/OpenAI/status/1677029947544838144)
[https://twitter.com/OpenAI/status/1676072388436594688](https://twitter.com/OpenAI/status/1676072388436594688)
[https://twitter.com/openai/status/1677015057316872192](https://twitter.com/openai/status/1677015057316872192)

3. GPT Engineer 是一个基于 OpenAI GPT API 深度优化的代码助手，通过输入提示词生成完整的代码项目，并在过程中支持微调和分步骤查看。
[https://github.com/AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer)

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


