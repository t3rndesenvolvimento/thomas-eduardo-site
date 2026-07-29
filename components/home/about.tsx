"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CV_SKILLS } from "@/lib/cv"
import {
  Panel,
  Pill,
  Section,
  SectionIntro,
} from "@/components/ui/kinetic"

const LOOKING_FOR = [
  "Time com code review e pessoas mais sêniores para aprender junto",
  "Produto com usuário real e métrica acompanhada",
  "Espaço para assumir tarefa de ponta a ponta",
  "Estágio ou vaga júnior, presencial em São Paulo ou remoto",
]

export function About() {
  return (
    <Section>
      <SectionIntro
        kicker="Sobre mim"
        title="Não quero só um freela. Quero crescer dentro de um time."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 text-[15px] leading-relaxed text-white/65 sm:text-base"
        >
          <p>
            Comecei em 2023 pegando projetos por conta própria porque era o
            jeito mais rápido de escrever código que alguém realmente ia usar.
            Desde então entreguei sistemas com autenticação, banco de dados,
            painel administrativo, integração de pagamento e deploy — sempre
            sozinho, sempre respondendo pelo resultado.
          </p>
          <p>
            Isso me ensinou prazo, escopo e conversa com cliente. Mas também
            deixou claro o que falta: revisão de código de gente mais
            experiente, escala de verdade e processo de engenharia maduro. É
            exatamente por isso que estou buscando uma vaga — para acelerar
            dentro de uma estrutura, e não mais só na minha.
          </p>
          <p className="text-white/45">
            Trabalhos sob demanda continuam disponíveis em{" "}
            <Link
              href="/freelance"
              className="text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-white"
            >
              projetos sob demanda
            </Link>
            , mas a prioridade hoje é contratação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <Panel className="h-full p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand/80">
              O que eu procuro
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {LOOKING_FOR.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-t border-white/[0.07] pt-3 text-sm leading-relaxed text-white/70"
                >
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        </motion.div>
      </div>

      <div className="mt-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
          Stack que uso no dia a dia
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CV_SKILLS.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Panel interactive className="h-full p-5">
                <h3 className="font-display text-sm font-bold text-white">
                  {group.group}
                </h3>
                <div className="mt-4 h-px w-full bg-white/[0.08]" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Pill>{item}</Pill>
                    </li>
                  ))}
                </ul>
              </Panel>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
