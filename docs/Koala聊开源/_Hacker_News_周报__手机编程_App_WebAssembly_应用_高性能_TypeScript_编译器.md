---
title: "[Hacker News 周报] 手机编程 App；WebAssembly 应用；高性能 TypeScript 编译器"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/625"
tags: []
date: 1666485000
bvid: BV14G4y1H7VM
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第625期 Hacker News 周报。

---
### Tabby｜用 web 开发的现代化终端
[https://github.com/Eugeny/tabby](https://github.com/Eugeny/tabby)

Tabby 是一个用 web 技术开发的现代化终端。作为一个终端，它比较强调平台兼容能力，可以在 Windows、Mac 和 Linux 上运行，也有 web 在线版本。它内置了 SSH 的客户端和连接的管理工具，同时对 Powershell、WSL、Gitbash 等终端类型做了支持。一些常用功能如文件上传、下载和颜色主题等，也都支持的比较好。如果你是终端的重度使用者，并且也想将更多的功能集成到终端中，可以尝试 Tabby。

---
### 用 Github Page 部署 SQLite 数据库
[https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/)

接下来是两个与 web assembly 相关的项目。在第一个的博客中，作者介绍了如何使用 GitHub page 来部署一个 SQLite 数据库，并且也这样一个方案可用于任何一个静态文件的托管平台上。作为数据库 SQLite 一般需要一个后端程序才能运行，但作者通过把 SQLite 移植到 web assembly 上，并且基于浏览器的内存实现了一个虚拟的文件系统，将 SQLite 高效的运行在浏览器中，从而可以不依赖任何后端服务，就可以拥有一个自己的数据库连接的程序。

---
### stlite｜Streamlit 的 serverless 版本
[https://edit.share.stlite.net/](https://edit.share.stlite.net/)

另一个项目叫做 stlite，它是一个 Streamlit 的 serverless 版本。我们在往期周报中曾介绍过 Streamlit，它是一个通过 Python 编写，具有 web 界面的应用程序的框架。Streamlit 本身的运用都是通过 Python 来搭建，并且与各种 Python 生态中已有的数据处理和机器学习的模块都配合良好。这次的 stlite 项目则是将 Streamlit 整体的编译到 web assembly 上，从而使 Python 程序不再需要服务器来运行，而是直接运行在浏览器中。从这个实例应用中可以看到，左边是 Streamlit 兼容的 Python 代码，但整个运行都发生在浏览器里。

---
### TypeRunner｜ 高性能 TypeScript 编译器
[https://github.com/marcj/TypeRunner](https://github.com/marcj/TypeRunner)

TypeRunner 是高性能的 TypeScript 编译器。TypeScript 有一个基于自身开发的编译器 TSC，但是当有非常巨大的 TypeScript 代码库时，TSC 的性能还是会成为瓶颈，性能不是非常理想。因此社区中也尝试用别的语言重写一个 TypeScript 编译器。TypeRunner 就是其中一个尝试，它使用 C++ 构建的编译器。在测试中，在冷启动的情况下，相比较于 TSC，TypeRunner 有数十倍到 100 倍的性能提升，而在热启动的情况下，它能获得几千倍甚至上万倍的性能优化。

---
### Linen｜ Slack 替代品
[https://github.com/Linen-dev/linen.dev](https://github.com/Linen-dev/linen.dev)

Linen 是一个 Slack 的替代品，更适合社区场景下的使用，并且也对搜索引擎的 SEO 更友好。作为一个广泛使用的即时通讯工具，Slack 也被很多开源社区用于日常的社区活动，但是由于 Slack 定位于封闭式的社区，所以 Slack 的信息无法从互联网上搜索到。针对社区讨论内容可被搜索的需求，Linen 的设计实现了这一需求。

---
### Replit Mobile App｜ 手机编程 App
[https://blog.replit.com/mobile-app](https://blog.replit.com/mobile-app)

本周在线编程工具 Replit 发布了移动端应用 Replit Mobile App。基于这个应用可以在手机端编写代码，并且基于他们的云端服务可以实现代码的部署和调试。在使用手机编程时可以解锁更多的编程场景，例如在 Replit 的博客中，他们提到了如何基于手机编程，帮助第三世界国家的学生更容易的接触编程。同时在设计中，他们也加入了很多巧思，使在小屏幕上的编程变得更加可行。

---
### Koala 频道观众贡献的2个 Hacker News 周报检索项目
[https://github.com/ZutJoe/Koala_hacker_news](https://github.com/ZutJoe/Koala_hacker_news)

上周由 Koala 频道的观众贡献了一个叫做 Koala Hacker News 的 GitHub 项目。这个项目会自定同步 Hacker News 周报的内容，并且更新到仓库的 Redmi 中，方便大家检索和查看。同时还有另外一位观众制作了一个思维导图的版本。感谢大家的贡献和维护。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


