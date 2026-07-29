"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { PROJECTS } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
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

  const x = useTransform(scrollYProgress, [0.08, 0.9], ["0%", "-72%"])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative h-[220vh] w-full sm:h-[280vh] bg-neutral-50"
    >
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col overflow-hidden bg-neutral-50 text-black py-8 sm:py-12">
        <div className="site-shell shrink-0 mb-6 sm:mb-8">
          <p className="label-kicker text-brand mb-2">Featured work</p>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t.projects.heading}
            </h2>
            <Link
              href="/projetos"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-neutral-500 hover:text-black"
            >
              Ver todos <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center min-h-0 pl-[max(env(safe-area-inset-left),4vw)] sm:pl-[5vw]">
          <motion.div
            style={{ x }}
            className="flex items-stretch gap-5 pr-8 sm:gap-8 sm:pr-16"
          >
            {projects.map((project) => {
              const href =
                project.title === "TERON OS"
                  ? "/projetos/teron-os"
                  : project.href?.startsWith("/")
                    ? project.href
                    : project.href

              return (
                <Link
                  key={project.title}
                  href={href || "/projetos"}
                  {...(href?.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group w-[78vw] flex-shrink-0 sm:w-[420px] lg:w-[520px] flex flex-col"
                >
                  {/* Bolder: image first, minimal meta */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 80vw, 520px"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-black group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">{project.tag}</p>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-neutral-400 group-hover:text-brand transition-colors" />
                  </div>
                </Link>
              )
            })}
          </motion.div>
        </div>

        <div className="site-shell shrink-0 pt-4 flex justify-center sm:hidden">
          <Link
            href="/projetos"
            className="text-sm font-semibold text-neutral-600"
          >
            Ver todos →
          </Link>
        </div>
      </div>
    </section>
  )
}
