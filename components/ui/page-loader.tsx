"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

const LOADER_DURATION_MS = 900
const SAFETY_TIMEOUT_MS = 2000
const EXIT_DURATION_MS = 500

function clearLoaderClasses() {
  if (typeof document === "undefined") return
  document.documentElement.classList.remove("loader-boot", "loader-active")
}

/**
 * Intro loader - monochrome, brand mark + progress.
 * Full-page wipe on exit. Respects prefers-reduced-motion.
 * Skipped on utility routes (/r redirects, linkbio, curriculo).
 *
 * Safety: never leaves the page stuck on a black screen.
 * - Hard timeout removes loader classes after SAFETY_TIMEOUT_MS
 * - Cleanup always runs on unmount
 * - CSS fallback in globals.css fades the boot cover even without JS
 */
export function PageLoader() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  const skip =
    pathname === "/linkbio" ||
    pathname === "/curriculo" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/") ||
    pathname?.startsWith("/proposta")

  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading")

  // Global safety net: never stay black longer than SAFETY_TIMEOUT_MS
  useEffect(() => {
    const safety = window.setTimeout(() => {
      clearLoaderClasses()
      setPhase("done")
    }, SAFETY_TIMEOUT_MS)

    return () => {
      window.clearTimeout(safety)
      clearLoaderClasses()
    }
  }, [])

  // Skip routes: only clean up boot classes (render already returns null)
  useEffect(() => {
    if (!skip) return
    clearLoaderClasses()
    setPhase("done")
  }, [skip])

  useEffect(() => {
    if (skip) return

    // CSS ::before cover can drop once React paints the real loader
    document.documentElement.classList.remove("loader-boot")
    document.documentElement.classList.add("loader-active")

    if (reduceMotion) {
      const t = window.setTimeout(() => {
        setProgress(100)
        setPhase("done")
        clearLoaderClasses()
      }, 80)
      return () => window.clearTimeout(t)
    }

    let raf = 0
    let start: number | null = null

    const tick = (now: number) => {
      if (start == null) start = now
      const t = Math.min(1, (now - start) / LOADER_DURATION_MS)
      // ease-out cubic
      const eased = 1 - (1 - t) ** 3
      setProgress(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setPhase("exit")
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearLoaderClasses()
    }
  }, [reduceMotion, skip])

  useEffect(() => {
    if (phase !== "exit") return
    const t = window.setTimeout(() => {
      setPhase("done")
      clearLoaderClasses()
    }, EXIT_DURATION_MS)
    return () => window.clearTimeout(t)
  }, [phase])

  if (skip || phase === "done") return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ y: 0 }}
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: EXIT_DURATION_MS / 1000,
        ease: [0.76, 0, 0.24, 1],
      }}
      aria-busy={phase === "loading"}
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Carregando {progress}%</span>

      <div className="flex w-full flex-col items-center gap-8 px-6">
        <div className="spinner" aria-hidden />
      </div>
    </motion.div>
  )
}
