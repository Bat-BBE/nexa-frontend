import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: "🛡️",
    title: "Report & Block",
    desc: "Бүх контент, чат, профайл дээр 1-2 tap дотор мэдээлэх, хориглох боломжтой.",
  },
  {
    icon: "🔞",
    title: "Насны хамгаалалт",
    desc: "18-аас доош хэрэглэгчийг насанд хүрэгчтэй санамсаргүй холбохгүй.",
  },
  {
    icon: "✅",
    title: "Эх сурвалж баталгаажилт",
    desc: "Боломж бүр албан ёсны линк, шалгасан огноотой — хуучирсан зар автоматаар нуугдана.",
  },
  {
    icon: "⏱️",
    title: "24 цагийн SLA",
    desc: "Report-ыг 24 цагийн дотор, ноцтой тохиолдлыг 4 цагийн дотор хянана.",
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          kicker="Аюулгүй байдал"
          title="Safety нь нэмэлт feature биш, суурь давхарга"
          description="Насанд хүрээгүй хэрэглэгч, DM, contentийн үнэн зөв байдал дээр Nexa эхнээсээ default-safe байхаар зохион байгуулагдсан."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-mist p-6"
            >
              <span className="text-2xl">{p.icon}</span>
              <h3 className="font-display text-base font-semibold text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
