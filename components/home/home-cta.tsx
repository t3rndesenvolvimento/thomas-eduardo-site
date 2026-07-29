"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon, SparkIcon } from "@/components/brand-icons"

export function HomeCta() {
  return (
    <div className="site-shell w-full py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <SparkIcon size={14} />
          Proximo passo
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-black"
        >
          Vamos conversar?
        </motion.h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Aberto a CLT, PJ e projetos sob demanda. Prefiro LinkedIn.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand px-7 text-sm font-semibold text-black hover:brightness-110"
          >
            LinkedIn
            <ArrowOutIcon size={16} />
          </a>
          <Link
            href="/freelance"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-black/15 px-7 text-sm font-medium text-black hover:border-brand"
          >
            Projeto sob demanda
          </Link>
        </div>
      </div>
    </div>
  )
}
