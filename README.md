# Astro + Notion 博客系统

> 🚀 基于 Astro 和 Notion 构建的现代化博客系统，采用 Vercel 设计风格，支持 SSR、多语言、SEO 优化等企业级功能。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-4.0+-orange.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Notion API](https://img.shields.io/badge/Notion-API-black.svg)

## ✨ 核心特性

### 🎨 设计与用户体验
- **Vercel 风格设计** - 采用 Vercel 官方配色方案和设计语言
- **响应式瀑布流** - 自适应列数的瀑布流布局，完美展示不同尺寸内容
- **智能图片处理** - 优先显示 Notion 封面图，无封面时使用精美默认图片
- **流畅动画效果** - 卡片悬停、加载动画、页面过渡效果
- **响应式布局** - 完美适配桌面、平板、移动端
- **深色模式** - 支持系统主题自动切换
- **个性化 Hero** - 可配置动画效果、视觉风格、统计展示
- **智能目录** - 浮动目录导航，支持进度显示

### 📝 内容管理
- **Notion 原生集成** - 直接渲染 Notion 块，无需 Markdown 转换
- **封面图片支持** - 优先使用 Notion 封面，自动回退到默认图片
- **瀑布流布局** - 响应式瀑布流展示，支持不同尺寸卡片
- **分页加载** - 首页显示10篇文章，支持"加载更多"功能
- **丰富块类型支持** - 标题、段落、列表、表格、代码、图片等
- **标签系统** - 支持文章分类和标签筛选
- **搜索功能** - 全站内容搜索，支持模糊匹配
- **RSS 订阅** - 自动生成 RSS 和 Sitemap

### 🌐 国际化与 SEO
- **多语言支持** - 中文/英文双语，可扩展更多语言
- **SEO 优化** - 完整的 Meta 标签、Open Graph、JSON-LD
- **性能优化** - SSR 渲染、图片优化、缓存策略
- **Google Analytics** - 集成 GA4 统计分析

### 🛠️ 开发体验
- **TypeScript** - 完整的类型安全
- **组件化架构** - 高度可复用的 Astro 组件
- **环境配置** - 灵活的环境变量配置
- **开发工具** - 热重载、代码高亮、错误提示

## 🚀 快速开始

### 环境要求

- Node.js 18.0+
- npm 或 yarn 或 pnpm

### 1. 项目初始化

```bash
# 克隆项目
git clone <repository-url>
cd astro-notion-blog

# 安装依赖
npm install

# 复制环境变量配置
cp .env.example .env
```

### 2. Notion 配置

#### 创建 Notion 集成
1. 访问 [Notion Integrations](https://www.notion.so/my-integrations)
2. 创建新集成，获取 Integration Token
3. 复制 Token 到 `.env` 文件

#### 创建内容数据库
在 Notion 中创建数据库，包含以下字段：

| 字段名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| `title` | Title | ✅ | 文章标题 |
| `slug` | Text | ✅ | URL 路径 |
| `status` | Select | ✅ | 发布状态 (published/draft) |
| `description` | Text | ✅ | 文章描述 |
| `tags` | Multi-select | ❌ | 文章标签 |
| `publish_date` | Date | ✅ | 发布日期 |
| `cover` | URL/Files | ❌ | 封面图片 (支持 URL 或文件上传) |

#### 配置数据库权限
1. 在数据库页面点击 "Share"
2. 邀请你创建的集成
3. 复制数据库 ID 到 `.env` 文件

### 3. 环境变量配置

编辑 `.env` 文件：

```env
# === 必需配置 ===
NOTION_TOKEN=secret_xxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxx

# === 网站基本信息 ===
SITE_LANGUAGE=en                    # zh | en
SITE_URL=https://your-domain.com
SITE_TITLE=My Blog
SITE_DESCRIPTION=A minimalist blog built with Astro and Notion

# === Hero 区域配置 ===
HERO_BADGE_TEXT=Welcome to my blog
HERO_TITLE=Thoughts on Frontend Development
HERO_SUBTITLE=Development
HERO_DESCRIPTION=In-depth technical articles and insights
HERO_ANIMATION=fade-up              # fade-up | slide-in | scale-in
HERO_STYLE=gradient                 # gradient | minimal | bold
HERO_SHOW_STATS=false              # true | false

# === 作者信息 ===
AUTHOR_NAME=Your Name
AUTHOR_EMAIL=your.email@example.com
AUTHOR_BIO=Frontend Developer & Tech Writer
AUTHOR_AVATAR=https://github.com/username.png

# === 社交媒体 ===
SOCIAL_TWITTER=@username
SOCIAL_GITHUB=username
SOCIAL_LINKEDIN=username

# === 分页配置 ===
POSTS_PER_PAGE=10                  # 每页显示文章数量

# === 可选配置 ===
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
DEFAULT_OG_IMAGE=https://your-domain.com/og-image.jpg
```

### 4. 启动开发

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动 SSR 服务器
npm start
```

访问 [http://localhost:3001](http://localhost:3001) 查看效果。

## 📁 项目结构

```
astro-notion-blog/
├── src/
│   ├── components/              # 组件库
│   │   ├── Hero.astro          # 首页 Hero 区域
│   │   ├── Navigation.astro    # 导航栏
│   │   ├── PostCard.astro      # 文章卡片
│   │   ├── TableOfContents.astro # 文章目录
│   │   ├── Search.astro        # 搜索功能
│   │   ├── ShareButtons.astro  # 分享按钮
│   │   ├── SEO.astro          # SEO 组件
│   │   └── ui/                # UI 组件
│   ├── layouts/
│   │   └── Layout.astro       # 基础布局
│   ├── lib/
│   │   ├── notion.ts          # Notion API
│   │   ├── i18n.ts           # 国际化
│   │   ├── cache.ts          # 缓存系统
│   │   └── markdown.ts       # Markdown 工具
│   ├── pages/
│   │   ├── index.astro       # 首页
│   │   ├── tags.astro        # 标签页
│   │   ├── rss.xml.ts        # RSS 订阅
│   │   ├── sitemap.xml.ts    # 站点地图
│   │   └── posts/[slug].astro # 文章详情
│   └── styles/
│       └── globals.css       # 全局样式
├── public/                   # 静态资源
├── .env.example             # 环境变量模板
└── astro.config.mjs        # Astro 配置
```

## 🎨 功能特性详解

### 瀑布流布局
响应式瀑布流设计，自动适配不同屏幕尺寸：
- **移动端**: 1列布局
- **平板端**: 2列布局  
- **桌面端**: 3-4列布局
- **卡片尺寸**: 自动变化的卡片高度，创造视觉层次

### 封面图片系统
智能图片处理机制：
```typescript
// 优先级：Notion封面 > 默认图片
const imageUrl = post.cover || 'https://images.unsplash.com/default-image'
```

### 分页加载功能
- **首页显示**: 默认加载10篇文章
- **按需加载**: 点击"加载更多"按钮加载下一批
- **无限滚动**: 可扩展为自动加载模式
- **性能优化**: 避免一次性加载大量内容

### Hero 区域个性化
支持多种动画效果和视觉风格：

```env
HERO_ANIMATION=fade-up    # 淡入向上
HERO_ANIMATION=slide-in   # 滑入效果  
HERO_ANIMATION=scale-in   # 缩放效果

HERO_STYLE=gradient       # 渐变风格
HERO_STYLE=minimal        # 极简风格
HERO_STYLE=bold          # 粗体风格
```

### 响应式设计
- **移动端**: 单列布局，汉堡菜单
- **平板端**: 双列网格，优化间距
- **桌面端**: 三列网格，侧边栏显示

### 搜索功能
- 全站内容搜索
- 模糊匹配算法
- 实时搜索结果
- 键盘快捷键支持

### 目录导航
- 自动提取文章标题
- 浮动目录面板
- 阅读进度显示
- 平滑滚动定位

### 图片优化
- **懒加载**: 提升页面加载速度
- **响应式图片**: 自动适配不同设备
- **圆角设计**: 统一的视觉风格
- **渐变遮罩**: 提升文字可读性

## 🚀 部署指南

### Vercel 部署 (推荐)

#### 前置准备
1. **创建 Notion 集成**
   - 访问 [Notion Integrations](https://www.notion.so/my-integrations)
   - 创建新集成，获取 Integration Token
   - 复制 Token 备用

2. **准备 Notion 数据库**
   - 创建包含以下字段的数据库：
     - `title` (Title) - 文章标题
     - `slug` (Text) - URL 路径
     - `status` (Select) - 发布状态 (published/draft)
     - `description` (Text) - 文章描述
     - `tags` (Multi-select) - 文章标签
     - `publish_date` (Date) - 发布日期
     - `cover` (Files & media) - 封面图片
   - 在数据库设置中分享给你创建的集成

#### 部署步骤

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **在 Vercel 导入项目**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

3. **配置构建设置**
   ```
   Framework Preset: Astro
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Node.js Version: 18.x
   ```

4. **添加环境变量**
   在 Vercel 项目设置的 "Environment Variables" 中添加：
   ```
   NOTION_TOKEN=secret_xxxxxxxxxx
   NOTION_DATABASE_ID=xxxxxxxxxx
   SITE_URL=https://your-domain.vercel.app
   SITE_TITLE=Your Blog Title
   SITE_DESCRIPTION=Your blog description
   AUTHOR_NAME=Your Name
   # 其他环境变量...
   ```

5. **部署项目**
   - 点击 "Deploy" 开始部署
   - 等待构建完成（通常需要2-3分钟）
   - 部署成功后，你会获得一个 `.vercel.app` 域名

6. **配置自定义域名（可选）**
   - 在项目设置中点击 "Domains"
   - 添加你的自定义域名
   - 按提示配置 DNS 记录

#### 部署后验证

1. **检查网站功能**
   - 访问首页，确认文章列表正常显示
   - 点击文章，确认详情页正常加载
   - 测试搜索功能
   - 检查响应式设计

2. **常见问题排查**
   - 如果页面空白，检查环境变量是否正确设置
   - 如果文章不显示，确认 Notion 数据库权限和字段名称
   - 查看部署日志获取详细错误信息

#### 环境变量完整列表

必需的环境变量：
```env
NOTION_TOKEN=secret_xxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxx
SITE_URL=https://your-domain.vercel.app
SITE_TITLE=Your Blog Title
SITE_DESCRIPTION=Your blog description
AUTHOR_NAME=Your Name
```

可选的环境变量：
```env
SITE_LANGUAGE=en
HERO_BADGE_TEXT=Welcome to my blog
HERO_TITLE=Thoughts on Frontend Development
HERO_SUBTITLE=Development
HERO_DESCRIPTION=In-depth technical articles and insights
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
DEFAULT_OG_IMAGE=https://your-domain.com/og-image.jpg
```

### Netlify 部署

1. **构建配置**
   创建 `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [build.environment]
     NODE_VERSION = "18"
   ```

2. **环境变量**
   在 Netlify 项目设置中添加环境变量

### 自托管部署

```bash
# 构建项目
npm run build

# 使用 PM2 管理进程
npm install -g pm2
pm2 start npm --name "astro-blog" -- start

# 或使用 Docker
docker build -t astro-blog .
docker run -p 3001:3001 astro-blog
```

## ⚙️ 高级配置

### 自定义主题

修改 `src/styles/globals.css` 中的 CSS 变量：

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.09 0 0);
  --primary: oklch(0.09 0 0);
  /* 更多变量... */
}
```

### 扩展 Notion 字段

在 `src/lib/notion.ts` 中修改 `BlogPost` 接口：

```typescript
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  // 添加新字段
  author?: string;
  category?: string;
}
```

### 添加新页面

在 `src/pages/` 目录创建 `.astro` 文件：

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="About">
  <h1>About Page</h1>
</Layout>
```

### 自定义组件

创建可复用组件：

```astro
---
// src/components/CustomCard.astro
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<div class="card">
  <h3>{title}</h3>
  <p>{description}</p>
</div>
```

## 🔧 故障排除

### 常见问题

**Q: Notion API 请求失败**
- 检查 `NOTION_TOKEN` 是否正确
- 确认数据库已分享给集成
- 验证 `NOTION_DATABASE_ID` 格式

**Q: 样式不生效**
- 确认 Tailwind CSS 配置正确
- 检查 CSS 变量定义
- 清除浏览器缓存

**Q: 构建失败**
- 检查 Node.js 版本 (需要 18+)
- 删除 `node_modules` 重新安装
- 检查环境变量配置

### 性能优化

1. **图片优化**
   ```astro
   <img src={imageUrl} loading="lazy" decoding="async" />
   ```

2. **分页加载**
   ```typescript
   // 分批加载文章，避免首屏加载过多内容
   const posts = allPosts.slice(0, POSTS_PER_PAGE);
   ```

3. **缓存策略**
   ```typescript
   // 启用缓存
   const cachedPosts = await getCachedPosts();
   ```

4. **代码分割**
   ```javascript
   // 动态导入
   const component = await import('./HeavyComponent.astro');
   ```

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📞 支持与反馈

- 🐛 [报告 Bug](https://github.com/your-repo/issues)
- 💡 [功能建议](https://github.com/your-repo/issues)
- 📧 [邮件联系](mailto:your-email@example.com)

## 📋 更新日志

### v2.1.0 (2024-12-12)
- ✨ **新增瀑布流布局** - 响应式瀑布流展示，支持1-4列自适应
- 🖼️ **优化封面图片系统** - 优先使用Notion封面，智能回退机制
- 📄 **实现分页加载** - 首页显示10篇文章，支持"加载更多"功能
- 🎨 **简化设计风格** - 统一卡片样式，移除复杂渐变色彩
- 🔧 **修复圆角显示** - 确保图片容器正确显示圆角效果
- ⚡ **性能优化** - 懒加载图片，优化首屏加载速度

### v2.0.0 (2024-12-11)
- 🎨 **Vercel设计风格** - 采用官方配色和设计语言
- 🌐 **多语言支持** - 完整的中英文国际化
- 📱 **响应式优化** - 全面的移动端适配
- 🔍 **搜索功能** - 全站内容搜索
- 📊 **SEO优化** - 完整的元数据和结构化数据

---

<div align="center">

**[⬆ 回到顶部](#astro--notion-博客系统)**

Made with ❤️ using [Astro](https://astro.build/) and [Notion](https://notion.so/)

</div>