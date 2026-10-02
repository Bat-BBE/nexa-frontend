import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatDateTime } from "@/lib/format";
import { getEvent } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) notFound();

  return (
    <div className="bg-paper py-14 md:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-8">
          <Link href="/events" className="text-sm text-slate hover:text-ink">
            ← Эвентүүд рүү буцах
          </Link>

          <div className="flex flex-col gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-soft text-2xl">
              📅
            </span>
            <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              {event.title}
            </h1>
            <p className="text-slate">{formatDateTime(event.start_at)}</p>
          </div>

          {event.description ? (
            <p className="max-w-2xl border-t border-slate-100 pt-8 text-[15px] leading-relaxed text-ink/85">
              {event.description}
            </p>
          ) : null}

          {event.interests?.length ? (
            <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-8">
              {event.interests.map((interest) => (
                <Badge key={interest.slug} tone="sky">
                  {interest.icon} {interest.name}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="flex h-fit flex-col gap-5 rounded-2xl border border-slate-100 bg-mist p-6">
          {event.registration_url ? (
            <Button href={event.registration_url} variant="dawn" size="lg" className="w-full">
              Бүртгүүлэх →
            </Button>
          ) : (
            <Button href="/explore" variant="dawn" size="lg" className="w-full">
              Сонирхож байна
            </Button>
          )}

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm">
            <Row label="Байршил">{event.is_online ? "Онлайн" : event.location}</Row>
            {event.organizer_name ? <Row label="Зохион байгуулагч">{event.organizer_name}</Row> : null}
            {event.university ? (
              <Row label="Сургууль">
                <Link href={`/campus/${event.university.slug}`} className="text-sky-dim hover:underline">
                  {event.university.short_name}
                </Link>
              </Row>
            ) : null}
            <Row label="Сонирхож буй">{event.interested_count} хүн</Row>
            {event.capacity ? <Row label="Багтаамж">{event.capacity} хүн</Row> : null}
          </div>
        </aside>
      </Container>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-dim">{label}</span>
      <span className="font-medium text-ink">{children}</span>
    </div>
  );
}
