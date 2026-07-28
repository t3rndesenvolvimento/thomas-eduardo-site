import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import {
  Users,
  FileText,
  Sparkles,
  Clock,
} from "lucide-react"
import { LeadsTable } from "./leads-table"

export const dynamic = "force-dynamic"

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function MetricCard({
  label,
  value,
  icon: Icon,
  accent,
  sub,
}: {
  label: string
  value: number | string
  icon: React.ElementType
  accent?: string
  sub?: string
}) {
  const color = accent ?? "text-white"
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-500">
          {label}
        </span>
        <Icon className={`size-4 ${color} opacity-60`} />
      </div>
      <div className={`mt-3 text-3xl font-bold tracking-tight ${color}`}>
        {value}
      </div>
      {sub && (
        <p className="mt-1 text-[11px] text-neutral-600">{sub}</p>
      )}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function AdminPage() {
  await connectToDatabase()
  const rawLeads = await Lead.find({}).sort({ createdAt: -1 }).lean()

  const leads = rawLeads.map((l: any) => ({
    ...l,
    _id: l._id.toString(),
    createdAt: l.createdAt ? l.createdAt.toISOString() : new Date().toISOString(),
  }))

  const total = leads.length
  const novos = leads.filter((l) => l.status === "novo").length
  const propostas = leads.filter((l) => l.status === "proposta").length

  // Lead mais recente
  const latest = leads[0]
  const latestDate = latest
    ? format(new Date(latest.createdAt), "dd MMM, HH:mm", { locale: ptBR })
    : "—"

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* ─── Header ─────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Visão Geral</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Acompanhe leads, propostas e performance comercial.
        </p>
      </div>

      {/* ─── Metric Cards ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Total de Leads" value={total} icon={Users} />
        <MetricCard
          label="Novos"
          value={novos}
          icon={Sparkles}
          accent="text-blue-400"
          sub="Aguardando contato"
        />
        <MetricCard
          label="Propostas"
          value={propostas}
          icon={FileText}
          accent="text-emerald-400"
          sub="Propostas enviadas"
        />
        <MetricCard
          label="Último Lead"
          value={latestDate}
          icon={Clock}
          accent="text-neutral-300"
        />
      </div>

      {/* ─── Interactive Leads Table with Search & Filters ──────── */}
      <LeadsTable initialLeads={leads} />
    </div>
  )
}
