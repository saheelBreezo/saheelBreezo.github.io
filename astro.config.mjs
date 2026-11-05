import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://saheelBreezo.github.io",
  integrations: [mdx()],
});