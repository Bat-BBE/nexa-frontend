import { AudienceTabs } from "@/components/landing/AudienceTabs";
import { CategoryGrid } from "@/components/landing/CategoryGrid";
import { CommunityPreview } from "@/components/landing/CommunityPreview";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SafetySection } from "@/components/landing/SafetySection";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { TodaySection } from "@/components/landing/TodaySection";
import { UniversityRow } from "@/components/landing/UniversityRow";
import {
  getForAudience,
  getStats,
  getToday,
  listUniversities,
} from "@/lib/api";

export default async function LandingPage() {
  const [stats, today, universities, school, university, working] =
    await Promise.all([
      getStats(),
      getToday(),
      listUniversities(),
      getForAudience("SCHOOL"),
      getForAudience("UNIVERSITY"),
      getForAudience("WORKING"),
    ]);
  const spotlight = today.featured.length
    ? today.featured
    : today.deadline_soon;

  return (
    <>
      <Hero spotlight={spotlight} liveCount={today.deadline_soon.length} />
      <StatsStrip stats={stats} />
      <CategoryGrid />
      <TodaySection today={today} />
      <AudienceTabs
        content={{ SCHOOL: school, UNIVERSITY: university, WORKING: working }}
      />
      <CommunityPreview />
      <HowItWorks />
      <UniversityRow universities={universities.results} />
      <SafetySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
