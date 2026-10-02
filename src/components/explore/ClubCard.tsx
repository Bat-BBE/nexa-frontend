import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { TiltLink } from "@/components/ui/TiltLink";
import type { Club } from "@/lib/types";

const MEMBERSHIP_LABELS: Record<Club["membership_type"], string> = {
  OPEN: "Нээлттэй",
  REQUEST: "Хүсэлтээр",
  CLOSED: "Хаалттай",
};

export function ClubCard({ club }: { club: Club }) {
  return (
    <TiltLink
      href={`/clubs/${club.slug}`}
      className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-paper p-5 shadow-card transition-[border-color,box-shadow] hover:border-dawn-hover/50 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-dawn-soft">
          <Icon iconKey="entity:club" fallback="🤝" className="h-5 w-5 text-xl" />
        </span>
        <Badge tone="slate">{MEMBERSHIP_LABELS[club.membership_type]}</Badge>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-sky-dim">
          {club.name}
        </h3>
        <p className="text-sm text-slate">
          {club.university ? club.university.short_name : "Олон сургуулийн"}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-dim">
        <span>{club.member_count} гишүүн</span>
        {club.interests[0] ? (
          <>
            <span aria-hidden>•</span>
            <span>
              {club.interests[0].icon} {club.interests[0].name}
            </span>
          </>
        ) : null}
      </div>
    </TiltLink>
  );
}
