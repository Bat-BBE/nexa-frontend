import { Container } from "@/components/ui/Container";
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
        {ITEMS.map((item) => (
          <div key={item.key} className="flex flex-col gap-1">
            <span className="font-display text-4xl font-semibold text-ink md:text-5xl">
              {stats[item.key]}
              {item.suffix ?? ""}
            </span>
            <span className="text-sm text-slate">{item.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
