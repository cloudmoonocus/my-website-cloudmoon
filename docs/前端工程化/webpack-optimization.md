---
sidebar_position: 3
description: Webpack 高级优化
tags:
  - 前端工程化
  - Webpack
---

# Webpack 高级优化

## 开发体验
- SourceMap
  - 所有值：[Webpack Devtool配置](https://webpack.docschina.org/configuration/devtool/#devtool)
  - 生产模式使用 `cheap-module-source-map`，只会定位到行，不会定位到列【代码格式化，容易找到】
  - 生产模式使用 `source-map`，会定位到行和列，因为打包之后压缩，这样容易找到

## 提升打包构建速度
  - 热更新（Hot Module Replacement）
    - 修改某个模块代码，就只有这个模块代码需要重新打包编译
    - 开启方法，只需在dev开启即可
    - 此时 CSS 样式经过 `style-loader` 处理，已经具备 HMR 功能了
    - 对于 JS，一般通过其他loader去解决，例如 `vue-loader`、`react-hot-loader`
  - OneOf
    - 只能匹配上一个 loader，剩下的就不匹配了，减少无用的匹配次数
  - Include/Exclude
    - 开发时我们需要使用第三方的库或插件，所有文件都下载到 `node_modules` 中了。而这些文件是不需要编译可以直接使用的。所以我们在对 js 文件处理时，要排除 `node_modules` 下面的文件。
    - `include`：包含，只处理目标文件
    - `exclude`：排除，不处理目标文件
  - Cache
    - 每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了。
    - 对 Eslint 检查 和 Babel 编译结果进行缓存。
  - Thread
    - 开启多进程处理 js 文件【只在特别耗时的时候使用，因为每个进程启动就有0.6s的耗时】

## 减少代码体积
- Tree Shaking
  - 只打包代码中实际使用的
  - 依赖 ES Module
  - Webpack 默认开启
- Babel
  - Babel 为每个编译的文件都注入了辅助代码，使代码体积增大
  - 将这些辅助代码抽离为一个独立的模块，来避免重复引入
  - 使用 `@babel/plugin-transform-runtime` 禁用 Babel 自动为每个文件的 runtime 注入，而是引入 `@babel/plugin-transform-runtime` 并且使所有辅助代码从这里引入
- ImageMinimizer
  - 对本地图片压缩，减小体积
  - 使用 `image-minimizer-webpack-plugin` 压缩图片的插件

## 优化代码运行性能
- Code Split 代码分割
  - 分割文件：将打包的文件分割，生成多个 js 文件
  - 按需加载：需要哪个文件加载哪个文件
