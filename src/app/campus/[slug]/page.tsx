import { Landmark, Link2, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { UniversityMark } from "@/components/ui/UniversityMark";
import { getUniversity } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function UniversityDetailPage({ params }: Props) {
  const { slug } = await params;
  const university = await getUniversity(slug);

  if (!university) notFound();

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
        <Container className="relative flex flex-col gap-5">
          <Link href="/campus" className="text-sm text-slate hover:text-ink">
            ← Campus руу буцах
          </Link>

          <div className="flex items-center gap-4">
            <UniversityMark
              logo={university.logo}
              shortName={university.short_name}
              className="h-16 w-16 rounded-2xl text-lg"
            />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  {university.short_name}
                </h1>
                {university.is_launch_partner ? (
                  <Badge tone="dawn">Launch partner</Badge>
                ) : (
                  <Badge tone="slate">Баталгаажсан</Badge>
                )}
              </div>
              <p className="text-slate">{university.name}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-dim">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden /> {university.city}
            </span>
            {university.founded_year ? (
              <span className="inline-flex items-center gap-1.5">
                <Landmark className="h-4 w-4" aria-hidden /> {university.founded_year} онд
                байгуулагдсан
              </span>
            ) : null}
            {university.website ? (
              <a
                href={university.website}
                className="inline-flex items-center gap-1.5 text-sky-dim hover:underline"
              >
                <Link2 className="h-4 w-4" aria-hidden /> Албан ёсны сайт
              </a>
            ) : null}
          </div>
        </Container>
      </section>

      <div className="bg-paper py-14 md:py-20">
        <Container className="flex flex-col gap-10">
        {university.overview ? (
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-lg font-semibold text-ink">Танилцуулга</h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink/85">
              {university.overview}
            </p>
          </div>
        ) : null}

        {university.tuition_info ? (
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-lg font-semibold text-ink">
              Сургалтын төлбөр
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink/85">
              {university.tuition_info}
            </p>
          </div>
        ) : null}

        {university.programs?.length ? (
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-semibold text-ink">Хөтөлбөрүүд</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {university.programs.map((program) => (
                <div
                  key={program.id}
                  className="flex flex-col gap-1.5 rounded-2xl border border-slate-100 bg-mist p-5"
                >
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {program.name}
                  </h3>
                  <p className="text-xs text-slate-dim">
                    {program.degree_level} · {program.duration_years} жил
                  </p>
                  {program.description ? (
                    <p className="mt-1 text-sm text-slate">{program.description}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
        </Container>
      </div>
    </div>
  );
}
