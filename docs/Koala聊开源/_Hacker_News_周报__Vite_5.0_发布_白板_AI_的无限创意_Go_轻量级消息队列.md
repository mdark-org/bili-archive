---
title: "[Hacker News 周报] Vite 5.0 发布；白板+AI 的无限创意；Go 轻量级消息队列"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/678"
tags: []
date: 1700973417
bvid: BV1qv411F7DB
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第678期Hacker News周报。

### Vite 5.0 发布
[https://vitejs.dev/blog/announcing-vite5](https://vitejs.dev/blog/announcing-vite5)

前端构建工具Vite发布了新的主版本5.0，在社区生态方面有许多提升，例如单元测试框架Vitest即将发布1.0版本，构建在Vite之上的Meta框架Waler,Next也在快速发展。
Vite也将期核心内部依赖Roller升级至最新的4.0版本。
在性能方面，5.0也有所提升，但更大的计划是在未来基于Rust替换部分内部实现，目前的版本还在为这一计划进行铺垫。

---

### River｜基于 Postgres 和 Go 的任务队列库
[https://brandur.org/river](https://brandur.org/river)

数据工程师Brand分享了他基于Postgres数据库和Go实现的任务队列库River，与之前我们介绍过的PGQ等项目类似。
River也使用了Skiplocked等方法，提升Postgress实现队列的性能，使得River整体轻量级且性能优异，该项目弥补了Go生态中的一部分空缺，使得Go开发者在开发应用时有了更多选择。

---

### TinaCMS｜ 一个灵活易用的 headless 内容管理系统
[https://github.com/tinacms/tinacms](https://github.com/tinacms/tinacms)

TinaCMS是一个灵活易用的headless内容管理系统，可以对Markdown、MDX、JSON等多种格式的内容进行管理。
与同类项目相比，TinaCMS同时支持基于Git管理和基于API管理两种模式，使得其适用场景更为广泛，无论是个人博客还是生成有性能要求的静态页面，TinaCMS都能无缝集成，使非技术人员能够通过其提供的UI界面，编辑管理内容。

---

### Anthropic 发布 Claude 2.1 版本
[https://www.anthropic.com/index/claude-2-1](https://www.anthropic.com/index/claude-2-1)

在OpenAI经理人员动荡的同时，他们强有力的竞争对手Anthropic发布了核心产品Claude 2.1版本。
在新版本中，Claude突出的上下文大小再次突破，目前支持20万token的上下文窗口，与此同时，其回答的错误率也比旧版本下降了一倍。
在API中，Claude也对标OpenAI提供了用户定义函数等功能，不过API仍然只对部分受邀用户开放。
总的来说，不同厂商之间良性的竞争，使得用户们能够不断体验更新更强的AI功能。

---

### tldraw 的白板+AI 无限创意
[https://tldraw.substack.com/p/make-real-the-story-so-far](https://tldraw.substack.com/p/make-real-the-story-so-far) 以及 [https://twitter.com/tldraw/status/1727728068968460778](https://twitter.com/tldraw/status/1727728068968460778)

之前多次登上我们周报的TLDraw项目，最近也凭借其与AI的结合成为网红。
TLDraw通过与OpenAI的视觉识别模型GPT4V集成，开发了一个名为MakeReal的图片生成代码功能，并基于TLDraw已有的白板能力，使得与AI交互完成代码的用户体验非常流畅。
在大量用户试用并发布有趣的Demo之后，TLDraw官方也发布博客，详细介绍了该功能背后的实现原理。
在此之后，TLDraw也没有停止探索AI的脚步，近期又发布了名为Draw Fast的AI协助绘画功能，效果同样令人印象深刻。

---

### Stripe 促销日在线概览页面
[https://bfcm.stripe.dev/](https://bfcm.stripe.dev/)

本周是海外电商的促销日Black Friday，支付技术领域的独角兽Stripe发布了一个有趣的在线概览页面，能够实时查看促销期间通过Stripe完成的交易总额、总交易笔数和每分钟交易笔数等信息。
同样令人关注的是，目前Stripe的API可用性保持在99.999%以上，且负载保持在总容量10%以内，证明其基础设施还能承载更多用户。
这样透明的呈现方式，有助于用户提升对适用Stripe开发支付功能的信心和愿望。

---

以上就是本期Hacker News周报摘要，感谢您的收看。


