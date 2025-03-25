---
title: "[Hacker News 周报] 浏览器中运行 Postgres；与 Python 兼容的静态类型语言；分布式文件系统 JuiceFS"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/616"
tags: []
date: 1661041800
bvid: BV1bg411r7Fg
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第616A期Hacker News周报。

---

### Numpad
Numpad是一个新式的文本编辑器，可以同时进行文本编辑和数学计算。当输入数学公式时，Numpad会自动在右侧呈现出计算的结果。除了基础的计算之外，还支持函数、单位等功能。Numpad基于开源编辑器CodeMirror开发，大家在日常开发中有类似扩展需求时，也可以考虑这样的实现方式。

---

### Erg
https://github.com/erg-lang/erg
Erg是一个静态类型语言，定位于与Python兼容。Erg本身基于Rust的实现，内建了强大的类型系统，更可读的错误信息，同时可以与Python相互操作，从而做到零成本导入Python API。如果你希望使用Python，但又希望有类似Rust的健壮性和舒适的编辑器支持，不妨尝试一下Erg。

---

### JuiceFS
https://github.com/juicedata/juicefs
JuiceFS也是Koala聊开源频道的老朋友，近期它发布了1.0版本。JuiceFS是一个构建在对象存储之上的分布式文件系统，元数据可以选择使用Redis、TiKV的方式管理。基于JuiceFS，用户可以更容易将大数据、机器学习等负载对接至云存储中，同时JuiceFS也提供了CSI等工具，简化云原生环境下的运维。

---

### JiraCLI
https://github.com/ankitpokhrel/jira-cli
许多软件项目都在使用Jira管理。JiraCLI是一个对Jira的命令行客户端，方便dev们在命令行中便捷的管理Jira Ticket。

---

### Crunchy Data
https://www.crunchydata.com/blog/learn-postgres-at-the-playground
Crunchy Data近期发布了Postgres Playground项目。在浏览器中即可运行Postgres数据库，进一步学习一些教程。值得一提的是，这个Playground并没有在后端运行额外的Postgres数据库实例，而是将Postgres编译为WebAssembly，直接运行在浏览器中。

---

### JSON5
https://aseemk.substack.com/p/ignore-the-f-ing-haters-json5
最后推荐一篇与开源相关的文章，作者在2012年发布了开源项目JSON5，并维护至今。JSON5是一个语法更加简化的JSON变种。作者回忆了项目发布之初，许多人对该项目的抨击，其中不乏开源社区的重度参与者，例如Crash的创始人Mitchell Hashimoto。但是随着时间推移，许多重要项目如Chromium和公司如Apple，都开始使用JSON5。现如今，JSON5每周被下载超过6000万次。作者认为做开源项目应该更加坚持自己的想法和实际使用者的声音，不要过于在意批评。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。

