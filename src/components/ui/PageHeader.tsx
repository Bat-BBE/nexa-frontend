import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Shared intro band for list pages (Explore, Campus, Clubs, Events) — a
 *  quiet version of the Hero's aurora wash so these pages read as the same
 *  product as Landing instead of a bare title dropped on a white page. */
export function PageHeader({
  kicker,
  title,
  description,
  action,
}: {
  kicker: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-mist py-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(55% 85% at 10% 0%, var(--color-sky), transparent 60%), radial-gradient(45% 75% at 100% 15%, var(--color-dawn), transparent 55%)",
        }}
      />
      <Container className="relative">
        <SectionHeading kicker={kicker} title={title} description={description} action={action} />
      </Container>
    </section>
  );
}
