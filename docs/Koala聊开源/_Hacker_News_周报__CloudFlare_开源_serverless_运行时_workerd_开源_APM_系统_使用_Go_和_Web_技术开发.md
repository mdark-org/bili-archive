---
title: "[Hacker News 周报] CloudFlare 开源 serverless 运行时 workerd；开源 APM 系统；使用 Go 和 Web 技术开发"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/622"
tags: []
date: 1664766366
bvid: BV1td4y1B7Y1
---
了解科技资讯，把握行业脉搏。大家好，我是Koala，欢迎收看第622期Hacker News周报。

### SigNoz｜开源的 APM 系统 [https://github.com/SigNoz/signoz](https://github.com/SigNoz/signoz)

SigNoz是一个开源的APM系统，可以用以监控应用异常并进一步定位。SigNoz的目标是成为DataDog、New Relic等知名监控服务的开源替代品。技术方面，SigNoz支持各类能够适配OpenTelemetry标准的语言和应用，使用Typescript和Go开发前后端。不论是想自建APM系统，还是学习相关的实现，都可以关注这个项目。

---

### Wails｜使用 Go 和 Web 技术开发桌面端应用 [https://wails.io/](https://wails.io/)

如果你想用Go和Web技术开发桌面端应用，那么Wails是一个值得关注的项目。Wails通过Webkit运行前端窗口，使开发者可以使用任意Web前端技术开发界面，同时Wails在前端程序中植入Go binding代码，使得前端程序可以远程调用Go代码，进一步拓展应用的后端功能。

---

### CloudFlare 开源 serverless 运行时 workerd [https://github.com/cloudflare/workerd](https://github.com/cloudflare/workerd)

CloudFlare近期开源了其serverless服务CloudFlare Workers的运行时workerd。workerd可以用以部署serverless负载，本地开发测试等。作为领先的serverless服务的核心组件，workerd的开源对同业人员很有参考价值。不过CloudFlare Workers的技术负责人，也在宣布其开源的博客中介绍了，与生产可用版本相比，workerd并不包含沙箱隔离等功能，相应的能力在CloudFlare内部是通过各类复杂的环境配置完成的，不具备可移植性。

---

### Qwik｜builder.io 开源的前端框架 [https://qwik.builder.io/](https://qwik.builder.io/)

Qwik是由创业公司builder.io开源的前端框架，定位于帮助开发者构建高性能的Web界面，避免现代前端框架因引入大量JS代码所产生的性能负担。Qwik开源团队由前端框架AngularJS、Go Web框架Gin、前端跨端框架Ionic等知名项目的创建者共同组建，相信他们在性能优化方面的丰富经验，可以在Qwik项目中带来新的思路。

---

### pdfgrep｜命令行搜索工具 [https://pdfgrep.org/](https://pdfgrep.org/)

PDF由于格式特殊，常规的搜索方式往往对其无效。pdfgrep是一个命令行搜索工具，它与grep的使用方式相类似，但可以对PDF文件进行搜索。

---

### Liqe｜轻量级搜索引擎 [https://github.com/gajus/liqe](https://github.com/gajus/liqe)

Liqe是一个基于Typescript开发的轻量级搜索引擎，可以在Node.js和浏览器中使用，以Lucene相类似的语法，搜索JSON数据。对于需要在客户端中搜索少量数据的场景比较适用。

---

### Google 计划关停云游戏服务 Stadia [https://www.theverge.com/2022/9/29/23378713/google-stadia-shutting-down-game-streaming-january-2023](https://www.theverge.com/2022/9/29/23378713/google-stadia-shutting-down-game-streaming-january-2023)

最后是本周一则新闻，Google计划关停它的云游戏服务Stadia。作为在过去几年中备受关注的云游戏实践者，Stadia的这一决策让外界更加不看好云游戏技术的未来，也有游戏工作室抱怨其作品为适配Stadia所投入的时间付之东流。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。


