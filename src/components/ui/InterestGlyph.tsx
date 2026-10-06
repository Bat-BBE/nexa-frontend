import { DEFAULT_ICON, resolveIcon } from "@/lib/icon-map";
import type { Interest } from "@/lib/types";

/** Lucide glyph for an Interest tag — looked up by slug, same taxonomy map
 *  the category/type Icon component uses. Falls back to a generic tag icon
 *  for interests the map doesn't know about yet (never the raw emoji). */
export function InterestGlyph({
  interest,
  className = "h-3.5 w-3.5",
}: {
  interest: Interest;
  className?: string;
}) {
  const Glyph = resolveIcon(interest.slug) ?? DEFAULT_ICON;
  return <Glyph className={className} aria-hidden />;
}
