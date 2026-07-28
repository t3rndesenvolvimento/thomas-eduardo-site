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

const ROW1 = [...REVIEWS.slice(0, 3), ...REVIEWS.slice(0, 3), ...REVIEWS.slice(0, 3)]
const ROW2 = [...REVIEWS.slice(3, 6), ...REVIEWS.slice(3, 6), ...REVIEWS.slice(3, 6)]

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[0]
}) {
  return (
    <div className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14] p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#131522] shadow-lg">
      <div>
        {/* Quote icon */}
        <Quote
          className="mb-3 size-4 shrink-0 text-white/30"
          strokeWidth={1.5}
        />

        {/* Body */}
        <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
          {review.body}
        </p>
      </div>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3.5">
        {/* Avatar */}
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white/10 border border-white/15">
          <Avatar 
            size={32}
            name={review.author}
            variant="beam"
            colors={["#000000", "#ffffff", "#3b82f6", "#10b981", "#a855f7"]}
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-white">
            {review.author}
          </p>
          <p className="truncate font-mono text-[10px] text-white/40">
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
      className="group relative border-t border-white/10 bg-black text-white py-8 sm:py-20 md:py-24"
    >
      {/* Header */}
      <div className="site-shell relative z-10 mb-5 sm:mb-12 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60 mb-2"
        >
          {t.testimonials.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight"
        >
          {t.testimonials.heading}
        </motion.h2>
      </div>

      {/* Infinite 2-Row Marquee Carousel */}
      <div className="relative overflow-hidden flex flex-col gap-4 sm:gap-6 py-2">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-black to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-black to-transparent sm:w-28" />

        {/* Row 1 - Left Infinite Carousel */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-4 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          >
            {ROW1.map((review, i) => (
              <div key={`${review.id}-row1-${i}`} className="w-[300px] sm:w-[380px] shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right Infinite Carousel */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-4 sm:gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 42, ease: "linear", repeat: Infinity }}
          >
            {ROW2.map((review, i) => (
              <div key={`${review.id}-row2-${i}`} className="w-[300px] sm:w-[380px] shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
