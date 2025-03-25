---
title: "[科技周报] 浏览器中的 Postgres 数据库; Next.js + Tailwind CSS 博客模版; X.AI 发布 Grok 2"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/712"
tags: []
date: 1723953793
bvid: BV1aH4y1c7G3
---
了解科技资讯，把握行业脉搏。大家好，我是Koala，欢迎收看科技周报。

---

### postgres.new｜浏览器中的 Postgres 数据库
https://supabase.com/blog/postgres-new
想象一下，你打开浏览器，立刻就能使用一个完整的Postgres数据库，还配有AI助手，这就是postgres.new带来的全新体验，它让你可以在浏览器中瞬间创建无限多个Postgres数据库，而且每个数据库都配备了一个AI助手。Koala认为，基于我们之前介绍过的PG Light实现，postgres.new集成了GPT4模型。目前Supabase和Electric SQL还在研究，如何将PG Light者和Transform JS集成到这一方案中，让使用者可以完全在浏览器内实现语义搜索和等能力。

---

### Teable：将 Postgres 数据库变为 Airtable
https://teable.io/
Teable是一个开源的AirTable替代品，参考AirTable UI的同时，它的底层数据库完全基于Postgres SQL，能轻松与各种BI工具，Data平台以及ETL工具对接。Koala认为，Teable尝试在应用性和强大功能之间找到平衡点，对于那些需要数据库功能，但又不想直接写SQL的用户来说，这是一个不错的选择。不过像所有的无代码工具一样，Teable也可能在处理非常复杂的数据关系时遇到瓶颈，需要此类工具的小伙伴，不妨实际部署评估一下它的使用体验。

---

### Oops.js：给你的应用添加强大的撤销/重做功能
https://github.com/HeyPuter/Oops.js
Oops.js是一个开源的JS撤销和重做数据库，无论你是在开发一个简单的文本编辑器，还是一个复杂的图形设计应用，Oops.js都能帮你轻松实现媲美Figma，VS Code等专业软件的撤销重做功能。Koala认为，Oops.js的设计非常巧妙，它采用的命令模式，这使得撤销和重做操作变得非常灵活，很容易扩展自定义逻辑。特别值得一提的是它的事物支持和自动命令合并功能，这可以让复杂的操作序列被视为单一的原子操作。另外Oops.js提供的状态序列化功能，在处理大量历史记录时，需要注意内存使用。

---

### Next.js + Tailwind CSS 博客模版
https://github.com/timlrx/tailwind-nextjs-starter-blog
一款为技术写作者量身打造的Next.js和Tailwind CSS博客模板，发布了它的V2版本。该模板使用Content Layer管理内容逻辑，支持MDX语法，并内置搜索、多种分析工具、评论系统和邮件订阅等功能。性能方面，Lighthouse得分接近满分，首次加载JS仅85KB，并对移动端友好。设计上，支持亮暗主题切换和字体优化。总的来说，这是一个功能丰富、性能出色、可定制性强的技术博客模板。无论是想快速搭建个人技术博客，还是想深度定制，都是一个很好的选择。项目仓库中有大量使用案例，也可以为你在定制时提供思路。

---

### X.AI 发布 Grok 2
https://x.ai/blog/grok-2
XAI公司发布了他们最新的大语言模型Grok 2。作为Grok系列最新成员，Grok 2在推理能力方面达到了业界领先水平。在性能表现上，Grok 2在一些测定项目的得分，已经超过了Clock 3.5 Sonic和GPT4 Turbo。相比前代Grok 1.5，新版本在处理检索内容、使用工具、识别缺失信息、推理事件序列等方面也都有显著进步。除了Grok 2，XAI还同时推出了Grok 2 Mini，这是一个小型但功能强大的模型，能在速度和答案质量之间取得很好的平衡。Koala认为，Grok 2和Mini版本已经在X平台上向付费用户开放Beta测试，能够与X中持续不断的实时动态消息交互，是Grok系列模型目前最大的卖点。

---

### Black Forest Labs 发布 FLUX.1 模型
https://blackforestlabs.ai/
Grok 2发布时提到，他们与一个刚刚宣布成立的新公司Black Forest Labs进行了合作。这家新公司的目标是开发最先进的生成式深度学习模型，专注于图像和视频等媒体领域。这个团队可不简单，他们曾经开发过Stable Diffusion这样的明星项目，目前他们还宣布了首个产品Flux One系列模型，这个系列包括三个版本，专业版、开发版和快速版，其中专业版号称在图像生成方面达到了新高高度，而快速版则主打效率，适合本地开发和个人使用，目前已经有不少用户反馈，Flux生成的图像在表现力和逼真程度上确实有明显优势。

---

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。

