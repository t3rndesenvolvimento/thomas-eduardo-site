"use client"

import { motion } from "framer-motion"
import {
  IconTile,
  Index,
  Panel,
  Section,
  SectionIntro,
} from "@/components/ui/kinetic"
import { RocketIcon, StackIcon, CheckIcon, SparkIcon } from "@/components/brand-icons"

const ITEMS = [
  {
    n: "01",
    icon: StackIcon,
    title: "Front-end de produto",
    body: "Interfaces em React e Next.js pensadas para conversão e acessibilidade, não só para o pixel.",
    points: [
      "React 19 · Next.js 16 · TypeScript",
      "Tailwind CSS e design system próprio",
      "Componentes reutilizáveis e responsivos",
      "Core Web Vitals e Lighthouse acompanhados",
    ],
  },
  {
    n: "02",
    icon: RocketIcon,
    title: "Back-end e APIs",
    body: "APIs REST em Node.js com contrato claro, validação de entrada e erros tratados.",
    points: [
      "Node.js · Fastify · Express",
      "JWT, refresh token e RBAC (USER/ADMIN)",
      "Validação de dados e rotas protegidas",
      "Integrações: Stripe, Mercado Pago, WhatsApp",
    ],
  },
  {
    n: "03",
    icon: CheckIcon,
    title: "Dados e modelagem",
    body: "Modelos de dados que aguentam uso real, com multi-tenant quando o produto pede.",
    points: [
      "PostgreSQL · Prisma · MongoDB",
      "Migrations versionadas",
      "Isolamento por usuário / tenant",
      "Queries otimizadas e índices",
    ],
  },
  {
    n: "04",
    icon: SparkIcon,
    title: "Deploy e operação",
    body: "Coloco no ar e continuo responsável: pipeline, monitoramento e correção.",
    points: [
      "Vercel · Linux · Docker · Nginx · PM2",
      "CI/CD com GitHub Actions",
      "Analytics e PostHog para medir uso",
      "Documentação em Linear e Notion",
    ],
  },
]

export function Expertise() {
  return (
    <Section>
      <SectionIntro
        kicker="Competências"
        title="O que eu consigo assumir em um time hoje."
        lead="Divido meu trabalho em quatro frentes. Em todas elas já entreguei em projeto real, com código versionado e deploy acompanhado."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {ITEMS.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Panel interactive className="h-full p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <IconTile>
                    <Icon size={20} />
                  </IconTile>
                  <Index value={item.n} />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {item.body}
                </p>

                <div className="mt-6 h-px w-full bg-white/[0.08]" />

                <ul className="mt-5 flex flex-col gap-2.5">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-white/60"
                    >
                      <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Panel>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
