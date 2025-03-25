---
title: "[Hacker News 周报] SQLite 再次流行；JS 性能分析指南；魔方竞速工具 CubeDesk"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/603"
tags: []
date: 1652574600
bvid: BV1kT4y1B7Nh
---
了解科技资讯，把握行业脉搏。大家好，我是Koala，欢迎收看第603期Hacker News周报。

首先是一组SQLite相关的信息。

### BoltDB作者的博客｜如何在fly.io中使用SQLite
https://fly.io/blog/all-in-on-sqlite-litestream
---
第一个是云服务公司Fly.io的工程师Ben Johnson撰写的博客，他本人也是开源数据库BoltDB的作者，而BoltDB是Kubernetes里的存储，etcd背后使用的存储引擎。在这篇文章中，Ben介绍了他们如何在Fly.io里充分使用SQLite，并且开发了一个叫做Litestream的项目，来增强SQLite的复制能力。

### Litestream｜Sqlite实时复制工具
https://github.com/benbjohnson/litestream
---
第二个是由Fly.io开发的Litestream项目，它可以把SQLite复制到如对象存储和文件存储等许多不同的地方。

### Cloudflare发布D1
https://blog.cloudflare.com/introducing-d1/
---
巧合的是，就在本周，云厂商Cloudflare也发布了新产品D1。D1是专门为Cloudflare的serverless平台Cloudflare Workers设计的SQL数据库。在发布的文章中，Cloudflare也提到了SQL数据库也是基于SQLite开发的。从以上文章和项目中可以看出，轻量级的SQLite在近期受到了许多的关注。

### rqlite｜与D1相似的开源分布式数据库
https://github.com/rqlite/rqlite
---
由于D1还处于测试阶段，Cloudflare在发布D1时并没有披露过多的技术细节，但是有人介绍了一个与D1相似的，叫做rqlite的开源项目。rqlite是一个轻量级分布式数据库，也是以SQLite作为底层的存储引擎。

### CaskDB｜一个kv存储引擎的教学工具
https://github.com/avinassh/py-caskdb
---
说完SQLite这个主题，接下来介绍一个叫做CaskDB的项目。CaskDB不适用于生产环境，但可用于教学，它用相对少量的Python代码，向你演示了如何去实现一个embedded永久的KV存储。对于存储引擎有兴趣的同学，可以跟随它的代码去理解其中的细节。

### CubeDesk｜魔方提速工具
https://www.cubedesk.io/home
---
魔方是风靡全球的益智游戏，很多厉害的玩家可以在很短的时间内将魔方复原。CubeDesk是一个比较有意思的工具，它是专门为魔方爱好者设计的，它会将你解题思路，记录你的耗时和个人最好记录，来帮助你进一步提升成绩，它还可以让你与朋友们在线比赛。

### DFlex ｜一个适配所有JS框架的可拖拽的工具库
https://www.dflex.dev/
---
拖拽是前端操作中比较复杂的一类问题。DFlex是一个适配所有JS框架的可拖拽的工具库，它可以帮助你很好的解决这个问题，还可以与已有代码配合。

### 一篇JS性能分析指南的文章
https://blog.atomrc.dev/p/js-performance-profiling/
---
最后是一篇文章，文章介绍了如何在浏览器里定位性能问题，对于如何使用这些开发者工具还不太熟悉的同学，可以跟随作者的思路去了解。

以上就是本期Hacker News周报摘要，谢谢您的收看。

