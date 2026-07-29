import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT } from "@/lib/data"
import { PageAnimator } from "@/components/page-animator"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Processo",
  description: "Discovery, arquitetura, build, validação, deploy e iteração.",
  alternates: { canonical: "/processo" },
}

const STEPS = [
  { n: "01", title: "Discovery", text: "Problema, restrições e definição de sucesso — antes da stack." },
  { n: "02", title: "Arquitetura", text: "Dados, APIs, limites técnicos e entregas em incrementos." },
  { n: "03", title: "Build", text: "TypeScript, código legível, PRs claros. Frontend e backend." },
  { n: "04", title: "Validação", text: "Fluxos críticos testados. Feedback em ciclos curtos." },
  { n: "05", title: "Deploy", text: "CI/CD, ambiente estável. Go-live previsível." },
  { n: "06", title: "Iteração", text: "Ajustes com base em uso real." },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <PageAnimator />

      <header className="site-shell max-w-3xl pt-28 pb-12 sm:pt-36 sm:pb-16">
        <p className="font-mono text-sm text-brand mb-3">Processo</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          Do problema ao deploy
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
          Em time ou sob demanda: clareza, ownership e produção.
        </p>
      </header>

      <section className="site-shell max-w-3xl pb-16">
        <ol className="space-y-0 divide-y divide-white/10 border-y border-white/10">
          {STEPS.map((s) => (
            <li key={s.n} className="grid gap-2 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8">
              <span className="font-mono text-sm text-brand">{s.n}</span>
              <div>
                <h2 className="font-display text-xl font-bold">{s.title}</h2>
                <p className="mt-1 text-sm text-neutral-400 leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell max-w-3xl pb-24 border-t border-white/10 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-400 text-sm">
            Engenharia no LinkedIn · projetos em{" "}
            <Link href="/freelance" className="text-brand hover:underline">
              /freelance
            </Link>
          </p>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1 rounded border border-brand px-5 py-2.5 text-sm font-medium text-brand hover:bg-brand/10"
          >
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </section>
    </main>
  )
}
