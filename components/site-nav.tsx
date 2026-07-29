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
        scrolled ? "bg-canvas/90 backdrop-blur-md border-b border-white/5" : "bg-transparent",
      )}
    >
      <div className="site-shell flex items-center justify-between py-4 sm:py-5">
        <Logo size={22} className="gap-2" />

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
          className="md:hidden text-white p-2"
          aria-label={open ? "Fechar" : "Menu"}
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
            className="fixed inset-0 top-[57px] z-40 bg-canvas md:hidden px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-2xl font-display font-bold",
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
                className="mt-4 inline-flex w-fit rounded border border-brand px-5 py-2.5 text-brand"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
