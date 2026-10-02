"use client";

import { useIconAsset } from "@/components/providers/IconProvider";

/**
 * Renders the admin-uploaded image for `iconKey` (apps/taxonomy IconAsset),
 * or the emoji `fallback` when no image has been set yet. Most category/type
 * glyphs in the product go through this instead of a raw emoji literal, so
 * swapping in real artwork later is an admin upload, not a deploy.
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

  return <span className={className}>{asset?.emoji_fallback || fallback}</span>;
}
