"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { ArrowDownRight } from "lucide-react"
import { CONTACT } from "@/lib/data"

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const { t } = useI18n()
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-canvas text-white"
      data-hero-container
    >
      {/* Orange glow + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, black 10%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-[50vh] w-[50vh] rounded-full bg-brand/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[30vh] w-[40vw] rounded-full bg-brand/10 blur-[100px]"
      />

      {/* Giant watermark word */}
      <motion.p
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute right-[-4%] top-[18%] select-none font-display text-[min(28vw,16rem)] font-extrabold leading-none tracking-tighter text-white/[0.04]"
      >
        CODE
      </motion.p>

      <div className="site-shell relative z-10 w-full pb-16 pt-28 sm:pb-20 sm:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6 flex items-center gap-3 text-sm font-mono text-neutral-400"
        >
          <span className="inline-block size-2 rounded-full bg-brand" />
          {CONTACT.location} · disponível
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="max-w-[12ch] font-display text-[clamp(3.25rem,11vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white"
        >
          Full Stack
          <br />
          <span className="text-brand">Engineer</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
          className="mt-8 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.hero.ctaPrimary}
            <ArrowDownRight className="size-4" />
          </Link>
          <Link
            href="/freelance"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 hover:border-white/40"
          >
            {t.hero.ctaSecondary}
          </Link>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8"
        >
          {[
            { v: "+35%", l: "leads" },
            { v: "~40%", l: "ciclo TERON" },
            { v: "+50%", l: "captação" },
          ].map((m) => (
            <div key={m.l}>
              <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {m.v}
              </p>
              <p className="mt-0.5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                {m.l}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
