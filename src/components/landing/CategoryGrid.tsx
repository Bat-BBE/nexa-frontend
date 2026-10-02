import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltLink } from "@/components/ui/TiltLink";

const CATEGORIES = [
  {
    href: "/explore?type=JOB",
    iconKey: "category:jobs",
    icon: "💼",
    title: "Ажил",
    desc: "Part-time, дадлага, оюутанд тохирсон ажлын байрууд",
    span: "md:col-span-2",
  },
  {
    href: "/campus",
    iconKey: "category:schools",
    icon: "🏫",
    title: "Сургууль",
    desc: "Хөтөлбөр, сургалтын төлбөр, клуб — их, дээд сургуулиудын мэдээлэл",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    href: "/explore?type=SCHOLARSHIP",
    iconKey: "category:scholarships",
    icon: "🎓",
    title: "Тэтгэлэг",
    desc: "Дотоод, гадаадын их сургуулиудын тэтгэлэгт хөтөлбөрүүд",
    span: "md:col-span-1",
  },
  {
    href: "/explore?type=COMPETITION",
    iconKey: "category:competitions",
    icon: "🏆",
    title: "Тэмцээн",
    desc: "Hackathon, олимпиад, кейс тэмцээн",
    span: "md:col-span-1",
  },
  {
    href: "/events",
    iconKey: "category:events",
    icon: "📅",
    title: "Эвент",
    desc: "Клуб, сургуулийн зохион байгуулж буй арга хэмжээ",
    span: "md:col-span-1",
  },
  {
    href: "/clubs",
    iconKey: "category:clubs",
    icon: "🤝",
    title: "Клуб",
    desc: "Ижил сонирхолтой хүмүүсийн байнгын нийгэмлэг",
    span: "md:col-span-1",
  },
];

export function CategoryGrid() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          kicker="Юуг олж болох вэ?"
          title="Нэг платформ дотор бүгд"
          description="Facebook группүүд шиг холилдсон зар биш — өөрт тохирсон боломжийг ангиллаар нь тодорхой олно."
        />

        {/* Snap-scroll rail on mobile (thumb-swipe, app-like), grid from md up. */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 md:overflow-visible md:px-0">
          {CATEGORIES.map((cat, i) => (
            <TiltLink
              key={cat.title}
              href={cat.href}
              className={`flex w-[72vw] shrink-0 snap-start flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-slate-100 bg-paper p-7 transition-[border-color,box-shadow] duration-300 hover:border-dawn-hover/50 hover:shadow-glow sm:w-auto sm:shrink md:w-auto ${cat.span}`}
            >
              {/* Oversized ghost glyph in the corner — reads as texture, not
                  as a second icon competing with the real one. */}
              <Icon
                iconKey={cat.iconKey}
                fallback={cat.icon}
                className="pointer-events-none absolute -bottom-5 -right-3 h-28 w-28 text-[6rem] opacity-[0.05] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
              />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/15 to-dawn/15 ring-1 ring-ink/5">
                  <Icon iconKey={cat.iconKey} fallback={cat.icon} className="h-6 w-6 text-2xl" />
                </span>
                <span className="font-display text-xs font-medium tabular-nums text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-semibold text-ink">{cat.title}</h3>
                  <p className="text-sm leading-relaxed text-slate">{cat.desc}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-ink transition-all duration-300 group-hover:rotate-45 group-hover:border-dawn group-hover:bg-dawn group-hover:text-on-accent">
                  →
                </span>
              </div>
            </TiltLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
