# 部署指南

## 🎉 项目完成状态

✅ **Astro + Notion 博客已成功创建！**

### 已实现功能

- ✅ **完全一致的设计** - 保持与原 Next.js 项目相同的布局和配色
- ✅ **Notion 集成** - 成功连接到你的 Notion 数据库
- ✅ **服务端渲染** - 支持静态生成和 SSR
- ✅ **响应式设计** - 完美适配桌面和移动端
- ✅ **深色模式** - 支持深色/浅色主题切换
- ✅ **文章系统** - 动态路由和文章详情页
- ✅ **SEO 优化** - 完整的 meta 标签和结构化数据

### 测试结果

- ✅ Notion 连接成功
- ✅ 构建成功 (3 页面生成)
- ✅ 文章数据正确获取
- ✅ 样式完全匹配原项目

## 🚀 部署选项

### 1. Vercel (推荐)

```bash
# 1. 推送代码到 GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. 在 Vercel 导入项目
# 3. 添加环境变量：
NOTION_TOKEN=secret_xxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxx
```

### 2. Netlify

```bash
# 构建命令: npm run build
# 发布目录: dist
# 环境变量: 同上
```

### 3. 自托管

```bash
# 构建静态文件
npm run build

# 部署 dist 目录到任何静态托管服务
```

## 🔧 本地开发

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:4321
```

## 📝 内容管理

### 在 Notion 中添加新文章

1. 打开你的 Notion 数据库
2. 添加新页面，填写必要字段：
   - **title**: 文章标题
   - **slug**: URL 路径 (英文，无空格)
   - **status**: 设为 "published"
   - **description**: 文章描述
   - **tags**: 文章标签
   - **publish_date**: 发布日期
   - **cover**: 封面图片 (可选)

3. 在页面内容中编写文章 (支持 Markdown)
4. 保存后，网站会自动更新

### 字段说明

| 字段名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | Title | ✅ | 文章标题 |
| slug | Text | ✅ | URL 路径，如 "my-first-post" |
| status | Select | ✅ | "published" 或 "draft" |
| description | Text | ✅ | 文章描述，用于 SEO |
| tags | Multi-select | ❌ | 文章标签 |
| publish_date | Date | ✅ | 发布日期 |
| cover | Files & media | ❌ | 封面图片 |

## 🎨 自定义

### 修改样式

编辑 `src/styles/globals.css` 中的 CSS 变量：

```css
:root {
  --primary: 115 77 204;  /* 主色调 */
  --background: 252 252 252;  /* 背景色 */
  /* ... 其他颜色变量 */
}
```

### 添加新页面

在 `src/pages/` 目录下创建新的 `.astro` 文件。

### 修改导航

编辑 `src/components/Navigation.astro`。

## 🔍 SEO 优化

- ✅ 自动生成 meta 标签
- ✅ 结构化数据
- ✅ 语义化 HTML
- ✅ 响应式图片
- ✅ 快速加载速度

## 📊 性能

- ✅ 静态生成，极快加载
- ✅ 代码分割
- ✅ 图片优化
- ✅ CSS 压缩
- ✅ JavaScript 最小化

## 🛠️ 故障排除

### 构建失败

1. 检查环境变量是否正确设置
2. 确认 Notion 集成权限
3. 验证数据库字段结构

### 文章不显示

1. 确认文章 status 为 "published"
2. 检查 slug 字段是否填写
3. 验证 Notion 数据库权限

### 样式问题

1. 清除浏览器缓存
2. 检查 Tailwind CSS 配置
3. 验证 CSS 变量定义

## 📞 支持

如有问题，请检查：
1. README.md 文档
2. Astro 官方文档
3. Notion API 文档