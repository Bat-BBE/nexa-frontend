import {
  Briefcase,
  Compass,
  GraduationCap,
  Trophy,
  Calendar,
  BookOpen,
  Plane,
  FlaskConical,
  Building2,
  Users,
  Laptop,
  Wallet,
  Palette,
  Megaphone,
  Globe,
  Dumbbell,
  HandHeart,
  Tag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Maps the backend's taxonomy keys (IconAsset.key, Interest.slug) to a
 * Lucide icon — the visual used once there's no admin-uploaded image yet.
 * Keep this in sync with ICON_SEED in lib/mock-data.ts and the interest
 * slugs it mirrors.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  "opportunity-type:JOB": Briefcase,
  "opportunity-type:INTERNSHIP": Compass,
  "opportunity-type:SCHOLARSHIP": GraduationCap,
  "opportunity-type:COMPETITION": Trophy,
  "opportunity-type:EVENT": Calendar,
  "opportunity-type:COURSE": BookOpen,
  "opportunity-type:EXCHANGE": Plane,
  "opportunity-type:RESEARCH": FlaskConical,
  "category:jobs": Briefcase,
  "category:schools": Building2,
  "category:scholarships": GraduationCap,
  "category:competitions": Trophy,
  "category:events": Calendar,
  "category:clubs": Users,
  "entity:club": Users,
  it: Laptop,
  finance: Wallet,
  design: Palette,
  marketing: Megaphone,
  language: Globe,
  sport: Dumbbell,
  research: FlaskConical,
  volunteer: HandHeart,
};

export const DEFAULT_ICON: LucideIcon = Tag;

/** Looks up a Lucide icon for a taxonomy key, or `undefined` if the map
 *  hasn't caught up with it yet — callers decide their own fallback. */
export function resolveIcon(key?: string | null): LucideIcon | undefined {
  if (!key) return undefined;
  return ICON_MAP[key];
}
