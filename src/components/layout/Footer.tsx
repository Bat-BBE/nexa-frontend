import Link from "next/link";
import { Container } from "@/components/ui/Container";

const COLUMNS = [
  {
    title: "Платформ",
    links: [
      { href: "/explore", label: "Боломж хайх" },
      { href: "/campus", label: "Их, дээд сургууль" },
      { href: "/clubs", label: "Клубууд" },
      { href: "/events", label: "Эвентүүд" },
    ],
  },
  {
    title: "Nexa",
    links: [
      { href: "/#how-it-works", label: "Хэрхэн ажилладаг вэ" },
      { href: "/#safety", label: "Аюулгүй байдал" },
      { href: "/#faq", label: "Түгээмэл асуулт" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-mist">
      <Container className="flex flex-col gap-12 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky to-dawn font-display text-sm font-bold text-abyss">
                N
              </span>
              <span className="font-display text-lg font-semibold text-ink">Nexa</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Монголын сурагч, оюутан, залуусын боломж, сургууль, хамт олныг нэг
              дороос холбодог Campus &amp; Opportunity платформ.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="font-display text-sm font-semibold text-ink">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs text-slate-dim md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Nexa. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span>Улаанбаатар, Монгол улс</span>
        </div>
      </Container>
    </footer>
  );
}
