"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "Vercel",
  "Docker",
  "AWS",
]

export function About() {
  return (
    <section id="about" className="bg-canvas text-white py-20 sm:py-28">
      <div className="site-shell max-w-4xl">
        <p className="font-mono text-sm text-brand mb-2">02. Sobre</p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
          Um pouco sobre mim
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-[15px] sm:text-base leading-relaxed text-neutral-400"
          >
            <p>
              Sou Full Stack / Product Engineer em São Paulo. Desde 2023 entrego
              aplicações web e sistemas em produção — do frontend (React,
              Next.js, TypeScript) ao backend (Node, APIs, dados) e deploy.
            </p>
            <p>
              Busco oportunidades em times de produto (CLT ou PJ) onde ownership
              e entrega contínua importem. O case mais representativo de sistema
              completo é o{" "}
              <Link href="/projetos/teron-os" className="text-brand hover:underline">
                TERON OS
              </Link>
              .
            </p>
            <p>
              Projetos sob demanda ficam em{" "}
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
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 font-mono text-sm text-neutral-400"
          >
            {SKILLS.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="text-brand text-xs">▹</span>
                {s}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
