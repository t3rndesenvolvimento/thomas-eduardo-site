"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PROJECTS } from "@/lib/data"
import { ArrowOutIcon, StackIcon } from "@/components/brand-icons"

const FEATURED = ["TERON OS", "Minuta Fácil", "Áurea", "Yázigi Swiss Park"]
  .map((t) => PROJECTS.find((p) => p.title === t))
  .filter(Boolean) as (typeof PROJECTS)[0][]

export function FeaturedProjects() {
  return (
    <div className="site-shell w-full py-16 sm:py-20 md:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-brand">
            <StackIcon size={16} className="text-brand" />
            Destaques
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-black">
            Em produção
          </h2>
        </div>
        <Link
          href="/projetos"
          className="inline-flex items-center gap-1.5 rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-black hover:border-brand hover:text-brand"
        >
          Ver todos
          <ArrowOutIcon size={16} />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {FEATURED.map((project, i) => {
          const href =
            project.title === "TERON OS"
              ? "/projetos/teron-os"
              : project.href?.startsWith("/")
                ? project.href
                : project.href

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={href || "/projetos"}
                {...(href?.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition hover:border-brand/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-black group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
                    {project.result || project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
