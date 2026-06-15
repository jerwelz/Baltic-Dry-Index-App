import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/pxweb": {
        target: "https://pxweb.asub.ax",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pxweb/, ""),
      },
    },
  },
});
