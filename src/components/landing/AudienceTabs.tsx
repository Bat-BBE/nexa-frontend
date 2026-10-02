"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OpportunityCard } from "@/components/explore/OpportunityCard";
import type { Opportunity } from "@/lib/types";

type AudienceKey = "SCHOOL" | "UNIVERSITY" | "WORKING";

const TABS: Array<{ key: AudienceKey; label: string; desc: string }> = [
  { key: "SCHOOL", label: "Сурагч", desc: "Олимпиад, тэтгэлэг, мэргэжил сонголт" },
  { key: "UNIVERSITY", label: "Оюутан", desc: "Internship, hackathon, клуб" },
  { key: "WORKING", label: "Ажилладаг", desc: "Ажил, networking, сургалт" },
];

export function AudienceTabs({
  content,
}: {
  content: Record<AudienceKey, Opportunity[]>;
}) {
  const [active, setActive] = useState<AudienceKey>("UNIVERSITY");
  const items = content[active];

  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          kicker="Хэнд зориулсан бэ?"
          title="Таны төрлөөр тохируулсан"
          description="Сурагч, оюутан, ажилладаг хүн — тус бүрийн Home feed өөр өөр байна."
        />

        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === tab.key
                  ? "bg-ink text-paper"
                  : "bg-mist text-slate hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <p className="-mt-6 text-sm text-slate-dim">
          {TABS.find((t) => t.key === active)?.desc}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.length ? (
            items.slice(0, 8).map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))
          ) : (
            <p className="col-span-full rounded-2xl border border-dashed border-slate-200 p-10 text-center text-sm text-slate-dim">
              Одоогоор энэ бүлэгт зориулсан боломж алга. Удахгүй нэмэгдэнэ.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
