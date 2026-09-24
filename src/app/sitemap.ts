import type { MetadataRoute } from "next";
import { ECOSYSTEM } from "@/config/ecosystem";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ECOSYSTEM.info,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          uz: ECOSYSTEM.info,
          ru: `${ECOSYSTEM.info}/ru`,
          en: `${ECOSYSTEM.info}/en`,
        },
      },
    },
    {
      url: `${ECOSYSTEM.info}/ru`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${ECOSYSTEM.info}/en`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
