import { Container } from "@/components/ui/Container";
import { EventCard } from "@/components/explore/EventCard";
import { listEvents } from "@/lib/api";

export default async function EventsPage() {
  const events = await listEvents();

  return (
    <div className="bg-paper py-14 md:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-medium text-sky-dim">Эвент</span>
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Удахгүй болох арга хэмжээ
          </h1>
          <p className="max-w-xl text-slate">
            Клуб, сургуулиудын зохион байгуулж буй hackathon, workshop, уулзалтуудыг
            бүртгэлгүйгээр үзнэ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.results.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </div>
  );
}
