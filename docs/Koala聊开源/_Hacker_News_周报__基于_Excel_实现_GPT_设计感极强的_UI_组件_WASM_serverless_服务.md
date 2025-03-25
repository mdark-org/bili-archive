---
title: "[Hacker News 周报] 基于 Excel 实现 GPT；设计感极强的 UI 组件；WASM serverless 服务"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：
https://mailchi.mp/hackernewsletter/692"
tags: []
date: 1710648447
bvid: BV1xx4y1D7sq
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala。欢迎收看第 692 期 Hacker News 周报。

如果你你的产品或项目需要一个设计新颖的官网，那么可以尝试一下 Aceternity UI 这个项目，该项目有数十种流行的组件实现，例如 3D 幻片、背景光速、Google Gemini 同款动画特效等。在组件示例中可以查看其效果，并直接复制粘贴完整的实现到自己的项目中使用。

Koala 点评：复制粘贴即可使用的 UI 组件库，正在被越来越多的开发者所接受，对于开发者来说更容易进行进一步定制，对于维护者来说也减轻了版本发布等额外工作。另一方面，Aceternity UI 也让我们看到在基础组件库之外，开发这些艺术效果更强的专用组件的潜力。

---

### Aceternity UI｜设计感极强的 UI 组件
[https://ui.aceternity.com/components](https://ui.aceternity.com/components)

---

Spreadsheets are all you need 是一个有趣的 AI 原理讲解项目，作者通过 Excel 中内置的哥里函数就实现了与 GPT 类似的 Transformer 架构。读者可以通过观看视频课程，跟随作者逐步理解，也可以直接下载对应的 Excel 文件在本地交互体验。

Koala 点评：尽管 AI 如火如荼，但对于更多非 AI 领域的从业者来说，AI 的工作原理还是一个黑盒。Spreadsheets are all you need 用一种大家都熟悉的媒介 Excel 来讲解 AI 工作原理，这有助于 AI 的科普与推广，期待更多此类科普内容的诞生。

---

### Spreadsheets-are-all-you-need｜ 基于 Excel 实现 GPT
[https://spreadsheets-are-all-you-need.ai/index.html](https://spreadsheets-are-all-you-need.ai/index.html)

---

Editor.js 是一个开源的块式富文本编辑器框架，开发者基于它可以快速开发出结构化的编辑器，将用户输入的内容收集为整洁的 JSON 数据进行下一步处理。得益于 Editor.js 灵活的 API 设计，所有输入模式都以插件的形式实现，在开源社区中也有大量的 Editor.js 插件，可以组合用于各类应用场景。

Koala 点评：在 AI 时代，文本编辑器正在承担越来越重要的角色，许多复杂的表单 UI 都可能被灵活便捷的文本输入替代，像 Editor.js 这样设计灵活、简洁、API 驱动的文本编辑器也会变得更为重要。

---

### Editor.js｜ 块式富文本编辑器框架
[https://editorjs.io/](https://editorjs.io/)

---

Ingestr 是一个 Python 命令行工具，用于从不同数据源中拷贝数据到各种数据库中，例如用户可以将本地的 CSV 文件导入到 AWS Redshift，也可以将一个 SQLite 数据库拷贝到另一个 Postgres 数据库。对于开发测试、数据分析和备份等场景都比较使用。

Koala 点评：Ingestr 充分体现了开源工具类项目获得成功的方法，首先工具仅提供一个命令，保持简洁，其次在支持的数据源种类上不断扩张，增强适用性，最后提供质量拷贝这类高级功能，使得整个工具精用强大可扩展。

---

### Ingestr｜ Python 命令行工具
[https://bruin-data.github.io/ingestr/](https://bruin-data.github.io/ingestr/)

---

Spin 是一套基于wasm 的 Serverless 基础设施，开发者可以基于 Python、Go、JS、Rust、.NET 等语言开发 wasm 应用。在 Spin 提供的云服务中，每个 Spin 应用还可以使用 SQLite 数据库、KV 存储等通用能力，开发更为复杂的应用。

Koala 点评：基于 wasm 的轻量化和隔离性，开发下一代云上工作负载单元是一个经常被提及的概念。Spin 的不同之处在于它背后的公司 Fermyon 是一个在云计算基础设施领域有着深入研究的团队，他们曾经开发了 Kubernetes 中最主流的包管理工具 Helm 和 Kubernetes 中 wasm 管理器 Crosslet 以及其他多个 CNCF 项目。从 Spin 的技术架构上看，其云服务很可能也是构建在 Kubernetes 之上，因此该项目可以被视为是第一个商业化的 Kubernetes 运行 wasm 负载案例。

---

### Spin｜ WASM serverless 服务
[https://github.com/fermyon/spin](https://github.com/fermyon/spin)

---

本周前端框架 Astro 发布了他们的数据股方案 Astro DB，用于为内容驱动的网页提供更好的数据管理能力。在发布的博客中，他们介绍了选型 SQLite fork 版本 Lipsycle 的原因，以及 Astro DB 将为用户带来哪些帮助。

Koala 点评：越来越多开源前端框架开始以商业公司的形态运作，并希望在框架内集成云服务，从而带来利润。以 SQLite 为基础的 Serverless 数据库方案随着 Cloudflare D1 和 Turso 的流行，被越来越多的人所接受，但 Astro 这样的团队是否能开发和运维好同样的基础设施，仍然有待观察。

---

### Astro 发布数据库方案 Astro DB
[https://astro.build/db/](https://astro.build/db/) 和 [https://astro.build/blog/astro-db-deep-dive](https://astro.build/blog/astro-db-deep-dive)

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


