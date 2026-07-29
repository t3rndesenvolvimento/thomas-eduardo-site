"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import Link from "next/link"

export function HomeCta() {
  return (
    <section className="bg-canvas text-white py-24 sm:py-32">
      <div className="site-shell max-w-xl mx-auto text-center">
        <p className="font-mono text-sm text-brand mb-3">03. Próximo passo</p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          Vamos conversar?
        </motion.h2>
        <p className="mt-5 text-neutral-400 leading-relaxed">
          Aberto a CLT, PJ e projetos sob demanda. Prefiro LinkedIn — ou um
          briefing rápido se for freela.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded border border-brand px-7 py-3 text-sm font-medium text-brand hover:bg-brand/10"
          >
            LinkedIn
          </a>
          <Link
            href="/freelance"
            className="inline-flex justify-center rounded border border-white/15 px-7 py-3 text-sm font-medium text-neutral-300 hover:border-white/30"
          >
            Projeto sob demanda
          </Link>
        </div>
      </div>
    </section>
  )
}
