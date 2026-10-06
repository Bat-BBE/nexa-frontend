"use client";

import { Building2, Compass, Home, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Нүүр", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/connect/random-chat", label: "Connect", icon: Sparkles },
  { href: "/campus", label: "Campus", icon: Building2 },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-100 bg-paper/90 backdrop-blur-xl backdrop-saturate-150 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-4">
        {TABS.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-1 py-2.5 text-[0.65rem] font-medium transition-colors"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
                  active ? "bg-gradient-to-br from-sky to-dawn scale-105 text-on-accent" : "text-slate"
                }`}
              >
                <tab.icon className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className={active ? "text-ink" : "text-slate-dim"}>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
