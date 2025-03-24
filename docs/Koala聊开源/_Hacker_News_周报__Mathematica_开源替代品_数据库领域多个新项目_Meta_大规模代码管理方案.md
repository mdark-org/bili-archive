---
title: "[Hacker News 周报] Mathematica 开源替代品；数据库领域多个新项目；Meta 大规模代码管理方案"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/628"
tags: []
date: 1668904507
bvid: BV1oP4y197dF
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第628A期Hacker News周报。

---
### Redpanda｜与 Kafka PAI 兼容的流式数据平台
[https://redpanda.com/](https://redpanda.com/)

Redpanda是一个与Kafka API兼容的流式数据平台，基于C++和Cstar框架开发，目标是提供比Kafka更强的性能和更低的开销，同时移除对JVM和Zookeeper的依赖。作为最流行的流式数据平台，Kafka被广泛使用，通过与其API保持兼容的方式，对外提供服务是一个不错的思路。Redpanda和其他同类方案能否从Kafka手中获得更多用户值得关注。

---
### Autocut｜通过字幕剪切视频的工具
[https://github.com/mli/autocut](https://github.com/mli/autocut)

作为Up主，剪辑视频的工作并不轻松。Autocut是一个通过字幕剪切视频的工具，通过识别视频自动生成字幕，再裁剪出需要的字幕，即可完成对视频的编辑工作。值得一提的是，工具的作者李沐是亚马逊资深科学家，同时也是一名B站Up主，会在自己的频道中带大家一起学习AI知识。

---
### Sapling｜Meta 大规模代码管理方案
[https://engineering.fb.com/2022/11/15/open-source/sapling-source-control-scalable](https://engineering.fb.com/2022/11/15/open-source/sapling-source-control-scalable)

Meta经常提到公司内部使用的并不是Git，而是自行开发的一套代码版本控制系统，以解决超大型代码仓库的协作问题。近期他们将这个名为Sapling的系统开源出来。从项目首页中可以看到，Sapling也可以与Git项目搭配使用，并且也提供了一套易于使用的UI，可以快速完成常用的代码分支管理工作。

---
### Greptime｜分布式时序数据库
[https://github.com/GreptimeTeam/greptimedb](https://github.com/GreptimeTeam/greptimedb)

Greptime是一个分布式时序数据库，并且以开源的形式对外发布。在物联网等许多场景中，时序数据的规模正变得越来越大，对时序数据库的扩展性要求也在持续增强。在博客中，Greptime介绍了他们通过存算分离，各组件可独立扩展等方式，提升了系统的吞吐能力，从而应对超大规模时序数据的挑战。近年来，开源数据库的创业热度持续增强，我们可以一同关注哪些厂商能够经受市场的考验，最终脱颖而出。

---
### COZO｜事务型关系嵌入式数据库
[https://github.com/cozodb/cozo](https://github.com/cozodb/cozo)

Cozo是一个通用的受型关系嵌入式数据库，有趣之处在于它使用Datadog作为查询语言，专注于图数据和算法。使用Datadog令Cozo可以在查询时实现递归查询，表达更复杂的图运算，以及使用丰富的内置函数和聚合方法。在特定的分析场景下，可能有不错的表现。

---
### Mathics｜Mathematica 开源替代品
[https://mathics.org/](https://mathics.org/)

Mathics是一个开源的Mathematica替代品。Mathematica是非常常用的计算机计算系统，广泛应用于数学，统计，数据处理等领域。Mathics则基于Python构建并且开源，实现了与Mathematica兼容的语法和函数，使对Mathematica熟悉的用户可以快速切换到Mathics中。Mathics也采用了模块化的设计，使其易于被集成到其他软件系统中。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。


