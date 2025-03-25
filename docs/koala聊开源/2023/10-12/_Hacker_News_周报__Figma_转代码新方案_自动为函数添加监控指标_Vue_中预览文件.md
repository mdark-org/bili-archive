---
title: "[Hacker News 周报] Figma 转代码新方案；自动为函数添加监控指标；Vue 中预览文件"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：http://www.daemonology.net/hn-daily/"
tags: []
date: 1697345556
bvid: BV1qh4y1z7yo
---
了解科技资讯，把握行业脉搏。大家好，我是Koala了。欢迎收看第672A期Hacker News周报。
本周Builder.io介绍了他们的AI服务Visual Copilot，可实现更好的Figma到代码生成能力。Visual Copilot与之前的视觉稿到代码生成AI的主要区别在于，Builder.io从头开始训练了专用的AI模型。Builder AI模型首先将Figma前端设计结构转换为JSON描述的代码嵌套结构。Builder.io开发的Mitosis则将JSON进一步生成UI代码。在这之后，另一个微调过的大语言模型会将生成的UI代码进行优化，使它更符合特定的编码规范或用户需求。Visual Copilot的实现使得其生成的代码更易定制，也可以在已有的代码库中更好的集成。

---

近期Payload基于Node.js和TypeScript的开源headless CMS发布了2.0版本。尽管CMS方案层出不穷，但是Payload认为自己在易用性和灵活性上独树一致。2.0版本中也加入了Postgress数据库支持，使用Vite作为构建工具，新的管理界面，实时预览等新功能。该项目的官网设计也十分美观，看来想要在CMS这个拥挤的领域崭露头角，必须面面俱到。

---

在Web中预览Word、Excel、PDF等文件是较为常见的需求。Vue Office这个项目提供了一站式文件预览方案。支持使用网络地址预览和上传文件预览。希望学习Vue库开发和这类文件在JavaScript中的处理方式的小伙伴可以关注。

---

Autometrics是一个检测和观测性工作的微型框架。通过集成它的SDK可以快速的为任意函数添加必要的监控指标。从官网上可以看到Rust、TypeScript、Python和Go的函数自动监控示例。该项目还提供了CLI，使得开发者可以在本地快速预览指标，确认无误后，再交付到生产环境中。

---

在使用大模型时，同样需要一些可观测性指标，监控AI模型的稳定性和性能。OpenLLMetry是一种基于流行的OpenTelemetry标准构建的扩展插件，包含适用于各类LLM程序和矢量数据库的监控数据。由于采用了OpenTelemetry标准，所以监控指标可以快速接入DataDog、New Relic等监控平台中。

---

Cloud Computing Patterns是一种基于云计算提供的服务设计的开发最佳实践总结。文档中整理了云计算基础概念，云计算所提供的服务功能，云应用架构，应用管理，复合云应用几大章节。适合在需要基于云计算进行架构时进行学习和参考。
以上就是本期Hacker News周报摘要，谢谢您的收看。


