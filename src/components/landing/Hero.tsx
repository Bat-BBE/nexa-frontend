import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { deadlineLabel, TYPE_ICONS } from "@/lib/format";
import type { Opportunity } from "@/lib/types";
import { HeroCardStack } from "./HeroCardStack";

export function Hero({
  spotlight,
  liveCount,
}: {
  spotlight: Opportunity[];
  /** Real count (e.g. today.deadline_soon.length) — never a fabricated number. */
  liveCount?: number;
}) {
  const cards = spotlight.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-sky-field bg-grain pb-24 pt-16 md:pt-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.15fr_1fr] md:px-10">
        {/* Left: message */}
        <div className="flex flex-col gap-8">
          <div className="hero-rise flex flex-wrap items-center gap-2">
            <Badge tone="outline">🇲🇳 Монголын оюутан, залуусад</Badge>
            {liveCount ? (
              <span className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium text-slate">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dawn opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-dawn" />
                </span>
                {liveCount} боломжийн хугацаа удахгүй дуусна
              </span>
            ) : null}
          </div>

          <h1
            className="hero-rise font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-ink sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            Боломжоо бүү ол,
            <br />
            <span className="text-glow bg-gradient-to-r from-sky to-dawn bg-clip-text text-transparent">
              бодит үр дүн
            </span>{" "}
            хий.
          </h1>

          <p
            className="hero-rise max-w-lg text-base leading-relaxed text-slate"
            style={{ animationDelay: "0.1s" }}
          >
            Ажил, тэтгэлэг, эвент, сургууль, клуб, хамтрагчийг нэг дороос олж,
            deadline-аа удирдан, зорилгодоо хүр. Nexa нь контент үзүүлээд
            зогсохгүй, дараагийн алхмыг чинь тодорхой болгоно.
          </p>

          <div
            className="hero-rise flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.15s" }}
          >
            <Button href="/explore" variant="dawn" size="lg" className="w-full sm:w-auto">
              Боломжуудыг үзэх →
            </Button>
            <Button href="/explore" variant="outline-dark" size="lg" className="w-full sm:w-auto">
              Бүртгүүлэх
            </Button>
          </div>

          <Link
            href="/explore"
            className="hero-rise flex max-w-md items-center gap-3 rounded-full border border-ink/10 bg-ink/5 px-5 py-3.5 text-sm text-slate backdrop-blur-sm transition-colors hover:border-ink/20 hover:text-ink"
            style={{ animationDelay: "0.2s" }}
          >
            <span aria-hidden>🔍</span>
            Ажил, тэтгэлэг, эвент, сургууль хайх…
          </Link>

          {/* Mobile gets its own compact, swipeable preview instead of nothing —
              the desktop stacked-card treatment doesn't fit a narrow viewport. */}
          <div
            className="hero-rise -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 scrollbar-hide md:hidden"
            style={{ animationDelay: "0.2s" }}
          >
            {cards.map((opportunity) => (
              <Link
                key={opportunity.id}
                href={`/opportunities/${opportunity.slug}`}
                className="flex w-[78vw] shrink-0 snap-start flex-col gap-2 rounded-2xl border border-slate-100 bg-mist p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink/5">
                    <Icon
                      iconKey={`opportunity-type:${opportunity.type}`}
                      fallback={TYPE_ICONS[opportunity.type]}
                      className="h-4 w-4 text-base"
                    />
                  </span>
                  <Badge tone="dawn">{deadlineLabel(opportunity.deadline, opportunity.days_until_deadline)}</Badge>
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug text-ink">
                  {opportunity.title}
                </h3>
                <p className="text-xs text-slate-dim">{opportunity.organization_name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: stacked live cards (desktop only) */}
        <div className="hero-rise" style={{ animationDelay: "0.25s" }}>
          <HeroCardStack cards={cards} />
        </div>
      </div>
    </section>
  );
}
