"use client"

import { type ReactNode } from "react"

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  index?: number
  id?: string
  sticky?: boolean
}

/**
 * Viewport panels. sticky=true (md+): next panel covers previous with solid bg.
 * Spacing: min-h + padding inside children — no negative margins between panels.
 */
export function ScrollRevealSection({
  children,
  className = "",
  index = 0,
  id,
  sticky = true,
}: ScrollRevealSectionProps) {
  return (
    <section
      id={id}
      style={{ zIndex: sticky ? 10 + index : undefined }}
      className={
        sticky
          ? `relative md:sticky md:top-0 md:min-h-[100svh] w-full flex flex-col ${className}`
          : `relative w-full flex flex-col ${className}`
      }
    >
      {children}
    </section>
  )
}
