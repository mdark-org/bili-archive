---
title: "[Hacker News 周报] Grafana Labs 新产品；Vite 与 Turbopack 性能对比；Heroku 替代方案"
description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/627"
tags: []
date: 1667708609
bvid: BV1u14y157NA
---
了解科技資訊，把握行業脈搏，大家好，我是Koala，歡迎收看第627期Hacker News周報。

### Grafana Labs推出持續性能分析平台Phlare
知名開源可觀測性廠商Grafana Labs本週開源了持續性能分析平台Flare，持續性能分析是可觀測性領域的新趨勢。通過持續採集CPU、內存等資源信息，幫助開發者更好地定位性能問題。除了核心功能之外，Flare還提供了高可用、存儲低成本介質、多租戶等特性。並且也可以與Grafana Labs的其他產品，例如日誌、監控指標進行關聯分析。
[https://grafana.com/blog/2023/05/10/introducing-grafana-phlare-continuous-profiling-built-for-observability/](https://grafana.com/blog/2023/05/10/introducing-grafana-phlare-continuous-profiling-built-for-observability/)

---

### Apache AGE：PostgreSQL 图数据库插件
Apache AGE是一個PostgreSQL插件，可以將PostgreSQL數據庫擴展為一個圖數據庫。與許多從零搭建的圖數據庫不同的是，AGE目標是使用戶可以通過圖模型查詢PostgreSQL中已有的關聯模型，更好的為已有數據庫提供圖式查詢能力。
[https://age.apache.org/](https://age.apache.org/
)

---

### Jace：将任意命令行工具输出转换为 JSON
Unix的哲學之一是每個工具都專注於將一件事情做到最好，再通過管道的方式在工具之間傳遞數據。而且在現代軟件中，隨著JSON數據格式的廣泛使用，大家發現JSON輸出結合JQ的過濾查詢能力可以編寫更靈活強大的腳本。但一些已有的命令行工具並不支援輸出JSON格式的結果，Jace就是為了解決這一問題而生的。Jace內置了一組常用命令行工具結果的解析器，從而使這些工具的輸出結果可以被轉化為JSON，進一步通過管道傳遞至其他命令行工具中。
[https://github.com/muesli/jace](https://github.com/muesli/jace)

---

### History：交互式的 Shell 历史查询工具
History是一個交互式的Shell歷史查詢工具，通過提供更加友好方便的查詢方式之外，History還支持通過端到端加密的方式，將Shell歷史在多個設備中共享。由於多設備共享需要後端服務器的支持，所以History也支持自部署同步服務，適合更多場景。
[https://github.com/ellie/history](https://github.com/ellie/history)

---

### FFmpeg Guide：强大的 FFmpeg 命令生成器
在之前的周報中，我們介紹過幾個FFmpeg的輔助工具，通過圖形化的方式快速編寫簡單常用的FFmpeg指令。今天介紹的FFmpeg Guide則是提供了功能更加強大的界面，幫助編寫複雜的FFmpeg過濾器語法。
[https://ffmpeg.guide/](https://ffmpeg.guide/)

---

### Vite 与 Turbopack 性能对比
上週我們介紹了Vercel的打包工具領域的新嘗試Turbopack。在Turbopack的發布宣傳中，曾經提到他們擁有10倍於Vite的速度優勢，而Vite的創造者尤雨溪本週也發布了多個Vite與Turbopack的性能對比測試結果。從結果上看，在Vite進行些調整後，Turbopack與之相比的性能優勢不足兩倍。Vercel也因為性能測試的結果不夠透明而受到一些質疑。
[https://twitter.com/youyuxi/status/1656373727750744064](https://twitter.com/youyuxi/status/1656373727750744064)

---

### Heroku 替代方案
在Heroku決定停止免費計劃後，社群中有人整理了一些值得一試的Heroku替代品。名單中的廠商如render.com、fly.io和netlify都提供了免費計劃，並且在易用性、穩定性上不輸Heroku，Heroku在調整之後可能會面臨更大的挑戰，未來何去何從值得關注。
[https://github.com/flipt-io/heroku-alternatives](https://github.com/flipt-io/heroku-alternatives)

---

以上就是本期Hacker News周報摘要，謝謝您的收看。

