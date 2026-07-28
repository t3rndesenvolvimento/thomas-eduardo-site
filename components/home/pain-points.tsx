"use client"

import { motion } from "framer-motion"
import { Zap, Crosshair, Gauge, Terminal } from "lucide-react"
import { Shape3 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

const ICONS = [Zap, Crosshair, Gauge, Terminal]
const ACCENTS = ["IMPACTO EM VENDAS", "RISCO DE PRAZO", "GARGALO OPERACIONAL", "PERDA DE CONVERSÃO"]

export function PainPoints() {
  const { t } = useI18n()
  return (
    <section
      id="problemas"
      className="relative overflow-hidden border-t border-white/10 bg-black text-white py-8 sm:py-16 md:py-20"
    >
      {/* subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]"
      />

      <motion.div
        className="pointer-events-none absolute right-10 bottom-10 z-0 w-28 opacity-15 sm:w-36 mix-blend-screen"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <Shape3 />
      </motion.div>

      <div className="site-shell relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-4 max-w-2xl sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60 mb-2"
          >
            {t.painPoints.kicker}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
          >
            {t.painPoints.heading}
          </motion.h2>
        </div>

        {/* Pain point cards - 100% Identical to Benefits & Testimonials */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
          {t.painPoints.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length]
            const num = String(index + 1).padStart(2, "0")
            const accent = ACCENTS[index % ACCENTS.length]
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14] p-4 sm:p-6 text-white transition-all duration-300 hover:border-white/20 hover:bg-[#131522] shadow-lg"
              >
                <div>
                  <div className="mb-2 sm:mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-white text-black shadow-sm">
                        <Icon className="size-4 text-black" strokeWidth={2} />
                      </div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/40">
                        {num}
                      </span>
                    </div>
                  </div>
                  <p className="mb-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                    {accent}
                  </p>
                  <h3 className="mb-2 font-display text-base sm:text-lg font-bold leading-snug tracking-tight text-white">
                    {item.headline}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
                    {item.copy}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
