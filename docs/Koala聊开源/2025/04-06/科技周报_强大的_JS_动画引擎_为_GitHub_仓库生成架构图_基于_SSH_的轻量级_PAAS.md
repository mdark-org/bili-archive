---
title: "科技周报｜强大的 JS 动画引擎；为 GitHub 仓库生成架构图；基于 SSH 的轻量级 PAAS"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-740/"
tags: []
date: 1743917638
bvid: BV1tYRiYbEt6
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看科技周报。

### Anime.js | 强大的 JS 动画引擎
https://animejs.com/

Anime.js 是一个强大的 JavaScript 动画库，经作者精心打磨多年后，本周发布了最新的 V4 版本。

新版本从官网开始就充分发挥 Anime.js 的功能，制作了精美酷炫的动画，一边展示自身能力，一边讲解了核心功能。Anime.js 提供直观的 API，让你能快速上手。无论是 CSS 变换、SVG 动画、JS 变量动画还是滚动触发，Anime.js 都能搞定。它还内置了缓动函数和 stagger 效果，让你的动画更加生动有趣。

Koala 认为，如果你想为你的网站或应用添加一些吸引眼球的动画，Anime.js 绝对值得关注。而且新版本中库的体积也被控制得很小，不会给你的项目增加太多性能负担。

---

### GitDiagram | 为 GitHub 仓库生成架构图
https://github.com/ahmedkhaleel2004/gitdiagram

想快速了解一个 GitHub 项目的结构吗？试试 GitDiagram。

它可以把任何 GitHub 仓库转换成交互式的架构图，就像看系统设计图一样。点点图里的组件还能直接跳转到对应的源码文件和目录，是不是很方便？它用 Cloud 3.5 Sonnet 快速生成图表，还能自定义修改。

如果你想贡献开源项目，但又觉得代码库太大不好下手，这个工具就能帮你快速上手。而且它还支持私有仓库，对于企业内部分享代码架构十分有用。Koala 认为，这个工具对于快速理解和学习大型项目非常有帮助，不过其实现也依赖于 AI 对代码的理解，可能存在一定的幻觉。

---

### pico.sh | 基于 SSH 的轻量级 PAAS
https://pico.sh/

pico.sh 是一套有趣实用的开发者工具，仅需 SSH 协议，你就可以通过它快速发布静态网站、博客，以及建立隧道把本地服务直接暴露到公网。你还能用它来做代码片段分享和接收 RSS 邮件订阅。

所有操作都通过你已经安装的 SSH 工具完成，无需任何其他额外的安装。Koala 认为，如果你是喜欢用命令行搞定一切的开发者，pico.sh 值得尝试。它简化了很多常见的开发和部署流程，让你专注于写代码，而不是折腾配置。免费的套餐中支持所有的基础功能和 25MB 存储容量，足够做一些小型实验。

---

### Postgres Language Server | Postgres 语言服务器
https://github.com/supabase-community/postgres-language-server

本周，Supabase 社区为 Postgres 数据库带来了强力工具：Postgres Language Server。

它是一个 Postgres 数据库的语言服务器，实现了 Language Server Protocol (LSP)。这个工具的目标是提升开发体验，并提供可靠的 SQL 工具支持。它能为 Postgres 中的 SQL 语句提供自动补全、语法高亮、类型检查，同时还提供了 Lint 功能。有了它，无论是 VS Code 还是 Neovim，都能获得更好的 Postgres SQL 开发体验。

Koala 认为，拥有 Language Server 之后，不仅日常的开发体验会有所提升，也能基于它进一步开发 SQL 相关的 AI 工具，提升 SQL 生成的准确性。

---

### Bare | 轻量级模块化 JS 运行时
https://bare.pears.com/

Bare 是一个轻量级的 JavaScript 运行时，目标是让你写的 JavaScript 代码可以在桌面端和移动端等多种环境，以较小的开销被运行。

它和 Node.js 类似，都采用了一步事件驱动架构，也依赖了 libuv 等底层库，同时可以复用 npm 等工具链。但 Bare 更加侧重嵌入式和跨设备支持。这意味着你可以用它来开发运行在嵌入式设备上的 peer-to-peer 的应用。

Koala 认为，Bare 的模块化设计很有趣，你可以根据需要选择不同的模块，避免不必要的依赖和性能损耗。如果你也在寻找一个轻量级的 JS 运行时，Bare 是一个新的值得关注的选项。

---

### bazza/ui | shadcn 复杂表格过滤器
https://ui.bazza.dev/

bazza/ui 是一个基于 Shadcn UI 设计的复杂表格过滤器组件。前者在前端开发中的热度不断升高，而在一些复杂中后台业务场景中，缺少复杂数据表格成为一个痛点。

bazza/ui 的作者看到了这一机遇，针对 Shadcn UI 的 UI 组件与 TanStack Table 的 Headless 表格相结合的场景，开发了一个功能完整、视觉风格统一、提供端到端类型安全的过滤器组件。

Koala 认为，基于 Shadcn UI 的开源生态还在持续壮大。近期该项目还提供了 Registry API 的统一标准，让 bazza/ui 这样的第三方组件可以通过统一的 schema 复用 Shadcn UI 的 CLI 等工具链，进一步提升开发者体验。

---

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。

