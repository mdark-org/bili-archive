---
title: "[Hacker News 周报] 多语言 SQL 生成器；React 19 发布；表情包选择器组件"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/697"
tags: []
date: 1714881013
bvid: BV1cC411E7T7
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看第698期Hacker News周报。

---
### sqlc｜ 多语言 SQL 生成器
[https://sqlc.dev/](https://sqlc.dev/)

SQL是后端应用开发中离不开的数据库操作方式，为了避免恶意注入，开发者们通常需要使用ORM或其他的最佳实践管理自己的SQL。SQLC是一个SQL编译器，目标是从SQL中生成类型安全的调用方法，在不损失SQL灵活性的前提下，最大限度保证代码运行时安全。目前该项目有Go、Kotlin、Python和TypeScript四种语言的生成器。SQLC在Go语言中的使用最为广泛。Koala认为与ORM相比，SQLC在性能和灵活性上最接近原生SQL，同时在它之上也可以进一步封装适合自己的使用方法，是一个使用方式比较多样的工具库。

---
### Extensions.js｜浏览器插件开发工具
[https://github.com/cezaraugusto/extension.js](https://github.com/cezaraugusto/extension.js)

Extensions.js是一个即插即用零配置的浏览器插件开发工具。该工具提供了一键生成新项目的CLI指令，初始化之后的项目在30秒之内就可以启动开发环境，并对接浏览器中的插件预览界面。同时该工具还和Chromium开源的浏览器samples仓库对接，可以将任何一个samples仓库中的实例作为初始模板进行二次开发。Koala认为Extensions.js最吸引人的功能是无需进行复杂的构建配置即可开始开发。不少浏览器插件的开发者并不是Web前端工程师，对他们来说复杂的前端构建配置，可能才是阻碍开发的首要问题。另一方面，支持从已有项目初始化也是一个不错的思路，可以让项目的开发速度更上一层楼。

---
### Verdaccio｜ 轻量级 Node.js 私有化 Registry 方案
[https://verdaccio.org/](https://verdaccio.org/)

Verdaccio是一个轻量级Node.js私有化Registry方案。该项目定位轻量化，不仅可以作为独立的私有化Registry，也可以代理多个不同的公有Registry源，例如NPM。在代理之后，用户通过Verdaccio拉取的包都会按照缓存策略进行缓存，下次拉取时可以通过本地存储加速。存储方案上也支持S3等通用方案，同时可以自行开发存储插件。Koala认为各种编程语言对私有化包管理工具都有很强的需求，尤其是企业内部开发场景。过去Node.js中的许多同类方案都已经不再维护或过于复杂，导致运维不便。相比之下，Verdaccio的设计更为简洁，精确地完成了预期的工作。

---
### secret-llama｜使用 WebGPU 在浏览器中运行 LLM
[https://github.com/abi/secret-llama](https://github.com/abi/secret-llama)

浏览器中的WebGPU已经较为成熟，Secret Llama这个项目则将Mistral和Llama3等最先进的大语言模型，通过WebGPU搬进的浏览器。同样使用一个对话式UI，但通过WebGPU的能力，调用本地运行的大模型，可以保证对话内容完全本地化，最大程度保证隐私，即使是离线环境下也可以运行。Koala认为该项目目前支持Mistral 7B和Llama 3 8B等四种模型，模型尺寸从600MB到4.3GB不等，同时对GPU也有较高的要求。虽然从模型尺寸和硬件需求上看，使用意义还不大，但可以作为学习WebGPU的实验性项目进行了解。

---
### EmojiMart｜表情包选择器组件
[https://github.com/missive/emoji-mart](https://github.com/missive/emoji-mart)

聊天对话中使用表情包能够让表达的内容更加丰富生动。EmojiMart是一个灵活可定制的Web端emoji表情包选择器组件。组件本身设计完善，可以与不同版本的emoji表情包数据对接，也支持自定义需要展示的emoji表情和无头模式搜索等高级用法。Koala认为EmojiMart本身的成功得益于它在这个细分场景中深入了开发和细致的UI设计和API设计，也是因为有许多这样高质量的开源组件，才让基于开源项目开发应用变得越来越轻松。

---
### React 19 发布
[https://react.dev/blog/2024/04/25/react-19](https://react.dev/blog/2024/04/25/react-19)

低调了一段时间的React上周终于发布了19beta版本，并发布了对应的博客文章进行介绍。在本次的更新中，超过一半的篇幅是在介绍新的action概念。该概念是对异步操作场景的进行封装，包含用于管理乐观更新的useOptimistic Hook和管理异步状态的useActionState Hook。Action也和HTML表单原生的action进行了集成。在此基础上，博客中也提到了Server Action的概念，进一步将action推广到了Next.js等全栈框架中。Koala认为，近年来React核心团队也经历了人员更替，不少核心成员已经离开了Meta，同时作为一个存在超过10年的前端框架，自身的功能也已经趋于稳定。本次的发布主要聚焦于简化已有代码的编写方式，以及逐步提升Server Action的使用率。小伙伴们觉得这是一次吸引你的更新吗？

以上就是本期Hacker News周报摘要，谢谢您的收看。

