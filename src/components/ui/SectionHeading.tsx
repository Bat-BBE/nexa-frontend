import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "dark",
  action,
}: {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const descColor = tone === "light" ? "text-white/65" : "text-slate";
  const kickerColor = tone === "light" ? "text-dawn" : "text-sky-dim";

  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${align === "center" ? "md:flex-col md:items-center" : ""}`}>
      <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
        {kicker ? (
          <span className={`font-display text-sm font-medium ${kickerColor}`}>{kicker}</span>
        ) : null}
        <h2 className={`font-display text-3xl font-semibold leading-[1.1] text-balance md:text-4xl ${titleColor}`}>
          {title}
        </h2>
        {description ? (
          <p className={`text-base leading-relaxed md:text-lg ${descColor}`}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
