import { Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { InterestGlyph } from "@/components/ui/InterestGlyph";
import { getClub } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

const MEMBERSHIP_LABELS: Record<string, string> = {
  OPEN: "Нээлттэй элсэлт",
  REQUEST: "Хүсэлтээр элсэнэ",
  CLOSED: "Хаалттай",
};

export default async function ClubDetailPage({ params }: Props) {
  const { slug } = await params;
  const club = await getClub(slug);

  if (!club) notFound();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-100 bg-mist py-14 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "radial-gradient(55% 85% at 10% 0%, var(--color-sky), transparent 60%), radial-gradient(45% 75% at 100% 15%, var(--color-dawn), transparent 55%)",
          }}
        />
        <Container className="relative flex flex-col gap-6">
          <Link href="/clubs" className="text-sm text-slate hover:text-ink">
            ← Клубууд руу буцах
          </Link>

          <div className="flex flex-col gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dawn-soft">
              <Icon iconKey="entity:club" fallback="🤝" className="h-7 w-7" />
            </span>
            <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              {club.name}
            </h1>
            <p className="text-slate">
              {club.university ? club.university.short_name : "Олон сургуулийн клуб"} ·{" "}
              {club.member_count} гишүүн
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-paper py-14 md:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-8">
            {club.description ? (
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink/85">
                {club.description}
              </p>
            ) : null}

            {club.interests.length ? (
              <div className="flex flex-wrap gap-2">
                {club.interests.map((interest) => (
                  <Badge key={interest.slug} tone="sky">
                    <InterestGlyph interest={interest} /> {interest.name}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="flex h-fit flex-col gap-5 rounded-2xl border border-slate-100 bg-mist p-6">
            <Button href="/explore" variant="dawn" size="lg" className="w-full">
              Нэгдэхийн тулд бүртгүүлэх
            </Button>
            <p className="flex items-start gap-1.5 text-xs leading-relaxed text-slate-dim">
              <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              Групп болон чат feature бүртгэлтэй хэрэглэгчид нээгдэнэ (Groups, Phase 4a).
            </p>
            <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
              <span className="text-slate-dim">Элсэлт</span>
              <span className="font-medium text-ink">
                {MEMBERSHIP_LABELS[club.membership_type]}
              </span>
            </div>
            {club.university ? (
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-dim">Сургууль</span>
                <Link
                  href={`/campus/${club.university.slug}`}
                  className="font-medium text-sky-dim hover:underline"
                >
                  {club.university.short_name}
                </Link>
              </div>
            ) : null}
          </aside>
        </Container>
      </div>
    </div>
  );
}
