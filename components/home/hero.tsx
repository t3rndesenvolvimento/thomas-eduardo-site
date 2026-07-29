"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon } from "@/components/brand-icons"

const EASE = [0.16, 1, 0.3, 1] as const

const MARQUEE = [
  "THOMAS EDUARDO",
  "FULL STACK ENGINEER",
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "PRODUCT ENGINEERING",
  "NODE.JS",
  "SHIP TO PRODUCTION",
]

export function Hero() {
  const reduce = useReducedMotion()
  const loop = [...MARQUEE, ...MARQUEE, ...MARQUEE]

  return (
    <div className="relative flex min-h-[100svh] w-full flex-col justify-between bg-canvas text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]"
      />

      <div className="site-shell relative z-10 flex flex-1 flex-col justify-center pt-28 pb-10 sm:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-neutral-300"
        >
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          Available for selected projects
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
          className="max-w-[14ch] font-display text-[clamp(2.85rem,10vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
        >
          Code that <span className="text-brand">ships</span>.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
          className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-neutral-400"
        >
          Full Stack / Product Engineer. Interfaces and backends with Next.js,
          React, TypeScript and Node — from UI to production.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#work"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-black hover:brightness-110"
          >
            View work
            <ArrowOutIcon size={16} />
          </Link>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-medium text-white/90 hover:border-white/35"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/10 py-4 overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-8 whitespace-nowrap"
          animate={reduce ? undefined : { x: ["0%", "-33.33%"] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loop.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex items-center gap-8 text-xs sm:text-sm font-medium tracking-[0.12em] text-neutral-500"
            >
              <span className="text-brand">•</span>
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
