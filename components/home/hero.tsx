"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/data"

const EASE = [0.16, 1, 0.3, 1] as const

const PROOF = [
  { value: "+35%", label: "leads (Braservice)" },
  { value: "~40%", label: "ciclo de vendas (TERON)" },
  { value: "+50%", label: "captação (Yázigi)" },
]

export function Hero() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-[#050505] text-white"
      data-hero-container
    >
      {/* Subtle grid — product site, not generative art */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Soft top vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.06),transparent_55%)]"
      />

      <div className="site-shell relative z-10 flex w-full flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32">
        {/* Status pill */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5"
        >
          <span className="size-1.5 rounded-full bg-emerald-400/90" />
          <span className="text-[11px] font-medium tracking-wide text-white/55">
            {CONTACT.role} · {CONTACT.location}
          </span>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="max-w-[15ch] font-display text-[2.35rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:max-w-none sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          Full Stack &amp;
          <br className="sm:hidden" />{" "}
          <span className="text-white/90">Product Engineer</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
          className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-white/50 sm:mt-7 sm:text-base md:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
          className="mt-9 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="size-4 opacity-70" />
          </Link>
          <Link
            href="/freelance"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-[13px] font-semibold text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.04]"
          >
            {t.hero.ctaSecondary}
          </Link>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-2 text-[13px] font-medium text-white/40 transition-colors hover:text-white/75 sm:px-2"
          >
            GitHub
          </a>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-16 w-full max-w-2xl border-t border-white/10 pt-8 sm:mt-20"
        >
          <p className="mb-5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/30">
            Resultados em produção
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {PROOF.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/40 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
