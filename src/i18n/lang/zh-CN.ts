import type { UIStrings } from "../types";

export default {
  nav: { home: "首页", posts: "文章", tags: "标签", about: "关于", archives: "归档", search: "搜索" },
  post: {
    publishedAt: "发布于", updatedAt: "更新于", sharePostIntro: "分享这篇文章：",
    sharePostOn: "分享到 {{platform}}", sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签", backToTop: "回到顶部", goBack: "返回", editPage: "编辑文章",
    previousPost: "上一篇", nextPost: "下一篇",
  },
  pagination: { prev: "上一页", next: "下一页", page: "第" },
  home: { socialLinks: "找到我", featured: "精选文章", recentPosts: "最近文章", allPosts: "查看全部文章" },
  footer: { copyright: "版权", allRightsReserved: "保留所有权利。" },
  pages: {
    tagTitle: "标签", tagDesc: "使用该标签的全部文章",
    tagsTitle: "标签", tagsDesc: "按主题浏览文章。",
    postsTitle: "全部文章", postsDesc: "我写下的所有文章。",
    archivesTitle: "文章归档", archivesDesc: "按时间回顾全部文章。",
    searchTitle: "搜索", searchDesc: "搜索文章标题与正文。",
  },
  a11y: {
    skipToContent: "跳到正文", openMenu: "打开菜单", closeMenu: "关闭菜单", toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章……", noResults: "没有找到结果", goToPreviousPage: "前往上一页", goToNextPage: "前往下一页",
  },
  notFound: { title: "404 页面不存在", message: "没有找到这个页面", goHome: "返回首页" },
} satisfies UIStrings;
