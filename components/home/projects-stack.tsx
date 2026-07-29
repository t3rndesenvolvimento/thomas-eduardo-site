"use client"

import { useRef } from "react"
import Link from "next/link"
import { PROJECTS } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const FEATURED_ORDER = [
  "TERON OS",
  "Minuta Fácil",
  "Áurea",
  "Sleep House",
  "Yázigi Swiss Park",
  "Homma Design",
]

const featuredProjects = FEATURED_ORDER.map((title) =>
  PROJECTS.find((p) => p.title === title),
).filter(Boolean) as (typeof PROJECTS)[0][]

export function ProjectsStack({
  projects = featuredProjects.length ? featuredProjects : PROJECTS.slice(0, 6),
  hideHeader = false,
}: {
  projects?: (typeof PROJECTS)[0][]
  hideHeader?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0.05, 0.92], ["0%", "-78%"])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative h-[200vh] w-full sm:h-[320vh] bg-neutral-50"
    >
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden bg-neutral-50 text-black py-4 sm:py-8">
        {!hideHeader && (
          <div className="site-shell z-20 w-full shrink-0 pt-2 sm:pt-10">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="label-kicker text-brand mb-2">{t.projects.kicker}</p>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
                  {t.projects.heading}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-[36ch]">
                  {t.projects.subtitle}
                </p>
              </div>
              <Link
                href="/projetos"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
              >
                {t.projects.viewAll}
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        )}

        <div className="flex-1 flex items-center w-full pl-[max(env(safe-area-inset-left),3vw)] sm:pl-[5vw]">
          <motion.div
            style={{ x }}
            className="flex items-center gap-5 pr-6 sm:gap-8 sm:pr-12"
          >
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="w-[88vw] flex-shrink-0 sm:w-[520px] lg:w-[680px]"
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {!hideHeader && (
          <div className="site-shell shrink-0 pb-3 flex justify-center sm:hidden">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
            >
              {t.projects.viewAllMobile}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
