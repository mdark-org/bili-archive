---
title: "[Hacker News 周报] react-native 开发工具链；高质量 K8s Python 客户端；PostgreSQL 发布 16 版本"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/669"
tags: []
date: 1694938290
bvid: BV1p34y1P7Mc
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看第669期Hacker News周报。

---

### Expo｜react-native 开发工具链
https://expo.dev/
提起React Native开发跨端应用仍然是目前不错的选择，对于刚接触React Native开发者则可以考虑使用Expo提升你的开发体验。Expo是一套帮助开发者构建跨平台React Native应用的开源工具链，它提供的强大的开发体验，可以在应用中或浏览器里实时预览代码变更，以及一个功能丰富的SDK，封装了常用的移动端原生能力。Expo也提供名为EAS的云服务，可以在线构建应用代码，并一件发布到安卓和iOS的应用商店中。

---

### kr8s｜高质量的 Python K8s 客户端
https://github.com/kr8s-org/kr8s
KR8S是一个简单易扩展的Python K8S客户端，与K8S官方基于API schema自动生成的SDK相比，KR8S的体验和Kubectl更为接近，使熟悉Kubectl的开发人员更易于上手。通过合理的默认值设置，KR8S也可以减少应用代码的编写复杂度，客户端中还内置了缓存机制，优化了与K8S API的交互性能。从官网示例中可以看到，对于创建Pod、扩容deployment等常用操作，KR8S的代码确实简洁易读。

---

### Unit｜ Nginx 开发的 Web 应用服务器
https://github.com/nginx/unit/
Nginx Unit是一个由Nginx公司开发的Web应用服务器，与常规的Nginx服务器相比，Unit集成了高性能和高稳定性的特点，但还提供了更多面向应用的功能。Unit支持在不停止服务的情况下变更配置，同时还可以运行Python、PHP、Ruby等多种语言的应用程序。只需在一个JSON配置文件中描述路由参数等信息，即可完成多个不同语言应用程序的集成。在使用场景上，Unit可以减少应用栈的那些组件，从而使得应用更加轻量级，适应云原生和容器化的趋势。

---

### tldraw｜精致灵活的开源白板工具
https://github.com/tldraw/tldraw
TLDraw是一个精致灵活的开源白板工具，近期其发布的2.0版本带来多点触控和虚拟化滚动等重要功能。另外，渲染性能也得到大幅提升，特别是在移动设备上。与Excalidraw等产品相比，TLDraw更易于被集成到已有应用中，同时基于特定的渲染算法，TLDraw中绘制的线条更接近自然的手绘风格。

---

### starry night｜开源代码语法高亮库
https://github.com/wooorm/starry-night
Starry Night是一个开源的代码语法高亮库，它支持约600多种编程语言，定位是与Github Syntax Highlighting功能一致的开源实现。除了直接输出包含高亮样式的HTML之外，Starry Night也支持输出AST语法树结构，适用于更加灵活的应用场景。与Shiki等同类工具相比，Starry Night更专注于和Github的模式保持一致，并且希望支持更多种类的语言。

---

### PostgreSQL 发布了 16 版本
https://www.postgresql.org/about/news/postgresql-16-released-2715
PostgreSQL 最新发布了16版本，这是一个重要的功能更新，新版本在并行查询方面带来多项显著优化，特别是对聚合查询的改进，批量数据加载的性能也有提升。另一方面，这一版本的逻辑复制开始支持双向复制，原本的单向复制是PostgreSQL最主流的一些多读的高可能方案，而支持双向复制之后，许多开发者开始实验多写多读的方案。PostgreSQL 16还改进了用于监控和分析性能的统计信息，比如新增的pgstat IO可以提供关键的IO指标。

---

### Trickle｜一款基于 AI 的图片信息管理软件
https://www.trickle.so/
Trickle是一款基于AI的图片信息管理软件，使用GPT模型来分析图片内容并生成简介，用户可以在浏览任何内容时，将其中一部分屏幕截图发送到Trickle，然后接收到每张图片的文本摘要，并保存在Trickle的用户个人知识库中。当需要搜索某些信息时，Trickle既可以返回与关键字匹配的图片和摘要，也可以基于搜索结果直接做出汇总回答。

---

### Vercel 发布 AI 功能 v0.dev
https://twitter.com/vercel/status/1702351846445080953
本周Vercel发布了AI功能V0 Dev，V0 Dev是一个Text to UI工具，通过输入提示语自动生成Web UI代码。与之前已经见过的同类工具和demo相比，虽然V0 Dev还处于Private Alpha阶段，但其产品化程度更高，包含了生成UI版本管理，生成代码优化，在线预览等能力。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。


