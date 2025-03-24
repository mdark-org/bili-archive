---
title: "科技周报｜TypeScript 使用 Go 开发新编译器；快速灵活有趣的文档工具；终端 Markdown 幻灯片工具"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-737/"
tags: []
date: 1742098104
bvid: BV1UYQbYeELx
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看科技周报。

---
### TypeScript 使用 Go 开发新编译器
[https://devblogs.microsoft.com/typescript/typescript-native-port/](https://devblogs.microsoft.com/typescript/typescript-native-port/)

TypeScript 团队宣布了一个令人兴奋的消息，他们正在将 TypeScript 编译器移植到 Go 上，预计性能将提升10倍。这个新版本将大幅减少编译器的启动时间、构建时间和内存占用。
目前团队已经完成了部分功能的移植，并计划在2025年中发布支持命令行类型检查的预览版，年底前推出完整的语言服务。
对于大型项目开发者来说，这意味着更快的代码导航、重构和错误检查体验。
Koala认为有趣的是，Anders Hejlsberg亲自宣布了这一消息之后，一部分C#用户提出了异议，认为Hejlsberg所代表的微软阵营没有选择C#完成这项工作，会让C#社区感到沮丧。但也有相当一部分用户表示支持，并认为没有人比C#和TS之父Hejlsberg更懂得如何选择合适的语言来完成这项工作。

---
### Leaflet | 快速灵活有趣的文档工具
[https://about.leaflet.pub/](https://about.leaflet.pub/)

Leaflet是一个快速、灵活且有趣的文档工具，你可以用它构建单页文档，或者构建一个完整的wiki或网站。它的设计理念是简单易用，无需账户即可开始使用。
支持富文本、图片、子页面、链接和嵌入内容。Leaflet的核心特点是高性能、易用性和高度可定制化，适合从个人笔记到项目文档的多种场景。
Koala认为Leaflet的轻量化和灵活性，范范成为Notion和Google Docs的有力竞争者。页面之间的关联以及非常灵活的画布设计，都让创作成为一种享受。虽然目前还处在 Alpha 阶段，但它的潜力可小觑。

---
### Presenterm | 终端 Markdown 幻灯片工具
[https://github.com/mfontanini/presenterm](https://github.com/mfontanini/presenterm)

Presenterm是一个在终端运行的Markdown幻灯片工具，让你直接在终端中创建和展示幻灯片。它支持图片、GIF动画、代码高亮、自定义主题、PDF导出等功能，特别适合那些喜欢在终端中工作的开发者，尤其是使用Kitty, iTerm2或WezTerm等终端的用户。
Koala认为Presenterm的亮点在于它的高度可定制性，和对终端环境的深度集成。你可以通过简单的Markdown文件快速创建幻灯片，并且支持动态代码高亮、LaTeX公式渲染等高级功能。如果在技术会议或内部的分享中用它进行展示，观众们肯定会被你的极客精神所吸引。

---
### Swapy | 拖拽交换布局 JS 工具
[https://swapy.tahazsh.com/](https://swapy.tahazsh.com/)

Swapy是一个简单易用的JavaScript工具，能够将任何HTML已有布局转化为拖拽交换布局。你只需要在HTML中为布局的槽位和项目添加特定的数据属性，比如 data-swapy-slot 和 data-swapy-item，然后通过 createSwapy 函数初始化即可。Swapy内置拖拽动画效果，也可以随时启用或禁用拖拽功能，做到开箱即用。
Koala认为许多拖拽库的API都设计得非常复杂，来满足多种需求，Swapy则反其道而行之，通过极简的API设计，专注于主要拖拽场景的同时保持易用，让开发者体验更好。

---
### FilePizza | 浏览器中点对点传输文件
[https://github.com/kern/filepizza](https://github.com/kern/filepizza)

FilePizza是一个基于WebRTC技术的点对点文件传输工具，完全在浏览器中运行。它不需要中间服务器存储文件，数据直接从上传者的浏览器传输到下载者的浏览器，确保了传输的快速性和隐私性。FilePizza支持多文件上传、密码保护、实时传输进度监控等功能，并且可以在移动设备上使用。
Koala认为FilePizza的亮点在于它的去中心化设计，避免了传统文件传输服务中的上传瓶颈。对于需要快速、安全地分享文件的用户来说，这是一个非常实用的工具。它的开源性质也使得开发者可以轻松定制和扩展功能。

---
### DuckDB 推出本地 UI 界面
[https://duckdb.org/2025/03/12/duckdb-ui.html](https://duckdb.org/2025/03/12/duckdb-ui.html)

DuckDB团队和MotherDuckDB合作推出了全新的本地UI界面。这个UI界面可以直接通过命令行启动，或者通过SQL命令调用。它提供了交互式笔记本功能，支持SQL脚本编写和查询结果展示。UI还集成了数据库管理、表格摘要、类型推导等功能，帮助用户更高效地处理数据。所有查询都在本地运行，确保数据安全。
Koala认为DuckDB的本地UI界面，让数据分析和查询变得更加直观和便捷，适合需要频繁进行数据探索的用户。也让DuckDB这个强大数据分析工具的用户体验更上一层楼。

---

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。


