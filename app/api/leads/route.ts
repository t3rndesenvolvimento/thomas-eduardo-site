import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { Resend } from "resend"
import { requireAdmin } from "@/lib/api-auth"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim().toLowerCase()
    const phone = String(body.phone || "").trim()
    const company = String(body.company || "").trim()
    const role = String(body.role || "").trim()
    const service = String(body.service || "").trim()
    const painPoint = String(body.painPoint || "").trim()
    const budget = String(body.budget || "").trim()

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Nome inválido" }, { status: 400 })
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 })
    }
    if (!phone || phone.length < 8) {
      return NextResponse.json({ error: "Telefone inválido" }, { status: 400 })
    }

    await connectToDatabase()

    const lead = await Lead.create({
      name,
      email,
      phone,
      company: company || "Não informada",
      role: role || "Não informado",
      service: service || "Geral",
      painPoint: painPoint || "Não especificado",
      budget: budget || "A combinar",
    })

    if (resend) {
      try {
        await resend.emails.send({
          from: "Thomas Eduardo <contato@thomaseduardo.com.br>",
          to: email,
          subject: `Recebi seu briefing${service ? ` — ${service}` : ""}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              <h2 style="color: #000;">Olá ${name},</h2>
              <p>Obrigado pelo contato${company ? ` da <strong>${company}</strong>` : ""}.</p>
              <p>Vou analisar o que você descreveu e retorno em até 24 horas úteis com os próximos passos.</p>
              <p style="margin-top: 24px;">
                <a href="https://wa.me/5511977070209" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px;">Falar no WhatsApp</a>
              </p>
              <p style="margin-top: 30px; font-size: 14px; color: #666;">
                Abraço,<br>
                <strong>Thomas Eduardo</strong><br>
                Full Stack / Product Engineer
              </p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Erro ao enviar email:", emailError)
      }
    }

    return NextResponse.json(
      { success: true, id: lead._id?.toString?.() ?? true },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    await connectToDatabase()
    const leads = await Lead.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, leads }, { status: 200 })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
