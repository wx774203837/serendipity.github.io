<template><div><h1 id="waline" tabindex="-1"><a class="header-anchor" href="#waline" aria-hidden="true">#</a> Waline</h1>
<p>本文将介绍如何在blog中使用Waline评论插件。</p>
<h2 id="获取-app-id-和-app-key" tabindex="-1"><a class="header-anchor" href="#获取-app-id-和-app-key" aria-hidden="true">#</a> 获取 APP ID 和 APP Key</h2>
<p>请先 <a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">登录<ExternalLinkIcon/></a> 或 <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">注册<ExternalLinkIcon/></a> LeanCloud 国际版, 进入 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">控制台<ExternalLinkIcon/></a> 后点击左下角 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">创建应用<ExternalLinkIcon/></a>。创建应用后进入该应用，选择左下角的 <code v-pre>设置</code> &gt; <code v-pre>应用Key</code>，然后记下 <code v-pre>APP ID,APP Key</code> 和 <code v-pre>Master Key</code>。</p>
<p>之后点击下方按钮，跳转至 Vercel 进行快速部署。</p>
<figure><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimaegoo%2Ftwikoo%2Ftree%2Fdev%2Fsrc%2Fvercel-min" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Vercel</figcaption></figure>
<h2 id="配置仓库" tabindex="-1"><a class="header-anchor" href="#配置仓库" aria-hidden="true">#</a> 配置仓库</h2>
<p>按照要求输入 Vercel 项目名称与 GitHub 仓库名称。Vercel 会基于 waline 模板帮助你新建并初始化该仓库。仓库初始化完毕后，需要在 Environment Variables 中配置 <code v-pre>LEAN_ID</code>, <code v-pre>LEAN_KEY</code> 和 <code v-pre>LEAN_MASTER_KEY</code> 三个环境变量。它们的值分别对应上一步在 LeanCloud 中获得的 <code v-pre>APP ID</code>, <code v-pre>APP KEY</code>, <code v-pre>Master Key</code>。</p>
<h2 id="配置主题" tabindex="-1"><a class="header-anchor" href="#配置主题" aria-hidden="true">#</a> 配置主题</h2>
<p>设置好环境变量后，点击 <code v-pre>Deploy</code> 部署，一两分钟即可部署完成。之后在主题设置中设置 vercel 地址:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>comment<span class="token operator">:</span> <span class="token punctuation">{</span>
  provider<span class="token operator">:</span> <span class="token string">"Waline"</span><span class="token punctuation">,</span>
  serverURL<span class="token operator">:</span><span class="token string">"YOUR_SERVER_URL"</span><span class="token punctuation">,</span> <span class="token comment">// your server url</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


