import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), splitVendorChunkPlugin()],
  // Use project base only for production (Pages). Keep dev at '/'.
  base: mode === 'production' ? '/project-noah/' : '/',
  build: {
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dropdown-menu", "clsx", "class-variance-authority", "tailwind-merge"],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@radix-ui/react-dropdown-menu",
      "clsx",
      "class-variance-authority",
      "tailwind-merge",
      "@supabase/supabase-js",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
