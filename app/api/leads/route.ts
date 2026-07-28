import { NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, role, service, painPoint, budget } = body

    if (!name || !email || !phone || !company || !role || !service || !painPoint || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await connectToDatabase()

    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      role,
      service,
      painPoint,
      budget,
    })

    // Enviar e-mail de proposta com Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Thomas Eduardo <contato@thomaseduardo.com.br>",
          to: email,
          subject: `Sua proposta personalizada para ${service}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              <h2 style="color: #000;">Olá ${name},</h2>
              <p>Obrigado por realizar o diagnóstico da <strong>${company}</strong>!</p>
              <p>Com base nas suas respostas, vejo que o seu principal foco agora é <strong>${service}</strong> para resolver o desafio: <em>"${painPoint}"</em>.</p>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">O próximo passo</h3>
                <p>Nossa estimativa inicial para projetos de ${service} na faixa de orçamento de <strong>${budget}</strong> envolve as seguintes etapas:</p>
                <ul>
                  <li>Mapeamento detalhado e Arquitetura</li>
                  <li>Desenvolvimento e Validação</li>
                  <li>Implantação e Otimização</li>
                </ul>
                <p>Para montarmos um plano de ação exato, precisamos fazer uma rápida reunião de alinhamento.</p>
              </div>

              <a href="https://wa.me/5511977070209" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px;">Agendar Alinhamento via WhatsApp</a>
              
              <p style="margin-top: 30px; font-size: 14px; color: #666;">
                Abraço,<br>
                <strong>Thomas Eduardo</strong><br>
                Software Engineer
              </p>
            </div>
          `
        })
      } catch (emailError) {
        console.error("Erro ao enviar email:", emailError)
        // Não falha a request se o email der erro
      }
    }

    return NextResponse.json({ success: true, lead }, { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectToDatabase()
    const leads = await Lead.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, leads }, { status: 200 })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
