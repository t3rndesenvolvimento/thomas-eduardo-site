"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const METRICS = [
  { value: "3+", label: "Anos" },
  { value: "10+", label: "Projetos" },
  { value: "TS", label: "TypeScript" },
  { value: "E2E", label: "Ownership" },
]

const TIMELINE = [
  {
    date: "08/2023 – atual",
    title: "Full Stack / Product Engineer",
    text: "Produtos web e sistemas: Next.js, React, Node, auth, painéis e deploy.",
  },
  {
    date: "2024",
    title: "AWS re/Start + certificações",
    text: "AWS re/Start, API REST & JWT (Ada), UX (FIAP), IT Essentials (Cisco).",
    certs: true,
  },
  {
    date: "Em andamento",
    title: "Engenharia de Software — Anhanguera",
    text: "Arquitetura, cloud e sistemas distribuídos.",
  },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell pt-28 pb-16 sm:pt-36 sm:pb-24">
        <p className="label-kicker text-brand mb-4">Sobre · São Paulo</p>
        <h1 className="font-display text-[clamp(3.5rem,12vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
          Thomas
          <br />
          <span className="text-brand">Eduardo</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg sm:text-xl text-neutral-400 leading-relaxed">
          Full Stack / Product Engineer. Produtos digitais do zero à produção.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-black"
          >
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
          <Link
            href="/projetos/teron-os"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            Case TERON OS
          </Link>
        </div>
      </header>

      <section className="site-shell pb-16 sm:pb-24 max-w-3xl">
        <p className="text-base sm:text-lg leading-relaxed text-neutral-400">
          Desde 2023 entrego aplicações web e sistemas em produção — React,
          Next.js, TypeScript, Node, dados e deploy. Busco times de produto
          (CLT ou PJ) onde ownership importa. Projetos sob demanda em{" "}
          <Link href="/freelance" className="text-brand underline underline-offset-2">
            /freelance
          </Link>
          .
        </p>
      </section>

      <ClientsCarousel />

      <section className="site-shell py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m) => (
            <div key={m.label}>
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                {m.value}
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-brand">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 text-black">
        <div className="site-shell py-16 sm:py-24">
          <p className="label-kicker text-brand mb-3">Trajetória</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-12">
            Experiência e formação
          </h2>
          <div className="space-y-10">
            {TIMELINE.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8 border-l-2 border-brand pl-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  {item.date}
                </p>
                <div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{item.text}</p>
                  {item.certs && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "/certificados/aws-logo.png",
                        "/certificados/ada-logo.png",
                        "/certificados/fiap-logo.png",
                        "/certificados/cisco-logo.png",
                      ].map((cert) => (
                        <div
                          key={cert}
                          className="relative size-11 overflow-hidden border border-black/10 bg-white"
                        >
                          <Image src={cert} alt="" fill className="object-cover" sizes="44px" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-20 sm:py-28 text-center">
        <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold">
          Aberto a oportunidades
        </h2>
        <p className="mt-4 text-neutral-400 max-w-md mx-auto">
          CLT ou PJ. LinkedIn ou briefing em /freelance.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black"
          >
            LinkedIn
          </a>
          <Link
            href="/projetos"
            className="inline-flex justify-center rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            Projetos
          </Link>
        </div>
      </section>
    </main>
  )
}
