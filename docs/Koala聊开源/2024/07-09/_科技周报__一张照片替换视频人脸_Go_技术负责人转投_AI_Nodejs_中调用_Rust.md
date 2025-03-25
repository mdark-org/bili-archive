---
title: "[科技周报] 一张照片替换视频人脸；Go 技术负责人转投 AI；Nodejs 中调用 Rust"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/711"
tags: []
date: 1723349080
bvid: BV1cH4y1c794
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看科技周报。

---

### Deep Live Cam
[https://github.com/hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)
Deep Live Cam 这个开源项目可以实现实时换脸或一键视频换脸，更震撼的是它只需要一张目标人物的照片，就能完成替换过程。开发者强调这个项目是为了帮助艺术家创作，比如给自定义角色添加动画等。不过他们也意识到可能存在的滥用风险，因此内置了检测机制来防止应用于不当内容，并要求用户使用时需遵守相关法律和伦理规范。考拉认为第一次看到 Deep Live Cam 这样的项目时，大家可能都会感到恐慌，但仔细想来，以开源项目的形式发布这样的项目，也可以增加大家的防范意识，以及推进换脸视频识别等技术的发展，总的来说利大于弊。

---

### Outlines
[https://github.com/outlines-dev/outlines](https://github.com/outlines-dev/outlines)
Outlines 是一个开源的结构化文本生成库，支持多种 AI 模型集成，可以根据 JSON schema 或 Pydantic 模型生成符合规范的 JSON 数据，可以与 Python 的循环、条件语句和自定义函数结合使用，同时提供生成结果的缓存功能，以及支持批量推理，在实际应用时进一步提升性能。基于一系列内置的优化手段，Outlines 是在一些开源模型的结构化数据提取能力，能够媲美顶级商业模型。考拉认为 Outlines 不仅在开源社区中获得了不少用户，其设计也被 OpenAI 参考，并在最新发布的严格 JSON 模式 API 中加以应用。

---

### Plunk
[https://www.useplunk.com/](https://www.useplunk.com/)
Plunk 是一个开源的电子邮件平台，它将营销邮件、交易邮件和广播邮件整合到一个完整的解决方案中，使用户不再需要使用不同的工具来处理不同类型的邮件。除了基础的邮件发送之外，Plunk 还内置了强大的自动化工作流和邮件设计工具，用户们称其界面直观、设置简单、自动化程度高。作为一个开源项目，Plunk 天然支持自部署的同时，也提供了 SaaS 服务的模式，并称其价格比同类厂商便宜五倍以上。

---

### Neon
[https://neon-rs.dev/](https://neon-rs.dev/)
如果你想在 Node.js 项目中调用 Rust 编写高性能的原生模块，大幅提升性能，那么 Neon 是一个值得关注的项目。它提供了简单的工具链，简化构建过程，不需要复杂的构建脚本和系统依赖。开发者只需要安装 Node.js 和 Rust 即可开始使用。Neon 的价值包括内存安全性和更简单的并行计算能力。得益于 Rust 编译器的保证，如果 Neon 模块能够编译通过，就可确保其内存安全。Neon 也让开发者能够安全地运行多线程代码，不用担心数据竞争问题，这对于需要并行处理的应用来说非常有价值。

---

### Approf
[https://github.com/moderato-app/approf](https://github.com/moderato-app/approf)
Approve 是一款 macOS 原生应用，专门用于打开和分析 proof 性能分析文件，它让你不用再在命令行中折腾 proof 命令，直接通过图形界面就能轻松查看性能数据。Approve 支持拖拽文件打开，对比不同的 proof 文件，界面支持深色和浅色模式，还可以保存绘画以便日后使用。考拉认为作为一个开发者工具，Approve 的设计理念很不错，把常用但繁琐的命令行操作搬到了 GUI 中，大大提高了效率。

---

### Go 技术负责人转投 AI
[https://go.googlesource.com/oscar/+/refs/heads/master/README.md](https://go.googlesource.com/oscar/+/refs/heads/master/README.md) 及 [https://groups.google.com/g/golang-dev/c/0OqBkS2RzWw/m/GzWvX5u6AQAJ](https://groups.google.com/g/golang-dev/c/0OqBkS2RzWw/m/GzWvX5u6AQAJ)
Go 语言联合创始人 Russ Cox 宣布将不再担任 Go 语言的技术负责人的职责，不过他不会离开 Go 语言，而是将更多时间投入到 Google 发起的 Oscar 项目中。Oscar 是一个通过创建自动化助手或智能代理来改善开源软件开发的项目，它的目的是减轻开源项目维护中的繁琐工作，无论是大型还是小型项目。目前 Oscar 还处于实验阶段，但它的第一个原型机器人已经在 Go 语言的 Issue 跟踪器中有了不少成功案例。Oscar 的一个亮点是可以快速检索并提供相关的项目上下文，这不仅帮助了提问者，也为项目维护者提供了宝贵信息。另外，它能够及时回应新提交的 Issue，使问题报告者还在现实就能获取更多细节，这大大提高了沟通效率。

---

以上就是本期科技周报的全部内容，谢谢您的收看，如果内容对您有帮助，请一键三连支持我们。

