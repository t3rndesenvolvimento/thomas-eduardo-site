import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import {
  Users,
  FileText,
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp,
  Phone,
} from "lucide-react"

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

const STATUS_STYLES: Record<string, string> = {
  novo: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  contatado: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  proposta: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
}

function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status] ?? "border-neutral-700 bg-neutral-800 text-neutral-400"
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${style}`}
    >
      {status === "novo" && (
        <span className="size-1.5 animate-pulse rounded-full bg-blue-400" />
      )}
      {status}
    </span>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function AdminPage() {
  await connectToDatabase()
  const leads = await Lead.find({}).sort({ createdAt: -1 }).lean()

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

      {/* ─── Leads Table ────────────────────────────────────────── */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <h2 className="text-sm font-bold">Leads Recentes</h2>
          <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {total} total
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/[0.04] text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-600">
                <th className="px-5 py-3">Data</th>
                <th className="px-5 py-3">Contato</th>
                <th className="px-5 py-3">Serviço</th>
                <th className="px-5 py-3">Orçamento</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {leads.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-16 text-center text-sm text-neutral-600"
                  >
                    Nenhum lead capturado ainda.
                  </td>
                </tr>
              )}
              {leads.map((lead: any) => (
                <tr
                  key={lead._id.toString()}
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-[13px] font-medium text-neutral-300">
                      {format(new Date(lead.createdAt), "dd MMM", {
                        locale: ptBR,
                      })}
                    </div>
                    <div className="text-[11px] text-neutral-600">
                      {format(new Date(lead.createdAt), "HH:mm")}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-[13px] font-semibold text-white">
                      {lead.name}
                    </div>
                    <div className="mt-0.5 text-[11px] text-neutral-500">
                      {lead.company}
                      {lead.role ? ` · ${lead.role}` : ""}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-neutral-400">
                      {lead.service || lead.painPoint?.slice(0, 30) || "—"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-mono text-[12px] text-neutral-400">
                      {lead.budget || "—"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/admin/propostas/${lead._id.toString()}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-[11px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {lead.status === "novo"
                        ? "Criar Proposta"
                        : "Ver Proposta"}
                      <ArrowRight className="size-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card List */}
        <div className="md:hidden divide-y divide-white/[0.04]">
          {leads.length === 0 && (
            <div className="px-5 py-16 text-center text-sm text-neutral-600">
              Nenhum lead capturado ainda.
            </div>
          )}
          {leads.map((lead: any) => (
            <Link
              key={lead._id.toString()}
              href={`/admin/propostas/${lead._id.toString()}`}
              className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02] active:bg-white/[0.04]"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-white truncate">
                    {lead.name}
                  </span>
                  <StatusBadge status={lead.status} />
                </div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-500">
                  <span>{lead.company}</span>
                  <span>·</span>
                  <span className="font-mono">{lead.budget || "—"}</span>
                </div>
                <div className="mt-1 text-[10px] text-neutral-600">
                  {format(new Date(lead.createdAt), "dd MMM yyyy, HH:mm", {
                    locale: ptBR,
                  })}
                </div>
              </div>
              <ArrowRight className="size-4 shrink-0 text-neutral-600" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
