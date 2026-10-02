import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { UniversityCard } from "@/components/explore/UniversityCard";
import { listUniversities } from "@/lib/api";

export default async function CampusPage() {
  const universities = await listUniversities();

  return (
    <div>
      <PageHeader
        kicker="Campus"
        title="Их, дээд сургуулиуд"
        description="Хөтөлбөр, сургалтын төлбөр, клубуудын мэдээллийг нэг дороос харна."
      />
      <div className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {universities.results.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
