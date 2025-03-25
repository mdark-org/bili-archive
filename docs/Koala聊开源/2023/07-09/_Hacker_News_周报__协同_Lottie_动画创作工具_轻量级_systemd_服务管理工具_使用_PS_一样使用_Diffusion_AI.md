---
title: "[Hacker News 周报] 协同 Lottie 动画创作工具；轻量级 systemd 服务管理工具；使用 PS 一样使用 Diffusion AI"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/665"
tags: []
date: 1692521079
bvid: BV1Tz4y1u7VR
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第665期 Hacker News 周报。

---

### LottieLab｜协同 Lottie 动画创作工具
https://www.lottielab.com/

LottieLab 是一个在线编辑 Lottie 动画的创意工具，支持从 Figma 等设计工具导入资源或从头开始设计，提供强大的缓动控制，从而实现自然流畅的动画。所有设计操作均支持实时预览和多人协作，提供更强的协作协同设计能力。最终导出的 Lottie 格式动画可以在 Web 和原生 App 中使用。

---

### servicer｜轻量级 systemd 服务管理工具
https://servicer.dev/

Servicer 是一个用 Rust 编写的轻量级命令行工具，用于在 systemd 系统上简化服务管理。它提供了一个类似 PM2 的易用 API，屏蔽了 systemd 的复杂性，可以轻松创建、控制和管理系统服务。主要功能包括一键创建服务，查看所有服务状态，查看特定服务的日志输出，以及停止、禁用和删除某个服务。Servicer 本身不会运行额外服务，而是在 systemd 之上进行封装，通过创建 service 文件的方式管理服务。

---

### gRPCurl｜和 gRPC 服务器进行交互的 CLI 工具
https://github.com/fullstorydev/grpcurl

gRPCurl 是一个 CLI 工具，可以像 curl 那样和 gRPC 服务器进行交互，它支持各种 RPC 方法，包括流式方法。作为一个 CLI 工具，gRPCurl 可以从标准输入中读取请求体数据，将 JSON 格式的请求转化为 protobuf 二进制格式。除了基础的请求收发之外，它还能够列出服务端的所有服务和方法，以及输出服务元素的详细信息及其 protobuf 定义。

---

### Opendream｜像使用 Photoshop 一样使用 Diffusion AI
https://github.com/varunshenoy/opendream

OpenDream 是一个开源的基于 Web 的 Diffusion 图像生成工具。与其他已有的 Diffusion UI 项目相比，OpenDream 实现了与 Photoshop 类似的图层功能。用户可以多次尝试生成新的内容，而不覆盖之前已完成的部分。这对于不易控制的 AI 生成流程来说，可以显出提升效率。此外，OpenDream 也提供了扩展机制，使其可以集成 Dalle 等其他模型。

---

### Retake｜PostgreSQL 向量数据库解决方案
https://www.getretake.com/

使用向量数据库结合 LLM 开发应用是目前主流的 LLM 用法。之前我们也介绍过 PGVector 等基于 Postgres SQL 的向量数据库方法。Retake 则是将基于 Postgres SQL 的向量数据库开发流程进一步简化。它使用基于逻辑复制的 CDC 技术，保证向量索引及时同步，避免开发者自行维护复杂的索引重建工作，并提供 Python 和 TypeScript 的搜索 SDK，提供基于关键词和向量语义的混合搜索能力。

---

### Logto｜Auth0 的开源替代品
https://github.com/logto-io/logto

在安全越来越重要的今天，每个应用都应该重视自己的认证和授权相关的技术方案。Logto 是一个开源的 Auth0 替代品，基于 OIDC 实现认证和基于角色的授权，提供无密码登录和多种登录方式。在客户端也有可定制的 UI 组件，以及多种语言的 SDK 用于快速集成。在 Logto 后台，管理员也可以通过用户管理、审计日志等企业级功能更好的进行管理。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

