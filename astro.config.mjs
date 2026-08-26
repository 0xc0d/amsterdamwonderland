import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://amsterdamwonderland.nl",
  output: "static",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", nl: "nl" } },
      /* lastmod is the one hint Google actually acts on; changefreq and priority
         are near-ignored but cost nothing and cause no harm. The build only runs
         when something changed, so build time is an honest lastmod. */
      changefreq: "monthly",
      lastmod: new Date(),
      serialize(item) {
        const p = new URL(item.url).pathname.replace(/^\/nl/, "") || "/";
        item.priority =
          p === "/" ? 1.0
          : p === "/workshops/" ? 0.9
          : p.startsWith("/workshops/") ? 0.8
          : p === "/estimate/" ? 0.8
          : 0.6;
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nl"],
    routing: { prefixDefaultLocale: false },
  },
  image: { responsiveStyles: false },
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
