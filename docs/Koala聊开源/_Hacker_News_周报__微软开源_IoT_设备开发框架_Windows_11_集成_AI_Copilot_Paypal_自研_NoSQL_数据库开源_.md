---
title: "[Hacker News 周报] 微软开源 IoT 设备开发框架；Windows 11 集成 AI Copilot；Paypal 自研 NoSQL 数据库开源；"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址: https://mailchi.mp/hackernewsletter/653"
tags: []
date: 1685247436
bvid: BV1ek4y1W7eg
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第653期 Hacker News 周报。

本周微软发布了基于 TypeScript 的 IoT 编程框架 DeviceScript。尽管该框架基于 TypeScript 编写脚本，但并不包含完整的 JS 运行时，而是通过一个字节码解释器实现了在低资源环境下的运行能力。

除了基础的脚本开发能力，该框架还将硬件抽象为服务，并且基于 VS Code 编辑器提供了较为完整的调试、模拟以及测试功能。该项目是否会成为微软在开源领域又一创新方向？大家可以在评论区给出自己的答案。

---
### DeviceScript｜微软开源 IoT 设备开发框架
[https://github.com/microsoft/devicescript](https://github.com/microsoft/devicescript)

不同编程语言都逐渐拥有了自己的代码 lint 工具，但除了代码内容之外，很多团队通常也希望在协同开发的过程中对文件名保持统一规范。ls-lint 就是一个基于 Go 开发的文件目录与文件名 lint 工具，支持自定义规则，帮助团队在文件结构上达成一致，并在 CI 系统中持续检测。

---
### ls-lint｜基于 Go 的文件目录与文件名 lint 工具
[https://github.com/loeffel-io/ls-lint](https://github.com/loeffel-io/ls-lint)

之前我们介绍过 SQLChat 产品，本周开源社区也出现了相似的项目 DB-GPT。该项目基于 Viconia 本地运行 LLM，支持连接本地的各类 SQL 数据库，并且可以扩展自己的知识库，最终形成一套完整的本地数据库 AI 解决方案。通过所有组件的本地化，该项目避免了数据库敏感内容不能发送给各类商用 AI API 的限制，使数据库 AI 这一概念更易尝试和落地。

---
### DB-GPT｜SQLChat 的开源替代品
[https://github.com/eosphoros-ai/DB-GPT](https://github.com/eosphoros-ai/DB-GPT)

Linux 以下命令行工具，如 CP、DD、Tar、Gzip，在处理大文件时可能需要耗费很长的时间。这类工具缺少原生的进度条支持，会让使用者难以判断指令的执行情况，以及还需要多长等待时间。Progress 是一个基于 C 编写的小巧工具，它对上述一系列命令实现了进度的统计、耗时预估等功能，在一些场景下会是一个十分有用的工具。

---
### progress｜查看 Linux 命令执行进度
[https://github.com/X-Qin/tqdm](https://github.com/X-Qin/tqdm)

近期 Paypal 开源了他们的 NoSQL 数据库 JunoDB。据描述，该数据库在 Paypal 内部每天支持 3500 亿请求，并保证平均每月少于 3 秒的服务中断时间。除了代码开源之外，该项目的工程师还编写了一篇深度文章，介绍 JunoDB 的架构以及 Paypal 在开发过程中的取舍。

---
### Paypal 开源数据库 JunoDB 并发表介绍博客
[https://github.com/paypal/junodb](https://github.com/paypal/junodb)

本周 AI 小结包括：

1. 微软发布 Windows 11 AI Copilot，将 AI 能力推向更多 Windows 用户，继续领跑 AI 大战。

2. 与此同时，微软与其投资公司的深度合作还在继续。OpenAI 开始使用 Bing 搜索引擎作为浏览网页的默认方式，GitHub Copilot 也在 Windows Terminal 中得到了集成。

3. Adobe 终于开始为 Photoshop 增加 AI 能力，名为 Generative Field 的新功能，可以支持用户通过自然语言指导 Photoshop 修改图片。

4. Google Bard 模型开始在输出结果中包含图片，以提供更准确直观的答案。

---
### 本周 AI 小结
Windows 11 集成 AI Copilot

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

