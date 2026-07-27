import { NextResponse } from "next/server"
import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, company, role, painPoint, budget } = body

    if (!name || !phone || !company || !role || !painPoint || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await connectToDatabase()

    const lead = await Lead.create({
      name,
      phone,
      company,
      role,
      painPoint,
      budget,
    })

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
