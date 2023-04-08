import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: '主页', icon: 'home', link: '/' },
  {
    text: "代码笔记",
    icon: "code",
    prefix: "",
    children: [
      {
        text: "构建博客",
        prefix: "/start/",
        children: [
          { text: "初始化项目", icon: "tool", link: "buildblog" }
        ]
      },
    ],
  }
]);
