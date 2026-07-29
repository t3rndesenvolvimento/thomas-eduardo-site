"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import { AnimatePresence, motion } from "framer-motion"
import { CONTACT } from "@/lib/data"

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { locale, toggleLocale, t } = useI18n()

  const LINKS = [
    { href: "/sobre", label: t.nav.about },
    { href: "/projetos", label: t.nav.projects },
    { href: "/processo", label: t.nav.process },
    { href: "/freelance", label: t.nav.contact },
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open
          ? "bg-canvas/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="site-shell flex items-center justify-between py-3.5 sm:py-5">
        <Logo size={20} className="gap-2" />

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-brand" : "text-neutral-400 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            )
          })}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-brand px-4 py-1.5 text-sm text-brand hover:bg-brand/10"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={toggleLocale}
            className="text-xs font-mono text-neutral-500 hover:text-white"
          >
            {locale === "pt-BR" ? "EN" : "PT"}
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex size-11 items-center justify-center text-white"
          aria-label={open ? "Fechar" : "Menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-canvas"
          >
            <div className="site-shell flex flex-col gap-1 py-4 pb-8">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-12 items-center text-lg font-display font-semibold",
                    pathname === l.href ? "text-brand" : "text-white",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded border border-brand text-brand"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={toggleLocale}
                className="mt-2 min-h-11 text-left text-sm font-mono text-neutral-500"
              >
                {locale === "pt-BR" ? "English" : "Português"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
