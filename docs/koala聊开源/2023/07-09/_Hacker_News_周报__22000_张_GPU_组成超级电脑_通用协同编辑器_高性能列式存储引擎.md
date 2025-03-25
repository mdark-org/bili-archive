---
title: "[Hacker News 周报] 22000 张 GPU 组成超级电脑；通用协同编辑器；高性能列式存储引擎"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/659"
tags: []
date: 1688876204
bvid: BV13z4y1J73N
---
了解科技资讯，把握行业脉搏，大家好，我是Koala了，欢迎收看第659期Hacker News周报。

---

### Watermill｜Go 的事件驱动开发框架
https://github.com/ThreeDotsLabs/watermill
如果想在Go中开发事件驱动的应用，那么你可以尝试watermill，该项目对Kafka, Nat Streaming, RabbitMQ等常见的流式数据源进行了封装，在watermill中通过订阅即可获得一个消费实时数据的Go channel，除了简单易用的API之外，watermill在性能、稳定性等方面也做了许多深入的工作，使其适用于生产环境中。

---

### BlockSuite｜通用协同编辑器
https://blocksuite.affine.pro/
BlockSuite是之前介绍过的开源知识库项目affine内部所使用的协同编辑方案，目前也以独立项目的方式对外开源。该项目的核心概念是将协同编辑器内的各个区域都定义为block，无论是文本编辑还是状态管理，都是逐个block处理。Block状态管理的协同逻辑基于CRDT技术实现，在代码架构上BlockSuite将数据层与UI层分离，使得其渲染逻辑不受特定平台或UI框架的限制。

---

### Columnar｜高性能列式存储引擎
https://github.com/kelindar/column
Columnar是一个高性能的列式内存存储引擎，基于列式存储结构和零堆分配技术，优化查询性能，对于更新、删除等场景进行批量化处理，优化写入性能，支持基于SIMD的聚合函数和过滤函数的功能。不论是有列式存储的需求，还是对上述技术细节感兴趣，都可以了解一下Columnar项目的代码或者更多信息。

---

### Kine｜使用 SQL 数据库运行 k8s
https://github.com/k3s-io/kine
长期以来etcd都是k8s集群中的标配数据库，那么我们是否有可基于MySQL, Postgress等SQL数据库运行一个K8S集群呢？答案是肯定的。Rancher的K3S项目中为了支持更轻量级的数据库，额外开发了Kine这个项目，基于SQL实现了etcd的适配器，对于一些不希望引入etcd，但又需要使用K8S特定场景，该项目是一个值得参考的方案。

---

### 基于 Three.js 的 3D 解密小游戏
https://www.thomasfriday.com/cuboid/
本周的轻松一刻是基于3js开发的三D解密小游戏，通过键盘操作黑色立方体的滚动方向，抵达绿色区域即可通关。

---

### 一周 AI 小结
https://twitter.com/OpenAI/status/1677029947544838144
https://twitter.com/OpenAI/status/1676072388436594688
https://twitter.com/openai/status/1677015057316872192
https://wccftech.com/inflection-ai-develops-supercomputer-equipped-with-22000-nvidia-h100-ai-gpus
https://github.com/AntonOsika/gpt-engineer
接下来是本周AI小结：
1. OpenAI连续发布多项更新，GPT4 API开始对所有付费用户开放，ChatGPT中的浏览器插件因安全性考虑暂时禁用，下周ChatGPT付费用户将可以开始使用code interpreter插件。
2. AI初创公司inflection打造了一台由22000张Nvidia H100 GPU组成的超级电脑，据分析该超级电脑将包含近700个四节点机架。在当下GPU供货紧张的情况下，业界认为inflection能获得如此多的GPU与其被Nvidia投资有很大关系。
3. GPT Engineer是一个基于OpenAI GPT API深度优化的代码助手，通过输入提示词生成完整的代码项目，并在过程中支持微调和分步骤查看。

以上就是本期Hacker News周报摘要，谢谢您的收看。


