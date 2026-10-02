"use client";

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import type { IconAsset } from "@/lib/types";

const IconMapContext = createContext<Map<string, IconAsset>>(new Map());

export function IconProvider({
  icons,
  children,
}: {
  icons: IconAsset[];
  children: ReactNode;
}) {
  const map = useMemo(() => new Map(icons.map((icon) => [icon.key, icon])), [icons]);
  return <IconMapContext.Provider value={map}>{children}</IconMapContext.Provider>;
}

export function useIconAsset(key: string): IconAsset | undefined {
  return useContext(IconMapContext).get(key);
}
