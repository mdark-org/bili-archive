---
title: "科技周报｜Blender 4.4 稳定性大提升；用 Web 分享你的终端；用 LLM 增强逆向工程能力"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-739/"
tags: []
date: 1743311079
bvid: BV1A3ZBYAE8a
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看科技周报。

### Blender 4.4 稳定性大提升
https://www.blender.org/download/releases/4-4/

Blender 4.4 来了。本次更新的重点是提升稳定性和优化工作流程。Blender 开发者们集中火力修复了 700 多个 bug，还优化了代码和文档，让软件更可靠。动画方面，Blender 4.4 引入了 Action Slots，让你可以更灵活地控制动画，在一个 Action 里混合多个动画元素。视频编辑方面，VSE 视频序列器也得到了增强，文本编辑更方便，还支持更多视频格式。

Koala 认为，总的来说，Blender 4.4 是一个十分吸引人的新版本。作为一个工业级别的开源软件，Blender 所体现出的活力，也让我们对开源软件的未来充满期待。

---

### ttyd | 用 Web 分享你的终端
https://tsl0922.github.io/ttyd/

想不想直接在浏览器里远程访问你的终端？ttyd 就能帮你实现。它是一个命令行小工具，能让你通过网页分享终端中正在进行的会话。该项目基于 Libwebsockets 和 xterm.js 实现，速度快、功能全，还支持中文、日文、韩文等字符显示。

你可以用它来运行任何自定义命令，设置用户验证，甚至还能通过浏览器上传下载文件。安装也很简单，macOS 可以直接用 Homebrew，Linux 有二进制版本和源码编译方式。

Koala 认为，有了 ttyd，远程管理服务器或者和同事分享你的终端操作就方便多了。对于多人协同和远程 debug 等场景比较有用。当然，前提是你做好了足够的安全防护措施。

---

### GhidraMCP | 用 LLM 增强逆向工程能力
https://github.com/LaurieWired/GhidraMCP/

GhidraMCP 是一款很有意思的工具，它能让 LLM 自主地进行逆向工程。它通过 MCP 协议，将开源逆向工具 Ghidra 的核心功能暴露给了 MCP 客户端，从而实现自动化分析。你可以用它来反向编译 Ghidra 中的二进制文件，自动重命名方法和数据，还能列出方法、类、导入和导出项。这样一来，逆向工程的效率就大大提高了。

Koala 认为，这个工具对于安全研究人员和逆向工程师们来说绝对是个福音。它将 LLM 的能力融入到了 Ghidra 中，让逆向分析更加智能和高效。而且基于 MCP 的通用性，你可以在代码编辑器和聊天工具等多种 MCP 客户端中使用它。

---

### Simple AI | AI 场景 UI 组件库
https://www.simple-ai.dev/

Simple AI 是一套开源的 AI 场景 UI 组件库，包含各种可以直接使用的 App 模块和 React Flow 工作流，可以加速你的 AI 应用开发。它基于 shadcn/ui 和 Vercel AI SDK 构建，主要提供了聊天对话和 AI 工作流两个场景的预置组件。

在聊天对话中，开发者可以直接复用聊天消息、输入框、Markdown 内容渲染、模型选择器等组件。而在 AI 工作流中，Simple AI 提供了对应文本生成、Prompt 优化、用户输入等功能的 React Flow Node，便于和 React Flow 集成使用。

Koala 认为，如果你正在用 React 开发包含以上场景的 AI 应用，Simple AI 能帮你节省不少时间，快速构建出美观又实用的界面。

---

### Valibot | TS Schema 库
https://valibot.dev/

Valibot 是一个类似 Zod 的 TypeScript Schema 库。它在设计时充分考虑了包大小、类型安全和开发者体验。Valibot 具有完整的类型安全保障，让你享受 TypeScript 中静态类型推断的优势。由于其 API 的模块化设计，仅使用最基础功能时，包大小可以小于 700 字节。Valibot 支持几乎所有的 TypeScript 类型，从原始值到复杂对象，并且拥有 100% 的测试覆盖率。

它还包括常用的校验及数据转换的 helper 方法，以带来更好的开发者体验。

Koala 认为，与 Zod 相比，Valibot 在开发体验和打包体积上有一定优势，可根据项目需求灵活选用。

---

### LoRAX | 多 LoRA LLM 推理引擎
https://github.com/predibase/lorax

LoRAX 是由 Predibase 开发的 LLM 推理引擎，其特色是可以在单个 GPU 上跑起成千上万个微调过的 LoRA 适配器，大幅降低服务成本，同时不牺牲吞吐量和延迟。它支持动态加载 LoRA 适配器，可以从 Hugging Face、Predibase 或者本地文件系统加载。LoRAX 还支持跨适配器连续批处理，也就是可以将不同适配器的请求打包到同一个批次中，优化推理性能。

Koala 认为，近期该初创公司因提供了与 OpenAI 去年分享的强化微调相类似的功能而受到关注。该公司认为，模型微调是 AI 产品化的必经之路，而 LoRAX 就是为大量微调场景而设计的推理引擎。

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。

