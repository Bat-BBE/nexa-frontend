import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-sky-field bg-grain py-24">
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.1] text-balance text-ink md:text-5xl">
          Өнөөдрөөс эхэл.
        </h2>
        <p className="max-w-md text-base text-slate md:text-lg">
          Дараагийн боломж чинь аль хэдийн Nexa дээр байгаа байж магадгүй.
        </p>
        <Button href="/explore" variant="dawn" size="lg" className="mt-2">
          Үнэгүй бүртгүүлэх →
        </Button>
      </Container>
    </section>
  );
}
