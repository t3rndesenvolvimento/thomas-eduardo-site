import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Processo",
  description: "Discovery, arquitetura, desenvolvimento, validação, deploy e iteração.",
  alternates: { canonical: "/processo" },
}

const STEPS = [
  { n: "01", title: "Discovery", text: "Problema, restrições e o que é sucesso — antes da stack." },
  { n: "02", title: "Arquitetura", text: "Dados, APIs, limites técnicos e entregas em incrementos." },
  { n: "03", title: "Build", text: "TypeScript, código legível, PRs claros. Frontend e backend." },
  { n: "04", title: "Validação", text: "Fluxos críticos testados. Feedback em ciclos curtos." },
  { n: "05", title: "Deploy", text: "CI/CD, ambiente estável. Go-live sem drama." },
  { n: "06", title: "Iteração", text: "Ajustes com base em uso real." },
]

const PRINCIPLES = [
  "Escopo escrito e critérios de aceite",
  "Comunicação direta",
  "Código entregue ao cliente (em projeto)",
  "Prazos honestos",
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell pt-28 pb-16 sm:pt-36 sm:pb-24">
        <p className="label-kicker text-brand mb-4">Processo</p>
        <h1 className="font-display text-[clamp(3rem,10vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em] max-w-[12ch]">
          Do problema ao <span className="text-brand">deploy</span>
        </h1>
        <p className="mt-6 max-w-lg text-neutral-400 text-base sm:text-lg">
          Em time ou sob demanda: clareza, ownership e produção.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-black"
          >
            LinkedIn <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="/freelance"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            Projetos sob demanda
          </Link>
        </div>
      </header>

      <section className="site-shell pb-20 sm:pb-28">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-brand pt-5">
              <span className="font-mono text-xs text-brand">{s.n}</span>
              <h2 className="mt-2 font-display text-2xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 text-black">
        <div className="site-shell py-16 sm:py-20 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label-kicker text-brand mb-3">Princípios</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sem surpresa no meio do caminho
            </h2>
          </div>
          <ul className="space-y-4">
            {PRINCIPLES.map((t) => (
              <li key={t} className="flex items-start gap-3 text-neutral-600">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-black">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-shell py-20 sm:py-28 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
          Quer trabalhar junto?
        </h2>
        <p className="mt-4 text-neutral-400 max-w-md mx-auto">
          Engenharia no LinkedIn. Projetos em{" "}
          <Link href="/freelance" className="text-brand underline underline-offset-2">
            /freelance
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black"
          >
            LinkedIn
          </Link>
          <Link
            href="/projetos"
            className="inline-flex justify-center rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            Ver projetos
          </Link>
        </div>
      </section>
    </main>
  )
}
