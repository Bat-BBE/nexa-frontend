import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/explore/EventCard";
import { OpportunityCard } from "@/components/explore/OpportunityCard";
import type { HomeToday } from "@/lib/types";

export function TodaySection({ today }: { today: HomeToday }) {
  const deadlineItems = today.deadline_soon.length ? today.deadline_soon : today.featured;

  return (
    <section className="border-y border-slate-100 bg-mist py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Өнөөдөр"
            title="Deadline ойртож буй боломжууд"
            description="Хугацаа дуусмагц энэ жагсаалтаас автоматаар алга болно — та хуучирсан зар үзэхгүй."
          />
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 scrollbar-hide md:mx-0 md:px-0">
            {deadlineItems.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                className="h-[190px] w-[280px] shrink-0 snap-start md:w-[300px]"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Энэ 7 хоног"
            title="Удахгүй болох эвентүүд"
            description="Клуб, сургуулиудын зохион байгуулж буй арга хэмжээнд бүртгэлгүйгээр танилцаарай."
          />
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 scrollbar-hide md:mx-0 md:px-0">
            {today.upcoming_events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                className="h-[190px] w-[280px] shrink-0 snap-start md:w-[300px]"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
