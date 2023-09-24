---
sidebar_position: 2
description: Webpack Loader
tags:
  - 前端工程化
  - Webpack
---

# Webpack 预处理器 Loader

> loader 本质是个函数，接受一个资源模块，然后将其处理成 Webpack 核心能够使用的模块

## Loader 配置

### 1. Loader 关键配置

```js
// webpack.config.js
const path = require('path');
  module.exports = {
    entry: './a.js',  // a.js里引入了CSS文件
    output: {
      path: path.resolve(__dirname, ''),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    },
    mode: 'none'
  };
```

- `loader` 在 `module` 中配置，`rules` 是一个数组，每一项都是一个 `Object`，里面描述了对于什么类型的文件（`test`），使用什么加载器（`loader`）进行预处理，以及相应的配置（`options`）。
  - `use` 可以是字符串，对象或者数组，如果是字符串或者对象，就只会使用一个 `loader`，如果是数组，就会依次使用多个 `loader`，前一个 `loader` 的输出会作为后一个 `loader` 的输入【从后往前执行】。

### 2. rules 其它参数

> 除了 test 和 use 之外，还有 include、exclude、resource、issuer、enforce 等参数，这些参数可以更精确地指定应该使用哪个 loader 处理哪个模块。

1. `include` 和 `exclude`：只命中 `include`（必定命中）/ 排除 `exclude`（必定不命中）。
```js
rules: [{
    test: /\.js$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
  }]
```
```js
rules: [{
    test: /\.js$/,
    use: ['babel-loader'],
    include: /src/,
  }]
```

2. enforce：指定 loader 的执行顺序，有 `pre`、`post` 和 `normal` 三个值，`pre` 优先执行，`post` 后执行，`normal` 根据位置决定，`normal` 是默认值。
```js
// 这个配置表示在所有处理js文件模块loader之前执行eslint-loader，这样我们可以在js代码未被处理的时候就进行eslint代码规范校验。
rules: [{
    test: /\.js$/,
    use: ['eslint-loader'],
    enforce: 'pre',
    exclude: /node_modules/,
  }]
```

3. resource 与 issuer
> resource 的中文意思是资源，issuer 中文意思是发行人。在 Webpack 中被加载的模块我们称之为 resource，而实施加载的模块我们称之为 issuer。

在一个 JS 模块里引入了 CSS 模块，那么 JS 模块就是 issuer，CSS模块就是 resource

```js
// app.js
import './src/reset.css'
// 我们在app.js里引入了reset.css，这里app.js是issuer，reset.css是resource
```

```js
rules: [{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/
  }]

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

rules: [{
  use: ['style-loader', 'css-loader'],
  resource: {
    test: /\.css$/,
    exclude: /node_modules/
  }
}]
```

如果想指定只有 src 目录下的 JS 引用的 CSS 可以被相应的 loader 处理，那么可以配置 issuer，下面的配置是等效的
```js
rules: [{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/,
    issuer: {
      test: /\.js$/,
      include: /src/
    }
  }]

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

rules: [{
  use: ['style-loader', 'css-loader'],
  resource: {
    test: /\.css$/,
    exclude: /node_modules/
  },
  issuer: {
    test: /\.js$/,
    include: /src/
  }
}]
```
