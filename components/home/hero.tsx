"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type SpringOptions,
} from "framer-motion"
import { VantaCloudsBackground } from "@/components/ui/vanta-clouds"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/data"

const TILT_SPRING: SpringOptions = { stiffness: 120, damping: 22, mass: 0.4 }
const TRAIL_SPRINGS: SpringOptions[] = [
  { stiffness: 120, damping: 20, mass: 0.6 },
  { stiffness: 90, damping: 25, mass: 0.7 },
  { stiffness: 60, damping: 30, mass: 0.8 },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [isPointerActive, setIsPointerActive] = useState(false)
  const { t } = useI18n()

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const springX = useSpring(mx, TILT_SPRING)
  const springY = useSpring(my, TILT_SPRING)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const trail1X = useSpring(mouseX, TRAIL_SPRINGS[0])
  const trail1Y = useSpring(mouseY, TRAIL_SPRINGS[0])
  const trail2X = useSpring(mouseX, TRAIL_SPRINGS[1])
  const trail2Y = useSpring(mouseY, TRAIL_SPRINGS[1])
  const trail3X = useSpring(mouseX, TRAIL_SPRINGS[2])
  const trail3Y = useSpring(mouseY, TRAIL_SPRINGS[2])

  const glareX = useTransform(springX, (v) => `${v * 100}%`)
  const glareY = useTransform(springY, (v) => `${v * 100}%`)
  const lightX = useTransform(springX, [0, 1], ["18%", "82%"])
  const lightY = useTransform(springY, [0, 1], ["12%", "72%"])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(0, 0, 0, 0.22) 0%, transparent 55%)`

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const container = containerRef.current
      if (!container || reduceMotion) return

      const rect = container.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) return

      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

      mx.set(x)
      my.set(y)
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [reduceMotion, mx, my, mouseX, mouseY],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || reduceMotion) return

    const handleEnter = () => setIsPointerActive(true)
    const handleLeave = () => setIsPointerActive(false)

    container.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    })
    container.addEventListener("pointerenter", handleEnter)
    container.addEventListener("pointerleave", handleLeave)
    return () => {
      container.removeEventListener("pointermove", handlePointerMove)
      container.removeEventListener("pointerenter", handleEnter)
      container.removeEventListener("pointerleave", handleLeave)
    }
  }, [handlePointerMove, reduceMotion])

  const showCursorFx = !reduceMotion && isPointerActive

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100dvh] sm:min-h-[85vh] w-full items-center overflow-hidden bg-black text-white"
      data-hero-container
    >
      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[57] hidden h-10 w-10 rounded-full border border-white/5 bg-white/5 blur-[2px] sm:block"
            style={{
              x: trail3X,
              y: trail3Y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[58] hidden h-8 w-8 rounded-full border border-white/10 bg-white/10 blur-[1px] sm:block"
            style={{
              x: trail2X,
              y: trail2Y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[59] hidden h-6 w-6 rounded-full border border-white/20 bg-white/10 sm:block"
            style={{
              x: trail1X,
              y: trail1Y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[60] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] sm:block"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </>
      )}

      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-[1] hidden h-[42vmin] w-[42vmin] rounded-full blur-3xl md:block"
          style={{
            left: lightX,
            top: lightY,
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.14) 0%, rgba(2, 2, 2, 0.04) 40%, transparent 70%)",
          }}
          animate={{ opacity: showCursorFx ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <motion.div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <VantaCloudsBackground />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/30" />
        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>

      <div className="site-shell relative z-10 w-full pt-28 pb-12 sm:py-24 md:py-32 flex flex-col items-center text-center px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/50"
        >
          {CONTACT.role} · {CONTACT.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: EASE_OUT }}
          className="max-w-4xl text-[1.85rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-bold text-white tracking-tight text-center text-balance px-2 sm:px-0"
        >
          {t.hero.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-5 sm:mt-7 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-white/65 text-center text-balance px-2"
        >
          {t.hero.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 text-xs sm:text-sm font-mono text-white/40"
        >
          {t.hero.socialProof}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/projetos"
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 sm:px-10 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
          >
            {t.hero.ctaPrimary} <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/freelance"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 sm:px-10 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 transition-colors"
          >
            {t.hero.ctaSecondary}
          </Link>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-white/40 hover:text-white/80 transition-colors py-2"
          >
            GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
