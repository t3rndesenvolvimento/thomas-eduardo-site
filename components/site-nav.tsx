"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import { AnimatePresence, motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CloseIcon, MenuIcon } from "@/components/brand-icons"

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
          ? "border-b border-white/5 bg-canvas/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="site-shell flex items-center justify-between py-3.5 sm:py-5">
        <Logo size={20} className="gap-2" />

        <nav className="hidden items-center gap-8 md:flex">
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
            className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-black hover:brightness-110"
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
          className="inline-flex size-11 items-center justify-center text-white md:hidden"
          aria-label={open ? "Close" : "Menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/5 bg-canvas md:hidden"
          >
            <div className="site-shell flex flex-col gap-1 py-4 pb-8">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-12 items-center font-display text-lg font-bold",
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
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand text-sm font-semibold text-black"
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
