import type { Metadata } from "next"
import Link from "next/link"
import { PageAnimator } from "@/components/page-animator"
import { CONTACT } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Projetos sob demanda",
  description: "Landing, sistemas e produtos. Escopo fechado e entrega em produção.",
  alternates: { canonical: "/freelance" },
}

const OFFERS = [
  { title: "Landing pages", body: "Rápidas, CTA claro, WhatsApp — campanha e custo por lead." },
  { title: "Sistemas", body: "Auth, CRUD, permissões e fluxos do negócio." },
  { title: "Produtos", body: "Do MVP ao deploy com iteração em uso real." },
]

const STEPS = [
  { n: "01", t: "Briefing", d: "Formulário curto com contexto." },
  { n: "02", t: "Alinhamento", d: "Retorno em até 24h úteis." },
  { n: "03", t: "Escopo", d: "Prazo e valor claros." },
  { n: "04", t: "Entrega", d: "Build, validação, deploy." },
]

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="font-mono text-sm text-brand mb-3">Sob demanda</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          Site, sistema ou produto
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
          Escopo fechado, comunicação direta, entrega em produção.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex rounded border border-brand px-6 py-3 text-sm font-medium text-brand hover:bg-brand/10"
          >
            Solicitar briefing
          </Link>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
          >
            Ver cases <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </header>

      <section className="site-shell max-w-3xl pb-12">
        <h2 className="font-mono text-sm text-brand mb-6">O que entrego</h2>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {OFFERS.map((item) => (
            <li key={item.title} className="py-6">
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell max-w-3xl pb-12">
        <h2 className="font-mono text-sm text-brand mb-6">Como funciona</h2>
        <ol className="grid gap-6 sm:grid-cols-2">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="font-mono text-xs text-brand">{s.n}</span>
              <p className="mt-1 font-display font-bold">{s.t}</p>
              <p className="mt-0.5 text-sm text-neutral-500">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl pb-24 border-t border-white/10 pt-12">
        <h2 className="font-display text-2xl font-extrabold">Vamos alinhar o escopo</h2>
        <p className="mt-2 text-sm text-neutral-400">Retorno em até 24h úteis.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex rounded border border-brand px-6 py-3 text-sm font-medium text-brand hover:bg-brand/10"
          >
            Começar briefing
          </Link>
          <a
            href={CONTACT.whatsapp_real}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
          >
            WhatsApp <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </section>
    </main>
  )
}
