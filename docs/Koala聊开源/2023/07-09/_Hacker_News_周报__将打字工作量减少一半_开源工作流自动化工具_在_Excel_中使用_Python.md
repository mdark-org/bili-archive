---
title: "[Hacker News 周报] 将打字工作量减少一半；开源工作流自动化工具；在 Excel 中使用 Python"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/667"
tags: []
date: 1693738867
bvid: BV1o94y1471e
---
了解科技资讯，把握行业脉搏。大家好，我是 Koala。欢迎收看第 667 期 Hacker News 周报。

---
### Lightning CSS
https://lightningcss.dev/
Lightning CSS 是一个极快的 CSS 解析转换打包和压缩工具。它使用 Rust 语言开发，相比已有的 JavaScript 工具，速度可快 100 倍以上。单线程可每秒处理 270 万行 CSS 代码。Lightning CSS 支持现代 CSS 特性和语法，可根据目标浏览器自动转换语法和添加厂商前缀。其压缩器组合属性，移除默认值等方式，显著减小输出大小，使网站加载更快。它还支持 CSS 模块化，避免样式冲突，并可进行 tree shaking 优化。Lightning CSS 复用了 Firefox 中的 CSS 解析库，最大程度保证了浏览器兼容性。

---
### SQLedge
https://github.com/zknill/sqledge
SQLedge 是一个基于 PostgreSQL 逻辑复制的边缘计算数据库。它可以将 PostgreSQL 数据源的数据变更同步到本地的 SQLite 数据库，实现在边缘节点快速本地访问数据。SQLedge 主要面向有大量读请求的应用场景，可以显著减轻上游 PostgreSQL 的负载。SQLedge 的核心设计包括：利用逻辑复制生成 SQLite 语句的 SQL 生成器；自动检测新表的 SQL 解析器；本地读请求转发到 SQLite 的 PostgreSQL 代理。需要注意的是，SQLite 格式与 PostgreSQL 有差异，而 SQLedge 当前还没有做语句转换，因此 SQL 查询需要直接兼容 SQLite。

---
### Compress
https://github.com/eschluntz/compress
本周一位极客分享了他如何基于 AI 以及自己的日常语料库，开发了 compress 这个项目，节省了自己一半以上的打字时间。该项目可以从 Slack 聊天记录等来源中，分析用户的输入习惯，并提取高频输的内容作为候选缩写词组，通过一定的规则自动生成缩写词，并生成基于 AutoKey 的配置文件，在输入时将缩写转为完整内容。该项目的思路比较有趣，但熟练使用还需要一定时间的练习，并且对于非英语文本的适用性还有待探索。

---
### n8n
https://n8n.io/
n8n 是一个可扩展的开源工作流自动化工具。在 n8n 中使用节点的概念抽象一个可被自动化执行的动作，再通过编排多个节点的方式，连接任意服务，实现复杂工作流的自动化。n8n 已经集成超过 200 种节点类型，与许多商业化产品相比都很有竞争力，且经过多年的迭代，功能的稳定性与社区成熟度也达到了较好的水平。它可以容器化自部署，也提供了云服务版本 n8n Cloud。对于自部署版本还支持自定义节点类型，可以满足企业内部特有的自动化需求。

---
### dataherald
https://github.com/Dataherald/dataherald
Dataherald 是一个使用自然语言查询结构化数据的通用引擎。它的目标是：一，支持主流数据仓库；二，模块化设计，内置的核心组件均使用最佳实践，但同时也均可替换；三，随使用次数增加，其效果可持续提升。目前它支持 PostgreSQL、BigQuery、Databricks 和 Snowflake 等数据仓库。使用最新的大语言模型生成 SQL。用户可以通过扫描数据库，添加预置的 SQL 样本和额外描述信息的方式来丰富上下文，使 Dataherald 的执行结果更加符合预期。

---
### 在 Excel 中使用 Python
https://www.theverge.com/2023/8/22/23841167/microsoft-excel-python-integration-support
眼下，微软正在将 Python 编程语言引入 Excel，并现已推出此项功能的公开预览版本。在该功能的帮助下，Excel 用户可以利用 Python 来操作和分析数据。他们可以使用 Python 的绘图库和函数来进行数据分析，然后使用 Excel 的公式图表等功能进一步洞察。通过与 Anaconda 的合作，一些流行的 Python 库如 Pandas、Matplotlib 也可在 Excel 中使用。按目前透露的信息，Excel 中的 Python 计算过程，将在云端运行，再将结果返回到 Excel 工作表。总体来说，此项功能可大幅提升 Excel 的数据分析和可视化能力，也将为微软的公有云带来大量的计算负载需求。

---
### Code Llama
https://about.fb.com/news/2023/08/code-llama-ai-for-coding/
近期 Meta 发布了 Code Llama，该项目基于 Llama 2 构建，是一组能够从代码或自然语言提示生成代码和注释的专用模型。Code Llama 同样保持开源，目前提供三个模型，包括针对 Python 和自然语言指令的细调版本。测试显示 Code Llama 在公开代码生成基准测试上优于其他模型，有望增加开发者生产力和编程学习。

---
### GPT-3.5 Turbo 模型微调功能
https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates
最近 OpenAI 开放了 GPT-3.5 Turbo 模型的微调功能，进一步增强用户使用 GPT 模型的动力。在此之前，商用大语言模型的定制化能力很弱，这使得许多有定制化需求的用户走上了钻头开源模型二次训练的路线，但是目前以 OpenAI 为首的商用大语言模型能力，仍然显著超过开源模型，因此这种做法也意味着获得定制化能力的同时失去许多通用能力。而此次开放的微调功能效果如何还有待观察，但想必能让部分有定制化需求的用户重新开始考虑使用商用模型。

---
以上就是本期 Hacker News 周报摘要，谢谢您的收看。


