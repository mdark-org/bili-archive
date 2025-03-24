---
title: "[Hacker News 周报] 快速启动隔离开发环境；JSON 可视化工具；Heroku 即将停止免费额度"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/618"
tags: []
date: 1662251400
bvid: BV19e411g7qe
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala，欢迎收看第 618 期 Hacker News 周报。

---

### Devbox｜快速启动隔离开发环境
[https://www.jetpack.io/devbox/](https://www.jetpack.io/devbox/)

首先介绍的项目叫做 Devbox，它可以让你快速启动隔离的 shell 或容器环境。Devbox 使用了 Nix 的包管理工具，并在 Nix 复杂概念之上又做了许多比较容易使用的封装，让 Devbox 变成了简单的命令行工具。在 Readme 中，Devbox 也与其他一些同类工具，如 Docker、Buildpacks 做了对比，介绍了自己的优势。对于希望快速准备开发环境的开发者，可以尝试这个新的开发方案。

---

### 绘图语言 D2
[https://d2lang.com/](https://d2lang.com/)

D2 是一种绘图语言，通过自定义的 DSL 就能声明式的绘制图表，并且内值了很多和编程相关的概念，使你可以很容易的在 D2 的基础上去绘制出自己希望的架构图。

---

### YAO｜开发应用引擎
[https://yaoapps.com/](https://yaoapps.com/)

最近 Yao 发布了它的 0.10.1 版本，Yao 定位于快速开发应用的引擎。它的特点是使用 JSON 创建模型，编写接口，描述界面，希望实现更快的编程效率。本次发布的版本也提供了云化的基础设施，本地化的 SaaS 工具，以及增强的 DSL Widget Socket 等系列能力。快速开发应用领域在不断创新，作为一个开源项目，大家可以去了解 Yao 的设计思路。

---

### JSON Crack｜JSON 可视化工具
[https://jsoncrack.com/editor](https://jsoncrack.com/editor)

JSON Crack 是一个可以帮助可视化你的 JSON 数据的在线工具。JSON 数据无处不在，无论是 API 接口，还是配置文件或是本地数据，JSON Crack 都能帮你生成一个树状图表，使你更好的理解和查看这段 JSON 数据的内容，并且它也提供搜索，下载等一些便捷的操作。

---

### Motionity｜动效编辑器
[https://motionity.app/](https://motionity.app/)

Motionity 是一个基于 Web 制作的动效编辑器，它的界面非常类似于视频编辑类软件的功能，它是基于 FFMPEG 的 JS 封装来实现编辑视频和图片的效果。对于实现这一编辑器类型的 UI，或者对他背后的音视频编辑原理感兴趣的小伙伴，可以去研究这个项目的源码。

---

### mvSQLite｜分布式 SQLite
[https://github.com/losfair/mvsqlite](https://github.com/losfair/mvsqlite)

接下来推荐一篇文章，作者介绍了他们的项目 mvSQLite 是如何将 SQLite 转化为分布式数据库的，并提到了之前已有的多种将 SQLite 变为多机运行的方案，如我们频道曾介绍过的 rqlite 和 LiteStream 等。不过该作者的项目不仅仅复制数据，而且是分布式的，这意味着不仅读取性能可扩展，同时写入性能也可以扩展。文章介绍了他们是如何以苹果开源的 FoundationDB 为基础，去实现这个分布式能力的，以及在 FoundationDB 之上他们所做的工作。

---

### Heroku 即将停止免费额度

最后是本周的两则新闻。Heroku 是第一代的 PaaS 产品，深受开发者的喜爱。近期 Heroku 正式宣布，他们将从 2022 年 10 月底停止免费的产品计划，专注于服务付费用户。这引起了网上许多关于 Heroku 替代品的讨论，不过早期 PaaS 平台的这一转型，也说明在云计算领域的竞争越来越激烈。

---

### GitHub 开发者关系副总裁回复移除 Trending

另一则新闻是，近日 GitHub 在它的 Trending 页面标记了即将移除 Trending 功能的提示，原因是使用效率较低。消息一发出，就在社区引发了热烈的讨论。大量用户反馈，Trending 是大家非常喜欢浏览的页面，不应该被取消。不过刚刚 GitHub 的开发者关系副总裁做了回复，介绍了这一举动背后的想法，并且认为社区的反馈会让他们重新考虑，所以暂时移除了关于 Trending 的提示，等待下一步的决定。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

