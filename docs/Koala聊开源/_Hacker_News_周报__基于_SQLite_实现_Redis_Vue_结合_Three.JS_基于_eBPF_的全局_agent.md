---
title: "[Hacker News 周报] 基于 SQLite 实现 Redis；Vue 结合 Three.JS；基于 eBPF 的全局 agent"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/696"
tags: []
date: 1713671549
bvid: BV1aE421M7JM
---
了解科技资讯，把握行业脉搏，大家好，我是Koala，欢迎收看第696期Hacker News周报。

---
### Redka｜基于 SQLite 实现 Redis
https://github.com/nalgeon/redka

Redka是一个基于SQLite实现的与Redis API兼容的KV数据库。与Redis相比，Redka能够将数据持久化存储在SQLite中，并提供事务支持。在使用方式上，不仅可以作为独立服务运行，也支持嵌入式的Gogo API调用。目前该项目已经实现了字符串、哈希、键管理事务的功能，并准备继续实现list、set等数据结构的支持。Koala认为，使用SQLite实现Redis的功能可以免去部署和运维Redis服务的复杂度，在一些测试或资源紧张的场景中有一定的使用场景。另一方面，考虑到近期SQLite在边缘场景中的流行程度，也可能会有厂商基于类似方案在边缘场景提供基于SQLite的Redis API服务。

---
### otel-profiling-agent｜基于 eBPF 的全局 agent
https://github.com/elastic/otel-profiling-agent

Elastic公司开源了他们在Linux平台上的全局快语言分析器otel-profiling-agent。该项目基于EBPF实现了OpenTelemetry中的Profiling signal功能，只需使用较少的资源就能够追踪分析系统中运行的各类程序。目前对于C、C++、Rust、Go、JVM、Python、Node.js等语言开发的应用程序都有开箱即用的分析能力，且在设计之路上保持100%非侵入式的理念，无需将代理或库加载到需要分析的进程中。同时，该团队还提供了一个桌面端程序，用于本地可视化分析采集到的观测结果。Koala认为，EBPF是目前可观测领域最受关注的技术之一，Elastic本次开源的分析器充分发挥了EBPF的能力。该项目目前还处于早期阶段，但已经受到不少关注。Elastic也有计划将项目捐赠给OpenTelemetry社区，目标是获得更广泛的使用。

---
### DrawDB｜免费易用的开源数据库设计工具
https://github.com/drawdb-io/drawdb

DrawDB是一个免费易用的开源数据库设计工具，用户可以在Web界面中创建数据库表结构、关联关系，还可以将设计好的表结构导出为DDL脚本，在数据库中执行。对于经常使用的用户，还可以通过模板功能将自己常用的数据库表结构制作成模板，快速开启一个新项目。Koala认为，尽管也有不少数据库设计工具，但是DrawDB也明确了自己的优势是免费，无需注册，操作简洁。凭借这几点，已与现有方案产生了差异性，推出后获得了不少用户的认可。

---
### TresJS｜ Vue 结合 Three.js 的应用开发框架
https://tresjs.org/

TresJS是一个将View和Three.js结合的3D Web应用开发框架，与React社区中的React 3 Fiber项目类似，目标是降低View开发者编写Three.js程序的复杂度。在TresJS中可以使用View模板声明式的渲染一个3D场景，也可以基于TresJS团队开发的另一个项目Centos简化3D模型、相机参数、3D控制器等代码的开发工作，更快构建出应用。Koala认为，前端框架的开发体验离不开社区生态，目前来看React在这方面还是处于领先地位，而View社区也聚集了不少优秀的项目进行追赶。新框架即使本身拥有一些亮点功能，但在社区生态方面还有很长的路要走。

---
### reader API｜将网页内容供 LLM 使用的函数服务
https://github.com/jina-ai/reader 和 https://github.com/mendableai/firecrawl

在使用LLM开发知识类问答应用时，通常需要将网页中的内容作为素材纳入知识库。Jina AI近期开源的Reader API是一个为这一场景设计的函数服务，可以将特定网页中的内容清洁为简洁的文本供LLM使用。在实现上，Reader API使用了我们之前介绍的Mozilla readability库，用于从网页中提取主要信息。在Reader发布之后，也有其他同类开源项目，例如Fire Crew，有兴趣的小伙伴可以对比选用最符合自己需求工具。Koala认为，Reader API是LLM场景继续细分的一个典型例子，将清洗HTML内容这样的环节独立为函数服务，能够更好的在各种上层应用中复用，其中使用的readability库原本用于在Firefox浏览器中提供阅读模式，现在被巧妙的应用在这一场景中，也可以让开发工作事半功倍。

---
### Twenty｜ 流行的开源 CRM 方案
https://twenty.com/

Twenty是目前较为流行的开源CRM方案之一，对一些小型企业来说不一定想采用复杂庞大的Salesforce或Zendesk等软件。与他们相比，Twenty更加轻量化和灵活，不仅提供开箱即用的UI，也提供Rust和GraphQL API可用于二次集成。对有自部署能力的用户来说，在成本上也有一定的优势。Koala认为，CRM软件是许多公司销售体系的中枢，Twenty在简单易用之余，也需要格外关注稳定性和安全性。另一方面，当小型客户成长后是否会选择逐步迁移到Salesforce等商业化软件，也是Twenty需要面临的挑战。

---

以上就是本期Hacker News周报的摘要，谢谢您的收看。


