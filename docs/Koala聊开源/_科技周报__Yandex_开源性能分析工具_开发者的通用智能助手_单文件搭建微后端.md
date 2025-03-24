---
title: "[科技周报] Yandex 开源性能分析工具；开发者的通用智能助手；单文件搭建微后端"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-731/"
tags: []
date: 1738749600
bvid: BV1mjNAe4EoR
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看科技周报。

### Perforator | Yandex 开源性能分析工具
[https://perforator.tech/docs/en/](https://perforator.tech/docs/en/)

Perforator是一款专为大型数据中心设计的现代性能分析工具，它可以轻松部署到你的Kubernetes集群中，以极低的开销收集性能数据。
Perforator也可以作为Linux perf的独立替代品运行，而无需重新编译你的程序。
这款分析器采用了EBPF技术，使其能够在不修改构建产物的情况下，分析不同语言和运行时的性能。
此外，Perforator还支持高级功能，如SPGO和用于AB测试的区分型配置文件。
Koala认为，Perforator是Yandex开发，并在其内部作为主要的集群级分析服务使用，它的非侵入性和强大的功能使其成为处理大规模性能监测任务的理想选择，也是EBPF技术的典型应用。

---

### Goose | 开发者的通用智能助手
[https://block.github.io/goose/](https://block.github.io/goose/)

Goose是一个为开发者设计的开源通用智能助手。
具体来说，无论是生成测试数据，编写脚本，还是处理复杂的部署任务，Goose都可以作为助手协助开发者完成。
它支持本地运行，确保任务高效执行，同时保留用户对过程的完全控制。
Goose还具有可扩展性，支持连接web MCP服务器或API。
目前，一部分已经试用的开发者们对Goose的评价不错，他们认为Goose不仅提高了工作效率，还增加了开发的乐趣。
Goose也标志着对于开发者来说，AI逐渐从写代码这一单一任务，演变成对全开发流程均可参与的新角色。

---

### Manifest - 单文件搭建微后端
[https://manifest.build/](https://manifest.build/)

Manifest是一个微后端工具，通过一个YAML文件为你的前端应用提供完整的后端功能。
它内置了数据库、管理面板、REST API和文件存储等核心功能，极大的简化了后端开发流程。
你可以在任何前端和移动端框架中轻松集成，甚至支持静态站点生成和服务器端渲染。
Koala认为，Manifest非常适合快速构建原型或小型项目，尤其是对于那些希望专注于前端开发的开发者。
也许性能和可扩展性可能对于大型应用来说并不足够，但它的易用性和灵活性让人印象深刻，在适合它的场景中还是值得尝试。

---

### Onlook – 设计师的 React 编辑器
[https://onlook.com/](https://onlook.com/)

Onlook是一款专为设计师打造的React网站编辑器，支持实时可视化编辑，并将修改内容同步至代码中。
它能够与任何使用Tailwind进行样式处理的React站点兼容，允许用户在Figma风格的界面中直接调整布局、颜色和文本等细节。
此外，Onlook还引入了AI功能，用户可以通过提示来构建设计和试演前端交互，提升开发效率。
Koala认为，Onlook在功能实现上更加重视有UI设计背景的用户的使用体验，帮助设计师直接将样式修改建议进一步实现为代码，加强设计与开发团队的协作能力。

---

### Bunster | 将 Shell 编译为可执行程序
[https://bunster.netlify.app/](https://bunster.netlify.app/)

Bunster能够将你的Shell脚本编译成独立的可执行程序。
与传统的脚本运行方式不同，Bunster生成的程序不依赖于任何外部Shell或解释器，而是完全自包含的二进制文件。
这意味着你可以在任何机器上运行这些程序，而无需担心环境依赖问题。
Bunster还支持静态链接，确保你的编译后程序在不同平台上都能稳定运行。
此外，它的模块系统让脚本的共享和复用变得非常方便。
Koala认为，Bunster为脚本开发者提供了一种高效且可靠的解决方案，特别适合需要分发脚本或确保跨平台兼容性的场景。

---

### Frappe Helpdesk | 开源工单系统
[https://frappe.io/helpdesk](https://frappe.io/helpdesk)

Frappe Helpdesk是一款开源的工单系统，能够帮助企业优化支持流程，高效处理问题并提升客户满意度。
它整合了来自邮件、网站表单、聊天等多种渠道的客户问题，将所有请求集中在一个队列中，确保没有遗漏或混乱。
通过自动化分配规则并配置SLA，Frappe Helpdesk能够显著提升团队生产力，缩短问题解决时间。
此外，内置的知识库和自动服务功能，还能帮助用户自动解决常见问题，减少工单量。
Koala认为，Frappe Helpdesk的开源特性允许高度定制化，能够适应不同企业的独特需求。
如果你正在寻找一个轻骑、高效且功能强大的工单系统，不妨试试Frappe Helpdesk。

---

以上就是本期科技周报的全部内容，谢谢您的收看，如果内容对您有帮助，请一键三连支持我们。

