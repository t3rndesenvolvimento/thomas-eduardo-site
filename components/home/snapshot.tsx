"use client"

import { motion } from "framer-motion"
import { Panel, Section, SectionIntro } from "@/components/ui/kinetic"

const METRICS = [
  {
    value: "10+",
    title: "Projetos em produção",
    body: "Sistemas, portais e landing pages publicados e usados por clientes reais.",
  },
  {
    value: "2+ anos",
    title: "Entregando desde 2023",
    body: "Do primeiro commit ao deploy, com manutenção e evolução depois da entrega.",
  },
  {
    value: "AWS",
    title: "re/Start Graduate",
    body: "Formação em cloud, Linux e redes pela Amazon Web Services (2024).",
  },
  {
    value: "Em curso",
    title: "Engenharia de Software",
    body: "Graduação em andamento na Anhanguera, conciliada com projetos reais.",
  },
]

export function Snapshot() {
  return (
    <Section grid>
      <SectionIntro
        kicker="Onde estou hoje"
        title="Em formação, mas já com código rodando em produção."
        lead="Não é um portfólio de exercícios de faculdade. São produtos publicados, com usuários, autenticação, banco de dados e deploy sob minha responsabilidade."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Panel interactive className="h-full p-6">
              <p className="font-display text-3xl font-extrabold tracking-[-0.03em] text-brand">
                {m.value}
              </p>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {m.title}
              </h3>
              <div className="mt-4 h-px w-full bg-white/[0.08]" />
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {m.body}
              </p>
            </Panel>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
