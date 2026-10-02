import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import type { University } from "@/lib/types";

export function UniversityRow({ universities }: { universities: University[] }) {
  return (
    <section className="border-y border-slate-100 bg-mist py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          kicker="Сургуулиуд"
          title="Beta launch-д нэгдэж буй сургуулиуд"
          description="Зөвхөн нэг сургуулийн бус, олон их, дээд сургуулийн оюутанд зориулагдсан."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {universities.map((uni) => (
            <Link
              key={uni.id}
              href={`/campus/${uni.slug}`}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-paper p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-abyss font-display text-sm font-bold text-white">
                {uni.short_name.slice(0, 3)}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">{uni.short_name}</p>
                <p className="text-xs text-slate-dim">{uni.city}</p>
              </div>
              {uni.is_launch_partner ? (
                <Badge tone="dawn">Launch partner</Badge>
              ) : (
                <Badge tone="slate">Баталгаажсан</Badge>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
