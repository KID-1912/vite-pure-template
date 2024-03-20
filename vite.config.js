import path from "node:path";
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import WindiCSS from "vite-plugin-windicss";
import eslint from "@rollup/plugin-eslint";
import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";

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
      WindiCSS(),
      eslint(),
      legacy(),
      splitVendorChunkPlugin(),
      createHtmlPlugin({
        inject: {
          data: { build_time: new Date().toLocaleString() },
        },
      }),
    ],
    server: {
      host: true,
      port: 5173,
      proxy: env.VITE_API_BASE_URL,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      rollupOptions: {
        commonjsOptions: { transformMixedEsModules: true },
      },
    },
    reportCompressedSize: false, // gzip 压缩大小报告
  };
});
