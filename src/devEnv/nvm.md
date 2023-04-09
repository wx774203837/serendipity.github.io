---
icon: tool
date: 2023-04-08
category:
  - 教程
tag:
  - Nvm
  - Node
---

# Nvm 安装与使用
nvm 是一个 nodejs 的版本管理工具。通过它可以安装和切换不同版本的 nodejs，解决 node 各种版本存在不兼容现象。

## 卸载Node (没有安装可跳过此步骤)
一定要确保卸载windows上的Nodejs。
- 在控制面版或者应用列表中卸载nodejs
- 不行就全局搜索然后删除相关文件

## 下载Nvm
[下载地址](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.9)  

我的电脑为win11，该版本可正常使用。 

![安装包](/assets/img/nvm1.png)

## 安装Nvm
下载完成后，解压获得exe程序双击运行。
1. 选择同意安装协议  

![安装协议](/assets/img/nvm2.png)

2. Nvm安装路径，会包含所有之后下载的Node版本  

![安装路径](/assets/img/nvm3.png)

3. Nodejs存储路径，存放当前使用的Node 

![存储路径](/assets/img/nvm4.png)

4. 点击install，等待安装完成  

![安装](/assets/img/nvm5.png)

## 安装Node
使用管理员身份运行cmd，一定要使用管理员身份!!!  

![cmd](/assets/img/cmd.png)

1. 输入`nvm list available` 查看所有可供下载的Nodejs版本  

![node list](/assets/img/nodelist.png)

2. 输入 `nvm install [version]` 安装所需的Nodejs版本,version为所需要的版本号

3. 输入 `nvm list` 查看已安装版本的node

4. 输入 `nvm use [version]` 切换使用指定的版本的node。 

5. 再次输入 `nvm list` ,如果版本号前带星号则表示切换成功, 或者输入 `nvm current` 显示当前版本

![切换成功](/assets/img/nvmsuccess.png)

## 更多相关命令

- `nvm list` 查看已经安装的版本
- `nvm list installed` 查看已经安装的版本
- `nvm list available` 查看网络可以安装的版本
- `nvm version` 查看当前的版本
- `nvm install` 安装最新版本
- `nvm nvm use <version>` ## 切换使用指定的版本
- `node nvm ls` 列出所有版本 `nvm current`显示当前版本
- `nvm alias <name> <version>` ## 给不同的版本号添加别名
- `nvm unalias <name>` ## 删除已定义的别名
- `nvm reinstall-packages <version>` ## 在当前版本node环境下，重新全局安装指定版本号的npm包
- `nvm on` 打开nodejs控制
- `nvm off` 关闭nodejs控制
- `nvm proxy` 查看设置与代理
- `nvm node_mirror [url]` 设置或者查看`setting.txt`中的`node_mirror`，如果不设置的默认是 `Index of /dist/`
- `nvm npm_mirror [url]` 设置或者查看`setting.txt`中的 `npm_mirror`,如果不设置的话默认的是： `https://github.com/npm/npm/archive/`
- `nvm uninstall <version>` 卸载制定的版本
- `nvm use [version] [arch]` 切换制定的node版本和位数
- `nvm root [path]` 设置和查看root路径





