---
title: "[Hacker News 周报] 面向边缘场景设计的 Web 框架；功能更强的 PostgresSQL 池化工具；GitHub Copilot 开源竞品"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://www.daemonology.net/hn-daily/"
tags: []
date: 1690712045
bvid: BV1bj41197vF
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala，欢迎收看第662A期 Hacker News 周报。

### Vegeta｜ HTTP API 性能测试工具
[https://github.com/tsenart/vegeta](https://github.com/tsenart/vegeta)

Vegeta 是一个用于 HTTP API 性能测试的开源工具，在功能上支持详细的测试报告，也可以将测试指标导入 Prometheus，同时支持横向扩展至多台机器，实现分布式性能测试。Vegeta 基于 Go 开发，支持通过 CLI 和 Go 语言库两种方式集成使用。CLI 也进行过细致的优化，使其易于和其他命令行工具组合使用。

---

### PgCat｜PostgreSQL 连接池管理器
[https://github.com/postgresml/pgcat](https://github.com/postgresml/pgcat)

PgCat 是一个强大的 PostgreSQL 连接池管理器，与流行的同类工具 PG Bounce 保持兼容，提供会话池和事务池两种形态，提供查询路由、负载均衡、故障转移等提高数据后性能与可用性的必备功能。与 PG Bounce 相比，PgCat 解决了一些长期存在的问题，例如异常客户端与废弃事务的处理，同时各类别支持热更新，降低了更新配置所带来的业务中断时间。

---

### Hono｜面向边缘场景设计的 Web 框架
[https://hono.dev/](https://hono.dev/)

随着 Cloudflare Workers, Deno 等 serverless JavaScript 平台的流行，对于面向边缘 serverless 场景设计的 Web 框架的需求也与日俱增。Hono 就是一个专为这一场景设计的 Web 框架，具有轻量级、适配多种平台等特性，而 JSX 中间件功能是它与同类框架相比的一大独特优势。该框架的 JSX 中间件仅用于服务端渲染，不提供客户端的虚拟DOM等功能，使其结合 HTMX 等方案后，可以构建性能极好的服务端渲染应用。

---

### Risor｜用于 Go 项目的的嵌入式脚本语言
[https://risor.io/](https://risor.io/)

Risor 是一个用于 Go 项目的快速灵活的嵌入式脚本语言，适合在 Go 项目中用于实现插件扩展、自定义脚本等功能。在实现层面，Risor 将脚本编译成字节码，在轻量级的虚拟机上运行，语法参考 Go 和 Python，对于 Go 开发者很友好，并且支持 Json 操作、HTTP 请求、数据库操作等常见的功能，使得基于 Risor 实现一些业务逻辑十分便捷，且开发体验良好。

---

### Croner｜基于 JavaScript 编写的定时编排工具
[https://github.com/Hexagon/croner](https://github.com/Hexagon/croner)

Croner 是基于 JavaScript 编写的定时编排工具，功能丰富且无外部依赖，可以在 Node.js, Deno, 浏览器等多种 JavaScript 运行时中使用。项目的 Readme 中也详细对比了它和常用的 Node Chrome 等工具库在性能、功能上的一些对比，并提供了迁移指南。如果你的项目正在使用同类的工具库，可以对比看看使用 Croner 是否可以带来一定的优化。

---

### 一周 AI 小结
https://stability.ai/blog/stable-diffusion-sdxl-1-announcement 及 https://stability.ai/blog/stable-beluga-large-instruction-fine-tuned-models
https://github.com/continuedev/continue
https://the-decoder.com/ai-researcher-geoffrey-hinton-thinks-ai-has-or-will-have-emotions

接下来是一周 AI 小结。
1、Stability AI 本周陆续发布了开源图片模型 SDXL 1.0 和语言模型 Stable Beluga 2。SDXL 1.0 在图片生成结果上逼近 Midjourney。Stable Beluga 2 则是在 Llama 2 的基础上进行调优，得到更好的性能，两者都体现了开源模型的强大活力。
2、开源 AI 编程助手 Continue 发布，与 IDE 深度集成，默认使用 GPT4，但也支持其他模型。基于其开源属性，它为开发者提供了更强的定制能力，是否可以与 GitHub Copilot 等产品相比还有待观察。
3、AI 教父 Geoffrey Hinton 在最近的演讲中表示，深度学习可以使 AI 系统产生沮丧和愤怒等情感，其中对情感的定义和尝试中的还有一些区别，这也引起了公众对 AI 安全的进一步关注。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


