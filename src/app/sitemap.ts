import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  // The site is a single scrolling page now, so there is only one URL.
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
