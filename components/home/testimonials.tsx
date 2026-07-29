"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

const REVIEWS = [
  {
    author: "Braservice",
    title: "Landing",
    body: "Landing que substituiu o site antigo. Fluxo para WhatsApp na primeira semana já mudou o retorno das campanhas.",
  },
  {
    author: "Yázigi Swiss Park",
    title: "Diagnóstico",
    body: "O diagnóstico interativo virou canal principal de captação. Página rápida e clara para métricas.",
  },
  {
    author: "Hazap Workstation",
    title: "Landing técnica",
    body: "Tom técnico certo. Fluxo comercial via WhatsApp ficou mais qualificado depois do lançamento.",
  },
]

export function Testimonials() {
  const { t } = useI18n()

  return (
    <section
      id="depoimentos"
      className="relative min-h-[100svh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 font-display text-[min(40vw,20rem)] font-extrabold leading-none text-black/[0.04] select-none"
      >
        OK
      </div>

      <div className="site-shell relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker text-brand mb-4"
        >
          {t.testimonials.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold tracking-[-0.03em] text-black max-w-[12ch] leading-[0.95]"
        >
          {t.testimonials.heading}
        </motion.h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={r.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border-l-2 border-brand pl-5"
            >
              <p className="text-base leading-relaxed text-neutral-600">{r.body}</p>
              <footer className="mt-5">
                <p className="font-display font-bold text-black">{r.author}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  {r.title}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
