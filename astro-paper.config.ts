import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://lticket.top/",
    title: "Piao's Blog",
    description: "记录技术、生活，以及一切值得留下来的东西。",
    author: "Piao",
    profile: "https://github.com/Piao-2024",
    ogImage: "default-og.png",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/Piao-2024", linkTitle: "Piao 的 GitHub" },
    { name: "bilibili", url: "https://space.bilibili.com/202495498", linkTitle: "Piao 的哔哩哔哩" },
    { name: "xiaohongshu", url: "https://www.xiaohongshu.com/user/profile/66b5bb1b000000001d0215be", linkTitle: "Piao 的小红书" },
  ],
  shareLinks: [
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
