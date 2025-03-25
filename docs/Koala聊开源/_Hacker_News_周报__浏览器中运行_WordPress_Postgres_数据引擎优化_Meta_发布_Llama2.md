---
title: "[Hacker News 周报] 浏览器中运行 WordPress；Postgres 数据引擎优化；Meta 发布 Llama2"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/661"
tags: []
date: 1690083625
bvid: BV1Rp4y1V7UT
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第661期Hacker News周报。

---
### TUI Grid｜ 一个功能强大的数据表格库
[https://ui.toast.com/tui-grid](https://ui.toast.com/tui-grid)

TUI Grid是一个功能强大的数据表格库，内置了丰富的数据输入与展示自定义功能，支持完整的键盘操作，树状视图，数据校验，加总计算等高级功能。TUI是由韩国云计算公司NHN Cloud维护的一组高质量前端组件。除了Grid之外，他们还开发维护了编辑器，图片编辑器，日历等功能强大的组件，也都值得了解。

---
### Eruda｜浏览器调试工具模拟器
[https://github.com/liriliri/eruda](https://github.com/liriliri/eruda)

在开发移动端web页面时，常常会因为没有浏览器调试工具花费更多的时间。Eruda是一个浏览器调试工具模拟器，实现了脚本、元素、网络、原代码等一系列调试功能。通过接入Eruda，开发者可以在移动端浏览器里随时打开功能强大的调试工具，加速自己的开发。

---
### Docuseal｜电子签名 DocuSign 的开源替代品
[https://github.com/docusealco/docuseal](https://github.com/docusealco/docuseal)

在现上商务活动越来越频繁的今天，电子签名是许多应用都需要接入的功能。常见的电子签名SaaS服务如DocuSign也因此获得了大量用户。Docuseal则是一个DocuSign的开源替代品，可以帮助你快速生成一个PDF表单，并集成电子签名的功能。需要注意的是，Docuseal采用了AGPL license，如果需要基于它二次开发商业化产品，可能还需要判断其中的风险。

---
### Wordpress 发布 Wordpress Playground
[https://wordpress.github.io/wordpress-playground/](https://wordpress.github.io/wordpress-playground/)

著名的CMS软件Wordpress发布了Wordpress Playground项目。在WebAssembly技术的帮助下，你现在可以基于该项目，在浏览器中启动一个完整的WordPress程序。这有助于插件的开发者使用更少的成本调试自己的插件。架构层面，该项目使用WebAssembly运行PHP程序，同时使用基于WebAssembly的SQLite数据库替换MySQL。API Server则是使用浏览器的Service Worker功能进行的实现。

---
### OrioleDB｜ 新的 PostgreSQL 存储引擎
[https://www.orioledata.com/blog/no-more-vacuum-in-postgresql/](https://www.orioledata.com/blog/no-more-vacuum-in-postgresql/)

尽管PostgreSQL被认为是十分先进的开源SQL数据库，但在其设计中也存在一些长期难以解决的问题。这篇文章中作者介绍了Vacuum操作的历史，解释了该操作消耗的大量资源，是如何让一些PostgreSQL用户饱受困扰的。而文章的主要目的是介绍OrioleDB这个新的PostgreSQL存储引擎。该项目通过一系列针对性的优化设计，相比原生PostgreSQL，测试出了5倍的每秒事物数，每事物IOPS降低22倍的优势。

---
### 一周 AI 小结
https://ai.meta.com/llama/   
https://openai.com/blog/custom-instructions-for-chatgpt  
https://arxiv.org/pdf/2307.09009.pdf  
https://microsoft.github.io/TypeChat/blog/introducing-typechat/ 

接下来是本周AI小结：
1. Meta开源了Llama模型的V2版本，成为开源大语言模型新的热点。
2. ChatGPT发布Custom Instructions功能，用户可以为所有对话配置统一的背景信息，优化AI生成结果。
3. 许多人都在质疑GPT-4的生成质量，相比于刚发布时变得更差。一篇新发布的论文给出了量化的测试结果，引发大家对基于OpenAI模型开发应用，是否也会受到影响的担忧。
4. Anders Hejlsberg领先的Typescript团队发布了TypeChat项目，通过Typescript强大的类型表达能力，引导AI生成更符合预期的代码。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。


