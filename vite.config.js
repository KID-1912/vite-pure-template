import path from "node:path";
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import WindiCSS from "vite-plugin-windicss";
import eslint from "vite-plugin-eslint";
import legacy from "vite-plugin-legacy-swc";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@@": path.resolve(__dirname),
      },
    },
    css: {
      preprocessorOptions: {
        less: {},
        scss: {
          additionalData: "",
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true,
          filepath: "./eslintrc-auto-import.json",
        },
        resolvers: [],
        dts: path.resolve(pathSrc, "auto-imports.d.ts"),
      }),
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            enabledCollections: ["mingcute"],
            alias: { mc: "mingcute" },
          }),
        ],
        dts: path.resolve(pathSrc, "components.d.ts"),
      }),
      Icons({ autoInstall: true }),
      svgLoader(),
      WindiCSS(),
      eslint(),
      legacy(),
      splitVendorChunkPlugin(),
      createHtmlPlugin({
        template: "index.html",
        inject: {
          data: { build_time: new Date().toLocaleString() },
        },
      }),
      visualizer({ open: true, filename: "dist/stats.html" }),
    ],
    server: {
      host: true,
      port: 5173,
      proxy: env.VITE_API_BASE_URL,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      commonjsOptions: { transformMixedEsModules: true },
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
        },
      },
    },
    reportCompressedSize: false, // gzip 压缩大小报告
  };
});
