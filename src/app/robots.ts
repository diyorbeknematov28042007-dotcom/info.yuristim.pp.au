import type { MetadataRoute } from "next";
import { ECOSYSTEM } from "@/config/ecosystem";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${ECOSYSTEM.info}/sitemap.xml`,
    host: ECOSYSTEM.info,
  };
}
