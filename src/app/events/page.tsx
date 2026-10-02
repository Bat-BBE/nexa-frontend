import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { EventCard } from "@/components/explore/EventCard";
import { listEvents } from "@/lib/api";

export default async function EventsPage() {
  const events = await listEvents();

  return (
    <div>
      <PageHeader
        kicker="Эвент"
        title="Удахгүй болох арга хэмжээ"
        description="Клуб, сургуулиудын зохион байгуулж буй hackathon, workshop, уулзалтуудыг бүртгэлгүйгээр үзнэ."
      />
      <div className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.results.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
