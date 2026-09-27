import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/profile";

const BASE_URL = "https://prabujayant.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.nav.map((item) => ({
    url: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
