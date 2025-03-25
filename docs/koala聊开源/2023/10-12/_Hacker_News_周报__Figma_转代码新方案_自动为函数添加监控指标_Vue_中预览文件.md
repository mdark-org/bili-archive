---
title: "[Hacker News 周报] Figma 转代码新方案；自动为函数添加监控指标；Vue 中预览文件"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：http://www.daemonology.net/hn-daily/"
tags: []
date: 1697345556
bvid: BV1qh4y1z7yo
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala 了，欢迎收看第672A期 Hacker News 周报。

---
### Visual Copilot｜Figma 转代码新方案
[https://www.builder.io/blog/figma-to-code-visual-copilot](https://www.builder.io/blog/figma-to-code-visual-copilot)

本周 Builder.io 介绍了他们的 AI 服务 Visual Copilot，可实现更好的 Figma 到代码生成能力。
Visual Copilot 与之前的世界搞到代码生成 AI 的主要区别在于，Builder.io 从头开始训练了专用的 AI 模型。
Builder AI 模型首先将 Figma 前端设计结构转化为 Jason 描述的代码嵌套结构。
Builder.io 开发的 mitosis 则将 Jason 进一步生成为 UI 代码，在这之后另一个微调过的大语言模型，会将生成的 UI 代码进行优化，使它更符合特定的编程规范或用户需求。
Visual Copilot 的实现，使得其生成的代码可易定制，也可以在已有的代码库中更好的集成。

---
### payload 发布了 2.0 版本
[https://payloadcms.com/blog/payload-2-0](https://payloadcms.com/blog/payload-2-0)

近期 payload 基于 Node.js 和 Typescript 的开源 headless CMS 发布了2.0版本。
尽管 CMS 方案层出不穷，但是 payload 认为自己在易用性和灵活性上独树一致。
2.0 版本中也加入了 Postgres 数据库支持，使用 Bit 作为构建工具，新的管理界面，实时预览等新功能。
该项目的官网设计也十分美观，看来想要在 CMS 这个拥挤的领域崭露头角，必须面面俱到。

---
### vue-office｜Vue 中预览文件
[https://github.com/501351981/vue-office](https://github.com/501351981/vue-office)

在 web 中预览 Word、Excel、PDF 等文件是较为常见的需求，vue-office 这个项目提供了一站式文件预览方案，支持使用网络地址预览和上传文件预览。
希望学习 vue 库开发和这类文件在 JavaScript 中的处理方式的小伙伴可以关注。

---
### Autometrics｜自动为函数添加监控指标
[https://autometrics.dev/](https://autometrics.dev/)

Autometrics 是一个检测和观测性工作的微型框架，通过集成它的 SDK 可以快速的为任意函数添加必要的监控指标。
从官网中可以看到 Rust，Typescript，Python 和 Go 的函数自动监控示例。
该项目还提供了 CLI，使得开发者可以在本地快速预览指标，确认无误后在交付到生产环境中。

---
### OpenLLMetry｜基于 OpenTelemetry 标准构建的扩展插件
[https://github.com/traceloop/openllmetry](https://github.com/traceloop/openllmetry)

在使用大模型时，同样需要一些可观测性指标，监控 AI 模型的稳定性和性能。
OpenLLMetry 是一种基于流行的 OpenTelemetry 标准构建的扩展插件，包含适用于各类 LM 程序和矢量数据库的监控数据。
由于采用了 OpenTelemetry 标准，所以监控指标可以快速接入 DataDog，New Relic 等监控平台中。

---
### Cloud Computing Patterns｜一组基于云计算服务设计的开发最佳实践总结
[https://www.cloudcomputingpatterns.org/](https://www.cloudcomputingpatterns.org/)


Cloud Computing Patterns 是一种基于云计算提供的服务设计的开发最佳实践总结。
本档中增了云计算基础概念，云计算所提供的服务功能，云应用架构，应用管理，复合云应用几大章节，适合在需要基于云计算进行架构时进行学习的参考。

--- 

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


