import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/config";
import sveltiaCms from "astro-sveltia-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), sveltiaCms()],
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
