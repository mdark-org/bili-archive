---
title: "[Hacker News 周报] 在编辑器中和 AI 结对编程；高性能 Go 哈希表；训练自己的 AI 模型"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址:https://mailchi.mp/hackernewsletter/645"
tags: []
date: 1680405633
bvid: BV1fX4y1r7CW
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第645期HackerNews周报。

### Cursor｜在编辑器中和 AI 结对编程

https://github.com/getcursor/cursor

代码生成已经成为了AI的重要应用场景，Cursor这个项目则是将AI代码与开发者最重要的工具编辑器进行了集成。

尽管项目发布时间不长，但它已经能够在代码编辑器内与AI结对，完成代码编写、编辑、理解代码等工作。

项目起初是以商业化产品的形式推出，但或许是因为AI领域竞争激烈，目前Cursor已经在Github中开源了对应的代码实现，也收到了不少反馈。

---
### SwissTable｜高性能 Go 哈希表

https://www.dolthub.com/blog/2023-03-28-swiss-map/

Google在几年前的CPPCon中曾经介绍过名为SwissTable的哈希表设计，并在Abseil项目中开源了对应的代码实现。本周数据库DB的开发者们开源了SwissTable数据结构对应的Go语言实现SwissMap。相比Go内置的Map结构，SwissMap使用的内存更少，适合在性能敏感的场景中使用。在发布的博客中也介绍了该数据结构，在大型哈希表中的优势以及在使用场景上如何进行取舍。

---
### Sidekick｜训练自己的数据 AI 模型

https://www.getsidekick.ai/

随着大语言模型的成熟，使用特定的数据训练模型为己所用，是许多人都在尝试的方向。而这一过程通常涉及将模型连接私有的数据源，清洗汇总数据，最终与AI模型对接等几个步骤。Sidekick项目希望为这一场景提供易用的解决方案，使开发者可以面向AI构建自己的ETL流水线，将文档、知识库、博客等信息汇总，最终进行查询。

---
### Convoy｜聚焦 Webhook Gateway 的服务端中间件

https://getconvoy.io/

服务端的中间件领域正在产生越来越多细分场景，Convoy就是一个聚焦Webhook Gateway场景的开源项目。基于Webhook事件的异步编排模式在现代化的后端服务开发中非常常见，但Convoy认为在安全性、可靠性、可扩展性方面都做好并非易事。所以他们将这些能力集中实现在Webhook Gateway中，并提供重试策略、限流、静态IP、可视化debug等高级功能，让开发者可以获得更好的开发体验。

---
### Notesnook｜专注于隐私和易用性的笔记软件

https://github.com/streetwriters/notesnook



电子笔记仍然是许多人常用的工具，对于追求隐私的用户来说，可以尝试Notesnook这一开源项目，该项目是一款专注于隐私和易用性的笔记软件，支持多平台客户端，并且代码完全开源，无论是想使用端到端的加密笔记，还是对对应的技术细节感兴趣，都可以进行了解。

---

### React 团队介绍 React Lab 研究进展

https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023

React团队在发布新官网之后，又通过博客的方式介绍了React Lab近期进行的研究进展。内容包括Server Component，自动优化编译等功能。这样的介绍方式也使React团队的工作更加透明和公开化，有利于社区的发展。

---

以上就是本期HackerNews周报摘要，谢谢您的收看。


