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

- vite-plugin-html

- @vitejs/plugin-legacy

- sass/less

- postcss: autoprefixer/cssnano

- eslint：@babel/eslint-parser、vite-plugin-eslint、eslint-plugin-vue

- prettier：eslint-config-prettier、eslint-plugin-prettier

- @vitejs/plugin-vue

- vite-svg-loader

## task

modules 实例 (vue-router)

dayjs lodash

stores

ts

### 更多支持

element-plus

react




eslint vite踩坑

1. module type与.eslintrc.js坑，修改为cjs

2. 虚拟windicss.css 报错 无法找到No configuration file in @windi.css 
无法虚拟模块，改用 vite-plugin-eslint

3. vu3 setup 语法，报错 使用 eslint-plugin-vue，支持vue
@vitejs/plugin-vue
[plugin:vite-plugin-eslint] error  Parsing error: This experimental syntax requires enabling one of the following parser plugin(s): "jsx", "flow", "typescript". (1:0)

解决：https://eslint.vuejs.org/user-guide/ How to use a custom parser?


vite中 svg icon 异步组件方案 