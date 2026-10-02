import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterBar } from "@/components/explore/FilterBar";
import { OpportunityCard } from "@/components/explore/OpportunityCard";
import { listInterests, listOpportunities } from "@/lib/api";

interface ExplorePageProps {
  searchParams: Promise<{
    type?: string;
    audience?: string;
    interest?: string;
    search?: string;
    page?: string;
  }>;
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const params = await searchParams;
  const page = params.page ? Number(params.page) : 1;

  const [opportunities, interests] = await Promise.all([
    listOpportunities({
      type: params.type,
      audience: params.audience,
      interest: params.interest,
      search: params.search,
      page,
    }),
    listInterests(),
  ]);

  const pageSize = 20;
  const totalPages = Math.max(1, Math.ceil(opportunities.count / pageSize));

  return (
    <div>
      <PageHeader
        kicker="Explore"
        title="Боломж хайх"
        description={`${opportunities.count} идэвхтэй боломж. Хугацаа дууссан зар автоматаар алга болдог тул үргэлж шинэ мэдээлэл харна.`}
      />
      <div className="bg-paper py-14 md:py-20">
        <Container className="flex flex-col gap-10">
          <Suspense fallback={null}>
            <FilterBar interests={interests} />
          </Suspense>

          {opportunities.results.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.results.map((opportunity, i) => {
                // Bento rhythm: every 5th tile (and the very first) goes wide,
                // so the feed reads as a composed layout rather than a flat grid.
                const wide = i % 5 === 0;
                return (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                    size={wide ? "wide" : "normal"}
                    className={wide ? "sm:col-span-2" : ""}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 p-16 text-center text-slate-dim">
              Таны шүүлтүүрт тохирох боломж олдсонгүй. Шүүлтүүрээ өөрчилж үзнэ үү.
            </div>
          )}

          {totalPages > 1 ? (
            <div className="flex items-center justify-center gap-2 pt-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <PageLink key={p} page={p} active={p === page} params={params} />
              ))}
            </div>
          ) : null}
        </Container>
      </div>
    </div>
  );
}

function PageLink({
  page,
  active,
  params,
}: {
  page: number;
  active: boolean;
  params: Record<string, string | undefined>;
}) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value && key !== "page") search.set(key, value);
  }
  search.set("page", String(page));

  return (
    <Link
      href={`/explore?${search.toString()}`}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
        active ? "bg-ink text-paper" : "bg-mist text-slate hover:bg-slate-100"
      }`}
    >
      {page}
    </Link>
  );
}
