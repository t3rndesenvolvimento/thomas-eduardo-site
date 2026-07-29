"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { useI18n } from "@/lib/i18n/context"
import { AmbientFrame, ContentFrame } from "@/components/ui/ambient-frame"

export function HomeCta() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28">
      <AmbientFrame tone="dark" variant="rings" className="opacity-50" />
      <AmbientFrame tone="dark" variant="grid" />

      <div className="site-shell relative z-10">
        <ContentFrame tone="dark" className="mx-auto max-w-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-4 text-white/35"
          >
            {t.homeCta.kicker}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            {t.homeCta.line1}
            <br />
            <span className="text-white/45">{t.homeCta.line2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-md text-sm sm:text-base font-light text-white/50 leading-relaxed"
          >
            {t.homeCta.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row"
          >
            <CtaLink href={CONTACT.linkedin} variant="solid" size="lg" external>
              {t.homeCta.ctaPrimary}
            </CtaLink>
            <CtaLink href="/freelance" variant="soft" size="lg">
              {t.homeCta.ctaSecondary}
            </CtaLink>
          </motion.div>
        </ContentFrame>
      </div>
    </section>
  )
}
