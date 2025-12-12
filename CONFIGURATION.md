# 博客配置指南

## 环境变量配置 (.env)

### Notion 配置
```env
# Notion API 配置
NOTION_TOKEN=your_notion_integration_token_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

### 网站基本配置
```env
# 网站语言 (支持: en, zh)
SITE_LANGUAGE=en

# 网站基本信息
SITE_URL=https://your-domain.com
SITE_TITLE=Minimalist Blog
SITE_DESCRIPTION=A minimalist blog built with Astro and Notion
```

### 作者信息配置
```env
# 博客作者信息
AUTHOR_NAME=Your Name
AUTHOR_EMAIL=your.email@example.com
AUTHOR_TWITTER=@yourusername
AUTHOR_GITHUB=yourusername
AUTHOR_AVATAR=https://github.com/yourusername.png
```

### Google Analytics 配置
```env
# Google Analytics (可选)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### SEO 配置
```env
# SEO 优化配置
DEFAULT_OG_IMAGE=https://your-domain.com/og-image.jpg
TWITTER_SITE=@yourusername
```

## 功能特性

### 🌍 多语言支持
- **支持语言**: 英文 (en)、中文 (zh)
- **默认语言**: 英文
- **配置方式**: 在 `.env` 文件中设置 `SITE_LANGUAGE=zh` 或 `SITE_LANGUAGE=en`
- **自动适配**: 所有 UI 文本、日期格式、SEO 元数据都会根据语言自动调整

### 🔍 SEO 优化
- **完整的 Meta 标签**: title, description, keywords
- **Open Graph 支持**: Facebook、LinkedIn 等社交媒体分享优化
- **Twitter Cards**: Twitter 分享卡片优化
- **JSON-LD 结构化数据**: 搜索引擎结构化数据支持
- **自动生成**: 文章页面自动生成 article 类型的 SEO 数据
- **自定义图片**: 支持自定义 OG 图片和 Twitter 卡片图片

### 📊 Google Analytics
- **简单配置**: 只需在 `.env` 中设置 `GOOGLE_ANALYTICS_ID`
- **自动加载**: 有配置时自动加载 GA 脚本
- **隐私友好**: 未配置时不会加载任何跟踪脚本

### ⚡ 服务端渲染 (SSR)
- **实时数据**: 每次访问都从 Notion 获取最新数据
- **SEO 友好**: 服务端渲染确保搜索引擎能正确索引内容
- **性能优化**: 支持缓存和优化策略

## 使用示例

### 中文博客配置
```env
SITE_LANGUAGE=zh
SITE_TITLE=我的技术博客
SITE_DESCRIPTION=分享前端开发经验和技术思考
AUTHOR_NAME=张三
AUTHOR_TWITTER=@zhangsan
```

### 英文博客配置
```env
SITE_LANGUAGE=en
SITE_TITLE=My Tech Blog
SITE_DESCRIPTION=Sharing frontend development experience and technical insights
AUTHOR_NAME=John Doe
AUTHOR_TWITTER=@johndoe
```

## 部署说明

### 环境变量设置
1. 复制 `.env.example` 为 `.env`
2. 填写所有必要的配置项
3. 部署时确保在生产环境中设置相同的环境变量

### 构建命令
```bash
# 开发环境
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### 注意事项
- `NOTION_TOKEN` 和 `NOTION_DATABASE_ID` 是必需的
- `GOOGLE_ANALYTICS_ID` 是可选的，不设置则不会加载 GA
- `SITE_URL` 用于生成正确的 canonical URL 和 OG 标签
- 所有社交媒体相关配置都是可选的，但建议填写以获得更好的 SEO 效果