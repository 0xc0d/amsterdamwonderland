import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://amsterdamwonderland.nl",
  output: "static",
  integrations: [sitemap({ i18n: { defaultLocale: "en", locales: { en: "en", nl: "nl" } } })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nl"],
    routing: { prefixDefaultLocale: false },
  },
  image: { responsiveStyles: false },
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
