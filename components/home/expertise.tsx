"use client"

import { motion } from "framer-motion"
import { CheckIcon } from "@/components/brand-icons"

const ITEMS = [
  {
    n: "01",
    title: "Product interfaces",
    body: "React and Next.js UIs that feel clear and ship fast.",
    points: ["Design systems", "Responsive UI", "Accessible flows", "Motion that helps"],
  },
  {
    n: "02",
    title: "Backend & data",
    body: "APIs, auth and data models that hold under real use.",
    points: ["Node.js APIs", "Auth & roles", "PostgreSQL", "Prisma"],
  },
  {
    n: "03",
    title: "Full stack delivery",
    body: "One owner from ticket to production deploy.",
    points: ["TypeScript end-to-end", "CI-friendly", "Vercel / cloud", "Observability basics"],
  },
  {
    n: "04",
    title: "Process & clarity",
    body: "Discovery first, then architecture, build and iterate.",
    points: ["Scoped delivery", "Short cycles", "Written decisions", "Handoff ready"],
  },
]

export function Expertise() {
  return (
    <div className="site-shell w-full py-16 sm:py-20 md:py-24">
      <p className="text-sm font-medium text-brand">Expertise</p>
      <h2 className="mt-2 max-w-[18ch] font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
        Capabilities that drive results.
      </h2>
      <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
        At the intersection of product, interface and engineering — shipped, not just designed.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7"
          >
            <span className="font-mono text-xs text-brand">{item.n}</span>
            <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{item.body}</p>
            <ul className="mt-5 space-y-2">
              {item.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckIcon size={16} className="shrink-0 text-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
