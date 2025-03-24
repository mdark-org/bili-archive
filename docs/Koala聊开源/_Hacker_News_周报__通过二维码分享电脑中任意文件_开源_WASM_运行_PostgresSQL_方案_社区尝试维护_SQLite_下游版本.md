---
title: "[Hacker News 周报] 通过二维码分享电脑中任意文件；开源 WASM 运行 PostgresSQL 方案；社区尝试维护 SQLite 下游版本"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/623"
tags: []
date: 1665272949
bvid: BV1GR4y1R7Yw
---
了解科技资讯、把握行业脉搏。大家好，我是 Koala。欢迎收看第 623 期 Hacker News 周报。

---
### sharing｜将电脑中的文件通过二维码分享给手机
[https://github.com/parvardegr/sharing](https://github.com/parvardegr/sharing)

你是否经常需要将文件从电脑传输到手机中？ sharing 是一个帮助你完成这项工作的命令行工具。使用 sharing 可以将任意目录和文件以 URL 的形式对外暴露，同一个局域网环境中的手机，通过扫描二维码就可以进行下载。如果所用的电脑有公网 IP，还可以将要分享的内容暴露在公网中。

---
### Steampipe｜ 浏览云服务资产的交互式命令行工具
[https://steampipe.io/](https://steampipe.io/)

Steampipe 是一个帮助你浏览云服务资产的交互式命令行工具。在 Steampipe 的客户端中，你可以使用 SQL 语句查询许多公有云和 SaaS 服务中的数据，而无需自行开发同类的脚本工具。同时，它还将 SQL 的 Join 特性带到了不同的云服务之间，用户可以聚合查询不同云服务之间的关联数据。

---
### Horizon UI｜ 基于 Chakra UI 的管理后台模版
[https://horizon-ui.com/](https://horizon-ui.com/)

Chakra UI 是 React 生态中流行的组件库之一，但在保持可访问性和扩展性的同时，它也经常因为缺少一些高级功能，而无法满足复杂的业务需求。Horizon UI 是对 Chakra UI 的封装，在此基础上补充了许多组件与模板，使开发者可以快速开发出常见的管理后台类 UI。

---
### Postgres WASM｜ 开源 WASM 运行 PostgresSQL 方案
[https://supabase.com/blog/postgres-wasm](https://supabase.com/blog/postgres-wasm)

本周 Snaplet 与 Supabase 联合发布了实验性开源项目：Postgres WebAssembly，通过 WebAssembly 技术，在浏览器中运行 Postgres SQL 数据库。之前我们介绍过 Crunch Data 发布的 Postgres Playground 项目，同样可以在浏览器中运行 Postgres SQL 数据库，但相关代码并未开源，而本次的 Postgres WebAssembly 则是完整开源的版本，其中使用的虚拟化技术和网络技术，以及 WebAssembly 的时间细节，都可以在 Supabase 的博客中找到答案。

---
### v86｜ 通过 WebAssembly 运行 x86 兼容的虚拟机
[https://github.com/copy/v86](https://github.com/copy/v86)

在 Postgres WebAssembly 中，使用了一个名为 V86 的项目，它的作用是通过 WebAssembly 运行 x86 兼容的虚拟机。当应用希望移植到 WebAssembly 上，但是又依赖于虚拟化功能时，可以使用 V86 加以实现。

---
### libSQL｜ SQLite 下游版本
[https://github.com/libsql/libsql](https://github.com/libsql/libsql) & [https://itnext.io/sqlite-qemu-all-over-again-aedad19c9a1c](https://itnext.io/sqlite-qemu-all-over-again-aedad19c9a1c)

SQLite 是最流行的嵌入式数据库，我们的周报中也介绍过许多相关内容。不过作为一个开源项目，SQLite 的代码一直是由核心开发团队维护的，基本不接受外部贡献者。这导致社区中有大量的 fork 版本，添加自己所需的功能。本周 GitHub 上发起了一个叫做 LibSQL 的项目，希望维护一个不仅开源，而且也接受贡献的 SQLite 下游版本。发起者也在一篇博客中介绍了自己在 QEMU 项目中相似的经历。

---
### TypeScript 10 years anniversary
[https://devblogs.microsoft.com/typescript/ten-years-of-typescript/](https://devblogs.microsoft.com/typescript/ten-years-of-typescript/)

本周 TypeScript 迎来了十周年纪念日。为极其灵活的 JavaScript 语言提供类型支持是一件很有挑战性的事情，TypeScript 团队证明了他们的眼界与技术能力。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

