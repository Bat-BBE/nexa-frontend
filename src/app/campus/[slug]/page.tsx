import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { getUniversity } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function UniversityDetailPage({ params }: Props) {
  const { slug } = await params;
  const university = await getUniversity(slug);

  if (!university) notFound();

  return (
    <div className="bg-paper py-14 md:py-20">
      <Container className="flex flex-col gap-10">
        <Link href="/campus" className="text-sm text-slate hover:text-ink">
          ← Campus руу буцах
        </Link>

        <div className="flex flex-col gap-5 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink font-display text-lg font-bold text-paper">
              {university.short_name.slice(0, 3)}
            </span>
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
            <span>📍 {university.city}</span>
            {university.founded_year ? <span>🏛️ {university.founded_year} онд байгуулагдсан</span> : null}
            {university.website ? (
              <a href={university.website} className="text-sky-dim hover:underline">
                🔗 Албан ёсны сайт
              </a>
            ) : null}
          </div>
        </div>

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
  );
}
