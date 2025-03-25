---
title: "[Hacker News 周报] 结构化 diff 工具；百倍快的 Python linter；PREACT 状态管理新方案 signals"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/619"
tags: []
date: 1662856200
bvid: BV1Pe4y187LV
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala。欢迎收看第 619 期 HackerNews 周报。

---

### Difftastic｜结构化 diff 工具
[https://www.wilfred.me.uk/blog/2022/09/06/difftastic-the-fantastic-diff/](https://www.wilfred.me.uk/blog/2022/09/06/difftastic-the-fantastic-diff/)

首先介绍一个叫做 Difftastic 的命名行工具，它定位于提供更神奇的比对能力。在代码工作中，经常需要对两个文本，如新旧版本的代码进行比对。大部分的比对算法都是基于行列的位置进行比较，而 Difftastic 可以对内容进行结构化的比对，即在理解代码内容的基础上，尝试分辨哪些代码逻辑是不变的，从而给出更精确的比对结果。这篇文章的作者详细的介绍了他是如何使用 Rust 开发这一比对工具的，对 Rust 和其中算法感兴趣的同学可以去阅读这篇文章。

---

### ruff｜百倍快的 Python linter
[https://github.com/charliermarsh/ruff](https://github.com/charliermarsh/ruff)

Ruff 是一个工具，定位于非常快的 Python 代码的 linter。它与 Python 生态中已有的 linter，如 Pylint, Autoflake 等相比，可以提供 10 倍甚至百倍级别的速度优势。相比 Python 生态中已有的基于 Python 自身开发的 linter 工具，Ruff 则是基于 Rust 开发的。看来使用更加底层语言去开发更多工具，似乎成为流行趋势，也能带来比较明显的性能收益。

---

### DataEase｜数据可视化分析工具
[https://github.com/dataease/dataease](https://github.com/dataease/dataease)

DataEase 是一个开源的数据可视化分析工具。在 DataEase 中对接了多种数据源，如公有云上的 AWS Redshift，或是常用的各种开源数据源，如 ClickHouse, MySQL 等，也包括本地的文件，如 Excel。同时上层提供了更多的仪表盘和视图，让你去制作自己的分析报表。有数据可视化分析需求的同学可尝试使用这个项目。

---

### MATHLIVE｜展示和编辑数学公式的 Web Component
[https://cortexjs.io/mathlive](https://cortexjs.io/mathlive)

MathLive 是专门用于展示和编辑数学公式的 Web Component。与普通文本相比，数学公式有更复杂的排版和符号。MathLive 可以让你更简单的输入各种数学公式，并以非常优雅的方式展示出来。它还支持虚拟键盘等定制方式，也可以在界面上进行数学公式的编辑。如果你日常需要编辑数学公式或文档，或者需要将公式嵌入到你的项目当中，可以尝试使用。

---

### VSCheatsheet｜VS Code 快捷键合集
[https://www.vscheatsheet.com/](https://www.vscheatsheet.com/)

VS Code 是目前非常主流的代码编辑器之一。大家在使用代码编辑器时，总是会使用各式各样的快捷方式。这个叫做 VS Cheatsheet 的网站搜集了一系列 VS Code 常用的快捷键，并且在每一个快捷键上，除了标注它的输入方式和使用外，都配上了一个 GIF 动画去理解它的使用。

---

### Modern for Hacker News｜ 美化 Hacker News 界面的浏览器插件
[https://www.modernhn.com/](https://www.modernhn.com/)

我们 Hacker News 周报系列的大部分信息都来自于 Hacker News 论坛，但是 Hacker News 网站的页面风格相对比较简单。Modern for Hacker News 是一个浏览器插件，可以美化 Hacker News 的界面，使得变成一种更现代的样式。

---

### signals｜PREACT 状态管理新方案

[https://preactjs.com/blog/introducing-signals/](https://preactjs.com/blog/introducing-signals/)

最后是一篇文章，前端框架 Preact 的作者最近发布了一个新的思路 signals。它是一种更好的状态管理工具。这篇文章详细介绍了 signals 相比传统方案的各种优点，无论在代码的简洁程度还是性能上，都具有非常巨大的优势。这是否会是新一轮性能优化的方向，大家可以去深入了解。

---

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

