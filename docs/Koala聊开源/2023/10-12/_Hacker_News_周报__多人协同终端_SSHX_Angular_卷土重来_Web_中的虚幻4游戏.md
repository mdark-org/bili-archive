---
title: "[Hacker News 周报] 多人协同终端 SSHX；Angular 卷土重来；Web 中的虚幻4游戏"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/676"
tags: []
date: 1699760019
bvid: BV1Lu4y1N7Tq
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第 676 期 Hacker News 周报。

---
### SSHX｜基于 Web 的终端共享工具
https://sshx.io/

SSHX tensions 是一个基于 Web 的终端共享工具。用户在一个终端中启动 SSHX tension 之后，将生成一个链接，其他用户可以通过该链接加入查看和操作实时的共享终端。不同用户可以通过光标操作不同的位置，也可以通过内置的聊天功能沟通。它适用于调试协作、编程演示、教学等多种场景，是一个非常酷的开源项目。除了强大的功能之外，在安全性上 SSHX tensions 也做了很多考量，例如通过 WebRTC 传输数据，并在过程中进行加密。

---
### Pagefind｜专为大型静态网站设计的静态搜索库
https://pagefind.app/

Pagefind 是一个专为大型静态网站设计的静态搜索库。这里实现的一大问题是，当检索的内容变多时，产生的静态文件体积会变得很大，进而对页面加载的速度产生影响。而 Pagefind 的设计专注于减少带宽消耗，可以根据页面拆分静态索引文件，即使在 10 万级页面场景下，仍然保持较快的加载速度。同时 Pagefind 还提供了搜索 UI 组件，可以快速集成到各类文档网站中。还可以通过 NodeJS 插件的形式对 PDF JSON 等其他格式的内容创建索引。

---
### tailspin｜ 基于 Rust 开发的日志查看工具
https://github.com/bensadeh/tailspin

Tailspin 是一个基于 Rust 的开发的日志查看工具，以 CLI 的形式工作，与常规的日志查看指令相比，Tailspin 支持监控整个日志文件夹，自动高亮时间、数字、IP、UUID 等内容，以及灵活的搜索过滤能力。它也可以和其他命令管道组合使用，例如结合 Compose Tail Logs 提取 KPS 中的 Pod 日志。

---
### Moveable｜实现复杂交互的 JS 库
https://github.com/daybrush/moveable

在一些编辑器场景中，拖拽操作元素，进行缩放、变形、捏合等操作是常见的需求，但要实现起来却并不容易。Moveable 是一个将这些功能完整实现的 JS 库，其灵活的 API 设计和多框架支持，也有助于降低集成成本，对主流浏览器和移动端也有不错的支持。如果你想开发图像编辑、CI 设计软件、思维导图等这类产品功能，也可以考虑使用它加速你的开发。

---
### Bulletpapers｜为 ArXiv 上的论文基于 AI 进行总结
https://www.bulletpapers.ai/

在 Anthropic 最近举办的 Hackson 活动上，获奖的是一个名为 Bullet Papers 的项目。该项目会为 Archive 上的论文基于 AI 进行总结，使得读者可以快速浏览论文的关键细节和整体思路。目前在网站上已经有 300 余篇论文的概述，同时为了增强趣味性，它还为每篇论文生成了一幅 AI 绘制的封面图。

---
### Angular 发布 v17 版本和全新官网
https://angular.dev/

在被认为日渐式微之后，Angular 框架发布了自己的 V17 版本，并且发布了全新的官网。尽管 Angular 的讨论度逐渐落后于 React 和 Vue，但还拥有大量的存量用户。本次版本更新结合重新设计的官网，目标是给开发者耳目一新的感觉，并且可以在交互式的文档中快速学习新版 Angular 的用法。

---
### 轻松一刻时间｜用 WebAssembly 基于虚幻 4 引擎开发的游戏
https://play.spacelancers.com/

最后是轻松一刻时间，一位开发者分享了自己基于虚幻四引擎开发的游戏，该游戏的特殊之处是通过 WebAssembly 技术，使得用户可以在浏览器中体验该游戏。从画面风格和游戏细节来看，确实达到了虚幻四引擎应有的水平。需要注意的是，打开该网站需要加载超过 300MB 的 WebAssembly 文件，在网络条件允许的情况下，小伙伴们也可以尝试一下。

---

以上就是本期 Hacker News 周报摘要，谢谢你们的收看。


