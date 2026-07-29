"use client"

import { AmbientFrame } from "@/components/ui/ambient-frame"

export function ProjetosChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <AmbientFrame tone="dark" variant="grid" />
      <AmbientFrame tone="dark" variant="corner" className="opacity-50" />
      {children}
    </div>
  )
}
