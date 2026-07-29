"use client"

import { type ReactNode } from "react"

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  index?: number
  id?: string
  /** Sticky stack (one panel at a time). Off by default on mobile. */
  sticky?: boolean
}

/**
 * Full-viewport panel. With sticky=true, next panel covers the previous
 * (readable: solid bg, rising z-index, no negative margins).
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
