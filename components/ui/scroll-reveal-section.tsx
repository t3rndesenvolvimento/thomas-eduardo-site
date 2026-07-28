"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  index?: number
}

/**
 * Sticky Card Stacking Scroll Reveal Effect (Apple & Awwwards Style)
 * Each section pins to the top and the next section slides smoothly over it like a stack of cards!
 */
export function ScrollRevealSection({
  children,
  className = "",
  index = 0,
}: ScrollRevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-2 sm:top-14 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}
