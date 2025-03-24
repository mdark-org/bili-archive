---
title: "[Hacker News 周报] 面向 AI 的编程语言 Mojo、Mozilla 收购新动向、基于 V8 的开源 serverless 平台"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址: https://mailchi.mp/hackernewsletter/650"
tags: []
date: 1683432019
bvid: BV1x24y1T7Tf
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第657期 Hacker News 周报。

### Mojo｜面向 AI 的编程语言
[https://www.modular.com/mojo](https://www.modular.com/mojo)

Mojo 是一个为 AI 开发者设计的编程语言，目标是提供 Python 一样的便利性和 C 语言一样的性能。该语言由 Modular 公司发起，该公司的创始人 Chris Lattner 正是 Swift 语言和 LLVM 项目的发起者，这让大家对 Mojo 有了更多的期待。从项目官网上可以看到，该语言提供了渐进式类型、零成本抽象、所有权、自动优化等高级功能，同时在一些特定场景下可以提供相比原生 Python 上万倍的性能优势。目前项目还处于早期阶段，需要通过申请获得试用资格。Modular 团队也提到 Mojo 最终很有可能开源，但目前还处于闭源快速开发阶段。

---

### Replit 发布大语言模型 replit-code-v1-3b
[https://www.latent.space/p/reza-shabani#details](https://www.latent.space/p/reza-shabani#details)  & [https://huggingface.co/spaces/replit/replit-code-v1-3b-demo](https://huggingface.co/spaces/replit/replit-code-v1-3b-demo)

最近在线编程平台 Replit 公开了他们面向代码的大语言模型 Replit Code V1-3B，借助 Replit 拥有的大量开发者代码数据，该模型在一些性能测试中表现出了超出 OpenAI Codex 模型的成果。目前该模型在 hugging face 上也开放了 demo 空间，感兴趣的读者可以在线体验其代码生成结果。

---

### Fakespot｜Mozilla 收购新动向
[https://www.fakespot.com/](https://www.fakespot.com/)

使用电商购物时，其他购买者的评价是非常重要的参考信息，但各类电商平台上机器人刷出的虚假评价，也会让这些信息不再准确。而在目前 AI 生成愈发成熟的环境下，虚假评价也变得更加难以辨别。Fakespot 希望借助 AI 更精准快速的判定虚假信息，该工具可以从商品评价上过滤掉虚假的结果，目前已经与许多国外电商平台进行了集成。近期 Mozilla 收购了该工具背后的公司，看来 Mozilla 还想在识别互联网中的虚假信息方面更进一步。

---

### lagon｜基于 V8 的开源 serverless 平台
[https://lagon.app/](https://lagon.app/)

在 serverless 领域，容器已不再是唯一的方案。以 Cloudflare Workers 和 Dino Deploy 为首的 serverless 平台，都开始基于 V8 引擎的轻量级隔离单元，实现面向 JavaScript 和 WebAssembly 的 serverless 功能。但与容器领域基于 K8S 丰富的开源 serverless 生态相比，基于 V8 的 serverless 社区稍显沉闷。不过，自上周介绍了 Edge Runtime 项目之后，本周我们又发现了 Lagon 这个项目。Lagon 定位于一个基于 Rust 和 V8 开发的开源 serverless 平台，同时在产品化方面更加完善，支持 CLI 部署，实时日志、定时触发器、统计分析等平台功能。项目目前处于 Alpha 阶段，感兴趣的小伙伴可以持续关注。

---

### Qwik 发布 v1.0 版本
[https://www.builder.io/blog/qwik-v1](https://www.builder.io/blog/qwik-v1)

前端框架 Qwik 发布了 1.0 版本，在这个版本中增强了 TypeScript 支持，引入了新的路由系统，优化了 SSR 性能以及构建工具的性能。Qwik 的目标是构建出更加轻量化的前端项目，并通过与服务端渲染等技术相结合，带来更好的端到端性能。1.0 版本的发布，可以让更多持观望态度的开发者进一步了解这个框架的设计细节。

---

### Frogmouth｜开源命令行 Markdown 浏览器
[https://github.com/Textualize/frogmouth](https://github.com/Textualize/frogmouth)

Frogmouth 是一个开源的命令行 Markdown 浏览器，支持从本地或 URL 加载 Markdown 文件并进行渲染。对于喜欢使用命令行的极客们来说，这又会是一个浏览和编辑文档的利器。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


