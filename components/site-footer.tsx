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
    <footer className="border-t border-white/10 bg-canvas py-10">
      <div className="site-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-neutral-500">
          (c) {new Date().getFullYear()} Thomas Eduardo
        </p>
        <div className="flex items-center gap-5">
          <Link href="/projetos" className="text-xs text-neutral-500 hover:text-brand">
            Projetos
          </Link>
          <Link href="/sobre" className="text-xs text-neutral-500 hover:text-brand">
            Sobre
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
    </footer>
  )
}
