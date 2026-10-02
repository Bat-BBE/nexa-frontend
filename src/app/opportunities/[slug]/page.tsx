import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AUDIENCE_LABELS, deadlineLabel, formatDate, TYPE_ICONS } from "@/lib/format";
import { getOpportunity } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function OpportunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const opportunity = await getOpportunity(slug);

  if (!opportunity) notFound();

  return (
    <div className="bg-paper py-14 md:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-8">
          <Link href="/explore" className="text-sm text-slate hover:text-ink">
            ← Explore руу буцах
          </Link>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-2xl">
                {TYPE_ICONS[opportunity.type]}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="slate">{opportunity.type_display}</Badge>
                {opportunity.is_deadline_soon ? (
                  <Badge tone="dawn">
                    {deadlineLabel(opportunity.deadline, opportunity.days_until_deadline)}
                  </Badge>
                ) : null}
              </div>
            </div>

            <h1 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {opportunity.title}
            </h1>
            <p className="text-lg text-slate">{opportunity.organization_name}</p>
          </div>

          {opportunity.description ? (
            <div className="prose prose-slate max-w-none border-t border-slate-100 pt-8 text-[15px] leading-relaxed text-ink/85">
              {opportunity.description.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : null}

          {opportunity.interests.length ? (
            <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-8">
              {opportunity.interests.map((interest) => (
                <Badge key={interest.slug} tone="sky">
                  {interest.icon} {interest.name}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="flex h-fit flex-col gap-6 rounded-2xl border border-slate-100 bg-mist p-6">
          {opportunity.source_url ? (
            <Button href={opportunity.source_url} variant="dawn" size="lg" className="w-full">
              Албан ёсны линкээр очих →
            </Button>
          ) : null}

          <dl className="flex flex-col gap-4 text-sm">
            <Row label="Deadline">
              {opportunity.deadline ? formatDate(opportunity.deadline) : "Тодорхойгүй"}
            </Row>
            <Row label="Байршил">
              {opportunity.is_remote ? "Онлайн" : opportunity.location || "Тодорхойгүй"}
            </Row>
            {opportunity.compensation ? (
              <Row label="Цалин / Урамшуулал">{opportunity.compensation}</Row>
            ) : null}
            <Row label="Зорилтот бүлэг">
              {opportunity.audiences.map((a) => AUDIENCE_LABELS[a]).join(", ")}
            </Row>
            {opportunity.source_name ? (
              <Row label="Эх сурвалж">{opportunity.source_name}</Row>
            ) : null}
            {opportunity.verified_at ? (
              <Row label="Шалгасан огноо">{formatDate(opportunity.verified_at)}</Row>
            ) : null}
          </dl>

          <p className="border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-dim">
            ⚠️ Энэ линк нь гадаад, албан ёсны эх сурвалж руу шилждэг. Хувийн мэдээллээ
            зөвхөн итгэмжлэгдсэн сайтад бөглөнө үү.
          </p>
        </aside>
      </Container>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0">
      <dt className="text-slate-dim">{label}</dt>
      <dd className="text-right font-medium text-ink">{children}</dd>
    </div>
  );
}
