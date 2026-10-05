import { Badge } from "@/components/ui/Badge";
import { TiltLink } from "@/components/ui/TiltLink";
import { UniversityMark } from "@/components/ui/UniversityMark";
import type { University } from "@/lib/types";

export function UniversityCard({ university }: { university: University }) {
  return (
    <TiltLink
      href={`/campus/${university.slug}`}
      className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-paper p-6 shadow-card transition-[border-color,box-shadow] hover:border-dawn-hover/50 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <UniversityMark logo={university.logo} shortName={university.short_name} />
        {university.is_launch_partner ? (
          <Badge tone="dawn">Launch partner</Badge>
        ) : (
          <Badge tone="slate">Баталгаажсан</Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-sky-dim">
          {university.short_name}
        </h3>
        <p className="text-sm text-slate">{university.name}</p>
      </div>

      <div className="flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-dim">
        <span>{university.city}</span>
        {university.founded_year ? (
          <>
            <span aria-hidden>•</span>
            <span>{university.founded_year} оноос</span>
          </>
        ) : null}
      </div>
    </TiltLink>
  );
}
