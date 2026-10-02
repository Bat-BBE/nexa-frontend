import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClubCard } from "@/components/explore/ClubCard";
import { listClubs } from "@/lib/api";

export default async function ClubsPage() {
  const clubs = await listClubs();

  return (
    <div>
      <PageHeader
        kicker="Клуб"
        title="Ижил сонирхолтой хамт олон"
        description="Клубт нэгдэх, өөрийн клубыг удирдах боломж бүртгэлтэй хэрэглэгчид Groups feature-тэй хамт нээгдэнэ."
      />
      <div className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.results.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
