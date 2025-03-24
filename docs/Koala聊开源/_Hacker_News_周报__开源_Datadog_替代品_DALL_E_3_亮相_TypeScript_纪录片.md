---
title: "[Hacker News 周报] 开源 Datadog 替代品；DALL·E 3 亮相；TypeScript 纪录片"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/670"
tags: []
date: 1695533396
bvid: BV1uu41137gH
---
了解科技资讯，把握行业脉搏。大家好，我是Koala了。欢迎收看第677期 Hacker News 周报。

---
### HyperDX｜Datadog 开源替代品
[https://github.com/hyperdxio/hyperdx](https://github.com/hyperdxio/hyperdx)

HyperDX是一个开源的问题排查与可观测性平台，与DataDog和New Relic等商业化产品类似，HyperDX能够存储日志、监控、tracing、异常和UI操作回放，并基于时间将它们结合进行关联分析。其中核心的存储部分基于ClickHouse开发，UI操作回放则基于Rrweb实现。HyperDX同样提供了商业化的云部署版本，提供用户、租户等更强的企业级管理功能。

---
### ElectricSQL｜构建本地优先应用的数据库同步工具
[https://electric-sql.com/](https://electric-sql.com/)

ElectricSQL是一个用于构建本地优先应用的数据库同步工具。在通过ElectricSQL的SDK定义数据格式后，它就会持续在云端Postgres SQL和本地的SQLite之间进行数据复制，应用仅和本地数据库进行交互，实现即时响应，离线工作等能力，并降低云端数据库负载。对于复杂的离线场景，ElectricSQL设计了基于CRDT的解决方案，帮助应用在网络恢复后实现最终一致性。

---
### rapidpages｜Vercel v0 的开源实现
[https://github.com/rapidpages/rapidpages](https://github.com/rapidpages/rapidpages)

之前我们介绍过Vercel正在进行alpha测试的AI项目V0，本周开源社区中开始出现了它的开源实现Rapid Pages。该项目同样实现了输入prompt后生成UI代码，并进行实时渲染，以及多次修改prompt后的版本管理。尽管该项目目前还处于早期阶段，但以开源社区进行开发，无疑让项目更具潜力。

---
### fly.io 开源服务发现工具 Corrosion
[https://github.com/superfly/corrosion](https://github.com/superfly/corrosion)

近期云服务厂商fly.io开源了自己面向大规模分布式场景的服务发现工具Corrosion。在项目介绍中，团队介绍了开发Corrosion替换已有的Consul方案，主要是为了获得更快的性能以及灵活性。与Consul不同的是，Corrosion使用CRSQLite实现基于SQLite的CRDT数据最终一致性，这在fly.io的大部分使用场景下，能够工作的更好，并且带来更好的性能。

---
### Gitness｜开源的代码托管与 CI/CD 流水线引擎
[https://gitness.com/](https://gitness.com/)

Gitness是一个开源的代码托管与CI/CD流水线引擎。你可以将它视作Github或Gitlab的替代品。与这两个成熟的代码托管平台相比，Gitness重点实现了流水线的执行速度以及团队协作的便捷性，从而提升团队的代码交付速度。对于希望自部署代码托管平台的团队来说，Gitness是一个值得关注的新选择。

---
### 最新发布的 TypeScript 纪录片
[https://www.youtube.com/watch?v=U6s2pdxebSo](https://www.youtube.com/watch?v=U6s2pdxebSo)

对于常用TypeScript或者对编程语言感兴趣的小伙伴，不要错过最新发布的TypeScript编程语言纪录片。长达80分钟的纪录片中，不仅对TypeScript核心团队成员进行了采访，也包含了对许多社区参与者的采访，让大家更好的体会到开源社区对一门编程语言的促进作用。

---
### OpenAI 发布 Dalle.E 3
[https://openai.com/dall-e-3](https://openai.com/dall-e-3)

本周OpenAI公布了Dalle.E 3的最新进展。该项目是OpenAI文生图系统的最新版本。与Dalle.E 2相比，新版本将易于与Chat GPT深度集成的方式向付费用户提供，同时从官网的介绍文章中也能看出，新版本的图片生成质量有了很大的提升，并且结合GPT强大的推理能力，能够生成逻辑性更强的画作。

---
### SeaGOAT｜基于向量数据库构建的本地代码搜索工具
[https://github.com/kantord/SeaGOAT](https://github.com/kantord/SeaGOAT)

SeaGOAT是一个基于向量数据库构建的本地代码搜索工具。尽管项目自称是AI时代的本地搜索工具，但实际上更多依赖的是vector embedding技术，基于相似性匹配更多语义上相似的结果。需要注意的是，SeaGOAT基于向量数据库ChromDB开发，并需要启动服务端程序完成其功能，这种较为重量级的实现，对于本地搜索场景是否合理还有待观察。

---
### OpenAI 展示 fine tuning 功能的 UI 管理能力
[https://twitter.com/OfficialLoganK/status/1704181284036300970](https://twitter.com/OfficialLoganK/status/1704181284036300970)

在发布基于GPT3.5的fine tuning能力后，本周OpenAI又展示了fine tuning功能的UI管理能力，同时也讲训练模型的并发数从一提升至三，可见对fine tuning功能的重视程度。目前来看，高度产品化的fine tuning能力，可能成为OpenAI新的产品趋势。

以上就是本期Hacker News周报摘要，谢谢您的收看。


