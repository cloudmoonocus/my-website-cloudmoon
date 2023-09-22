---
sidebar_position: 1
description: Webpack entry 和 ouput
tags:
  - 前端工程化
  - Webpack
---

# Webpack entry 和 ouput

## Webpack entry

- 在 Webpack 的配置中，还有个 `context` 属性，它的默认值是 `process.cwd()`，即当前执行 Node.js 进程的工作目录，一般是项目根目录。
---
- `entry` 属性的值可以是一个字符串、数组或对象
  - 如果是字符串，则表示单入口
  - 如果是数组，本质还是单入口，例如
    ```js
    module.exports = {
      entry: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
    };

    // 上面和下面的配置等效

    // a.js
    import 'core-js/stable';
    import 'regenerator-runtime/runtime';

    // webpack.config.js
    module.exports = {
      entry: './a.js',
    };
    ```
  - 如果是对象，则表示多入口
    - 多入口配置，本质上打包后生成多个JS文件
    ```js
    const path = require('path');
    module.exports = {
      entry: {
        app: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
        vendor: './vendor'
      },
      output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].js'
      },
      mode: 'none'
    };
    ```
  - 如果是函数，则表示动态入口，取函数的返回值作为配置【少用】
    ```js
    const path = require('path');
    module.exports = {
      entry: () => {
        return {
          app: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
          vendor: './vendor'
        };
      },
      output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].js'
      },
      mode: 'none'
    };
    ```

## Webpack output

> output 是一个对象，有几个重要的属性：`filename` `path` `publicPath` `chunkFilename`

- `filename` 是打包之后生成的文件名称，可以是一个字符串或者函数
  - 如果是字符串，可以使用 `[name]` `[hash]` `[chunkhash]` 等占位符
    - `[name]` 表示 chunk 的名称【简单理解的话就是打包过程中，一个资源入口代表一个chunk，一个异步模块资源也代表一个chunk】
  - 如果是函数，可以根据入口文件的名称动态生成文件名称
    ```js
    const path = require('path');
    module.exports = {
      entry: {
        app: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
        vendor: './vendor'
      },
      output: {
        path: path.resolve(__dirname, ''),
        filename: (chunkData) => {
          return chunkData.chunk.name === 'app' ? '[name].js' : '[name]/[name].js';
        }
      },
      mode: 'none'
    };
    ```

- `[path]` 表示资源打包之后的输出位置，绝对路径，默认为`dist`

- `[publicPath]` 表示资源的访问路径，一般用于生产环境，例如 `https://cdn.example.com/assets/`，默认为`/`
  - 以当前浏览的页面url是 https://www.apple.com/ipad/ ,要访问的资源名称是bundle-3fa2.js为例
    1. 相对路径
      - output.publicPath以"./"或"../"等开头，表示要访问的资源以当前页面url作为基础路径
      ```text
      publicPath: ""  // 资源的访问地址是https://www.apple.com/ipad/bundle-3fa2.js
      publicPath: "../dist/"  // 资源的访问地址是https://www.apple.com/dist/bundle-3fa2.js
      publicPath: "./dist/"  // 资源的访问地址是https://www.apple.com/ipad/dist/bundle-3fa2.js
      ```
      - output.publicPath以"/"开头，表示要访问的资源以当前页面的服务器地址作为基础路径
      ```text
      publicPath: "/"  // 资源的访问地址是https://www.apple.com/bundle-3fa2.js。
      publicPath: "/dist/"  // 资源的访问地址是https://www.apple.com/dist/bundle-3fa2.js。
      ```
    2. 绝对路径，一般用于 CDN
    ```text
    publicPath: "https://cdn.apple.net/"  // 资源的访问地址是https://cdn.apple.net/bundle-3fa2.js
    publicPath: "http://cdn.apple.net/"  // 资源的访问地址是http://cdn.apple.net/bundle-3fa2.js
    publicPath: "//cdn.apple.net/dist/"  // 资源的访问地址是https://cdn.apple.net/dist/bundle-3fa2.js
    ```

- `[chunkFilename]` 表示非入口 chunk 的名称，一般是异步加载的 chunk 的名称，例如
  ```js
  const path = require('path');
  module.exports = {
    entry: {
      app: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
      vendor: './vendor'
    },
    output: {
      path: path.resolve(__dirname, ''),
      filename: '[name].js',
      chunkFilename: '[name]/[name].js'
    },
    mode: 'none'
  };
  ```
