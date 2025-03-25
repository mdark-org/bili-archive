---
title: "[Hacker News 周报] 面向边缘场景设计的 Web 框架；功能更强的 PostgresSQL 池化工具；GitHub Copilot 开源竞品"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://www.daemonology.net/hn-daily/"
tags: []
date: 1690712045
bvid: BV1bj41197vF
---
了解科技资讯，把握行业脉搏。大家好，我是Koala，欢迎收看第662A期HackerNews周报。

---
### Vegeta｜ HTTP API 性能测试工具
https://github.com/tsenart/vegeta
Vegeta是一个用于HTTP API性能测试的开源工具，在功能上支持详细的测试报告，也可以将测试指标导入Prometheus，同时支持横向扩展至多台机器，实现分布式性能测试。Vegeta基于Go开发，支持通过CLI和Go语言库两种方式集成使用。CLI也进行过细致的优化，使其易于和其他命令行工具组合使用。

---
### PgCat｜PostgreSQL 连接池管理器
https://github.com/postgresml/pgcat
PgCat是一个强大的PostgreSQL连接池管理器，与流行的同类工具PG Bounce保持兼容，提供会话池和事物池两种形态，提供查询路由、负载均衡、故障转移等提高数据库性能与可用性的必备功能。与PG Bounce相比，PgCat解决了一些长期存在的问题，例如异常客户端与废弃事物的处理，同时各类别支持热更新，降低了更新配置所带来的业务中断时间。

---
### Hono｜面向边缘场景设计的 Web 框架
https://hono.dev/
随着Cloudflare Workers, Dino等Serverless JavaScript平台的流行，对于面向边缘Serverless场景设计的外部框架的需求也与日俱增。Hono就是一个专为这一场景设计的Web框架，具有轻量级、适配多种平台等特性，而JSX中间件功能使它与同类框架相比的一大独特优势。该框架的JSX中间件仅用于服务端渲染，不提供客户端的虚拟Dom等功能，使其结合HTMX等方案后，可以构建性能极好的服务端渲染应用。

---
### Risor｜用于 Go 项目的的嵌入式脚本语言
https://risor.io/
Risor是一个用于Go项目的快速灵活的嵌入式脚本语言，适合在Go项目 中用于实现插件扩展、自定义脚本等功能。在实现层面，Risor将脚本编译成字节码，在轻量级的虚拟机上运行，语法参考Go和Python，对于Go开发者很友好，并且支持Json操作、HTTP请求、数据库操作等常见的功能，使得基于Risor实现一些业务逻辑十分便捷，且开发体验良好。

---
### Croner｜基于 JavaScript 编写的定时编排工具
https://github.com/Hexagon/croner
Croner是基于JavaScript编写的定时编排工具，功能丰富且无外部依赖，可以在Node.js、Deno、浏览器等多种JavaScript运行时中使用。项目的readme中也详细对比了它和常用的Node Chrome等工具库在性能、功能上的一些对比，并提供了迁移指南。如果你的项目正在使用同类的工具库，可以对比看看使用Croner是否可以带来一定的优化。

---
### 一周 AI 小结
https://stability.ai/blog/stable-diffusion-sdxl-1-announcement 及 https://stability.ai/blog/stable-beluga-large-instruction-fine-tuned-models
https://github.com/continuedev/continue
https://the-decoder.com/ai-researcher-geoffrey-hinton-thinks-ai-has-or-will-have-emotions
接下来是一周AI小结。一，Stability AI本周陆续发布了开源图片模型SDXL1.0和语言模型Stable Beluga 2。SDXL1.0在图片生成结果上逼近Midjourney。Stable Beluga 2则是在lama 2的基础上进行调优，得到更好的性能，两者都体现了开源模型的强大活力。二，开源AI编程助手Continue发布，与IDE深度集成，默认使用GPT4，但也支持其他模型。基于其开源属性，它被开发者提供了更强的定制能力，是否可以与GitHub Copilot等产品相比还有待观察。三，AI教父Jeffrey Hinton在最近的演讲中表示，深度学习可以使AI系统产生沮丧和愤怒等情感，其中对情感的定义和尝试中的还有一些区别，这也引起了公众对AI安全的进一步关注。

---

以上就是本期HackerNews周报摘要，谢谢您的收看。

