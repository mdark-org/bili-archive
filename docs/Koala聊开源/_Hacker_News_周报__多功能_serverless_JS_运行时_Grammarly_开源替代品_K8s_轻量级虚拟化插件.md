---
title: "[Hacker News 周报] 多功能 serverless JS 运行时；Grammarly 开源替代品；K8s 轻量级虚拟化插件"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/614"
tags: []
date: 1659227400
bvid: BV1mT411j7LR
---
了解科技资讯、把握行业脉搏。大家好，我是 Koala，欢迎收看第 614 期 Hacker News 周报。

### Blueboat：多功能 serverless JS 运行时
首先分享一个叫做 Blueboat 的 serverless 运行时，它是基于主流的 JS 引擎 V8 和 Rust 开发的，相比其他一些 serverless，它更关注 JavaScript 运行时的表现，以及它默认提供的一个多租户的隔离能力。如果你熟悉 Cloudflare Workers 平台，可以将 Blueboat 视为它的潜在的开源替代品。
[https://github.com/losfair/blueboat](https://github.com/losfair/blueboat)

---

### LanguageTool：Grammarly 开源替代品
其次是一个叫做 LanguageTool 的开源写作助手，大家可能对它的商业化对标产品 Grammarly 比较熟悉。Grammarly 是一个自动检测和纠正英语语法、拼写等错误的产品。相比商业化的 Grammarly，LanguageTool 可以自行部署，并且代码也是完全开放的，同时它也有各主流浏览器的插件，各类 Office 软件的插件和客户端以及邮件的支持，所以发布后受到了很多的关注，也得到了许多国际机构和企业的赞助。大家可以继续观察它的未来趋势，也可以尝试部署使用。
[https://github.com/languagetool-org/languagetool](https://github.com/languagetool-org/languagetool)

---

### Publy：桌面端 CMS 工具
Publy 是一个桌面端的 CMS 工具，即内容管理系统工具，一般可用于制作静态的网页或博客资讯类的网站。Publy 认为在过去一段时间里，许多 CMS 工具都是面向开发者设计的，对于非开发人员不是很易用，所以他们回归传统方式，制作了一个桌面端软件，给你一个像 WordPress 这样传统工具的开发体验，但同时所有文件都保存在你的电脑中。当你需要发布时，它可以帮助你上传到 Netlify 或 AWS 等云服务平台上。
[https://github.com/publyapp/publy](https://github.com/publyapp/publy)

---

### Wartik：K8s 轻量级虚拟化插件
Wartik 是一个刚刚发布的 K8s 开源虚拟化插件。K8s 作为控制平面去管理容器以外的资源，已慢慢成为一种趋势，传统的虚拟化和 K8s 的结合也是一个比较热点的方向。比较热门的的项目有 Qword，Wartik 也在它的 GitHub 仓库里与 Qword 做了对比，提到它并未使用 Qword 或是 QEMU 软件，而是使用了 Cloud Hypervisor 的方式来运行虚拟机，从而获得更小的开销，同时它也提供了一个叫做 Knice 的工具，来帮助在 Wartik 的基础上创建嵌套的 K8s 集群。对 K8s 和虚拟化感兴趣的同学可以关注这个项目。
[https://github.com/berty27/wartik](https://github.com/berty27/wartik)

---

### Skeleton：全功能 Svelte UI 组件库
Skeleton 是一个全功能的 Svelte UI 组件库。目前 Svelte 框架正逐渐与 React、View、Angular 等成熟框架并驾齐驱，但是作为 UI 框架，社区的 UI 组件库丰富程度是一个很重要的生态指标，而 Svelte 在这方面是比较薄弱的，这一次 Skeleton 的出现是希望弥补 Svelte 在这方面生态的欠缺。
[https://www.skeleton.dev/](https://www.skeleton.dev/)

---

### K8s Gateway API
最后是一篇关于 K8s 最新进展的博客。近期 K8s 提出了 Gateway 网关 API，用于强化过往基于 Ingress 的流量控制方式。文章中也提到，在过去 Ingress 时代，像 Nginx、HAProxy 等一系列的厂商已经基于 Ingress 实现了大量复杂控制逻辑，远远超出了 Ingress 自身的定义，所以结合社区的需求，K8s 提出了原生的网关 API，对云原生感兴趣的同学可以进一步了解。
[https://kubernetes.io/zh-cn/blog/2023/09/27/gateway-api-graduates-to-ga/](https://kubernetes.io/zh-cn/blog/2023/09/27/gateway-api-graduates-to-ga/)

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。


