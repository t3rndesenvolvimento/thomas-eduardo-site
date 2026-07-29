import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowOutIcon, CheckIcon, RocketIcon } from "@/components/brand-icons"

export const metadata: Metadata = {
  title: "Processo",
  description: "Discovery, arquitetura, build, validacao, deploy e iteracao.",
  alternates: { canonical: "/processo" },
}

const STEPS = [
  { n: "01", title: "Discovery", text: "Problema, restricoes e definicao de sucesso — antes da stack." },
  { n: "02", title: "Arquitetura", text: "Dados, APIs, limites tecnicos e entregas em incrementos." },
  { n: "03", title: "Build", text: "TypeScript, codigo legivel, PRs claros. Frontend e backend." },
  { n: "04", title: "Validacao", text: "Fluxos criticos testados. Feedback em ciclos curtos." },
  { n: "05", title: "Deploy", text: "CI/CD, ambiente estavel. Go-live previsivel." },
  { n: "06", title: "Iteracao", text: "Ajustes com base em uso real." },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
          <RocketIcon size={16} className="text-brand" />
          Processo
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Do problema ao deploy
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
          Em time ou sob demanda: clareza, ownership e producao.
        </p>
      </header>

      <section className="site-shell max-w-3xl pb-16">
        <ol className="space-y-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-3xl border border-white/10 bg-surface p-5 sm:p-6"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand/15 font-mono text-sm font-semibold text-brand">
                {s.n}
              </span>
              <div>
                <h2 className="font-display text-lg font-bold">{s.title}</h2>
                <p className="mt-1 text-sm text-neutral-400">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl border-t border-white/10 pb-24 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">
            Engenharia no LinkedIn · projetos em{" "}
            <Link href="/freelance" className="text-brand hover:underline">
              /freelance
            </Link>
          </p>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-semibold text-black"
          >
            LinkedIn
            <ArrowOutIcon size={16} />
          </a>
        </div>
      </section>
    </main>
  )
}
