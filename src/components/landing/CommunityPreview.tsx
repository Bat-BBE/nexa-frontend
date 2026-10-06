import { BookOpen, Eye, GraduationCap, Lock, PartyPopper, Repeat, Ticket, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const MATCH_TYPES = [
  { icon: BookOpen, label: "Study Partner" },
  { icon: Wrench, label: "Project Team" },
  { icon: Repeat, label: "Skill Exchange" },
  { icon: Ticket, label: "Event Buddy" },
  { icon: GraduationCap, label: "Mentor Q&A" },
];

const MESSAGES = [
  {
    name: "Тэмүүлэн",
    initials: "Т",
    text: "Hackathon-д backend хийх хүн хэрэгтэй байна",
    icon: Eye,
  },
  { name: "Сараа", initials: "С", text: "Би Django мэднэ, нэгдэж болно уу?", icon: null },
  { name: "Тэмүүлэн", initials: "Т", text: "За, Connect хийе — team бүрдлээ", icon: PartyPopper },
];

export function CommunityPreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="font-display text-sm font-medium text-dawn-dim">
            Зорилготой хамт олон
          </span>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] text-balance text-ink md:text-4xl">
            Random чат биш, зорилготой холболт.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-slate md:text-lg">
            Хэрэглэгч бүрийн хүсэлт зорилготой байна: хамт хичээл хийх, төслийн
            баг бүрдүүлэх, ур чадвар солилцох. Хоёр тал зөвшөөрсний дараа л DM
            нээгдэнэ — санамсаргүй танилцалт биш, аюулгүй, үр дүнтэй холбоо.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {MATCH_TYPES.map((m) => (
              <Badge key={m.label} tone="outline">
                <m.icon className="h-3.5 w-3.5" aria-hidden /> {m.label}
              </Badge>
            ))}
          </div>

          <div className="pt-4">
            <Button href="/explore" variant="dawn" size="md">
              Бүртгүүлж нэгдэх
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-2xl border border-slate-100 bg-mist p-5 shadow-elevated">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-dawn" />
              <span className="font-display text-sm font-medium text-ink">
                #hackathon-team
              </span>
              <span className="ml-auto text-xs text-slate-dim">Nexa Group</span>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              {MESSAGES.map((msg, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky to-dawn text-xs font-semibold text-on-accent">
                    {msg.initials}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-medium text-slate-dim">{msg.name}</span>
                    <p className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-paper px-3.5 py-2 text-sm text-ink/85">
                      {msg.text}
                      {msg.icon ? <msg.icon className="h-3.5 w-3.5 shrink-0 text-slate-dim" aria-hidden /> : null}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 flex items-center gap-1.5 rounded-xl border border-slate-100 bg-paper px-4 py-2.5 text-xs text-slate shadow-elevated">
            <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden /> Нэгдэхийн тулд бүртгүүлнэ
          </div>
        </div>
      </Container>
    </section>
  );
}
