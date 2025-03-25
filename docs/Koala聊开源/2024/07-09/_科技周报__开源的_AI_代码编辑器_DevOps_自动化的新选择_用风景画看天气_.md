---
title: "[科技周报] 开源的 AI 代码编辑器；DevOps 自动化的新选择；用风景画看天气；"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-717/"
tags: []
date: 1727584563
bvid: BV147xkeQEFq
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala，欢迎收看科技周报。

---

### System Initiative｜DevOps 自动化的新选择
https://www.systeminit.com/
System Initiative 正式发布，这款工具让 DevOps 自动化迈上了新台阶，它抛开了传统的 基础设施即代码方式，通过 UI 编辑器实现云基础设施，数字孪生模拟，让反馈变得更快更直观，无需花时间等待验证配置是否正确，模拟器就能直接告诉你结果，系统内置的变更及功能，也让变更操作更加安全可控，实时同步最新状态，减少人为干预的麻烦。这款工具开源并欢迎社区的参与，既观好用且非常强大，适合各类团队使用。Koala 认为 System Initiative 提供了与众不同的 DevOps 自动化体验，不过在实际使用中，与 Infrastructure as code 流派相比，哪个更为使用，还需要运维人员给出答案。

---

### Weather Landscape｜用风景画看天气
https://github.com/lds133/weather_landscape
想象一下通过一幅风景画来了解全天天气是一种什么样的体验，这就是 Weather Landscape 项目带来的有趣功能，它将天气预报信息融入风景图像中，避免了生硬的数字展示，观感更加自然和舒适。图像中的小屋代表现在的时间，随着横轴向右延转，就是接下来 24 小时的天气变化。风景中的树木、花朵等元素，则用来表达温度、风向、雨量等天气信息。Koala 认为这款工具将天气可视化做到了极致，不再是让人眼花缭乱的数字表，而是通过简单的风景画，让天气变化一目了然，它特别适合搭配 E-ink 显示屏，让你在家中的角落里随时了解天气，感受科技与艺术的结合。

---

### Revive｜超快可配置的 Go 代码 linter
https://revive.run/
Revive 是一款快速且可扩展的 Go 代码静态分析工具，完全兼容 Go lint，它不仅比 Go lint 快两倍，还允许通过 Toml 文件来配置规则，灵活的启用和禁用特定 lint 规则。Revive 支持自定义规则和输出格式，让团队在代码质量检查上有更多选择。此外，如果你关闭类型检查，Revive 甚至比 Go lint 快六倍。Koala 认为 Revive 的高性能和可配置性，让它成为了 Go lint 的有力替代，尤其适合在开发和代码审查流程中需要严格规则的团队。

---

### deck.gl｜强大 GPU 驱动的数据可视化框架
https://deck.gl/
deck.gl 是一个利用 GPU 的数据可视化框架，专为探索大规模数据而设计，它采用分层的方式，让你轻松构建复杂的可视化，也可以将这些可视化结果包装成可复用的 layer，在多个项目间共享，目前社区也有丰富的 layer 可供使用。Koala 认为 deck.gl 支持高精度的 GPU 运算，即使是海量数据也能高效渲染，无论你用 Vanilla JS 还是 React，deck.gl 都能灵活集成，且支持与 Google Maps、Mapbox 等基础地图库结合，实现无缝的 3D 可视化效果，是探索地图类大数据的好帮手。

---

### Supervision｜轻松构建你的计算机视觉工具集
https://github.com/roboflow/supervision
Supervision 是一组计算机视觉工具集，专注于提高复用性和便捷性，无论你是要加载数据集，在图像或视频上绘制检测结果，还是计算某个区域的目标数量，这款工具都能帮到你。它与 Autometrics、Transformers、MMDetection 等主流库无缝对接，提供与模型解耦的接口，支持分类、目标检测和分割等任务。Koala 认为在 Supervision 的实力展示中，有足球赛球员实时检测，交通情况分析等多种生产级别场景，无论是开发新项目还是优化已有流程，它提供的工具都能提升开发效率，特别适合那些需要快速构建计算机视觉轻量级解决方案的团队。

---

### Void｜开源的 AI 代码编辑器
https://voideditor.com/
Void 是一个开源的 AI 代码编辑器，类似 Cursor，由于 Void 代码编辑器是从 VSCode fork 而来，所以用户可以轻松迁移所有主题、快捷键和设置，让你在熟悉的环境中使用你喜爱的 AI 工具来编写代码。Koala 认为 Void 实现了多个高效的 AI 功能，支持自动补全、智能搜索、上下文理解等操作，还可以一键索引你的文件，快速生成注释等内容，无论是本地托管自己的模型，还是直接调用 GPT、Claude 等热门模型，Void 都提供了灵活的解决方案，由于代码完全开源，对这些 AI 功能实现感兴趣的小伙伴，也可以阅读代码进行学习。

---

### PostgreSQL 17 正式发布
https://www.postgresql.org/about/news/postgresql-17-released-2936/
PostgreSQL 17 版本正式发布，本次更新重点提升了整体性能和可扩展性，尤其是在内存管理、存储访问、更大负载处理等方面的优化，使得数据库在高并发和大数据量场景下表现更加出色。Koala 认为 PostgreSQL 17 带来了很多开发者期待的功能，例如 Jason Table 命令，让 Jason 数据的处理更加简单，还增加了对逻辑复制和高可用性的增强，简化了数据库的版本升级和管理，对于有大规模数据需求或希望提升升级期间可用性的团队来说，新版本提供了更多的性能提升和工具支持，是值得升级的一个版本。

---

### Deno 2.0 候选版本发布
https://deno.com/blog/v2.0-release-candidate
Deno 2.0 候选版终于发布，这是 Deno 自 1.0 以来最大的更新，带来了许多新功能，包括引入 Node 的 process 全局变量以及一些重要的改动，例如将 Deno install 作为首选，弃用 Deno cache。此外，新的依赖管理、全新权限系统和 API 改动都进一步提升了使用体验。Koala 认为 Deno 2.0 重点优化了 Nodejs 兼容性，增加了 process 全局变量，让许多 Node 项目能直接运行于 Deno 上，改进的依赖管理，简化的权限系统以及与 Typescript 的深度集成，都让它更适合现代 Javascript 开发者，是一个值得尝试的新版本。

---

以上就是本期科技周报的全部内容，谢谢您的收看。如果内容对您有帮助，请一键三连支持我们。

