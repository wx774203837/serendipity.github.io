---
icon: mark
date: 2023-04-09
category:
  - 教程
tag:
  - Vercel
  - 插件
---

# Waline

本文将介绍如何在blog中使用Waline评论插件。

## 获取 APP ID 和 APP Key
请先 [登录](https://console.leancloud.app/login) 或 [注册](https://console.leancloud.app/register) LeanCloud 国际版, 进入 [控制台](https://console.leancloud.app/apps) 后点击左下角 [创建应用](https://console.leancloud.app/apps)。创建应用后进入该应用，选择左下角的 `设置` > `应用Key`，然后记下 `APP ID,APP Key` 和 `Master Key`。 
  
之后点击下方按钮，跳转至 Vercel 进行快速部署。  

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimaegoo%2Ftwikoo%2Ftree%2Fdev%2Fsrc%2Fvercel-min)  

## 配置仓库

按照要求输入 Vercel 项目名称与 GitHub 仓库名称。Vercel 会基于 waline 模板帮助你新建并初始化该仓库。仓库初始化完毕后，需要在 Environment Variables 中配置 `LEAN_ID`, `LEAN_KEY` 和 `LEAN_MASTER_KEY` 三个环境变量。它们的值分别对应上一步在 LeanCloud 中获得的 `APP ID`, `APP KEY`, `Master Key`。  

## 配置主题

设置好环境变量后，点击 `Deploy` 部署，一两分钟即可部署完成。之后在主题设置中设置 vercel 地址:  
```ts
comment: {
  provider: "Waline",
  serverURL:"YOUR_SERVER_URL", // your server url
},
```