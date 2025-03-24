---
title: "[Hacker News 周报] 简单有趣的 serverless 平台；自动化数据探索工具；Google 开源文件同步工具"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/634"
tags: []
date: 1673756808
bvid: BV1784y1h7eq
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第 634 期 Hacker News 周报。

<br>
<br>

### val.town｜简单有趣的 serverless 平台
[https://www.val.town/](https://www.val.town/)

val.town 是一个用于编写、运行和部署脚本的网站。用户使用 JavaScript 或 TypeScript 编写函数之后，val.town 就能为其生成对应的 API 服务。除了基本的编程能力之外，val.town 还内置了定时执行、发送邮件等常用工具。另一个有意思的设计是不同的脚本之间可以轻松的互相引用，从而编排出更复杂的功能。在 serverless 服务越来越强大的今天，val.town 再次做出创新，向我们展示了更加简单灵活的 serverless 使用方法。

<br>
<br>

---
### CDC File Transfer｜ Google 开源文件同步工具
[https://github.com/google/cdc-file-transfer](https://github.com/google/cdc-file-transfer)

CDC File Transfer 是一个用于从 Windows 向 Linux 流式同步文件的工具。这一工具是从 Google 的云游戏项目 Stadia 中诞生的，用于帮助游戏开发者向 Linux 主机拷贝游戏文件。与 Linux 中类似的工具 Rsync 相比，CDC File Transfer 使用了 Fast CDC 算法，切分文件，而不是按固定长度切分。这一算法会根据文件内容计算切分的边界，使得后续的匹配计算更快。

<br>
<br>

---
### just｜ 使用 Rust 开发的命令行工具
[https://github.com/casey/just](https://github.com/casey/just)

Just 是一个使用 Rust 开发的便捷命令行工具，用于帮助你管理项目中的常用命令。Just 的语法和配置文件设计都与常用的构建工具 Make 游戏相似，但与 Make 相比，Just 并不包含复杂的构建功能，这使得它更加简单轻便。此外，它还提供了自动导入环境变量，支持多种语言，列出所有指令及说明等功能。

<br>
<br>

---
### Rath｜自动化数据探索工具
[https://github.com/Kanaries/rath](https://github.com/Kanaries/rath) & [https://github.com/Kanaries/graphic-walker](https://github.com/Kanaries/graphic-walker)

Rath 是由 Kanaries 开发的自动化数据探索与可视化工具。面对充分的数据，使用者往往需要特定的知识才能选择正确的可视化图表，展示数据中的关键信息，而 Rath 的目标是基于模式识别、数据洞察等自动化过程，推荐出适合的多维数据可视化结果。除了开箱即用的 Rath 项目之外，该公司还将核心的可视化组件 Graphic Walkers 独立开源，支持更灵活的嵌入使用方法。

<br>
<br>

---
### pinggy｜将本地的服务对公网提供访问工具
[https://pinggy.io/](https://pinggy.io/)

将本地的服务对公网提供访问是一种常见的需求，Ngrok 等工具都可以完成此类工作，但是这类工具的易用性还有所欠缺。Pinggy 是这个领域的新产品，在不登录和下载客户端的情况下，通过单条 SSH 命令即可向本地建立 HTTP、TCP 或 TLS 通道，对于防火墙和 NAT 等场景同样可用。

<br>
<br>

### State of JS 发布年度开发者问卷结果
[https://2022.stateofjs.com/](https://2022.stateofjs.com/)

在新一年的开始，年度 JS 开发者问卷 State of JS 有如期发布了。与往年类似，该问卷就语言特性、前端工具库的使用情况、行业分布等信息进行的统计和分析。对 JS 感兴趣的小伙伴们可以进行查看。

<br>
<br>

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


