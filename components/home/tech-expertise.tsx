"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Shape4 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

export function TechExpertise() {
  const { t } = useI18n()

  const EXPERTISE = [
    {
      category: t.techExpertise.groups[0].category,
      description: t.techExpertise.groups[0].description,
      techs: [
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Vue.js", icon: "logos:vue" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Framer Motion", icon: "simple-icons:framer" },
      ],
    },
    {
      category: t.techExpertise.groups[1].category,
      description: t.techExpertise.groups[1].description,
      techs: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "NestJS", icon: "logos:nestjs" },
        { name: "FastAPI", icon: "logos:fastapi" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "GraphQL", icon: "logos:graphql" },
        { name: "JWT", icon: "simple-icons:jsonwebtokens" },
      ],
    },
    {
      category: t.techExpertise.groups[2].category,
      description: t.techExpertise.groups[2].description,
      techs: [
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "Prisma", icon: "simple-icons:prisma" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Redis", icon: "logos:redis" },
        { name: "Supabase", icon: "logos:supabase-icon" },
        { name: "Firebase", icon: "logos:firebase" },
      ],
    },
    {
      category: t.techExpertise.groups[3].category,
      description: t.techExpertise.groups[3].description,
      techs: [
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Kubernetes", icon: "logos:kubernetes" },
        { name: "AWS", icon: "logos:aws" },
        { name: "Vercel", icon: "logos:vercel-icon" },
        { name: "Linux", icon: "logos:linux-tux" },
        { name: "Git", icon: "logos:git-icon" },
      ],
    },
  ]
  return (
    <section
      id="expertise"
      className="relative overflow-hidden border-t border-black/10 bg-white text-black py-8 sm:py-16 md:py-20"
    >
      <motion.div
        className="pointer-events-none absolute left-10 top-1/3 z-0 w-32 opacity-10 sm:w-40"
        animate={{ rotate: 180, scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape4 />
      </motion.div>

      <div className="site-shell relative z-10 max-w-5xl mx-auto">
        <div className="mb-5 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-semibold uppercase tracking-widest text-black/60 mb-2"
            >
              Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black tracking-tight"
            >
              <span className="sm:hidden">{t.techExpertise.headingMobile}</span>
              <span className="hidden sm:inline">{t.techExpertise.headingDesktop}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xs text-xs sm:text-sm leading-relaxed text-black/70 sm:text-right"
          >
            {t.techExpertise.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {EXPERTISE.map((group, i) => (
            <div
              key={group.category}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[#F8F9FA] p-5 transition-all hover:border-black/20 hover:shadow-md sm:p-6"
            >
              <div className="mb-3 sm:mb-4">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/40 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-black">
                  {group.category}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-black/70">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-black/10 pt-3 sm:pt-4">
                {group.techs.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="flex size-9 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition-transform hover:scale-110"
                  >
                    <Icon icon={tech.icon} className="size-4 sm:size-4.5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
