---
title: "[Hacker News 周报] 智能 diff 工具；开源相册软件；基于 Godot 开发编辑器"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/693"
tags: []
date: 1711429723
bvid: BV1oC41157sD
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第693期Hacker News周报。

### difftastic｜智能 diff 工具
[https://difftastic.wilfred.me.uk/](https://difftastic.wilfred.me.uk/)

difftastic是一个更加智能的命令行代码diff工具。大部分diff工具都以行列单位比较文本，difftastic则基于Tree-sitter解析代码文件，从而实现基于代码语义的精确diff。从官网的示例中可以看到，difftastic输出的结果更加符合代码变更的真实意图。Koala认为在对代码code review时，代码格式调整引起的地府通常会加大review的难度。difftastic的出现让这个问题有可能被更好的解决。该工具也实现了与Git的集成，也许未来能够进一步被集成到GitHub、GitLab代码托管平台中，同时Tree-sitter的强大生态也让difftastic支持的语言种类十分丰富。

---

### Retina｜微软发布的开源 K8s 网络观测平台
[https://retina.sh/](https://retina.sh/)

Retina是一个微软发布的开源K8s网络观测平台，借助EBPF实现对K8s中工作负载的观测。据了解，Retina与微软自家的Azure云服务有一定集成，但Retina的定位还是一个与云厂商解耦的中立方案，可以将数据存取到不同的介质中，也能基于Grafana等工具进行可视化分析。该项目希望简化K8s使用者debug网络异常的难度，并实现对网络健康状态的持续监测。Koala认为微软在K8s方向上的投入其实一直不少，K8s创始人之一的Brendan Burns也早已离开谷歌加入微软。之前周报中介绍过的Spin项目背后的团队主力成员也曾在微软参与K8s相关的工作，并开发了K8s中主流的包管理工具Helm。另一方面，EBPF也正在逐渐成为K8s中主流的可观测技术方案。

---

### Memories｜开源相册软件
[https://memories.gallery/](https://memories.gallery/)

对喜欢拍照的小伙伴，可以关注Memories这个开源相册项目。该项目的定位是一个开源的Google Photos替代品，通过私有化部署实现隐私安全，同时还支持数据加密进一步保护隐私。在功能方面，Memories也实现了手机拍照自动上传、时间线、专辑、自动标签、照片地图等丰富有趣的能力，与许多商业化产品相比也不遑多让。Koala认为Memories的实现深度借助于另一个名为Nextcloud的项目。该项目是一个开源的文件管理程序。Memories的作者表示，Nextcloud这样久经测试的项目可以保证核心的存储、权限管理等功能质量稳定，并且虽然Nextcloud基于PHP开发，但在过去几年间随着PHP的发展，项目的性能已经得到了相当大的提升，目前性能良好。

---

### Soul｜Soul | 为 SQLite 提供 REST API
[https://github.com/thevahidal/soul](https://github.com/thevahidal/soul)

Soul是一个为SQLite提供Rest API和实时推送能力的Node.js项目。在Go生态中与它类似的项目是我们曾经介绍过的PocketBase。由于SQLite自身定位是一个嵌入式的数据库，因此默认不能通过HTTP请求等方式远程访问。Soul这个项目的诞生，让SQLite可以被迅速包装为一个基础的Web API服务。Koala认为在Soul项目的讨论中，有人质疑它和PocketBase等项目在性能上与原生SQLite有较大的差距，但也有不少用户表示SQLite的性能对于许多中小型应用来说已经过剩，他们需要的就是这样可以通过网络远程访问SQLite的能力，相比之下一些性能的损失并不是问题。

---

### jnv｜对 JSON 数据解析和过滤
[https://github.com/ynqa/jnv](https://github.com/ynqa/jnv)

经常使用命令行的小伙伴可能对解析JSON的命令行工具JQ并不陌生，但可能也为了学习记忆JQ的过滤取语语法花过一些时间。JNV项目的出现就是为了解决这一问题。在提供与JQ相似的JSON解析能力的同时，JNV通过一个交互式的输入和选择UI，让用户可以自然的完成对JSON数据的解析和过滤，并生成对应的筛选器语法。Koala认为JNV也是一个使用Rust的重写CLI的例子，但与一些只是提升理论性能和更加美观的重写项目相比，JNV可以称得上是非常合理的有效创新，既从既有成熟项目JQ的痛点出发，又以功能上的创新解决痛点。

---

### griddycode｜基于 Godot 开发编辑器
[https://github.com/face-hh/griddycode](https://github.com/face-hh/griddycode)

最后是一个有趣的代码编辑器项目Griddycode。与一般代码编辑器注重功能、性能等目标不同，Griddycode更像是一个实验，它的特殊之处是基于游戏引擎Godot进行开发，使得最终呈现的代码编辑器样式非常酷炫，颜色也很亮眼。Koala认为并非所有的程序都是实用主义优先，一些有趣的程序不仅让开发过程中充满干劲，也让使用者们眼前一亮。另一方面，该项目也体现了Godot引擎本身的灵活性，不仅仅可以用于游戏开发。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。

