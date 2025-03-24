---
title: "[Hacker News 周报] 做一面智能魔镜；ChatGPT 支持语音和图像；Rust 原生 serverless 服务"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/672"
tags: []
date: 1696740065
bvid: BV1fH4y1d74T
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第672期 Hacker News 周报。

---
### shuttle｜ 面向 Rust 的 serverless 云服务
[https://www.shuttle.rs/](https://www.shuttle.rs/)

Shuttle 是一个专门面向 Rust 的 serverless 云服务，用户无需编写任何技术设施文件，即可构建并发布后端。Shuttle 服务会自动基于代码中的函数签名与注释，理解该代码运行所需要的基础设施，并完成配置工作。与许多已有的 serverless 相比，Shuttle 仅能支持 Rust 一种开发语言，且被部署在较为单一的数据中心里，在生产可用性方面并不突出。但专注于 Rust 的设计，相信也能带来一定的受众，即使不使用其云服务，研究对应的代码设计与实现也有一定的价值。

---
### MagicMirror2｜开源魔镜开发方案
[https://magicmirror.builders/](https://magicmirror.builders/)

魔镜魔镜告诉我怎样才能做出你？Magic Mirror 2 是一个开源的魔镜开发方案。所谓魔镜是指通过显示器、双向镜、树莓派等硬件，组成一面镜子，通过编程的方式在镜面中显示丰富的内容。例如开发者可以将天气、今日新闻、空气指数放在镜面中，早上起床时即可知道相关的信息，还可以基于人脸识别模块、语音对话模块和镜子交互。

---
### Tailwind Elements｜基于 Tailwind CSS 开发的可复用组件
[https://tailwind-elements.com/](https://tailwind-elements.com/)

Tailwind CSS 方案有了相当数量的受众，但在享受快速编写样式的便利性的同时，不易在组件间复用代码也是一大痛点。Tailwind Elements 就是一组基于 Tailwind CSS 开发的可复用组件。该项目以经典的 Bootstrap 组件库为参考，使用 Tailwind CSS 加以实现，并优化了视觉设计以及提供了更多的功能。目前组件库中已有超过500个组件，支持与各类前后端框架集成。

---
### nomnoml｜ 一个基于简单语法绘制 UML 图的工具
[https://nomnoml.com/](https://nomnoml.com/)

Nomnoml 是一个基于简单语法绘制 UML 图的工具。在它的网站上，可以通过编辑左侧的语法代码，观察图表的变化。其渲染结果与已有的 UML 工具相比也更加美观简洁，是新手使用 UML 的一个不错选择。

---
### store.app｜基于 PWA 实现的各类网站合集
[https://store.app/](https://store.app/)

基于 PWA 技术，许多网站可以被添加到桌面，带来接近原生应用的体验，而无需让用户下载大体积的应用安装包。Store App 是一个收集各类支持 PWA 网站的应用程序市场。用户可以在市场中找到 AI、游戏、生产力工具等各类软件，而这些软件均是基于 PWA 技术实现。值得一提的是，我们本周已经上线试运行的考拉 App 网页版也使用了该技术，小伙伴们可以尝试尝试。

---
### ChatGPT 推出了新的语音和图像功能
[https://openai.com/blog/chatgpt-can-now-see-hear-and-speak](https://openai.com/blog/chatgpt-can-now-see-hear-and-speak)

本周 ChatGPT 再次升级，推出了新的语音和图像功能。用户可以输入语音和图片内容与 ChatGPT 进行对话。从目前的案例演示看，语音功能较为实用，图片输入则依赖 ChatGPT 的图像识别能力。对于特定类型的图片内容识别较好，但复杂的图像识别还无法与专用的图像识别模型相比。

---
### 一篇交互式介绍 CRDT 的博客
[https://jakelazaroff.com/words/an-interactive-intro-to-crdts](https://jakelazaroff.com/words/an-interactive-intro-to-crdts)

最后分享一篇博客。作为近年来备受关注的协同算法，许多人常常听说 CRDT，但实际学习起来却发现无从下手。本篇博客是一个交互式的 CRDT 数据结构介绍。除了理论介绍和代码示例外，文章中嵌入的交互式页面可以模仿断网、延迟等场景下，多个客户端进行数据协同的过程，从而更好的理解 CRDT 是如何工作的。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


