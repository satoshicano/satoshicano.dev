import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://satoshicano.dev/",
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: "ja",
		locales: ["ja", "en"],
	},
});
