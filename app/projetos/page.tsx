import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ProjetosChrome } from "@/components/projetos-chrome"

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases em produção — sistemas, produtos e interfaces. Stack, problema e resultado.",
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
    <main className="min-h-screen bg-canvas text-zinc-50">
      <PageAnimator />
      <ProjetosChrome>
        <header className="site-shell relative z-10 pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div className="max-w-3xl rounded-3xl border border-white/[0.08] bg-elevated/50 px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Portfólio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Projetos em produção
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Sistemas, produtos e interfaces. Cada card: problema, resultado e
              stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projetos/teron-os"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950"
              >
                Case TERON OS <ArrowRight className="size-3.5" />
              </Link>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <section className="site-shell relative z-10 pb-24 sm:pb-32">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((project, i) => {
              const internal = project.href?.startsWith("/")
                ? project.href
                : null
              const isTeron = project.title === "TERON OS"
              const href =
                internal ||
                (isTeron ? "/projetos/teron-os" : project.href) ||
                undefined

              return (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-elevated/40 transition-colors hover:border-white/15 hover:bg-elevated/70"
                >
                  <div className="relative aspect-[16/10] bg-zinc-950/40 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      <span className="rounded-full border border-white/15 bg-zinc-950/70 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {project.year && (
                        <span className="rounded-full border border-white/10 bg-zinc-950/60 px-2.5 py-0.5 font-mono text-[10px] text-zinc-500 backdrop-blur-sm">
                          {project.year}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                      {project.tag}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-50">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">{project.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                      {project.result}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] text-zinc-500"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5 flex flex-wrap gap-3">
                      {href && (
                        <Link
                          href={href}
                          {...(href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white"
                        >
                          {isTeron || internal ? "Case" : "Live"}{" "}
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-300"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="relative z-10 border-t border-white/[0.06]">
          <div className="site-shell py-14 sm:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-50">
                Código no GitHub
              </h2>
              <p className="mt-2 text-sm text-zinc-500 max-w-md">
                Repositórios e commits para validar o trabalho.
              </p>
            </div>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950"
            >
              Abrir GitHub <ArrowRight className="size-3.5" />
            </a>
          </div>
        </section>
      </ProjetosChrome>
    </main>
  )
}
