"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { useI18n } from "@/lib/i18n/context"
import { AmbientFrame, ContentFrame } from "@/components/ui/ambient-frame"

export function About() {
  const { t } = useI18n()
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-black py-20 sm:py-28"
    >
      <AmbientFrame tone="light" variant="corner" />
      <AmbientFrame tone="light" variant="grid" className="opacity-50" />

      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-semibold uppercase tracking-widest text-black/45 mb-4"
            >
              {t.about.kicker}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-black"
            >
              {t.about.headingLine1}
              <br />
              {t.about.headingLine2}
              <br />
              <span className="text-black/30">{t.about.headingLine3}</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 hidden lg:flex flex-col gap-3"
            >
              <CtaLink
                href={CONTACT.linkedin}
                variant="solid"
                size="md"
                external
                className="bg-black text-white border-none w-fit"
              >
                {t.about.cta}
              </CtaLink>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-black/40 hover:text-black"
              >
                GitHub →
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <ContentFrame tone="light" className="p-6 sm:p-8">
              <p className="text-base sm:text-lg leading-relaxed text-black/65">
                {t.about.p1}
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/65">
                {t.about.p2}
              </p>
            </ContentFrame>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.about.pillars.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <ContentFrame tone="light" className="h-full p-5 sm:p-6">
                    <span className="font-mono text-[10px] text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/55">
                      {p.text}
                    </p>
                  </ContentFrame>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-3 lg:hidden">
              <CtaLink
                href={CONTACT.linkedin}
                variant="solid"
                size="md"
                external
                className="w-full bg-black text-white"
              >
                {t.about.ctaMobile}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
