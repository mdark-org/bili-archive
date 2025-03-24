---
title: "[Hacker News 周报]  Astro 3.0 发布；告警管理与自动化平台；本地 AI 助手"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/668"
tags: []
date: 1694321781
bvid: BV17p4y1j7Ra
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第 668 期 HackerNews 周报。

---

### Open Interpreter｜本地 AI 助手
[https://github.com/KillianLucas/open-interpreter](https://github.com/KillianLucas/open-interpreter)

Open Interpreter 是一个基于 GPT-4 code interpreter 功能实现的本地自动化工具。与 ChatGPT 中集成的 code interpreter 相比，Open Interpreter 可以避免如无法访问互联网、上传文件大小限制、代码运行时能力有限等问题，充分发挥本地环境的能力。Demo 视频中演示了代码开发、发送邮件、读取日记、总结文档等一系列任务，显示出了不错的潜力。目前该项目以 CLI 的形式提供，但在官网上也透露了开发桌面应用的计划。

---

### chartbrew｜ 开源数据可视化 Web 应用
[https://github.com/chartbrew/chartbrew](https://github.com/chartbrew/chartbrew)

Chartbrew 是一款开源的数据可视化 Web 应用，内置了多种数据库和云服务的集成，目标是让用户可以在一个统一的应用中查看所有的数据指标，也能够基于数据配置邮件和 Slack 等告警通知渠道。与同类工具相比，Chartbrew 更加强调基于数据自定义报表，并嵌入至其他应用进行分享的能力。同时对于自定义的报表，可以充分定制样式，这让 Chartbrew 的应用场景十分丰富。

---

### RecipeUI 团队开发提升 API 开发体验的同名工具
[https://github.com/RecipeUI/RecipeUI](https://github.com/RecipeUI/RecipeUI)

经过对 Postman Insomnia 等 API 开发工具的重新思考，RecipeUI 的团队开发了他们认为能够进一步提升 API 开发体验的同名工具。RecipeUI 与已有工具最大的区别是，它希望充分发挥类型安全这一特性。所有的 API 参数都可以基于 Typescript 定义其类型，使得 API 开发调试的过程可以获得类型检查、自动补全等能力。该工具本身也基于流行的 Web 框架与部署方案进行开发，对于想要学习开发 Web 研发工具类产品的读者，可以参考其技术选型。

---

### Keep｜告警管理与自动化平台
[https://github.com/keephq/keep](https://github.com/keephq/keep)

对于运维团队来说，告警是日常工作中最关注的内容之一。Keep 是一个开源的告警管理与自动化平台，目标是提升运维团队的效率，并且减少告警带来的疲劳度。Keep 能够对接各类主流的告警发出端，汇集至集中的面板中，内置告警去重和告警关联功能，最大程度减少处理告警的负担。通过工作流的方式可以编排告警发生后的后续处理方式，并且所有的告警管理与自动化流程都能通过 API 与已有工具集成。

---

### Ddosify｜开源可观测性项目
[https://github.com/ddosify/alaz](https://github.com/ddosify/alaz)

Ddosify 是一个开源的可观测性项目，主要提供 K8s 集群监控和性能测试工具。近期他们将基于 eBPF 的 K8s 监控工具 Alaz 独立开源。得益于 eBPF 的能力，该工具无需侵入代码，设置 sidecar 或重启服务即可生效。Alaz 可识别高延迟、异常 HTTP 错误码、僵尸服务等常见的异常信号，并上报至云端或自部署的 Ddosify 可观测性平台中。

---

### textual 发布实验性项目 textual-web
[https://github.com/Textualize/textual-web](https://github.com/Textualize/textual-web)

本周流行的 TUI 框架 textual 又发布了新的实验性项目 textual-web。该项目可以将一个基于 textual 开发的 TUI 程序转化为 Web 应用，在浏览器中运行。

CLI 作为一种特殊的 UI 一直深受开发者的喜爱，但只能运行在本地，使其适用场景十分有限。textual-web 项目让大家对于基于 Web 增发 CLI 程序有了新的想象空间。

---

### Web 框架 Astro 发布了 3.0 版本
[https://astro.build/blog/astro-3/](https://astro.build/blog/astro-3/)

Web 框架 Astro 发布了 3.0 版本，除了渲染性能提升、Serverless 场景 SSR 重启、优化构建产物之外，最核心的功能当属对 View Transitions API 的增强。

对于 Astro 等以后端渲染为主的 Web 框架来说，与 SPA 单页应用相比，最大的弱项是试图切换时的加载体验。随着最新浏览器开始支持 View Transitions API，这一弱项将不复存在。在 Astro 3.0 的 Demo 中可以看到，基于这一 API 试图加载与 SPA 体验基本无差异。

---

### Watlings｜用来学习 WebAssembly 的项目
[https://github.com/EmNudge/watlings](https://github.com/EmNudge/watlings)

开发一些简单的小程序是学习一种新语言的好方法。受到设计中深受喜爱的 Rustlings 等项目启发，Watlings 的作者开发了这个用来学习 WebAssembly 的项目。通过开发一组练习程序，可以对 WebAssembly 文本格式加深理解。这对于一些希望深入参与 WebAssembly 生态的开发者来说会有所帮助，练习中的注释讲解也可以在遇到困难时起到帮助作用。

---

以上就是本期 HackerNews 周报摘要，谢谢你们的收看。


