"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  index?: number
  id?: string
}

/**
 * Sticky Card Stacking Scroll Reveal Effect (Apple & Awwwards Style)
 * Each section pins to the top and the next section slides smoothly over it like a stack of cards!
 */
export function ScrollRevealSection({
  children,
  className = "",
  index = 0,
  id,
}: ScrollRevealSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 min-h-[100svh] w-full flex flex-col justify-center overflow-hidden rounded-t-[2rem] sm:rounded-t-[3.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
