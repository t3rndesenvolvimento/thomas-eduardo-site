import { NextRequest, NextResponse } from "next/server"

/**
 * Protects sensitive admin APIs.
 * Accepts:
 * 1) Cookie admin-auth=true (set after Firebase magic-link login)
 * 2) Authorization: Bearer <ADMIN_API_SECRET> for scripts/tools
 */
export function requireAdmin(req: NextRequest): NextResponse | null {
  const cookie = req.cookies.get("admin-auth")?.value
  if (cookie === "true") return null

  const secret = process.env.ADMIN_API_SECRET
  if (secret) {
    const auth = req.headers.get("authorization") || ""
    if (auth === `Bearer ${secret}`) return null
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}
