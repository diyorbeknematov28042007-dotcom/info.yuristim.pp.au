import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { HtmlLang } from "@/components/HtmlLang";
import { copy, type Lang } from "@/content/copy";
import { ECOSYSTEM } from "@/config/ecosystem";
import { langFromParam } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = langFromParam(rawLang);
  if (!lang) return {};
  if (lang === "uz") return {};

  const text = copy[lang];
  const locale = lang === "ru" ? "ru_RU" : "en_US";
  return {
    title: text.meta.title,
    description: text.meta.description,
    alternates: {
      canonical: `${ECOSYSTEM.info}/${lang}`,
      languages: {
        uz: ECOSYSTEM.info,
        ru: `${ECOSYSTEM.info}/ru`,
        en: `${ECOSYSTEM.info}/en`,
        "x-default": ECOSYSTEM.info,
      },
    },
    openGraph: {
      title: text.meta.title,
      description: text.meta.description,
      url: `${ECOSYSTEM.info}/${lang}`,
      locale,
    },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = langFromParam(rawLang);

  if (!lang) notFound();
  if (lang === "uz") redirect("/");

  return (
    <>
      <HtmlLang lang={lang as Lang} />
      <LandingPage lang={lang as Lang} text={copy[lang as Lang]} />
    </>
  );
}
