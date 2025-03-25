---
title: "[Hacker News 周报] Next.js 新版本惹争议；强大的 Redis 客户端；全自动 K8s tracing"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/674-2563024"
tags: []
date: 1699160014
bvid: BV1vj411Y7WL
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第675期 Hacker News 周报。

### Grist｜将传统电子表格与关系型数据库相结合的开源项目
[https://www.getgrist.com/](https://www.getgrist.com/)

Grist 是一个将传统电子表格与关系型数据库强大功能相结合的开源项目。它基于 SQLite 开发，整体轻便且离线可用。它支持在单元格中使用 Python 编写公式，实现复杂逻辑和数据处理。对于常见的数据分析功能，例如条件格式限制、图表化、汇总表等，Grist 也支持得相当完善。同时，它还提供 API，支持各类第三方集成。你可以将 Grist 视作更加开放、现代的 Excel 使用。

---

### Odigos｜全自动 K8s tracing 和监控
[https://odigos.io/](https://odigos.io/)

Odigos 是一个用于在 Kubernetes 中自动实现应用追踪和监控的开源项目。它最大的卖点在于无需修改应用代码，就能对应用实现自动插桩检测。支持的应用编程语言包括 Java、Python、.net、Node.js 和 Go。Odigos 采集的数据采用 OpenTelemetry 格式传输，使其更加容易和各类可观测性存储后端结合。它本身还提供了 Web UI，提升使用者管理采集数据传输的便捷性。这类全自动检测工具是否能在易用性和性能上去的良好的平衡，是项目能否成功的关键。

---

### RedisInsight｜强大的 Redis 客户端
[https://github.com/RedisInsight/RedisInsight](https://github.com/RedisInsight/RedisInsight)

对于 Redis 的用户，特别是运维人员来说，一个功能丰富的图形化客户端可以让自己的工作事半功倍。RedisInsight 就是这样一个功能强大的工具。它可以在图形化界面中浏览和处理 Redis 的键值数据，分析 Redis 实例中的命令和慢查询，通过发布与订阅可观测数据变化，可视化显示搜索索引和结果。对于有开发能力的用户，还可以开发自定义的数据可视化插件，查看特定的键值数据。

---

### ScratchDB｜ 基于 ClickHouse 构建的数据分析引擎
[https://github.com/scratchdata/ScratchDB](https://github.com/scratchdata/ScratchDB)

Snowflake 等商业化数据仓库在易用性上有着不错的表现。ScratchDB 这个项目则受它的启发，围绕开源数据库 ClickHouse 进行了一系列的封装，降低用户进行数据分析时的使用门槛。ScratchDB 支持以 JSON 格式插入和查询数据，并且能够自动根据新增数据创建表和列，无需预先定义数据 schema。它也能将查询结果转化为 JSON 和 HTML 表格格式，便于集成到下游的数据分析工具中。ScratchDB 本身也集成了 ClickHouse 优异的查询性能。非常适合在数据收集和分析的初期快速迭代，加速数据团队的工作效率。

---

### Next.js 新版本惹争议
[https://nextjs.org/blog/next-14](https://nextjs.org/blog/next-14) 及 [https://remix.run/blog/remix-heart-vite](https://remix.run/blog/remix-heart-vite)

近期两大前端框架 Next.js 和 Remix 都发布了自己的新版本。Remix 发布了对 Vite 构建的实验性支持。与之前所使用的构建工具相比，在 Vite 的帮助下，Remix 可以获得近十倍快的热更新速度。目前 Remix 团队和使用者都对这一功能反响不错。Next.js 的14版本同样使用 Vercel 自家研发的 Turbopack 提升编译性能，逐步取代 Webpack。但最引起关注的还是新发布的 Server Actions 功能，可以在 React 代码中直接调用后端方法。团队基于 sequel 演示这一功能的截图，也流传甚广。许多开发者质疑这是否带来了额外的安全问题，并且回到了前后端不分离的时代。

---

### Google SRE 团队总结运维的一篇文章
[https://sre.google/resources/practices-and-processes/twenty-years-of-sre-lessons-learned](https://sre.google/resources/practices-and-processes/twenty-years-of-sre-lessons-learned)

最后是来自 Google SRE 团队的一篇文章，总结了他们20年来运维经验中的11条宝贵教训。Google SRE 团队在大规模运维工作中的经验非常值得仔细分析借鉴，帮助运维团队构建更稳定可靠的大型系统。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

