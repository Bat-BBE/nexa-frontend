import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { deadlineLabel, TYPE_ICONS } from "@/lib/format";
import type { Opportunity } from "@/lib/types";

export function OpportunityCard({
  opportunity,
  className = "",
}: {
  opportunity: Opportunity;
  className?: string;
}) {
  const primaryInterest = opportunity.interests[0];

  return (
    <Link
      href={`/opportunities/${opportunity.slug}`}
      className={`group flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-paper p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-elevated ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-xl">
          {TYPE_ICONS[opportunity.type]}
        </span>
        {opportunity.is_deadline_soon ? (
          <Badge tone="dawn">{deadlineLabel(opportunity.deadline, opportunity.days_until_deadline)}</Badge>
        ) : (
          <Badge tone="slate">{opportunity.type_display}</Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-sky-dim">
          {opportunity.title}
        </h3>
        <p className="text-sm text-slate">{opportunity.organization_name}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-dim">
        <span>{opportunity.is_remote ? "Онлайн" : opportunity.location || "Улаанбаатар"}</span>
        {opportunity.compensation ? (
          <>
            <span aria-hidden>•</span>
            <span>{opportunity.compensation}</span>
          </>
        ) : null}
        {primaryInterest ? (
          <>
            <span aria-hidden>•</span>
            <span>
              {primaryInterest.icon} {primaryInterest.name}
            </span>
          </>
        ) : null}
      </div>
    </Link>
  );
}
