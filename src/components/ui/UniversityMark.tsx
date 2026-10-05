/** University logo if the admin uploaded one, else the short-name initials
 *  badge — used everywhere a university is shown as a small square mark. */
export function UniversityMark({
  logo,
  shortName,
  className = "h-12 w-12 rounded-xl text-sm",
}: {
  logo?: string | null;
  shortName: string;
  className?: string;
}) {
  if (logo) {
    // eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary host/size
    return <img src={logo} alt={shortName} className={`shrink-0 object-cover ${className}`} />;
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-ink font-display font-bold text-paper ${className}`}
    >
      {shortName.slice(0, 3)}
    </span>
  );
}
