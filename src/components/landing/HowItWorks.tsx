import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Үз",
    desc: "Бүртгэлгүйгээр ажил, тэтгэлэг, эвент, сургуулийн мэдээллийг шууд үзнэ.",
  },
  {
    n: "02",
    title: "Бүртгүүл",
    desc: "1 минутын дотор: хэн бэ, насны ангилал, сонирхол, юу хайж байгаагаа сонгоно.",
  },
  {
    n: "03",
    title: "Танилцаж, нэгд",
    desc: "Deadline-аа хадгал, хамтрагч ол, клубт нэгдэж, боломжийг үр дүн болго.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          align="center"
          kicker="Хэрхэн ажилладаг вэ"
          title="Гурван алхам, тэр чигээрээ"
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative flex flex-col gap-4">
              <span className="font-display text-5xl font-semibold text-slate-100">
                {step.n}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.desc}</p>
              {i < STEPS.length - 1 ? (
                <span className="absolute right-[-1.25rem] top-2 hidden text-2xl text-slate-200 md:block">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
