---
title: "[Hacker News 周报] 新锐代码编辑器开源；年度最受关注 React 状态管理工具；TypeScript 增强规则"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/685"
tags: []
date: 1706411012
bvid: BV1g64y1w7uG
---
了解科技资讯，把握行业脉搏，大家好，我是 Koala。欢迎收看第685期 Hacker News 周报。之前我们曾经介绍过，专注于性能与极简设计的代码编辑器 Zed，本周该项目正式转为开源形式维护。开源团队表示，开源可以让 Zed 链接更广大的开发者社区，获得更多的贡献和支持，最终建立一个更加优秀和流行的代码编辑器。
 与此同时，他们也同步推出了名为 Zed Channels 的实时协同编辑功能。Zed 的商业计划是面向企业用户提供增值服务，而不是简单的销售编辑器软件。所以团队认为开源对他们的商业模式不会有太大冲击。

---

### TypeSpec
https://typespec.io/
TypeSpec 是微软推出的 API 定义工具。TypeSpec 的语法深度参考 TypeScript，借助强大的表达能力，可以更加便捷的定义 API schema，再进一步通过工具链自动生成前后端代码，OpenAPI 文档和 Protobuf schema 等内容。
 同样借助在 VSCode 编辑器领域的经验，TypeSpec 具备代码补全等良好的开发体验，可以进一步提升开发者的效率。借助 TypeScript 如今的强势地位，TypeSpec 希望能够通过其与 TypeScript 的集成能力在 API 开发领域占据一席之地。

---

### ts-reset
https://www.totaltypescript.com/ts-reset
在 TypeScript 中，一些函数的类型推导可能过于严格或过于松散，在使用时不够便捷或容易产生意料之外的类型错误。TS Reset 就是一组由开源社区维护的 TypeScript 增强规则，对这些场景进行了优化。
 作者将它与 Reset CSS 等重置样式的工具库进行了类比，希望 TS Reset 成为大家编写 TypeScript 时的一组常用预置规则，也希望一部分实现可以逐步进入 TypeScript 的主线代码中。

---

### visx
https://airbnb.io/visx/
Visx 是 Airbnb 团队开发的数据可视化库。它专注于保持轻量级和可扩展，底层基于 D3 实现。希望为开发者带来强大可视化能力的同时，又容易和各类应用中的状态管理、动画和样式工具配合使用。在示例中，Visx 也展示了远超普通图表库的自定义能力，对于需要在应用中实现复杂自定义图表的开发者来说，是一个值得关注的方案。

---

### Zustand
https://zustand-demo.pmnd.rs/
Zustand 是今年最受关注的 React 状态管理工具之一。它的特点是使用非常简单，只要创建一个 store hook，就能在不同组件里引用这个 hook 获取状态，不需要任何 context 和 provider 等额外复杂逻辑。文档中作者也将它与 Redux、Recoil 等其他同类工具进行了对比，讲解了为什么 Zustand 可以使应用代码更为简洁，且更容易优化渲染性能。

---

### 一本讲解查询引擎工作原理的电子书
https://howqueryengineswork.com/
最后推荐一本讲解查询引擎工作原理的电子书。作者 Andy Grove 长期参与开发维护 Apache Arrow、DataFusion 等项目，对查询引擎有着深入的理解和实践经验。在这本电子书中，他对查询引擎中常见概念的实现形式，以及上诉项目里的技术细节进行了讲解。此外，他还提供了示例代码，让读者可以通过实际运行更好的理解书中内容。

以上就是本期 Hacker News 周报摘要，谢谢您的收看。

