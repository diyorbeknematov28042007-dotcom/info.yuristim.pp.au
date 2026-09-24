"use client";

import { useEffect, useRef, useState } from "react";

type Step = readonly [string, string, string];

type StickyStoryProps = {
  steps: readonly Step[];
  tone?: "light" | "dark";
};

export function StickyStory({ steps, tone = "light" }: StickyStoryProps) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const nodes = [...host.querySelectorAll<HTMLElement>("[data-sticky-step]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const candidate = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!candidate) return;
        const index = Number((candidate.target as HTMLElement).dataset.stickyStep ?? 0);
        setActive(index);
      },
      { rootMargin: "-35% 0px -42%", threshold: [0.15, 0.5, 0.9] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-story sticky-story--${tone}`} ref={root}>
      <aside className="sticky-story__rail" aria-hidden="true">
        <div className="sticky-story__orb">
          <span>{steps[active]?.[0]}</span>
          <div className="sticky-story__meter">
            <i style={{ transform: `scaleY(${(active + 1) / steps.length})` }} />
          </div>
        </div>
      </aside>
      <div className="sticky-story__steps">
        {steps.map(([number, title, body], index) => (
          <article
            key={`${number}-${title}`}
            data-sticky-step={index}
            className={active === index ? "is-active" : ""}
          >
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
