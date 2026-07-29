"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { useI18n } from "@/lib/i18n/context"
import { ArrowUpRight, Code2, Layers, MessageSquare } from "lucide-react"

const ICONS = [Layers, Code2, MessageSquare]

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="relative min-h-[100svh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden">
      {/* Diagonal accent bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/4 h-64 w-2 bg-brand rotate-12 opacity-90 sm:h-80"
      />

      <div className="site-shell relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker text-brand mb-6"
        >
          {t.about.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(3rem,10vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-black"
        >
          Produto.
          <br />
          Código.
          <br />
          <span className="text-neutral-300">Entrega.</span>
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-neutral-600">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-black"
              >
                GitHub <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <ul className="space-y-6">
            {t.about.pillars.map((p, i) => {
              const Icon = ICONS[i] ?? Code2
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-black">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{p.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
