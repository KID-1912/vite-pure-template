# vite-pure-template

一个纯净的 vite 模板，仅统一配置与目录结构

## 目录结构

参考 [Nuxt 目录结构](https://nuxt.com/docs/guide/directory-structure/app)

```
vite-pure-template
├─dist
├─node_modules
├─public
├─src
|  ├─assets
|  |   ├─styles
|  |   ├─images
|  ├─components
|  ├─composables
|  ├─layouts
|  ├─middleware
|  ├─modules
|  ├─pages
|  ├─plugins
|  ├─router
|  ├─stores
|  ├─App.vue
|  ├─main.js
├─.env
├─.env.development
├─.env.production
├─.eslintrc.cjs
├─.gitignore
├─.prettier.cjs
├─index.html
├─package-lock.json
├─package.json
├─postcss.config.js
├─README.md
├─vite.config.js
├─windi.config.js
```

## 集成特性

### 环境变量

**VITE_BASE_URL** 公共基础路径

**VITE_API_BASE_URL** API 请求路径

### 插件

- @vitejs/plugin-vue（Vue SFC单文件组件支持）

- vite-plugin-html（自定义html文件）

- vite-plugin-legacy-swc（构建旧版本备份，按需）

- eslint：@babel/eslint-parser、vite-plugin-eslint、eslint-plugin-vue

- prettier：eslint-config-prettier、eslint-plugin-prettier

- vite-svg-loader（加载svg文件为Component、URL...）

- windicss

- sass/less

- postcss: autoprefixer、cssnano

- unplugin-auto-import/unplugin-vue-components/unplugin-icons（按需自动导入）

- @iconify-json（支持iconify图标集）

### 依赖库

- pinia

- vue-router

- vueuse

- axios

- lodash-es