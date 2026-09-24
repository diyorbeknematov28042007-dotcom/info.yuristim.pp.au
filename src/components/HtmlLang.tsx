"use client";

import { useEffect } from "react";
import type { Lang } from "@/content/copy";

export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
