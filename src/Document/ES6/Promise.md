---
nav:
title: Documents
path: /documents
group:
path: /ES6
title: ES6
---
## Promise
- 3种状态：pending（进行中）, fulfilled（已成功）, rejected（已失败），状态一旦改变，就不会再变；
- `resolve()` 会将状态变成 fulfilled（已成功），`reject()` 会将状态变成 rejected（已失败）；
- Promise创建之后立即执行；
### 基本用法
```tsx | pure
const promise = new Promise(function(resolve, reject) {
  if (true){
    resolve(value);
  } else {
    reject(error);
  }
});
```
- 如果resolve带有参数，那么参数会传递给回调函数；
- resolve的参数可以是另一个Promise实例，此时p2的状态由p1决定；
```tsx | pure
const p1 = new Promise(function (resolve, reject) {});

const p2 = new Promise(function (resolve, reject) {
  resolve(p1);
})
```
- 调用resolve或reject并不会终结 Promise 的参数函数的执行;
```tsx | pure
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```
