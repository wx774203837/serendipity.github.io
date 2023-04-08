import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "博客构建",
      icon: "tool",
      prefix: "start/",
      children: "structure",
      collapsible: true
    },
    {
      text: "开发环境",
      icon: "setting",
      prefix: "devEnv/",
      children: "structure",
      collapsible: true
    },
  ],
});
