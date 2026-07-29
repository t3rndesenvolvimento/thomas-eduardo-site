"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[85svh] w-full flex-col justify-center overflow-hidden bg-canvas text-white"
      data-hero-container
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 h-[36vh] w-[36vh] rounded-full bg-brand/12 blur-[100px]"
      />

      <div className="site-shell relative z-10 w-full max-w-3xl pt-28 pb-16 sm:pt-32 sm:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-6 text-sm font-mono text-brand"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="font-display text-[clamp(2.75rem,8vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
        >
          Thomas Eduardo.
        </motion.h1>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mt-2 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-tight tracking-tight text-neutral-400"
        >
          Full Stack / Product Engineer.
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-neutral-400"
        >
          Construo interfaces e backends com Next.js, React, TypeScript e
          Node.js. Foco em produtos em produção, com métricas e ownership do UI
          ao deploy.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#projects"
            className="inline-flex items-center rounded border border-brand px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand/10"
          >
            Ver trabalhos
          </Link>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
          >
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
          >
            GitHub <ArrowUpRight className="size-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
