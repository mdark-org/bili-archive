---
title: "[科技周报] 赛博稻草人；快速 CRUD 开发框架；计算 LLM AI 成本"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/705"
tags: []
date: 1719136800
bvid: BV1Di421e7Ey
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala 了。欢迎收看第 705 期科技周报。

首先给大家介绍一个有趣的网络安全工具，赛博稻草人。这个轻量级程序的作用是通过伪装成各种安全分析和反恶意软件工具，来欺骗黑客和恶意软件，让他们认为你的电脑不适合下手。

---
### Cyber Scarecrow｜赛博稻草人
[https://www.cyberscarecrow.com/](https://www.cyberscarecrow.com/)

Cyber Scarecrow 的工作原理很巧妙，它会在你的电脑后台创建一些看起来像安全研究工具的进程，同时在注册表中添加一些条目，让人误以为你安装了各种安全软件。这样一来，当黑客试图在你的电脑上安装恶意软件时，他们会被这些假象吓退，从而放弃对你的攻击。Cyber Scarecrow 的创意来自于对恶意软件分析报告的研究。开发团队发现，恶意软件在感染受害者电脑之前，通常会先检查电脑上是否存在某些特定的防御指标。如果发现这些指标，恶意软件就会停止运行，不再继续感染。基于这一发现，Cyber Scarecrow 收集了这些指标，并将它们整合到了程序中。

Koala 认为，Cyber Scarecrow 这款工具的思路很有意思，它利用了黑客和恶意软件的谨慎心理，通过伪装来达到自我保护的目的。不过我们也要注意，随着此类工具的普及，黑客们可能会开发出识别这些伪装的方法，因此保持软件更新和良好的安全习惯，仍然是保护我们电脑安全的关键。

---

Teo 是一个新星的开源 web 服务框架，它的特点是 schema driven，也就是通过 schema 来驱动整个开发流程。Teo 支持 Rust、Node.js 和 Python 三种主流后端语言，开发者可以根据自己的技术栈选择合适的版本。它的 schema 定义语法借鉴了 GraphQL 和 Prisma 的设计理念，简洁又强大。使用 Teo 可以快速实现数据迁移、ORM、API 查询客户端等功能。它支持 MySQL、PostgreSQL、SQLite 和 MongoDB 等主流数据库。

---
### Teo｜ 快速 CRUD 开发框架
[https://github.com/teodevgroup/teo](https://github.com/teodevgroup/teo)

此外，Teo 还内置了用户会话、权限检查、中间件等常用功能，可以大大提升开发效率。Teo 的使用非常简单，只需编写一个 schema 文件，就可以生成基础的 CRUD API 服务。如果需要自定义逻辑，也可以很方便的编写自定义的 handler。

Koala 认为，对于那些需要快速迭代的项目来说，用 Teo 可以让开发者更专注于业务逻辑，而不是反复编写重复的 CRUD 代码。不过 Teo 目前还是一个比较新的项目，在生产环境中的使用可能需要更多的验证，但对于中小型项目或者是快速原型开发，Teo 无疑是一个不错的选择。

---

接下来介绍一个轻量级的数据库迁移工具 Dbmate。这是一个独立的命令行工具，可以帮助你轻松的管理数据库 schema 的版本控制。Dbmate 的特点是支持多种主流数据库，包括 MySQL、PostgreSQL、SQLite 和 ClickHouse 等，且不与任何编程语言绑定。它使用纯 SQL 来编写迁移脚本，非常简单直观。使用 Dbmate，你可以很方便的创建和删除数据库，运行待处理的迁移，回滚最近的迁移等。它还支持将当前数据库 schema 导出为 schema SQL 文件，便于在 Git 中 diff 查看 schema 的变化。

---
### Dbmate｜数据库迁移工具
[https://github.com/amacneil/dbmate](https://github.com/amacneil/dbmate)

作为一个单独的二进制文件，Dbmate 也非常易于分发和使用。Koala 认为 Dbmate 这款工具的设计理念非常符合现代软件开发的需求，它的跨语言特性使得它能够在多语言项目中发挥作用，而且使用纯 SQL 编写迁移脚本的方式降低了学习成本。对于需要对接多种数据库的开发团队来说，也可以用统一的工具和标准应对不同的数据库。

---

SQL Studio 是一个轻量级跨平台数据库 GUI 客户端，支持多种主流数据库，包括 SQLite、LibSQL、PostgreSQL、MySQL、MariaDB 和 DuckDB。它提供了数据库概览页面，展示常见元数据信息，同时可以展示每个数据表的详细元数据，例如每个数据表使用的磁盘空间大小。在自定义查询界面，你可以灵活的使用 SQL 访问数据库。查询结果支持无限滚动的视图，方便浏览大量数据。

---
### SQL Studio｜跨平台数据库 GUI 客户端
[https://github.com/frectonz/sql-studio](https://github.com/frectonz/sql-studio)

---

HTMX 2.0 版本正式发布了。这次更新虽然没有大幅改变核心功能，但还是带来了不少值得关注的变化。首先，所有的扩展都被移出了主仓库，现在有了专门的扩展网站，这样一来扩展的开发就可以不受 HTMX 主版本发布节奏的限制了。其次，HTMX 放弃了对 IE 浏览器的支持。此外，一些默认配置也有调整，比如 delete 请求改用查询参数，而不是表单等。

---
### htmx 2.0 版本正式发布
[https://htmx.org/posts/2024-06-17-htmx-2-0-0-is-released](https://htmx.org/posts/2024-06-17-htmx-2-0-0-is-released)

Koala 认为，作为一个轻量级的前端框架，一直以来 HTMX 都保持着稳定的更新节奏。这次的 2.0 版本虽然没有革命性的变化，但通过调整默认配置、移除废弃特性等方式，让整个框架变得更加现代化。

---

TokenCost 是一个可以帮助开发者计算大语言模型 API 使用成本的 Python 库。TokenCost 主要提供了三个核心功能，首先是 LM 价格跟踪，主流的大语言模型提供商经常会更新他们的定价策略，TokenCost 可以帮助开发者及时了解最新的价格变化。其次是 token 计数，在向 OpenAI 这样的服务发送请求之前，TokenCost 可以准确的计算出 prompt 中的 token 数量。

---
### TokenCost｜计算 LLM AI 成本
[https://github.com/AgentOps-AI/tokencost](https://github.com/AgentOps-AI/tokencost)

最后是易于集成，只需调用一个函数，就可以获得 prompt 或 completion 的成本。Koala 认为，对于正在开发 AI 应用或 AI 代理的团队来说，TokenCost 无疑是一个非常有用的工具，它不仅可以帮助开发者更好的控制成本，还能够在设计 prompt 时提供及时的反馈，特别是在一些需要频繁调用 API 的场景中，使用 TokenCost 可以帮助团队更精确的估算和控制运营成本。

---

以上就是本期科技周报摘要，谢谢您的收看。


