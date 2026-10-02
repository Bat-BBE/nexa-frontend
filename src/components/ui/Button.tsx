import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dawn" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap active:scale-[0.97]";

const variants: Record<Variant, string> = {
  // bg-ink + text-paper (not text-white) so this stays legible when ink/paper
  // invert in dark mode — the button itself flips polarity instead of breaking.
  primary:
    "bg-ink text-paper hover:opacity-90 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
  // text-on-accent (constant near-black), not text-ink, so the label stays
  // readable on the lime fill regardless of site theme.
  dawn: "btn-shine bg-dawn text-on-accent hover:bg-dawn-dim shadow-[0_8px_24px_-8px_rgba(204,255,0,0.5)]",
  "outline-dark":
    "border border-slate-200 text-ink hover:border-ink hover:bg-mist",
  ghost: "text-ink hover:bg-mist",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
