import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowOutIcon, GithubIcon, StackIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Cases em producao — stack, problema e resultado.",
  alternates: { canonical: "/projetos" },
}

const ORDER = [
  "TERON OS",
  "Minuta Facil",
  "Aurea",
  "Sleep House",
  "Yazigi Swiss Park",
  "Homma Design",
]

// Prefer exact titles from data; fallback to full list order
const featured = [
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
  .map((t) => PROJECTS.find((p) => p.title === t))
  .filter(Boolean) as (typeof PROJECTS)[0][]

const remaining = PROJECTS.filter(
  (p) => !featured.some((f) => f.title === p.title),
)
const all = [...featured, ...remaining]

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
          <StackIcon size={16} className="text-brand" />
          Projetos
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Em producao
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
          Sistemas, produtos e interfaces — contexto e stack em cada item.
        </p>
      </header>

      <section className="site-shell pb-24 sm:pb-32">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((project) => {
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
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface transition hover:border-brand/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-medium text-brand">{project.tag}</p>
                  <h2 className="mt-1 font-display text-lg font-bold group-hover:text-brand">
                    {project.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
                    {project.result || project.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 2).map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <ArrowOutIcon size={18} className="text-neutral-500 group-hover:text-brand" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-neutral-500">Codigo aberto no GitHub</p>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-semibold text-black"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}
