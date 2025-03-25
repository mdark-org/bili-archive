---
title: "[Hacker News 周报] 四大 AI 模型突飞猛进；Python 与 JS 融合运行时；更加现代化的 API 文档框架"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://www.daemonology.net/hn-daily/"
tags: []
date: 1713066489
bvid: BV1Dx4y1h7JS
---
了解科技资讯，把握行业脉搏。大家好，我是Koala。欢迎收看第694期Hacker News周报。

### Morphic｜增强版 AI 问答引擎

https://github.com/miurla/morphic

Morphic是一个增强版的AI问答引擎。与大量已有AI问答系统相比，Morphic最大的亮点是强化了输出结果的UI展示。除了输出文本答案之外，还会增加图片、网站链接等辅助信息。如果系统判定用户输入的问题过于宽泛，它会在中途输出一个表单UI，辅助用户细化问题。
Koala认为，经过一年的高速创新，在今年生成式AI也将迎来更多新的使用场景。与输入文本输出文本的方式相比，结合UI表单输入和丰富的UI输出，可以进一步提升生成式AI的可用性，是一个值得研究的方向。

---

### Scalar｜更加现代化的 API 文档框架

https://scalar.com/

Scalar是一个更加现代化的API文档框架。将一个Swagger或OpenAPI格式文件放入它的编辑器中，就能够生成美观易用的API文档。不仅能够直观看到每个API endpoint的格式、参数、返回值，还有数十种语言和框架的调用示例。该项目也和各类外框架以及前端框架进行的集成，使Scalar生成的API文档能够快速集成到已有网站中。
Koala认为，尽管API文档的方案不少，但是Scalar的UI设计和请求示例等功能，还是让这个项目很有竞争力。

---

### Faces.js｜生成基于 SVG 的卡通头像的 JS 库

https://github.com/zengm-games/facesjs 和 https://zengm.com/facesjs/editor

Faces.js是一个用于生成基于SVG的卡通头像的JS库。该项目提供了十余处可配置的面部细节，每个细节又有许多选项，能够生成大量不同风格的卡通头像。代码本身的设计也灵活易扩展，可以自行增加SVG素材，生成自己项目中专属的头像生成器。
Koala认为，在游戏中为自己的角色定制个性化外观是常见的需求，也被称为捏脸。Faces.js的作者也是在开发篮球经理游戏的过程中设计了这个JS库，有同类需求的小伙伴可以尝试使用。

---

### PythonMonkey｜Python 与 JS 融合运行时

https://github.com/Distributive-Network/PythonMonkey

如果你有在Python项目中执行JS代码的需求，可以尝试一下PythonMonkey这个项目。该项目将Mozilla的SpiderMonkey JS引擎嵌入到了Python运行时中，使用户可以通过Python代码调用和控制JS宿主环境。
在此基础上，该项目还有更为远大的目标，希望提供JS和Python代码之间的互操作性，例如Python代码可以调用JS库，JS代码也可以操作Python中的数据，并且保持高性能，避免跨语言调用时的序列化开销。
Koala认为，PythonMonkey项目的创新之处是在Python中使用CPython提供的C API，实现了JS中的宿主和对象结构。在JS中则使用SpiderMonkey的C++ API，反过来实现了Python的列表和字典结构。这使得跨语言调用对方的库，以及避免数据序列化开销成为了可能。

---

### Alloy｜符合 OpenTelemetry 标准的采集器

https://github.com/grafana/alloy

Grafana又带来了新的开源项目，本次开源的是一个符合OpenTelemetry标准的采集器Alloy。Alloy可以与Prometheus、OpenTelemetry、Fluent等多种组件进行适配，可以将指标、日志、tracing等数据，以和它们兼容的方式进行采集传输，同时支持可编程的管道功能，可以在传输过程中实现高效的数据变换和修改。Alloy还内置了debug UI，可以及时观察定位采集过程中的问题。
Koala认为，OpenTelemetry的标准正在被越来越多的厂商采纳，但社区原生的采集器在性能和功能丰富度上并不完美。Grafana的团队在可观测性方面有着极其丰富的经验，也有规模庞大的开发者社区，本次开源Alloy有可能成为比社区原生实现更流行的方案。

---

### 四大 AI 模型突飞猛进



https://twitter.com/OpenAIDevs/status/1777769463258988634

https://developers.googleblog.com/2024/04/gemini-15-pro-in-public-preview-with-new-features.html

https://twitter.com/MistralAI/status/1777869263778291896

https://techcrunch.com/2024/04/09/meta-confirms-that-its-llama-3-open-source-llm-is-coming-in-the-next-month/

本周也是AI大模型突飞猛进的一周。OpenAI对GPT-4进行了升级，现在GPT-4 API中的视觉功能、JSON模式和function calling正式融合，可以一并使用。
Google也正式开放Gemini 1.5 Pro，包含100万token上下文，更好的多模态能力以及JSON模式。
在开源领域，Mistral AI发布了一个新的8乘22B基础模型，约140B参数，参数量是之前他们发布的最大模型8乘7B版本的3倍。
Meta也确认下个月他们将发布开源模型Llama的第三个版本。
Koala认为，不论是商业大模型还是开源大模型，又进入了新一轮的白热化竞争中。展望2024，我们期待观察AI会将我们带向何方。

以上就是本期Hacker News周报摘要，谢谢您的收看。


