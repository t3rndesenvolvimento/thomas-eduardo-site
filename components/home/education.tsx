"use client"

import { motion } from "framer-motion"
import { CV_CERTS, CV_EDUCATION, CV_LANGUAGES } from "@/lib/cv"
import {
  ActionLink,
  Panel,
  Pill,
  Section,
  SectionIntro,
} from "@/components/ui/kinetic"

const TRACK = [
  {
    period: "2023 — atual",
    role: "Desenvolvedor Full Stack (freelancer)",
    place: "Projetos próprios e clientes",
    body: "Sites, sistemas administrativos, portais e APIs. Responsável pelo ciclo completo: levantamento, arquitetura, código, deploy e manutenção.",
  },
  {
    period: "2024",
    role: "AWS re/Start Graduate",
    place: "Amazon Web Services",
    body: "Programa intensivo de cloud computing: Linux, redes, segurança, bancos de dados e serviços core da AWS.",
  },
  {
    period: "Em andamento",
    role: CV_EDUCATION.degree,
    place: "Graduação",
    body: "Engenharia de Software com foco em estruturas de dados, arquitetura de sistemas e engenharia de requisitos — aplicado direto nos projetos.",
  },
]

export function Education() {
  return (
    <Section grid>
      <SectionIntro
        kicker="Formação"
        title="Aprendendo formalmente e aplicando na prática."
        lead="A faculdade dá a base teórica, os projetos dão a bagagem. Uso as duas coisas ao mesmo tempo — e é isso que eu levo para um time."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col gap-4">
          {TRACK.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Panel interactive className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <Pill tone="brand">{item.period}</Pill>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    {item.place}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {item.body}
                </p>
              </Panel>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <Panel className="p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand/80">
              Certificações
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {CV_CERTS.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-2.5 border-t border-white/[0.07] pt-3 text-sm leading-relaxed text-white/70"
                >
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                  {cert}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand/80">
              Idiomas
            </p>
            <dl className="mt-5 flex flex-col gap-3">
              {CV_LANGUAGES.map((l) => (
                <div
                  key={l.lang}
                  className="flex items-baseline justify-between gap-4 border-t border-white/[0.07] pt-3"
                >
                  <dt className="text-sm font-medium text-white">{l.lang}</dt>
                  <dd className="text-right font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {l.level}
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>

          <ActionLink href="/curriculo" variant="outline" className="w-full">
            Currículo completo
          </ActionLink>
        </div>
      </div>
    </Section>
  )
}
