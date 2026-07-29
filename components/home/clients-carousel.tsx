"use client"

import { motion } from "framer-motion"
import { CLIENTS } from "@/lib/data"

const ALL_CLIENTS = [...CLIENTS, ...CLIENTS]

export function ClientsCarousel({
  title = "Empresas e marcas",
  titleClassName = "text-[10px] font-mono uppercase tracking-[0.18em] text-white/35",
  className = "relative overflow-hidden border-y border-white/[0.07] bg-[#050505] py-8 sm:py-10",
  fadeClassName = "from-[#050505]",
}: {
  title?: string
  titleClassName?: string
  className?: string
  fadeClassName?: string
}) {
  return (
    <section className={className}>
      <div
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r ${fadeClassName} to-transparent sm:w-28`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l ${fadeClassName} to-transparent sm:w-28`}
      />

      <div className="mb-5 text-center sm:mb-6">
        <p className={titleClassName}>{title}</p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-10 sm:gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {ALL_CLIENTS.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-8 shrink-0 items-center px-1 opacity-40 transition-opacity duration-300 hover:opacity-80 sm:h-9"
            >
              <span className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
