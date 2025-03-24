---
title: "[Hacker News 周报] Python 开发者的完美终端工具；、Systemd 示例教程；你的云上数据库安全吗？"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。Hacker Newsletter 和 Hacker News Daily 地址：https://mailchi.mp/hackernewsletter/589；https://www.daemonology.net/hn-daily/"
tags: []
date: 1644106890
bvid: BV1nL4y1s7q1
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala。欢迎收看第589期 Hacker News 周报。

---
### Happy Key：Python 开发者的完美终端工具
[https://github.com/koalalorenzo/happy](https://github.com/koalalorenzo/happy)

Happy Key 自称是一个新的强大前端框架，可开发现代化的动态的前端应用，而不必使用 JavaScript。与之前周报中曾介绍过的一些类似方案一样，大家都在考虑减少 JavaScript 的使用。在我们做的调研中，很多同学通过弹幕投票也表达过前端开发工具过于复杂。这些新的框架是否已生产可用还不得而知，不过前端开发正在寻求新的方向，看来已是事实。

---
### Systemd 示例教程
[https://systemd.academy/](https://systemd.academy/)

Systemd 是一个常用的系统服务，在日常使用中，大家可能不一定了解它的使用细节。这篇博客的作者介绍了她开发的一个 Systemd 使用的习题集，以及她开发的初衷。通过修改配置文件，你可以观察 Systemd 的工作方式是否符合你的预期，进一步掌握它的使用技巧。

---
### Malloy
[https://malloydata.dev/](https://malloydata.dev/)

Malloy 是一个实验性语言，用来描述数据的关联关系和变化方式。与上一期介绍的 PRQL 一样，它们都是 SQL 的一种方言，也会转译为 SQL。虽然这种新兴工具的使用性还有待观察，但可由此看出业界对查询语言的研究方向。

---
### Rich Cli
[https://github.com/hamdanal/rich-cli](https://github.com/hamdanal/rich-cli)

Rich Cli 是用 Python 编写的命令行工具，是基于一个使用非常广泛的命令行库 Rich 开发的。Rich 可以帮助你在终端上打印各种格式丰富的内容，而 Rich Cli 就是对 Rich 功能的进一步简化。如果你是命令行的重度使用者，可以了解一下这个工具，看是否合用。

---
### 你的云上数据库安全吗？
[https://bishopfox.com/blog/aws-security-database-hacking](https://bishopfox.com/blog/aws-security-database-hacking)

最后是一篇博客，博客作者介绍了她是如何在 AWS 上发现数以千计的开放数据库的。在作者的 hack 经历中，她首先对 IP 段进行了扫描，再对 IP 特定端口的返回结果进行记录后，她就获得了几十万条结果。这些结果中很多使用了 Kibana、Elastic 这些典型的服务端口。虽然使用 Elastic Search Rest API 很方便，但对于那些没有进行保护的数据库，只要知道它的端口，以作者的经历，她就可以进一步获得更多的数据。

总之，博客介绍了数据库挖掘的过程，并揭示了对数据安全的危害性。作者希望以此提醒，在云服务越来越方便的今天，一定要特别重视数据安全。在使用公有云服务时，务必去了解这些安全配置，否则会面临数据安全的风险。

---

以上就是本期 Hacker News 周报的摘要，谢谢您的收看，喜欢的话请一键三连，我们下期见。

