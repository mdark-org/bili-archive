---
title: "[Hacker News 周报]  Astro 3.0 发布；告警管理与自动化平台；本地 AI 助手"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/668"
tags: []
date: 1694321781
bvid: BV17p4y1j7Ra
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第668期Hacker News周报。

---

### Open Interpreter｜本地AI助手
https://github.com/KillianLucas/open-interpreter
Open Interpreter是一个基于GPT-4 code interpreter功能实现的本地自动化工具。与ChatGPT中集成的code interpreter相比，Open Interpreter可以避免如无法访问互联网，上传文件大小限制，代码运行时能力有限等问题，充分发挥本地环境的能力。Demo视频中演示了代码开发，发送邮件，读取日记，总结文档等一系列任务，显示出了不错的潜力。目前该项目以CLI的形式提供，但在官网上也透露了开发桌面应用的计划。

---

### chartbrew｜ 开源数据可视化Web应用
https://github.com/chartbrew/chartbrew
Chartbrew是一款开源的数据可视化web应用，内置了多种数据库和云服务的集成。目标是让用户可以在一个统一的应用中查看所有的数据指标，也能够基于数据配置邮件和Slack等告警通知渠道。与同类工具相比，Chartbrew更加强调基于数据自定义报表，并嵌入至其他应用进行分享的能力。同时对于自定义的报表可以充分定制样式，这让Chartbrew的应用场景十分丰富。

---

### RecipeUI 团队开发提升API开发体验的同名工具
https://github.com/RecipeUI/RecipeUI
经过对Postman Insomnia等API开发工具的重新思考，RecipeUI的团队开发了他们认为能够进一步提升API开发体验的同名工具。RecipeUI与已有工具最大的区别是它希望充分发挥类型安全这一特性。所有的API参数都可以基于Typescript定义其类型，使得API开发调试的过程可以获得类型检查，自动补全等能力。该工具本身也基于流行的Web框架与部署方案进行开发，对于想要学习开发Web研发工具类产品的读者，可以参考其技术选型。

---

### Keep｜告警管理与自动化平台
https://github.com/keephq/keep
对于运维团队来说，告警是日常工作中最关注的内容之一。Keep是一个开源的告警管理与自动化平台，目标是提升运维团队的效率，并且减少告警带来的疲劳度。Keep能够对接各类主流的告警发出端，汇总至集中的面板中，内置告警去重和告警关联功能，最大程度减少处理告警的负担。通过工作流的方式可以编排告警发生后的后续处理方式，并且所有的告警管理与自动化流程都能通过API与已有工具集成。

---

### Ddosify｜开源可观测性项目
https://github.com/ddosify/alaz
Ddosify是一个开源的可观测性项目，主要提供K8S集群监控和性能测试工具。近期他们将基于EBPF的K8S监控工具Alaz独立开源。得益于EBPF的能力，该工具无需侵入代码，部署sidecar或重启服务即可生效。Alaz可识别高延迟，异常HTTP错误码，僵尸服务等常见的异常信号，并上报至云端或自部署的Ddosify可观测性平台中。

---

### textual 发布实验性项目 textual-web
https://github.com/Textualize/textual-web
本周流行的TUI框架Textual又发布了新的实验性项目Textual Web。该项目可以将一个基于Textual开发的TUI程序转化为web应用，在浏览器中运行。

CLI作为一种特殊的UI一直深受开发者的喜爱，但只能运行在本地使其适用场景十分有限。Textual Web项目让大家对于基于web分发CLI程序有了新的想象空间。

---

### Web 框架 Astro 发布了 3.0 版本
https://astro.build/blog/astro-3/
Web框架Astro发布了3.0版本，除了渲染性能提升，serverless场景SSR重调度，优化构建产物之外，最核心的功能当属对View Transitions API的增强。

对于Astro等以后端渲染为主的web框架来说，与SPA单页应用相比，最大的弱项是试图切换时的加载体验。随着最新浏览器开始支持View Transitions API，这一弱项将不复存在。在Astro 3.0的demo中可以看到基于这一API，试图加载与SPA体验基本无差异。

---

### Watlings｜用来学习WebAssembly 的项目
https://github.com/EmNudge/watlings
开发一些简单的小程序是学习一种新语言的好方法。受到设计中深受喜爱的Rustlings等项目启发，Watlings的作者开发了这个用来学习WebAssembly的项目。通过开发一组练习程序，可以对WebAssembly文本格式加深理解。这对一些希望深入参与WebAssembly生态的开发者来说会有所帮助，练习中的注释讲解也可以在遇到困难时起到帮助作用。

---

以上就是本期Hacker News周报摘要，谢谢你们的收看。


