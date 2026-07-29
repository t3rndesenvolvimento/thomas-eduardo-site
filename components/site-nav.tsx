"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, ChevronRight, Globe } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import { motion, AnimatePresence } from "framer-motion"
import { CONTACT } from "@/lib/data"

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
    { href: "/freelance", label: t.nav.contact, index: "05" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
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

  const darkNav =
    pathname === "/diagnostico" ||
    pathname === "/freelance" ||
    pathname === "/processo" ||
    pathname?.startsWith("/projetos")

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <div className="rounded-full bg-black text-white px-3 py-1.5 border border-white/15 shadow-md backdrop-blur-md">
          <Logo size={24} className="gap-2" />
        </div>

        <nav
          className={cn(
            "absolute left-1/2 top-3 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border px-1.5 py-1 transition-all duration-300 sm:top-4 md:flex",
            darkNav || scrolled
              ? "border-white/10 bg-black/85 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-white/10 bg-black/40 backdrop-blur-md",
          )}
        >
          {LINKS.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[10px] uppercase font-semibold tracking-[0.12em] transition-colors",
                  active
                    ? "bg-white text-black"
                    : "text-white/65 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            )
          })}

          <button
            type="button"
            onClick={toggleLocale}
            className="ml-1 rounded-full border border-white/15 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-all hover:border-white/30 hover:text-white"
            aria-label="Toggle language"
          >
            {locale === "pt-BR" ? "EN" : "PT"}
          </button>
        </nav>

        <div className="hidden w-[100px] md:block" aria-hidden />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border md:hidden transition-colors shadow-lg",
            "border-white/15 bg-black/80 backdrop-blur-xl text-white",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-[#08090d]/95 backdrop-blur-2xl text-white md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
              <Logo size={24} className="gap-2" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                aria-label="Fechar menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 px-6 py-8 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-2">
                {LINKS.map((l, index) => {
                  const active = pathname === l.href
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-2xl px-5 py-4 border transition-all",
                          active
                            ? "bg-white text-black border-white"
                            : "bg-white/[0.03] border-white/10 text-white",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold opacity-50">
                            {l.index}
                          </span>
                          <span className="text-lg font-display font-semibold">
                            {l.label}
                          </span>
                        </div>
                        <ChevronRight className="size-5 opacity-40" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black"
                >
                  LinkedIn
                </Link>
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 py-3 text-xs font-semibold text-white/80"
                >
                  <Globe className="size-3.5" />
                  {locale === "pt-BR" ? "English" : "Português"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
