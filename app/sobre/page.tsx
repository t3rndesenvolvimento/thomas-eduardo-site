"use client"

import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import {
  ArrowOutIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon,
  RocketIcon,
} from "@/components/brand-icons"

const TIMELINE = [
  {
    date: "08/2023 – atual",
    title: "Full Stack / Product Engineer",
    text: "Produtos web e sistemas: Next.js, React, Node, auth, paineis e deploy.",
  },
  {
    date: "2024",
    title: "AWS re/Start + certificacoes",
    text: "AWS re/Start, API REST e JWT (Ada), UX (FIAP), IT Essentials (Cisco).",
    certs: true,
  },
  {
    date: "Em andamento",
    title: "Engenharia de Software — Anhanguera",
    text: "Arquitetura, cloud e sistemas distribuidos.",
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

      <header className="site-shell max-w-3xl pt-28 pb-10 sm:pt-36 sm:pb-14">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
          <RocketIcon size={16} className="text-brand" />
          Sobre
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Thomas Eduardo
        </h1>
        <p className="mt-2 text-xl text-neutral-400">
          Full Stack / Product Engineer · Sao Paulo
        </p>
      </header>

      <section className="site-shell max-w-3xl space-y-4 pb-12 text-[15px] leading-relaxed text-neutral-400 sm:text-base">
        <p>
          Desde 2023 entrego aplicacoes web e sistemas em producao — React,
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
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-white/15 px-4 text-sm hover:border-brand hover:text-brand"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-white/15 px-4 text-sm hover:border-brand hover:text-brand"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </section>

      <section className="site-shell max-w-3xl pb-14">
        <h2 className="mb-5 text-sm font-medium text-brand">Stack</h2>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SKILLS.map((s) => (
            <li
              key={s}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-neutral-300"
            >
              <CheckIcon size={16} className="shrink-0 text-brand" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell max-w-3xl pb-16 sm:pb-24">
        <h2 className="mb-8 text-sm font-medium text-brand">Trajetoria</h2>
        <ol className="space-y-8">
          {TIMELINE.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-white/10 bg-surface p-5 sm:p-6"
            >
              <p className="text-[11px] font-medium text-brand">{item.date}</p>
              <h3 className="mt-1 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{item.text}</p>
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
                      className="relative size-10 overflow-hidden rounded-xl border border-white/10 bg-white"
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

      <section className="site-shell max-w-3xl border-t border-white/10 pb-24 pt-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Aberto a oportunidades
        </h2>
        <p className="mt-3 text-sm text-neutral-400">CLT, PJ ou sob demanda.</p>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-3 text-sm font-semibold text-black"
        >
          LinkedIn
          <ArrowOutIcon size={16} />
        </a>
      </section>
    </main>
  )
}
