export const dynamic = "force-dynamic"
import type { Metadata } from "next"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { getProposal } from "@/lib/proposals"
import { ProposalPortal } from "./portal"
import type { ProposalData } from "@/lib/proposals"

type Props = { params: Promise<{ cliente: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cliente } = await params

  // Try database first (MongoDB ObjectId is 24 hex chars)
  if (/^[a-f\d]{24}$/i.test(cliente)) {
    try {
      await connectToDatabase()
      const lead = await Lead.findById(cliente).lean()
      if (lead && (lead as any).proposal) {
        const p = (lead as any).proposal
        return {
          title: `Proposta - ${p.projectTitle}`,
          description: "Proposta comercial personalizada - documento privado.",
          robots: { index: false, follow: false },
        }
      }
    } catch {}
  }

  // Fallback to static proposals
  const proposal = getProposal(cliente)
  
  if (!proposal) {
    return {
      title: "Proposta não encontrada",
      description: "Documento indisponível.",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: `Proposta - ${proposal.projectTitle}`,
    description: "Proposta comercial personalizada - documento privado.",
    robots: { index: false, follow: false },
  }
}

export default async function PropostaClientePage({ params }: Props) {
  const { cliente } = await params

  // Try database first
  if (/^[a-f\d]{24}$/i.test(cliente)) {
    try {
      await connectToDatabase()
      const lead = await Lead.findById(cliente).lean()
      if (lead && (lead as any).proposal) {
        const p = (lead as any).proposal as ProposalData
        return <ProposalPortal proposal={p} proposalId={lead._id.toString()} />
      }
    } catch {}
  }

  // Fallback to static proposals
  const proposal = getProposal(cliente)

  if (!proposal) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">404</p>
          <h1 className="font-display text-3xl font-semibold text-foreground">Proposta não encontrada</h1>
          <p className="mt-3 text-muted-foreground">Este link pode ter expirado ou não existir.</p>
        </div>
      </div>
    )
  }

  return <ProposalPortal proposal={proposal} />
}
