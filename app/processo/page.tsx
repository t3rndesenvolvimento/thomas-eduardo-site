import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowOutIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "Process",
  description: "How projects move from concept to production.",
  alternates: { canonical: "/processo" },
}

const STEPS = [
  {
    n: "01",
    title: "Discover",
    text: "Problem, constraints and definition of done — before stack choices.",
  },
  {
    n: "02",
    title: "Define",
    text: "Data model, APIs, technical limits and incremental milestones.",
  },
  {
    n: "03",
    title: "Design & build",
    text: "TypeScript, readable code, clear PRs. Frontend and backend together.",
  },
  {
    n: "04",
    title: "Validate",
    text: "Critical flows tested. Feedback in short cycles.",
  },
  {
    n: "05",
    title: "Launch",
    text: "CI/CD, stable environment. Predictable go-live.",
  },
  {
    n: "06",
    title: "Iterate",
    text: "Adjustments from real usage — not assumptions.",
  },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="mb-3 text-sm font-medium text-brand">Methodology</p>
        <h1 className="max-w-[16ch] font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95]">
          From concept to execution.
        </h1>
        <p className="mt-5 max-w-lg text-neutral-400 leading-relaxed">
          A structured path engineered for clarity, speed and production quality
          — in teams or on demand.
        </p>
      </header>

      <section className="site-shell max-w-3xl pb-16">
        <ol className="space-y-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex gap-5 rounded-[1.5rem] border border-white/10 bg-surface p-5 sm:p-6"
            >
              <span className="font-mono text-sm font-semibold text-brand shrink-0">
                {s.n}
              </span>
              <div>
                <h2 className="font-display text-xl font-bold">{s.title}</h2>
                <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl border-t border-white/10 pb-24 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">
            Engineering on LinkedIn · projects at{" "}
            <Link href="/freelance" className="text-brand hover:underline">
              /freelance
            </Link>
          </p>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
          >
            LinkedIn
            <ArrowOutIcon size={16} />
          </a>
        </div>
      </section>
    </main>
  )
}
