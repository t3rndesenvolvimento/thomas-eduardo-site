import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import Link from "next/link"
import { ArrowLeft, Copy } from "lucide-react"
import { notFound } from "next/navigation"

export default async function PropostaPage({ params }: { params: { id: string } }) {
  await connectToDatabase()
  
  let lead = null
  try {
    lead = await Lead.findById(params.id)
  } catch (e) {
    return notFound()
  }

  if (!lead) return notFound()

  // Atualiza o status automaticamente para proposta se for novo
  if (lead.status === "novo") {
    lead.status = "proposta"
    await lead.save()
  }

  // Lógica simples para gerar o escopo baseado na dor
  let escopo = ""
  if (lead.painPoint.includes("lento")) {
    escopo = "Auditoria de Performance, Refatoração de Código Base, Otimização de Imagens e Setup de CDN/Cache."
  } else if (lead.painPoint.includes("conversão")) {
    escopo = "Análise de UX/UI, Redesign Focado em Conversão (CRO), Testes A/B e Implementação de Funil."
  } else if (lead.painPoint.includes("desatualizado")) {
    escopo = "Redesign Completo da Interface, Migração para Stack Moderna (Next.js), e Criação de Design System."
  } else if (lead.painPoint.includes("interno")) {
    escopo = "Mapeamento de Processos, Desenvolvimento de Dashboard Administrativo Customizado e Integração de APIs."
  } else {
    escopo = "Discovery do Projeto, Definição de Arquitetura, Design UI/UX e Desenvolvimento Full-Stack."
  }

  const propostaText = `Olá ${lead.name.split(" ")[0]}! Tudo bem?
  
Analisei as informações que você deixou no diagnóstico da *${lead.company}*. 

Vi que o maior desafio atual de vocês é *"${lead.painPoint}"* e que buscam uma solução dentro do orçamento de *${lead.budget}*.

Como Engenheiro de Produto, acredito que a melhor abordagem para o seu caso envolva:
✅ ${escopo}

Nesse cenário, consigo desenhar um plano de ação exato dentro do seu orçamento previsto. 
Podemos agendar um bate-papo rápido de 15 minutos amanhã para eu te mostrar como isso funcionaria na prática?

Fico no aguardo!`

  return (
    <div>
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-black mb-8">
        <ArrowLeft className="size-4" /> Voltar para leads
      </Link>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Dados do Cliente</h2>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-500">Nome</div>
                <div className="font-bold">{lead.name}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Empresa / Cargo</div>
                <div className="font-bold">{lead.company} • {lead.role}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">WhatsApp</div>
                <div className="font-bold text-blue-600">{lead.phone}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Desafio Principal</div>
                <div className="font-bold">{lead.painPoint}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Orçamento</div>
                <div className="font-bold">{lead.budget}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-400">Rascunho de Proposta</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm text-gray-800 whitespace-pre-wrap leading-relaxed border border-gray-200">
              {propostaText}
            </div>

            <div className="mt-6 flex justify-end">
              <a 
                href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(propostaText)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-transform flex items-center gap-2"
              >
                Enviar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
