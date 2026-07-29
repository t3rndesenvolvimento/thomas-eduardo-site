"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon, SparkIcon } from "@/components/brand-icons"

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <div className="relative flex min-h-[100svh] w-full flex-col justify-center bg-canvas text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/4 h-[40vh] w-[40vh] rounded-full bg-brand/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-1/4 h-[28vh] w-[28vh] rounded-full bg-brand/10 blur-[80px]"
      />

      <div className="site-shell relative z-10 w-full py-24 sm:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-brand"
        >
          <SparkIcon size={14} className="text-brand" />
          Disponível para oportunidades
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="max-w-[14ch] font-display text-[clamp(2.75rem,11vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.035em]"
        >
          Engenharia que <span className="text-brand">entrega</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
          className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-neutral-400"
        >
          Full Stack / Product Engineer. Next.js, React, TypeScript e Node —
          do UI ao deploy, com cases reais.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Ver trabalhos
            <ArrowOutIcon size={18} />
          </Link>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-3 text-sm font-medium text-white/90 hover:border-white/30"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  )
}
