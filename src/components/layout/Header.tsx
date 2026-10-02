"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
  { href: "/explore", label: "Боломж" },
  { href: "/campus", label: "Campus" },
  { href: "/clubs", label: "Клуб" },
  { href: "/events", label: "Эвент" },
  { href: "/connect/random-chat", label: "Connect" },
];

export function Header() {
  // Floats transparent over the hero; solidifies once content actually
  // needs a backdrop to stay readable against — the same nav bar, not a
  // dark-chrome variant, since ink/paper now track the hero underneath it.
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-slate-100 bg-paper/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-dawn after:transition-all after:duration-300 ${
                  active ? "text-ink after:w-full" : "text-ink/70 after:w-0 hover:text-ink hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/explore" variant="outline-dark" size="sm" className="hidden sm:inline-flex">
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
