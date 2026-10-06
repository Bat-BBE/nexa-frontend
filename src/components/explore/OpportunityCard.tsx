import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { InterestGlyph } from "@/components/ui/InterestGlyph";
import { TiltLink } from "@/components/ui/TiltLink";
import { deadlineLabel, TYPE_ICONS } from "@/lib/format";
import type { Opportunity } from "@/lib/types";

export function OpportunityCard({
  opportunity,
  className = "",
  size = "normal",
}: {
  opportunity: Opportunity;
  className?: string;
  /** "wide" renders a larger bento tile — bigger icon, bigger title, description preview. */
  size?: "normal" | "wide";
}) {
  const primaryInterest = opportunity.interests[0];
  const isWide = size === "wide";

  return (
    <TiltLink
      href={`/opportunities/${opportunity.slug}`}
      className={`flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-paper p-5 shadow-card transition-[border-color,box-shadow] hover:border-dawn-hover/50 hover:shadow-glow ${isWide ? "sm:p-6" : ""} ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex shrink-0 items-center justify-center rounded-xl bg-mist transition-transform duration-300 group-hover:scale-105 ${
            isWide ? "h-14 w-14" : "h-11 w-11"
          }`}
        >
          <Icon
            iconKey={`opportunity-type:${opportunity.type}`}
            fallback={TYPE_ICONS[opportunity.type]}
            className={isWide ? "h-7 w-7 text-2xl" : "h-5 w-5 text-xl"}
          />
        </span>
        {opportunity.is_deadline_soon ? (
          <Badge tone="dawn">{deadlineLabel(opportunity.deadline, opportunity.days_until_deadline)}</Badge>
        ) : (
          <Badge tone="slate">{opportunity.type_display}</Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3
          className={`font-display line-clamp-2 font-semibold leading-snug text-ink transition-colors group-hover:text-sky-dim ${
            isWide ? "text-xl" : "text-base"
          }`}
        >
          {opportunity.title}
        </h3>
        <p className="line-clamp-1 text-sm text-slate">{opportunity.organization_name}</p>
        {isWide && opportunity.description ? (
          <p className="mt-1 line-clamp-2 max-w-md text-sm leading-relaxed text-slate-dim">
            {opportunity.description}
          </p>
        ) : null}
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
            <span className="inline-flex items-center gap-1">
              <InterestGlyph interest={primaryInterest} /> {primaryInterest.name}
            </span>
          </>
        ) : null}
      </div>
    </TiltLink>
  );
}
