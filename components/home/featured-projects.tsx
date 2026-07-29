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
    <section id="projects" className="bg-canvas text-white py-20 sm:py-28">
      <div className="site-shell max-w-4xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-brand mb-2">01. Projetos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
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

        <ol className="space-y-16 sm:space-y-20">
          {FEATURED.map((project, i) => {
            const isTeron = project.title === "TERON OS"
            const href =
              isTeron
                ? "/projetos/teron-os"
                : project.href?.startsWith("/")
                  ? project.href
                  : project.href

            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05 }}
                className="grid gap-6 sm:grid-cols-[1fr_1.1fr] sm:gap-10 items-center"
              >
                <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                  <p className="font-mono text-xs text-brand mb-2">
                    Featured project
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
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
                  <div className="mt-4 rounded border border-white/10 bg-surface p-5 sm:p-6">
                    <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-400">
                      {project.result || project.description}
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-neutral-500">
                    {project.stack.slice(0, 5).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-4">
                    {href && (
                      <Link
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-neutral-400 hover:text-brand"
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
                        className="text-neutral-400 hover:text-brand"
                        aria-label="GitHub"
                      >
                        <Github className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-900 ${i % 2 === 1 ? "sm:order-1" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 transition-opacity hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </motion.li>
            )
          })}
        </ol>

        <div className="mt-12 sm:hidden">
          <Link href="/projetos" className="text-sm text-brand">
            Ver todos os projetos →
          </Link>
        </div>
      </div>
    </section>
  )
}
