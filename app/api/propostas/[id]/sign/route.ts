import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectToDatabase()
    const { id } = await params
    const body = await req.json()

    if (!body.signatureName) {
      return NextResponse.json({ error: "Nome da assinatura é obrigatório" }, { status: 400 })
    }

    const lead = await Lead.findById(id)
    if (!lead) {
      return NextResponse.json({ error: "Lead não encontrado" }, { status: 404 })
    }

    // Update the lead proposal status and signature
    await Lead.updateOne(
      { _id: id },
      {
        $set: {
          "proposal.status": "aprovada",
          "proposal.signature": {
            name: body.signatureName,
            date: new Date(),
          },
        },
      },
    )

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error signing proposal:", error)
    return NextResponse.json(
      { error: error.message || "Erro ao assinar proposta" },
      { status: 500 },
    )
  }
}
