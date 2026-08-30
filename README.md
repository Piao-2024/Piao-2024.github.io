# Piao's Blog

基于 AstroPaper 6 和 Astro 7 重构的个人博客，保留原有文章内容，并提供中文界面、深色模式、标签、归档、全文搜索、RSS、Sitemap 和动态社交分享图。

## 本地开发

要求 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

开发地址默认为 `http://localhost:4321`。

## 常用操作

```bash
npm run build       # 类型检查、静态构建并生成全文搜索索引
npm run preview     # 预览构建产物
npm run format      # 格式化代码
npm run lint        # 代码检查
```

## 内容位置

- 文章：`src/content/posts/`
- 关于页面：`src/content/pages/about.md`
- 网站配置：`astro-paper.config.ts`
- 中文界面：`src/i18n/lang/zh-CN.ts`
- 主题颜色：`src/styles/theme.css`

文章使用 Markdown 或 MDX。主要 frontmatter 字段如下：

```yaml
---
title: "文章标题"
description: "文章摘要"
pubDatetime: 2026-08-30T12:00:00+08:00
tags: ["技术", "记录"]
draft: false
---
```

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署到 GitHub Pages。`public/CNAME` 中保留了自定义域名 `lticket.top`。

旧的 `/blog/` 和 `/blog/<slug>/` 地址会自动跳转到新的 `/posts/` 路径。
