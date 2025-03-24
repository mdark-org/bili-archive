---
title: "[Hacker News 周报] 终端工具大全；个人 RSS 主页；苹果发布更强芯片；"
description: "了解科技资讯，把握行业脉搏。每周快速浏览 Hacker News 精选。本期 Hacker Newsletter 地址：https://mailchi.mp/hackernewsletter/699"
tags: []
date: 1715489813
bvid: BV1P1421z7ZX
---
了解科技資訊，把握行業脈搏，大家好，我是 Koala，歡迎收看第 699 期 Hacker News 周報。

---
### Glance｜ 開源個人主頁工具
[https://github.com/glanceapp/glance](https://github.com/glanceapp/glance)

Glance 是一個開源的個人主頁工具，它可以讓你在一個頁面上集中展示多種不同的小組件，包括 RSS 訂閱、天氣預報、待辦事項、書籤、社交媒體等。Glance 的主題定制能力也非常突出，用戶可以自由調整顏色、佈局等方面，打造出獨一無二的主頁體驗。與此同時，Glance 對移動端的支持也很出色。在性能方面，Glance 採用了輕量級的架構設計，用以部署的二進制文件僅 15MB 左右，啟動迅速，渲染速度也很快。此外，Glance 針對多個組件並行加載做了優化，可以最大程度縮短等待時間。Glance 提供了詳細的文檔，介紹如何進行配置，開箱即可快速上手預配置的頁面。安裝方式包括下載二進制文件部署，以及更快捷的 Docker 容器方案。對於開發人員，只需幾個命令即可完成部署。感興趣的小伙伴不妨一試。

Koala 認為，在信息密集且多元化的今天，一個集成多種信息源的個人面板顯得十分實用。Glance 在移動端設備支持以及輕量化上的投入，使其也可以被集成到各類智能家居 IoT 設備中，成為隨處可用的個人信息小管家。

---
### Hurl｜一個命令行工具
[https://hurl.dev/](https://hurl.dev/)

Hurl 是一個命令行工具，通過執行簡單易讀的純文本語法，發送 HTTP 請求。與 curl 等類似工具相比，Hurl 的語法更加靈活，且接近自然語言，同時實現了鏈式執行多個請求，可以在後續請求中獲取和利用前一個響應中的返回值。在應用性方面，Hurl 適用了 REST 和 GraphQL API、HTML 內容抓取、SOAP 調用等多種場景，同時支持使用 XPath、JSON Path 操作返回值，並提供了文本、JUnit、TAP 和 HTML 等多種格式的測試報告輸出，方便集成到 CI/CD 流水線中。總來說，Hurl 將命令行工具與腳本化測試相結合，可以作為發送 HTTP 請求的輕量級命令行工具，也可以作為測試 HTTP 接口的工具使用。

Koala 認為，Hurl 的設計思路十分典型，將 curl 這樣常用的底層工具進行場景化的封裝，降低靈活性和通用性的同時，大大提升了使用的便捷性。

---
### Dokploy｜開源一站式部署管理平台
[https://dokploy.com/](https://dokploy.com/)

Dokploy 是一款開源的一站式部署管理平台，目標是讓你快速獲得高效的部署和運維體驗。你可以將它視為 Vercel、Netlify 等託管平台的開源替代品。通過 Dokploy，你可以在同一個平台中集中管理項目、數據庫、監控以及備份。每一項功能也都提供了直觀易用的界面和 API，而在部署方面，Dokploy 更是大顯身手，它內置了對 Docker 容器和 Traffic 反向代理的支持，助力你輕鬆部署和管理服務。無論是靜態網站、傳統應用還是容器化工作負載，Dokploy 都能通過 Git 庫直接構建部署，並支持自定義構建過程。

Koala 認為，在我們的頻道中已經介紹過多個與 Dokploy 類似的 PaaS 項目，但就實際情況來看，這些項目雖然能夠獲得一定的關注度，但都沒有達到同類商業項目的成功程度。這可能是因為在穩定性和成熟度上，這些開源項目還有較大的提升空間。

---
### Terminal Trove｜專注於 CLI 和 TUI 工具的網站
[https://terminaltrove.com/list/](https://terminaltrove.com/list/)

Terminal Trove 是一個專注於 CLI 和 TUI 工具的網站。網站的作者收集了許多他認為實用的終端程序。Terminal Trove 不僅每個月都會更新當月新收集的終端程序，並且點擊進入每個程序的詳情頁，都能看到該程序在不同操作系統和平台下的安裝方法，並搭配一個演示視頻以及文字描述。

Koala 認為，目前該網站已經收集了數百種終端程序，功能應有盡有。對於喜歡使用終端高效工作的程序員，瀏覽這個網站可以幫助你搭配出最適合你的終端工具箱。

---
### 微软发布 Phi-3 开源 AI 模型系列
[https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/](https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/)

近期，微軟人服務部門 Azure 發布了 Phi-3 開源 AI 模型系列。該模型的定位是 SLM 小語言模型，優勢在於性能遠超他們之前推出的上一代小語言模型 Phi-2。Phi-3 系列模型的參數規模分別是 3.8B、7B 和 14B。微軟的目標是通過這組模型，在本地設備中也能夠實現低延遲的推理功能。目前，用戶可以在 Azure AI Playground 上體驗 Phi-3。微軟也將在不久之後的 AI Show 直播中，為大家分享更多關於 Phi-3 的技術細節和應用實踐。

Koala 認為，作為擁有 Windows 操作系統的微軟，參與研究可以在終端設備中運行的模型順理成章，通過開源的方式發布模型，也與微軟近年來在開源社區中的出色表現一脈相承。

---
### 苹果发布最新一代芯片 M4
[https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/](https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/)

本週，蘋果公司發布了最新一代芯片產品 M4。首批將搭載新一代的 iPad Pro 產品推出。M4 採用的第二代三納米工藝製程，總晶體管數達 280 億，最高可集成 10 個內核，相比 M2 提升了高達 1.5 倍的計算能力，為 iPad Pro 的性能和能耗都帶來了巨大的提升。但讓大家最關注的還是 M4 的神經網絡引擎取得了巨大突破，其運算能力高達每秒 38 萬億次，是首代神經網絡引擎的 60 倍。

Koala 認為，M4 芯片結合更高帶寬的統一存儲，以及更強的 CPU 和 GPU，在搭配蘋果之前開源的 MLX 框架，很可能在終端設備中帶來極快的大語言模型推理速度。除此之外，這樣的硬件組合在音視頻類 AI 場景中也充滿競爭力。

---

以上就是本期 Hacker News 周報摘要，謝謝您的收看。

