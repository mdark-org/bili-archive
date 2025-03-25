---
title: "[Hacker News 周报] 发布 clickhouse-local；使用 HTTP/3 连接 MySQL；使用 WebAssembly 运行 Vim"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/633"
tags: []
date: 1673151922
bvid: BV1ad4y1E7SC
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第 633 期 Hacker News 周报。

---

### clickhouse 发布数据分析工具 clickhouse-local
https://clickhouse.com/blog/extracting-converting-querying-local-files-with-sql-clickhouse-local

ClickHouse Local 是一个数据分析工具，可以对本地文件，S3 中的数据或是数据库导出的结果进行查询分析，并且分析方式可以充分使用 সিকവ 以及 ClickHouse 函数的强大功能。

作者表示这项工作在 ClickHouse 社区中已经持续了数年时间，与一些同类工具相比，ClickHouse Local 拥有更强的兼容性与性能，并且由于该工具将 ClickHouse 服务和客户端整合到了一个程序中，也使得它可以在 serverless 场景下被使用。

在社区中就有基于 ClickHouse Local 在 AWS Lambda 中运行 ClickHouse 查询引擎的尝试。00:42

---

### ov | 一个通用终端分页器
https://github.com/noborus/ov

OV 是一个通用的中端分页器，它不仅可以代替大家常用的 less、more 等中端命令，还对表格数据等场景有一系列的深度优化。00:50

从功能列表上看，与传统的分页器相比，OV 不仅支持 watch、follow 的模式，还有固定行、自动识别列、增量搜索，支持压缩文件等便捷功能。与我们之前介绍过的一些项目类似，新一代的命令行工具往往拥有更强大的功能和更好的使用体验，如果你是一个重度命令行使用者，不妨更新一下你的工具库。01:18

---

### Vim online editor | 使用 WebAssembly 运行 Vim
https://www.vimonlineeditor.com/

在 WebAssembly 的帮助下，Vim Online Editor 诞生了，该项目的作者通过 WebAssembly 将 Vim 编辑器移植到了 Web 中，并使用浏览器的 indexDB 保存文本内容。

作者表示通过这一项目，可以使 Vim 爱好者们在更多场景下使用 Vim 来编辑文本，例如系统中未安装 Vim 软件，甚至于还可以在 Windows 系统中通过浏览器使用 Vim。

---

### 使用 HTTP/3 连接 MySQL
https://planetscale.com/blog/faster-mysql-with-http3

本周 serverless 数据库厂商 PlanetScale 发布了一篇博客，介绍了他们对于使用 http 与 MySQL 数据库通讯的最新研究。

在 serverless 场景下，通常无法打开一个 TCP 连接，并使用 MySQL 原生的协议进行通讯，这就使得 PlanetScale 这样的厂商必须开发一套基于 http 的 API。

从博客的测试结果看，在大多数场景下，http API 表现的都比原生的 MySQL 协议更好，并且当延迟越高，网络越不可靠时，收益就会越大。

作者同时尝试了 http3 和 http2，并且认为在目前阶段 http3 还不够成熟，但是潜力较大。

目前如果使用浏览器访问 PlanetScale 的 web 控制台，就能够体验到使用 http3 API 与 MySQL 数据库进行通讯的效果。

---

### polars | 高性能 Rust DataFrame 库
https://github.com/pola-rs/polars

Polars 是一个高性能的 Rust Data Frame 库。

通过惰性执行，多线程，SIMD 等特性，Polars 可以带来极高的查询性能。

Data Frame 是一种 Python 生态中流行的数据分析工具 Pandas 所使用的数据结构，后来被广泛应用于许多数据分析工具中。

近年来，围绕提升 Data Frame 数据结构查询性能的项目层出不穷，以 Apache Arrow 为代表的项目开始转向使用 Rust 实现相关工具，以追求更好的性能。Polars 同样使用了 Arrow 作为其内存模型。

数据分析是否能成为 Rust 语言的下一个主战场，大家可以持续关注。

---

### uiverse | UI 组件库
https://uiverse.io/

如果你想让自己开发的网站看起来与众不同，但你又缺乏灵感，那不妨关注 Universe 这个项目。

在 Universe 中，许多贡献者一起提供了成百上千样式美观的 UI 组件可供参考，并且每个 UI 组件都可以快速复制对应的 HTML 和 CSS 代码，稍加修改就可以集成到你自己的项目中。在 Universe 中贡献代码还可以获得积分，在贡献者排行榜中，你还可以找到值得关注的 UI 专家。

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


