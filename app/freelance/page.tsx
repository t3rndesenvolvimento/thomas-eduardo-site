import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageAnimator } from "@/components/page-animator"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { CONTACT } from "@/lib/data"

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
  { n: "1", t: "Briefing", d: "Formulário curto." },
  { n: "2", t: "Alinhamento", d: "Retorno em até 24h úteis." },
  { n: "3", t: "Escopo", d: "Prazo e valor claros." },
  { n: "4", t: "Entrega", d: "Build, validação, deploy." },
]

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <section className="site-shell pt-28 pb-14 sm:pt-36 sm:pb-20">
        <p className="label-kicker text-brand mb-4">Sob demanda</p>
        <h1 className="font-display text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] max-w-[14ch]">
          Site, sistema ou <span className="text-brand">produto</span>
        </h1>
        <p className="mt-6 max-w-lg text-neutral-400 text-base sm:text-lg">
          Escopo fechado, comunicação direta, produção.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-xs font-bold uppercase tracking-wider text-black"
          >
            Solicitar briefing <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white"
          >
            Ver cases
          </Link>
        </div>
      </section>

      <ClientsCarousel />

      <section className="site-shell py-16 sm:py-24">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-10">O que entrego</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {OFFERS.map((item) => (
            <div key={item.title} className="border-t border-brand pt-5">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-10">Como funciona</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n}>
              <span className="font-mono text-brand text-sm">{s.n}</span>
              <p className="mt-1 font-display text-lg font-bold">{s.t}</p>
              <p className="mt-1 text-sm text-neutral-500">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-24 sm:pb-32">
        <div className="border border-white/10 bg-surface px-8 py-12 sm:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">Vamos alinhar o escopo</h2>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto text-sm sm:text-base">
            Briefing curto. Retorno em até 24h úteis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-brand px-8 py-4 text-xs font-bold uppercase tracking-wider text-black"
            >
              Começar briefing <ArrowRight className="size-4" />
            </Link>
            <a
              href={CONTACT.whatsapp_real}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
