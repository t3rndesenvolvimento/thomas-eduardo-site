"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import DepthParallaxWords from "@/components/ui/smoothui/depth-parallax-words"
import { useI18n } from "@/lib/i18n/context"

export function HomeCta() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-24 md:py-32 min-h-[70svh] flex flex-col justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <div className="site-shell relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker mb-4 text-white/40"
        >
          {t.homeCta.kicker}
        </motion.p>

        <div
          className="mx-auto max-w-5xl font-display text-center font-bold leading-[1.05] tracking-tight text-white"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}
        >
          <DepthParallaxWords triggerOnView delay={100} stagger={80}>
            {t.homeCta.line1}
          </DepthParallaxWords>
          <br />
          <span className="text-white/50">
            <DepthParallaxWords triggerOnView delay={300} stagger={70}>
              {t.homeCta.line2}
            </DepthParallaxWords>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-xl text-base font-light text-white/60 sm:mt-8 sm:text-lg leading-relaxed"
        >
          {t.homeCta.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row sm:mt-12"
        >
          <CtaLink href={CONTACT.linkedin} variant="solid" size="lg" external>
            {t.homeCta.ctaPrimary}
          </CtaLink>
          <CtaLink href="/freelance" variant="soft" size="lg">
            {t.homeCta.ctaSecondary}
          </CtaLink>
        </motion.div>
      </div>
    </section>
  )
}
