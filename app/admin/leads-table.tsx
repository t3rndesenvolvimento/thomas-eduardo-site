"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Search, ArrowRight } from "lucide-react"

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

export function LeadsTable({ initialLeads }: { initialLeads: any[] }) {
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("todos")

  const filtered = initialLeads.filter((lead) => {
    const matchesSearch =
      lead.name?.toLowerCase().includes(query.toLowerCase()) ||
      lead.company?.toLowerCase().includes(query.toLowerCase()) ||
      lead.email?.toLowerCase().includes(query.toLowerCase()) ||
      lead.service?.toLowerCase().includes(query.toLowerCase())

    const matchesStatus =
      statusFilter === "todos" ? true : lead.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden space-y-0">
      {/* ─── Header & Filters ────────────────────────────────────── */}
      <div className="flex flex-col gap-4 border-b border-white/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-bold">Leads Recentes</h2>
          <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {filtered.length} de {initialLeads.length}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome, empresa..."
              className="w-full sm:w-56 rounded-lg border border-white/[0.08] bg-white/[0.03] pl-9 pr-3 py-1.5 text-[12px] text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto rounded-lg border border-white/[0.06] bg-white/[0.02] p-1">
            {["todos", "novo", "proposta"].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                  statusFilter === st
                    ? "bg-white/10 text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {st === "todos" ? "Todos" : st}
              </button>
            ))}
          </div>
        </div>
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
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-16 text-center text-sm text-neutral-600"
                >
                  Nenhum lead encontrado.
                </td>
              </tr>
            )}
            {filtered.map((lead: any) => (
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
                  {lead.internalNotes && (
                    <div className="mt-1 text-[10px] text-amber-400/80 italic truncate max-w-[200px]">
                      Nota: {lead.internalNotes}
                    </div>
                  )}
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
        {filtered.length === 0 && (
          <div className="px-5 py-16 text-center text-sm text-neutral-600">
            Nenhum lead encontrado.
          </div>
        )}
        {filtered.map((lead: any) => (
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
  )
}
