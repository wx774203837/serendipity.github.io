---
date: 2023-05-08
category:
  - 面试
tag:
  - js
  - 手写
---

# 手写发布订阅模式

## 实现思路

- 需要有一个 map 对象缓存订阅事件
- 订阅（on）如果存在事件就往 map 里面缓存事件
- 取消订阅（off）从 map 对象找到订阅事件删除
- 发布（emit）从 map 对象找到事件去执行就OK

## 实现代码

```javascript
class EventEmitter {

  //事件哈希表
  map = {}

  //监听事件
  on = (type, fn) => {
    if (!this.map[type]) {
      this.map[type] = []
    }
    this.map[type].push(fn)
  }

  //取消监听
  off = (type, fn) => {
    const queue = this.map[type]
    if (!queue) return
    const index = queue.indexOf(fn)
    if (index < 0) return
    this.map[type].splice(index, 1)
  }

  //触发事件
  emit = (type, data) => {
    const queue = this.map[type]
    if (!queue) return
    queue.forEach(func => {
      func.call(null, data)
    });
  }
}

const myEvent = new EventEmitter()

myEvent.on("click", (data) => {
  console.log("触发click", "data:" + data);
})

myEvent.on("click", (data) => {
  console.log("触发click2", "data:" + data);
})

myEvent.emit("click", "test data")

myEvent.off("click")
```