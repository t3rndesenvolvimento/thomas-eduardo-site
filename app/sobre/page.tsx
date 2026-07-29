"use client"

import Image from "next/image"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

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

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Tailwind",
  "Vercel",
  "Docker",
  "AWS",
  "Git",
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="font-mono text-sm text-brand mb-3">Sobre</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          Thomas Eduardo
        </h1>
        <p className="mt-2 text-xl text-neutral-400">
          Full Stack / Product Engineer · São Paulo
        </p>
      </header>

      <section className="site-shell max-w-3xl pb-16 space-y-5 text-[15px] sm:text-base leading-relaxed text-neutral-400">
        <p>
          Desde 2023 entrego aplicações web e sistemas em produção — React,
          Next.js, TypeScript, Node, dados e deploy. Busco times de produto
          (CLT ou PJ) onde ownership importa.
        </p>
        <p>
          Case principal:{" "}
          <Link href="/projetos/teron-os" className="text-brand hover:underline">
            TERON OS
          </Link>
          . Projetos sob demanda em{" "}
          <Link href="/freelance" className="text-brand hover:underline">
            /freelance
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-brand"
          >
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-brand"
          >
            GitHub <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </section>

      <section className="site-shell max-w-3xl pb-16">
        <h2 className="font-mono text-sm text-brand mb-6">Stack</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm text-neutral-400">
          {SKILLS.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span className="text-brand text-xs">▹</span>
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell max-w-3xl pb-20 sm:pb-28">
        <h2 className="font-mono text-sm text-brand mb-8">Trajetória</h2>
        <ol className="space-y-10">
          {TIMELINE.map((item) => (
            <li key={item.title} className="border-l border-brand/50 pl-5">
              <p className="font-mono text-[11px] text-neutral-500">{item.date}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                {item.text}
              </p>
              {item.certs && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "/certificados/aws-logo.png",
                    "/certificados/ada-logo.png",
                    "/certificados/fiap-logo.png",
                    "/certificados/cisco-logo.png",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="relative size-10 overflow-hidden border border-white/10 bg-white"
                    >
                      <Image src={cert} alt="" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl pb-24 text-center border-t border-white/10 pt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
          Aberto a oportunidades
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base">
          CLT, PJ ou projeto sob demanda.
        </p>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded border border-brand px-7 py-3 text-sm font-medium text-brand hover:bg-brand/10"
        >
          LinkedIn
        </a>
      </section>
    </main>
  )
}
