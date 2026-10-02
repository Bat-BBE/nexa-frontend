import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { University } from "@/lib/types";

export function UniversityCard({ university }: { university: University }) {
  return (
    <Link
      href={`/campus/${university.slug}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-paper p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-abyss font-display text-sm font-bold text-white">
          {university.short_name.slice(0, 3)}
        </span>
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
    </Link>
  );
}
