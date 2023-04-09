<template><div><h1 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> Github Pages</h1>
<p>将博客部署在Github,依赖于创建项目时选择的github workflow工作流。</p>
<h2 id="新建仓库" tabindex="-1"><a class="header-anchor" href="#新建仓库" aria-hidden="true">#</a> 新建仓库</h2>
<p>创建一个public仓库， 名称格式为 <code v-pre>&lt;USERNAME&gt;.github.io</code>, 部署完后通过<code v-pre>https://&lt;USERNAME&gt;.github.io/</code>这个域名来访问站点。</p>
<h2 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h2>
<p>在github仓库中点击Settings选项卡，选择Actions下的General,在 Workflow permissions中选择读写权限 Read and write permissions后，点击保存。</p>
<figure><img src="/assets/img/gitSettings.png" alt="Settings" tabindex="0" loading="lazy"><figcaption>Settings</figcaption></figure>
<h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交</h2>
<p>提交代码，查看Actions选项卡,绿色表示部署成功，如果失败可以点击进去查看详细的报错信息。</p>
<figure><img src="/assets/img/workflow.png" alt="Settings" tabindex="0" loading="lazy"><figcaption>Settings</figcaption></figure>
<h2 id="设置部署分支" tabindex="-1"><a class="header-anchor" href="#设置部署分支" aria-hidden="true">#</a> 设置部署分支</h2>
<p>打包后的内容位于src/.vuepress/dist/目录下，而项目中的工作流会默认将这个目录的内容推送到一个新的gh-pages 分支，因此我们还需要额外设置部署页面的分支。</p>
<p>点击Settings选项卡下的Pages，在Build and deployment中选择新的分支：</p>
<figure><img src="/assets/img/branch.jpg" alt="Settings" tabindex="0" loading="lazy"><figcaption>Settings</figcaption></figure>
<p>切换部署分支后项目会自动重新执行一遍工作流，再过上一会就可以使用域名<code v-pre>https://&lt;USERNAME&gt;.github.io/</code>来访问页面了。</p>
<p>并且，在以后每次修改完代码并push后，都会自动触发工作流，自动更新页面。</p>
</div></template>


