import{_ as a,W as t,X as o,Y as n,Z as e,$ as i,a0 as c,a1 as d,C as l}from"./framework-a045178c.js";const v={},u=n("h1",{id:"使用-vuepress-theme-hope",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-vuepress-theme-hope","aria-hidden":"true"},"#"),e(" 使用 vuepress-theme-hope")],-1),m={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"安装-node",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-node","aria-hidden":"true"},"#"),e(" 安装 Node")],-1),p={href:"https://nodejs.org/zh-cn/download",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),_=n("code",null,"node -v",-1),g=n("br",null,null,-1),x=d(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>在命令行窗口运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm create vuepress-theme-hope [dir]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),f={href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.yarnpkg.cn/getting-started/install",target:"_blank",rel:"noopener noreferrer"},N=n("br",null,null,-1),E=n("br",null,null,-1),j=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主页" tabindex="-1"><a class="header-anchor" href="#主页" aria-hidden="true">#</a> 主页</h2><p>使用src目录下的README.md文件来进行配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},y=d(`<h2 id="项目打包" tabindex="-1"><a class="header-anchor" href="#项目打包" aria-hidden="true">#</a> 项目打包</h2><p>先使用下面的命令在本地打包，打完的内容在src/.vuepress/dist目录下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function B(L,V){const s=l("ExternalLinkIcon"),r=l("RouterLink");return t(),o("div",null,[u,n("p",null,[e("本文将记录从零开始使用 "),n("a",m,[e("vuepress-theme-hope"),i(s)]),e(" 构建属于自己的博客。")]),h,n("p",null,[e("从官网下载 "),n("a",p,[e("Node"),i(s)]),e(", vuepress-theme-hope支持16的某些版本和18以后的版本，保险起见大家直接下最新的18。"),b,e(" 安装完成后再命令行输入 "),_,e(" 查看，显示版本号即表示安装成功。"),g,e(" 如果需要管理不同版本的Node,可参考 "),i(r,{to:"/devEnv/nvm.html"},{default:c(()=>[e("Nvm安装和使用")]),_:1}),e("。")]),x,n("p",null,[e("命令中的dir是一个参数，使用真实的目录名替换。也可以使用 "),n("a",f,[e("pnpm"),i(s)]),e(" 或者 "),n("a",k,[e("yarn"),i(s)]),e(",我使用的是pnpm。"),N,e(" 初始化过程中会有一些选项让你选择,包管理器选择pnpm,项目类型blog为博客类型网站，docs为文档类型。如果之后你想把网站挂到GitHub Pages上的话，在询问是否创建工作流的地方记得选一下yes。"),E,e(" 安装完成后，进入项目文件运行：")]),j,n("p",null,[e("更多的配置可查阅 "),n("a",w,[e("vuepress-theme-hope"),i(s)]),e(" 使用文档。")]),y])}const C=a(v,[["render",B],["__file","buildblog.html.vue"]]);export{C as default};
