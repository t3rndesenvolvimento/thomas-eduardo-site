"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { AmbientFrame, ContentFrame } from "@/components/ui/ambient-frame"

const REVIEWS = [
  {
    author: "Equipe Braservice",
    title: "Landing · Captação",
    body: "Landing que substituiu o site antigo. Fluxo para WhatsApp na primeira semana já mudou o retorno das campanhas.",
  },
  {
    author: "Equipe Yázigi Swiss Park",
    title: "Landing + diagnóstico",
    body: "O diagnóstico interativo virou canal principal de captação. Página rápida e clara para métricas de campanha.",
  },
  {
    author: "Equipe Hazap Workstation",
    title: "Landing técnica",
    body: "Tom técnico certo. Fluxo comercial via WhatsApp ficou mais qualificado depois do lançamento.",
  },
]

export function Testimonials() {
  const { t } = useI18n()

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-canvas text-foreground py-20 sm:py-28"
    >
      <AmbientFrame tone="dark" variant="mesh" />
      <AmbientFrame tone="dark" variant="corner" className="opacity-60" />

      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-3"
        >
          {t.testimonials.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-xl text-zinc-50"
        >
          {t.testimonials.heading}
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <ContentFrame tone="dark" className="flex h-full flex-col p-6 sm:p-7">
                <Quote className="size-4 text-zinc-600 mb-4" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-zinc-400 flex-1">{r.body}</p>
                <footer className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="text-sm font-semibold text-zinc-100">{r.author}</p>
                  <p className="text-xs font-mono text-zinc-600 mt-0.5">{r.title}</p>
                </footer>
              </ContentFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
