import { Bot, BookOpen, FileStack, Globe2, Scale, Smartphone, WandSparkles } from "lucide-react";
import { ECOSYSTEM, ECOSYSTEM_NODES } from "@/config/ecosystem";
import type { SiteCopy } from "@/content/copy";

const icons = {
  web: Globe2,
  miniApp: Smartphone,
  bot: Bot,
  lawyers: Scale,
  literature: BookOpen,
  samples: FileStack,
  documentBeta: WandSparkles,
} as const;

const positions = [
  [50, 6],
  [81, 22],
  [87, 59],
  [66, 84],
  [33, 84],
  [12, 59],
  [18, 22],
] as const;

export function EcosystemMap({ text }: { text: SiteCopy["ecosystem"] }) {
  return (
    <div className="ecosystem-map">
      <svg className="ecosystem-map__lines" viewBox="0 0 800 620" aria-hidden="true">
        <defs>
          <radialGradient id="ecoPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#dff7ec" stopOpacity="0.9" />
            <stop offset="1" stopColor="#00875a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="310" r="150" fill="url(#ecoPulse)" opacity="0.5" />
        <g className="ecosystem-map__spokes">
          <line x1="400" y1="310" x2="400" y2="62" />
          <line x1="400" y1="310" x2="650" y2="138" />
          <line x1="400" y1="310" x2="690" y2="368" />
          <line x1="400" y1="310" x2="530" y2="530" />
          <line x1="400" y1="310" x2="270" y2="530" />
          <line x1="400" y1="310" x2="110" y2="368" />
          <line x1="400" y1="310" x2="150" y2="138" />
        </g>
      </svg>

      <div className="ecosystem-center" aria-hidden="true">
        <span className="ecosystem-center__halo" />
        <span className="ecosystem-center__mark">Y</span>
        <strong>{text.center}</strong>
      </div>

      {ECOSYSTEM_NODES.map((node, index) => {
        const Icon = icons[node.key];
        const [left, top] = positions[index];
        return (
          <a
            key={node.key}
            className="ecosystem-node"
            href={ECOSYSTEM[node.key]}
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <Icon size={18} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" />
            <span>
              <small>{node.short}</small>
              <strong>{node.label}</strong>
            </span>
          </a>
        );
      })}

      <div className="ecosystem-mobile-list">
        {ECOSYSTEM_NODES.map((node) => {
          const Icon = icons[node.key];
          return (
            <a key={node.key} href={ECOSYSTEM[node.key]}>
              <span className="ecosystem-mobile-list__icon">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span>
                <small>{node.short}</small>
                <strong>{node.label}</strong>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
