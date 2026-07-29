import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageAnimator } from "@/components/page-animator"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { CONTACT } from "@/lib/data"
import { FreelanceChrome } from "@/components/freelance-chrome"

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
    <main className="min-h-screen bg-canvas text-zinc-50">
      <PageAnimator />
      <FreelanceChrome>
        <section className="site-shell relative z-10 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className="max-w-3xl rounded-3xl border border-white/[0.08] bg-elevated/50 px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Projetos sob demanda
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Site, sistema ou produto digital
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Escopo fechado, comunicação direta e entrega em produção.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-zinc-950"
              >
                Solicitar briefing <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-wider text-zinc-300"
              >
                Ver cases
              </Link>
            </div>
          </div>
        </section>

        <ClientsCarousel className="relative z-10 border-y border-white/[0.06] py-10 bg-canvas" />

        <section className="site-shell relative z-10 py-16 sm:py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-zinc-50">
            O que entrego
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {OFFERS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-elevated/40 p-6 sm:p-8"
              >
                <h3 className="font-display text-lg font-semibold mb-2 text-zinc-50">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-shell relative z-10 pb-16 sm:pb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-zinc-50">
            Como funciona
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/[0.08] bg-elevated/40 p-5"
              >
                <span className="font-mono text-xs text-zinc-600">{s.n}</span>
                <p className="mt-2 font-display font-semibold text-zinc-100">{s.t}</p>
                <p className="mt-1 text-sm text-zinc-500 font-light">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-shell relative z-10 pb-24 sm:pb-32">
          <div className="rounded-3xl border border-white/[0.08] bg-elevated/50 p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50">
              Vamos alinhar o escopo
            </h2>
            <p className="mt-4 text-zinc-400 max-w-md mx-auto font-light text-sm sm:text-base">
              Briefing curto. Retorno em até 24h úteis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-zinc-950"
              >
                Começar briefing <ArrowRight className="size-4" />
              </Link>
              <a
                href={CONTACT.whatsapp_real}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-wider text-zinc-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </FreelanceChrome>
    </main>
  )
}
