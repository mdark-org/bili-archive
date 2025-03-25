---
title: "[Hacker News 周报] 更快的 Segment Anything；轻量级数据库缓存；更好的 React 开发框架"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/658"
tags: []
date: 1688289784
bvid: BV1eM4y1772Y
---
了解科技资讯，把握行业脉搏。大家好，我是Koala，欢迎收看第658期Hacker News周报。
Tabserve是一个帮你将localhost暴露到互联网的网络工具。
与其他需要安装CLI的反向代理工具不同，Tabserve使用浏览器中的Web Worker和Cloudflare Workers共同实现这一功能。
将Tabserve提供的函数部署为Cloudflare Workers，并将域名添加到Cloudflare DNS之后，使用者就可以从全球各地访问到本地网络。
作者表示，浏览器经过长期充分测试的隔离性，可以带来更好的安全性保证，而基于Cloudflare Workers中的WebSocket API的实现，使得大量使用Tabserve转发请求时，其费用每月也通常不超过5美元。

---
### Tabserve｜ 一个反向代理工具
[https://tabserve.dev/](https://tabserve.dev/)

使用缓存是提升数据库性能的常见方法，但是在业务逻辑中实现的缓存代码通常不够通用或不够健壮。
ReadySet是一个通用的轻量级数据库缓存层实现。
通过监听数据库复制流，实现缓存数据与数据库数据的一致性，可以在不编写额外代码的情况下，显著优化数据库查询的实延和吞吐。
该项目基于MIT的研究项目Norria进行的产品化的开发。
值得注意的是，为保护ReadySet的商业产品竞争性，该项目目前使用Business Source License，并将在2026年6月自动转为Apache License，因此，当前该项目的代码还不能作为商业用途使用。

---
### ReadySet｜轻量级数据库缓存
[https://github.com/readysettech/readyset](https://github.com/readysettech/readyset)

使用React开发CRUD应用可能有100种方法，但Refine这个项目认为他们提供了更好的第101种方法。
与已有的快速开发方案相比，该项目专注于保持highly的的设计原则，在核心功能框架之下，所有的UI样式都可以被自定义或替换，而在核心功能框架中，Refine集成了鉴权、权限、路由、网络、状态管理、多语言等业内标准的解决方案，整体设计的灵活性与健壮性在推出之后受到了广泛的认可。

---
### Refine｜更好的 React 开发框架
[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

1Panel是一个现代化开源Linux服务器运维管理面板，内置主机多种指标的监控便于运维，同时提供的应用商店，在主机内基于容器来部署和管理应用。
可靠性方面支持一键备份和恢复，通过将数据保存在各类云端提供更强的保障。
与同类工具相比，1Panel的UI更加简洁与现代化。

---
### 1-Panel｜开源 Linux 服务器运维管理面板
[https://github.com/1Panel-dev/1Panel](https://github.com/1Panel-dev/1Panel)

在一个Go程序中设计插件机制颇费意识，通常涉及交叉编译问题、安全漏洞和性能问题。
在这个视频中，作者分享了基于WebAssembly的一种Go插件方案，并介绍了通过WASI等生态标准如何实现一个性能、安全性和易用性兼备的插件系统。

---
### 在 Go 程序中实现插件系统
[https://www.youtube.com/watch?v=pRT36VqpljA](https://www.youtube.com/watch?v=pRT36VqpljA)

接下来是本周AI小结：
1. Sourcegraph发布代码AI助手Cody，通过读取本地代码获取上下文，快速生成AI建议。
2. MobileSAM是一个更快、更轻量级的Segment Anything模型，使其可以在移动设备上轻松运行。
3. Background Removal JS是一个在浏览器中离线运行的图片背景移除模型，本周其代码与模型正式开源。

---
### 本周 AI 小结
[https://about.sourcegraph.com/cody](https://about.sourcegraph.com/cody)  
[https://github.com/ChaoningZhang/MobileSAM](https://github.com/ChaoningZhang/MobileSAM)  
[https://github.com/imgly/background-removal-js](https://github.com/imgly/background-removal-js)

以上就是本期Hacker News周报摘要，谢谢您的收看。


