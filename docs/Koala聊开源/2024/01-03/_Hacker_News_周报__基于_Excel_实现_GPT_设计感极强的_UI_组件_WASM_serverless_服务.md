---
title: "[Hacker News 周报] 基于 Excel 实现 GPT；设计感极强的 UI 组件；WASM serverless 服务"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：
https://mailchi.mp/hackernewsletter/692"
tags: []
date: 1710648447
bvid: BV1xx4y1D7sq
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第692期Hacker News周报。


### Aceternity UI｜设计感极强的 UI 组件
[https://ui.aceternity.com/components](https://ui.aceternity.com/components)

如果你你的产品或项目需要一个设计新颖的官网，那么可以尝试一下eternity UI这个项目。该项目有数十种流行的组件实现，例如3D卡片，背景光速，Google Gemini同款动画特效等。在组件实力中可以查看其效果，并直接复制粘贴完整的实现到自己的项目中使用。

考拉点评，复制粘贴即可使用的UI组件库，正在被越来越多的开发者所接受。对于开发者来说更容易进行进一步定制，对于维护者来说也减轻了版本发布等额外工作。另一方面eternity UI也让我们看到在基础组件库之外，开发这些艺术效果更强的专用组件的潜力。

---

### Spreadsheets are all you need

https://spreadsheets-are-all-you-need.ai/index.html

Spreadsheets are all you need是一个有趣的AI原理讲解项目。作者通过Excel中内置的格里函数就实现了一个GPT类似的Transformer架构。如此你可以通过观看视频课程，跟随作者逐步理解，也可以直接下载对应的Excel文件在本地交互体验。

考拉点评，尽管AI如火如荼，但对于更多非AI领域的从业者来说，AI的工作原理还是一个黑盒。Spreadsheets are all you need用一种大家都熟悉的媒介Excel来讲AI工作原理，这有助于AI的科普与推广，期待更多此类科普内容的诞生。

---

### Editor.js

https://editorjs.io/

Editor.js是一个开源的块式富文本编辑器框架。开发者基于它可以快速开发出结构化的编辑器，将用户输入的内容，收集为成结的Jason数据进行下一步处理。得益于Editor.js灵活的API设计，所有输入模式都以插件的形式实现。在开源社区中也有大量的Editor.js插件，可以组合用于各类应用场景。

考拉点评，在AI时代文本编辑器正在承担越来越重要的角色，许多复杂的表单UI都可能被灵活便捷的文本输入替代。像Editor.js这样设计灵活、简洁、API驱动的文本编辑器也会变得更为重要。

---

### Ingestr

https://bruin-data.github.io/ingestr/

Ingestr是一个Python命令行工具，用于从不同数据源中拷贝数据到各种数据库中。例如用户可以将本地的CSV文件导入到AWS Redshift，也可以将一个SQLite数据库拷贝到另一个Postgress数据库。对于开发测试，数据分析和备份等场景都比较使用。考拉点评，Ingestr充分体现了开源工具类项目获得成功的方法。首先工具仅提供一个命令保持简洁，其次在支持的数据源种类上不断扩展，增强适用性，最后提供资料拷贝这类高级功能，使得整个工具易用强大可扩展。

---

### Spin

https://github.com/fermyon/spin

Spin是一套基于wasm的serverless基础设施。开发者可以基于Python，Go，js，Rust，.net等语言开发wasm应用。在Spin提供的云服务中，每个Spin应用还可以使用SQLite数据库，KV存储等通用能力，开发更为复杂的应用。

考拉点评，基于wasm的轻量化和隔离性，开发下一代云上负载单元是一个经常被提及的概念。Spin的不同之处在于它背后的公司Fermyon是一个在云计算基础设施领域有着深入研究的团队。他们曾经开发了KBS中最主流的包管理工具Helm和KBS中wasm管理引擎Crosslet以及其他多个CNCF项目。从Spin的技术架构上看，其云服务很可能也是构建在KBS之上，因此该项目可以被视为是第一个商业化的KBS运行wasm负载案例。

---

### Astro DB

https://astro.build/db/ 和 https://astro.build/blog/astro-db-deep-dive

本周前端框架Astro发布了他们的数据方案AstroDB，用于为内容驱动的网页提供更好的数据管理能力。在发布的博客中，他们介绍了选型SQLite fork版本Litecycle的原因，以及AstroDB将会为用户带来哪些帮助。

考拉点评，越来越多开源前端框架开始以商业公司的形态运作，并希望在框架内集成云服务，从而带来利润。以SQLite为基础的serverless数据库方案，随着Cloudflare D1和Turso的流行，被越来越多的人所接受，但Astro这样的团队是否能开发和运维好同样的基础设施，仍然有待观察。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。

