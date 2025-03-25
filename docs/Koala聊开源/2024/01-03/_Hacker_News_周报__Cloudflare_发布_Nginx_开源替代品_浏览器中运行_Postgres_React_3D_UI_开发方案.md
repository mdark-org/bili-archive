---
title: "[Hacker News 周报] Cloudflare 发布 Nginx 开源替代品；浏览器中运行 Postgres；React 3D UI 开发方案"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/690"
tags: []
date: 1709440119
bvid: BV1NJ4m1Y7TW
---
### Pingora | Cloudflare 发布 Nginx 开源替代品
https://github.com/cloudflare/pingora 和 https://blog.cloudflare.com/pingora-open-source

了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第697 Hacker News 周报。本周云服务厂商 Cloudflare 开源了他们的网络编程框架 Pingora。以网络起家的 Cloudflare，起初基于 Nginx 构建了他们巨型的网络服务。但在过去的几年时间中，他们逐渐发现 Nginx 成为了他们进一步扩大服务规模的瓶颈。因此发起了 Pingora 这一项目。作为 Nginx 的增强替代品，目前该项目在 Cloudflare 的内部已经充分在生产环境中进行了测试，每秒在互联网中处理超过4000万个请求，且 CPU 使用率下降70%，内存使用率下降67%。Koala 点评，最早 Cloudflare 以 CDN 服务被开发者所了解，但随着他们在网络安全，serverless 等领域的深耕，已经迅速从一众 CDN 厂商中脱颖而出，变为功能更加全面的云服务厂商。Pingora 作为 Cloudflare 在最擅长的网络领域发布的作品，也是近期为数不多与 AI 无关，但仍能获得大量关注的开源项目。Cloudflare 认为 Pingora 在性能和安全性上取得的优势，也证明了使用 Rust 开发这一项目的正确性。

---

### PGlite | 浏览器中运行 Postgres
https://github.com/electric-sql/pglite

PGlite 是一个将 Postgres 数据库封装为 Wasm 的项目。基于 Wasm 封装之后，用户就可以在浏览器等 JS 运行时中启动一个完整的 Postgres 数据库。在浏览器中运行时，PGlite 会将数据持久化存储在 indexDB 中，而在 Node.js 等运行时中，则会将数据存储在文件系统中。Koala 点评，PGlite 项目是由数据同步引擎 Electric SQL 和 serverless Postgres 厂商 Neon 联合开发的。在 Wasm 技术帮助下，越来越多的数据库能够运行到浏览器中。眼下这项技术还只是被运用在数据库演示等基础场景中，但在未来结合数据协同和边缘计算等应用场景，可能还有更广阔的情境。

---

### Testcontainers | 一组基于 Docker 实现的开箱即用的容器
https://testcontainers.com/getting-started/

Testcontainers 是一组基于 Docker 实现的开箱即用的容器，主要是为了简化开发者们在单元测试中维护数据库等底层依赖的过程。在 Docker 的基础上，一方面 Testcontainers 将许多常用的外部服务封装为容器，另一方面提供了多种语言的 SDK，使得开发者在单元测试代码中能够以编程的方式按需起停外部服务。Koala 点评，在单元测试中 Mock 外部服务往往是一件费时费力还容易出错的工作，但管理外部服务作为测试依赖同样复杂。Testcontainers 抓住了这一开发者的痛点，虽然所使用的技术是已经十分普遍的 Docker，但是凭借开发体验和集成丰富度还是成为了不错的开源项目。

---

### Podinfo | Go 微服务模版项目
https://github.com/stefanprodan/podinfo

Podinfo 是一个模板项目，包含了一个基于 Go 开发的小型 Web 应用，其主要目的是展示基于 Go 开发的微服务部署在 K8S 中的一系列最佳实践，例如对外提供健康检查接口，收到中断信号时优雅退出，实时读取 K8S Secret 和 ConfigMap，集成 Prometheus 和输出结构化日志等。适合 Go 开发者学习参考。Koala 点评，许多开发者会抱怨自己所在的工作环境代码质量低，缺乏规范。Podinfo 这样的项目就体现了开源社区的力量，即使是在校学生也可以从 Podinfo 这样的项目中学习当前业界最为规范的开发模式，更好的达到工业开发的标准。

---

### uikit | React 3D UI 开发方案
https://github.com/pmndrs/uikit 和 https://twitter.com/BelaBohlender/status/1763258175770235046

React 3 Fiber 的开发团队发布了名为 UI Kit 的 3D UI 渲染工具集，并发布了一组基于 UI Kit 开发的界面，在头戴式 VR 设备 Quest 3 上的演示视频。随着 Vision Pro 等硬件的出现，开发 VR 环境下的 UI 也是未来一个重要的研究方向。Koala 点评，在移动端兴起的十年中产生了大量的应用与开发者就业机会，也有许多重要的项目在此期间应运而生。目前可穿戴式 VR 和 AR 设备还处于早期阶段，但如果未来它们逐渐成为新的主流交互模式，那么想必又会催生新一轮的客户端开发浪潮。

---

### Zoxide | 一个更聪明更强大的 cd 命令
https://github.com/ajeetdsouza/zoxide

Zoxide 定位为一个更聪明更强大的 CD 命令。CD 是 Unix 类系统中最常见的目录切换命令，Zoxide 并没有在功能上做过多的扩展，而是将用户访问过的目录进行记录，根据访问频率排序，使得下次访问时通过极少的键盘操作就能够抵达目标目录。Koala 点评，Zoxide 也是 Rust 的重写风潮中的典型例子。在 Rust 的社区中存在大量对已有命令行工具重写并增强的开源项目，也都有不少受众。不过从现阶段来看，这些新一代的命令行工具在各个发行版本中默认安装的比例还很低，也使得它们处于叫好不叫座的状态。同样的，这些命令行工具也无法成为像 K8S 之于 Go 社区那样的 Rust 社区的 Killer App。

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

