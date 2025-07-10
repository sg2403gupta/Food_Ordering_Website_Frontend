import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Food_Ordering_Website_Frontend/",
  plugins: [react()],
  server: {
    // This allows local dev server to handle client-side routes correctly
    historyApiFallback: true,
  },
});
