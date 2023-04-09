---
icon: github
date: 2023-04-09
category:
  - 教程
tag:
  - Github
---

# Github Pages
将博客部署在Github,依赖于创建项目时选择的github workflow工作流。

## 新建仓库
创建一个public仓库， 名称格式为 `<USERNAME>.github.io`, 部署完后通过`https://<USERNAME>.github.io/`这个域名来访问站点。

## 修改配置
在github仓库中点击Settings选项卡，选择Actions下的General,在 Workflow permissions中选择读写权限 Read and write permissions后，点击保存。 

![Settings](/assets/img/gitSettings.png)

## 代码提交
提交代码，查看Actions选项卡,绿色表示部署成功，如果失败可以点击进去查看详细的报错信息。  

![Settings](/assets/img/workflow.png)

## 设置部署分支
打包后的内容位于src/.vuepress/dist/目录下，而项目中的工作流会默认将这个目录的内容推送到一个新的gh-pages 分支，因此我们还需要额外设置部署页面的分支。  
  
点击Settings选项卡下的Pages，在Build and deployment中选择新的分支：  

![Settings](/assets/img/branch.jpg)  
  
切换部署分支后项目会自动重新执行一遍工作流，再过上一会就可以使用域名`https://<USERNAME>.github.io/`来访问页面了。  
  
并且，在以后每次修改完代码并push后，都会自动触发工作流，自动更新页面。