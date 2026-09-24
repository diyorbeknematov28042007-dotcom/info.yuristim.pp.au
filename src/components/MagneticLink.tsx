"use client";

import { useRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function MagneticLink({ children, className = "", ...props }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || event.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
    el.style.setProperty("--magnetic-x", `${x}px`);\n    el.style.setProperty("--magnetic-y", `${y}px`);
  }

  function reset() {
    if (!ref.current) return;\n    ref.current.style.setProperty("--magnetic-x", "0px");\n    ref.current.style.setProperty("--magnetic-y", "0px");
  }

  return (
    <a
      ref={ref}
      className={`magnetic ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      {...props}
    >
      {children}
    </a>
  );
}
