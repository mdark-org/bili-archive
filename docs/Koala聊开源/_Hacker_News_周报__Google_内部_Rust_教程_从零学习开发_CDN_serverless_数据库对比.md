---
title: "[Hacker News 周报] Google 内部 Rust 教程；从零学习开发 CDN；serverless 数据库对比"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/632"
tags: []
date: 1672546628
bvid: BV1pM411y72o
---
了解科技资讯、把握行业脉搏。大家好，我是 Koala，欢迎收看第 632A 期，也是 2023 年第一期 Hacker News 周报。

### APITable｜新开源的 Airtable 替代品
[https://github.com/apitable/apitable](https://github.com/apitable/apitable)

自 Airtable 流行之后，也出现过一些参考其思路的开源产品与之竞争。APITable 就是一个新开源的 Airtable 替代品，同样支持实时协同，基于数据自动生成表格和 API 集成等功能，并且其前端可以嵌入已有的应用中。不过该项目目前还处于开发阶段，预计 2023 年将发布第一个正式版本。

---

### CDN Up and Running｜从零学习开发 CDN
[https://github.com/leandromoreira/cdn-up-and-running](https://github.com/leandromoreira/cdn-up-and-running)

CDN 是常用的基础设施之一，但你是否想过 CDN 背后的实现是什么样的？CDN Up and Running 是一个教你如何从零构建 CDN 的教程类项目。该项目基于 Nginx 和 Lua 脚本开发了一个简易的 CDN 服务，并使用 Prometheus、Grafana 监控服务性能。当然在项目介绍的结尾处，作者也提到许多生产级别的 CDN 必备的功能，并没有在代码中实现，但这并不影响读者对 CDN 建立起基本的了解。

---

### Comprehensive Rust｜Google 内部 Rust 教程
[https://github.com/google/comprehensive-rust](https://github.com/google/comprehensive-rust)

一直以来，Rust 编程语言多以上手难度较高著称。近期 Google 的安卓团队发布了他们内部使用的 Rust 教程 Comprehensive Rust。与官方教程相比，其内容更加简洁。通过为期四天的介绍和练习，可以使有编程基础的读者快速上手 Rust。如果你曾经有过对 Rust 从入门到放弃的经历，这一次会打算通过这个教程再学一遍吗？

---

### OSV-Scanner｜查找代码依赖中的安全漏洞
[https://github.com/google/osv-scanner](https://github.com/google/osv-scanner)

在安全越来越重要的今天，在自己的代码依赖中查找已知的漏洞是常见的安全需求。通常这样的能力需要借助商业化的安全产品完成，而 Google 发布的 OSV-Scanner 有望降低这一工作的门槛。OSV-Scanner 集成了 OSV 在发布的漏洞数据，并支持对多种语言的依赖文件进行扫描。对于希望自建漏洞扫描工具的用户可以一试。

---

### Hubble｜Github star 管理工具
[https://hubble.monsterx.xyz/](https://hubble.monsterx.xyz/)

每一天 Github 中都在发布着大量新奇有趣的项目，给感兴趣的项目一个 star 是大家在开源世界遨游的行为方式之一。Hubble 是一个帮助你管理 Github star 的项目。在 Hubble 的帮助下，你可以对过往 star 过的项目添加标签和注释，方便事后查找。

---

### 一篇 serverless 数据库对比的博客
[https://fauna.com/blog/comparison-of-serverless-databases](https://fauna.com/blog/comparison-of-serverless-databases)

2022 年许多数据库都开始强调 serverless 场景下的应用。数据库厂商 Fauna 就通过一篇博客对比了包括自己和 MongoDB、DynamoDB、CockroachDB 在内的若干数据库在 serverless 场景下的表现。尽管文章有推销自己的倾向，但从中我们也可以了解到 serverless 数据库的一些基本概念以及考量因素。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


