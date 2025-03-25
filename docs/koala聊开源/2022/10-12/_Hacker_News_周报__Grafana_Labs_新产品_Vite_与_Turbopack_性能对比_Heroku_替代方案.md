---
title: "[Hacker News 周报] Grafana Labs 新产品；Vite 与 Turbopack 性能对比；Heroku 替代方案"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/627"
tags: []
date: 1667708609
bvid: BV1u14y157NA
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第627期 Hacker News 周报。

知名开源可观测性厂商 Grafana Labs 本周开源了持续性能分析平台 Flare。持续性能分析是可观测性领域的新趋势，通过持续采集 CPU、内存等资源信息，帮助开发者更好的定位性能问题。除了核心功能之外，Flare 还提供了高可用、存储低成本介质、多租户等特性，并且也可以与 Grafana Labs 的其他产品，例如日志、监控指标进行关联分析。

---

Apache Age 是一个 Postgres SQL 插件，可以将 Postgres SQL 数据库扩展为一个图数据库。与许多从零搭建的图数据库不同的是，Age 目标是使用户可以通过图模型查询 Postgres SQL 中已有的关联模型，更好的为已有数据库提供图式查询能力。

---

Unix 的哲学之一是每个工具都专注于将一件事情做到最好，再通过管道的方式在工具之间传递数据。而在现代软件中，随着 JSON 数据格式的广泛使用，大家发现 JSON 输出结合 jq 的过滤查询能力，可以编写更灵活强大的脚本。但一些已有的命令行工具并不支持输出 JSON 格式的结果，jc 就是为了解决这一问题而生的。jc 内置了一组常用命令行工具结果的解析器，从而使这些工具的输出结果可以被转化为 JSON，继而通过管道传递至其他命令行工具中。

---

History 是一个交互式的 Shell 历史查询工具，通过提供更加友好方便的查询方式之外，History 还支持通过端到端加密的方式，将 Shell 历史在多个设备中共享。由于多设备共享需要后端服务器的支持，所以 History 也支持自部署同步服务，适合更多场景。

---

在之前的周报中，我们介绍过几个 FFmpeg 的辅助工具，通过图像化的方式，快速编写简单常用的 FFmpeg 指令。今天介绍的 FFmpeg guide 则是提供了功能更加强大的界面，帮助编写复杂的 FFmpeg 过滤器语法。

---

上周我们介绍了 Vercel 的打包工具领域的新尝试 Turbopack。在 Turbopack 的发布宣传中，曾经提到他们拥有10倍于 Vite 的速度优势，而 Vite 的创造者尤雨溪本周也发布了多个 Vite 与 Turbopack 的性能对比测试结果。从结果上看，在 Vite 进行一些调整后，Turbopack 与之相比的性能优势不足两倍。Vercel 也因为性能测试的结果不够透明而受到一些质疑。

---

在 Heroku 决定停止免费计划后，社区中有人整理了一些值得一试的 Heroku 替代品。名单中的厂商如 render.com、fly.io 和 Netlify 都提供了免费计划，并且在易用性、稳定性上不输 Heroku。Heroku 在调整之后，可能会面临更大的挑战，未来何去何从值得关注。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

