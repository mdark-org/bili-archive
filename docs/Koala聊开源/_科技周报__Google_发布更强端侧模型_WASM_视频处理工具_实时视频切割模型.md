---
title: "[科技周报] Google 发布更强端侧模型；WASM 视频处理工具；实时视频切割模型"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/710"
tags: []
date: 1722744029
bvid: BV1YS421X796
---
了解科技资讯，把握行业脉搏。大家好，我是Koala，欢迎收看科技周报。

---
### VideoZip.online｜WASM 视频处理工具
[https://www.videozip.online/](https://www.videozip.online/)

VideoZip.online是一个免费的在线视频处理工具，提供的视频压缩、格式转换和提取音频三个使用的功能。与其他同类工具网站相比，VideoZip最大的特色是基于FFmpeg和WASM的能力，将处理过程完全放到浏览器内执行。这意味着视频数据完全不会离开你的电脑，保证隐私的同时也降低了网站维护者的成本。因此该工具承诺无需注册且永久免费。Koala认为这个工具的思路并不复杂，其中FFmpeg的WASM封装也比较成熟，但最终呈现的结果十分实用，相信有会为许多人打开WASM应用场景的新思路。

---
### vtool｜手写体文稿生成器
[https://vtool.pro/handwriting/index.html](https://vtool.pro/handwriting/index.html)

第二个要分享的工具是一个手写体文稿生成器。作者除了提供一批精心挑选的手写字体外，还提供了纸张类型、线条样式、光影和褶皱效果等一系列可配置选项，那使用者可以轻松调配出自己最满意的手写体文稿样式。每项配置修改之后，都可以实时预览最新的效果，并修改文稿内容。完成最终的编辑之后，即可生成图片将文稿导出。Koala认为这款工具完全基于web字体和样式能力实现，整体设计简洁易用，可以用于生成一些笔记图片发布到社交媒体中。

---
### exo｜组建自己的 AI 集群
[https://github.com/exo-explore/exo](https://github.com/exo-explore/exo)

最近一个名为Exo的开源项目引起了不少关注，这个项目的目标是让用户可以利用家中的各种设备组建自己的AI集群，而不需要昂贵的Nvidia GPU。Exo的亮点在于它能够整合各种设备的算力，包括iPhone、iPad、安卓、Mac、Linux设备等。它采用动态模型分区分区技术，根据网络拓扑和可用设备资源，自动将大型模型拆分到多个设备上运行。该项目还支持多种流行的AI模型，如Llama等。最近开发者们已经支持运行Llama3.1模型，包括8B、70B和405B参数的版本。Exo提供的兼容ChatGPT的API，这让开发者只需很小的改动，就能将应用迁移到自己的硬件上运行。

---
### Origami｜免费 3D 动画对象
[https://tympanus.net/Development/Origami/](https://tympanus.net/Development/Origami/)

创意编程网站CodeDrops发布了名为Origami的12个免费3D动画对象。这些动画对象是用React 3 Fiber和Gset创建的，可以轻松集成到网站中，为页面添加一些动态元素。每个动画还提供了三种不同的材质变体，展示了如何实现不同的视觉效果。Koala认为，开发者可以直接将它们整合到项目中，快速实现高质量的3D动画效果，而无需从头开始构建复杂的3D模型和动画。对于想要在网站中添加一些新眼球的3D元素，但又缺乏相关专业知识的开发者来说，这无疑是一个非常实用的资源。

---
### Google 发布更强端侧模型 Gemma 2 2B
[https://developers.googleblog.com/en/smaller-safer-more-transparent-advancing-responsible-ai-with-gemma/](https://developers.googleblog.com/en/smaller-safer-more-transparent-advancing-responsible-ai-with-gemma/)

Google发布了目前最强的开源小模型Gemma 2 2B，虽然只有20亿参数，但性能非常出色。它在Chatbot Arena排行榜上的表现甚至超过了GPT3.5，这对于一个如此小的模型来说非常惊人。Gemma 2 2B不仅性能强，而且非常灵活，你可以在各种硬件上运行它，从边缘设备到笔记本电脑，再到云端都没问题。Google也希望将它推广为端侧最佳AI模型。目前社区中也有人成功在浏览器中通过Web GPU运行了Gemma 2 2B。除此之外，Google还发布了用来检测和过滤有害内容的安全分类器Shield Gemma和模型解释器Gemma Scope，朝The Responsible AI的目标继续迈进。

---
### Meta 发布 SAM 2 实时视频切割模型
[https://ai.meta.com/blog/segment-anything-2/](https://ai.meta.com/blog/segment-anything-2/)

本周Meta也发布了Segment Anything模型的升级版。最大的改进是SAM 2不仅可以分割图像中的物体，还可以在视频中实时追踪和分割物体。这对于视频编辑、自动驾驶等领域都有很大的应用潜力。SAM 2的性能相当出色，在图像分割方面，它的准确度超过了原版SAM，而且速度快了六倍。在视频分割任务上，SAM 2只需原来三分之一的人工提示就能达到更好的效果，它的推理速度可以达到每秒44帧，基本可以实现实时分割。

---

以上就是本期科技周报的全部内容，谢谢你的收看。如果内容对您有帮助，请一键三连支持我们。

为增进与大家的交流，我们新增了频道交流群。添加微信：Koala-oss ，加入技术交流群。


