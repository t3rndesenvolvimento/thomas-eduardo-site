"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { ActionLink, Kicker, Panel } from "@/components/ui/kinetic"

export function HomeCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-canvas py-20 sm:py-24 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,#000,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[30vh] w-[60vw] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />

      <div className="site-shell relative">
        <Panel className="p-8 sm:p-12 md:p-16">
          <Kicker>Próximo passo</Kicker>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.03] tracking-[-0.035em] text-white text-balance sm:text-4xl md:text-[3.5rem]"
          >
            Se o seu time tem uma vaga de estágio ou júnior, eu quero conversar.
          </motion.h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
            Disponível para São Paulo (presencial ou híbrido) e remoto. CLT ou
            PJ. Respondo mais rápido pelo LinkedIn ou e-mail.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ActionLink href={CONTACT.linkedin}>
              <LinkedinIcon size={16} />
              Falar no LinkedIn
            </ActionLink>
            <ActionLink href={`mailto:${CONTACT.email}`} variant="outline">
              {CONTACT.email}
            </ActionLink>
            <ActionLink href={CONTACT.github} variant="outline">
              <GithubIcon size={16} />
              GitHub
            </ActionLink>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-3">
            {[
              ["Local", CONTACT.location],
              ["Modelo", "CLT, PJ ou estágio"],
              ["Currículo", "/curriculo"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-white/80">{value}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>
    </section>
  )
}
