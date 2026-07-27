"use client"

import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import { CtaLink } from "@/components/ui/cta"
import { PROJECTS, CONTACT } from "@/lib/data"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function TeronOsCaseStudy() {
  const project = PROJECTS.find((p) => p.title === "TERON OS")

  return (
    <main className="min-h-screen bg-background">
      <PageAnimator />

      <div className="site-shell pt-32 pb-8 sm:pt-40 sm:pb-12">
        <CtaLink href="/projetos" variant="ghost" size="sm" className="mb-8 w-fit gap-2 px-0 hover:bg-transparent">
          <ArrowLeft className="size-4" /> Voltar para projetos
        </CtaLink>
      </div>

      <PageHero
        kicker="Case Study · Monorepo SaaS"
        lines={["TERON OS"]}
        description="Como unificamos a operação interna e o portal do cliente na mesma plataforma, reduzindo o ciclo de vendas em 40%."
      />

      <section className="site-shell py-16 sm:py-24">
        {project?.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl"
          >
            <Image
              src={project.image}
              alt="TERON OS Dashboard"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}

        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="sticky top-24 flex flex-col gap-8 rounded-xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
              <div>
                <p className="label-kicker text-white/50 mb-2">Papel</p>
                <p className="text-white/80">Engenharia de Produto (Full Stack)</p>
              </div>
              <div>
                <p className="label-kicker text-white/50 mb-2">Stack Técnica</p>
                <div className="flex flex-wrap gap-2">
                  {project?.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md">
                Quero um sistema assim
              </CtaLink>
            </div>
          </div>

          <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white max-w-none md:col-span-8">
            <h2 className="text-2xl font-semibold tracking-tight">O Desafio</h2>
            <p>
              A operação da agência estava fragmentada em múltiplas ferramentas: CRMs genéricos, propostas enviadas por PDF e planilhas financeiras isoladas.
              Isso causava um enorme desalinhamento interno e, principalmente, uma péssima experiência para o cliente que nunca sabia o real status do projeto.
              A necessidade era unificar todo o ciclo de vida de um lead, desde o primeiro contato até o faturamento, em um fluxo único e contínuo.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12">A Solução</h2>
            <p>
              Projetei e desenvolvi a plataforma TERON OS em uma arquitetura de <strong>Monorepo</strong>, compartilhando a mesma API (Node.js) e Design System entre duas frentes:
            </p>
            <ul>
              <li>
                <strong>OS (Centro de Comando):</strong> Interface administrativa onde o time gere o funil de vendas, elabora propostas complexas, aloca recursos para os projetos e acompanha o financeiro.
              </li>
              <li>
                <strong>Workspace (Portal do Cliente):</strong> Ambiente focado no cliente para aprovação de escopos, upload de materiais e pagamentos centralizados.
              </li>
            </ul>
            <p>
              Ao utilizar a mesma base de dados, eliminamos a necessidade de sincronização manual. Uma ação aprovada pelo cliente no Workspace reflete instantaneamente no pipeline de projetos do OS.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12">Os Resultados</h2>
            <p>
              O sistema transformou a maneira como a empresa opera. Com a eliminação do trabalho manual de transferência de dados e a centralização das informações:
            </p>
            <div className="my-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-bold text-white mb-2">40%</p>
                <p className="text-sm text-white/70 m-0">Redução média no ciclo de vendas.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-bold text-white mb-2">100%</p>
                <p className="text-sm text-white/70 m-0">Visibilidade do projeto para o cliente.</p>
              </div>
            </div>
            <p>
              Essa arquitetura não é um custo, mas uma máquina de retenção. Clientes satisfeitos que acompanham o progresso em tempo real se sentem mais seguros e tendem a renovar os contratos de forma muito mais natural.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
