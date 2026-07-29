"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { AmbientFrame } from "@/components/ui/ambient-frame"

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
      className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-canvas text-foreground"
      data-hero-container
    >
      <AmbientFrame tone="dark" variant="grid" />
      <AmbientFrame tone="dark" variant="rings" className="opacity-40" />

      <div className="site-shell relative z-10 flex w-full flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8 w-full max-w-3xl rounded-3xl border border-white/[0.08] bg-elevated/60 px-6 py-12 backdrop-blur-[2px] sm:px-12 sm:py-16"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400/90" />
            <span className="text-[11px] font-medium tracking-wide text-zinc-400">
              {CONTACT.role} · {CONTACT.location}
            </span>
          </div>

          <h1 className="font-display text-[2.35rem] font-bold leading-[1.05] tracking-[-0.03em] text-zinc-50 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Full Stack & Product Engineer
          </h1>

          <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-relaxed text-zinc-400 sm:mt-7 sm:text-base md:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-50 px-7 py-3.5 text-[13px] font-semibold text-zinc-950 transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 opacity-70" />
            </Link>
            <Link
              href="/freelance"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-7 py-3.5 text-[13px] font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              {t.hero.ctaSecondary}
            </Link>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2 text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-300 sm:px-2"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="w-full max-w-3xl rounded-2xl border border-white/[0.08] bg-elevated/40 px-4 py-6 sm:px-8"
        >
          <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-600">
            Resultados em produção
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {PROOF.map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="text-center"
              >
                <p className="font-display text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-zinc-500 sm:text-xs">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
