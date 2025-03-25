---
title: "[Hacker News 周报] Deno 推出 npm 替代品；浏览器中的操作系统；苹果抢占 AI 笔记本电脑市场"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/691"
tags: []
date: 1710040594
bvid: BV1nx4y1Q7ox
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第691期Hacker News周报。


### JSR｜Deno 推出 NPM 替代品
https://deno.com/blog/jsr_open_beta

近期Deno发布了他们的JS Registry服务JSR。与JS生态中最主流的包管理平台NPM相比，JSR是一个免费且开源的项目，而不是像NPM这样以公司形态推出的产品。同时JSR也对TypeScript进行了优先支持，并且目前只允许发布ES Modules格式的包。除了Deno之外，用户还可以在Node.js, Van, Cloudflare Workers等JS运行时中使用JSR上的包。

Koala点评：Deno作为Node.js创始人Ryan的作品，与Node.js一直存在对立与竞争的关系，并且Deno也以商业公司的形式运营，有自己的serverless服务Deno Deploy。从公网实践来看，Deno想要争取更多的用户，NPM的兼容性是一大问题。本次发布JSR是Deno想从根本上解决NPM这一历史性问题，提升自身竞争力。

---

### Puter｜浏览器中的操作系统
https://github.com/HeyPuter/puter 和 https://puter.com/

Puter是一个精心设计的在浏览器内运行的特殊操作系统，其UI模拟了一组桌面操作系统的设计，同时内置了文本编辑器、图片编辑器、终端、音视频等能力，并且设计了应用商店，开发者可以将基于web的应用发布至其中。Puter中的持久化数据保存在云端存储中，同一个用户的多个终端也可以共享会话。

Koala点评：Puter的有趣之处在于向大家继续展示web应用的潜力。尽管之前也有同类实践，但大多只是概念演示，而Puter的作者则表示该项目已经在生产中使用三年，每月拥有100万用户。另一方面，该项目较为复杂的UI完全使用原生JS和jQuery实现，没有借助React等开发框架，从而保证了更可控的性能。

---

### Expr｜基于 Go 开发的简易脚本语言
https://github.com/expr-lang/expr

如果想在自己的程序中开放一定的自定义能力给用户，你可能需要一个脚本语言，但如何避免用户开发过于灵活甚至恶意的脚本，又会成为难题。Expr是一个基于Go开发的简易语言，通过简洁的语法可以实现各类数据处理、操作符比较等逻辑，但又保证了极好的安全性和不错的性能，很适合用于自定义脚本的场景。

Koala点评：Expr最早由谷歌工程师开发，在谷歌公有云服务中作为脚本语言使用，后来被广泛应用于各类产品的自定义脚本场景。在开源领域，K8S生态中常见的Argo、CoreDNS等项目也在使用这一方案。由此可见，一个设计精巧的项目，通过开源平台能够获得广泛的使用，同时了解开源生态中的方案，也可以在自己开发功能时事半功倍。

---

### Finder｜ 生成最短 CSS 选择器的 JS 库
https://github.com/antonmedv/finder

Finder是一个用于生成最短CSS选择器的JS库。在浏览器中，基于Finder可以为任意DOM元素生成CSS选择器，Finder则保证该选择器是最短且唯一的，并且尽可能保持稳定。

Koala点评：生成最佳CSS选择器，对于浏览器自动化操作和数据抓取等场景都非常有用。而在AI时代，用大模型驱动浏览器自动化也是一个探索的方向，Finder这样的基础库可能会成为重要的工具。

---

### Daytona 开源开发环境管理工具
https://www.daytona.io/

Daytona是一个开源的开发环境管理工具。在复杂软件的开发过程中，配置本地环境、安装依赖和构建已经成为了不可小觑的效率瓶颈。对于大型项目来说，本地电脑可能还无法提供足够的算力。Daytona通过Deep Containers提供云端开发能力，可以部署在任何环境中，通过预构建系统加速配置过程，与VS Code和JetBrains编辑器都进行了集成。

Koala点评：越来越多的企业开始关注云端开发方案，以提升研发效率和安全性，但目前一些已有方案的成熟度还不足够，例如在弱网环境下延迟高，开发体验差。Daytona有不错的潜力，但能否成为开发者喜爱的工具，还需要更多的时间证明。

---


### 苹果抢占 AI 笔记本电脑市场
https://www.apple.com/newsroom/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/?utm_source=hackernewsletter&utm_medium=email&utm_term=show_hn

苹果推出了两款新的搭载M3芯片的MacBook Air笔记本。在性能方面，与之前的M1版本相比，M3版本的MacBook Air有60%的性能提升，与Intel芯片版本相比则快13倍。

Koala点评：在发布中，苹果强调基于M3的笔记本电脑将成为最适合AI的消费级笔记本电脑。M3的16核神经网络引擎，以及在CPU和GPU中的加速，可以大幅提升本地运行AI模型的能力。在去年的AI浪潮中，苹果表现并不突出，但作为拥有硬件制造、操作系统、应用商店等诸多资源的厂商，苹果借助芯片的强大算力，很可能在未来带来更强的AI产品。

以上就是本期Hacker News周报摘要，谢谢您的收看。

为增进与大家的交流，我们新增了频道技术交流群，添加微信：Koala-oss ，可以入群。


