---
title: "[Hacker News 周报] Git 终端 UI；开源短链接服务；AI 作画图库"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/621"
tags: []
date: 1664065800
bvid: BV1Je4y1r7B4
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看第621期Hacker News周报。首先介绍一个用Rust开发的Git命令行工具GitUI。Git是研发同学日常离不开的工具，Git本身的命令行功能比较简洁，当需要一些复杂功能时，就需要在网页端，如GitHub或GitLab上去使用。GitUI就是一个在命令行里的完整的GUI框架，可以让你在命令行里完成各类操作，而不需要在网页和命令行之间切换。

---

### GitUI｜Git 终端 UI
[https://github.com/extrawurst/gitui](https://github.com/extrawurst/gitui)

---

Dub是一个开源的短链接生成器，并且内置了分析功能。通常网页都是以URL链接的形式对外发布，因为比较长，在外部越来越常用的今天，可能不利于记忆和传播。短链接生成器就是来解决这一问题的。Dub定位于开源，并且提供分析能力，可以作为Bitly这样的商业化服务的替代品。

---

### Dub｜开源短链接服务
[https://dub.sh/](https://dub.sh/)

---

WunderBase定位于Serverless GraphQL数据库。根据它的描述，WunderBase构建在微虚拟机Firecracker，数据库SQLite和数据库的ORM框架Prisma之上。在这个技术方案下，它可以提供比较快的启动速度，以及相当不错的每秒读写速度。

---

### WunderBase｜ serverless GraphQL 数据库
[https://github.com/wundergraph/wunderbase](https://github.com/wundergraph/wunderbase)

---

Rocketry是一个现代化的Python调度框架，与已有项目相比，它认为自己更加简单和轻量，并且可以拓展。在Rocketry的帮助下，你可以更加语义化的描述你的各种调度任务，执行的实机以及执行的规则。

---

### Rocketry｜现代化的 Python 调度框架
[https://github.com/Miksus/rocketry](https://github.com/Miksus/rocketry)

---

眼下使用AI创作绘画成为潮流。Krea在他的网站上提供了1000万张Stable Diffusion的生成图片。点击每张图片可以看到输入的提示语，以及生成的同类图片。Krea也对这些图片进行了分类，如果你想获取一些插画或艺术图案，可以在Krea网站上下载。

---

### KREA｜AI 作画图库
[https://www.krea.ai/](https://www.krea.ai/)

---

Whisper是OpenAI刚刚开源的语音识别系统，它能够达到人类级别的健壮性和精确程度，特别是对英文的识别。在发布的博客中，他也展示了一段语音示例，并对技术细节进行了描述。这种开源的工业级别AI模型的出现，使大家使用AI的门槛进一步降低。

---

### Whisper｜ OpenAI 开源的语音识别系统
[https://openai.com/blog/whisper](https://openai.com/blog/whisper)

---

LiteFS是FlyIO开发开源的新项目。之前已经介绍过FlyIO在SQLite数据库上的重度投入。这一次他们介绍了在SQLite方向最新的研究成果。LiteFS是构建在SQLite之上的分布式文件存储系统。在这篇博客中，他们介绍了与其他数据库相比，SQLite的优势和劣势，以及LiteFS与之前开源的LiveStream之间的异同。从一系列举动看，FlyIO在Serverless场景下使用SQLite的目标是非常清晰的。他们能达到什么样的结果，我们可以持续关注。

---

### fly.io 开源新项目 LiteFS
[https://fly.io/blog/introducing-litefs](https://fly.io/blog/introducing-litefs)

---

最后是关于微软云服务Azure CTO Mark Russinovich最近发布的一篇推文。他表示，为了带来更好的安全性和可靠性，所有新项目都应该使用Rust的开发，而不是C和C++。这篇推文的用语比较偏激，引起了舆论的关注。InfoQ中国对此有一篇非常深入的报道，介绍了Mark的过往经历，以及与他观点相关的技术背景。对细节感兴趣的同学可以去阅读InfoQ的这篇文章。

---

### Azure CTO Mark Russinovich 发推引发热议
[https://twitter.com/markrussinovich/status/1571995117233504257](https://twitter.com/markrussinovich/status/1571995117233504257)

---

以上就是本期Hacker News周报摘要，谢谢您的收看。


