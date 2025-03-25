---
title: "[Hacker News 周报] Vite 3.0 发布；Bun 性能实测；性能更强的 Prometheus 替代方案"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/612"
tags: []
date: 1658018208
bvid: BV16N4y1T7Hu
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第612期Hacker News周报。

---

### Vite 发布3.0版本
https://vitejs.dev/blog/announcing-vite3.html
近期Vite发布了3.0版本，带来了一系列功能的提升。Vite是Vue.js的作者尤雨溪开发的构建工具，对于Vue和Vite之间的关联以及尤雨溪的开源故事，我们曾有过一期深度分析的视频介绍，感兴趣的同学可以前往观看。

---

### VictoriaMetrics｜Prometheus 的开源替代品
https://victoriametrics.com/products/open-source/
VictoriaMetrics是一个高性能的开源时序数据库，除了高性能之外，它为大家所熟知的原因是因为它是著名的同类开源项目普罗米修斯的开源替代品。普罗米修斯的应用非常广泛，但它本身也有一些性能和设计的问题，使得它在大规模场景下表现的不是很令人满意。VictoriaMetrics是对它的全方位的改进，在跟普罗米修斯保持API兼容的基础上，提供了更好的性能。

---

### 对 Bun 和 Node.js 对比实测
https://techsparx.com/nodejs/bun/1st-trial.html
接下来是一篇文章，作者介绍了对Ban和Node.js的兼容性以及性能上的测试过程。Ban是我们在上一期周报中提到的一个新的JS的运行时，它在官网上主打与Node.js和Deno的性能对比。这篇文章的作者希望通过亲自测试来观察Ban的性能是否如所介绍的那么好，作者进行了与网站渲染和文件拷贝相关的测试，得出的结论是，在所测试的场景下，Ban与Node.js在性能上并没有太大的差异。不过他也提到了，Ban的团队非常强调在性能上的提升，所以作者也会继续深入研究，为何在他的测试场景下没有达到预期的性能提升，对其中细节感兴趣的同学可以关注后续的进展。

---

### Cleanupphotos｜修图工具
https://cleanupphotos.com/
修图已成为我们生活中很常见的需求，一些修图工具也往往需要很多专业知识和复杂的过程。Clean Up Photos是一个非常实用和易用的在线工具，它可以帮助你移除照片中你不想要的内容，在它演示的例子中，可以勾选并移除不想要在照片中出现的物体，如果移除后还有残留，可以进行二次移除，效果还是不错的。

---

### Vim 在线交互式学习平台
https://www.vimified.com/
这是一个在线学习Vim的交互式课程，Vim是Linux发行版中非常常见的文本编辑器，以有大量的快捷键实现操作而著称，但是强大的功能也伴随着复杂的学习过程，所以在这个平台上，通过一系列课程，你可以学习如何基于Vim的指令完成常见的文本操作。

---

### 推荐《PostgreSQL 14 Internals》一书
https://postgrespro.com/community/books/internals
最后是一本叫做Postgre Cycle 14 Internals的书，Postgre Cycle是应用十分广泛的数据库，这本书深入讲解了Postgre Cycle在实现层面的许多细节，对于想了解数据库工作原理，以及想深入使用Postgre Cycle的用户是值得一读的。

---

以上就是本期Hacker News周报摘要，谢谢您的收看。

