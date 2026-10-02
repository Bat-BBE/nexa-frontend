/** Abstract node-link mark instead of a letter-in-a-box — two connected
 *  points in the teal→lime brand gradient, reading as "connect" rather
 *  than spelling anything out. Scales cleanly as a pure SVG, no raster. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="nexaMarkGrad" x1="6" y1="26" x2="26" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#ccff00" />
        </linearGradient>
      </defs>
      <line x1="9" y1="23" x2="23" y2="9" stroke="url(#nexaMarkGrad)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="9" cy="23" r="4.5" fill="#2dd4bf" />
      <circle cx="23" cy="9" r="4.5" fill="#ccff00" />
    </svg>
  );
}

export function Logo({ className = "", wordmarkClassName = "" }: { className?: string; wordmarkClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-8 w-8" />
      <span className={`font-display text-lg font-semibold tracking-tight text-ink ${wordmarkClassName}`}>
        Nexa
      </span>
    </span>
  );
}
