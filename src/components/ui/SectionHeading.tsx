"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  action,
}: {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  // Headings "arrive" as they scroll into view: font-weight settles from
  // regular to semibold alongside a short fade/rise, instead of sitting
  // fully-weighted and static the moment the page loads.
  const ref = useRef<HTMLHeadingElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${align === "center" ? "md:flex-col md:items-center" : ""}`}>
      <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
        {kicker ? (
          <span className="font-display text-sm font-medium text-sky-dim">{kicker}</span>
        ) : null}
        <h2
          ref={ref}
          className={`font-display text-2xl leading-[1.15] text-balance text-ink transition-all duration-700 ease-out md:text-3xl ${
            revealed ? "translate-y-0 font-semibold opacity-100" : "translate-y-2 font-normal opacity-0"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p className="text-sm leading-relaxed text-slate md:text-base">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
