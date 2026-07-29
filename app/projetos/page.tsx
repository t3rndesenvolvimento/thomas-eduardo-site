import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowUpRight, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Cases em produção — stack, problema e resultado.",
  alternates: { canonical: "/projetos" },
}

const ORDER = [
  "TERON OS",
  "Minuta Fácil",
  "Áurea",
  "Sleep House",
  "Yázigi Swiss Park",
  "Homma Design",
  "Braservice",
  "Hazap Workstation",
  "SpinMove",
  "Instituto Kell",
  "Gerador de QR Code",
  "TERON Workspace",
]

const list = ORDER.map((t) => PROJECTS.find((p) => p.title === t)).filter(
  Boolean,
) as (typeof PROJECTS)[0][]
const remaining = PROJECTS.filter((p) => !ORDER.includes(p.title))
const all = [...list, ...remaining]

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-4xl pt-28 pb-14 sm:pt-36 sm:pb-16">
        <p className="font-mono text-sm text-brand mb-3">Projetos</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          Tudo que foi pra produção
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
          Sistemas, produtos e interfaces. Cada item com contexto e stack.
        </p>
      </header>

      <section className="site-shell max-w-4xl pb-24 sm:pb-32">
        <ul className="divide-y divide-white/10 border-t border-white/10">
          {all.map((project) => {
            const isTeron = project.title === "TERON OS"
            const href =
              isTeron
                ? "/projetos/teron-os"
                : project.href?.startsWith("/")
                  ? project.href
                  : project.href

            return (
              <li
                key={project.title}
                className="grid gap-4 py-8 sm:grid-cols-[140px_1fr] sm:gap-8 sm:py-10"
              >
                <div className="relative aspect-video sm:aspect-square overflow-hidden border border-white/10 bg-neutral-900">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="140px"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-brand">{project.tag}</p>
                  <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold">
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
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 line-clamp-2 max-w-xl">
                    {project.result || project.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-neutral-500">
                    {project.stack.slice(0, 5).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-3">
                    {href && (
                      <Link
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-neutral-500 hover:text-brand"
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-brand"
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">Código e commits abertos</p>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-brand px-5 py-2.5 text-sm font-medium text-brand hover:bg-brand/10"
          >
            GitHub <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
