import { Container } from "@/components/ui/Container";
import { ClubCard } from "@/components/explore/ClubCard";
import { listClubs } from "@/lib/api";

export default async function ClubsPage() {
  const clubs = await listClubs();

  return (
    <div className="bg-paper py-14 md:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-medium text-sky-dim">Клуб</span>
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Ижил сонирхолтой хамт олон
          </h1>
          <p className="max-w-xl text-slate">
            Клубт нэгдэх, өөрийн клубыг удирдах боломж бүртгэлтэй хэрэглэгчид Groups
            feature-тэй хамт нээгдэнэ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.results.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </Container>
    </div>
  );
}
