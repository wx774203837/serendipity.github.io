import{_ as i,W as o,X as c,Y as s,Z as n,$ as a,a1 as u,a0 as t,C as l}from"./framework-805f0bea.js";const r={},d=s("h1",{id:"使用-vuepress-theme-hope",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用-vuepress-theme-hope","aria-hidden":"true"},"#"),n(" 使用 vuepress-theme-hope")],-1),k={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"安装-node",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装-node","aria-hidden":"true"},"#"),n(" 安装 Node")],-1),h={href:"https://nodejs.org/zh-cn/download",target:"_blank",rel:"noopener noreferrer"},m=s("br",null,null,-1),b=s("code",null,"node -v",-1),_=s("br",null,null,-1),y=t(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>在命令行窗口运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),g={href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.yarnpkg.cn/getting-started/install",target:"_blank",rel:"noopener noreferrer"},x=s("br",null,null,-1),N=s("br",null,null,-1),E=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主页" tabindex="-1"><a class="header-anchor" href="#主页" aria-hidden="true">#</a> 主页</h2><p>使用src目录下的README.md文件来进行配置。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> BlogHome
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">title</span><span class="token punctuation">:</span> 主页
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Serendipity
<span class="token key atrule">heroFullScreen</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 一枚前端菜鸟的技术和生活分享博客
<span class="token key atrule">projects</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> project
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 项目名称
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 项目详细描述
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//你的项目链接

  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> link
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 链接名称
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 链接详细描述
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//链接地址

  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> book
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 书籍名称
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 书籍详细描述
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//你的书籍链接

  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> article
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 文章名称
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 文章详细描述
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//你的文章链接

  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> friend
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 伙伴名称
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 伙伴详细介绍
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//你的伙伴链接

  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> /logo.svg
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 自定义项目
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 自定义详细介绍
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//你的自定义链接

<span class="token key atrule">footer</span><span class="token punctuation">:</span> 自定义你的页脚文字
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},w=t(`<h2 id="项目打包" tabindex="-1"><a class="header-anchor" href="#项目打包" aria-hidden="true">#</a> 项目打包</h2><p>先使用下面的命令在本地打包，打完的内容在src/.vuepress/dist目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function B(L,V){const e=l("ExternalLinkIcon"),p=l("RouterLink");return o(),c("div",null,[d,s("p",null,[n("本文将记录从零开始使用 "),s("a",k,[n("vuepress-theme-hope"),a(e)]),n(" 构建属于自己的博客。")]),v,s("p",null,[n("从官网下载 "),s("a",h,[n("Node"),a(e)]),n(", vuepress-theme-hope支持16的某些版本和18以后的版本，保险起见大家直接下最新的18。"),m,n(" 安装完成后再命令行输入 "),b,n(" 查看，显示版本号即表示安装成功。"),_,n(" 如果需要管理不同版本的Node,可参考 "),a(p,{to:"/devEnv/nvm.html"},{default:u(()=>[n("Nvm安装和使用")]),_:1}),n("。")]),y,s("p",null,[n("命令中的dir是一个参数，使用真实的目录名替换。也可以使用 "),s("a",g,[n("pnpm"),a(e)]),n(" 或者 "),s("a",f,[n("yarn"),a(e)]),n(",我使用的是pnpm。"),x,n(" 初始化过程中会有一些选项让你选择,包管理器选择pnpm,项目类型blog为博客类型网站，docs为文档类型。如果之后你想把网站挂到GitHub Pages上的话，在询问是否创建工作流的地方记得选一下yes。"),N,n(" 安装完成后，进入项目文件运行：")]),E,s("p",null,[n("更多的配置可查阅 "),s("a",j,[n("vuepress-theme-hope"),a(e)]),n(" 使用文档。")]),w])}const C=i(r,[["render",B],["__file","buildblog.html.vue"]]);export{C as default};
