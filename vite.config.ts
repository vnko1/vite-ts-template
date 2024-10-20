import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "nested/index.html"),
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname) },
      { find: "src", replacement: resolve(__dirname, "src") },
    ],
  },
});
