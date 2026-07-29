"use client"

import { AmbientFrame } from "@/components/ui/ambient-frame"

export function FreelanceChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <AmbientFrame tone="dark" variant="mesh" />
      <AmbientFrame tone="dark" variant="grid" className="opacity-60" />
      {children}
    </div>
  )
}
