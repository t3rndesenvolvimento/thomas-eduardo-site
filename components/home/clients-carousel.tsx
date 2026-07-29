"use client"

import { motion } from "framer-motion"
import { CLIENTS } from "@/lib/data"

const ALL_CLIENTS = [...CLIENTS, ...CLIENTS]

export function ClientsCarousel({
  title = "Empresas e marcas",
  className = "relative overflow-hidden border-y border-white/10 bg-canvas py-10 sm:py-12",
}: {
  title?: string
  titleClassName?: string
  className?: string
  fadeClassName?: string
}) {
  return (
    <section className={className}>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-canvas to-transparent sm:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-canvas to-transparent sm:w-28" />

      <p className="mb-6 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-12 sm:gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        >
          {ALL_CLIENTS.map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-neutral-600 transition-colors hover:text-brand sm:text-2xl md:text-3xl"
            >
              {client.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
