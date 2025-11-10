# CODEBUDDY.md 此文件为 CodeBuddy 在此仓库中工作时提供指导。

## 项目概述

RiskInsight 是一个用于风险分析和缓释规划的单页面 Web 应用程序。它有两种运行模式：使用预定义场景的模板匹配和通过 DeepSeek API 进行 AI 驱动分析。

## 开发命令

### 本地开发
```bash
# 启动开发服务器 - 任何 HTTP 服务器都可以
python -m http.server 8080
# 或者
npx serve .
# 或者直接在浏览器中打开 index.html
```

### 部署
```bash
# 部署到 GitHub (Windows)
deploy.bat

# 部署到 GitHub (Unix/Linux)
./deploy.sh

# 手动部署
git remote add origin https://github.com/yunhongfeng-tracy/risk-analysis.git
git branch -M main
git push -u origin main
```

## 架构设计

### 核心组件

**数据层 (`app.js` 第 1-150 行)**
- `scenarioData`: 包含 4 个预定义场景的静态风险分析模板
- 每个场景包含：名称、元标签、风险数组、解决方案数组
- 风险对象包含：标题、描述、影响、等级（高/中/低）、可能性（0-1）

**UI 状态管理 (`app.js` 第 151-200 行)**
- 模块级别缓存的 DOM 元素引用
- `apiConfig` 对象管理 DeepSeek API 配置，使用 localStorage 持久化
- API 配置对话框的模态状态

**渲染系统**
- `renderScenario()`: 处理基于模板的分析显示
- `renderAIScenario()`: 处理并显示 AI 生成的分析结果
- 两个函数填充相同的 DOM 容器，但使用不同的数据源

**API 集成 (`app.js` 第 201-280 行)**
- `analyzeScenarioWithAI()`: 调用 DeepSeek API 的异步函数
- 为结构化 JSON 响应构建详细提示
- 处理 API 错误和带回退提取的 JSON 解析

### 关键交互

**双分析模式**
- 单选按钮在"模板"和"AI"分析模式之间切换
- 模板模式：从 `scenarioData` 获得即时结果
- AI 模式：带加载状态和错误处理的异步 API 调用

**配置流程**
- API 配置存储在 localStorage 中（键：'deepseek_api_key', 'deepseek_model'）
- 用于 API 设置的模态对话框，带连接测试
- 配置在浏览器会话间持久化

**用户体验流程**
1. 用户输入场景描述
2. 选择分析模式（模板/AI）
3. 系统处理请求并渲染结果
4. 结果自动滚动到视图中，带平滑动画
5. 输入字段清空以进行下次分析

## 关键实现细节

### 安全性
- API 密钥仅存储在浏览器 localStorage 中，永不传输到仓库
- `deepseek-api` 文件通过 `.gitignore` 排除
- 无服务器端组件 - 纯客户端应用程序

### 错误处理
- API 失败显示用户友好的警告
- JSON 解析包含对格式错误响应的回退正则提取
- 连接测试在保存前验证 API 凭据

### 样式架构
- CSS 自定义属性用于一致的主题化
- AI 生成内容的单独样式（带机器人表情符号的 `.ai-generated` 类）
- 配置对话框的模态覆盖系统
- 移动优先的响应式设计

### 数据流
模板模式：用户输入 → `renderScenario()` → DOM 更新
AI 模式：用户输入 → `analyzeScenarioWithAI()` → `renderAIScenario()` → DOM 更新

该应用程序已准备好部署到 GitHub Pages，无需构建过程。