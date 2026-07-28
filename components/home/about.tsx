"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { Shape2 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

export function About() {
  const { t } = useI18n()
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-black/10 bg-white text-black py-14 sm:py-20 md:py-24"
    >
      <motion.div
        className="pointer-events-none absolute left-10 top-32 z-0 w-32 opacity-10 sm:w-40"
        animate={{ rotate: 360, y: [0, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Shape2 />
      </motion.div>

      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          
          {/* Left Column - Sticky Heading */}
          <div className="flex flex-col items-start lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3 sm:mb-8"
            >
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-black/60">{t.about.kicker}</span>
              <div className="h-px w-10 bg-black/20" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-tight text-black"
            >
              {t.about.headingLine1}<br />
              {t.about.headingLine2}<br />
              <span className="text-black/35">{t.about.headingLine3}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 hidden lg:block"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external className="bg-black text-white hover:scale-105 active:scale-95 font-bold border-none">
                {t.about.cta}
              </CtaLink>
            </motion.div>
          </div>

          {/* Right Column - Content & Cards */}
          <div className="flex flex-col gap-8 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[48ch] space-y-4 text-base leading-relaxed text-black/75 sm:text-lg"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.about.pillars.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-[#F8F9FA] p-6 text-black transition-all hover:border-black/20 hover:shadow-md sm:p-7 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-black text-white font-mono text-xs font-bold shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold tracking-tight text-black sm:text-lg">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-black/70 sm:text-sm">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 lg:hidden"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external className="w-full bg-black text-white font-bold">
                {t.about.ctaMobile}
              </CtaLink>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
