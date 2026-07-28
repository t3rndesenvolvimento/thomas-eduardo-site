import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { Wallet, TrendingUp, DollarSign, FileText } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function FinanceiroPage() {
  await connectToDatabase()

  // Fetch all leads with proposals
  const leads = await Lead.find({ "proposal.totalValue": { $exists: true } }).sort({ createdAt: -1 }).lean()

  let totalPrevisto = 0
  let totalRecebido = 0 
  let totalPendente = 0 
  let emNegociacao = 0 

  const tableData: any[] = []

  leads.forEach((lead: any) => {
    const p = lead.proposal
    if (!p || !p.totalValue) return

    // Parse string value (R$ 3.500) to number
    const valString = p.totalValue.replace(/[R$\s.]/g, "").replace(",", ".")
    const value = parseFloat(valString) || 0

    let recebido = 0
    let aReceber = 0

    if (p.status === "aprovada") {
      totalPrevisto += value
      recebido = value / 2 // Assumes 50% upfront
      aReceber = value / 2
      totalRecebido += recebido
      totalPendente += aReceber
    } else {
      emNegociacao += value
    }

    tableData.push({
      _id: lead._id.toString(),
      clientName: lead.name,
      company: lead.company,
      projectTitle: p.projectTitle || "Sem título",
      totalValue: value,
      recebido,
      aReceber,
      status: p.status || "pending",
    })
  })

  function formatCurrency(val: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(val)
  }

  // Calculate percentages for the progress bar
  const pctRecebido = totalPrevisto > 0 ? (totalRecebido / totalPrevisto) * 100 : 0
  const pctPendente = totalPrevisto > 0 ? (totalPendente / totalPrevisto) * 100 : 0

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Financeiro</h1>
        <p className="text-sm text-neutral-400 mt-1">
          Visão geral do faturamento de projetos ativos e em negociação.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Recebido (Sinal 50%)"
          value={formatCurrency(totalRecebido)}
          icon={Wallet}
          highlight
        />
        <MetricCard
          title="Pendente (Entrega)"
          value={formatCurrency(totalPendente)}
          icon={DollarSign}
        />
        <MetricCard
          title="Faturamento Total"
          value={formatCurrency(totalPrevisto)}
          icon={TrendingUp}
        />
        <MetricCard
          title="Em Negociação"
          value={formatCurrency(emNegociacao)}
          icon={FileText}
        />
      </div>

      {/* Progress Bar Chart */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
        <h3 className="font-medium text-white mb-4">Composição do Faturamento Aprovado</h3>
        <div className="h-4 w-full rounded-full bg-white/[0.04] overflow-hidden flex">
          {totalPrevisto > 0 ? (
            <>
              <div 
                className="bg-emerald-500 h-full transition-all duration-1000" 
                style={{ width: `${pctRecebido}%` }}
                title={`Recebido: ${formatCurrency(totalRecebido)}`}
              />
              <div 
                className="bg-emerald-500/30 h-full transition-all duration-1000" 
                style={{ width: `${pctPendente}%` }}
                title={`Pendente: ${formatCurrency(totalPendente)}`}
              />
            </>
          ) : (
            <div className="w-full h-full bg-neutral-800" />
          )}
        </div>
        <div className="mt-4 flex items-center gap-6 text-[12px] font-medium">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="size-2.5 rounded-full bg-emerald-500" />
            Recebido ({pctRecebido.toFixed(0)}%)
          </div>
          <div className="flex items-center gap-2 text-emerald-500/50">
            <span className="size-2.5 rounded-full bg-emerald-500/30" />
            A Receber ({pctPendente.toFixed(0)}%)
          </div>
        </div>
      </div>

      {/* Lançamentos Table */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <h2 className="text-sm font-bold">Propostas e Lançamentos</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/[0.04] text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-600">
                <th className="px-5 py-3">Cliente / Projeto</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Valor Total</th>
                <th className="px-5 py-3 text-emerald-400">Recebido</th>
                <th className="px-5 py-3 text-emerald-500/50">A Receber</th>
                <th className="px-5 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-sm text-neutral-600">
                    Nenhuma proposta enviada ainda.
                  </td>
                </tr>
              ) : (
                tableData.map((row) => (
                  <tr key={row._id} className="transition-colors hover:bg-white/[0.02]">
                    <td className="px-5 py-4">
                      <div className="text-[13px] font-semibold text-white">{row.clientName}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 truncate max-w-[200px]">
                        {row.projectTitle}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      {row.status === "aprovada" ? (
                        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          Aprovada
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                          Pendente
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 font-mono text-[12px] text-neutral-300">
                      {formatCurrency(row.totalValue)}
                    </td>
                    <td className="px-5 py-4 font-mono text-[12px] text-emerald-400">
                      {row.status === "aprovada" ? formatCurrency(row.recebido) : "—"}
                    </td>
                    <td className="px-5 py-4 font-mono text-[12px] text-emerald-500/50">
                      {row.status === "aprovada" ? formatCurrency(row.aReceber) : "—"}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link 
                        href={`/admin/propostas/${row._id}`}
                        className="inline-flex text-[11px] font-bold text-neutral-400 hover:text-white transition-colors"
                      >
                        Ver Proposta
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function MetricCard({
  title,
  value,
  icon: Icon,
  highlight = false,
}: {
  title: string
  value: string
  icon: any
  highlight?: boolean
}) {
  return (
    <div className={`rounded-xl border p-5 ${highlight ? 'border-emerald-500/30 bg-emerald-500/[0.05]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`size-4 ${highlight ? 'text-emerald-400' : 'text-neutral-400'}`} />
        <h3 className={`text-xs font-bold uppercase tracking-wider ${highlight ? 'text-emerald-500/80' : 'text-neutral-500'}`}>
          {title}
        </h3>
      </div>
      <div className={`text-2xl font-bold tracking-tight ${highlight ? 'text-emerald-400' : 'text-white'}`}>
        {value}
      </div>
    </div>
  )
}
