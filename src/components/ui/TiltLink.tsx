"use client";

import Link from "next/link";
import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

/**
 * A card-sized Link with a subtle magnetic tilt + cursor-follow glow.
 * Mutates CSS custom properties directly on the node (no re-render per
 * mousemove) so it stays smooth even in long feeds.
 */
export function TiltLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--tilt-x", `${(0.5 - py) * 6}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * 6}deg`);
    el.style.setProperty("--spot-x", `${px * 100}%`);
    el.style.setProperty("--spot-y", `${py * 100}%`);
  }

  function handleEnter() {
    ref.current?.style.setProperty("--lift", "-4px");
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--lift", "0px");
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        transform:
          "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateY(var(--lift, 0px))",
      }}
      className={`group relative block [transform-style:preserve-3d] will-change-transform transition-transform duration-200 ease-out motion-reduce:!transform-none ${className}`}
    >
      {/* -z-10 is meaningful (not hidden behind the card) because the inline
          `transform` above makes this Link its own stacking context — the
          glow paints above the card's own background but below its content. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(204,255,0,0.14), transparent 70%)",
        }}
      />
      {children}
    </Link>
  );
}
