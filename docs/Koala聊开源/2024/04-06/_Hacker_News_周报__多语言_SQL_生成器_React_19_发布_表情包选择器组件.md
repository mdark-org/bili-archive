---
title: "[Hacker News 周报] 多语言 SQL 生成器；React 19 发布；表情包选择器组件"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/697"
tags: []
date: 1714881013
bvid: BV1cC411E7T7
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第698期 Hacker News 周报。
   
 ---
   
 ### sqlc｜ 多语言 SQL 生成器
 https://sqlc.dev/
 
 SQL 是后端应用开发中离不开的数据库操作方式，为了避免恶意注入，开发者们通常需要使用 ORM 或其他的最佳实践管理自己的 SQL。
 
 SQLC 是一个 SQL 编译器，目标是从 SQL 中生成类型安全的调用方法，在不损失 SQL 灵活性的前提下，最大限度保证代码运行时安全。
 
 目前该项目有 Go、Kotlin、Python 和 Typescript 四种语言的生成器。SQLC 在 Go 语言中的使用最为广泛。
 
 Koala 认为与 ORM 相比，SQLC 在性能和灵活性上最接近原生 SQL，同时在它之上也可以进一步封装适合自己的使用方法，是一个使用方式比较多样的工具库。
   
 ---
   
 ### Extensions.js｜浏览器插件开发工具
 https://github.com/cezaraugusto/extension.js
 
 Extensions JS 是一个既插即用零配置的浏览器插件开发工具。
 
 该工具提供了一键生成新项目的 CRI 指令，初始化之后的项目在 30 秒之内就可以启动开发环境，并对接浏览器中的插件预览界面。
 
 同时该工具还和 Chrome 开源的浏览器 samples 仓库对接，可以将任何一个 samples 仓库中的示例作为初始模板进行二次开发。
 
 Koala 认为 Extensions JS 最吸引人的功能是无需进行复杂的构建配置即可开始开发。
 
 不少浏览器插件的开发者并不是 web 前端工程师，对他们来说复杂的前端构建配置可能会是阻碍开发的首要问题。
 
 另一方面，支持从已有项目初始化也是一个不错的思路，可以让项目的开发速度更上一层楼。
   
 ---
   
 ### Verdaccio｜ 轻量级 Node.js 私有化 Registry 方案
 https://verdaccio.org/
 
 Verdaccio 是一个轻量级 Node.js 私有化 Registry 方案，该项目定位轻量化，不仅可以作为独立的私有化 registry，也可以代理多个不同的公有 registry 源，例如 NPM。
 
 在代理之后，用户通过 Verdaccio 拉取的包都会按照缓存策略进行缓存，下次拉取时可以通过本地存储加速。
 
 存储方案上也支持 S3 等通用方案，同时可以自行开发存储插件。
 
 Koala 认为各种编程语言对私有化包管理工具都有很强的需求，尤其是企业内部开发场景。
 
 过去 Node.js 中的许多同类方案都已经不再维护或过于复杂，导致运维不便。
 
 相比之下，Verdaccio 的设计更为简洁，精准地完成了预期的工作。
   
 ---
   
 ### secret-llama｜使用 WebGPU 在浏览器中运行 LLM
 https://github.com/abi/secret-llama
 
 浏览器中的 WebGPU 已经较为成熟，Secret Llama 这个项目则将 Mistral 和 Llama 3 等最先进的大语言模型通过 WebGPU 搬进了浏览器。
 
 同样使用一个对话式 UI，但通过 WebGPU 的能力调用本地运行的大模型，可以保证对话内容完全本地化，最大程度保证隐私，即使是离线环境下也可以运行。
 
 Koala 认为该项目目前支持 Mistral 7B 和 Llama 3 8B 等四种模型，模型尺寸从 600MB 到 4.3GB 不等，同时对 GPU 也有较高的要求。
 
 虽然从模型尺寸和硬件需求上看，使用意义还不大，但可以作为学习 WebGPU 的实验性项目进行了解。
   
 ---
   
 ### EmojiMart｜表情包选择器组件
 https://github.com/missive/emoji-mart
 
 聊天对话中使用表情包能够让表达的内容更加丰富生动。
 
 EmojiMart 是一个灵活可定制的 web 端 emoji 表情包选择器组件，组件本身设计完善，可以与不同版本的 emoji 表情包数据对接，也支持自定义需要展示的 emoji 表情和无头模式搜索等高级用法。
 
 Koala 认为 EmojiMart 本身的成功得益于它在这个细分场景中深入的开发和细致的 UI 设计和 API 设计，也是因为有许多这样高质量的开源组件，才让基于开源项目开发应用变得越来越轻松。
   
 ---
   
 ### React 19 发布
 https://react.dev/blog/2024/04/25/react-19
 
 低调了一段时间的 React 上周终于发布了 19 Beta 版本，并发布了对应的博客文章进行介绍。
 
 在本次的更新中，超过一半的篇幅是在介绍新的 action 概念，该概念是对异步操作场景的进行封装，包含用于管理乐观更新的 useOptimistic Hook 和管理异步状态的 useActionState Hook。
 
 Action 也和 HTML 表单原生的 action 进行了集成。
 
 在此基础上，博客中也提到了 server action 的概念，进一步将 action 推广到了 Next.js 等全栈框架中。
 
 Koala 认为近年来 React 核心团队也经历了人员更替，不少核心成员已经离开了 Meta，同时作为一个存在超过 10 年的前端框架，自身的功能也已经趋于稳定。
 
 本次的发布主要聚焦于简化已有代码的编写方式，以及逐步提升 server action 的使用率。
 
 小伙伴们觉得这是一次吸引你的更新吗？
   
 ---
 
 以上就是本期 Hacker News 周报的摘要，谢谢您的收看。

