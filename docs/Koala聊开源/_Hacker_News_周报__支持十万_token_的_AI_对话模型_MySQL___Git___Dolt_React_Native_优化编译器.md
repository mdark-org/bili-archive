---
title: "[Hacker News 周报] 支持十万 token 的 AI 对话模型；MySQL + Git = Dolt；React Native 优化编译器"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址: https://mailchi.mp/hackernewsletter/651"
tags: []
date: 1684037388
bvid: BV1Wg4y1V7GJ
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看第651期Hacker News周报。

AI公司Anthropic的模型Claude，本周发布了最新特性，将对话中的上下文Token数量从9000提升到了10万，相当于对应约75000个单词。这意味著用户可以将数百页篇幅的资料交给Claude作为上下文，并通过对话分析其中的内容。
对于使用大语言模型实现文档解答、在线支持的场景，这一改进使得针对大量文字文档的训练变得更为简单。同时，10万这一数值也远超ChatGPT等同类产品提供的数值。接下来，上下文Token数量是否会成为大语言模型类产品的关键性指标，可能还要从用户的实际反馈中去寻求答案。

---
### Dolt｜包含版本控制功能的 SQL 数据库
[https://www.dolthub.com/blog/2023-05-05-dolt-1-dot-0/](https://www.dolthub.com/blog/2023-05-05-dolt-1-dot-0/)

Dolt是一款包含版本控制功能的SQL数据库，你可以将它理解为Git与MySQL的结合。使用者能够将数据库中的数据切换至不同的分支进行管理，你能像Git一样对不同版本的数据进行Diff、Merge等操作。
在过去的几年中，Dolt发布了约270个版本，而近期他们正式发布的1.0版本，包含生产级别的性能、MySQL兼容以及稳定的API。如果对Dolt中的技术实现有兴趣，或者希望使用包含版本控制功能的数据库，都可以关注这个项目。

---
### Qdrant｜基于 Rust 的向量数据库
[https://github.com/qdrant/qdrant](https://github.com/qdrant/qdrant) [https://www.pinecone.io/learn/vector-database](https://www.pinecone.io/learn/vector-database)

Qdrant是一个基于Rust的开发的向量数据库，实现了高度优化的索引和查询算法，并提供了多种语言的SDK，以便与数据库进行交互。与其他向量数据库相比，Qdrant希望在周边工具的丰富度、与AI模型的集成、分布式部署、SIMD硬件加速等方面脱颖而出。如果你对向量数据库是什么以及它与AI的关系不太了解，本期我们也分享了一篇文章，介绍什么是向量数据库。文章解释了向量数据库的核心概念和工作原理，以及在不同场景中的使用方式。

---
### Syncthing｜文件持续同步工具
[https://github.com/syncthing/syncthing](https://github.com/syncthing/syncthing)

文件同步是非常常见的需求，并且也通常希望同步是持续不断的，常应用于数据备份、数据同步等场景。Syncthing是一个成熟的文件持续同步工具。作为一个开源的工具，Syncthing对文件内容提供了更好的隐私保护，同时也通过加密、鉴权等方式增强了数据的安全性。工具本身也有GUI界面，使得普通用户也可以基于它轻松设置同步规则。

---
### Fir｜ 为 Go 开发者设计的 Web UI 开发框架
[https://livefir.fly.dev/](https://livefir.fly.dev/)

For工具包是为Go开发者设计的Web UI开发框架。如果你掌握一定的HTML、CSS和JS等前端技能，就可以基于For开发出基于Go和少量前端代码的Web UI。最新的版本中，For又加入了Alpine.js的集成功能，使得Go程序与Web UI之间的数据交互不再需要刷新界面，而是可以实时完成，带来更好的用户体验。

---
### Tamagui｜React Native 优化编译器
[https://tamagui.dev/blog/version-one](https://tamagui.dev/blog/version-one)

React Native经过多年的迭代，在移动端开发方面已经愈发成熟。基于React框架开发出一套可以同时用于Web和移动端的代码，也是最近技术栈的突出优势。但编写Web和移动端通用的React组件，往往容易遇到性能问题。Tamagui是这一问题的系统解决方案，它不仅提供了一套性能优异的UI组件库，还提供了一个优化编译器，可以将用户编写的代码进行静态优化，从而带来更好的性能。

---

以上就是本期Hacker News周报摘要，谢谢你们的收看。

