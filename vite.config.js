import path from "path";
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
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
      preprocessorOptions: {},
    },
    plugins: [
      splitVendorChunkPlugin(),
      createHtmlPlugin({
        inject: {
          data: { build_time: new Date().toLocaleString() },
        },
      }),
    ],
    server: {
      host: true,
      proxy: env.VITE_API_BASE_URL,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
    },
    reportCompressedSize: false, // gzip 压缩大小报告
  };
});
