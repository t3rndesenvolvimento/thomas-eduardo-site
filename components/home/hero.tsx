"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon, SparkIcon } from "@/components/brand-icons"

const EASE = [0.16, 1, 0.3, 1] as const

const MARQUEE = [
  "THOMAS EDUARDO",
  "FULL STACK ENGINEER",
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "PRODUCT ENGINEERING",
  "NODE.JS",
  "PRODUCAO",
]

export function Hero() {
  const reduce = useReducedMotion()
  const loop = [...MARQUEE, ...MARQUEE, ...MARQUEE]

  return (
    <div className="relative flex min-h-[100svh] w-full flex-col justify-between bg-canvas text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]"
      />

      <div className="site-shell relative z-10 flex flex-1 flex-col justify-center pt-28 pb-10 sm:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-neutral-300"
        >
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          Disponivel para projetos selecionados
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
          className="max-w-[15ch] font-display text-[clamp(2.85rem,10vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
        >
          Engenharia que{