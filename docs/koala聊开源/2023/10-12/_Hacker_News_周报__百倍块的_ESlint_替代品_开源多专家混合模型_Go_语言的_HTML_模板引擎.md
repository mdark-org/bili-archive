---
title: "[Hacker News 周报] 百倍快的 ESlint 替代品；开源多专家混合模型；Go 语言的 HTML 模板引擎"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://www.daemonology.net/hn-daily/"
tags: []
date: 1702786199
bvid: BV1f94y1A7SV
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第688期 Hacker News 周报。

---

### Oxlint｜百倍块的 ESlint 替代品

https://oxc-project.github.io/blog/2023-12-12-announcing-oxlint.html

ESlint是JS生态中广泛使用的Lint工具，随着使用Rust的重写工具链的流行趋势兴起，基于Rust开发ESlint的替代品的Oxlint发布了他的GA版本。Oxlint将自己定位于零配置代码Lint工具。基于Rust的性能优势以及并行处理能力，可以使性能比ESlint提升50到100倍。该项目由OXC团队开发，该团队还参与了Rspack, Rollup, Esno, Type Checker等项目的开发。希望尝鲜的伙伴可以在自己的项目中对Oxlint进行尝试。

---

### Trippy｜可视化网络流量追逐工具

https://trippy.cli.rs/

网络诊断是许多开发者经常进行的故障排查操作。Trippy是一个结合了Traceroute和Ping两种工具功能的网络诊断工具。相比直接使用系统工具，它具备更强大和更可定制的流量追踪能力。Trippy支持追踪多种协议，可以同时追踪多个目标，支持自定义数据包大小与负载模式等。此外，Trippy的终端界面也十分友好，并且可以生成多种诊断报告。

---

### Huh｜TUI 表单组件

https://github.com/charmbracelet/huh

流行的命令行TUI中，除了展示信息，表单输入也是一种典型需求。Huh是一个TUI工具库，它简化了在终端中输入信息的复杂度，可以方便的将其他GUI中常见的Select, Input, Confirm等控件实现到命令行中。在易用性方面，Huh除了能够独立用于实现TUI，还可以与Go生态中流行的Bubble Tea相结合，进一步简化开发流程。

---

### Templ｜ Go 语言的 HTML 模板引擎

https://github.com/a-h/templ

Templ是Go语言的一个HTML模板引擎，相比Text Template等同类方案，它在开发体验上有些优势。Templ在IDE中通过插件支持语法高亮和自动完成等功能，模板中的动态片段也会触发智能提示，这大大提高了开发效率。此外，Templ还原生支持许多高级特性，如组件化、局部模板、模板继承等。这些功能过往通常需要前端框架才能实现。Templ的语法参考了JavaScript，对前端工程师同样友好，同时，它也保持了良好的Go兼容性。

---

### redb｜ Rust 的轻量级嵌入式 KV 存储

https://github.com/cberner/redb

REDB是一个完全由Rust实现的的轻量级嵌入式KV存储。与Java和C++生态拥有大量成熟实现不同，Rust生态中的KV存储选项还比较有限。REDB希望填补这一空白。它支持完整的ACID事物，通过MVCC实现了读写的并发控制。在设计文档中也详细的介绍了一些关键性的设计取舍。即使不打算在应用中立刻使用REDB，对于嵌入式KV存储实现原理感兴趣的小伙伴，也可以通过阅读代码的方式进行学习。

---

### Mixtral-8x7B｜开源多专家混合模型

https://mistral.ai/

来自法国的创业公司Mistral发布了他们新的开源模型Mistral 8x7B。该模型是一个稀疏型专家混合模型，与Google等大公司发布AI模型前精心准备的Banner不同，Mistral每次发布模型的方式，都是在X上发出一个下载链接，没有任何额外的描述。但先行者们在尝试过后，都给出了不错的反馈，成为了Mistral最好的推广。直到最近，七次如今的Mistral才发布了博客，并在性能测试数据中提到，已经在不少训练集中打败GPT3.5。这家神秘的法国AI公司，能否成为开源AI新的核心玩家，值得我们持续关注。

---

### Fly Postgres｜托管 Postgres 数据库服务

https://supabase.com/blog/postgres-on-fly-by-supabase

在本周Launch Week的活动中，Supabase发布了他们与Fly.io合作的托管Postgres数据库服务Fly Postgres。该服务由Supabase运维，基于Fly.io的边缘设计平台部署。与Fly.io过往的数据库托管服务相比，Fly Postgres集成了Supabase所熟悉的40多种场景，对于AI向量场景也提供了PG Vector支持，同时Supabase参与开发的Supervisor连接池组件，以及Postgres和PG Graph API集成组件，也将被包含在托管方案中。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。


