import type { Metadata } from "next"
import Link from "next/link"
import { PageAnimator } from "@/components/page-animator"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "On demand",
  description: "Landing pages, systems and products. Closed scope, production delivery.",
  alternates: { canonical: "/freelance" },
}

const OFFERS = [
  {
    n: "01",
    title: "Landing pages",
    body: "Fast, clear CTA, WhatsApp — campaign-ready and conversion focused.",
  },
  {
    n: "02",
    title: "Systems",
    body: "Auth, CRUD, permissions and business workflows that hold up in production.",
  },
  {
    n: "03",
    title: "Products",
    body: "From MVP to deploy with iteration based on real usage.",
  },
]

const STEPS = [
  { n: "01", t: "Brief", d: "Short form with context and goals." },
  { n: "02", t: "Align", d: "Reply within 1 business day." },
  { n: "03", t: "Scope", d: "Clear timeline and investment." },
  { n: "04", t: "Ship", d: "Build, validate, deploy." },
]

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          On demand
        </p>
        <h1 className="max-w-[14ch] font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95]">
          Site, system or product.
        </h1>
        <p className="mt-5 max-w-lg text-neutral-400 leading-relaxed">
          Closed scope, direct communication, delivery in production.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-black hover:brightness-110"
          >
            Request briefing
            <ArrowOutIcon size={16} />
          </Link>
          <Link
            href="/projetos"
            className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-white/15 px-6 text-sm font-medium text-white/90 hover:border-white/35"
          >
            View cases
          </Link>
        </div>
      </header>

      <section className="site-shell max-w-3xl pb-12">
        <p className="mb-5 text-sm font-medium text-brand">What I deliver</p>
        <ul className="space-y-3">
          {OFFERS.map((item) => (
            <li
              key={item.title}
              className="flex gap-5 rounded-[1.5rem] border border-white/10 bg-surface p-5 sm:p-6"
            >
              <span className="font-mono text-sm font-semibold text-brand shrink-0">
                {item.n}
              </span>
              <div>
                <h2 className="font-display text-lg font-bold">{item.title}</h2>
                <p className="mt-1 text-sm text-neutral-400">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell max-w-3xl pb-12">
        <p className="mb-5 text-sm font-medium text-brand">How it works</p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-[1.5rem] border border-white/10 bg-surface p-5"
            >
              <span className="font-mono text-xs text-brand">{s.n}</span>
              <p className="mt-1 font-display text-lg font-bold">{s.t}</p>
              <p className="mt-0.5 text-sm text-neutral-500">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl border-t border-white/10 pb-24 pt-12">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
          Interested?
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Reply within 1 business day.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-black hover:brightness-110"
          >
            Start briefing
            <ArrowOutIcon size={16} />
          </Link>
          <a
            href={CONTACT.whatsapp_real}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-1.5 text-sm text-neutral-400 hover:text-white"
          >
            WhatsApp
            <ArrowOutIcon size={16} />
          </a>
        </div>
      </section>
    </main>
  )
}
