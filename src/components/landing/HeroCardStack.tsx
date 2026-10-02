"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { deadlineLabel, TYPE_ICONS } from "@/lib/format";
import type { Opportunity } from "@/lib/types";

const STEP = 86; // vertical offset between cards — sized so 5 cards span roughly the same height as the hero's left column
const FAN_DEGREES = 2.5;

/** Desktop hero's fanned preview cards. Hovering brings a card to the front
 *  via z-index + a small in-place scale only — it never changes `top`, so
 *  its hitbox doesn't travel across neighbouring cards and steal their
 *  hover mid-transition (the old lift-to-top version did exactly that). */
export function HeroCardStack({ cards }: { cards: Opportunity[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative mx-auto hidden h-[540px] w-full max-w-md md:block">
      {cards.map((opportunity, i) => {
        const isHovered = hovered === i;
        const isFront = hovered === null ? i === 0 : isHovered;
        const dimmed = hovered !== null && !isHovered;
        const baseRotation = (i - (cards.length - 1) / 2) * FAN_DEGREES;

        return (
          <div
            key={opportunity.id}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`absolute left-0 right-0 cursor-pointer rounded-2xl border p-6 backdrop-blur-sm transition-[transform,border-color,background-color,box-shadow,opacity] duration-200 ease-out ${
              isFront
                ? "border-dawn-hover/50 bg-paper shadow-glow"
                : "border-slate-100 bg-mist shadow-elevated"
            }`}
            style={{
              top: `${i * STEP}px`,
              transform: isHovered
                ? "scale(1.05) rotate(0deg)"
                : `scale(1) rotate(${baseRotation}deg)`,
              transformOrigin: "center",
              zIndex: isHovered ? 20 : cards.length - i,
              opacity: dimmed ? 0.5 : 1,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5">
                <Icon
                  iconKey={`opportunity-type:${opportunity.type}`}
                  fallback={TYPE_ICONS[opportunity.type]}
                  className="h-6 w-6 text-xl"
                />
              </span>
              <Badge tone="dawn">{deadlineLabel(opportunity.deadline, opportunity.days_until_deadline)}</Badge>
            </div>
            <h3 className="mt-4 line-clamp-1 font-display text-base font-semibold leading-snug text-ink">
              {opportunity.title}
            </h3>
            <p className="mt-1 line-clamp-1 text-sm text-slate-dim">{opportunity.organization_name}</p>
          </div>
        );
      })}
    </div>
  );
}
