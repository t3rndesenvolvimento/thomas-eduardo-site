"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CONTACT } from "@/lib/data"

const EASE = [0.16, 1, 0.3, 1] as const

const SKILLS_A = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Product Engineering",
  "APIs",
]
const SKILLS_B = [
  "PostgreSQL",
  "System Design",
  "Vercel",
  "Full Stack",
  "Deploy",
  "UI Engineering",
]

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[]
  reverse?: boolean
}) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-8 sm:gap-12"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-8 sm:gap-12 text-sm sm:text-base font-medium tracking-wide text-neutral-500"
          >
            <span className="text-brand">✦</span>
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-canvas text-white"
      data-hero-container
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-[42vh] w-[42vh] rounded-full bg-brand/15 blur-[110px]"
      />

      <div className="site-shell relative z-10 w-full pt-28 pb-10 sm:pt-32 sm:pb-14">
        {/* Role badge — Bolder style */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400"
        >
          <span className="text-brand">✦</span>
          Thomas Eduardo
          <span className="text-brand">✦</span>
          Full Stack Engineer
          <span className="text-brand">✦</span>
          São Paulo
        </motion.p>

        {/* Emotional / bold headline */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
          className="max-w-[16ch] font-display text-[clamp(2.75rem,9vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white"
        >
          Engenharia de produto que vai pra{" "}
          <span className="text-brand">produção</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: EASE }}
          className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-400"
        >
          Interfaces e backends com Next.js, React, TypeScript e Node.js.
          Cases reais, métricas e ownership do UI ao deploy.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Ver trabalhos
          </Link>
          <Link
            href="/sobre"
            className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 hover:border-white/40"
          >
            Sobre mim
          </Link>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Skills marquee — dual row like Bolder */}
      <div className="relative z-10 mt-auto border-t border-white/10 py-6 sm:py-8 space-y-3">
        <MarqueeRow items={SKILLS_A} />
        <MarqueeRow items={SKILLS_B} reverse />
      </div>
    </section>
  )
}
