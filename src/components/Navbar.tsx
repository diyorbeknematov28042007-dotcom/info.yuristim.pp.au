"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Lang, SiteCopy } from "@/content/copy";
import { ECOSYSTEM } from "@/config/ecosystem";
import { localePath } from "@/lib/i18n";

type NavbarProps = {
  lang: Lang;
  labels: SiteCopy["nav"];
};

const navTargets = [
  ["about", "about"],
  ["capabilities", "capabilities"],
  ["how", "how-it-works"],
  ["ecosystem", "ecosystem"],
  ["future", "future"],
  ["team", "team"],
  ["contact", "contact"],
] as const;

export function Navbar({ lang, labels }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  function saveLanguage(next: Lang) {
    try {
      window.localStorage.setItem("yuristim-info-lang", next);
    } catch {
      // Local persistence is optional; navigation still works without it.
    }
  }

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-nav__inner">
        <Link className="brand" href={localePath(lang)} aria-label="Yuristim home" onClick={() => setOpen(false)}>
          <span className="brand__mark">
            <Image
              src="/assets/yuristim-logo.webp"
              alt=""
              width={44}
              height={44}
              priority
              sizes="44px"
            />
          </span>
          <span>Yuristim</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navTargets.map(([key, id]) => (
            <Link key={key} href={localePath(lang, `#${id}`)}>
              {labels[key]}
            </Link>
          ))}
        </nav>

        <div className="site-nav__actions">
          <div className="language-switch" aria-label="Language switcher">
            {(["uz", "ru", "en"] as Lang[]).map((item) => (
              <Link
                key={item}
                className={lang === item ? "is-active" : ""}
                href={localePath(item)}
                hrefLang={item}
                onClick={() => saveLanguage(item)}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
          <a className="nav-cta" href={ECOSYSTEM.web}>
            {labels.open}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={open ? labels.close : labels.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <div className="mobile-nav__inner">
          <nav aria-label="Mobile navigation">
            {navTargets.map(([key, id], index) => (
              <Link key={key} href={localePath(lang, `#${id}`)} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {labels[key]}
              </Link>
            ))}
          </nav>
          <div className="mobile-nav__bottom">
            <div className="language-switch language-switch--mobile" aria-label="Language switcher">
              {(["uz", "ru", "en"] as Lang[]).map((item) => (
                <Link
                  key={item}
                  className={lang === item ? "is-active" : ""}
                  href={localePath(item)}
                  hrefLang={item}
                  onClick={() => {
                    saveLanguage(item);
                    setOpen(false);
                  }}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
            <a className="button button--primary button--wide" href={ECOSYSTEM.web}>
              {labels.open}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
