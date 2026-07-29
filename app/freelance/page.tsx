import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageAnimator } from "@/components/page-animator"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projetos sob demanda",
  description:
    "Landing pages, sistemas e produtos digitais. Briefing claro, escopo fechado e entrega em produção.",
  alternates: { canonical: "/freelance" },
}

const OFFERS = [
  {
    title: "Landing pages",
    body: "Páginas rápidas, CTA claro e integração WhatsApp — para campanha e custo por lead.",
  },
  {
    title: "Sistemas e painéis",
    body: "Auth, CRUD, permissões e fluxos do negócio em Next.js / Node.",
  },
  {
    title: "Produtos digitais",
    body: "Do MVP ao deploy: arquitetura, desenvolvimento e iteração com uso real.",
  },
]

const STEPS = [
  { n: "1", t: "Briefing", d: "Formulário curto com contexto e orçamento." },
  { n: "2", t: "Alinhamento", d: "Retorno em até 24h úteis com próximos passos." },
  { n: "3", t: "Escopo", d: "Proposta com prazo e valor — sem surpresa." },
  { n: "4", t: "Entrega", d: "Desenvolvimento, validação e deploy." },
]

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageAnimator />

      <section className="site-shell pt-28 pb-14 sm:pt-36 sm:pb-20">
        <p className="text-xs font-mono uppercase tracking-widest text-white/45 mb-4">
          Projetos sob demanda
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
          Site, sistema ou produto digital
        </h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg text-white/55 font-light leading-relaxed">
          Trabalho com escopo fechado, comunicação direta e entrega em produção.
          Sem estrutura de agência no meio.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black"
          >
            Solicitar briefing <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white/90"
          >
            Ver cases
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-4 text-xs text-white/40 hover:text-white"
          >
            ← Portfólio
          </Link>
        </div>
      </section>

      <ClientsCarousel className="border-y border-white/10 py-10" />

      <section className="site-shell py-16 sm:py-24">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-10">
          O que entrego
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {OFFERS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16 sm:pb-20">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-10">
          Como funciona
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 p-5"
            >
              <span className="font-mono text-xs text-white/35">{s.n}</span>
              <p className="mt-2 font-display font-semibold">{s.t}</p>
              <p className="mt-1 text-sm text-white/50 font-light">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-24 sm:pb-32">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            Vamos alinhar o escopo
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto font-light text-sm sm:text-base">
            Briefing curto. Retorno em até 24h úteis — sem proposta genérica
            automática.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black"
            >
              Começar briefing <ArrowRight className="size-4" />
            </Link>
            <a
              href={CONTACT.whatsapp_real}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white/90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
