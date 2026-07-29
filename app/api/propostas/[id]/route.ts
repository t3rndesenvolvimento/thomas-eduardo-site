import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { requireAdmin } from "@/lib/api-auth"

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    await connectToDatabase()
    const { id } = await params
    const body = await req.json()

    const lead = await Lead.findById(id)
    if (!lead) {
      return NextResponse.json({ error: "Lead não encontrado" }, { status: 404 })
    }

    await Lead.updateOne(
      { _id: id },
      {
        $set: {
          proposal: body.proposal,
          internalNotes:
            body.internalNotes !== undefined
              ? body.internalNotes
              : lead.internalNotes,
          status: "proposta",
        },
      },
    )

    return NextResponse.json({ success: true, link: `/proposta/${id}` })
  } catch (error: any) {
    console.error("Error saving proposal:", error)
    return NextResponse.json(
      { error: error.message || "Erro ao salvar proposta" },
      { status: 500 },
    )
  }
}
