---
title: "[Hacker News 周报] AWS 开源轻量级 JS 运行时；Gemini Ultra 面世；React Native 开发 Vision Pro 应用"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/687"
tags: []
date: 1707621938
bvid: BV1zZ42127Gg
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala 了。欢迎收看第687期 Hacker News 周报。

---

### LLRT｜AWS 开源轻量级 JS 运行时
https://github.com/awslabs/llrt
AWS 实验室发布了他们的轻量级低时延 JS 运行时 LLRT，用意在 serverless 场景下提供更好的性能。相比其他 JavaScript 运行时，它不包含JIT，所以可以显著缩短函数的冷启动时间。LLRT 使用 Rust 的语言编写，采用 QuickJS 作为 JavaScript 引擎，支持 ES 模块和团体规范，可以无缝运行大多数现有的 serverless 代码。作为规模最大的 serverless 服务提供商，AWS 在这个方向上的投入值得关注。

---

### pet｜命令行代码片段管理工具
https://github.com/knqyf263/pet
pet 是一个命令行代码片段管理工具，它可以帮助用户将一些不常用，但是很有用的复杂命令保存下来，日后可以通过交互式搜索快速调用。pet 的优势在于它易于集成到已有的命令行工作流中，支持通过变量、标签进行代码片段的管理，并且可以方便地与云同步工具如 gist 集成，实现团队协作。当代码片段中定义了变量之后，pet 还会在执行时自动生成表单，引导用户完成输入。

---

### React Email｜ 邮件模版开发工具
https://react.email
电子邮件作为长期存在的信息传播方式，却因为兼容性的问题让开发者们十分头疼。React Email 这个工具提供了一组 React 组件，可用于快速开发出样式丰富，兼容性良好的邮件模板。同时它也和 Resend、SendGrid 等邮件发送服务进行了集成，进一步简化开发流程。

---

### gping｜网络检测工具
https://github.com/orf/gping
gping 是一个网络检测工具，与普通的 ping 工具相比，它支持向多台主机 ping 探测，并将延迟数据图形化地显示在这个终端里。这个工具最大的亮点在于它内置了丰富的可视化和交互功能，比如自定义配色，简易图形模式，自动缩放视图等，让用户可以清晰直观地分析网络质量和性能。

---

### Zellij｜一个终端工作区
https://zellij.dev/screencasts/
Zellij 是一个终端工作区，它具有类似于 Tmux 或 Screen 等终端多路复用器的基本功能，但包含了许多内置功能，允许用户扩展它并创建自己的个性化环境。Zellij 包括了一个布局引擎，允许用户在配置文件中定义键盘映射、灵活布局，同时它也支持使用 WebAssembly 和 Wasi 来加载面板插件，进一步提升用户在终端的工作效率。

---

### Gemini Ultra 面世
https://blog.google/products/gemini/bard-gemini-advanced-app/
Google 正式将 AI 聊天机器人 Bard 更名为 Gemini，并如期发布了之前介绍过的 Gemini Ultra 1.0 模型。通过移动端的 Google App 已经可以直接与 Gemini 对话。Google 希望 Gemini 成为真正的 AI 助手，提供持续的对话，支持多模态，协助用户完成各种任务。本次更新是否能突破 OpenAI 和 ChatGPT 目前的领先地位，我们拭目以待。

---

### react native 开发 vision pro 应用
https://www.callstack.com/blog/announcing-react-native-for-apple-vision-pro
随着 Apple Vision Pro 的逐步推出，如何开发 Vision Pro 上的原生应用也成为了开发者们关心的话题。React Native 框架抢占先机，发布了对 Vision Pro 的支持，尽管根据测评，目前的支持还不太完善，需要一些额外的编译步骤才能完成，但是可以想象不远的将来，开发者们就可以将基于 JS 和 React 开发的应用，运行在 Vision Pro 中了。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


