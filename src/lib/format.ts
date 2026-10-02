import type { Audience, OpportunityType } from "./types";

const MN_MONTHS = [
  "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар",
  "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар",
];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MN_MONTHS[d.getMonth()]}`;
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
