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
} from "@/components/brand-icons"

const TIMELINE = [
  {
    n: "01",
    date: "08/2023 – present",
    title: "Full Stack / Product Engineer",
    text: "Web products and systems: Next.js, React, Node, auth, dashboards and deploy.",
  },
  {
    n: "02",
    date: "2024",
    title: "AWS re/Start + certifications",
    text: "AWS re/Start, REST API & JWT (Ada), UX (FIAP), IT Essentials (Cisco).",
    certs: true,
  },
  {
    n: "03",
    date: "In progress",
    title: "Software Engineering — Anhanguera",
    text: "Architecture, cloud and distributed systems.",
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
        <p className="mb-3 text-sm font-medium text-brand">About</p>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95]">
          Thomas Eduardo
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-neutral-400">
          Full Stack / Product Engineer · Sao Paulo
        </p>
      </header>

      <section className="site-shell max-w-3xl space-y-4 pb-14 text-[15px] leading-relaxed text-neutral-400 sm:text-base">
        <p>
          Since 2023 shipping web apps and systems — React, Next.js, TypeScript,
          Node, data and deploy. Looking for product teams (CLT or PJ) where
          ownership matters.
        </p>
        <p>
          Flagship case:{" "}
          <Link href="/projetos/teron-os" className="text-brand hover:underline">
            TERON OS
          </Link>
          . On-demand work at{" "}
          <Link href="/freelance" className="text-brand hover:underline">
            /freelance
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm hover:border-brand hover:text-brand"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm hover:border-brand hover:text-brand"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </section>

      <section className="site-shell max-w-3xl pb-14">
        <p className="mb-5 text-sm font-medium text-brand">Stack</p>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SKILLS.map((s) => (
            <li
              key={s}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-neutral-300"
            >
              <CheckIcon size={16} className="shrink-0 text-brand" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell max-w-3xl pb-16 sm:pb-24">
        <p className="mb-6 text-sm font-medium text-brand">Timeline</p>
        <ol className="space-y-4">
          {TIMELINE.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-surface p-5 sm:p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-brand">{item.n}</span>
                <span className="text-[11px] text-neutral-500">{item.date}</span>
              </div>
              <h2 className="mt-2 font-display text-lg font-bold">{item.title}</h2>
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
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
          Interested?
        </h2>
        <p className="mt-3 text-sm text-neutral-400">CLT, PJ or selected projects.</p>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-black hover:brightness-110"
        >
          LinkedIn
          <ArrowOutIcon size={16} />
        </a>
      </section>
    </main>
  )
}
