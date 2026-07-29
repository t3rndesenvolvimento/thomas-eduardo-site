"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { CONTACT } from "@/lib/data"
import { useI18n } from "@/lib/i18n/context"

export function SiteFooter() {
  const pathname = usePathname()
  const { t } = useI18n()

  if (
    pathname === "/linkbio" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/")
  )
    return null

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/projetos", label: t.nav.projects },
    { href: "/processo", label: t.nav.process },
    { href: "/freelance", label: t.nav.contact },
  ]

  return (
    <footer className="relative z-40 mt-auto border-t border-white/[0.06] bg-canvas pt-12 pb-28 sm:pb-12">
      <div className="site-shell">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-zinc-50">
              Thomas Eduardo
            </p>
            <p className="mt-2 text-sm text-zinc-500 font-light max-w-xs">
              Full Stack / Product Engineer · São Paulo
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-zinc-600">
              {t.footer.available}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 content-start">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-zinc-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {CONTACT.email}
            </a>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-200 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-200 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="font-mono text-[10px] text-zinc-600">
            © {new Date().getFullYear()} Thomas Eduardo · São Paulo, BR
          </p>
          <p className="font-mono text-[10px] text-zinc-700">
            Next.js · TypeScript · Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
