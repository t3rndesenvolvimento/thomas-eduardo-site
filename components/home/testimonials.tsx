"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Avatar from "boring-avatars"
import { useI18n } from "@/lib/i18n/context"

const REVIEWS = [
  {
    id: 1,
    author: "Equipe Braservice",
    title: "Landing Page · Captação de Clientes",
    body: "O Thomas entregou uma landing page perfeita que substituiu nosso site antigo. O fluxo de contato direto para o WhatsApp foi imediato e percebemos a diferença nas conversões de campanhas logo na primeira semana.",
  },
  {
    id: 2,
    author: "Equipe Homma Design",
    title: "Landing Page Institucional",
    body: "Queríamos uma presença digital voltada para conversão à altura da nossa curadoria física. O resultado superou as expectativas: uma landing page premium, ultra rápida e focada em vendas.",
  },
  {
    id: 3,
    author: "Equipe Sleep House",
    title: "Landing Page · Alta Conversão",
    body: "Ter uma landing page otimizada com rastreamento de leads e integração direta ao WhatsApp transformou nossa estratégia de tráfego. Entrega limpa, sem surpresas e focada no cliente final.",
  },
  {
    id: 4,
    author: "Equipe Yázigi Swiss Park",
    title: "Landing Page · Captação de Alunos",
    body: "O diagnóstico interativo de inglês na landing page virou nosso principal canal de captação. A velocidade e a clareza da página ajudaram a melhorar nossas métricas de campanhas.",
  },
  {
    id: 5,
    author: "Equipe SpinMove",
    title: "Landing Page · Matrículas",
    body: "A landing page ficou com a identidade do estúdio e converte muito bem. Matrículas chegam direto pelo WhatsApp sem atrito. Exatamente o que precisávamos para nossos anúncios.",
  },
  {
    id: 6,
    author: "Equipe Hazap Workstation",
    title: "Landing Page · Workstations Premium",
    body: "Conseguiram capturar exatamente o tom técnico que precisávamos. O fluxo comercial gerado pela nova landing page via WhatsApp ficou muito mais qualificado após o lançamento.",
  },
]



function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[0]
}) {
  return (
    <div className="group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.045]">
      {/* Quote icon */}
      <Quote
        className="mb-4 size-5 shrink-0 text-white/15"
        strokeWidth={1.5}
      />

      {/* Body */}
      <p className="flex-1 text-[13px] leading-relaxed text-muted-foreground/75 sm:text-sm">
        {review.body}
      </p>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
        {/* Avatar */}
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white/5">
          <Avatar 
            size={32}
            name={review.author}
            variant="beam"
            colors={["#000000", "#ffffff", "#b48dff", "#fc805a", "#a6ff4c"]}
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white/80">
            {review.author}
          </p>
          <p className="truncate font-mono text-[10px] text-white/35">
            {review.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const { t } = useI18n()
  return (
    <section
      id="depoimentos"
      className="group relative border-t border-border/10 bg-background py-16 sm:py-24"
    >
      {/* Header */}
      <div className="site-shell relative z-10 mb-10 sm:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker mb-3 text-muted-foreground/60"
        >
          {t.testimonials.kicker}
          </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-h2 max-w-xl font-normal text-foreground tracking-[-0.02em]"
        >
          {t.testimonials.heading}
        </motion.h2>
      </div>

      {/* Grid of reviews */}
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
