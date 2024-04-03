# vite-pure-template

一个纯净的 vite 模板，仅统一配置与目录结构

## 目录结构

参考 [Nuxt 目录结构](https://nuxt.com/docs/guide/directory-structure/app)

```
vite-pure-template
├─assets
├─components
├─composables
├─layouts
├─middleware
├─pages
├─plugins
├─public
├─utils
├─.env
├─.env.development
├─.env.development.local
├─.env.production
├─.gitignore
├─index.html
├─main.js
├─package-lock.json
├─package.json
├─README.md
```

## 集成特性

### 环境变量

**VITE_BASE_URL** 公共基础路径

**VITE_API_BASE_URL** API 请求路径

### 插件

- @vitejs/plugin-vue

- vite-plugin-html

- @vitejs/plugin-legacy

- eslint：@babel/eslint-parser、vite-plugin-eslint、eslint-plugin-vue

- prettier：eslint-config-prettier、eslint-plugin-prettier

- vite-svg-loader

- windicss

- sass/less

- postcss: autoprefixer/cssnano

- unplugin-auto-import

rollup-plugin-visualizer 分析 rollup-plugin-visualizer

注意动态导入：路由动态引入，以及svgicon方案

注意按需引入：vite支持分析依赖，并对 import {xxx} from "xxx" 进行tree-shaking
不要出现 import _ as xxx from "xxx"，这样会导致整个模块被引入或者export _ from "xxx"，这样会导致整个模块被导出
