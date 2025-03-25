---
title: "[Hacker News 周报] Google 发布新编程语言 Carbon；低代码工具开发框架榫卯；AI 系统 DALL·E 开放 Beta 测试"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/613"
tags: []
date: 1658622600
bvid: BV1hV4y177P9
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第613期Hacker News周报。

首先介绍本周最重要的新闻。在今年的西加加大会上，谷歌团队发布了他们新开发的编程语言Carbon，并且把Carbon定义为C++的继承者。在大会上他们详细介绍了开发Carbon的原因。他们认为作为一个非常强调性能的语言，C++已经有了相当长的历史。对C++做优化变得非常困难。同时，虽然一些现代语言如Go、Rust都很有竞争力，但是他们都缺乏与C++的互操作性。

因此，如果想要将一个已有的C++代码库迁移到新的语言上是不容易的，而新开发的Carbon强调在拥有现代编程语言特性的基础上，和C++有着非常好的双向可操作性，因此比较容易帮助已有的C++项目向Carbon上迁移。

---

### Google 发布新编程语言 Carbon
https://github.com/carbon-language/carbon-lang
接下来隆重介绍Koala聊开源频道即将合作推出的从零开源系列的首个登场项目榫卯。榫卯是一个用于开发低代码平台的框架。与已有的许多低代码工具不同的是，基于榫卯，你可以高度灵活的去拓展你的低代码平台，最终构建出专为你需求服务的低代码工具。

在榫卯的官网中，可以看到它的一系列特性和演示。值得一提的是，他们的官网也是用榫卯制作的。对开源项目的运营和低代码感兴趣的小伙伴们，可以关注榫卯的GitHub仓库，以及我们即将推出的从零开源系列节目。

---

### 榫卯｜ Sunmao ｜低代码工具开发框架
https://github.com/smartxworks/sunmao-ui
第三个是一个叫做Comcast，用来模拟弱网环境的工具。Comcast认为我们日常开发程序时，往往是在健康的网路环境下进行的，因此我们的程序未必能考虑到各种弱网环境下的表现，例如较低的带宽、较高的延迟和比较高的丢包率等等。

一旦在生产环境中遇到这些较差的网络环境，可能就会让程序产生意想不到的错误。通过模拟网络环境，Comcast可以让你提前对这些场景做一些测试和验证。当然这些工具不是从零开始开发的，而是基于各个操作系统已有的工具，比如在OSX上使用IPFW或者PFCTL，在Linux上使用IPtables和TC这些系统工具。Comcast的定位是在这些已有工具上面的一层比较薄的封装，帮助你去更好的使用这些工具。

---

### Comcast｜模拟弱网环境的工具
https://github.com/tylertreat/comcast
Tweakpane是一个比较有意思的JS库。作者认为在目前的前端开发中，很多场景需要用户输入一些同类型的参数，可能是一种颜色、数字或是频率。Tweakpane为调节参数的场景设计了一套非常优雅的UI。如果你在项目开发中有同类的需求，可以直接使用。

---

### Tweakpane｜ 一个调节参数的 JS 库
https://cocopon.github.io/tweakpane/
DALL·E是OpenAI之前推出的重量级AI系统。它可以在一段自然语言的基础上，自动生成一幅艺术画作，并且效果非常神奇，吸引了大家的关注。之前DALL·E进行了一些邀请措施，但测试数量较少。现在他们正式进入了Beta阶段，开始邀请100万人参与测试。感兴趣的同学可以关注后续进展。

---

### AI 系统 DALL·E 开放 Beta 测试
https://openai.com/blog/dall-e-now-available-in-beta
最后是一篇关于Scratch的文章。Scratch是MIT推出的最初面向儿童的可视化编程工具。在Scratch上可以编排各种各样的逻辑，之后变成一个可运行的程序，帮助儿童理解编程的概念。在国内也有非常多的少儿编程厂商是基于Scratch开发他们的编程产品。在这篇文章中作者提到，Scratch已经成一个面向儿童的编程语言，转变为了一个通用的用于编程教学的语言，而且使用的频率在不断提高。Scratch本身的设计也非常良好，以至于不同的人可以在Scratch上开发出非常复杂的程序。所以作者再次提醒大家重视Scratch的能力，深入思考，还可以用Scratch做一些什么样的开发。

---

### 一篇关于 Scratch 潜能的文章
https://www.bryanbraun.com/2022/07/16/scratch-is-a-big-deal
以上就是本期Hacker News周报摘要，谢谢您的收看。

