import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { TiltLink } from "@/components/ui/TiltLink";
import { formatDateTime } from "@/lib/format";
import type { NexaEvent } from "@/lib/types";

export function EventCard({
  event,
  className = "",
}: {
  event: NexaEvent;
  className?: string;
}) {
  return (
    <TiltLink
      href={`/events/${event.slug}`}
      className={`flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-paper p-5 shadow-card transition-[border-color,box-shadow] hover:border-dawn-hover/50 hover:shadow-glow ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
          <Icon iconKey="opportunity-type:EVENT" fallback="📅" className="h-5 w-5 text-xl" />
        </span>
        <Badge tone={event.is_online ? "sky" : "slate"}>
          {event.is_online ? "Онлайн" : event.location || "Улаанбаатар"}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display line-clamp-2 text-base font-semibold leading-snug text-ink transition-colors group-hover:text-sky-dim">
          {event.title}
        </h3>
        <p className="text-sm text-slate">{formatDateTime(event.start_at)}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-dim">
        {event.university ? <span>{event.university.short_name}</span> : null}
        {event.university ? <span aria-hidden>•</span> : null}
        <span>{event.interested_count} хүн сонирхож байна</span>
      </div>
    </TiltLink>
  );
}
