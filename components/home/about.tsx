"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { useI18n } from "@/lib/i18n/context"

export function About() {
  const { t } = useI18n()
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-black py-28 sm:py-24 md:py-32 min-h-[100svh] flex flex-col justify-center"
    >
      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <div className="grid items-start gap-6 sm:gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="flex flex-col items-start lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3 sm:mb-8 flex items-center gap-3"
            >
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-black/60">
                {t.about.kicker}
              </span>
              <div className="h-px w-10 bg-black/20" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2rem,6vw,5.5rem)] sm:text-[clamp(2.5rem,6vw,5.5rem)] lg:text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[1] tracking-tight text-black"
            >
              {t.about.headingLine1}
              <br />
              {t.about.headingLine2}
              <br />
              <span className="text-black/35">{t.about.headingLine3}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 hidden lg:flex flex-col gap-3"
            >
              <CtaLink
                href={CONTACT.linkedin}
                variant="solid"
                size="md"
                external
                className="bg-black text-white hover:scale-105 active:scale-95 font-bold border-none"
              >
                {t.about.cta}
              </CtaLink>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-black/45 hover:text-black transition-colors"
              >
                GitHub →
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-8 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[48ch] space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-black/75 lg:text-xl"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {t.about.pillars.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 bg-[#F8F9FA] p-5 sm:p-8 lg:p-10 text-black transition-all hover:border-black/20 hover:shadow-md ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col gap-2 sm:gap-4">
                    <div className="flex size-6 sm:size-8 items-center justify-center rounded-full bg-black text-white font-mono text-[9px] sm:text-xs font-bold shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-sm sm:text-xl lg:text-2xl font-bold tracking-tight text-black">
                        {p.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-lg leading-relaxed text-black/70 line-clamp-3 sm:line-clamp-none">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 lg:hidden flex flex-col gap-3"
            >
              <CtaLink
                href={CONTACT.linkedin}
                variant="solid"
                size="md"
                external
                className="w-full bg-black text-white font-bold"
              >
                {t.about.ctaMobile}
              </CtaLink>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs font-mono text-black/45"
              >
                GitHub →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
