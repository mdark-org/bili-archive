---
title: "[Hacker News 周报] Vite 5.0 发布；白板+AI 的无限创意；Go 轻量级消息队列"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/678"
tags: []
date: 1700973417
bvid: BV1qv411F7DB
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第 678 期 Hacker News 周报。

---

### Vite 5.0 发布
前端构建工具 Vite 发布了新的主版本 5.0，在社区生态方面有许多提升，例如单元测试框架 Vitest 即将发布 1.0 版本，构建在 Vite 之上的 Meta 框架 WMR 和 Astro 也在快速发展。Vite 也将其核心内部依赖 Rollup 升级至最新的 4.0 版本。在性能方面，5.0 也有所提升，团队的计划是在未来基于 Rust 替换部分内部实现，目前的版本还在为这一计划进行铺垫。

---

### River｜基于 Postgres 和 Go 的任务队列库
https://brandur.org/river
Quartz Data 的工程师 Brandur 分享了他基于 Postgres 数据库和 Go 实现的任务队列库 River，与之前我们介绍过的 PGQ 等项目类似，River 也使用了 Skip Locked 的方法，提升 Postgres 实现队列的性能，使得 River 整体轻量级且性能优异。该项目弥补了 Go 生态中的一部分空缺，使得 Go 开发者在开发应用时有了更多选择。

---

### TinaCMS｜ 一个灵活易用的 headless 内容管理系统
https://github.com/tinacms/tinacms
TinaCMS 是一个灵活易用的 headless 内容管理系统，可以对 Markdown、MDX、JSON、YAML 等多种格式的内容进行管理。与同类项目相比，TinaCMS 同时支持基于 Git 管理和基于 API 管理两种模式，使得其适用场景更为广泛。无论是个人博客还是生成有性能要求的静态页面，TinaCMS 都能无缝集成，使非技术人员能够通过其提供的 UI 界面编辑管理内容。

---

### Anthropic 发布 Claude 2.1 版本
https://www.anthropic.com/index/claude-2-1
在 OpenAI 经历人员动荡的同时，他们强有力的竞争对手 Anthropic 发布了核心产品 Claude 2.1 版本。在新版本中，Claude 突出的上下文大小再次突破，目前支持 20 万 token 的上下文窗口，与此同时，其回答的错误率也比旧版本下降了一倍。在 API 中，Claude 也对标 OpenAI 提供了用户定义函数等功能，不过 API 仍然只对部分受邀用户开放。总的来说，不同厂商之间良性的竞争，使得用户们能够不断体验更新更强的 AI 功能。

---

### tldraw 的白板+AI 无限创意
https://tldraw.substack.com/p/make-real-the-story-so-far
https://twitter.com/tldraw/status/1727728068968460778
之前多次登上我们周报的 tldraw 项目，最近也凭借其与 AI 的结合成为网红。tldraw 通过与 OpenAI 的视觉识别模型 GPT-4V 集成，开发了一个名为 Make Real 的图片生成代码功能，并基于 tldraw 已有的白板能力，使得与 AI 交互完成代码的用户体验非常流畅。在大量用户试用并发布有趣的 Demo 之后，tldraw 官方也发布博客，详细介绍了该功能背后的实现原理。在此之后，tldraw 也没有停止探索 AI 的脚步，近期又发布了名为 Draw Fast 的 AI 协作绘画功能，效果同样令人印象深刻。

---

### Stripe 促销日在线概览页面
https://bfcm.stripe.dev/
本周是海外电商的促销日 Black Friday，支付技术领域的独角兽 Stripe 发布了一个有趣的在线概览页面，能够实时查看促销期间通过 Stripe 完成的交易总额、总交易笔数和每分钟交易笔数等信息。同样令人关注的是，目前 Stripe 的 API 可用性保持在 99.999% 以上，且负载保持在总容量 10% 以内，证明其基础设施还能承载更多用户。这样透明的呈现方式有助于用户提升对适用 Stripe 开发支付功能的信心和愿望。

---

以上就是本期 Hacker News 周报摘要，感谢您的收看。


