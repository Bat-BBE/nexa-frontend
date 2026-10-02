import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CATEGORIES = [
  {
    href: "/explore?type=JOB",
    icon: "💼",
    title: "Ажил",
    desc: "Part-time, дадлага, оюутанд тохирсон ажлын байрууд",
    span: "md:col-span-2",
    tint: "bg-sky-soft",
  },
  {
    href: "/campus",
    icon: "🏫",
    title: "Сургууль",
    desc: "Хөтөлбөр, сургалтын төлбөр, клуб — их, дээд сургуулиудын мэдээлэл",
    span: "md:col-span-1 md:row-span-2",
    tint: "bg-dawn-soft",
  },
  {
    href: "/explore?type=SCHOLARSHIP",
    icon: "🎓",
    title: "Тэтгэлэг",
    desc: "Дотоод, гадаадын их сургуулиудын тэтгэлэгт хөтөлбөрүүд",
    span: "md:col-span-1",
    tint: "bg-mist",
  },
  {
    href: "/explore?type=COMPETITION",
    icon: "🏆",
    title: "Тэмцээн",
    desc: "Hackathon, олимпиад, кейс тэмцээн",
    span: "md:col-span-1",
    tint: "bg-mist",
  },
  {
    href: "/events",
    icon: "📅",
    title: "Эвент",
    desc: "Клуб, сургуулийн зохион байгуулж буй арга хэмжээ",
    span: "md:col-span-1",
    tint: "bg-sky-soft",
  },
  {
    href: "/clubs",
    icon: "🤝",
    title: "Клуб",
    desc: "Ижил сонирхолтой хүмүүсийн байнгын нийгэмлэг",
    span: "md:col-span-1",
    tint: "bg-dawn-soft",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          kicker="Юуг олж болох вэ?"
          title="Нэг платформ дотор бүгд"
          description="Facebook группүүд шиг холилдсон зар биш — өөрт тохирсон боломжийг ангиллаар нь тодорхой олно."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group flex flex-col justify-between gap-8 rounded-2xl ${cat.tint} p-7 transition-transform duration-200 hover:-translate-y-1 ${cat.span}`}
            >
              <span className="text-4xl">{cat.icon}</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">{cat.desc}</p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-ink/70 transition-transform group-hover:translate-x-1">
                Үзэх →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
