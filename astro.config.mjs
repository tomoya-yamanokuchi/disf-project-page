import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  },
  site: "https://tomoya-yamanokuchi.github.io/disf-project-page/",
  outDir: "dist", // デフォルト（通常は変更不要）
  base: '/disf-project-page',
});
