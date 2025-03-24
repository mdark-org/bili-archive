---
title: "[科技周报] 更轻松的 Python 网页自动化；用 Rust 重写 SQLite； 智能体时代全新模型"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-725/"
tags: []
date: 1734234688
bvid: BV1bCqdYrEHM
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看科技周报。

### Helium | 更轻松的 Python 网页自动化
[https://github.com/mherrmann/helium](https://github.com/mherrmann/helium)

Helium是一个Python网页自动化脚本框架，它比Selenium更轻量，操作更简单。通过一些封装好的high-level API，你就能用直观的方式操控浏览器，比如直接点击按钮，切换窗口，甚至是处理嵌套的iframe，而且它还能自动等待元素加载，避免网页异步逻辑导致脚本出错。Koala认为可以讲Helium看作是Selenium的进化版，虽然底层使用Selenium，但上层通过简化API和增加更合理的默认值，不仅代码量能减少30%到50%，可读性和稳定性也大幅提升。此外，基于命令行模式实现的单步编写加调试也非常实用和直观。

---

### Limbo | 用 Rust 重写 SQLite
[https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust](https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust)

数据库服务厂商Turso之前曾经fork SQLite引发关注，本次他们发布博客，介绍全新项目Limbo，目标使用Rust打造一个完全兼容SQLite的轻入式数据库，同时实现内存安全和现代架构的优势。通过Rust Limbo内置了一部IO和Wasm支持，目前在部分测试中表现出了超越SQLite的性能。Koala认为在SQLite的fork版libSQL中，Turso添加过原生复制，键量数据类型等功能。在此过程中，他们也意识到了非侵入式的代码修改，在设计一些新功能时的局限性。因此研发在内部启动了Limbo这一项目，并在近期对外开源。提供与SQLite同样优异的稳定性是Limbo的首要目标，因此在博客中也介绍了他们对Limbo进行测试的一些方法，值得阅读。

---

### Mouseless | 键盘操控鼠标
[https://mouseless.click/](https://mouseless.click/)

用键盘取代鼠标，Mouseless让这一切成为可能。通过输入简单的屏幕坐标，你可以在两秒内点击屏幕任何地方，比传统的鼠标移动快的数倍以上。无需记忆复杂操作，Mouseless通过一个直观的遮罩层就能引导你完成坐标的输入。Koala认为Mouseless不仅解决了键鼠切换的麻烦，还支持所有鼠标操作，如点击，拖拽甚至双击三击。对追求极致效率的人来说，它是一款提升生产力的利器，对需要无障碍操作的用户来说，更是一个非常友好的解决方案，键盘党们快来试试吧。

---

### Gemini 2.0 | 智能体时代全新模型
[https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/)

Google DeepMind发布了全新的Gemini 2.0版本，这款AI模型为智能体时代而生，它不仅增强了多模态能力，这次原生的图片和音频输出，还具备各类桌面工具调用功能，为用户提供更丰富的交互体验。Koala认为Gemini 2.0是一次从信息理解到行动决策的质的飞跃，凭借高效的原生多模态推理和工具整合，既能完成复杂任务，还在搜索，开发者支持，游戏代理等领域带来了更多的想象空间。本次博客由Google CEO，DeepMind CEO以及DeepMind CTO三人共同发布，也体现了Google对Gemini 2.0的重视。

---

### Kubespec | K8s YAML 文档工具
[https://kubespec.dev/](https://kubespec.dev/)

Kubespec是一个有趣的K8s YAML文档工具，涵盖了所有内置资源的详细信息，包括 workloads，cluster，networking，storage等类别。通过点击某个资源各个字段，就能查看对应字段的详细信息，结合实例能够进一步理解该资源在现实开发中的使用场景。对于需要了解K8s资源各版本变更细节的人，还能在网站上查看到各类版本中该资源的changelog。Koala认为K8s中资源数量多，字段复杂，一个直观的文档网站，无论是对新手还是资深用户都是有帮助的。

---

### 4 Colors | 配色工具网站
[https://www.iamsajid.com/colors/](https://www.iamsajid.com/colors/)

设计师Sajid开发了一个有趣的配色工具网站，其理念是：你只需用四种颜色就可以完成一套网站颜色主题设计，两种用于文字，一种用于高亮重要元素，一种用于添加个性。为了验证这一理念，网站提供了一个色调收录器，选择一个色调，网站就会自动生成对应的四种颜色以供你应用，同时还提供了暗色模式的切换。对于不太擅长视觉设计，但又希望自己的网站颜色更有个性的小伙伴，不妨试试这个工具提供的配色方案。

---

以上就是本期科技周报的全部内容，感谢您的收看。如果内容对您有帮助，请一键三连支持我们。

