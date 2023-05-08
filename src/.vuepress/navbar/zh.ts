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
          { text: "初始化项目", icon: "tool", link: "buildblog" },
          { text: "Github Pages", icon: "github", link: "githubPage" },
          { text: "Waline", icon: "mark", link: "waline" }
        ]
      },
      {
        text: "开发环境",
        prefix: "/devEnv/",
        children: [
          { text: "Nvm", icon: "setting", link: "nvm" },
        ]
      },
    ],
  },
  { text: '八股文', icon: 'exercise', link: '/exercise/css/bfc.html' }
]);
