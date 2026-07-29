import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowOutIcon, GithubIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — systems and products in production.",
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

const featured = ORDER.map((t) => PROJECTS.find((p) => p.title === t)).filter(
  Boolean,
) as (typeof PROJECTS)[0][]
const remaining = PROJECTS.filter(
  (p) => !featured.some((f) => f.title === p.title),
)
const all = [...featured, ...remaining]

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="mb-3 text-sm font-medium text-brand">Portfolio</p>
        <h1 className="max-w-[14ch] font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95]">
          Selected creative archives.
        </h1>
        <p className="mt-5 max-w-lg text-neutral-400 leading-relaxed">
          Strategy, interface and engineering behind products shipped to
          production.
        </p>
      </header>

      <section className="site-shell pb-24 sm:pb-32">
        <div className="space-y-6">
          {all.map((project, i) => {
            const href =
              project.title === "TERON OS"
                ? "/projetos/teron-os"
                : project.href?.startsWith("/")
                  ? project.href
                  : project.href || "/projetos"
            const n = String(i + 1).padStart(2, "0")

            return (
              <Link
                key={project.title}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface transition hover:border-brand/40 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
              >
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[240px] bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-medium tracking-wide text-brand">
                    {project.tag} · {n}
                  </p>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-brand">
                    {project.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-400">
                    {project.result || project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-neutral-400"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Read case study
                    <ArrowOutIcon size={16} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-neutral-500">Open source on GitHub</p>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}
