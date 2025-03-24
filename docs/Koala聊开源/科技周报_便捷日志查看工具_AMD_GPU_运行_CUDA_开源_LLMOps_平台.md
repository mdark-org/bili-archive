---
title: "科技周报｜便捷日志查看工具；AMD GPU 运行 CUDA；开源 LLMOps 平台"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/708"
tags: []
date: 1721530096
bvid: BV1Wz421B7cB
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看科技周报。

---
### Logdy｜便捷日志查看工具
[https://logdy.dev/](https://logdy.dev/)

Logdy是一个非常实用的日志查看工具，它把终端日志搬到了网页上，还加入了一些聪明的功能，安装很简单，一行命令就搞定，用起来也很方便，只要把日志通过管道传给Logdy，它就会在本地开一个网页界面，让你可实时查看日志。Logdy的厉害之处在于它结合了多个商业工具的优点，它像Tail一样能实时更新，像Grep那样可以搜索，还能像JQ那样处理JSON，而且它的界面很直观，让你能更加轻松的浏览和分析日志。此外，它支持各种格式的日志，你还可以用TypeScript写解析规则，让灵活性大大增加。如果你经常需要查看和分析日志，Logdy绝对值得一试。

---
### SENDUNE｜开源 HTML 邮件设计工具
[https://github.com/SendWithSES/Drag-and-Drop-Email-Designer](https://github.com/SendWithSES/Drag-and-Drop-Email-Designer)

SENDUNE是一个开源的HTML邮件设计工具，让制作精美的邮件模板变得简单又高效。它提供了拖拽设计器，HTML代码编辑器和纯文本邮件三种创建模板的方式，这满足了不同用户的需求，从零基础到专业开发者都能够用得顺手。同时SENDUNE遵循了一些邮件设计的基本原则，确保生成的邮件能在各种客户端正常显示。Koala认为邮件目前仍然是营销和发送通知常用的方式，但许多开发者初次开发邮件HTML模板时，还是会因为兼容性等问题遇到困难。SENDUNE这个简单又精致的工具，对帮助大家走出这困境十分实用。

---
### Motion Canvas｜动画创作工具
[https://motioncanvas.io/](https://motioncanvas.io/)

Motion Canvas是一个有趣的动画创作工具，将代码编辑与可视化编辑巧妙融合，用户可以用TypeScript描述动画，实时预览，再在编辑器中进行微调。该项目基于Vite构建，支持实时更新，提升效率。Koala认为，我们之前介绍的Reelview项目就是基于Motion Canvas实现用代码编辑视频，这一技术思路可以批量高效渲染视频。你可以将视频模板化，让无视频编辑能力的使用者，通过配置参数定制自己的专属视频，相信在未来还有更大的发展潜力。

---
### SCALE｜AMD GPU 运行 CUDA
[https://docs.scale-lang.com/](https://docs.scale-lang.com/)

SCALE是一个野心勃勃的GPU编程工具包，它让开发者可以将CUDA程序直接编译运行在AMD GPU上。SCALE最大的亮点是它的兼容性，你不需要修改现有的CUDA代码或构建系统，甚至支持内联的PTX汇编代码。SCALE编译器还与NVCC的命令行选项保持一致，目标是直接替换NVIDIA的构建工具链。目前SCALE主要支持AMD新一代GPU架构，如RDNA2.0和3.0，它已经通过了多个知名开源项目的测试，包括大家关注的Llama.cpp大语言模型项目。Koala认为SCALE的出现，是否能让AMD GPU突破NVIDIA GPU基于CUDA构建的护城河，在保持兼容性的情况下性能如何，都值得进一步关注。

---
### Pezzo｜开源 LLMOps 平台
[https://github.com/pezzolabs/pezzo](https://github.com/pezzolabs/pezzo)

基于LLM AI开发应用，prompt越写越多无法维护，那你可能需要Pezzo这样一个开源的LLMOps平台，它提供了一系列强大功能，支持对prompt的集中管理并增加版本控制，实时监控和排查AI操作中的问题，通过缓存等方式优化成本，也支持团队协作，管理和迭代相关资产。Pezzo还支持多种客户端，包括Node.js，Python和Langchain。开发者可以通过Docker Compose轻松在本地运行完整的Pezzo服务，也可以使用Pezzo提供的云服务。Koala认为，随着LLM AI上层应用开发的蓬勃发展，各类开发工具也会逐渐成熟，LLMOps等同类工具具有很大的发展潜力，开源发布也是这类工具成功的最佳途径。

---
### Zed 代码编辑器登陆 Linux
[https://zed.dev/blog/zed-on-linux](https://zed.dev/blog/zed-on-linux)

之前备受关注的Zed代码编辑器正式登陆Linux平台了，这是一款用Rust打造的现代开源代码编辑器，拥有GPU加速渲染引擎，目标是保持轻量化和高性能。该项目之前已经在macOS平台上获得了不少早期用户，而在Linux上运行也一直是呼声最高的需求，如今在社区的一同努力下，该功能终于完成。Zed团队特别感谢了社区的贡献，有133位贡献者提交了447个PR，大大加快了Linux版本的开发进度。

---
以上就是本期科技周报的全部内容，谢谢你的收看，如果内容对您有帮助，请一键三连支持我们。


