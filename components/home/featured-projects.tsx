"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PROJECTS } from "@/lib/data"
import {
  ActionLink,
  ArrowLink,
  Index,
  Panel,
  Pill,
  Section,
  SectionIntro,
  Stat,
} from "@/components/ui/kinetic"

type Pick = {
  title: string
  tag: string
  metrics: [string, string][]
  href: string
}

/** Real cases with the numbers a recruiter can check. */
const PICKS: Pick[] = [
  {
    title: "TERON OS",
    tag: "Produto SaaS · Monorepo",
    metrics: [
      ["-40%", "Ciclo de vendas"],
      ["4 apps", "Site · OS · Portal · API"],
    ],
    href: "/projetos/teron-os",
  },
  {
    title: "Yázigi Swiss Park",
    tag: "Landing + Admin",
    metrics: [
      ["+50%", "Leads qualificados"],
      ["Supabase", "Auth e painel interno"],
    ],
    href: "https://www.yaziswissparkcampinas.com.br/",
  },
  {
    title: "Minuta Fácil",
    tag: "SaaS · Documentos com IA",
    metrics: [
      ["Multi-tenant", "PostgreSQL por usuário"],
      ["API REST", "Node + Gemini no backend"],
    ],
    href: "https://minuta.thomaseduardo.com.br/",
  },
  {
    title: "Sleep House",
    tag: "Showroom · Multi-tenant",
    metrics: [
      ["+25%", "Visitas agendadas"],
      ["1 deploy", "Todas as unidades"],
    ],
    href: "https://www.sleephouseloja.com.br/",
  },
]

export function FeaturedProjects() {
  const cards = PICKS.map((pick) => {
    const project = PROJECTS.find((p) => p.title === pick.title)
    return {
      ...pick,
      year: project?.year ?? "2025",
      body: project?.result ?? project?.description ?? "",
      stack: project?.stack ?? [],
      image: project?.image ?? "/placeholder.svg",
    }
  })

  return (
    <Section id="work">
      <SectionIntro
        kicker="Cases selecionados"
        title="Problema, decisão técnica e resultado."
        lead="Cada projeto abaixo saiu de um problema de negócio real. Aqui está o que eu construí, com que stack e o que mudou depois."
      />

      <div className="mt-14 flex flex-col gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
          >
            <Panel
              as="article"
              interactive
              className="grid gap-0 lg:grid-cols-[1fr_1.05fr]"
            >
              <div className="flex flex-col justify-center gap-5 p-6 sm:p-9 lg:p-10">
                <div className="flex items-center gap-4">
                  <Index value={String(i + 1).padStart(2, "0")} total={String(cards.length).padStart(2, "0")} />
                  <Pill>{card.tag}</Pill>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-white/30">
                    {card.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
                  {card.title}
                </h3>

                <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-[15px]">
                  {card.body}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {card.stack.map((s) => (
                    <li key={s}>
                      <Pill>{s}</Pill>
                    </li>
                  ))}
                </ul>

                <dl className="mt-1 grid grid-cols-2 gap-5">
                  {card.metrics.map(([value, label]) => (
                    <Stat key={label} value={value} label={label} />
                  ))}
                </dl>

                <ArrowLink href={card.href}>Ver o case</ArrowLink>
              </div>

              <div className="relative order-first aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] lg:order-none lg:aspect-auto lg:min-h-[420px] lg:border-b-0 lg:border-l">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={`Interface do projeto ${card.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-70"
                />
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <ActionLink href="/projetos" variant="outline">
          Ver todos os projetos
        </ActionLink>
      </div>
    </Section>
  )
}
