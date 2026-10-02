import { Container } from "@/components/ui/Container";
import { UniversityCard } from "@/components/explore/UniversityCard";
import { listUniversities } from "@/lib/api";

export default async function CampusPage() {
  const universities = await listUniversities();

  return (
    <div className="bg-paper py-14 md:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-medium text-sky-dim">Campus</span>
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Их, дээд сургуулиуд
          </h1>
          <p className="max-w-xl text-slate">
            Хөтөлбөр, сургалтын төлбөр, клубуудын мэдээллийг нэг дороос харна.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universities.results.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
      </Container>
    </div>
  );
}
