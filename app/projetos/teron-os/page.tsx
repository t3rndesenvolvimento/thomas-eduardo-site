import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowOutIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "TERON OS · Case Study",
  description:
    "Full-stack monorepo: internal OS + client portal on one API. Lead to invoice cycle. ~40% shorter sales cycle.",
  alternates: { canonical: "/projetos/teron-os" },
}

const SECTIONS = [
  {
    n: "01",
    title: "Context",
    body: "Digital services operation with CRM, proposals, projects and finance split across tools. Team and client did not share the same view of progress — approvals and files lived in email and chat.",
  },
  {
    n: "02",
    title: "Problem",
    body: "Long sales cycle from manual rework: a won lead did not become a project automatically; client had no transparency; risk of mismatch between what was sold and what was in execution.",
  },
  {
    n: "03",
    title: "Technical decisions",
    body: "pnpm monorepo with four surfaces: Site, OS (team), Workspace (client) and shared API. React + TypeScript + Vite on the front; Node API; one design system. Clear role split on the same data model — a client action in Workspace updates the OS pipeline without manual sync.",
  },
  {
    n: "04",
    title: "What I shipped",
    body: "Monorepo architecture, lead to proposal to project to invoice flow, OS and Workspace interfaces, and integration on the same API. Full-stack ownership from domain to UI in production.",
  },
  {
    n: "05",
    title: "Outcome",
    body: "About 40% shorter sales cycle with an end-to-end flow. Client visibility into the project; team running CRM, proposals and finance in one system.",
  },
]

export default function TeronOsCaseStudy() {
  const project = PROJECTS.find((p) => p.title === "TERON OS")

  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <div className="site-shell pt-28 pb-6 sm:pt-36">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-brand"
        >
          <span className="rotate-180 inline-flex">
            <ArrowOutIcon size={16} />
          </span>
          All case studies
        </Link>
      </div>

      <header className="site-shell max-w-3xl pb-12 sm:pb-16">
        <p className="mb-3 text-sm font-medium text-brand">
          Case study · SaaS · Monorepo
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95]">
          TERON OS
        </h1>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-400">
          Internal ops and client portal on one platform — from lead to payment,
          one source of truth.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
              Role
            </dt>
            <dd className="mt-1 text-sm text-white">Full Stack / Product Engineer</dd>
          </div>
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
              Impact
            </dt>
            <dd className="mt-1 text-sm text-white">~40% shorter sales cycle</dd>
          </div>
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
              Year
            </dt>
            <dd className="mt-1 text-sm text-white">{project?.year ?? "2025"}</dd>
          </div>
        </dl>
      </header>

      {project?.image && (
        <div className="site-shell mb-14 sm:mb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900">
            <Image
              src={project.image}
              alt="TERON OS"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <div className="site-shell pb-20 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <article className="max-w-2xl space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.n}>
              <p className="font-mono text-xs text-brand">{s.n}</p>
              <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold tracking-tight">
                {s.title}
              </h2>
              <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-neutral-400">
                {s.body}
              </p>
            </section>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-surface p-6">
              <p className="font-display text-3xl font-extrabold text-brand">~40%</p>
              <p className="mt-2 text-sm text-neutral-500">
                Estimated reduction in sales cycle
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-surface p-6">
              <p className="font-display text-3xl font-extrabold text-brand">1 API</p>
              <p className="mt-2 text-sm text-neutral-500">
                OS + Workspace on one data truth
              </p>
            </div>
          </div>

          <section>
            <p className="mb-3 text-sm font-medium text-brand">Stack</p>
            <div className="flex flex-wrap gap-2">
              {(project?.stack ?? []).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </article>

        <aside className="h-fit space-y-5 rounded-[1.5rem] border border-white/10 bg-surface p-6 lg:sticky lg:top-28">
          <p className="text-sm leading-relaxed text-neutral-400">
            Interested in full-stack product engineering? See the profile or more
            cases.
          </p>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
          >
            LinkedIn
            <ArrowOutIcon size={16} />
          </a>
          <Link
            href="/projetos"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/35"
          >
            More case studies
          </Link>
          <Link
            href="/freelance"
            className="block text-center text-xs text-neutral-500 hover:text-brand"
          >
            On-demand projects
          </Link>
        </aside>
      </div>
    </main>
  )
}
