---
title: "[Hacker News 周报] 在线实时编程方案；解析 ChatGPT 如何控制 DALL.E 3；高质量开源地图数据"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/674"
tags: []
date: 1698639598
bvid: BV1Fg4y1R7fE
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala，欢迎收看第 674 期 Hacker News 周报。

---

### Sandpack｜在线实时编程方案
https://sandpack.codesandbox.io/
Sandpack 是在线编程平台 CodeSandbox 推出的开源工具库，可以在外部页面中集成一个支持实时运行的代码编辑器。该项目使用了 CodeSandbox 的强大功能，可在浏览器中运行 JavaScript 和 Node.js 应用，适合用于开发交互式教程和在线编程工具。React 新版文档中的代码示例就是基于该项目实现的。

---

### Protomaps｜高质量开源地图数据
https://protomaps.com/
Protomaps 是一个很酷的开源地图项目，它将地图切片保存为 PMTiles 格式的单个静态文件，可以直接放置在对象存储上对外提供服务。客户端通过 HTTP Range 请求进行切片访问，获取对应的地图数据。Protomaps 的设计使其易于部署在 CDN 上实现低延迟访问，切片访问的形式也大幅度降低了地图托管的成本。项目本身还提供了与 Leaflet、MapLibre GL 等常用前端地图渲染库的集成，非常易用。

---

### ArtistAssistApp｜绘制更逼真颜色的网页应用
https://artistassistapp.com/
Artist Assist App 是一个帮助艺术爱好者绘制更逼真颜色的网页应用。它提供了一些很酷的绘画功能，例如：一，逼真的色彩混合模式，可以从导入的照片中提取颜色，再与颜料混合，此外还支持光学混合，实现类似油彩的效果。二，速写简化，将照片细节简化，使绘画者可以学习如何从高复杂度中提取关键信息。三，提供适合各种级别艺术家的工具，不管你是初学者还是专业人士，都可以找到适合自己的功能。该应用是与专业艺术家 Irina Cast 一起开发的，以确保提供的功能符合艺术家的绘画习惯。

---

### 一篇博客｜解析 ChatGPT 如何控制 DALL.E 3
https://simonwillison.net/2023/Oct/26/add-a-walrus/
DALL·E 3 是当前极为热门的 AI 图像生成模型，它通过 ChatGPT 来进行交互。这篇博客对二者的交互过程进行了逆向工程，发现了一些有趣的细节，例如：一，ChatGPT 分为每个提示生成多个版本，以产生不同风格的图像。二，可以通过调整提示词，让 ChatGPT 生成更多特定样式的图像。三，ChatGPT 对 DALL·E 使用了大量的提示词工程技巧，限制其生成敏感内容。这篇博客中讲解的技巧可以被视为 OpenAI 的官方提示词优化最佳实践，在开发 AI 应用时可以借鉴。

---

### LocalPilot｜本地运行的 GitHub Copilot 替代品
https://github.com/danielgross/localpilot
Local Pilot 是一个本地运行的 GitHub Copilot 替代品。目标是在离线环境下也能提供类似 GitHub Copilot 的体验。该项目作为概念验证的原型产品已经较为完善，但其要求用户在本地运行一个大语言模型，对硬件资源也有很高的要求，实际使用性不高。作者的想法是未来社区应该缩减代码编程这类专用模型的开销，使本地部署更为可行。

---

### Epsio 博文｜介绍如何构建流计算的 SQL 引擎
https://www.epsio.io/blog/how-to-create-a-streaming-sql-engine
Epsio 最近发布了一篇博文，详细介绍了他们如何构建一个流计算的 SQL 引擎。流计算 SQL 引擎可以让查询持续保持最新结果，大幅度减少重新计算所产生的开销。文章通过一个计数人数的简单示例，说明了基本的工作原理，适合快速理解相关技术。同时 Epsio 也将他们的流式引擎开源，方便开发者在其上构建高性能的实时分析系统。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


