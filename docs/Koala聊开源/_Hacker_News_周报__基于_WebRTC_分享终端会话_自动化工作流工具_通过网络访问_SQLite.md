---
title: "[Hacker News 周报] 基于 WebRTC 分享终端会话；自动化工作流工具；通过网络访问 SQLite"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/636"
tags: []
date: 1674966033
bvid: BV1Y8411371f
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看第 636 期 Hacker News 周报。

---

### 一组可复用的 UI 组件
[https://github.com/shadcn/ui](https://github.com/shadcn/ui)

首先介绍的是由 Shadcn 维护的 UI 项目，在这个项目中实现了一组样式精美的组件。
有趣的是，作者强调这并不是一个组件库，而只是一组可以重复使用的代码，他并不打算以 NPM 包的形式发布，也不建议使用者以依赖的形式进行安装。
相反的，他更建议使用者通过复制代码的方式直接进行使用，因为这样更易于定制。
项目也特意选用了 Reddit UI，Tailwind CSS 等方案，使样式定制更加灵活。
对于该项目的进展，作者在 Twitter 上同步更新，感兴趣的小伙伴不妨关注这一思路后续是否能够被广泛采纳。

---

### WebTTY｜基于 WebRTC 分享终端会话
[https://github.com/maxmcd/webtty](https://github.com/maxmcd/webtty)

如果你想将终端中的工作共享给他人协同进行，而传统的屏幕共享工具在带宽、清晰度和隐私保护方面又不能满足你的要求，那可以尝试一下 WebTTY 这个工具。
它专注于通过 WebRTC 在多人间共享终端会话，很好的解决了上述屏幕共享工具的问题。
同时 WebTTY 也支持在浏览器中嵌入使用，这也让它的适用场景变得更加有想象空间。

---

### bob｜面向微服务场景的打包工具
[https://bob.build/](https://bob.build/)

随着微服务的流行，一个应用可能由数十个服务共同构成，Bob 这个构建工具希望能让微服务场景下依赖关系复杂的打包构建变得更加简单。
项目本身基于 Go 开发，使用 Nix 包管理工具和一个沙盒化的 shell 环境实现构建工具的隔离。
当前 Bob 还处于 Beta 阶段，在官网的价目表中可以看到团队版将为付费用户提供 remote cache 和权限控制的高级功能。
这也代表了一种构建工具与云服务相结合的经营模式。

---

### Automatisch｜自动化工作流工具
[https://automatisch.io/](https://automatisch.io/)

在 Automatisch 的官网上，他们简单明了的阐述了自己的定位，即想成为 Zapier 的开源替代品。
无代码的工作流自动化工具通常被企业用于办公自动化，而 Zapier 是这一领域的佼佼者。
Automatisch 的出现意味着用户可以尝试自行部署开源的工作流工具，实现多种系统之间的数据集成与流转。
不过从目前文档中所提供的集成对象列表来看，与商业产品还有一定的差距。

---

### libSQL 博客介绍通过网络访问 SQLite
[https://blog.chiselstrike.com/sqlite-based-databases-on-the-postgres-protocol-yes-we-can-358e61171d65](https://blog.chiselstrike.com/sqlite-based-databases-on-the-postgres-protocol-yes-we-can-358e61171d65)

在往期节目中，我们介绍过 SQLite 的下游版本 LibSQL。
本周 LibSQL 团队发表博客，介绍了他们 fork SQLite 之后的一项重要工作，为 SQLite 增加通过网络远程访问的能力，并且基于此支持了 Postgres 协议和 HTTP 访问，同时这一能力也是多实例间数据复制功能的基础。
博客中也提到使用 HTTP 访问 SQLite 可以被应用于边缘函数等 serverless 场景中，团队还封装了 TypeScript 客户端供使用。
或许 LibSQL 团队也想通过迭代这样的功能，证明他们 fork SQLite 是正确的开源之路。

---

### 轻松一刻时间：小游戏 Summer Afternoon
[https://summer-afternoon.vlucendo.com/](https://summer-afternoon.vlucendo.com/)

最后的轻松一刻时间分享一个治愈系的小游戏 Summer Afternoon。
游戏基于 WebGL 开发，在浏览器中运行，伴随着音乐，玩家可以在树林间行走，找寻隐藏在各处的秘密细节。
尽管游戏没有复杂的玩法和丰富的情节，但评论都认为游戏的画风与音乐让人感到舒适，并且操作流程画面精美，让大家对于在浏览器中开发游戏又有了新的场景。

---

以上就是本期 Hacker News 摘要，谢谢您的收看。

