"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PROJECTS } from "@/lib/data"
import { ArrowUpRight, Github } from "lucide-react"

const FEATURED = ["TERON OS", "Minuta Fácil", "Áurea", "Yázigi Swiss Park"]
  .map((t) => PROJECTS.find((p) => p.title === t))
  .filter(Boolean) as (typeof PROJECTS)[0][]

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-canvas text-white py-16 sm:py-28">
      <div className="site-shell max-w-4xl">
        <div className="mb-10 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs sm:text-sm text-brand mb-2">
              01. Projetos
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
              Trabalhos em destaque
            </h2>
          </div>
          <Link
            href="/projetos"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-brand"
          >
            Ver todos <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <ol className="space-y-14 sm:space-y-20">
          {FEATURED.map((project, i) => {
            const isTeron = project.title === "TERON OS"
            const href = isTeron
              ? "/projetos/teron-os"
              : project.href?.startsWith("/")
                ? project.href
                : project.href

            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ delay: i * 0.04 }}
                className="grid gap-4 sm:grid-cols-[1fr_1.1fr] sm:gap-10 sm:items-center"
              >
                {/* Image first on mobile */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-900 ${i % 2 === 1 ? "sm:order-1" : "sm:order-2"}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>

                <div className={i % 2 === 1 ? "sm:order-2" : "sm:order-1"}>
                  <p className="font-mono text-[11px] sm:text-xs text-brand mb-1.5">
                    Featured project
                  </p>
                  <h3 className="font-display text-xl sm:text-3xl font-bold tracking-tight">
                    {href ? (
                      <Link
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="hover:text-brand transition-colors"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div className="mt-3 sm:mt-4 border border-white/10 bg-surface p-4 sm:p-6">
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {project.result || project.description}
                    </p>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] sm:text-xs text-neutral-500">
                    {project.stack.slice(0, 5).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-5">
                    {href && (
                      <Link
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center text-neutral-400 hover:text-brand"
                        aria-label="Abrir projeto"
                      >
                        <ArrowUpRight className="size-5" />
                      </Link>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center text-neutral-400 hover:text-brand"
                        aria-label="GitHub"
                      >
                        <Github className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>

        <div className="mt-10 sm:hidden">
          <Link
            href="/projetos"
            className="inline-flex min-h-11 items-center text-sm font-medium text-brand"
          >
            Ver todos os projetos →
          </Link>
        </div>
      </div>
    </section>
  )
}
