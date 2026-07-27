import { ReactNode } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans">
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <Link href="/admin" className="font-bold tracking-tight text-xl hover:text-gray-700">
              Admin Dashboard
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black">
              Ver Site
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </div>
  )
}
