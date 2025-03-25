---
title: "[科技周报] 开源云端 IDE；基于 HTTP/2 增强 API；AI 生成单元测试"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/702"
tags: []
date: 1717300251
bvid: BV1QD421g7UZ
---
了解科技资讯，把握行业脉搏，大家好，我是Koala。欢迎收看第702期科技周报。

---
### Sandbox｜开源云端 IDE
https://github.com/ishaan1013/sandbox
Sandbox是一款开源的云端代码编辑环境，集成了自定影AI代码自动补全和实时多人协作的功能。它的界面设计简洁大方，代码编辑器基于Monaco打造，支持多种主流编程语言的代码高亮和智能提示。最酷的是Sandbox还内置了AI助手，能够根据上下文为你生成代码建议，提升编码效率。除此之外，Sandbox的另一大亮点是支持多人实时协作编码。不过Sandbox目前还在开发阶段，如果你对这个项目感兴趣，不妨查看作者的Twitter，并关注后续的更新。在技术栈方面，Sandbox的前端使用Next.js，Tailwind CSS等流行框架，后端则基于Cloudflare Workers构建，使用了D1数据库、R2存储和Workers AI服务。Koala认为，虽然Sandbox距离一个成熟的云端IDE还有差距，但它的开发过程也体现了基于开源软件和云计算服务，如何加速迭代一个复杂软件。Sandbox引发关注的另一个原因是之前一直保持高调的同类商业化产品Replit，近期出现了裁员、退出办公室等一系列新闻，让大家重新审视云端IDE产品的未来。

---
### Namviek｜开源项目管理工具
https://github.com/hudy9x/namviek
Namviek是一款面向小团队的开源项目管理工具，它囊括了团队运作所需的基本功能。这款工具非常适合有一定开发技能，带领一个小团队，但预算有限的使用者，可以在项目前期最大程度降低管理成本。Namviek使用了Next.js，Node.js，MongoDB和Redis等技术栈开发，包含了诸如任务管理、团队协作、文件共享等核心功能。Koala认为，对于不想被同类SaaS软件付费的小型开发团队来说，轻爽的Namviek是一个不错的选择。对于想熟悉JS全栈开发的同学来说，Namviek的技术栈和代码也有很好的参考价值。

---
### Wired Elements｜手绘风格 UI 组件库
https://wiredjs.com/
Wired Elements是一款手绘风格的UI组件库。这些组件的特色在于随机的渲染效果，每次呈现都会略有不同，就像人工手绘一般，给人一种生动有趣的感觉。你可以将它们应用于线框图、模型原型，乃至任何需要手绘风格的场景。这组开源组件基于Rough.js和lit开发而成，包含了诸如按钮、输入框、滑动输入块等常见控件。除了原生的Web Components版本，Wired Elements也提供了View、svelte和React的使用指南。

---
### Vulcain｜基于 HTTP/2 增强 API
https://vulcain.rocks/
Vulcain是一种基于HTTP/2实现的客户端驱动API协议。在Server Push，Early Hints等技术的帮助下，Vulcain可以带来更低延迟的API体验，优化客户端性能，同时HTTP/2的双向通信能力也可以使服务端订阅的场景实现起来更简单且更健壮。如果想要体验Vulcain，最简单的方式是部署其开源的网关组件。该网关可以将任意满足OpenAPI规范的API进行封装。Koala认为Vulcain的概念非常新颖，将API请求的主导权交给客户端，这听起来与GraphQL有些类似，但其底层使用的方案让其兼容性更好，也更轻量化。

---
### ChatTTS｜文本转语音模型
https://github.com/2noise/ChatTTS
ChatTTS是一款专为对话场景设计的文本转语音模型，支持英文和中文两种语言。该模型使用了10万多小时的语音数据进行训练，包括中英文语料。在Hugging Face上开源的是一个4万小时预训练版本，并进行额外的语音精调训练。ChatTTS的突出之处在于专门为对话任务进行的优化，能够合成自然流畅，富有表现力的语音，并支持多个虚拟人物进行交互对话，同时可以预测和控制语音的细腻度特征，如笑声、停顿、感叹词等。作者也在B站发布了预览视频，效果非常出众。

---
### Cover-Agent｜AI 生成单元测试
https://github.com/Codium-ai/cover-agent
Cover Agent是Codium开源的AI自动生成单元测试工具，用于为项目快速补充单元测试覆盖。它由测试运行器、覆盖率解析器、提示词构建器和AI调用器这四个核心模块组成，通过解析代码仓库当前的测试用例状态，进行进一步的补全。目前Cover Agent支持通过命令行调用，未来还计划集成到流行的CI平台中。使用时需要提供源代码文件路径、测试文件路径、覆盖率报告路径、测试命令等参数。运行后会输出提示文本、日志和包含各测试用例执行情况的结果表等文件。Koala认为，相比于运行时代码，单元测试代码通常逻辑更为简单，但数量更多，并且可以容忍AI输出少量错误代码，由人工纠正。因此，使用AI编写单元测试也是诸多厂商尝试的方向。

---
以上就是本期科技周报摘要，谢谢您的收看。

