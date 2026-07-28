"use client"

import { Search, Network, Code, TestTube, Rocket, IterationCcw } from "lucide-react"
import { motion } from "framer-motion"
import { Shape6 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

const ICONS = [Search, Network, Code, TestTube, Rocket, IterationCcw]

export function EngineeringApproach() {
  const { t } = useI18n()
  return (
    <section
      id="engineering"
      className="relative overflow-hidden border-t border-white/10 bg-black text-white py-8 sm:py-16 md:py-20"
    >
      <motion.div
        className="pointer-events-none absolute right-10 top-1/4 z-0 w-32 opacity-15 sm:w-40 mix-blend-screen"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Shape6 />
      </motion.div>

      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <div className="mb-4 max-w-3xl sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60 mb-2 sm:mb-3"
          >
            {t.engineering.kicker}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight"
          >
            {t.engineering.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
          >
            {t.engineering.body}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {t.engineering.steps.map((item, i) => {
            const Icon = ICONS[i] || Code
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-white/10 bg-[#0d0e14] p-3 sm:p-6 transition-all hover:border-white/20 hover:bg-[#131522] shadow-md"
              >
                <div>
                  <div className="mb-2 sm:mb-4 flex items-center justify-between">
                    <div className="flex size-6 sm:size-9 items-center justify-center rounded-lg sm:rounded-xl bg-white text-black shadow-sm">
                      <Icon className="size-3 sm:size-4 text-black" strokeWidth={2} />
                    </div>
                    <span className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-widest text-white/40">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xs sm:text-lg font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm leading-relaxed text-white/75 line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-5 pt-2 sm:pt-4 border-t border-white/10">
                  <p className="font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white/50">
                    {item.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
