import { FileText, Scale, Sparkles } from "lucide-react";
import type { SiteCopy } from "@/content/copy";

export function HeroVisual({ hero }: { hero: SiteCopy["hero"] }) {
  return (
    <div className="hero-system" aria-label={`${hero.problem} to ${hero.workspace}`}>
      <div className="hero-system__glow" aria-hidden="true" />
      <svg className="hero-system__paths" viewBox="0 0 680 470" aria-hidden="true">
        <defs>
          <linearGradient id="pathGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dff7ec" />
            <stop offset="0.55" stopColor="#00875a" />
            <stop offset="1" stopColor="#006b4f" />
          </linearGradient>
        </defs>
        <path className="draw-path path-a" d="M118 88 C210 88 225 190 333 190" />
        <path className="draw-path path-b" d="M350 190 C444 190 450 91 550 91" />
        <path className="draw-path path-c" d="M350 202 C445 202 463 212 558 212" />
        <path className="draw-path path-d" d="M350 214 C430 230 462 340 550 340" />
        <path className="draw-path path-e" d="M550 91 C560 250 445 403 340 403" />
        <path className="draw-path path-f" d="M558 212 C520 310 440 403 340 403" />
        <path className="draw-path path-g" d="M550 340 C500 388 425 403 340 403" />
        <circle className="path-dot dot-a" cx="118" cy="88" r="4" fill="url(#pathGradient)" />
        <circle className="path-dot dot-b" cx="333" cy="190" r="4" fill="url(#pathGradient)" />
        <circle className="path-dot dot-c" cx="550" cy="91" r="4" fill="url(#pathGradient)" />
        <circle className="path-dot dot-d" cx="558" cy="212" r="4" fill="url(#pathGradient)" />
        <circle className="path-dot dot-e" cx="550" cy="340" r="4" fill="url(#pathGradient)" />
        <circle className="path-dot dot-f" cx="340" cy="403" r="4" fill="url(#pathGradient)" />
      </svg>

      <div className="hero-node hero-node--problem">
        <span className="hero-node__micro">01</span>
        <strong>{hero.problem}</strong>
        <span className="hero-node__line" />
      </div>

      <div className="hero-core" aria-hidden="true">
        <div className="hero-core__ring" />
        <span>Y</span>
        <small>YURISTIM</small>
      </div>

      <div className="hero-node hero-node--ai">
        <Sparkles size={18} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" />
        <strong>{hero.ai}</strong>
      </div>
      <div className="hero-node hero-node--doc">
        <FileText size={18} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" />
        <strong>{hero.document}</strong>
      </div>
      <div className="hero-node hero-node--lawyer">
        <Scale size={18} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" />
        <strong>{hero.lawyer}</strong>
      </div>

      <div className="hero-workspace">
        <span className="workspace-pulse" aria-hidden="true" />
        <strong>{hero.workspace}</strong>
        <small>one identity · connected tools</small>
      </div>
    </div>
  );
}
