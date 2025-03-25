---
title: "[Hacker News 周报] 低代码 + serverless = ?；WebAssembly 性能分析工具；AI 一周概述"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址: https://mailchi.mp/hackernewsletter/652"
tags: []
date: 1684644509
bvid: BV1Js4y1u7J3
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第652期 Hacker News 周报。

---

### Windmill｜低代码 + serverless = ?
https://github.com/windmill-labs/windmill
在低代码工具层出不穷的今天，还有什么样的产品可以令人眼前一亮？Windmill 这款工具的思路是由用户提供一段脚本，它通过分析脚本自动生成基础的 UI，用于调用该脚本。用户可以直接使用，也可以基于低代码编辑器进行进一步的 UI 开发，最终获得一个可完整运行的前后端应用。

目前该项目支持 Python、TypeScript、Go、Bash 和 SQL。通过脚本静态分析，串联低代码 UI 和 serverless 运用是该项目的最大特色。

---

### Supabase 为文档/集成与 ChatGPT 类似的问答搜索体验
https://supabase.com/blog/openai-embeddings-postgres-vector
基于大语言模型为自己的项目文档开发搜索功能，是许多开发者希望尝试的方向。如果你也对各类数据处理工具、向量数据库感到陌生，那么可以看看 Supabase 是如何为他们的文档集成与 ChatGPT 类似的问答搜索体验。

在这篇文章中，Supabase 基于常见的 Postgres 数据库和它的插件 PG Vector 存储 OpenAI embedding API 返回的向量结果，供后续搜索使用，整体思路清晰，易于复刻。

---

### Bytebase 发布了 2.0 版本
https://www.bytebase.com/blog/bytebase-2-0/
好了，聊看原频道的老朋友 Bytebase 发布了 2.0 版本，带来了一系列改进，包括支持的数据库在 MySQL 的基础上增加了11种，基于 AI 提问 SQL 建议与索引建议，免费计划额度升级等。该产品在数据库管理领域的创新值得关注。

---

### Bun /本周发布新版本 v0.6
https://bun.sh/blog/bun-bundler
JavaScript 运行时 Bun 本周发布了新版本 V0.6，包含原生打包工具 Bun Bundler。从 Bun 提供的性能测试数据看，Bun Bundler 不仅与 Webpack、Rollup 等传统打包工具相比，有数百倍的性能提升，也与以性能著称的 ESBuild 等工具相比同样具有优势。不过一些评论也指出，在 ESBuild 已经被广泛使用的情况下，它带来的性能在大部分时候已经足够好。Bun Bundler 在这个时机带来性能上的优化，并不容易说服使用者切换工具，在功能与易用性上还需要做出更多努力。

---

### pprof｜WebAssembly 性能分析工具
https://blog.stealthrocket.tech/performance-in-the-spotlight-webassembly-profiling-for-everyone/
Pprof 是许多编程语言都支持的性能分析工具，其中与 Go 语言生态最为活跃。近期 Go 社区的开发者基于 Go 社区的零依赖 WebAssembly 运行时 V0 开发出了性能工具 wzprof，用于测量 WebAssembly 程序的性能，并输出 Pprof 兼容的数据结果。

性能分析是生产级别应用不可缺少的一个环节，提供更强大应用的性能分析工具，说明 WebAssembly 生态正在日渐成熟。

---

### AI 一周概述
https://twitter.com/rowancheung/status/1659650892071616512
在 AI 蓬勃发展的今天，我们也将以专题汇总的形式为大家快速介绍一周中 AI 领域的重点新闻。
1. 虚幻引擎5.2发布。在 demo 视频中，他们展示了如何基于机器学习的技术，制作出极高质量的游戏角色。
2. OpenAI 本周十分活跃，先后对 ChatGPT Plus 用户开放所有 Beta 插件，之后相继宣布了开源大语言模型的计划，最后还发布了 ChatGPT iOS 应用。
3. 自动化工具 Zapier 推出了新的 AI 功能。用户可以通过自然语言描述需求，由 AI 生成自动化工作流及其对应的脚本代码。
4. Meta 公布定制化 AI 芯片的开发计划，这款名为 Meta Training and Inference Accelerator 的芯片，目标是提供比通用 CPU 更强的计算能力和效率。
5. 论文 DragGAN 展示了一种控制图片生成结果的新方法。通过 UI 交互的形式，拖拽图像中的定位点，为图片生成对象 的姿态、形状、表情，进行更精确的控制。

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

