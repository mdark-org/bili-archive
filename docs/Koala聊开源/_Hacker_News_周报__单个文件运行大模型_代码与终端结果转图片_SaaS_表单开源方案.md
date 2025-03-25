---
title: "[Hacker News 周报] 单个文件运行大模型；代码与终端结果转图片；SaaS 表单开源方案"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://www.daemonology.net/hn-daily/"
tags: []
date: 1712462331
bvid: BV12t421E7mW
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第694期 Hacker News 周报。

### HeyForm｜ 开源的表单 SaaS 解决方案
[https://github.com/heyform/heyform](https://github.com/heyform/heyform)

HeyForm 是一个开源的表单 SaaS 解决方案。该项目作为商业化产品已经存在多年，近期将产品代码进行了开源。用户基于 HeyForm 可以快速构建出美观，用户体验良好的表单，并将表单的提交数据收集到各类后端存储中。

Koala 认为，在线问卷表单是许多数据驱动的运营场景必备的工具，表单的用户体验也直接影响了用户的反馈热情。在全球市场中，HeyForm 同类产品不少，但是开源的并不多见。本次 HeyForm 开源之后，开发者可以考虑基于 HeyForm 定制自己的 SaaS 解决方案，形成产品。

---

### Freeze｜将代码与终端结果转图片的工具
[https://github.com/charmbracelet/freeze](https://github.com/charmbracelet/freeze)

Freeze 是一个将代码或终端结果输出为图片的命令行工具。过去同类的工具通常与代码编辑器集成，无法支持输出终端结果这种场景，也不易自动化集成。

Freeze 的设计很好的解决了这些问题，同时提供了灵活的 TUI 界面，用于控制图片的各种参数。Koala 认为，将代码生成图片传播，本来已经是十分常见的功能，但 Freeze 通过将工具改为命令行形式进行运行，又解锁了不少新场景。Freeze 开发者同样是构社区 TUI 框架 Bubble Tea 的开发团队，通过开发 Freeze 这样的实用工具，也很好的推广了 Bubble Tea 框架本身，是一种值得学习的开源运营思路。

---

### TS-Pattern｜TS 对 Pattern Matching 的实现
[https://github.com/gvergnaud/ts-pattern](https://github.com/gvergnaud/ts-pattern)

Pattern Matching 是 Haskell, Rust, Elixir 等多种编程语言中原生支持的功能，广受开发者好评。TS-Pattern 则是 TypeScript 社区中对 Pattern Matching 的一种实现，基于 TS 强大灵活的类型系统，带来了更好的开发体验和类型推断能力。

Koala 认为，TS 的类型系统一直是开发者们展示创业的战场。许多复杂强大的类型推断实现，可以给用户带来很好的开发体验。无论是期望基于 Pattern Matching 提升业务逻辑的代码组织方式，还是想学习 TS 类型系统的灵活使用方式，都可以尝试阅读 TS-Pattern 这个库的源码。

---

### SPQR｜ 无状态 Postgres 数据库查询路由工具
[https://github.com/pg-sharding/spqr](https://github.com/pg-sharding/spqr)

SPQR 是 Яндекс 内部数据平台团队开发的无状态 Postgres 数据库查询路由工具。与一些已有的有状态 Postgres 查询路由方案相比，SPQR 凭借其无状态的设计，更容易横向扩展，避免自身成为性能瓶颈，同时也提供更好的可用性。对于客户端来说，也几乎不需要感知数据库中分片的存在，使应用从单体数据库迁移为分片架构时更加平滑。

Koala 认为，Yandex 的云服务部门一直有着很强的技术实力，这周可热的 ClickHouse 最早也孵化自 Яндекс。过去 Яндекс 也维护着 Postgres 社区中的同类项目 Odyssey。本次开源 SPQR 也是希望解决 TB 级 Postgres 数据库，每秒过 10 万次查询的高负载场景。

---

### llamafile｜Mozilla 开源的单个文件运行大模型
[https://github.com/Mozilla-Ocho/llamafile](https://github.com/Mozilla-Ocho/llamafile)

Mozilla 的创新与实验部门在 AI 时代也开源了 llamafile。该项目可以将大语言模型封装为单个二进制文件进行分发与运行。该项目的目标是将大语言模型的所有运行依赖整合到单个文件中，并基于 llama.cpp 使模型可以在更多的硬件设备上运行，降低开发者和终端用户使用大模型的门槛。以 Mistral 7B 模型为例，llamafile 可以将其封装为一个 5.15GB 的文件，运行在多种操作系统上，同时支持 GPU 和 CPU 运行。

Koala 认为，在终端设备上运行大模型是非常明确的趋势，随着模型的迭代，llamafile 将变得更有价值。llamafile 近期也在性能上做出了创新，与直接使用 llama.cpp 运行相比，还能有 1.5 倍以上的性能提升。

---

### Counterscale｜开源的 Web 数据分析工具
[https://counterscale.dev/](https://counterscale.dev/)

Counterscale 是一个开源的 Web 数据分析工具，其特点是借助 Cloudflare 的云服务，可以极快完成自部署和后续的维护工作，并且在云服务上的成本很低。当网站每日浏览量低于 10 万时不产生费用。尽管功能并不十分丰富，但对于仅关心流量趋势的基础数据的网站来说，也是小而美的选择。

Koala 认为，Cloudflare 凭借应用的功能和合理定价，在一众大公有云中占据了云计算的一席之地。随着近期发布的多项新功能，在 Cloudflare 上开发全栈应用也变得更加简单，相信会有越来越多 Counterscale 这样的 Cloudflare First 开源软件出现。

---

以上就是本期 Hacker News 周报摘要，谢谢你的收看。

