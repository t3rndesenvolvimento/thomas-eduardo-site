"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { PageLoader } from "@/components/ui/page-loader"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "sileo"
import { I18nProvider } from "@/lib/i18n/context"

/**
 * Shell component that conditionally renders the site chrome
 * (nav, footer, cursor, whatsapp, etc.) based on the current route.
 *
 * Routes starting with /admin or /proposta/ get a clean, chrome-free layout.
 */
export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isChromeFree =
    pathname.startsWith("/admin") || pathname.startsWith("/proposta/")

  // On chrome-free routes the PageLoader component is absent,
  // so we must remove the loader classes ourselves to unblock the page.
  useEffect(() => {
    if (isChromeFree) {
      document.documentElement.classList.remove(
        "loader-boot",
        "loader-active",
      )
    }
  }, [isChromeFree])

  if (isChromeFree) {
    return (
      <I18nProvider>
        <Toaster position="top-right" theme="dark" />
        {children}
      </I18nProvider>
    )
  }

  return (
    <I18nProvider>
      <SmoothScroll>
        <PageLoader />
        <CustomCursor />
        <Toaster position="top-right" theme="dark" />
        <SiteNav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <FloatingWhatsApp />
        <SiteFooter />
      </SmoothScroll>
    </I18nProvider>
  )
}
