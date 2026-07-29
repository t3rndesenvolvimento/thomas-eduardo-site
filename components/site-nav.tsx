"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, ArrowRight, Sparkles, MessageCircle, Globe, ChevronRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { locale, toggleLocale, t } = useI18n()

  const LINKS = [
    { href: "/", label: t.nav.home, index: "01" },
    { href: "/sobre", label: t.nav.about, index: "02" },
    { href: "/projetos", label: t.nav.projects, index: "03" },
    { href: "/processo", label: t.nav.process, index: "04" },
  ]

  const WHATSAPP =
    "https://wa.me/5511977070209?text=Ol%C3%A1%20Thomas%2C%20quero%20falar%20sobre%20um%20projeto."

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (
    pathname === "/linkbio" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/")
  )
    return null

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4",
        )}
      >
        {/* Logo - left */}
        <div
          className={cn(
            "rounded-full transition-all duration-300 bg-black text-white px-3 py-1.5 border border-white/15 shadow-md backdrop-blur-md",
          )}
        >
          <Logo size={24} className="gap-2" />
        </div>

        {/* Compact centered pill nav - desktop */}
        <nav
          className={cn(
            "absolute left-1/2 top-3 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border px-1.5 py-1 transition-all duration-300 sm:top-4 md:flex",
            pathname === "/diagnostico"
              ? "border-black/20 bg-black text-white shadow-xl"
              : scrolled
                ? "border-white/10 bg-black/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                : "border-white/10 bg-black/40 backdrop-blur-md",
          )}
        >
          {LINKS.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[10px] uppercase font-semibold tracking-[0.14em] transition-colors",
                  active
                    ? "bg-white text-black"
                    : "text-white/65 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            )
          })}

          {/* Language Toggle Desktop */}
          <button
            type="button"
            onClick={toggleLocale}
            className="ml-1 rounded-full border border-white/15 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-all hover:border-white/30 hover:text-white"
            aria-label="Toggle language"
          >
            {locale === "pt-BR" ? "EN" : "PT"}
          </button>
        </nav>

        {/* Spacer to balance logo width on desktop */}
        <div className="hidden w-[100px] md:block" aria-hidden />

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border md:hidden transition-colors shadow-lg",
            pathname === "/diagnostico"
              ? "border-white/20 bg-black text-white"
              : scrolled
                ? "border-white/15 bg-black/90 backdrop-blur-xl text-white"
                : "border-white/15 bg-black/60 backdrop-blur-md text-white",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Modern Redesigned Mobile Fullscreen Overlay Sheet - Dark Theme */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-[#08090d]/95 backdrop-blur-2xl text-white md:hidden overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
              <Logo size={24} className="gap-2" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
                aria-label="Fechar menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Navigation Body */}
            <div className="flex-1 px-6 py-8 flex flex-col justify-between gap-8">
              {/* Links List */}
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                  Navegação
                </p>
                {LINKS.map((l, index) => {
                  const active = pathname === l.href
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index + 0.05 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-200 border",
                          active
                            ? "bg-white text-black border-white shadow-xl"
                            : "bg-white/[0.03] border-white/10 text-white hover:border-white/20 hover:bg-white/[0.06]",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "font-mono text-xs font-bold",
                              active ? "text-black/60" : "text-white/60",
                            )}
                          >
                            {l.index}
                          </span>
                          <span className="text-xl font-display font-semibold tracking-tight">
                            {l.label}
                          </span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "size-5 transition-transform group-hover:translate-x-1",
                            active ? "text-black" : "text-white/40",
                          )}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTAs & Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col gap-3"
              >


                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  <Icon icon="mdi:whatsapp" className="size-5 text-white/80" />
                  WhatsApp Direto
                </a>
              </motion.div>

              {/* Utility Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/50"
              >
                <span className="font-mono text-[11px]">São Paulo, SP</span>

                {/* Language Switcher */}
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 transition-colors hover:border-white/30"
                >
                  <Globe className="size-3.5 text-white/80" />
                  {locale === "pt-BR" ? "🇧🇷 Português" : "🇺🇸 English"}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
