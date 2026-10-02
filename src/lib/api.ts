import {
  MOCK_CLUBS,
  MOCK_EVENTS,
  MOCK_INTERESTS,
  MOCK_OPPORTUNITIES,
  MOCK_STATS,
  MOCK_TODAY,
  MOCK_UNIVERSITIES,
  mockForAudience,
} from "./mock-data";
import type {
  Club,
  HomeStats,
  HomeToday,
  Interest,
  NexaEvent,
  Opportunity,
  OpportunityFilters,
  Paginated,
  University,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

/** Whether we're currently serving demo content because the API was unreachable. */
export let usingMockData = false;

async function safeGet<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Nexa API ${res.status} on ${path}`);
    usingMockData = false;
    return (await res.json()) as T;
  } catch {
    usingMockData = true;
    return fallback;
  }
}

function toQuery(params: Record<string, string | number | boolean | undefined>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") search.set(key, String(value));
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

// --- Home aggregation --------------------------------------------------------

export function getStats() {
  return safeGet<HomeStats>("/home/stats/", MOCK_STATS);
}

export function getToday() {
  return safeGet<HomeToday>("/home/today/", MOCK_TODAY);
}

export function getForAudience(audience: string) {
  return safeGet<Opportunity[]>(
    `/home/for-audience/${toQuery({ audience })}`,
    mockForAudience(audience)
  );
}

// --- Opportunities -------------------------------------------------------------

export function listOpportunities(filters: OpportunityFilters = {}) {
  const query = toQuery({
    type: filters.type,
    audience: filters.audience,
    interest: filters.interest,
    university: filters.university,
    is_remote: filters.is_remote,
    is_paid: filters.is_paid,
    search: filters.search,
    page: filters.page,
  });
  const fallback: Paginated<Opportunity> = {
    count: MOCK_OPPORTUNITIES.length,
    next: null,
    previous: null,
    results: MOCK_OPPORTUNITIES,
  };
  return safeGet<Paginated<Opportunity>>(`/opportunities/${query}`, fallback);
}

export function getOpportunity(slug: string) {
  const fallback = MOCK_OPPORTUNITIES.find((o) => o.slug === slug) ?? MOCK_OPPORTUNITIES[0]!;
  return safeGet<Opportunity>(`/opportunities/${slug}/`, fallback);
}

// --- Universities ----------------------------------------------------------------

export function listUniversities() {
  const fallback: Paginated<University> = {
    count: MOCK_UNIVERSITIES.length,
    next: null,
    previous: null,
    results: MOCK_UNIVERSITIES,
  };
  return safeGet<Paginated<University>>("/universities/", fallback);
}

export function getUniversity(slug: string) {
  const fallback = MOCK_UNIVERSITIES.find((u) => u.slug === slug) ?? MOCK_UNIVERSITIES[0]!;
  return safeGet<University>(`/universities/${slug}/`, fallback);
}

// --- Clubs -------------------------------------------------------------------------

export function listClubs() {
  const fallback: Paginated<Club> = {
    count: MOCK_CLUBS.length,
    next: null,
    previous: null,
    results: MOCK_CLUBS,
  };
  return safeGet<Paginated<Club>>("/clubs/", fallback);
}

export function getClub(slug: string) {
  const fallback = MOCK_CLUBS.find((c) => c.slug === slug) ?? MOCK_CLUBS[0]!;
  return safeGet<Club>(`/clubs/${slug}/`, fallback);
}

// --- Events --------------------------------------------------------------------------

export function listEvents() {
  const fallback: Paginated<NexaEvent> = {
    count: MOCK_EVENTS.length,
    next: null,
    previous: null,
    results: MOCK_EVENTS,
  };
  return safeGet<Paginated<NexaEvent>>("/events/", fallback);
}

export function getEvent(slug: string) {
  const fallback = MOCK_EVENTS.find((e) => e.slug === slug) ?? MOCK_EVENTS[0]!;
  return safeGet<NexaEvent>(`/events/${slug}/`, fallback);
}

// --- Taxonomy ---------------------------------------------------------------------------

export function listInterests() {
  return safeGet<Interest[]>("/taxonomy/interests/", MOCK_INTERESTS);
}
