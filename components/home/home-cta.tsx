"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon, SparkIcon } from "@/components/brand-icons"

export function HomeCta({ dark = false }: { dark?: boolean }) {
  const title = dark ? "text-white" : "text-black"
  const body = dark ? "text-neutral-400" : "text-neutral-600"
  const secondary = dark
    ? "border-white/15 text-white hover:border-white/35"
    : "border-black/15 text-black hover:border-brand"

  return (
    <div className="site-shell w-full py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <SparkIcon size={14} />
          Next step
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${title}`}
        >
          Interested?
        </motion.h2>
        <p className={`mt-4 leading-relaxed ${body}`}>
          Open to CLT, PJ and selected product work. Prefer LinkedIn.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-black hover:brightness-110"
          >
            LinkedIn
            <ArrowOutIcon size={16} />
          </a>
          <Link
            href="/freelance"
            className={`inline-flex min-h-12 items-center justify-center rounded-full border px-7 text-sm font-medium ${secondary}`}
          >
            On-demand project
          </Link>
        </div>
      </div>
    </div>
  )
}
