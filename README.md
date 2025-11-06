# RiskInsight 风险分析平台

一站式风险识别与缓释方案平台，支持模板匹配和AI深度分析两种模式。

## 🌟 功能特性

- **双模式分析**：模板匹配 + AI深度分析
- **智能风险评估**：基于DeepSeek API的专业风险分析
- **直观可视化**：风险等级图表和概率展示
- **解决方案推荐**：针对性的风险缓释措施
- **响应式设计**：支持桌面和移动端访问

## 🚀 在线体验

访问 GitHub Pages 部署地址：[https://your-username.github.io/risk-analysis](https://your-username.github.io/risk-analysis)

## 📦 快速开始

### 本地运行

1. 克隆项目
```bash
git clone https://github.com/your-username/risk-analysis.git
cd risk-analysis
```

2. 使用任意HTTP服务器运行
```bash
# 使用Python
python -m http.server 8080

# 使用Node.js
npx serve .

# 或直接用浏览器打开 index.html
```

### AI功能配置

1. 获取DeepSeek API Key：访问 [DeepSeek官网](https://platform.deepseek.com/)
2. 在页面右上角点击⚙️配置按钮
3. 输入API Key并保存
4. 选择"AI深度分析"模式即可使用

## 🎯 使用场景

- **企业风险管理**：供应链、运营、合规风险评估
- **保险规划**：个人和家庭保障方案设计
- **投资决策**：项目风险识别与缓释策略
- **业务咨询**：为客户提供专业风险分析服务

## 📁 项目结构

```
risk-analysis/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js             # 核心逻辑
├── README.md          # 项目说明
└── deepseek-api       # API密钥文件（请勿提交到仓库）
```

## 🔧 技术栈

- **前端**：HTML5, CSS3, Vanilla JavaScript
- **AI集成**：DeepSeek API
- **部署**：GitHub Pages
- **设计**：响应式布局，现代化UI

## 🛡️ 安全说明

- API Key仅存储在浏览器本地，不会上传到服务器
- 建议使用环境变量或配置文件管理敏感信息
- 生产环境请配置CORS和访问限制

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [DeepSeek](https://www.deepseek.com/) - 提供强大的AI分析能力
- [Inter字体](https://rsms.me/inter/) - 优秀的UI字体
- 所有贡献者和用户的支持

---

⭐ 如果这个项目对您有帮助，请给个Star支持！