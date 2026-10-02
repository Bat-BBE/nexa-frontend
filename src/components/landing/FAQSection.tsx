"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "Nexa үнэгүй юу?",
    a: "Тийм. Оюутнаас ямар ч төлбөр авахгүй. Ирээдүйд ажил олгогчийн featured зар, байгууллагын subscription зэргээс орлого олно.",
  },
  {
    q: "Бүртгэл заавал уу?",
    a: "Үгүй. Ажил, тэтгэлэг, эвент, сургуулийн мэдээллийг бүртгэлгүйгээр үзэж болно. Save, Join, чат зэрэг үйлдэлд л бүртгэл шаардлагатай.",
  },
  {
    q: "Миний мэдээлэл хэнд харагдах вэ?",
    a: "Та профайлынхаа харагдах эрхийг (public / friends / private) өөрөө тохируулна. Утас, email, регистрийн дугаар зэрэг мэдээллийг Nexa цуглуулдаггүй.",
  },
  {
    q: "Хэдэн наснаас ашиглаж болох вэ?",
    a: "Боломж, сургуулийн мэдээллийг бүх насныхан үзэж болно. Group, чат зэрэг social feature-үүд насны бүлгээр тусгаарлагдсан бөгөөд 18-с доош хэрэглэгчийг насанд хүрэгчтэй холбохгүй.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading kicker="Түгээмэл асуулт" title="Мэдэхийг хүссэн зүйлс" />

        <div className="flex flex-col divide-y divide-slate-100 border-y border-slate-100">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-slate-dim transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-relaxed text-slate">{item.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
