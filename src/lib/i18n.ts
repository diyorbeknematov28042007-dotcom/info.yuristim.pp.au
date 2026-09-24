import type { Lang } from "@/content/copy";

export function localePath(lang: Lang, hash = "") {
  const base = lang === "uz" ? "/" : `/${lang}`;
  return hash ? `${base}${hash}` : base;
}

export function langFromParam(value: string): Lang | null {
  if (value === "uz" || value === "ru" || value === "en") return value;
  return null;
}
