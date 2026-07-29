"use client"

import { useRef } from "react"
import Link from "next/link"
import { PROJECTS } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

/** Cases que um recrutador de empresa grande deve ver primeiro */
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
      className="relative h-[200vh] w-full sm:h-[350vh]"
    >
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden rounded-t-[2rem] sm:rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] bg-white text-black py-3 sm:py-8">
        {!hideHeader && (
          <div className="site-shell z-20 w-full shrink-0 pt-1 sm:pt-12 md:pt-14 pb-1">
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs font-mono font-semibold uppercase tracking-widest text-black/60 mb-1 sm:mb-2"
                >
                  {t.projects.kicker}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-black"
                >
                  {t.projects.heading}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-1 text-sm sm:text-base font-light text-black/60 max-w-[32ch] text-balance"
                >
                  {t.projects.subtitle}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hidden sm:block"
              >
                <Link
                  href="/projetos"
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  {t.projects.viewAll}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        )}

        <div className="flex-1 flex items-center w-full my-auto pl-[max(env(safe-area-inset-left),3vw)] sm:pl-[max(env(safe-area-inset-left),5vw)]">
          <motion.div
            style={{ x }}
            className="flex items-center gap-4 pr-4 sm:gap-8 sm:pr-12"
          >
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="w-[92vw] flex-shrink-0 sm:w-[540px] lg:w-[720px]"
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {!hideHeader && (
          <div className="site-shell shrink-0 pb-2 flex justify-center sm:hidden z-20">
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md transition-all hover:scale-105 active:scale-95"
            >
              {t.projects.viewAllMobile}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
