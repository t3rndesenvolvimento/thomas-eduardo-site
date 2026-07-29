import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageAnimator } from "@/components/page-animator"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projetos sob demanda | Freelance",
  description:
    "Landing pages, sistemas e produtos digitais sob demanda. Diagnóstico gratuito, escopo claro e entrega previsível.",
  alternates: { canonical: "/freelance" },
}

const OFFERS = [
  {
    title: "Landing pages de conversão",
    body: "Páginas rápidas, com CTA claro e integração WhatsApp — pensadas para campanha e custo por lead.",
  },
  {
    title: "Sistemas e painéis",
    body: "Autenticação, CRUD, permissões e fluxos do seu negócio em stack moderna (Next.js / Node).",
  },
  {
    title: "Produtos digitais",
    body: "Do MVP ao deploy: arquitetura, desenvolvimento e iteração com foco em uso real.",
  },
]

export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageAnimator />

      <section className="site-shell pt-28 pb-16 sm:pt-32 sm:pb-24">
        <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
          Projetos sob demanda
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
          Precisa de um site, sistema ou produto digital?
        </h1>
        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/65 font-light leading-relaxed">
          Trabalho como freelancer com escopo fechado, comunicação direta e
          entrega em produção. Sem enrolação de agência.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:scale-[1.02] transition-transform"
          >
            Solicitar briefing <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 transition-colors"
          >
            Ver cases
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs sm:text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            ← Portfólio profissional
          </Link>
        </div>
      </section>

      <ClientsCarousel className="border-y border-white/10 py-10" />

      <section className="site-shell py-20 sm:py-28">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          O que eu entrego
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {OFFERS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/55 leading-relaxed font-light">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-28">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
            Vamos alinhar o escopo
          </h2>
          <p className="mt-4 text-white/55 max-w-lg mx-auto font-light">
            Preencha um briefing curto. Retorno em até 24h úteis com próximos
            passos — sem proposta genérica automática.
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
