import type { ReactNode } from "react";

type Tone = "sky" | "dawn" | "slate" | "outline";

const tones: Record<Tone, string> = {
  sky: "bg-sky-soft text-sky-on-soft",
  dawn: "bg-dawn-soft text-dawn-on-soft",
  slate: "bg-mist text-slate",
  outline: "border border-slate-200 text-slate",
};

export function Badge({
  children,
  tone = "slate",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
