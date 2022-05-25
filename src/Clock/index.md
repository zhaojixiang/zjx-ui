---
nav:
  title: Components
  path: /components
group: 
  path: /Canvas
  title: Canvas
---

## Clock

Demo:

```tsx
import React from 'react';
import {Clock} from 'zjx-ui';

export default () => <Clock type="rect"/>;
```

### 矩形填充 描边 擦除:

| 属性 | 描述 |
| --- | --- |
| fillStyle | 填充颜色 |
| fillRect | 矩形填充 |
| strokeStyle | 描边 |
| strokeRect | 矩形描边 |
| rect(x, y, width, height) | 绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。 |

### 圆弧:

```tsx
import React from 'react';
import {Clock} from 'zjx-ui';

export default () => <Clock type="arc"/>;
```

| 属性 | 描述 |
| --- | --- |
| arc(x, y, radius, startAngle, endAngle, anticlockwise) | 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。 *
注意: 弧度=(Math.PI/180)\*角度*|
| arcTo(x1, y1, x2, y2, radius) | 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。 |

### 二次贝塞尔曲线及三次贝塞尔曲线:

```tsx
import React from 'react';
import {Clock} from 'zjx-ui';

export default () => <Clock type=""/>;
```

| 属性 | 描述 |
| --- | --- |
| quadraticCurveTo(cp1x, cp1y, x, y) | 绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。 |
| bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) | 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。 |

## 综合示例

```tsx
import React from 'react';
import {Clock} from 'zjx-ui';

export default () => <Clock type="normal"/>;
```

## 色彩 Colors

| 属性 | 描述 |
| --- | --- |
| fillStyle | 填充色 |
| strokeStyle | 描边色 |
| lineWidth | 线宽 |
| lineCap | 线条末端样式 butt，round 和 square |
| lineJoin | 线条连接处样式 round, bevel 和 miter|
| miterLimit | 线条相交处最大长度 |
| getLineDash() | 返回一个包含当前虚线样式，长度为非负偶数的数组 |
| setLineDash(segments) | 设置当前虚线样式 |
| lineDashOffset | 设置虚线样式的起始偏移量 |

<!-- More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo -->
