---
nav:
title: Documents
path: /documents
group:
path: /HTTP
title: HTTP
---

### 缓存

[强制缓存&协商缓存](https://juejin.cn/post/7052527032491573279)

### 强制缓存

两者同时存在时，Cache-control 优先级更高

- Expires（响应头）

  标准时间，过期时间以内，不会请求服务器资源。

- Cache-control（请求头/响应头）
  - max-age：时长，表示在多少秒内有效，为 0 时不适用强缓存，类似 no-cache
  - s-maxage：时长，只对代理服务器上的缓存有效
  - no-cache：不使用本地强缓存，继续匹配协商缓存
  - no-store： 禁用浏览器缓存数据
  - public：可以被所有用户缓存
  - private：只能被终端用户的浏览器缓存，不允许代理服务器缓存

### 协商缓存

两者同时存在时，以 Etag 和 If-None-Match 为主

- If-Modified-Since（请求头） Last-Modified（响应头）资源最近修改时间（标准时间），由服务器告知浏览器，精确到秒
- Etag（请求头） If-None-Match（响应头）资源标识（资源最近修改时间+文件大小）

### 缓存到底存在哪里

- memory cache：内存中
- disk cache：硬盘中
- service worker：灵活可操作的永久性的
