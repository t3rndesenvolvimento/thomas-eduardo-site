"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { CONTACT } from "@/lib/data"

export function SiteFooter() {
  const pathname = usePathname()

  if (
    pathname === "/linkbio" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/")
  )
    return null

  return (
    <footer className="border-t border-white/10 bg-canvas py-12">
      <div className="site-shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold text-white">Thomas Eduardo</p>
          <p className="mt-1 text-xs text-neutral-500">
            Full Stack / Product Engineer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/projetos" className="text-xs text-neutral-500 hover:text-brand">
            Work
          </Link>
          <Link href="/sobre" className="text-xs text-neutral-500 hover:text-brand">
            About
          </Link>
          <Link href="/processo" className="text-xs text-neutral-500 hover:text-brand">
            Process
          </Link>
          <Link href="/freelance" className="text-xs text-neutral-500 hover:text-brand">
            On demand
          </Link>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-brand"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-brand"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
      <div className="site-shell mt-8 border-t border-white/5 pt-6">
        <p className="text-[11px] text-neutral-600">
          (c) {new Date().getFullYear()} Thomas Eduardo · Code that ships.
        </p>
      </div>
    </footer>
  )
}
