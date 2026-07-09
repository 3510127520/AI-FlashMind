<div align="center">
  <img src="https://img.shields.io/badge/AI--FlashMind-🧠-indigo" alt="Logo" width="120" style="border-radius: 50%" />
  
  # AI-FlashMind
  
  **校园专属智能题库与知识闪卡引擎**

  [![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-emerald?style=flat-sky&logo=vercel)](https://ai-flash-mind.vercel.app)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/3510127520/AI-FlashMind?style=social)](https://github.com/3510127520/AI-FlashMind)
  [![Language](https://img.shields.io/badge/Language-HTML5%20%2F%20JS-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)

  <p align="center">
    <a href="https://ai-flash-mind.vercel.app">🌐 在线体验</a>
    ·
    <a href="#-快速开始">🚀 快速开始</a>
    ·
    <a href="#-最新功能迭代">🆕 迭代日志</a>
    ·
    <a href="https://github.com/3510127520/AI-FlashMind/issues">🐛 提交问题</a>
  </p>
</div>

---

## 💡 项目简介

**AI-FlashMind** 是一款专注于将枯燥的“静态文档”秒变“高互动性交互题库”的轻量级纯前端 Web 应用。只需导入本地的复习资料（Word/TXT）或输入一段外语短文，系统将利用大语言模型（如 DeepSeek）智能萃取核心知识点，并为你量身定制包含**单选、多选、判断、填空**在内的多维题库，提供多邻国式的 gamification（游戏化）刷题体验。

无须配置复杂的后端，零配置，解压即用。

---

## 🆕 最新功能迭代 (Version 2.5) 听劝更新！

根据自媒体用户的真实反馈以及 3 次重构更新，我们上线了以下极具含金量的功能：

* 💾 **【新增】智能记忆引擎 (Persistence Memory)**
    基于 `localStorage` 的本地持久化架构。不小心刷新网页或意外关闭？没关系！答题进度、错题本、生成的题库全自动无缝缓存，支持**断点续答**。
* ✍️ **【新增】AI 填空题支持 (Fill-in-the-Blanks)**
    除了选择和判断，提示词工程全面升级！完美支持多空、单空填空题的高精度解析与智能答案文本匹配匹配校验。
* 🗺️ **【新增】全局可视化答题卡 (Answer Navigation Card)**
    新增可视化答题卡看板。已答、未答、错题一目了然，支持点击任意题号直接进行全局跨题跳转。
* 🔀 **【新增】一键打乱题库 (Shuffled Quiz Bank)**
    拒绝机械式的死记硬背！开启后可瞬间一键随机乱序排列当前题库，每次练习都是全新体验。

---

## ✨ 核心特性

- **📄 零门槛文档解析**：内置 `Mammoth.js`，支持直接解析 `.docx` / `.txt` 本地长篇大文本，前端分片上传处理，不锁死浏览器。
- **🎮 游戏化刷题反馈**：原生调用 `Web Audio API` 实现高低音频动态反馈，辅以 CSS 微动震动动画，模拟沉浸式刷题快感。
- **🤖 提示词防御红线**：深度优化 DeepSeek-Chat 的 System Prompt，确保 AI 吐出极为严谨、不乱码、100% 格式化的 JSON 题目流。
- **📕 错题本自动沉淀**：凡是答错的题目自动归档至“智能错题本”，附带 AI 专属详细解析，方便考前针对性突击。

---

## 🛠️ 技术栈

| 模块 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **UI 框架** | Tailwind CSS (CDN) | 原子化 CSS 极速响应式布局，完美适配手机/iPad/PC |
| **文本解析**| Mammoth.js | 客户端纯 JS 离线 Word 文档提取，保护数据隐私 |
| **AI 驱动** | DeepSeek API | 接入最省、最快、最聪明的国产大模型大底层 |
| **状态机制**| HTML5 LocalStorage + Native Audio | 免后端全本地运行，极致的极简响应与音效反馈 |

---

## 🚀 快速开始

本项目为**单文件/零构建部署（Zero-Config Single Page Application）**，无需克隆繁琐的 Node 环境。

### 方法 A：在线直接使用
点击直接访问 👉 [AI-FlashMind 网页端预览](https://ai-flash-mind.vercel.app)

### 方法 B：本地离线运行
1. 克隆本项目到本地：
   ```bash
   git clone [https://github.com/3510127520/AI-FlashMind.git](https://github.com/3510127520/AI-FlashMind.git)



1，进入目录，双击打开 index.html（或使用 Live Server 插件运行）。

2，填入你的 DeepSeek API Key 即可完美跑通所有流程！

📸 界面预览








🗺️ 发展路线 (Roadmap)
[x] 基于本地存储的断点续答记忆功能

[x] 智能填空题题型拓展

[x] 全局题号答题卡组件

[x] 题库防机械记忆随机打乱

[ ] 支持一键导出错题本为标准的 PDF / Markdown 格式

[ ] 丰富多邻国式游戏化卡牌激励 UI

[ ] 预设多语种、多学科刷题专属 Prompt 模版


📄 开源协议
本项目基于 MIT License 协议开源。欢迎自由 Fork、PR 和二创！如果这个项目帮到了你，请给作者点一个 ✨ Star，这是对我持续更新最大的鼓励！
