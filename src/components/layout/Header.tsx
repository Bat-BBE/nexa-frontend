import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
  { href: "/explore", label: "Боломж" },
  { href: "/campus", label: "Campus" },
  { href: "/clubs", label: "Клуб" },
  { href: "/events", label: "Эвент" },
  { href: "/connect/random-chat", label: "Connect" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-abyss/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky to-dawn font-display text-sm font-bold text-abyss">
            N
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Nexa
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/explore" variant="outline-light" size="sm" className="hidden sm:inline-flex">
            Нэвтрэх
          </Button>
          <Button href="/explore" variant="dawn" size="sm">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </header>
  );
}
