import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { HtmlLang } from "@/components/HtmlLang";
import { copy } from "@/content/copy";
import { ECOSYSTEM } from "@/config/ecosystem";

export const metadata: Metadata = {
  title: copy.uz.meta.title,
  description: copy.uz.meta.description,
  alternates: {
    canonical: ECOSYSTEM.info,
    languages: {
      uz: ECOSYSTEM.info,
      ru: `${ECOSYSTEM.info}/ru`,
      en: `${ECOSYSTEM.info}/en`,
      "x-default": ECOSYSTEM.info,
    },
  },
  openGraph: {
    title: copy.uz.meta.title,
    description: copy.uz.meta.description,
    url: ECOSYSTEM.info,
    locale: "uz_UZ",
  },
};

export default function HomePage() {
  return (
    <>
      <HtmlLang lang="uz" />
      <LandingPage lang="uz" text={copy.uz} />
    </>
  );
}
