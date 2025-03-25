---
title: "[Hacker News 周报] 低代码与 AI 结合；Rust 快速开发框架；Apple 进军 AI"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/680"
tags: []
date: 1702179170
bvid: BV1Ri4y1v7ae
---
### Webstudio｜低代码与 AI 结合的平台
https://webstudio.is/

了解科技资讯，把握行业脉搏。大家好，我是Koala了。欢迎收看第680期Hacker News周报。
Webstudio是一个面向设计师和开发者的低代码平台，希望成为开源版的Webflow。尽管低代码领域的开源项目数不胜数，但Webstudio的代码质量和设计巧思，仍然让人眼前一亮。所有功能中最突出的是样式编辑和UI集成。样式编辑功能中，Webstudio为大量CSS规则提供了可视化编辑能力，使得设计师也能够完成相应调整。UI集成中，Webstudio的实现相当深入，通过多组prompt让AI理解并修改元素去，使AI生成的准确性大幅提升。可见即使是较为成熟的领域，深度思考和开发后还是有可挖掘的空间。

---

### Loco｜Rust 快速开发框架
https://loco.rs/

Loco是一个面向Rust的快速开发框架，专为个人副业和早期创业项目而设计。它包含了从服务端到前端，从数据接入到定时任务全方位的内置组件，可以加速小型团队的早期开发。其中的很多理念也参考了Ruby on Rails的设计，比如约定优于配置，快速迭代等。Loco还通过模块化和可配置化组件设计，支持项目从单体应用逐步扩展到微服务架构过渡。它优化了个人开发者的体验，但必要时也可以平滑地向更大型的团队和项目迁移。

---

### GQL｜Git 查询语言
https://amrdeveloper.github.io/GQL/

如果你正在分析一个大型Git仓库的提交记录，那么GQL可能可以帮助到你。GQL全称Git Query Language，是一个语法与SQL类似的Git文件查询语言。它支持select, len, in等SQL中常见的函数和操作符，可以方便的聚合统计仓库中的commit, 分支和tag等信息。同时它也支持order by, limit, offset等分业排序功能。

---

### Apple 开源 MLX 的数组运算框架，进军 AI
https://github.com/ml-explore/mlx

本周Apple发起了他们在AI领域的攻势。Apple机器学习团队开源了名为MLX的数组运算框架，面向机器学习领域设计，且专为Apple Silicon芯片进行优化。MLX借鉴了Numpy和Pytorch等框架的API设计，提供了统一的Python和C++接口，并且引入惰性计算等机制进一步优化性能。它也支持通过组合函数转换，自动实现微分和图优化等高级功能。文档和示例项目中也展示了包括Transformer和Stable Diffusion在内的各种实践。从参与主体上看，看起来Apple对AI有更大的野心，希望从硬件层面开始全面参与。

---

### MagicAnimate｜基于图片和动作序列的动画生成模型
https://github.com/magic-research/magic-animate 以及 https://huggingface.co/spaces/zcxu-eric/magicanimate

新加坡国立大学和字节跳动一同发布的MagicAnimate，是一种人像动画生成系统。基于Diffusion模型实现了高质量的视频预测及生成，通过输入一张图片和一组姿态序列，就能生成将二者结合的连贯动画。该系统包含了姿态编码器，外观编码器和时序注意力模块三个组件。姿态编码可以预测未来的人体姿态，外观编码负责生成视觉逼真和temporally coherence的图像，时序注意力的模块则融合二者的输出生成动画。

---

### Google 发布Gemini 多模态 AI 模型
https://deepmind.google/technologies/gemini/

本周Google终于发布了名为Gemini的多模态AI模型。该模型也被视为Google在今年AI热潮中逆袭的最后希望。从发布会展示的操作视频中，Gemini确实演示了一系列流畅且神奇的人机交互。但在之后的几天中，陆续出现的关于Gemini研究报告数据有失公允，操作视频存在剪辑优化，核心功能没有与GPT4拉开差距等负面信息，并且Gemini家族中最强的Gemini Ultra也没有实际开发使用。不禁让人担心Google在AI领域是否遇到了前所未有的挑战。

以上就是本期Hacker News周报摘要，谢谢您的收看。

