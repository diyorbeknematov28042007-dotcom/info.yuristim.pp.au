import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yuristim",
    short_name: "Yuristim",
    description: "O‘zbekiston uchun LegalTech ekotizimi",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00875A",
    icons: [
      {
        src: "/assets/yuristim-logo.webp",
        sizes: "320x320",
        type: "image/webp",
      },
    ],
  };
}
