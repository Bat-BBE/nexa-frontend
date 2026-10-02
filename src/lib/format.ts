import type { Audience, OpportunityType } from "./types";

export function formatDate(iso: string): string {
  const d = new Date(iso);
  // "10-р сарын 12" — month before day, Mongolian word order. The old
  // "{day} {month}-р сар" read backwards and produced "12 10-р сар-нд дуусна".
  return `${d.getMonth() + 1}-р сарын ${d.getDate()}`;
}

export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const hh = d.getHours().toString().padStart(2, "0");
  const mm = d.getMinutes().toString().padStart(2, "0");
  return `${formatDate(iso)} · ${hh}:${mm}`;
}

/** "Өнөөдөр", "Маргааш", "3 хоногийн дараа", or a plain date further out. */
export function deadlineLabel(deadline: string | null, daysUntil: number | null): string {
  if (!deadline || daysUntil === null) return "Тодорхойгүй хугацаа";
  if (daysUntil < 0) return "Хугацаа дууссан";
  if (daysUntil === 0) return "Өнөөдөр дуусна";
  if (daysUntil === 1) return "Маргааш дуусна";
  if (daysUntil <= 7) return `${daysUntil} хоногийн дараа дуусна`;
  return `${formatDate(deadline)}-нд дуусна`;
}

export const TYPE_LABELS: Record<OpportunityType, string> = {
  JOB: "Ажил",
  INTERNSHIP: "Дадлага",
  SCHOLARSHIP: "Тэтгэлэг",
  COMPETITION: "Тэмцээн",
  EVENT: "Эвент",
  COURSE: "Сургалт",
  EXCHANGE: "Солилцоо",
  RESEARCH: "Судалгаа",
};

export const TYPE_ICONS: Record<OpportunityType, string> = {
  JOB: "💼",
  INTERNSHIP: "🧭",
  SCHOLARSHIP: "🎓",
  COMPETITION: "🏆",
  EVENT: "📅",
  COURSE: "📘",
  EXCHANGE: "✈️",
  RESEARCH: "🔬",
};

export const AUDIENCE_LABELS: Record<Audience, string> = {
  SCHOOL: "Сурагч",
  UNIVERSITY: "Оюутан",
  WORKING: "Ажилладаг",
  ALL: "Бүгд",
};
