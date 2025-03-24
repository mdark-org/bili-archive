---
title: "[科技周报] 一张照片替换视频人脸；Go 技术负责人转投 AI；Nodejs 中调用 Rust"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/711"
tags: []
date: 1723349080
bvid: BV1cH4y1c794
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看科技周报。

### Deep-Live-Cam｜ 开源的一键视频换脸项目
https://github.com/hacksider/Deep-Live-Cam

Deep Live Cam这个开源项目可以实现实时换脸或一键视频换脸。令人震撼的是，它只需要一张目标人物的照片，就能完成替换过程。开发者强调这个项目是为了帮助艺术家创作，比如给自定义角色添加动画等。不过他们也意识到可能存在的滥用风险，因此内置了检测机制来防止应用于不当内容，并要求用户使用时需遵守相关法律和伦理规范。Koala认为第一次看到Deep Live Cam这样的项目时，大家可能都会感到恐慌。但仔细想来，以开源项目的形式发布这样的项目，也可以增加大家的防范意识，以及推进换脸视频识别等技术的发展。总的来说，利大于弊。

---

### Outlines｜ 开源的结构化文本生成库
https://github.com/outlines-dev/outlines

Outlines是一个开源的结构化文本生成库。它支持多种AI模型集成，可以根据JSON schema或pydantic模型生成符合规范的JSON数据，可以与Python的循环、条件语句和自定义函数结合使用，同时提供生成结果的缓存功能，以及支持批量推理，在实际应用时进一步提升性能。基于一系列内置的优化手段，Outlines是一些开源模型的结构化数据提取能力，能够媲美顶级商业模型。Koala认为Outlines不仅在开源社区中获得了不少用户，其设计也被OpenAI参考，并在最新发布的严格JSON模式API中加以应用。

---

### Plunk｜ 开源的电子邮件平台
https://www.useplunk.com/

Plunk是一个开源的电子邮件平台，它将营销邮件、交易邮件和广播邮件整合到一个完整的解决方案中，使用户不再需要使用不同的工具来处理各种类型的邮件。除了基础的邮件发送之外，Plunk还内置了强大的自动化工作流和邮件设计工具。用户们称其界面直观，设置简单，自动化程度高。作为一个开源项目，Plunk天然支持自部署的同时，也提供了SaaS服务的模式，并称其价格比同类厂商便宜五倍以上。

---

### Neon｜在 Node.js 中调用 Rust
https://neon-rs.dev/

如果你想在Node.js项目中调用Rust来编写高性能的原始模块，大幅提升性能，那么Neon是一个值得关注的项目。它提供了简单的工具链，简化构建过程，不需要复杂的构建脚本和系统依赖。开发者只需要安装Node.js或Rust即可开始使用。Neon的价值包括内存安全性和更简单的并行计算能力。得益于Rust编译器的保证，如果Neon模块能够编译通过，就可确保其内存安全。Neon也让开发者能够安全地运行多线程代码，不用担心数据竞争问题，这对于需要并行处理的应用来说非常有价值。

---

### Approf｜ macOS 原生应用
https://github.com/moderato-app/approf

Approve是一款macOS原生应用，专门用于打开和分析proof性能分析文件，它让你不用再在命令行中折腾proof命令，直接通过图形界面就能轻松查看性能数据。Approve支持拖拽文件打开，对比不同的proof文件，界面支持深色和浅色模式，还可以保存绘画以便日后使用。Koala认为作为一个开发者工具，Approve的设计理念很不错，把常用但繁琐的命令行操作搬到了GUI中，大大提高了效率。

---

### Go 技术负责人转投 AI
https://go.googlesource.com/oscar/+/refs/heads/master/README.md 及 https://groups.google.com/g/golang-dev/c/0OqBkS2RzWw/m/GzWvX5u6AQAJ

Go语言联合创始人Russ Cox宣布将不再担任Go语言的技术负责人的职责，不过他不会离开Go语言，而是将更多时间投入到Google发起的Oscar项目中。Oscar是一个通过创建自动化助手或智能代理来改善开源软件开发的项目。它的目标是减轻开源项目维护中的繁琐工作，无论是大型还是小型项目。目前Oscar还处于实验阶段，但它的第一个原型机器人已经在Go语言的issue跟踪器中有了不少成功案例。Oscar的一个亮点是可以快速检索并提供相关的项目上下文，这不仅帮助了提问者，也为项目维护者提供了宝贵信息。另外，它能够及时回应新提交的issue，使问题报告者还在现实就能获取更多细节，这大大提高了沟通效率。

---

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。


