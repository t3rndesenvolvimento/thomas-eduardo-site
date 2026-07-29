"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { useI18n } from "@/lib/i18n/context"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function HomeCta() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-[70svh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]"
      />

      <div className="site-shell relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker text-brand mb-6"
        >
          {t.homeCta.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2.75rem,9vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white"
        >
          {t.homeCta.line1}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-md text-neutral-400 leading-relaxed"
        >
          {t.homeCta.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-black"
          >
            {t.homeCta.ctaPrimary} <ArrowUpRight className="size-4" />
          </a>
          <Link
            href="/freelance"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white"
          >
            {t.homeCta.ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
