---
icon: tool
date: 2023-04-08
category:
  - 指南
---

# 使用 vuepress-theme-hope
本文将记录从零开始使用 [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/) 构建属于自己的博客。

## 安装 Node
从官网下载 [Node](https://nodejs.org/zh-cn/download), vuepress-theme-hope支持16的某些版本和18以后的版本，保险起见大家直接下最新的18。  
安装完成后再命令行输入 `node -v` 查看，显示版本号即表示安装成功。  
如果需要管理不同版本的Node,可参考 [Nvm安装和使用](/devEnv/nvm.md)。

## 创建项目
在命令行窗口运行
```
npm create vuepress-theme-hope [dir]
```
命令中的dir是一个参数，使用真实的目录名替换。也可以使用
[pnpm](https://pnpm.io/installation) 或者 [yarn](https://www.yarnpkg.cn/getting-started/install),我使用的是pnpm。  
初始化过程中会有一些选项让你选择,包管理器选择pnpm,项目类型blog为博客类型网站，docs为文档类型。如果之后你想把网站挂到GitHub Pages上的话，在询问是否创建工作流的地方记得选一下yes。  
安装完成后，进入项目文件运行：
```
pnpm run docs:dev
```

## 主页
使用src目录下的README.md文件来进行配置。
```
---
home: true
layout: BlogHome
icon: home
title: 主页
heroText: Serendipity
heroFullScreen: true
tagline: 一枚前端菜鸟的技术和生活分享博客
projects:
  - icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: /logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接

footer: 自定义你的页脚文字
---
```
更多的配置可查阅 [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/) 使用文档。

## 项目打包
先使用下面的命令在本地打包，打完的内容在src/.vuepress/dist目录下：
```
pnpm run docs:build
```
