export const dynamic = "force-dynamic"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import Link from "next/link"
import { ArrowLeft, User, Building, Phone, Mail, Target, Wallet, Briefcase } from "lucide-react"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ProposalForm } from "./proposal-form"

export default async function PropostaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await connectToDatabase()
  const { id } = await params

  let lead = null
  try {
    lead = await Lead.findById(id).lean()
  } catch {
    return notFound()
  }
  if (!lead) return notFound()

  // Serialize for client component
  const serializedLead = {
    _id: (lead as any)._id.toString(),
    name: (lead as any).name ?? "",
    company: (lead as any).company ?? "",
    phone: (lead as any).phone ?? "",
    email: (lead as any).email ?? "",
    painPoint: (lead as any).painPoint ?? "",
    budget: (lead as any).budget ?? "",
    service: (lead as any).service ?? "",
    role: (lead as any).role ?? "",
    proposal: (lead as any).proposal ?? null,
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* ─── Header ──────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[12px] font-medium text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft className="size-3.5" /> Voltar
        </Link>
        <div className="flex-1" />
        <span className="text-[11px] text-neutral-600">
          Lead criado em{" "}
          {format(new Date((lead as any).createdAt), "dd MMM yyyy, HH:mm", {
            locale: ptBR,
          })}
        </span>
      </div>

      {/* ─── Lead Summary ────────────────────────────────────── */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
          <InfoPill icon={User} label="Nome" value={(lead as any).name} />
          <InfoPill icon={Building} label="Empresa" value={(lead as any).company} />
          <InfoPill icon={Phone} label="Telefone" value={(lead as any).phone} accent="text-emerald-400" />
          <InfoPill icon={Mail} label="E-mail" value={(lead as any).email} accent="text-blue-400" />
          <InfoPill icon={Briefcase} label="Serviço" value={(lead as any).service} />
          <InfoPill icon={Target} label="Desafio" value={(lead as any).painPoint} />
          <InfoPill icon={Wallet} label="Orçamento" value={(lead as any).budget} />
        </div>
      </div>

      {/* ─── Proposal Form ───────────────────────────────────── */}
      <ProposalForm lead={serializedLead} />
    </div>
  )
}

function InfoPill({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType
  label: string
  value: string
  accent?: string
}) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <Icon className="size-3.5 shrink-0 text-neutral-600" />
      <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-neutral-600">
        {label}:
      </span>
      <span
        className={`text-[13px] font-medium truncate ${accent ?? "text-neutral-300"}`}
      >
        {value || "—"}
      </span>
    </div>
  )
}
