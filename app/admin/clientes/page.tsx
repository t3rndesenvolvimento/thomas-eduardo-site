import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { ExternalLink, Briefcase, FileText } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function ClientesPage() {
  await connectToDatabase()

  // Fetch only leads with approved proposals
  const clientes = await Lead.find({ "proposal.status": "aprovada" })
    .sort({ "proposal.signature.date": -1 })
    .lean()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Clientes & Projetos</h1>
        <p className="text-sm text-neutral-400 mt-1">
          Projetos ativos e histórico de clientes que aprovaram propostas.
        </p>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
        {clientes.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white/[0.04]">
              <Briefcase className="size-5 text-neutral-400" />
            </div>
            <p className="text-sm font-medium text-neutral-300">Nenhum cliente ativo ainda</p>
            <p className="mt-1 text-[13px] text-neutral-500 max-w-sm">
              Quando um lead assinar e aprovar uma proposta, ele aparecerá aqui automaticamente.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-neutral-400">
                  <th className="px-5 py-4 font-medium">Cliente</th>
                  <th className="px-5 py-4 font-medium">Projeto</th>
                  <th className="px-5 py-4 font-medium">Valor</th>
                  <th className="px-5 py-4 font-medium">Data de Aprovação</th>
                  <th className="px-5 py-4 font-medium text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente: any) => (
                  <tr
                    key={cliente._id.toString()}
                    className="border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] last:border-0"
                  >
                    <td className="px-5 py-4">
                      <div className="font-medium text-white">{cliente.name}</div>
                      <div className="text-[13px] text-neutral-500">{cliente.company || cliente.email}</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="text-neutral-300">{cliente.proposal.projectTitle}</div>
                      <div className="text-[12px] font-mono text-emerald-400/70 mt-1 uppercase tracking-wider">
                        {cliente.proposal.estimatedWeeks} semanas
                      </div>
                    </td>
                    <td className="px-5 py-4 font-medium text-neutral-200">
                      {cliente.proposal.totalValue}
                    </td>
                    <td className="px-5 py-4 text-neutral-400">
                      {cliente.proposal.signature?.date 
                        ? new Date(cliente.proposal.signature.date).toLocaleDateString("pt-BR")
                        : "—"}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={`/proposta/${cliente._id}`}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                      >
                        <FileText className="size-3.5" /> Proposta
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
