"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { useI18n } from "@/lib/i18n/context"

const GROUPS = [
  {
    categoryKey: 0,
    techs: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    categoryKey: 1,
    techs: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "JWT", icon: "simple-icons:jsonwebtokens" },
    ],
  },
  {
    categoryKey: 2,
    techs: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Firebase", icon: "logos:firebase" },
    ],
  },
  {
    categoryKey: 3,
    techs: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Git", icon: "logos:git-icon" },
    ],
  },
]

export function TechExpertise() {
  const { t } = useI18n()

  return (
    <section
      id="expertise"
      className="relative min-h-[100svh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand/15 blur-[100px]"
      />

      <div className="site-shell relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker text-brand mb-4"
        >
          {t.techExpertise.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2.75rem,8vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white max-w-[10ch]"
        >
          Stack em{" "}
          <span className="text-brand">produção</span>
        </motion.h2>

        <p className="mt-5 max-w-md text-neutral-400">{t.techExpertise.subtitle}</p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => {
            const meta = t.techExpertise.groups[group.categoryKey]
            return (
              <motion.div
                key={meta.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="font-mono text-xs text-brand mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-bold text-white">
                  {meta.category}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {meta.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                    >
                      <Icon icon={tech.icon} className="size-5" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
