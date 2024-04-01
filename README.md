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

### 自动导入

vue

vue-router