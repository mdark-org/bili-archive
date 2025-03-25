---
title: "[Hacker News 周报]  JS 类型系统提案；开源游戏引擎 Godot；数据库索引工作原理"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/594"
tags: []
date: 1647143697
bvid: BV1VS4y1D768
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第594期 Hacker News 周报。

上周我们栏目的深度分析系列，发布了一期关于语言大师 Anders Hejlsberg 的视频。凑巧的是，本周我们也收集到了两条关于他所创立的 TypeScript 的最新消息。
第一，TypeScript 团队联合几名社区成员，刚刚向 JS 提出了建议草案，建议给 JS 的语言标准 ECMAScript 添加类型。草案的实施，将会使类型成为 JS 的官方组成部分，而不只是属于 TypeScript 这样的周边项目。
第二，个消息是，最近一位来自著名支付平台 Stripe 的工程师，在 Twitter 上表示，他们已将公司最大的 JS 代码库从 Flow 迁移到了 TypeScript 上。为了本次迁移，他们修改了超过350万行代码。他还表示，之所以进行如此大规模的迁移，是因为虽然他们从2016年起就开始使用 Flow，但显然 TypeScript 已经在前端社区里取得了胜利，并且 TypeScript 团队也做了很好的工具和支持工作。由此可见，TypeScript 在 JS 社区里正在日益壮大。

---
### TypeScript 向 JS 提议增加类型系统
[https://github.com/tc39/proposal-type-annotations](https://github.com/tc39/proposal-type-annotations)

### Stripe 将 JS 代码库从 Flow 迁移到 TypeScript
[https://twitter.com/drosenwasser/status/1492968944032313346](https://twitter.com/drosenwasser/status/1492968944032313346)

---
Godot 是一个在 GitHub 上有4.7万个 Star，非常成功的开源游戏引擎，同时在社区里也已经有了大量的用户关注。最近 Godot 宣布即将发布 Alpha 4.0 版本，作为开源项目，它已经有了比较完整的游戏开发能力，如果你是一个游戏开发者，或许可以考虑使用这个项目去体验你的游戏开发之旅。

---
### Godot ｜一个开源游戏引擎
[https://godotengine.org/](https://godotengine.org/)

---
苹果即将发售硬件设备 Mac Studio，这个新的设备可以搭载两种芯片，一种是 M1 Max，另一种是性能更加强大的 M1 Ultra。随着 M1 系列的推出，芯片已经成为苹果公司新的杀手锏。

---
### 苹果将发售 Mac Studio｜M1 芯片成为新杀手锏
[https://www.apple.com.cn/mac-studio/](https://www.apple.com.cn/mac-studio/)

---
下面是一个13年前在 Stack Overflow 上提出的问题，不过最近又被分享到了 Hacker News 上。在数据库里，索引是一个很重要的概念，很多数据库的初学者也都很 好奇，如何通过建立索引的方式来优化数据库的性能。Stack Overflow 上的这个回答，虽然篇幅不是很长，但是由浅入深，讲解的非常易懂，感兴趣的同学不妨阅读一下。

---
### 关于数据库索引工作原理的解答
[https://stackoverflow.com/questions/1172063/how-does-database-indexing-work](https://stackoverflow.com/questions/1172063/how-does-database-indexing-work)

---
这是一个叫做 Dasel 用 GoLang 编写的命令行工具，用它可以读取和修改任意的 JSON、TOML、YAML、XML 和 CSV 文件。在日常工作中，大家多少会有一些修改这些文件的需求，Dasel 的出现实现了用单一工具，完成以前多种工具配合才可完成工作的方式。

---
### dasel ｜单一工具完成 JSON、TOML 等文件的读取和修改
[https://github.com/TomWright/dasel](https://github.com/TomWright/dasel)

---
最后是一篇关于版本安全的文章，文章题目是请停止使用 latest 的标签。现在很多软件系统都会基于第三方代码构建，如果你声明依赖第三方的最新版本，那么当第三方发布新版本时，你的软件也会自动更新，这将带来一些隐患。因此文章提出，应该停止使用 latest 标签，即停止在 Dockerfile 或其他涉及版本管理机制的地方，使用自动更新的最新版本，取而代之的是应该在依赖文件里声明具体的依赖版本。同时如果支持 Lockfile 机制，也应该充分使用 Lockfile，来保证你的依赖不会意外更新。

---
### “请停止使用 :latest 标签”｜一篇关于版本安全的文章
[https://snyk.io/blog/stop-using-latest-docker-tag/](https://snyk.io/blog/stop-using-latest-docker-tag/)

---
以上就是本期 Hacker News 周报摘要，谢谢您的收看。


