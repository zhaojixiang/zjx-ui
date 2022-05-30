---
nav:
title: Documents
path: /documents
group:
path: /ES6
title: ES6
---
## Set
- 类似于数组，但是成员的值都是唯一的，没有重复值；
- 可接收一个数组或有iterable接口的其他数据结构；
```tsx | pure
const s = new Set([1, 2, 2, 3, 4, 4]);
s // [1, 2, 3, 4]
  
// 数组去重
[...new Set(array)]

// 字符串去重
[...new Set('ababbc')].join('') // "abc"
```
- Set中判断相等的方式类似于精确相等 ===，区别在于：Set中认为NaN等于NaN

### Set 实例的属性和方法
- Set.prototype.size：返回Set实例的成员总数。

操作方法：
- Set.prototype.add(value)：添加某个值，返回 Set 结构本身；
- Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功；
- Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员；
- Set.prototype.clear()：清除所有成员，没有返回值；
- Array.from方法可以将 Set 结构转为数组；

遍历操作：
- Set.prototype.keys()：返回键名的遍历器；
- Set.prototype.values()：返回键值的遍历器；
- Set.prototype.entries()：返回键值对的遍历器；
- Set.prototype.forEach()：使用回调函数遍历每个成员；
- 可以直接用for...of循环遍历 Set；
- 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构；

由于Set结构没有键名，所以keys和values返回的结果一样，都是对应的值
```tsx | pure
let a = new Set(['a', 'b']);
a.keys() // [Set Iterator]{'a', 'b'}
a.values() // [Set Iterator]{'a', 'b'}
a.entries() // [Set Iterator]{['a', 'a'], ['b', 'b']}
```
