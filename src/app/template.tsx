// Next.js remounts `template.tsx` (unlike layout.tsx) on every navigation,
// which is what retriggers this CSS animation on each page change — no
// client router-event listener or animation library needed.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
