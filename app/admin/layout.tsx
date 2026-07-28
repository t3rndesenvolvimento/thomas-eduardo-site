"use client"

import { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ExternalLink,
  Users,
  Briefcase,
  Wallet,
  Settings,
  ChevronRight,
} from "lucide-react"

function SidebarLink({
  href,
  icon: Icon,
  label,
  active = false,
}: {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors ${
        active
          ? "bg-white/[0.08] text-white"
          : "text-neutral-400 hover:bg-white/[0.04] hover:text-neutral-200"
      }`}
    >
      <Icon className="size-4 shrink-0" />
      {label}
    </Link>
  )
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-[#09090b] text-white font-sans overflow-hidden">
      {/* ─── Sidebar ─────────────────────────────────────────────── */}
      <aside className="hidden lg:flex w-[260px] flex-col border-r border-white/[0.06] bg-[#09090b]">
        {/* Logo */}
        <div className="flex h-14 items-center gap-2.5 border-b border-white/[0.06] px-5">
          <Image
            src="/logo-mark.png"
            alt="Logo"
            width={22}
            height={22}
            className="rounded"
          />
          <span className="text-sm font-bold tracking-tight">Painel</span>
          <span className="ml-auto rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Admin
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-600">
            Operação
          </p>
          <SidebarLink href="/admin" icon={LayoutDashboard} label="Caixa de Entrada (Leads)" active={pathname === "/admin"} />
          <SidebarLink href="/admin/clientes" icon={Briefcase} label="Clientes & Projetos" active={pathname?.startsWith("/admin/clientes")} />
          
          <p className="mb-2 mt-6 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-600">
            Gestão
          </p>
          <SidebarLink href="/admin/financeiro" icon={Wallet} label="Financeiro" active={pathname?.startsWith("/admin/financeiro")} />
          <SidebarLink href="/admin/config" icon={Settings} label="Configurações" active={pathname?.startsWith("/admin/config")} />
        </nav>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-3 py-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-neutral-500 transition-colors hover:bg-white/[0.04] hover:text-neutral-300"
          >
            <ExternalLink className="size-4" />
            Ver site
            <ChevronRight className="ml-auto size-3.5 opacity-40" />
          </Link>
        </div>
      </aside>

      {/* ─── Main ────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Top Bar */}
        <header className="flex h-14 items-center gap-3 border-b border-white/[0.06] px-4 lg:px-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 lg:hidden">
            <Image src="/logo-mark.png" alt="Logo" width={20} height={20} className="rounded" />
            <span className="text-sm font-bold tracking-tight">Painel</span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
            >
              <ExternalLink className="size-3.5" /> Ver site
            </Link>
            <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  )
}
