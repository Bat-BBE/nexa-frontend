"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TYPE_LABELS, AUDIENCE_LABELS } from "@/lib/format";
import type { Interest } from "@/lib/types";

const TYPES = Object.entries(TYPE_LABELS) as Array<[string, string]>;
const AUDIENCES = Object.entries(AUDIENCE_LABELS).filter(([key]) => key !== "ALL") as Array<
  [string, string]
>;

export function FilterBar({ interests }: { interests: Interest[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const activeType = searchParams.get("type") ?? "";
  const activeAudience = searchParams.get("audience") ?? "";
  const activeInterest = searchParams.get("interest") ?? "";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page");
    router.push(`/explore?${params.toString()}`);
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateParam("search", search);
  }

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSearchSubmit} className="flex gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ажил, тэтгэлэг, эвент хайх…"
          className="w-full rounded-full border border-slate-200 bg-paper px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-sky md:max-w-md"
        />
        <button
          type="submit"
          className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Хайх
        </button>
      </form>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <FilterPill
            label="Бүх төрөл"
            active={!activeType}
            onClick={() => updateParam("type", "")}
          />
          {TYPES.map(([key, label]) => (
            <FilterPill
              key={key}
              label={label}
              active={activeType === key}
              onClick={() => updateParam("type", key)}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterPill
            label="Бүх хэрэглэгч"
            active={!activeAudience}
            onClick={() => updateParam("audience", "")}
            tone="dawn"
          />
          {AUDIENCES.map(([key, label]) => (
            <FilterPill
              key={key}
              label={label}
              active={activeAudience === key}
              onClick={() => updateParam("audience", key)}
              tone="dawn"
            />
          ))}
        </div>

        {interests.length ? (
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="Бүх сонирхол"
              active={!activeInterest}
              onClick={() => updateParam("interest", "")}
              tone="sky"
            />
            {interests.map((interest) => (
              <FilterPill
                key={interest.slug}
                label={`${interest.icon} ${interest.name}`}
                active={activeInterest === interest.slug}
                onClick={() => updateParam("interest", interest.slug)}
                tone="sky"
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  tone = "ink",
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  tone?: "ink" | "dawn" | "sky";
}) {
  const activeClasses =
    tone === "dawn"
      ? "bg-dawn-soft text-dawn-on-soft"
      : tone === "sky"
        ? "bg-sky-soft text-sky-on-soft"
        : "bg-ink text-paper";

  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? activeClasses : "bg-mist text-slate hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}
