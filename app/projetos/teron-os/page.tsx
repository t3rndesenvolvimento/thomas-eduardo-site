import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { PROJECTS, CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: "Case Study · TERON OS",
  description:
    "Monorepo full stack: OS interno + portal do cliente na mesma API. Ciclo lead → proposta → projeto → fatura. Redução de 40% no ciclo de vendas.",
  alternates: { canonical: "/projetos/teron-os" },
}

const SECTIONS = [
  {
    title: "Contexto",
    body: "Operação de serviços digitais com CRM, propostas, projetos e financeiro em ferramentas separadas. O time e o cliente não compartilhavam a mesma visão do andamento — aprovações e materiais ficavam em e-mail e chat.",
  },
  {
    title: "Problema",
    body: "Ciclo comercial longo por retrabalho manual: lead ganho não virava projeto de forma automática; cliente sem transparência; risco de inconsistência entre o que foi vendido e o que estava em execução.",
  },
  {
    title: "Decisões técnicas",
    body: "Monorepo (pnpm) com quatro superfícies: Site, OS (time), Workspace (cliente) e API compartilhada. Front em React + TypeScript + Vite; API Node; design system único. Separação clara de papéis (operação vs. portal) sobre o mesmo modelo de dados — uma ação do cliente no Workspace atualiza o pipeline do OS sem sincronização manual.",
  },
  {
    title: "O que eu entreguei",
    body: "Arquitetura do monorepo, modelagem do fluxo lead → proposta → projeto → fatura, interfaces do OS e do Workspace, e integração na mesma API. Foco em ownership full stack: do domínio de negócio à UI em produção.",
  },
  {
    title: "Resultado",
    body: "Redução de cerca de 40% no ciclo de vendas com fluxo ponta a ponta. Cliente com visibilidade real do projeto; time operando CRM, propostas e financeiro no mesmo sistema.",
  },
]

export default function TeronOsCaseStudy() {
  const project = PROJECTS.find((p) => p.title === "TERON OS")

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="site-shell pt-28 pb-6 sm:pt-36">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="size-4" /> Projetos
        </Link>
      </div>

      <header className="site-shell pb-12 sm:pb-16 max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-white/45 mb-4">
          Case study · Produto SaaS · Monorepo
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          TERON OS
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-white/60 font-light leading-relaxed">
          Unificar operação interna e portal do cliente na mesma plataforma — do
          lead ao pagamento, com uma única fonte de verdade.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
              Papel
            </p>
            <p className="text-white/85">Full Stack / Product Engineer</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
              Impacto
            </p>
            <p className="text-white/85">~40% menor ciclo de vendas</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
              Ano
            </p>
            <p className="text-white/85">{project?.year ?? "2026"}</p>
          </div>
        </div>
      </header>

      {project?.image && (
        <div className="site-shell mb-16">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={project.image}
              alt="TERON OS — interface do centro de comando"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="site-shell pb-20 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <article className="max-w-2xl space-y-12">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                {s.title}
              </h2>
              <p className="text-base sm:text-lg text-white/65 font-light leading-relaxed">
                {s.body}
              </p>
            </section>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-3xl font-bold tracking-tight">~40%</p>
              <p className="mt-2 text-sm text-white/55">
                Redução estimada no ciclo de vendas
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-3xl font-bold tracking-tight">1 API</p>
              <p className="mt-2 text-sm text-white/55">
                OS + Workspace na mesma verdade de dados
              </p>
            </div>
          </div>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {(project?.stack ?? []).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-28 h-fit space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-white/55 leading-relaxed">
            Interessado em engenharia de produto full stack? Veja o perfil ou
            outros cases.
          </p>
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black"
          >
            LinkedIn <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="/projetos"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/90"
          >
            Mais projetos
          </Link>
          <Link
            href="/freelance"
            className="block text-center text-xs text-white/40 hover:text-white/70"
          >
            Projetos sob demanda →
          </Link>
        </aside>
      </div>
    </main>
  )
}
