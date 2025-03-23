---
title: "科技周报｜ASCII 图表设计工具；让 Claude Desktop 成为编程助手；Rspack/Webpack 构建分析利器"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-738/"
tags: []
date: 1742702274
bvid: BV1vXXhYpEbK
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala，欢迎收看科技周报。

---
### cascii-core | ASCII 图表设计工具
[https://github.com/casparwylie/cascii-core](https://github.com/casparwylie/cascii-core)

ASCII 图表，因为其完全基于文本，易于在终端和代码中使用的特性，一直是极客们的最爱，但是手写一个 ASCII 图表却不容易。Cascii 就是一个绘制 ASCII 图表的利器，它提供了一个基于 Web 的图表编辑器界面，支持各种图形绘制、选择、分组合动态表格等功能，还有撤销重做、主题切换。

高效完成编辑后，即可导出图表文本进行使用。Koala 认为 Cascii 用原生 JavaScript 编写，不依赖任何服务器、打包工具或库，你只需要在浏览器里打开开源仓库中的 Cascii HTML 文件，就能开始画图，或者直接访问 Cascii App 在线版进行使用。在线版本还支持短链接等使用功能。

---
### codemcp | 让 Claude Desktop 成为编程助手
[https://github.com/ezyang/codemcp](https://github.com/ezyang/codemcp)

Anthropic 之前推出的 Claude Code 功能强大，但需要按照 API 用量额外付费，所以因此出现了名为 Code MCP 的开源项目。

通过提供 MCP Server 给 Claude Desktop 桌面客户端，让它直接变身编程助手，使订阅 Claude Pro 的作用最大化，告别高昂的 API 费用。在它的实现中，MCP Server 能帮助你在代码库里实现新功能、修复 Bug，甚至进行重构，并强制使用 Git 进行版本控制，确保所有更改都能回滚。它还以保持与 IDE 结合为目标，可以与各种 IDE 搭配使用。Koala 认为 Code MCP 也是 MCP 的一种典型应用。将复杂业务逻辑与客户端工具结合，使它可以被移植到多数客户端上，而不仅限于代码编辑器或聊天 UI。

---
### Rsdoctor | Rspack/Webpack 构建分析利器
[https://rsdoctor.dev/zh/blog/release/release-note-1_0](https://rsdoctor.dev/zh/blog/release/release-note-1_0)

Rsdoctor 1.0 正式发布，这是一个专为 Rspack 生态系统量身定制的构建分析工具，同时也兼容 Webpack。Rsdoctor 致力于通过可视化和智能分析，让前端构建过程更透明、可预测和可优化，帮助开发团队精准定位瓶颈，提升性能和工程质量。它能深入 loader 的编译细节，内置扫描检测规则，还支持用户自定义规则。Koala 认为从发布博客中的信息来看，Rsdoctor 已经被广泛应用于字节跳动内部，并在 Sentry、Grafana 等大型开源项目中也有使用。如果你的项目也受限于构建性能，可以用 Rsdoctor 进行诊断分析优化的方向。

---
### DiceDB | Go 响应式内存数据库
[https://dicedb.io/](https://dicedb.io/)

DiceDB 是一个开源的 Go 内存数据库，主打的就是速度快和响应式。它针对现代硬件进行了优化，能够充分利用多核 CPU 的性能。DiceDB 的一大亮点是它的响应式特性，你可以订阅查询结果，一旦数据发生变化，DiceDB 会立即推送更新，而不需要你手动轮询。此外，DiceDB 还非常易用，学习成本很低。如果你正在寻找一个高性能、低延迟的内存数据库，不妨试试 DiceDB。它在吞吐量和延迟方面都表现出色，同时资源消耗较低。

---
### Goravel | Go 实现的 Laravel 风格框架
[https://www.goravel.dev/](https://www.goravel.dev/)

Goravel 是一个用 Go 语言开发的 Web 应用框架，它的目标是提供完整的功能和出色的可扩展性，帮助开发者快速构建应用。Go 语言的 Web 框架也有不少，但如果你熟悉 PHP 中的热门框架 Laravel，那么 Goravel 会让你感到非常亲切，因为它在设计上借鉴了 Laravel 的很多理念，降低了 PHP 开发者学习 Go 的门槛。Goravel 提供了配置、路由、认证、ORM、队列、事件等丰富的功能，还支持 gRPC、Artisan Console 等高级特性。Koala 认为 Go 语言及其生态中，部分已有 Web 框架，较唯追求极简的设计风格，但对于一些有其他编程语言转向 Go 的开发者来说，大而全的框架也能显著降低上手难度。Goravel 的出现想必也能更好的推广 Go。

---
### Motion for Vue | Vue 动画库
[https://motion.dev/blog/introducing-motion-for-vue](https://motion.dev/blog/introducing-motion-for-vue)

Motion for Vue 来了。如果你熟悉 React 中的动画库 Motion，那上手它最新发布的 Vue 版本应该非常快。它基于 Vue 的响应式能力，提供了声明式的 API，让你用 Vue 的方式轻松实现各种动画效果，比如悬停、点击时的细腻动画，还有各种炫酷的布局动画。Motion for Vue 完整移植了 React 版本的特性，包括弹簧动画、Motion Values、滚动动画等，也可以驱动复杂的布局动画。

---

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。


