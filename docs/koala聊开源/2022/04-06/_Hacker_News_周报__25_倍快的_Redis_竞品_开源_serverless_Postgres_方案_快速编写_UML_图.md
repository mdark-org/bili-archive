---
title: "[Hacker News 周报] 25 倍快的 Redis 竞品；开源 serverless Postgres 方案；快速编写 UML 图"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/606"
tags: []
date: 1654389000
bvid: BV1L34y1L7zK
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala。欢迎收看第 606 期 Hacker News 周报。
首先是一个叫做 Dragonfly 的内存数据库，它定位于与内存数据库领域的事实标准 Redis 和 Memcached 保持兼容，不过吸引之处在于它使用了更先进的算法和数据结构设计，从而得到了更强的性能。
虽然 Dragonfly 才刚刚发布了 0.1.0 版本，还是个比较年轻的项目，但从已经实现的 benchmark 可以看出，相对于 Redis，它已经有了 25 倍以上的性能优势。
此外，在他的 GitHub readme 中，通过 design decision 和 background 两个章节，详细描述了 Dragonfly 的内部技术实现，对内存数据库最新研究方向感兴趣的同学，可以了解一下这个项目。

---

### PlantUML
https://plantuml.com/
其次是一个非常强大的快速编写 UML 图的组件的工具 PlantUML。
大家在编写程序时，经常会使用 UML 来描述自己的程序逻辑。
PlantUML 是在 UML 的基础上提供了一些更易用的封装，让你可以快速画出顺序图，用力图等图例，帮助你更好的介绍你的程序设计思路。

---

### Neon
https://neon.tech/
Neon 是一个新的 serverless Postgres 数据库方案，它以开源的形式对标于 AWS 的 Aurora 数据库服务。
Neon 可以帮助你去构建一个可拓展，低成本，容易使用的 serverless 型数据库。
数据库在 serverless 场景下的实践是一个有很大探索空间的领域。
如果希望寻找一些公有云服务的替代品，或者对 serverless 与数据库的结合感兴趣，可以关注这个项目的发展。

---

### ROAPI
https://github.com/roapi/roapi
接下来是一个叫做 root API 的定位十分巧妙的工具，它可以将多组数据源结合在一起，例如常见的 Postgres，MySQL 和 SQLite 数据库，它还支持将一些 SaaS 服务的数据，如 Google 的 Sheet 集成。
此外，也支持将一些文件类型的存取接入进来，如文件系统或是 S3 这样的对象存取。
它的灵活之处是将数据源汇集后，可对外自动提供一套 Postgres 兼容的协议，或者是 GraphQL 和 restful API 的 HTTP 接口，其对外提供统一的查询方式，让你可以简单的构建一些数据类的应用。

---

### Tetra
https://www.tetraframework.com/
Tetra 是一个全栈框架，它的后端使用的是 Django，前端使用的是 Alpine.js。
值得一提的是 Alpine.js 也是我们深度分析系列介绍过的 Caleb Porzio 开发的。
Tetra 的思路是将各种业务逻辑放在后端的 Python 代码中执行，将结果渲染成 HTML 之后发送给 Alpine.js 进行最终渲染。
这样一个前后端一体的方案，可以在一些场景下提供更好的性能和更简单的代码编写方式。

---

### fd
https://github.com/sharkdp/fd
FD 是用 Rust 编写的 CLI 工具，它定位于常用终端工具 find 的替代品，除了基本文件查找功能之外，它还实现了更友好的查询语法和更快的速度。
这也是比较典型的用 Rust 重写已有工具的例子。

---

### svelvet
https://svelvet.io/docs/basic-usage/
在一些场景下，如 3D 渲染，物联网，甚至是低代码领域，很多人会追求用关联图表的方式来展示数据逻辑。
Svelte 是基于 Svelte 开发的工具库，专门用来构建可交互的关系图。
这个领域的框架和库也是比较活跃的。

---

### ffmpeg buddy
https://evanhahn.github.io/ffmpeg-buddy/
FFmpeg 是一个使用最广泛的音视频工具，但是在功能强大的同时也以参数多难以记忆著称。
这个叫做 FFmpeg buddy 的工具，挑选了一些常见的参数选项，并做成了可视化表单，当你在表单中调整和配置参数时，它就会生成一个 FFmpeg 的指令，来实现你想要的剪辑效果。
以上就是本期 Hacker News 周报摘要，谢谢您的收看。

