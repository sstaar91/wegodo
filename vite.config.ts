import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: [
      { find: "@_api", replacement: resolve(__dirname, "src/api") },
      { find: "@_assets", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@_components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@_constants", replacement: resolve(__dirname, "src/constants") },
      { find: "@_contexts", replacement: resolve(__dirname, "src/contexts") },
      { find: "@_hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@_libs", replacement: resolve(__dirname, "src/libs") },
      { find: "@_pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@_styles", replacement: resolve(__dirname, "src/styles") },
      { find: "@_types", replacement: resolve(__dirname, "src/types") },
      { find: "@_utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
  plugins: [react()],
});
