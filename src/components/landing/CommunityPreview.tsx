import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const MATCH_TYPES = [
  { icon: "📚", label: "Study Partner" },
  { icon: "🛠️", label: "Project Team" },
  { icon: "🔁", label: "Skill Exchange" },
  { icon: "🎟️", label: "Event Buddy" },
  { icon: "🧑‍🏫", label: "Mentor Q&A" },
];

const MESSAGES = [
  { name: "Тэмүүлэн", initials: "Т", text: "Hackathon-д backend хийх хүн хэрэгтэй байна 👀" },
  { name: "Сараа", initials: "С", text: "Би Django мэднэ, нэгдэж болно уу?" },
  { name: "Тэмүүлэн", initials: "Т", text: "За, Connect хийе — team бүрдлээ 🎉" },
];

export function CommunityPreview() {
  return (
    <section className="bg-abyss py-20 text-white md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="font-display text-sm font-medium text-dawn">
            Зорилготой хамт олон
          </span>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] text-balance md:text-4xl">
            Random чат биш, зорилготой холболт.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-white/65 md:text-lg">
            Хэрэглэгч бүрийн хүсэлт зорилготой байна: хамт хичээл хийх, төслийн
            баг бүрдүүлэх, ур чадвар солилцох. Хоёр тал зөвшөөрсний дараа л DM
            нээгдэнэ — санамсаргүй танилцалт биш, аюулгүй, үр дүнтэй холбоо.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {MATCH_TYPES.map((m) => (
              <Badge key={m.label} tone="outline-light">
                {m.icon} {m.label}
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
          <div className="rounded-2xl border border-white/10 bg-abyss-2 p-5 shadow-elevated">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-dawn" />
              <span className="font-display text-sm font-medium text-white">
                #hackathon-team
              </span>
              <span className="ml-auto text-xs text-white/40">Nexa Group</span>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              {MESSAGES.map((msg, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky to-dawn text-xs font-semibold text-abyss">
                    {msg.initials}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-medium text-white/50">{msg.name}</span>
                    <p className="rounded-2xl rounded-tl-sm bg-white/5 px-3.5 py-2 text-sm text-white/85">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-abyss-3 px-4 py-2.5 text-xs text-white/70 shadow-elevated">
            🔒 Нэгдэхийн тулд бүртгүүлнэ
          </div>
        </div>
      </Container>
    </section>
  );
}
