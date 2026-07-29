"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { useI18n } from "@/lib/i18n/context"
import { AmbientFrame, ContentFrame } from "@/components/ui/ambient-frame"

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
      className="relative overflow-hidden bg-white text-black py-20 sm:py-28"
    >
      <AmbientFrame tone="light" variant="grid" />

      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-semibold uppercase tracking-widest text-black/45 mb-2"
            >
              {t.techExpertise.kicker}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black"
            >
              <span className="sm:hidden">{t.techExpertise.headingMobile}</span>
              <span className="hidden sm:inline">
                {t.techExpertise.headingDesktop}
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xs text-sm sm:text-base text-black/50 sm:text-right font-light"
          >
            {t.techExpertise.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => {
            const meta = t.techExpertise.groups[group.categoryKey]
            return (
              <motion.div
                key={meta.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ContentFrame tone="light" className="h-full p-5 sm:p-6">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/30 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-base font-bold tracking-tight text-black">
                    {meta.category}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/50">
                    {meta.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <div
                        key={tech.name}
                        title={tech.name}
                        className="flex size-9 items-center justify-center rounded-xl border border-black/8 bg-white shadow-sm"
                      >
                        <Icon icon={tech.icon} className="size-4" />
                      </div>
                    ))}
                  </div>
                </ContentFrame>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
