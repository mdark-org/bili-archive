---
title: "[Hacker News 周报] GitHub Action 教程；基于 web 的远程桌面工具；在 serverless 中使用 SQLite"
description: "了解科技资讯，把握行业脉搏，每周快速浏览 Hacker News 精选。Hacker Newsletter 和 Hacker News Daily 地址：https://mailchi.mp/hackernewsletter/588；https://www.daemonology.net/hn-daily/"
tags: []
date: 1643610080
bvid: BV1r34y127VU
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第588期 Hacker News 周报。

---
### Charm
Charm 是一个开源的用来开发 CLI 命令行工具的框架。与传统不同的是，它可以开发很复杂丰富的 CLI，而且它提供的云端服务，还可以让你把 CLI 的数据在云端共享。这种基于 CLI 开发复杂客户端的方式，正在变成一种趋势，想开发 CLI 的同学可以看看是否需要这些功能。

---
### Nova
Nova 是一个专门给 Mac 设计的代码编辑器，虽然同类编辑器很多，但是因为 Nova 与 Mac 的深度集成，在性能和体验上会更好一些，有兴趣的同学可以体验一下，看是否具有独特的优势。

---
### Ar নোট
Ar নোট 是一个开源的创建手绘风格笔记的软件，通过这款软件可以创作手写风格的内容，如果你喜欢纸和笔的风格记录自己的工作，可以尝试一下。

---
### GitHub Action
GitHub Action 是 GitHub 提供的一套简便的 CI/CD 服务，很多托管在 GitHub 上的开源和闭源项目也都在使用。这是 GitHub Action 的一组使用示例，从最简单的 Hello World 到比较高级的特性，如并行执行和任务矩阵等。不论之前是否使用过这个服务，都可以通过这些例子，学习如何使用 GitHub Action，并更好的理解它的特性。

---
### Playwright
Playwright 是微软开发的一个外部自动化测试框架，可以同时支持在 Chromium，Firefox 和 WebKit 三个内核上执行自动化，对应的浏览器包括所有以 Chromium 为内核的浏览器，如 Chrome，各种国产浏览器和新的 Edge，火狐和 WebKit 对应的 Safari，也就是说 Playwright 支持所有主流浏览器。值得一提的是，谷歌曾开发同类的开源项目 Puppeteer，是专为 Chrome 开发的一套自动化测试框架，Puppeteer 的部分核心人员到了微软之后，重新建立了 Playwright 项目，并支持更多浏览器。

---
### PRQL
PRQL 是一个基于 Rust 编写的现代化查询语言，通过在 Readme 里的举例，可以了解它的使用方式，PRQL 实现了一套它自己所描述的更简单强大的语法，因为它最终会被转译成 SQL，所以可以被用于任何基于 SQL 的数据库，因此还是很通用的，如果你对它的特性感兴趣，可以关注这个项目。

---
### Deskreen
Deskreen 是基于 Web 技术开发的屏幕共享工具，因此提供了比常规工具如 TeamViewer 和向日葵更好的隐私保护，例如它可以限制只共享单个应用，而不是整个桌面。如果你在之前使用的共享工具中遇到过一些问题，可以试试这款工具，看是否能解决你的问题。

---
### 微服务
这篇文章的作者讲述了他的团队如何放弃向微服务迁移，文章列举了一些非常典型的场景，在这些场景下微服务未必是最好的选择。虽然这些业务场景对他们具有特殊性，但也具有一定的普遍性，如果你的团队也在考虑微服务，不妨阅读这篇文章，看是否有所借鉴。此外，文章中也提到经验的缺失也是重要的考量因素，所以在尝试微服务之前，需要积累一些知识和经验，而不是盲目的使用。

---
### Cloudflare
Cloudflare 是当下非常火热的云服务公司，它最新推出的 Dural Objects 服务，是 Cloudflare 为它的 serverless 服务 Workers 提供的持久化存储之一。在这篇博客中，作者介绍了自己将 SQLite 运行在 Cloudflare Dural Objects 服务上的改造过程，作者通过实现虚拟文件系统的方式，让 SQLite 能够在 serverless 环境中运行。

---
### Kubernetes
现在大家都认为 K8S 是大势所趋，纷纷开始尝试使用。这篇文章提到了两个是 K8S 如此复杂的原因，讲述的也比较直白易懂。第一，从定义上 K8S 自身定位是一个集群操作系统，有很多设计上的考虑，这也导致它整体设计上就比较复杂的。第二是它的声明式概念，因为 K8S 的这些设计理念可能与大家喜欢的开发运维模式不同，这都需要通过更多的培训和软件的改造，才能更好的使用它。对 K8S 有兴趣的同学，应该先理解它的机制，然后以正确的方法使用。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

