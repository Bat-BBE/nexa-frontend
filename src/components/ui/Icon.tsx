"use client";

import { useIconAsset } from "@/components/providers/IconProvider";
import { resolveIcon } from "@/lib/icon-map";

/**
 * Renders the admin-uploaded image for `iconKey` (apps/taxonomy IconAsset),
 * or a Lucide glyph when no image has been set yet. Most category/type
 * glyphs in the product go through this instead of a raw emoji literal, so
 * swapping in real artwork later is an admin upload, not a deploy. `fallback`
 * (an emoji) only renders if `iconKey` has no entry in the Lucide map —
 * a safety net for taxonomy the map hasn't caught up with yet.
 */
export function Icon({
  iconKey,
  fallback,
  className = "",
}: {
  iconKey: string;
  fallback: string;
  className?: string;
}) {
  const asset = useIconAsset(iconKey);

  if (asset?.image) {
    // eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary host/size
    return <img src={asset.image} alt={asset.label || fallback} className={`object-contain ${className}`} />;
  }

  const LucideGlyph = resolveIcon(iconKey);
  if (LucideGlyph) {
    return <LucideGlyph className={className} aria-label={asset?.label} />;
  }

  return <span className={className}>{asset?.emoji_fallback || fallback}</span>;
}
