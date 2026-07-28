import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { Wallet, TrendingUp, DollarSign } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function FinanceiroPage() {
  await connectToDatabase()

  // Fetch all leads with proposals to calculate stats
  const leads = await Lead.find({ "proposal.totalValue": { $exists: true } }).lean()

  let totalPrevisto = 0
  let totalRecebido = 0 // 50% of approved
  let totalPendente = 0 // remaining 50% of approved
  let emNegociacao = 0 // total value of pending proposals

  leads.forEach((lead: any) => {
    const p = lead.proposal
    if (!p || !p.totalValue) return

    // Parse the totalValue string to a number (e.g. "R$ 3.500" -> 3500)
    const valString = p.totalValue.replace(/[R$\s.]/g, "").replace(",", ".")
    const value = parseFloat(valString) || 0

    if (p.status === "aprovada") {
      totalPrevisto += value
      totalRecebido += value / 2 // Assumes 50% upfront
      totalPendente += value / 2
    } else {
      emNegociacao += value
    }
  })

  function formatCurrency(val: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(val)
  }

  return (
    <div className="space-y-6">
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
          icon={FileTextIcon}
        />
      </div>

      <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-white/[0.04]">
          <TrendingUp className="size-5 text-neutral-400" />
        </div>
        <h3 className="font-medium text-white">Fluxo de Caixa Detalhado</h3>
        <p className="mt-1 text-sm text-neutral-500 max-w-md mx-auto">
          No futuro, este painel exibirá gráficos detalhados e controle de recebimentos por mês, ajudando a prever a entrada exata do saldo remanescente das entregas.
        </p>
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

function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}
