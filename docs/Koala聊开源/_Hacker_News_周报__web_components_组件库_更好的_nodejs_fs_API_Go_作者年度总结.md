---
title: "[Hacker News 周报] web components 组件库；更好的 nodejs fs API；Go 作者年度总结"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/683"
tags: []
date: 1705206281
bvid: BV1jg4y1m7s2
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第683期 Hacker News 周报。

---
### shoelace｜web components 组件库
[https://shoelace.style/](https://shoelace.style/)

Shoelace 是一个基于 web components 标准的 UI 组件库，提供了数十种常用组件，设计风格美观简洁，且支持各类样式定制能力，对可访问性也进行了大量优化。在 web components 的帮助下，Shoelace 可以与 React, View, Angular 等框架无缝集成，这对于希望通过多个框架开发不同应用，但又需要保持样式一致性的团队来说十分有用。

---
### Penrose｜ 科研图表库
[https://penrose.cs.cmu.edu/](https://penrose.cs.cmu.edu/)

卡内基梅隆大学开源的 Penrose 是一个基于简洁文本，描述并生成复杂图表的有奇JS库。该项目设计了一套直观但高度抽象的描述语言，用户通过少量的工作就可以生成各类科研场景可用的复杂图表，相比普通的通用图表库使用效率更高。在 example 页面中可以看到团队发布的大量实例，也可以通过教学文档进行进一步学习。

---
### 更好的 nodejs fs API
[https://humanwhocodes.com/blog/2024/01/fsx-modern-filesystem-api-javascript/](https://humanwhocodes.com/blog/2024/01/fsx-modern-filesystem-api-javascript/)

JS 专家 Nicholas Zakas 发布了2024年的第一篇博客，介绍了他关于JS文件系统API的思考，他认为目前基于 NodeJS 的文件系统 API 不够完美，在一些常用场景中需要编写冗余的代码，甚至需要使用第三方库才能完成，在写单元测试时也较为繁琐。为此他设计的方案 fsx 是一个可以在 NodeJS 和 Deno 中使用的新一代文件系统 API，简化应用中操作文件系统的逻辑，也避免开发者产生一些常见的错误。

---
### ugrep｜比 grep 更友好的命令行搜索工具
[https://ugrep.com/](https://ugrep.com/)

Ugrep 是一个比 grep 更加友好的命令行搜索工具，相比 grep，它支持更多更加复杂和灵活的正则表达式搜索，并且在大文件场景下有更好的搜索性能。除了搜索之外，Ugrep 还支持统计、提取、替换等多种操作，将原本一些需要使用 awk, sed 等额外工具完成的工作整合到了工具内部。同时 Ugrep 的跨平台能力很好，支持 Windows, MacOS 和多种 Linux 发行版。

---
### 开源的 prompt 设计工具 priompt
[https://github.com/anysphere/priompt](https://github.com/anysphere/priompt)

AI 代码编辑器 curse 背后的团队开源了他们内部用于分析和优化 LML prompt 的前端组件 prompt，该工具能够让用户在设计 prompts 遵循一些最佳实践，并在不同的 LML 模型中进行对比测试。 curse AI 编辑器是目前口碑较好的 AI 产品，prompt 在他们的开发过程中所产生的作用，想必可以让其他 AI 开发者也有所启发。

---
### Go 作者年度总结
[https://commandcenter.blogspot.com/2024/01/what-we-got-right-what-we-got-wrong.html](https://commandcenter.blogspot.com/2024/01/what-we-got-right-what-we-got-wrong.html)

Go 语言作者 Rob Pike 分享了去年年底他在 GoCon AU 会议上的闭幕演讲，分享了 Go 开源14年以来，他认为做得正确和不正确的决定。在演讲中他回顾了 Go 语言设计规范，可一致性，并发设计，包管理在内的一系列主题，并给出了自己的深入见解，对 Go 语言的历史与未来有兴趣的小伙伴可以自行观看。

---
### vx.dev 再度升级多项新功能 开放免费体验
[https://www.bilibili.com/video/BV1Ha4y117rZ/](https://www.bilibili.com/video/BV1Ha4y117rZ/)

本周我们频道为大家开发的AI代码生成工具 VXT 进行了新一轮的功能升级，首先带来的是高级配额管理功能，目前可以对特定的规则和用户精细配置使用额度。我们也基于这个功能开发了小伙伴们的免费体验功能，目前 star 仓库后就可以体验三次AI代码生成，在 React 和 View 的基础上，我们又开发了 swelt 框架的生成能力，并对三种框架的生成稳定性进行了优化。除了原本的 PR review 功能，本次我们还新增了精细 code review 能力，可以在代码 review 视图中对特定代码行数描述需求。最后感谢社区小伙伴林泽141开发的预览代码高亮功能。

以上就是本期 Hacker News 周报摘要，谢谢你们的收看。


