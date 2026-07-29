"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ActionLink, Panel } from "@/components/ui/kinetic"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const EASE = [0.16, 1, 0.3, 1] as const

const MARQUEE = [
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "POSTGRESQL",
  "PRISMA",
  "DOCKER",
  "AWS",
  "CI/CD",
]

const FACTS: [string, string][] = [
  ["Formação", "Eng. de Software · Anhanguera (cursando)"],
  ["Base", "São Paulo, SP · presencial ou remoto"],
  ["Stack", "React · Next.js · TypeScript · Node.js"],
  ["Busco", "Estágio ou Júnior — CLT ou PJ"],
]

export function Hero() {
  const reduce = useReducedMotion()
  const loop = [...MARQUEE, ...MARQUEE, ...MARQUEE]

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_30%_35%,#000,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-[38vh] w-[46vw] rounded-full bg-brand/12 blur-[130px]"
      />

      <div className="site-shell relative z-10 flex flex-1 flex-col justify-center gap-12 pt-28 pb-14 sm:pt-32 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl lg:flex-1">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/[0.08] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brand"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-brand" />
            Aberto a oportunidades
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="mt-7 max-w-[16ch] font-display text-[clamp(2.6rem,7.5vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
          >
            Estudo, construo e coloco em{" "}
            <span className="text-brand">produção</span>.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-lg"
          >
            Sou o Thomas Eduardo, estudante de Engenharia de Software e
            desenvolvedor full stack em São Paulo. Trabalho com React, Next.js,
            TypeScript e Node.js — e acompanho a métrica depois do deploy.
            Procuro um time onde eu possa aprender rápido e assumir
            responsabilidade real.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ActionLink href="/curriculo">Ver currículo</ActionLink>
            <ActionLink href={CONTACT.linkedin} variant="outline">
              <LinkedinIcon size={16} />
              LinkedIn
            </ActionLink>
            <ActionLink href={CONTACT.github} variant="outline">
              <GithubIcon size={16} />
              GitHub
            </ActionLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
          className="w-full lg:max-w-sm"
        >
          <Panel className="p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Resumo rápido
            </p>
            <dl className="mt-5 flex flex-col gap-4">
              {FACTS.map(([label, value]) => (
                <div key={label} className="border-t border-white/[0.07] pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand/80">
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/80">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>
        </motion.div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-white/[0.08] py-4">
        <motion.div
          className="flex shrink-0 gap-8 whitespace-nowrap"
          animate={reduce ? undefined : { x: ["0%", "-33.33%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          {loop.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35"
            >
              <span className="text-brand">•</span>
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
