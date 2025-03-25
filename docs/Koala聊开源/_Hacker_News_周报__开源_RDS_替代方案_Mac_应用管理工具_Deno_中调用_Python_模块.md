---
title: "[Hacker News 周报] 开源 RDS 替代方案；Mac 应用管理工具；Deno 中调用 Python 模块"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/664"
tags: []
date: 1691913090
bvid: BV1hp4y1g7mh
---
了解科技资讯，把握行业脉搏。大家好，我是Koala！欢迎收看第664期Hacker News周报。

---
### Deno 中调用 Python 模块
[https://github.com/denosaurs/deno_python](https://github.com/denosaurs/deno_python)

Deno Python是一个使Deno可以调用Python的模块，它通过Python C API与Python解释器对接，在Deno应用中可以导入并执行Python代码，充分利用Python丰富的生态系统。

Deno Python支持使用pip, conda等工具来管理Python依赖，并可以将起作用范围限定在Deno安装目录下，避免污染全局环境。它也提供了import和install方法简化依赖管理。Deno Python需要有现成的Python安装，这会带来一定的沙箱逃逸风险，但它消除了WebAssembly等解决方案的性能损耗和兼容性问题，能提供更纯粹的Python体验。Deno Python极大的扩展了Deno的能力边界，对于需要在Deno中利用Python生态的场景具有重要意义，值得Deno开发者关注。

---
### 为 Postgres 数据库提供语言服务协议支持
[https://github.com/supabase/postgres_lsp](https://github.com/supabase/postgres_lsp)

Postgres Language Server是一个为Postgres数据库提供语言服务协议支持的项目，它使用libpg query解析Postgres sequel语法，用于在编辑器内提供代码补全、语法高亮、语法错误提示等代码智能功能。

相比通用的sequel语言服务，Postgres Language Server更专注于Postgres sequel的特有语法。该项目还计划支持代码格式化、跳转定义等功能，并集成Postgres生态系统的其他开源工具。

---
### 开源 RDS 替代方案
[https://github.com/Vonng/pigsty](https://github.com/Vonng/pigsty)

Pigsty是一个开源的Postgres sequel部署和管理工具，其目标是成为一个免费的RDS替代方案。它提供了一个包含丰富扩展的Postgres sequel发行版，并基于Patroni实现了可自愈的高可用Postgres sequel集群。

Pigsty采用模块化设计，可以根据需要灵活组合不同的功能模块。它内置了完整的监控体系，可以通过Prometheus和Grafana站实现强大的可观测性，同时也提供了基于PG Backrest的数据备份与恢复能力。Pigsty使用Ansible playbook进行声明式部署，可以轻松定义不同类型的Postgres sequel实例，例如Standby集群、Citus集群等。

---
### Mac 应用管理工具
[https://github.com/milanvarady/applite](https://github.com/milanvarady/applite)

Applite是一个Mac应用管理工具，它利用Homebrew包管理器的能力，使MacOS用户可以一键安装、更新和卸载第三方桌面应用程序。Applite提供了简洁的用户界面，非技术用户也可以轻松使用。它完全开源免费，不收取任何费用，也不追踪用户信息。

在安全性方面，Applite本身不做沙箱化处理，但它安装的应用在首次打开时会由MacOS的防护机制进行恶意软件扫描。Applite可以与已有的Homebrew安装同时使用，也可以创建单独的Homebrew实例仅用于Applite。

---
### Rust 编写的跨平台 GUI 框架
[https://github.com/DioxusLabs/dioxus](https://github.com/DioxusLabs/dioxus)

Dioxus是一个使用Rust语言编写的跨平台GUI框架，支持构建Web、桌面、移动和命令行界面应用程序。它提供了类React的声明式编程模型，开发者可以通过熟悉的组件和hooks机制来构建界面。Dioxus拥有出色的性能表现，并内置了热重载等提高开发效率的功能。与Electron为代表的跨平台GUI方案相比，Dioxus不需要引入浏览器作为依赖，在体积与内存等资源的使用上都有着明显的优势。

---
### Go 编写的内容抓取框架
[https://github.com/projectdiscovery/katana](https://github.com/projectdiscovery/katana)

Katana是一个Go语言编写的内容抓取框架，由Project Discovery团队开发维护。它可以通过HTTP请求抓取网页，也可以启用headless模式，使用内置的Chrome浏览器渲染JavaScript并爬取。Katana可以方便的定制抓取的行为，它也提供了增量抓取、速率限制等选项，帮助遵循目标网站的规则。输出支持JSON格式，还可以存储每个请求的详细信息。Katana既能作为命令行工具使用，也可以作为库集成到其他Go语言程序中。它的出现大大降低了基于Go编写内容抓取程序的难度。

---

8月5日，文本编辑器Vim之父Bram Moolenaar的家人公布了他去世的消息，网络上充满了对他的缅怀。本周Hacker Newsletter主编Cale也在开头回忆了与Bram一起在乌干达做慈善的经历。他还说我一生中使用Vim的时间比不使用Vim的时间要多的多。Bram永远是一个总是为别人做更多事情的人。

以上就是本期Hacker News周报摘要，谢谢您的收看。

