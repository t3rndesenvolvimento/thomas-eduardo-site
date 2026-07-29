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

  const x = useTransform(scrollYProgress, [0.08, 0.9], ["0%", "-75%"])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative h-[220vh] w-full sm:h-[280vh] bg-neutral-50"
    >
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden bg-neutral-50 text-black py-6 sm:py-10">
        {!hideHeader && (
          <div className="site-shell z-20 w-full shrink-0">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="label-kicker text-brand mb-2">{t.projects.kicker}</p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black">
                  {t.projects.heading}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-[36ch]">
                  {t.projects.subtitle}
                </p>
              </div>
              <Link
                href="/projetos"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
              >
                {t.projects.viewAll}
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        )}

        <div className="flex-1 flex items-center w-full min-h-0 pl-[max(env(safe-area-inset-left),4vw)] sm:pl-[5vw]">
          <motion.div
            style={{ x }}
            className="flex items-center gap-6 pr-8 sm:gap-10 sm:pr-16"
          >
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="w-[85vw] flex-shrink-0 sm:w-[480px] lg:w-[620px]"
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {!hideHeader && (
          <div className="site-shell shrink-0 pb-2 flex justify-center sm:hidden">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
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
