---
title: "[Hacker News 周报] Airdrop 跨平台开源替代品；快速分析优化容器镜像；AI 生成 Selenium 脚本"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/673"
tags: []
date: 1698193800
bvid: BV1mu4y1n7hc
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收听第673期 Hacker News 周报。

在越来越多的应用容器化的时代，容器镜像的体积是非常值得优化的。Dive 是一款用来探索和分析 Docker 镜像内容的开源命令行工具。它可以清晰地展示镜像中的每一层文件变更，直观地看到镜像里的新增、修改和删除的文件，并给出镜像优化建议。除了快速定位镜像中的体积来源，并且分析裁剪的方式，Dive 也十分适合集成在 CI/CD 流程中，持续观察并校验镜像体积是否发生了预期之外的增长。
---
### LocalSend｜Airdrop 跨平台开源替代品
[https://github.com/localsend/localsend](https://github.com/localsend/localsend)

LocalSend 是一款开源的跨平台应用，使用局域网在设备之间进行快速安全的文件和消息传输，无需互联网连接。你可以将它视为 Airdrop 的开源跨平台替代品。它不依赖任何云服务，开箱即用，支持 HTTPS 和 TLS 进行端到端加密。LocalSend 基于 Flutter 开发，实际既可以原生应用的形式运行在所有主流平台上，也可以通过 Web 直接使用。
---
### Formbricks｜开源用户体验管理和调研平台
[https://github.com/formbricks/formbricks](https://github.com/formbricks/formbricks)

Formbricks 是一款开源的用户体验管理和调研平台，可用于以用户反馈或问卷的形式收集调研结果，并在仪表盘中统一查看、比较和分析。支持团队协作编辑，并且可以与 Slack、Posthog、N8N 等常用工作流集成。该码本身开源透明，支持容器化部署，同时也有商业化的云版本供选择。
---
### Wandb｜机器学习一站式平台
[https://github.com/wandb/wandb](https://github.com/wandb/wandb)

WB 是机器学习团队不可或缺的开源工具。它可以跟踪和组织训练实验的元数据，评估指标、参数、代码版本、数据集和模型等。它与主流机器学习框架进行了无缝集成，一键即可启用对应的训练实验跟踪功能。在可视化面板中可以比较不同实验的训练曲线、指标和参数，并且版本化管理数据集和模型物料。该项目支持私有化部署和云服务两种使用形态。
---
### Reflect｜ 一个用于构建多人网页应用的同步引擎
[https://reflect.net/](https://reflect.net/)

实时同步服务 Replaycash 背后的团队发布了他们的新产品 Reflect。Reflect 是一个用于构建多人网页应用的同步引擎，它提供的高性能的实时数据同步和协作功能，通过每秒 120 帧的同步频率提供流畅的体验，自动处理数据冲突，确保一致性。尽管该产品以闭源商业产品的形式发布，但其产品形态还是有参考借鉴意义。
---
### AI 生成 selenium 脚本
[https://www.autotab.com/](https://www.autotab.com/)

浏览器插件 Autotype 增加探索 AI 结合 Selenium 自动化测试的可能性，通过 AI 辅助加速自动化测试脚本的编写过程。该插件会追踪用户在浏览器中进行的交互操作，并使用 AI 生成更易维护的 Selenium 代码，再通过二次比较 AI 代码的执行结果，缓解 AI 导致的幻觉问题。该项目还处于非常早期的探索阶段，但从评论中可以看到，对这一方向感兴趣的人不在少数。
---
### Speakeasy｜一套 API 端到端工具
[https://www.speakeasyapi.dev/](https://www.speakeasyapi.dev/)

Speak Easy 是一套 API 端到端工具，基于 API 文档生成多种编程语言的 SDK、Terraform Provider 和 API 文档。对于许多平台类产品来说，提供开放 API 是必要的工作，但在 API 之上封装 SDK 等工作也是常见的用户需求，但通常意味着极大的工作量。Speak Easy 的目标是解决这一问题，通过预设的工作流，实现从 API 到多重产物的自动生成，降低维护成本。
---
### 《Koala聊开源》频道 App 添加列表页功能
[https://koala-oss.app/](https://koala-oss.app/)

本周 Koala 聊开源频道 App 更新了大家呼声较高的列表页功能，可以查看和搜索所有往期介绍过的项目。欢迎大家体验反馈。

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

