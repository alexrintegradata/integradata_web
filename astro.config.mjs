import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://integradata.cl",
  integrations: [sitemap()],
  server: {
    host: true,
    port: 5173
  }
});
