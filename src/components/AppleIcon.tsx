import type { LucideIcon } from "lucide-react";

type AppleIconProps = {
  icon: LucideIcon;
  size?: number;
  tone?: "light" | "dark";
  className?: string;
};

export function AppleIcon({
  icon: Icon,
  size = 18,
  tone = "light",
  className = "",
}: AppleIconProps) {
  return (
    <span
      className={`apple-icon apple-icon--${tone} ${className}`.trim()}
      aria-hidden="true"
    >
      <Icon size={size} strokeWidth={1.7} absoluteStrokeWidth />
    </span>
  );
}
