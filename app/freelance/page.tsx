import type { Metadata } from "next"
import Link from "next/link"
import { PageAnimator } from "@/components/page-animator"
import { CONTACT } from "@/lib/data"
import { ArrowOutIcon, CheckIcon, RocketIcon, SparkIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "Projetos sob demanda",
  description: "Landing, sistemas e produtos. Escopo fechado e entrega em producao.",
  alternates: { canonical: "/freelance" },
}

const OFFERS = [
  { title: "Landing pages", body: "Rapidas, CTA claro, WhatsApp — campanha e custo por lead." },
  { title: "Sistemas", body: "Auth, CRUD, permissoes e fluxos do negocio." },
  { title: "Produtos", body: "Do MVP ao deploy com iteracao em uso real." },
]

const STEPS = [
  { n: "01", t: "Briefing", d: "Formulario curto com contexto." },
  { n: "02", t: "Alinhamento", d: "Retorno em ate 24h uteis." },
  { n: "03", t: "Escopo", d: "Prazo e valor claros." },
  { n: "04", t: "Entrega", d: "Build, validacao, deploy." },
]

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
          <SparkIcon size={16} className="text-brand" />
          Sob demanda
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Site, sistema ou produto
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
          Escopo fechado, comunicacao direta, entrega em producao.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-brand px-6 text-sm font-semibold text-black"
          >
            Solicitar briefing
            <ArrowOutIcon size={16} />
          </Link>
          <Link
            href="/projetos"
            className="inline-flex min-h-12 items-center gap-1 text-sm text-neutral-400 hover:text-white"
          >
            Ver cases
            <ArrowOutIcon size={16} />
          </Link>
        </div>
      </header>

      <section className="site-shell max-w-3xl pb-12">
        <h2 className="mb-5 text-sm font-medium text-brand">O que entrego</h2>
        <ul className="space-y-3">
          {OFFERS.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-white/10 bg-surface p-5"
            >
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell max-w-3xl pb-12">
        <h2 className="mb-5 text-sm font-medium text-brand">Como funciona</h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-3xl border border-white/10 bg-surface p-5"
            >
              <span className="font-mono text-xs text-brand">{s.n}</span>
              <p className="mt-1 font-display font-bold">{s.t}</p>
              <p className="mt-0.5 text-sm text-neutral-500">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl border-t border-white/10 pb-24 pt-12">
        <h2 className="font-display text-2xl font-bold">Vamos alinhar o escopo</h2>
        <p className="mt-2 text-sm text-neutral-400">Retorno em ate 24h uteis.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-brand px-6 text-sm font-semibold text-black"
          >
            Comecar briefing
            <ArrowOutIcon size={16} />
          </Link>
          <a
            href={CONTACT.whatsapp_real}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-1 text-sm text-neutral-400 hover:text-white"
          >
            WhatsApp
            <ArrowOutIcon size={16} />
          </a>
        </div>
      </section>
    </main>
  )
}
