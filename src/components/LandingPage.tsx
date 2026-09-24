import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  FileCheck2,
  FileText,
  Fingerprint,
  Globe2,
  Layers3,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import type { Lang, SiteCopy } from "@/content/copy";
import { ECOSYSTEM } from "@/config/ecosystem";
import { Navbar } from "@/components/Navbar";
import { HeroVisual } from "@/components/HeroVisual";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import { MagneticLink } from "@/components/MagneticLink";
import { StickyStory } from "@/components/StickyStory";
import { AIModeSwitcher } from "@/components/AIModeSwitcher";\nimport { AppleIcon } from "@/components/AppleIcon";
import { EcosystemMap } from "@/components/EcosystemMap";
import { localePath } from "@/lib/i18n";

type LandingPageProps = {
  lang: Lang;
  text: SiteCopy;
};

const trustIcons = [Scale, Globe2, UserCheck, Layers3] as const;
const trustSectionIcons = [Bot, Fingerprint, LockKeyhole, ShieldCheck] as const;

export function LandingPage({ lang, text }: LandingPageProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Yuristim",
      url: ECOSYSTEM.info,
      logo: `${ECOSYSTEM.info}/assets/yuristim-logo.webp`,
      sameAs: [ECOSYSTEM.bot],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Yuristim",
      url: ECOSYSTEM.info,
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Yuristim",
      applicationCategory: "LegalService",
      operatingSystem: "Web",
      url: ECOSYSTEM.web,
      description: text.meta.description,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollProgress />
      <Navbar lang={lang} labels={text.nav} />

      <main>
        <section className="hero" id="top">
          <div className="ambient" aria-hidden="true">
            <span className="ambient__triangle ambient__triangle--one" />
            <span className="ambient__triangle ambient__triangle--two" />
            <span className="ambient__triangle ambient__triangle--three" />
            <span className="ambient__grid" />
            <span className="ambient__light" />
          </div>

          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="hero__brand-intro" aria-hidden="true">
                <Image
                  src="/assets/yuristim-logo.webp"
                  alt=""
                  width={54}
                  height={54}
                  priority
                  sizes="54px"
                />
                <span>YURISTIM</span>
              </div>
              <p className="eyebrow hero__eyebrow">{text.hero.eyebrow}</p>
              <h1 className="hero__title"><span>{text.hero.title}</span></h1>
              <p className="hero__body">{text.hero.body}</p>

              <div className="hero__actions">
                <MagneticLink className="button button--primary" href={ECOSYSTEM.web}>
                  {text.hero.primary}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </MagneticLink>
                <MagneticLink className="button button--secondary" href={ECOSYSTEM.bot}>
                  {text.hero.secondary}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </MagneticLink>
              </div>

              <a className="hero__tertiary" href={ECOSYSTEM.firstAdmission}>
                <span>{text.hero.tertiary}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="hero__visual-wrap">
              <HeroVisual hero={text.hero} />
            </div>
          </div>

          <a className="hero__scroll" href={localePath(lang, "#problem")} aria-label="Scroll to content">
            <span />
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="trust-strip" aria-label="Yuristim facts">
          <div className="container trust-strip__inner">
            {text.trust.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={item} className="trust-strip__item">
                  <AppleIcon icon={Icon} size={16} />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section problem-section" id="problem">
          <div className="container">
            <Reveal className="section-heading section-heading--wide">
              <p className="eyebrow">{text.problem.eyebrow}</p>
              <h2>{text.problem.title}</h2>
              <p>{text.problem.body}</p>
            </Reveal>
            <StickyStory steps={text.problem.steps} />
            <Reveal className="problem-resolution">
              <span className="problem-resolution__mark">Y</span>
              <p>{text.problem.resolution}</p>
            </Reveal>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <Reveal className="section-heading">
              <p className="eyebrow">{text.about.eyebrow}</p>
              <h2>{text.about.title}</h2>
            </Reveal>
            <Reveal className="about-copy" delay={80}>
              <p>{text.about.body}</p>
              <div className="about-tags">
                {text.about.tags.map((tag, index) => (
                  <span key={tag}>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section pillars-section" id="capabilities">
          <div className="container">
            <Reveal className="section-heading section-heading--wide">
              <p className="eyebrow">{text.pillars.eyebrow}</p>
              <h2>{text.pillars.title}</h2>
            </Reveal>

            <div className="pillar-stories">
              {text.pillars.items.map((item, index) => (
                <Reveal className={`pillar-story pillar-story--${index + 1}`} key={item.number}>
                  <div className="pillar-story__copy">
                    <span className="pillar-story__number">{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <span className="pillar-story__label">{item.label}</span>
                  </div>

                  <div className="pillar-story__visual" aria-hidden="true">
                    {index === 0 && (
                      <div className="visual-ai">
                        <span className="visual-ai__prompt">?</span>
                        <span className="visual-ai__line visual-ai__line--one" />
                        <span className="visual-ai__line visual-ai__line--two" />
                        <span className="visual-ai__line visual-ai__line--three" />
                        <Sparkles size={26} strokeWidth={1.7} absoluteStrokeWidth />
                      </div>
                    )}
                    {index === 1 && (
                      <div className="visual-lawyers">
                        <span><UserCheck size={20} strokeWidth={1.7} absoluteStrokeWidth /></span>
                        <span><Scale size={22} strokeWidth={1.7} absoluteStrokeWidth /></span>
                        <span><UserCheck size={20} strokeWidth={1.7} absoluteStrokeWidth /></span>
                        <i />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="visual-documents">
                        <div><FileText size={24} strokeWidth={1.7} absoluteStrokeWidth /></div>
                        <div><FileCheck2 size={24} strokeWidth={1.7} absoluteStrokeWidth /></div>
                        <span />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section ai-section">
          <div className="container ai-grid">
            <Reveal className="section-heading section-heading--dark">
              <p className="eyebrow eyebrow--light">{text.ai.eyebrow}</p>
              <h2>{text.ai.title}</h2>
              <p>{text.ai.description}</p>
            </Reveal>
            <Reveal delay={90}>
              <AIModeSwitcher fast={text.ai.fast} expert={text.ai.expert} />
            </Reveal>
          </div>
        </section>

        <section className="section how-section" id="how-it-works">
          <div className="container">
            <Reveal className="section-heading section-heading--wide">
              <p className="eyebrow">{text.how.eyebrow}</p>
              <h2>{text.how.title}</h2>
            </Reveal>
            <StickyStory steps={text.how.steps} />
          </div>
        </section>

        <section className="section marketplace-section">
          <div className="container marketplace-grid">
            <Reveal className="marketplace-copy">
              <p className="eyebrow">{text.marketplace.eyebrow}</p>
              <h2>{text.marketplace.title}</h2>
              <p>{text.marketplace.body}</p>
              <a className="text-link" href={ECOSYSTEM.lawyers}>
                {text.marketplace.cta}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <small>{text.marketplace.note}</small>
            </Reveal>

            <Reveal className="marketplace-flow" delay={80}>
              {text.marketplace.flow.map((label, index) => (
                <div key={label} className="marketplace-flow__step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{label}</strong>
                  {index < text.marketplace.flow.length - 1 && <i aria-hidden="true" />}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section documents-section">
          <div className="container">
            <Reveal className="section-heading section-heading--wide">
              <p className="eyebrow">{text.documents.eyebrow}</p>
              <h2>{text.documents.title}</h2>
            </Reveal>

            <div className="document-panels">
              <Reveal className="document-panel document-panel--samples">
                <span className="document-panel__icon"><FileStackIcon /></span>
                <p className="panel-label">01 · LIBRARY</p>
                <h3>{text.documents.sampleTitle}</h3>
                <p>{text.documents.sampleBody}</p>
                <a className="text-link" href={ECOSYSTEM.samples}>
                  {text.documents.sampleCta}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </Reveal>

              <Reveal className="document-panel document-panel--beta" delay={80}>
                <span className="document-panel__icon"><Sparkles size={24} strokeWidth={1.7} absoluteStrokeWidth /></span>
                <p className="panel-label">02 · BETA</p>
                <h3>{text.documents.betaTitle}</h3>
                <p>{text.documents.betaBody}</p>
                <a className="text-link" href={ECOSYSTEM.documentBeta}>
                  {text.documents.betaCta}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </Reveal>
            </div>

            <Reveal className="document-process">
              {text.documents.process.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {index < text.documents.process.length - 1 && <i />}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section ecosystem-section" id="ecosystem">
          <div className="container">
            <Reveal className="section-heading section-heading--center section-heading--dark">
              <p className="eyebrow eyebrow--light">{text.ecosystem.eyebrow}</p>
              <h2>{text.ecosystem.title}</h2>
              <p>{text.ecosystem.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <EcosystemMap text={text.ecosystem} />
            </Reveal>
          </div>
        </section>

        <section className="section roadmap-section" id="future">
          <div className="container roadmap-grid">
            <Reveal className="section-heading">
              <p className="eyebrow">{text.roadmap.eyebrow}</p>
              <h2>{text.roadmap.title}</h2>
              <p>{text.roadmap.note}</p>
            </Reveal>

            <div className="roadmap-columns">
              <Reveal className="roadmap-column roadmap-column--today">
                <div className="roadmap-column__head">
                  <span className="status-dot" />
                  <strong>{text.roadmap.today}</strong>
                </div>
                <ul>
                  {text.roadmap.todayItems.map((item) => (
                    <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="roadmap-column roadmap-column--future" delay={70}>
                <div className="roadmap-column__head">
                  <span className="future-dot" />
                  <strong>{text.roadmap.future}</strong>
                </div>
                <ul>
                  {text.roadmap.futureItems.map((item) => (
                    <li key={item}><ArrowRight size={15} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="container">
            <Reveal className="section-heading section-heading--wide">
              <p className="eyebrow">{text.team.eyebrow}</p>
              <h2>{text.team.title}</h2>
            </Reveal>

            <div className="founder-feature">
              <Reveal className="founder-portrait">
                <div className="founder-portrait__frame">
                  <Image
                    src="/assets/founder-diyorbek.webp"
                    alt={text.team.founderAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 52vw"
                    className="founder-portrait__image"
                  />
                  <span className="founder-portrait__edge" aria-hidden="true" />
                </div>
              </Reveal>

              <Reveal className="founder-copy" delay={90}>
                <p className="eyebrow">{text.team.founderLabel}</p>
                <h3>{text.team.founderName}</h3>
                <span className="founder-role">{text.team.founderRole}</span>
                <p>{text.team.founderBio}</p>
                <div className="founder-signature">
                  <span className="founder-signature__line" />
                  <small>YURISTIM · LEGALTECH</small>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section admission-section">
          <div className="container">
            <Reveal className="admission-card">
              <div className="admission-card__noise" aria-hidden="true" />
              <div>
                <p className="eyebrow eyebrow--light">{text.admission.eyebrow}</p>
                <h2>{text.admission.title}</h2>
                <p>{text.admission.body}</p>
              </div>
              <MagneticLink className="button button--light" href={ECOSYSTEM.firstAdmission}>
                {text.admission.cta}
                <ArrowUpRight size={18} aria-hidden="true" />
              </MagneticLink>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container">
            <Reveal className="section-heading section-heading--wide">
              <p className="eyebrow">{text.trustSection.eyebrow}</p>
              <h2>{text.trustSection.title}</h2>
            </Reveal>

            <div className="trust-grid">
              {text.trustSection.items.map(([title, body], index) => {
                const Icon = trustSectionIcons[index];
                return (
                  <Reveal className="trust-card" key={title} delay={index * 45}>
                    <AppleIcon icon={Icon} size={18} />
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </Reveal>
                );
              })}
            </div>

            <a className="offer-link" href={ECOSYSTEM.publicOffer}>
              {text.trustSection.offer}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta__ambient" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container final-cta__inner">
            <Reveal>
              <p className="eyebrow eyebrow--light">{text.final.eyebrow}</p>
              <h2>{text.final.title}</h2>
              <p>{text.final.body}</p>
              <div className="final-cta__actions">
                <MagneticLink className="button button--light" href={ECOSYSTEM.web}>
                  {text.final.primary}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </MagneticLink>
                <MagneticLink className="button button--dark-ghost" href={ECOSYSTEM.bot}>
                  {text.final.secondary}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </MagneticLink>
              </div>
            </Reveal>

            <div className="final-mark" aria-hidden="true">
              <span className="final-mark__ring" />
              <span className="final-mark__ring final-mark__ring--two" />
              <strong>Y</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand brand--footer" href={localePath(lang)}>
              <span className="brand__mark">
                <Image src="/assets/yuristim-logo.webp" alt="" width={44} height={44} sizes="44px" />
              </span>
              <span>Yuristim</span>
            </a>
            <p>{text.footer.summary}</p>
          </div>

          <div className="footer-column">
            <strong>{text.footer.product}</strong>
            <a href={ECOSYSTEM.web}>{text.footer.web}</a>
            <a href={ECOSYSTEM.lawyers}>{text.footer.lawyers}</a>
            <a href={ECOSYSTEM.literature}>{text.footer.literature}</a>
            <a href={ECOSYSTEM.samples}>{text.footer.samples}</a>
            <a href={ECOSYSTEM.documentBeta}>{text.footer.documentBeta}</a>
          </div>

          <div className="footer-column">
            <strong>{text.footer.company}</strong>
            <a href={localePath(lang, "#about")}>{text.footer.about}</a>
            <a href={localePath(lang, "#team")}>{text.footer.team}</a>
            <a href={localePath(lang, "#future")}>{text.footer.future}</a>
            <a href={ECOSYSTEM.bot}>{text.footer.telegram}</a>
            <a href={ECOSYSTEM.miniApp}>{text.footer.miniApp}</a>
          </div>

          <div className="footer-column">
            <strong>{text.footer.legal}</strong>
            <a href={ECOSYSTEM.publicOffer}>{text.footer.offer}</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {text.footer.rights}</span>
          <span>info.yuristim.pp.ua</span>
        </div>
      </footer>
    </>
  );
}

function FileStackIcon() {
  return (
    <span className="file-stack-icon" aria-hidden="true">
      <FileText size={24} />
      <i />
      <i />
    </span>
  );
}
