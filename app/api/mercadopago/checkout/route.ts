import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"

export async function POST(req: NextRequest) {
  try {
    const { proposalId, customAmount, title } = await req.json()

    await connectToDatabase()

    let lead = null
    if (proposalId) {
      lead = await Lead.findById(proposalId)
    }

    const token = process.env.MERCADO_PAGO_ACCESS_TOKEN
    if (!token) {
      return NextResponse.json(
        { error: "Token do Mercado Pago não configurado" },
        { status: 500 },
      )
    }

    let itemTitle = title || "Sinal do Projeto - Proposta Comercial"
    let unitPrice = 100 // default fallback

    if (customAmount && !isNaN(Number(customAmount)) && Number(customAmount) > 0) {
      unitPrice = Number(customAmount)
    } else if (lead?.proposal?.totalValue) {
      // Parse total value e calcula 50% para o sinal
      const parsed = parseFloat(
        lead.proposal.totalValue.replace(/[R$\s.]/g, "").replace(",", "."),
      )
      if (!isNaN(parsed) && parsed > 0) {
        unitPrice = parsed / 2 // Sinal de 50%
      }
    }

    if (lead?.name) {
      itemTitle = `Sinal do Projeto - ${lead.name} (${lead.company || "Cliente"})`
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thomaseduardo.com.br"
    const returnUrl = proposalId ? `${baseUrl}/proposta/${proposalId}` : baseUrl

    const preferenceBody: any = {
      items: [
        {
          id: proposalId || "servico-desenvolvimento",
          title: itemTitle,
          quantity: 1,
          currency_id: "BRL",
          unit_price: unitPrice,
        },
      ],
      payer: {
        name: lead?.name || "Cliente",
        email: lead?.email || "contato@cliente.com",
      },
      back_urls: {
        success: returnUrl,
        pending: returnUrl,
        failure: returnUrl,
      },
    }

    if (returnUrl.startsWith("https")) {
      preferenceBody.auto_return = "approved"
    }

    const mpRes = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferenceBody),
    })

    const mpData = await mpRes.json()

    if (!mpRes.ok) {
      console.error("Erro Mercado Pago API:", mpData)
      return NextResponse.json(
        { error: mpData.message || "Erro ao gerar checkout no Mercado Pago" },
        { status: 500 },
      )
    }

    // Save payment link directly on proposal if lead exists
    if (lead && proposalId) {
      await Lead.updateOne(
        { _id: proposalId },
        { $set: { "proposal.paymentLink": mpData.init_point } },
      )
    }

    return NextResponse.json({
      success: true,
      init_point: mpData.init_point,
      sandbox_init_point: mpData.sandbox_init_point,
    })
  } catch (error: any) {
    console.error("Erro ao gerar preferência de pagamento:", error)
    return NextResponse.json(
      { error: error.message || "Erro interno do servidor" },
      { status: 500 },
    )
  }
}
