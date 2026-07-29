import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Config from "@/models/Config"
import { requireAdmin } from "@/lib/api-auth"

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    await connectToDatabase()
    let config = await Config.findOne({})
    if (!config) {
      config = await Config.create({
        pixKey: "",
        hourlyRate: 150,
        whatsappPhone: "5511977070209",
        emailNotification: "contato@thomaseduardo.com.br",
      })
    }
    return NextResponse.json({ success: true, config })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erro ao buscar configurações" },
      { status: 500 },
    )
  }
}

export async function PUT(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    await connectToDatabase()
    const body = await req.json()
    const { pixKey, hourlyRate, whatsappPhone, emailNotification } = body

    let config = await Config.findOne({})
    if (!config) {
      config = new Config({})
    }

    config.pixKey = pixKey ?? config.pixKey
    config.hourlyRate =
      hourlyRate !== undefined ? Number(hourlyRate) : config.hourlyRate
    config.whatsappPhone = whatsappPhone ?? config.whatsappPhone
    config.emailNotification = emailNotification ?? config.emailNotification
    config.updatedAt = new Date()

    await config.save()

    return NextResponse.json({ success: true, config })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erro ao atualizar configurações" },
      { status: 500 },
    )
  }
}
