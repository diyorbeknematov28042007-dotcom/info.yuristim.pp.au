import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ECOSYSTEM } from "@/config/ecosystem";

export const metadata: Metadata = {
  metadataBase: new URL(ECOSYSTEM.info),
  title: {
    default: "Yuristim — O‘zbekiston uchun LegalTech",
    template: "%s · Yuristim",
  },
  description:
    "AI yuridik yordam, huquqiy hujjatlar va professional yuristlarni yagona platformada birlashtiruvchi O‘zbekiston LegalTech ekotizimi.",
  applicationName: "Yuristim",
  authors: [{ name: "Yuristim" }],
  creator: "Yuristim",
  publisher: "Yuristim",
  category: "LegalTech",
  icons: {
    icon: "/assets/yuristim-logo.jpeg",
    apple: "/assets/yuristim-logo.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: "Yuristim",
    title: "Yuristim — O‘zbekiston uchun LegalTech",
    description:
      "AI yuridik yordam, huquqiy hujjatlar va professional yuristlarni yagona platformada birlashtiruvchi LegalTech ekotizimi.",
    url: ECOSYSTEM.info,
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuristim — O‘zbekiston uchun LegalTech",
    description: "AI + hujjatlar + professional yuristlar. Bitta LegalTech ekotizimi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
