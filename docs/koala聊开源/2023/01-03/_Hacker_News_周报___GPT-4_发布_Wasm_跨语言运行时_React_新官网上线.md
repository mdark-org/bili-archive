---
title: "[Hacker News 周报]  GPT-4 发布；Wasm 跨语言运行时；React 新官网上线"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/643"
tags: []
date: 1679185800
bvid: BV1p84y1w7n6
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第643期HackerNews周报。
本周大语言模型的热潮还在继续，OpenAI发布了GPT-4模型。
在发布的博客中他们表示，GPT-4的稳定性以及在各种专业场景下的表现远超之前的版本，并且支持输入图片进行问答。
博客也透露ChatGPT Plus订阅者，在使用ChatGPT时，将会获得GPT-4的访问权限。
OpenAI最近的博客也介绍了他们在超大规模K8S集群的运维经验，以及和Azure的合作经历，看来AI的未来与云计算同样密不可分。

---

AI的世界并不只有大语言模型，Transformer.js是一个支持在浏览器中运行各类Transformer模型的工具库。
在工具的demo页面中可以选择翻译、文本生成等不同种类的任务模型，在填入对应的参数，就能够从Hugging Face上拉取对应模型进行执行，体验流畅。
想要在浏览器中使用AI模型的开发者可以尝试。

---

FlameScope是由Netflix开源的性能可视化分析工具，过去主要用于分析Linux Perf生成的性能采集结果。
由于Go的开发者而言，常用的Pprof性能分析工具，无法直接与FlameScope搭配使用。
随着Go1.19版本在性能样本中增加了时间戳，现在FlameScope可以更加容易的对Go程序进行性能分析。

---

Miller是一个基于Go编写的命令行工具，它包括awk、sed、cut、join、sort等传统命令行工具的功能，同时支持处理CSV、TSV和JSON格式的表格数据。
命令行重度使用者们可以把它视作你助理表格类数据的瑞士军刀。

---

WebAssembly正在日渐成熟，Scale就是一个由WebAssembly驱动的函数运行时。
在Scale的构想中，开发者可以基于Go、Rust等语言编写函数，经过Scale编译为WebAssembly之后，被TypeScript等语言使用，使应用开发变得更加灵活。

---

最近较为火热的代码编辑器Zed正式进入了Beta阶段，可以下载体验。
Zed的开发团队曾经推出过开源代码编辑器Atom和开源解析框架Tree-sitter，在这一领域经验丰富。
Zed本身的技术架构也很有特点，通过GPU进行渲染获得更好的性能，数据结构也基于CRDT进行设计，为多人协同编辑奠定基础。

---

Tremor是一个快速开发概览类视图的React UI库，在基础的UI组件之外，还提供了许多美观实用的高级组件。
全新发布的2.0版本也基于Tailwind进行了升级，提供更强的定制能力。

---

React项目的新官网终于迎来了正式亮相。
在新的官网中文档部分更加直观且功能强大，让学习者能够快速分辨代码的意图，以及通过修改代码查看结果获得反馈。
即使是React的长期用户也可以在新官网的文档中获得一些启发。
以上就是本期HackerNews周报摘要，谢谢您的收看。


