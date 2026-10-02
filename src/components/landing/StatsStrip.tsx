import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import type { HomeStats } from "@/lib/types";

const ITEMS: Array<{ key: keyof HomeStats; label: string; suffix?: string }> = [
  { key: "opportunities", label: "Идэвхтэй боломж", suffix: "+" },
  { key: "universities", label: "Их, дээд сургууль" },
  { key: "clubs", label: "Клуб" },
  { key: "events", label: "Удахгүй болох эвент" },
];

export function StatsStrip({ stats }: { stats: HomeStats }) {
  return (
    <section className="border-b border-slate-100 bg-paper">
      <Container className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
        {ITEMS.map((item, i) => (
          <div key={item.key} className="flex flex-col gap-1">
            <span className="font-display text-3xl font-semibold text-ink md:text-4xl">
              <CountUp value={stats[item.key]} suffix={item.suffix ?? ""} duration={900 + i * 150} />
            </span>
            <span className="text-sm text-slate">{item.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
