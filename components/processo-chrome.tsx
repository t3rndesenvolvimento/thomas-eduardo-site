"use client"

import { AmbientFrame } from "@/components/ui/ambient-frame"

export function ProcessoChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <AmbientFrame tone="dark" variant="rings" className="opacity-35" />
      <AmbientFrame tone="dark" variant="grid" />
      {children}
    </div>
  )
}
