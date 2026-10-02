"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Drift — the standalone anonymous random-matching chat product (Supabase-backed,
// deployed separately on Vercel). Embedded here rather than ported, so its own
// auth/session/matching logic keeps running unmodified.
const DRIFT_URL = "https://drift-six-iota.vercel.app";

const RULES = [
  { icon: "🎭", title: "Нэргүй эхэлнэ", desc: "Найз болохоос өмнө хэн нэгэнд таны username харагдахгүй." },
  { icon: "🔞", title: "18+ горим", desc: "Насны бүлгээр тусгаарлагдсан — насанд хүрээгүй хэрэглэгчийг санамсаргүй холбохгүй." },
  { icon: "🚩", title: "Report & Skip", desc: "Тохирохгүй бол Skip дар, зохисгүй зан авирыг хэдхэн товшилтоор мэдээлнэ." },
];

export default function RandomChatPage() {
  const [launched, setLaunched] = useState(false);

  return (
    <div>
      <section className="relative overflow-hidden bg-sky-field bg-grain pb-20 pt-16 md:pt-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Badge tone="outline-light">✨ Connect · Random Chat</Badge>
          <h1 className="hero-rise max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-balance text-white md:text-5xl">
            Санамсаргүй хүнтэй,
            <br />
            <span className="bg-gradient-to-r from-sky to-dawn bg-clip-text text-transparent">
              зорилготой яриа
            </span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Nexa-ийн Random Chat нь Drift дээр ажилладаг — ижил сургууль, сонирхлоор
            тохируулж, анонимоор танилцах 1:1 текст чат.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {RULES.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-mist p-5"
              >
                <span className="text-2xl">{r.icon}</span>
                <h3 className="font-display text-sm font-semibold text-ink">{r.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-elevated">
            {/* Browser-chrome strip — keeps the embed's origin visible rather than hiding it. */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-mist px-4 py-3">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </span>
              <span className="flex-1 truncate rounded-full bg-paper px-3 py-1 text-center text-xs text-slate-dim">
                {DRIFT_URL.replace("https://", "")}
              </span>
              <a
                href={DRIFT_URL}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs font-medium text-sky-dim hover:underline"
              >
                Шинэ tab-аар нээх ↗
              </a>
            </div>

            <div className="relative h-[640px] w-full bg-paper">
              {launched ? (
                <iframe
                  src={`${DRIFT_URL}/match`}
                  title="Drift — Random Chat"
                  className="h-full w-full border-0"
                  allow="clipboard-write"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-abyss text-2xl">
                    💬
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-display text-lg font-semibold text-ink">
                      Chat эхлүүлэхэд бэлэн үү?
                    </h2>
                    <p className="max-w-sm text-sm text-slate">
                      Drift таныг анонимоор нэвтрүүлж, тохирох хүнтэй шууд холбоно.
                    </p>
                  </div>
                  <Button variant="dawn" size="lg" onClick={() => setLaunched(true)}>
                    Хүн олох →
                  </Button>
                </div>
              )}
            </div>
          </div>

          <SectionHeading
            kicker="Хэрхэн ажилладаг вэ"
            title="Drift нь тусдаа, бие даасан үйлчилгээ"
            description="Nexa аккаунт шаардахгүй — Drift өөрийн гэсэн нэвтрэлт, matching, аюулгүй байдлын системтэй ажилладаг тул найдвартай, хурдан."
          />
        </Container>
      </section>
    </div>
  );
}
