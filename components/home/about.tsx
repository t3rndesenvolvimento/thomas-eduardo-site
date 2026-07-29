"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import {
  ArrowOutIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon,
  RocketIcon,
} from "@/components/brand-icons"

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "Vercel",
]

export function About() {
  return (
    <div className="site-shell w-full py-16 sm:py-20 md:py-24">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
        <RocketIcon size={16} className="text-brand" />
        Sobre
      </p>
      <h2 className="max-w-[18ch] font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
        Product engineer com <span className="text-brand">entrega</span>
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-[15px] sm:text-base leading-relaxed text-neutral-400"
        >
          <p>
            Full Stack em Sao Paulo. Desde 2023 entrego apps e sistemas em
            producao — React, Next.js, TypeScript, Node e deploy.
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
              className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-white/15 px-4 text-sm text-white hover:border-brand hover:text-brand"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-white/15 px-4 text-sm text-white hover:border-brand hover:text-brand"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-2"
        >
          {SKILLS.map((s) => (
            <li
              key={s}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-neutral-300"
            >
              <CheckIcon size={16} className="shrink-0 text-brand" />
              {s}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="mt-10">
        <Link
          href="/sobre"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Trajetoria completa
          <ArrowOutIcon size={16} />
        </Link>
      </div>
    </div>
  )
}
