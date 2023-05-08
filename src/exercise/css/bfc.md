---
date: 2023-04-08
category:
  - 面试
tag:
  - css
---

# BFC

## BFC 是什么

BFC（Block Formatting Context）块级格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。  
可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

## 形成 BFC 的条件

- body根
- 绝对定位元素 (position 为 fixed 或者 absolute)
- 浮动元素 (float 不为 none)
- overflow 为 visible 以外的值 （hidden, auto, scroll）
- display 为以下的值 inline-block, table-cell, flex, table-caption

## BFC 特性

- 内部的 Box 会在垂直方向一个接一个地放置
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- 每个盒子（块盒与行盒）的 margin box 的左边，与包含块 border box 的左边相接触，即使存在浮动也是如此
- BFC 的区域不会与 float box 重叠
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响外面的元素。反之也是如此
- 计算 BFC 的高度时，浮动元素也参与计算


## BFC 的作用

- 避免外边距塌陷
- 清除浮动
- 自适应两栏布局