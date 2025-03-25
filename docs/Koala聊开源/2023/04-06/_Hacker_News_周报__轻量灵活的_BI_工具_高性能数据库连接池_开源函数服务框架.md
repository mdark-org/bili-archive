---
title: "[Hacker News 周报] 轻量灵活的 BI 工具；高性能数据库连接池；开源函数服务框架"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址:https://mailchi.mp/hackernewsletter/648"
tags: []
date: 1682209800
bvid: BV1Rg4y1j7rZ
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala。欢迎收看第648期 Hacker News 周报。

---
### Evidence｜轻量灵活的 BI 工具
https://evidence.dev/

BI 报表通常需要使用专业的软件进行数据分析及绘制，再将图表导出，增加文字描述，形成最终的报表。Evidence 希望用户通过常用的 SQL 语句和 Markdown 文档，就能便捷快速地完成这一过程。Evidence 中内置了丰富的可视化图表组件，可连接不同数据后端的适配器。该代码完全开源，适用于追求轻量级和灵活性的报表场景。

---
### Uptrace｜ 一个开源的 APM 服务
https://github.com/uptrace/uptrace

Uptrace 是一个开源的 APM 服务，通过一个统一简洁的 UI 管理 tracing、进程指标和日志。从文档中可以看到，Uptrace 比较关注生产级别的可用性，对数据默认开启基于 Zstandard 压缩，同时支持自动将冷数据存入 S3 和价格低廉的 HDD 存储中。在技术方案中，Uptrace 也使用了 ClickHouse、Vector、Sentry SDK 等成熟开源软件。有相关软件经验的用户，使用起来会更加得心应手。

---
### Supavisor｜高性能数据库连接池
https://github.com/supabase/supavisor

数据库领域活跃的创业公司 Supabase，开源了自己的 Postgres 数据库连接池工具 Supavisor。Supavisor 基于 Elixir 开发，为现代化的云计算场景打造，在海量客户端和大量数据库节点之间，建立可动态扩容的连接池，提供零停机时间的扩容能力，也更易于支持多租户 serverless 等应用场景。

---
### Edge Runtime｜开源函数服务框架
https://supabase.com/blog/edge-runtime-self-hosted-deno-functions

另一个项目同样来自 Supabase，是其产品功能 Edge Function 的开源版本 Edge Runtime。此前 Supabase 介绍过其函数服务 Edge Functions 是基于 Deno 构建。而本次开源的 Edge Runtime 同样基于 Deno 开发，支持运行用户自定义的 TypeScript、JavaScript 和 WebAssembly 函数。除了用于本地调试 Edge Functions 之外，也可以尝试使用 Edge Runtime 开发自己的函数服务功能。

---
### SQL Chat｜AI 数据库查询工具
https://www.sqlchat.ai/

基于 AI 开发特定领域工具是非常有潜力的产品方向。Supabase 团队本周发布了他们的 AI 工具 SQL Chat。该工具可以与一个示例数据库或你自己的数据库建立连接，再通过与 AI 模型对话生成可执行的 SQL 语句，并在数据库中进行测试。从结果上看，SQL Chat 对相当好的理解自然语言中的目的，并产生合理的查询语句。目前比较适合一些临时查询的快速生成，未来还有更大的潜力。

---
### 一篇介绍负载均衡基本概念和实现方法的博客
https://samwho.dev/load-balancing

负载均衡是开发可扩展程序最常用的方法之一。这篇博客介绍了负载均衡的基本概念和实现方法，从负载均衡算法到不同负载均衡器的类型，以及七层和四层负载均衡的差别，文章都进行了详细的梳理。最重要的是作者编写了大量的动画示意，来帮助读者加深理解。想要学习和复习负载均衡概念的观众值得一读。

---

以上就是本期 Hacker News 周报的概要，谢谢您的收看。

