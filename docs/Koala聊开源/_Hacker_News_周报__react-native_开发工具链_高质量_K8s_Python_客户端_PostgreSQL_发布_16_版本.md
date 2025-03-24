---
title: "[Hacker News 周报] react-native 开发工具链；高质量 K8s Python 客户端；PostgreSQL 发布 16 版本"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/669"
tags: []
date: 1694938290
bvid: BV1p34y1P7Mc
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第669期 Hacker News 周报。

---

### Expo｜react-native 开发工具链
[https://expo.dev/](https://expo.dev/)

既然 React Native 开发跨端应用，仍然是目前不错的选择，对于刚接触 React Native 开发者则可以考虑使用 Expo 提升你的开发体验。Expo 是一套帮助开发者构建跨平台 React Native 应用的开源工具链，它提供了强大的开发体验，可以在应用中或浏览器里实时预览代码变更，以及一个功能丰富的 SDK，封装了常用的移动端原生能力。Expo 也提供名为 EAS 的云服务，可以在线构建应用代码，并一件发布到安卓和 iOS 的应用商店中。

---

### kr8s｜高质量的 Python K8s 客户端
[https://github.com/kr8s-org/kr8s](https://github.com/kr8s-org/kr8s)

kr8s 是一个简单易扩展的 Python K8s 客户端，与 K8s 官方基于 API schema 自动生成的 SDK 相比，kr8s 的体验和 Cooper Cito 更为接近，使熟悉 Cooper Cito 的开发人员更易于上手。通过合理的默认值设置，kr8s 也可以减少应用代码的编写复杂程度，客户端中还内置了缓存机制，优化了与 K8s API 的交互性能。从官网示例中可以看到，对于创建 Pod、扩容 Deployment 等常用操作，kr8s 的代码确实简洁易读。

---

### Unit｜ Nginx 开发的 Web 应用服务器
[https://github.com/nginx/unit/](https://github.com/nginx/unit/)

Nginx Unit 是一个由 Nginx 公司开发的 Web 应用服务器，与常规的 Nginx 服务器相比，Unit 继承了高性能和高稳定性的特点，但还提供了更多面向应用的功能。Unit 支持在不停止服务的情况下变更配置，同时还可以运行 Python、PHP、Ruby 等多种语言的应用程序，只需在一个 JSON 配置文件中描述路由、参数等信息，即可完成多个不同语言应用程序的集成。在使用场景上，Unit 可以减少应用栈中那些组件，从而使得应用更加轻量级，适应云原生和容器化的趋势。

---

### tldraw｜精致灵活的开源白板工具
[https://github.com/tldraw/tldraw](https://github.com/tldraw/tldraw)

TLDraw 是一个精致灵活的开源白板工具，近期其发布的 2.0 版本带来多点触控和虚拟化滚动等重要功能，另外渲染性能也得到大幅提升，特别是在移动设备上。与 Excalidraw 等产品相比，TLDraw 更易于被集成到已有应用中，同时基于特定的渲染算法，TLDraw 中绘制的线条更接近自然的手绘风格。

---

### starry night｜开源代码语法高亮库
[https://github.com/wooorm/starry-night](https://github.com/wooorm/starry-night)

Starry Night 是一个开源的代码语法高亮库，它支持约600多种编程语言，定位是与 GitHub Syntax Highlighting 功能一致的开源实现。除了直接输出包含高亮样式的 HTML 之外，Starry Night 也支持输出 AST 语法树结构，适用于更加灵活的应用场景。与 City 等同类工具相比，Starry Night 更专注于和 GitHub 的模式保持一致，并且希望支持更多种类的语言。

---

### PostgreSQL 发布了 16 版本
[https://www.postgresql.org/about/news/postgresql-16-released-2715](https://www.postgresql.org/about/news/postgresql-16-released-2715)

PostgreSQL 最新发布了 16 版本，这是一个重要的功能更新，新版本在并行查询方面带来多项显著优化，特别是对聚合查询的改进，批量数据加载的性能也有提升。另一方面，这一版本的逻辑复制开始支持双向复制，原本的单向复制是 PostgreSQL 最主流的一些多读的高可能方案，而这次双向复制之后，许多开发者开始实验多写多读的方案。PostgreSQL 16 还改进了应用监控和分析性能的统计信息，比如新增的 PG Stat IO 可以提供关键的 IO 指标。

---

### Trickle｜一款基于 AI 的图片信息管理软件
[https://www.trickle.so/](https://www.trickle.so/)

Trickle 是一款基于 AI 的图片信息管理软件，使用 GPT 模型来分析图片内容并生成简介，用户可以在浏览任何内容时，将其中一部分屏幕截图发送到 Trickle，然后接收到每张图片的文本摘要，并保存在 Trickle 的用户个人知识库中。当需要搜索某些信息时，Trickle 既可以返回与关键词匹配的图片和摘要，也可以基于搜索结果直接做出汇总回答。

---

### Vercel 发布 AI 功能 v0.dev
[https://twitter.com/vercel/status/1702351846445080953](https://twitter.com/vercel/status/1702351846445080953)

本周 Vercel 发布了 AI 功能 V0 Dev，V0 Dev 是一个 Text for UI 工具，通过输入提示语自动生成 Web UI 代码，与之前已经见过的同类工具和代码相比，虽然 V0 Dev 还处于 Private Alpha 阶段，但其产品化程度更高，包含了生成 UI 版本管理、生成代码优化、在线预览等能力。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


