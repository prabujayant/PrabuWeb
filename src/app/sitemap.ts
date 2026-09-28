import type { MetadataRoute } from "next";

const BASE_URL = "https://prabujayant.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // The site is a single scrolling page now, so there is only one URL.
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
