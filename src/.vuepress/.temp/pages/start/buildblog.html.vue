<template><div><h1 id="使用-vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#使用-vuepress-theme-hope" aria-hidden="true">#</a> 使用 vuepress-theme-hope</h1>
<p>本文将记录从零开始使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a> 构建属于自己的博客。</p>
<h2 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node" aria-hidden="true">#</a> 安装 Node</h2>
<p>从官网下载 <a href="https://nodejs.org/zh-cn/download" target="_blank" rel="noopener noreferrer">Node<ExternalLinkIcon/></a>, vuepress-theme-hope支持16的某些版本和18以后的版本，保险起见大家直接下最新的18。<br>
安装完成后再命令行输入 <code v-pre>node -v</code> 查看，显示版本号即表示安装成功。<br>
如果需要管理不同版本的Node,可参考 <RouterLink to="/devEnv/nvm.html">Nvm安装和使用</RouterLink>。</p>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2>
<p>在命令行窗口运行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm create vuepress-theme-hope [dir]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令中的dir是一个参数，使用真实的目录名替换。也可以使用
<a href="https://pnpm.io/installation" target="_blank" rel="noopener noreferrer">pnpm<ExternalLinkIcon/></a> 或者 <a href="https://www.yarnpkg.cn/getting-started/install" target="_blank" rel="noopener noreferrer">yarn<ExternalLinkIcon/></a>,我使用的是pnpm。<br>
初始化过程中会有一些选项让你选择,包管理器选择pnpm,项目类型blog为博客类型网站，docs为文档类型。如果之后你想把网站挂到GitHub Pages上的话，在询问是否创建工作流的地方记得选一下yes。<br>
安装完成后，进入项目文件运行：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主页" tabindex="-1"><a class="header-anchor" href="#主页" aria-hidden="true">#</a> 主页</h2>
<p>使用src目录下的README.md文件来进行配置。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多的配置可查阅 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a> 使用文档。</p>
<h2 id="项目打包" tabindex="-1"><a class="header-anchor" href="#项目打包" aria-hidden="true">#</a> 项目打包</h2>
<p>先使用下面的命令在本地打包，打完的内容在src/.vuepress/dist目录下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


