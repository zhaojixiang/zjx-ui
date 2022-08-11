---
nav:
title: Documents
path: /documents
group:
path: /ES6
title: ES6
---

## React

#### React 中 key 的作用

#### React 生命周期

[生命周期](https://juejin.cn/post/6844904021233238024#heading-3)

#### React 中的性能优化

1. 使用纯组件；
2. 使用 React.memo 进行组件记忆（React.memo 是一个高阶组件），对 于相同的输入，不重复执行；
3. 如果是类组件，使用 shouldComponentUpdate（这是在重新渲染组件之前触发的其中一个生命周期事件）生命周期事件，可以利用此事件来决定何时需要重新渲染组件；
4. 路由懒加载；
5. 使用 React Fragments 避免额外标记；
6. 不要使用内联函数定义（如果我们使用内联函数，则每次调用“render”函数时都会创建一个新的函数实例）；
7. 避免在 Willxxx 系列的生命周期中进行异步请求，操作 dom 等；
8. 如果是类组件，事件函数在 Constructor 中绑定 bind 改变 this 指向；
9. 避免使用内联样式属性；
10. 优化 React 中的条件渲染；
11. 不要在 render 方法中导出数据；
12. 列表渲染的时候加 key；
13. 在函数组件中使用 useCallback 和 useMemo 来进行组件优化，依赖没有变化的话，不重复执行；
14. 类组件中使用 immutable 对象；

#### 详解 React useCallback & useMemo

[详解 React useCallback & useMemo](https://juejin.cn/post/6844904101445124110)

#### React Hooks 为什么不能放在条件判断中？

[不要在循环，条件或嵌套函数中调用 Hook](https://blog.csdn.net/gtLBTNq9mr3/article/details/119880486)

#### React 中使用的是事件冒泡还是事件委托？

[React 事件委托机制详解](https://juejin.cn/post/6927981303313006599)

- react 16 版本使用的是将事件绑定在 document 上，在冒泡阶段进行事件处理；
- react 17 版本使用的是事件委托，将逻辑处理放在根元素上；

#### react 如何在 setState 后立马拿到数据？

- setState 回调函数；
- hooks 中：useEffects 监听变化；使用 useRef 保存数据；使用函数将值传递给使用的地方；

#### React 中如何将组件的 ref 暴露出去？

#### react 中 hash router

[前端路由和 react-router 实现原理详解](https://juejin.cn/post/6844904094772002823)

#### React 中的 diff 有哪些规则？
