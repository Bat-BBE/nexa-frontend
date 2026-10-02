export interface Interest {
  id: number;
  name: string;
  slug: string;
  icon: string;
  image?: string | null;
}

export interface IconAsset {
  key: string;
  label: string;
  emoji_fallback: string;
  image: string | null;
}

export interface Program {
  id: number;
  name: string;
  degree_level: string;
  duration_years: number;
  description: string;
}

export interface University {
  id: number;
  slug: string;
  name: string;
  short_name: string;
  city: string;
  logo: string | null;
  cover_image: string | null;
  is_verified: boolean;
  is_launch_partner: boolean;
  overview?: string;
  tuition_info?: string;
  website?: string;
  founded_year?: number | null;
  programs?: Program[];
}

export type MembershipType = "OPEN" | "REQUEST" | "CLOSED";

export interface Club {
  id: number;
  slug: string;
  name: string;
  logo: string | null;
  cover_image: string | null;
  university: University | null;
  interests: Interest[];
  membership_type: MembershipType;
  member_count: number;
  description?: string;
}

export interface NexaEvent {
  id: number;
  slug: string;
  title: string;
  cover_image: string | null;
  start_at: string;
  end_at: string | null;
  location: string;
  is_online: boolean;
  interests: Interest[];
  university: University | null;
  interested_count: number;
  description?: string;
  organizer_name?: string;
  club?: Club | null;
  registration_url?: string;
  capacity?: number | null;
}

export type OpportunityType =
  | "JOB"
  | "INTERNSHIP"
  | "SCHOLARSHIP"
  | "COMPETITION"
  | "EVENT"
  | "COURSE"
  | "EXCHANGE"
  | "RESEARCH";

export type Audience = "SCHOOL" | "UNIVERSITY" | "WORKING" | "ALL";

export interface Opportunity {
  id: number;
  slug: string;
  type: OpportunityType;
  type_display: string;
  title: string;
  organization_name: string;
  cover_image: string | null;
  deadline: string | null;
  days_until_deadline: number | null;
  is_deadline_soon: boolean;
  location: string;
  is_remote: boolean;
  audiences: Audience[];
  is_paid: boolean;
  compensation: string;
  interests: Interest[];
  is_featured: boolean;
  verification_level: string;
  description?: string;
  source_name?: string;
  source_url?: string;
  verified_at?: string | null;
  universities?: University[];
  published_at?: string;
}

export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface HomeStats {
  opportunities: number;
  universities: number;
  clubs: number;
  events: number;
}

export interface HomeToday {
  as_of: string;
  deadline_soon: Opportunity[];
  upcoming_events: NexaEvent[];
  featured: Opportunity[];
}

export interface OpportunityFilters {
  type?: string;
  audience?: string;
  interest?: string;
  university?: string;
  is_remote?: boolean;
  is_paid?: boolean;
  search?: string;
  page?: number;
}
