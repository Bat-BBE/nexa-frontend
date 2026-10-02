import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { deadlineLabel, TYPE_ICONS } from "@/lib/format";
import type { Opportunity } from "@/lib/types";

export function Hero({ spotlight }: { spotlight: Opportunity[] }) {
  const cards = spotlight.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-sky-field bg-grain pb-24 pt-16 md:pt-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.15fr_1fr] md:px-10">
        {/* Left: message */}
        <div className="flex flex-col gap-8">
          <div className="hero-rise flex items-center gap-2">
            <Badge tone="outline-light">🇲🇳 Монголын оюутан, залуусад</Badge>
          </div>

          <h1
            className="hero-rise font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            Боломжоо бүү ол,
            <br />
            <span className="bg-gradient-to-r from-sky to-dawn bg-clip-text text-transparent">
              бодит үр дүн
            </span>{" "}
            хий.
          </h1>

          <p
            className="hero-rise max-w-lg text-lg leading-relaxed text-white/70"
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
            <Button href="/explore" variant="dawn" size="lg">
              Боломжуудыг үзэх →
            </Button>
            <Button href="/explore" variant="outline-light" size="lg">
              Бүртгүүлэх
            </Button>
          </div>

          <Link
            href="/explore"
            className="hero-rise flex max-w-md items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white/60 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white/80"
            style={{ animationDelay: "0.2s" }}
          >
            <span aria-hidden>🔍</span>
            Ажил, тэтгэлэг, эвент, сургууль хайх…
          </Link>
        </div>

        {/* Right: stacked live cards */}
        <div className="hero-rise relative mx-auto hidden h-[420px] w-full max-w-sm md:block" style={{ animationDelay: "0.25s" }}>
          {cards.map((opportunity, i) => (
            <div
              key={opportunity.id}
              className="absolute left-0 right-0 rounded-2xl border border-white/10 bg-abyss-2/90 p-5 shadow-elevated backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              style={{
                top: `${i * 76}px`,
                transform: `rotate(${(i - 1) * 2.5}deg)`,
                zIndex: 10 - i,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg">
                  {TYPE_ICONS[opportunity.type]}
                </span>
                <span className="rounded-full bg-dawn/15 px-2.5 py-1 text-[0.7rem] font-medium text-dawn">
                  {deadlineLabel(opportunity.deadline, opportunity.days_until_deadline)}
                </span>
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold leading-snug text-white">
                {opportunity.title}
              </h3>
              <p className="mt-1 text-xs text-white/50">{opportunity.organization_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
