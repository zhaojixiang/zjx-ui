---
nav:
title: Documents
path: /documents
group:
path: /ES6
title: ES6
---

## Symbol
ES5中的对象名都是字符串，难免产生冲突，ES6为了解决这个问题，因此引入了Symbol
```tsx | pure
let s = Symbol();
typeof s
// "symbol"
```
- 变量s是独一无二的值；
- 不能使用new命令，因为它是原始类型的值，不是对象；
- 可接收一个参数，作为描述符，主要作用是便于区分；
### 基本用法
```tsx | pure
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
s1.description // "foo"
```
- 如果Symbol的参数是一个对象，就会调用这个对象的toString方法，将值转换为字符串，然后再生成Symbol值；
- 相同描述符的Symbol值是不相等的；
- Symbol值不能进行运算，会报错；
- Symbol值可以显式的转换为字符串（String() | toString()）；
- Symbol值可以转换为布尔值，不能转换为数值；

### 作为属性名的Symbol
- 注意作为属性名时不能使用点运算符，必须得用`[]`；
```tsx | pure
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
### 消除魔术字符串
- 指的是在代码中多次出现，与代码强耦合的字符串；
```tsx | pure
const shapeType = {
  triangle: Symbol()
};

function getArea(shape) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
    break;
  }
  return area;
}

getArea(shapeType.triangle);
```
### 遍历
- Symbol 作为属性名，不会出现在`for...in、for...of`循环中，也不会被`Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()`返回；
- `Object.getOwnPropertySymbols()`可以获取指定对象的Symbol属性名，返回一个数组，包含所有Symbol属性名；
- `Reflect.ownKeys()`可以取到所有类型的键名；
```tsx | pure
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
Reflect.ownKeys(obj)
// [Symbol(a), Symbol(b)]
```
### symbol.for
- 创建时会去全局查找是否已有这个key 的symbol值，如果已经有了就直接返回这个symbol，没有就创建一个，并注册到全局；
- 不管有没有在全局运行，`Symbol.for()`都会登记到全局；
- `Symbol()`每次都返回一个新值，而`Symbol.for()`会去查找是否有相同的key；
```tsx | pure
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

### symbol.keyFor
1. 接收一个Symbol值，在全局进行查找，返回一个已登记的key；
```tsx | pure
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```
### 内置的Symbol值
#### Symbol.hasInstance
- 当使用`instanceof`运算符时，就会调用这个方法，`foo instanceof Foo`在语言内部，实际调用的是`Foo[Symbol.hasInstance](foo)`
```tsx | pure
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true
```
#### Symbol.isConcatSpreadable
- 该属性等于一个布尔值，表示该对象用于`Array.prototype.concat()`时，是否可以展开；
- 该值默认为undefined，数组默认可展开，对象默认不可展开，该值为true时表示为可展开；

#### Symbol.species
- 创建衍生对象时会使用到该属性；

#### Symbol.match
- 执行`str.match(myObject)`时会调用；

#### Symbol.replace
- 执行`str.replace()`时会调用；

#### Symbol.search
- 执行`str.search()`时会调用；

#### Symbol.split
- 执行`str.split()`时会调用；

#### Symbol.iterator
- 对象进行`for...of`循环时会调用；

#### Symbol.toPrimitive
- 该对象被转为原始类型的值时，会调用这个方法；
- 被调用时有三种模式：Number：需要转成数值， String：需要转成字符串， Normal：都可；

#### Symbol.toStringTag
- 执行`str.toString()`时，如果这个属性存在，它的返回值就会出现在返回结果中`[object Array]`, 也就是说它可以指定object后面的这个字符串；

#### Symbol.unscopables
- 该对象指定了使用with关键字时，哪些属性会被with环境排除。


