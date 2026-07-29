import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowRight, ArrowUpRight } from "lucide-react"

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

      <header className="site-shell pt-28 pb-14 sm:pt-36 sm:pb-20">
        <p className="label-kicker text-brand mb-4">Portfólio</p>
        <h1 className="font-display text-[clamp(3rem,10vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em] max-w-[10ch]">
          Projetos em <span className="text-brand">produção</span>
        </h1>
        <p className="mt-6 max-w-lg text-base sm:text-lg text-neutral-400 leading-relaxed">
          Sistemas, produtos e interfaces. Problema, resultado e stack.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projetos/teron-os"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-black"
          >
            Case TERON OS <ArrowRight className="size-3.5" />
          </Link>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="site-shell pb-24 sm:pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((project, i) => {
            const internal = project.href?.startsWith("/") ? project.href : null
            const isTeron = project.title === "TERON OS"
            const href =
              internal || (isTeron ? "/projetos/teron-os" : project.href) || undefined

            return (
              <article key={project.title} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 font-mono text-[10px] text-white/80 bg-black/60 px-2 py-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-[10px] font-mono uppercase tracking-widest text-brand">
                  {project.tag}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-400 line-clamp-2">
                  {project.result}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {href && (
                    <Link
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-brand"
                    >
                      {isTeron || internal ? "Case" : "Live"}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="site-shell py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Código no GitHub</h2>
            <p className="mt-2 text-sm text-neutral-500">Commits e repositórios abertos.</p>
          </div>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-black"
          >
            Abrir GitHub <ArrowRight className="size-3.5" />
          </a>
        </div>
      </section>
    </main>
  )
}
