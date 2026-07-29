import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowRight, Check } from "lucide-react"
import { ProcessoChrome } from "@/components/processo-chrome"

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Como trabalho: discovery, arquitetura, desenvolvimento, testes, deploy e iteração.",
  alternates: { canonical: "/processo" },
}

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    text: "Entender o problema, restrições e o que significa sucesso — antes de escolher stack.",
  },
  {
    n: "02",
    title: "Arquitetura",
    text: "Modelo de dados, APIs, limites técnicos e plano de entrega em incrementos.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    text: "TypeScript, código legível, PRs claros. Frontend e backend com o mesmo critério.",
  },
  {
    n: "04",
    title: "Validação",
    text: "Fluxos críticos testados. Feedback do stakeholder em ciclos curtos.",
  },
  {
    n: "05",
    title: "Deploy",
    text: "CI/CD, ambiente estável, monitoramento básico. Go-live sem drama.",
  },
  {
    n: "06",
    title: "Iteração",
    text: "Ajustes com base em uso real — não em opinião isolada.",
  },
]

const PRINCIPLES = [
  "Escopo escrito e critérios de aceite",
  "Comunicação direta, sem intermediário desnecessário",
  "Código e documentação entregues ao cliente (em projeto)",
  "Prazos honestos — sem promessa irreal",
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas text-zinc-50">
      <PageAnimator />
      <ProcessoChrome>
        <header className="site-shell relative z-10 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className="max-w-3xl rounded-3xl border border-white/[0.08] bg-elevated/50 px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Processo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Do problema ao deploy
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Em time (CLT/PJ) ou em projeto sob demanda: clareza, ownership e
              entrega em produção.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950"
              >
                LinkedIn <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/freelance"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-300"
              >
                Projetos sob demanda
              </Link>
            </div>
          </div>
        </header>

        <section className="site-shell relative z-10 pb-16 sm:pb-24">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/[0.08] bg-elevated/40 p-6 sm:p-7"
              >
                <span className="font-mono text-[11px] text-zinc-600">{s.n}</span>
                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-zinc-50">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 font-light">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 border-y border-white/[0.06] bg-zinc-50 text-zinc-950">
          <div className="site-shell py-14 sm:py-20 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Princípios
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Sem surpresa no meio do caminho
              </h2>
            </div>
            <ul className="space-y-4">
              {PRINCIPLES.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-sm sm:text-base text-zinc-600"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-zinc-50">
                    <Check className="size-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="site-shell relative z-10 py-16 sm:py-24">
          <div className="rounded-3xl border border-white/[0.08] bg-elevated/50 p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50">
              Quer trabalhar junto?
            </h2>
            <p className="mt-4 text-zinc-400 font-light max-w-md mx-auto text-sm sm:text-base">
              Engenharia no LinkedIn. Projetos em{" "}
              <Link href="/freelance" className="text-zinc-200 underline underline-offset-2">
                /freelance
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-50 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950"
              >
                LinkedIn
              </Link>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-300"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </section>
      </ProcessoChrome>
    </main>
  )
}
