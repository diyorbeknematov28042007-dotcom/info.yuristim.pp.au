"use client";

import { Check, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

type ModeCopy = {
  name: string;
  title: string;
  body: string;
  bullets: readonly string[];
};

type AIModeSwitcherProps = {
  fast: ModeCopy;
  expert: ModeCopy;
};

export function AIModeSwitcher({ fast, expert }: AIModeSwitcherProps) {
  const [mode, setMode] = useState<"fast" | "expert">("fast");
  const active = mode === "fast" ? fast : expert;

  return (
    <div className="ai-console" data-mode={mode}>
      <div className="ai-console__top">
        <div className="ai-console__status">
          <span className="status-dot" />
          YURISTIM AI
        </div>
        <div className="ai-console__tabs" role="tablist" aria-label="AI modes">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "fast"}
            className={mode === "fast" ? "is-active" : ""}
            onClick={() => setMode("fast")}
          >
            <Zap size={15} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" /> {fast.name}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "expert"}
            className={mode === "expert" ? "is-active" : ""}
            onClick={() => setMode("expert")}
          >
            <Sparkles size={15} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" /> {expert.name}
          </button>
        </div>
      </div>
      <div className="ai-console__body" key={mode}>
        <span className="ai-console__mode">{active.name}</span>
        <h3>{active.title}</h3>
        <p>{active.body}</p>
        <ul>
          {active.bullets.map((item) => (
            <li key={item}>
              <Check size={15} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="ai-console__signal" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
