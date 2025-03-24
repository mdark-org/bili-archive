---
title: "[Hacker News 周报] Google 新编程框架；ChatGPT 官方 API；Typescript 5.0；"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/641"
tags: []
date: 1677976433
bvid: BV1xM41147Te
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看第641期Hacker News周报。

本周Google发布开源编程框架Service Weaver，定位于一个用于开发和部署分布式应用的框架。Service Weaver最大的特点是，开发者可以编写类似于模块化单体应用的代码，但最终将其部署为一组微服务。从发布的博客看，Google对该框架有着很大的期待，希望它能够同时带来单体应用的开发速度，以及微服务的可扩展性、安全性和容错性。值得一提的是，Service Weaver在将应用部署至Google云服务GKE上，投入了不少的精力。
---
### Google 发布新编程框架 Service Weaver
[https://opensource.googleblog.com/2023/03/introducing-service-weaver-framework-for-writing-distributed-applications.html](https://opensource.googleblog.com/2023/03/introducing-service-weaver-framework-for-writing-distributed-applications.html)

之前的周报中我们介绍过一些快捷实现CRUD功能的框架。从成熟度上看，Django等老牌框架更具优势。本周我们将介绍基于Node.js和Typescript开发的快速CRUD框架Remult。它基于Typescript的类型表达能力，提供类型安全的客户端API以及数据库ORM。作者表示，尽管Remult开源时间不长，但是他们在生产环境中已经使用了数年的时间。大家可以尝试使用搭建一些逻辑相对简单的外部应用。
---
### Remult｜快速 CRUD 框架
[https://github.com/remult/remult](https://github.com/remult/remult)

在本周Typescript发布了5.0的一个候选版本，标志着又一个大版本的到来。Typescript自身持续不断的迭代，使其已经成为JavaScript社区中重要的组成部分。我们的深度分析系列栏目也曾经介绍过Typescript之父Anders Hejlsberg，感兴趣的小伙伴可以前往观看。
---
### Typescript 发布 5.0 候选版本
[https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/)

在ChatGPT不断升温的同时，开源社区也通过逆向工程的方式，提供了多种基于API使用ChatGPT的方法。本周OpenAI官方终于正式发布ChatGPT API，同时发布的还有Whisper API。开发者们终于不用和OpenAI斗智斗勇，可以光明正大的基于官方API，将ChatGPT和Whisper集成到自己的应用中。
---
### ChatGPT 官方 API 出炉
[https://openai.com/blog/introducing-chatgpt-and-whisper-apis](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)

Mathesar是一个开源的Postgres数据库GUI管理工具，支持部署一个新的Postgres数据库实例，或连接已有的实例。与一些同类工具相比，Mathesar对Postgres集成的更为深度，提供例如自定义列类型和界面，管理Schema，外键自动跳转等高级功能。
---
### Mathesar｜ 开源 Postgres 数据库 GUI 管理工具
[https://github.com/centerofci/mathesar](https://github.com/centerofci/mathesar)

Unfolder是一个非常有趣的Mac桌面端应用。将3D模型拖入Unfolder之后，它能够自动生成对应的折纸零件图纸。据作者描述，3D模型的展开算法非常智能，针对折纸艺术进行高度优化。即使自动展开算法的结果不够满意，也可以在编辑器中进一步调整。对一些折纸艺术厂商和爱好者来说，这一工具可能可以带来极大的效率提升。
---
### Unfolder｜将3D 模型生成折纸零件图纸的工具
[https://www.unfolder.app/](https://www.unfolder.app/)

以上就是本期Hacker News周报摘要，谢谢你的收看。


