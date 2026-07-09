<div align="center">
  <img src="https://img.shields.io/badge/AI--FlashMind-🧠-indigo?style=for-the-badge" alt="Logo" />
  
  # AI-FlashMind
  
  **基于 DeepSeek 驱动的轻量级无后端交互式刷题与闪卡系统**

  [![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-emerald?style=flat-square&logo=vercel)](https://ai-flash-mind.vercel.app)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/3510127520/AI-FlashMind?style=social)](https://github.com/3510127520/AI-FlashMind)

  <p align="center">
    <a href="https://ai-flash-mind.vercel.app">🌐 在线立即体验</a>
    ·
    <a href="#-快速开始与本地开发">🚀 本地部署指南</a>
    ·
    <a href="#-最新听劝更新日志">🆕 迭代日志</a>
    ·
    <a href="https://github.com/3510127520/AI-FlashMind/issues">🐛 提交 Bug / 建议</a>
  </p>
</div>

---

## 💡 项目简介

**AI-FlashMind** 是一款专注于将枯燥的静态学习资料秒变“高互动性交互题库”的单页 Web 应用（SPA）。用户只需导入本地的复习资料（Word/TXT）或输入一段英文外刊，系统将通过严谨的提示词工程，驱动大语言模型（DeepSeek）智能萃取核心知识点，并自动转化为包含**单选、多选、判断、填空**在内的多维多功能题库。

### 🛡️ 优秀架构亮点：安全、合规
与市面上其他直接在前端暴露大模型 `API_KEY` 的开源“套壳”项目不同，本项目采用了 **前端 + Vercel Serverless Functions (Backend Proxy)** 的企业级安全架构。所有敏感请求均通过后端的 `/api/chat` 路由进行安全代理，彻底杜绝了用户 API 密钥在浏览器端被截获、盗刷的风险。

---

## 🆕 最新听劝更新日志 (Version 2.0)

根据多平台备考用户的真实痛点反馈，本项目近期完成了 3 次核心架构重构，上线了以下极具含金量的功能：

* 💾 **【新增】本地持久化记忆引擎 (Persistence Memory)**
    基于 `localStorage` 构建了全状态缓存机制。当用户手滑刷新、意外关闭网页或更换设备时，系统能够**无缝恢复作答进度**，并静默同步加载后台剩余的 AI 题库，实现“断点续答”防丢分功能。
* ✍️ **【新增】AI 填空题算法支持 (Fill-in-the-Blanks)**
    提示词红线再度升级！完美攻克了传统 LLM 输出填空题格式易乱码的难题。前端引入了**大小写模糊、去空格的智能文本比对引擎**，支持高精度的填空题自动判卷。
* 🗺️ **【新增】全局可视化答题卡 (Answer Card Dashboard)**
    引入全局答题状态看板。已答题、未答题、错题分布一目了然，支持点击任意题号在全局题库中进行跨题自由跳转，大幅提升复习效率。
* 🔀 **【新增】题库一键随机乱序 (Shuffled Quiz Bank)**
    拒绝机械式的死记硬背！开启乱序模式后可瞬间打乱题库排列顺序，确保每次练习都是全新的逻辑检验。

---

## ✨ 核心特性

- **📄 纯前端离线解析**：内置 `Mammoth.js`，支持在客户端直接将 `.docx` / `.txt` 本地大文本提取为纯文本，并采用**智能切片算法（每 1500 字分块）**异步流式处理，防止大文本导致浏览器内存崩溃。
- **🎮 游戏化刷题反馈**：原生调用 `Web Audio API` 毫秒级合成高低音频反馈（正确/错误/通关），辅以多邻国同款 **CSS 错题震动效果**，带来沉浸式、爽快的刷题体验。
- **📕 错题自动沉淀**：凡是答错的题目自动归档至“智能错题本”，附带 AI 专属的详细考点深度解析，方便考前针对性精准突击。

---

## 🛠️ 技术栈选型

- **Frontend:** Vanilla JS (纯原生轻量级 JavaScript) + Tailwind CSS (原子化响应式布局)
- **Document Parser:** Mammoth.js (客户端 Word 离线解析)
- **AI Core:** DeepSeek API (deepseek-chat 模型，采用 Stream 流式数据传输机制)
- **Deployment & Proxy:** Vercel Serverless Functions (`/api/chat` 安全路由代理)

---

## 🚀 快速开始与本地开发

由于本项目采用了安全代理架构，如需在本地运行或调试后端的 `/api/chat` 接口，请按照以下步骤进行：

### 方法 A：一键线上部署（推荐，零门槛）
1. 将本项目 Fork 到你的 GitHub 账号下。
2. 登录 [Vercel 官网](https://vercel.com/)，导入该项目。
3. 在 Vercel 的项目设置中，添加环境变量：
   - `DEEPSEEK_API_KEY` = `你的 DeepSeek 官方 API 密钥`
4. 点击 Deploy 即可瞬间生成属于你自己的安全在线刷题网站！

### 方法 B：本地开发与调试
本地开发需要借助于 Vercel 官方提供的 CLI 工具来运行后端代理。
1. 克隆项目：
   ```bash
   git clone [https://github.com/3510127520/AI-FlashMind.git](https://github.com/3510127520/AI-FlashMind.git)
   cd AI-FlashMind
全局安装 Vercel CLI：

Bash
npm install -g vercel
在项目根目录下创建一个 .env 文件，写入你的 Key：

代码段
DEEPSEEK_API_KEY=your_actual_api_key_here
启动本地代理服务器：

Bash
vercel dev
启动后，访问命令行输出的 http://localhost:3000。此时，前端的 fetch("/api/chat") 请求就会被正确路由到本地的 api/ 目录中进行处理，完美跑通整个本地刷题流程！

📸 界面预览
![Uploading 动画.gif…]()


🗺️ 发展路线 (Roadmap)
[x] 基于 localStorage 的断点续答记忆功能

[x] 智能填空题题型拓展与文本智能模糊比对

[x] 全局题号答题卡控制组件

[x] 题库防机械记忆一键随机乱序

[ ] 支持一键导出错题本为标准的 PDF / Markdown 打印格式

[ ] 丰富多邻国式游戏化卡牌激励 UI 与积分排行

[ ] 预设多语种（考研、雅思、四六级）刷题专属提示词模板

📄 开源协议
本项目基于 MIT License 协议开源。欢迎自由 Fork、提交 PR 进行二创！

如果这个项目对你的备考或学习有所帮助，请为作者点一个 ✨ Star，这是我作为独立开发者持续更新的最大动力！
