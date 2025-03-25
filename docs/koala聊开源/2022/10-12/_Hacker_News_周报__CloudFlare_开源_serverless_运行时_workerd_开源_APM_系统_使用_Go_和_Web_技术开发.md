---
title: "[Hacker News 周报] CloudFlare 开源 serverless 运行时 workerd；开源 APM 系统；使用 Go 和 Web 技术开发"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/622"
tags: []
date: 1664766366
bvid: BV1td4y1B7Y1
---


了解科技资讯，把握行业脉搏。大家好，我是 Koala 了。欢迎收看第 622 期 Hacker News 周报。

---


### SigNoz｜开源的 APM 系统
https://github.com/SigNoz/signoz

Signals 是一个开源的 APM 系统，可以用以监控应用异常并进一步定位。Signals 的目标是成为 Data Dog、New Relic 等知名监控服务的开源替代品。技术方面，Signals 支持各类能够适配 Open Telemetry 标准的语言和应用，使用 Typescript 和 Go 开发前后端。不论是想自建 APM 系统，还是学习相关的实现，都可以关注这个项目。

---

### Wails｜使用 Go 和 Web 技术开发桌面端应用

https://wails.io/

如果你想用 Go 和 Web 技术开发桌面端应用，那么 Wales 是一个值得关注的项目。Wales 通过 Web Kit 运行前端窗口，使开发者可以使用任意 Web 前端技术开发界面，同时 Wales 在前端程序中植入 Go Binding 代码，使得前端程序可以远程调用 Go 代码，进一步拓展应用的后端功能。

---

### CloudFlare 开源 serverless 运行时 workerd

https://github.com/cloudflare/workerd

CloudFlare 近期开源了其 Serverless 服务 CloudFlare workers 的运行时 WorkerD。WorkerD 可以用以部署 serverless 负载，本地开发测试等。作为领先的 serverless 服务的核心组件，WorkerD 的开源对同业人员很有参考价值。不过 CloudFlare workers 的技术负责人也在宣布其开源的博客中介绍了，与生产可用版本相比，WorkerD 并不包含沙箱隔离等功能，相应的能力在 CloudFlare 内部是通过各类复杂的环境配置完成的，不具备可移植性。

---

### Qwik｜builder.io 开源的前端框架

https://qwik.builder.io/

Quick 是由创业公司 builder.io 开源的前端框架，定位于帮助开发者构建高性能的 Web 界面，避免现代前端框架因引入大量 JS 代码所产生的性能负担。Quick 开源团队由前端框架 Angularjs、Go Web 框架 Gin、前端跨端框架 Ionic 等知名项目的创建者共同组建，相信他们在性能优化方面的丰富经验，可以在 Quick 项目中带来新的思路。

---

### pdfgrep｜命令行搜索工具

https://pdfgrep.org/

PDF 由于格式特殊，常规的搜索方式往往对其无效。PDF grab 是一个命令行搜索工具，它与 grab 的使用方式相类似，但可以对 PDF 文件进行搜索。

---
### Liqe｜轻量级搜索引擎

https://github.com/gajus/liqe

Liqe 是一个基于 Typescript 开发的轻量级搜索引擎，可以在 Nodejs 和浏览器中使用，一路塞相类似的语法搜索 Jason 数据。对于需要在客户端中搜索少量数据的场景比较使用。

---

### Google 计划关停云游戏服务 Stadia

https://www.theverge.com/2022/9/29/23378713/google-stadia-shutting-down-game-streaming-january-2023

最后是本周一则新闻，Google 计划关停他的云游戏服务 Stadia。作为在过去几年中备受关注的云游戏实践者，Stadia 的这一决策让外界更加不看好云游戏技术的未来，也有游戏工作室抱怨其作品为适配 Stadia 所投入的时间付诸东流。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

