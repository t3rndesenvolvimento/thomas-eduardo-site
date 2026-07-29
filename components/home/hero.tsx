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
import TextPressure from "@/components/ui/text-pressure"
import { AnimeGridBackground } from "@/components/ui/anime-grid-background"
import { VantaCloudsBackground } from "@/components/ui/vanta-clouds"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight, PlayCircle } from "lucide-react"

// Springs nomeadas por "peso" — evita repetir { stiffness, damping, mass } em cada motion value
const TILT_SPRING: SpringOptions = { stiffness: 120, damping: 22, mass: 0.4 }
const TRAIL_SPRINGS: SpringOptions[] = [
 { stiffness: 120, damping: 20, mass: 0.6 },
 { stiffness: 90, damping: 25, mass: 0.7 },
 { stiffness: 60, damping: 30, mass: 0.8 },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/**
 * Hero - tilt 3D + cursor customizado com trilha + entrada animada
 */
export function Hero() {
 const containerRef = useRef<HTMLDivElement>(null)
 const reduceMotion = useReducedMotion()
 const [isPointerActive, setIsPointerActive] = useState(false)
 const { t } = useI18n()

 // Posição normalizada (0-1) do ponteiro dentro do container — dirige o tilt e a luz ambiente
 const mx = useMotionValue(0.5)
 const my = useMotionValue(0.5)
 const springX = useSpring(mx, TILT_SPRING)
 const springY = useSpring(my, TILT_SPRING)

 // Posição em pixels relativa ao container — dirige a trilha do cursor e o ponto
 const mouseX = useMotionValue(0)
 const mouseY = useMotionValue(0)
 const trail1X = useSpring(mouseX, TRAIL_SPRINGS[0])
 const trail1Y = useSpring(mouseY, TRAIL_SPRINGS[0])
 const trail2X = useSpring(mouseX, TRAIL_SPRINGS[1])
 const trail2Y = useSpring(mouseY, TRAIL_SPRINGS[1])
 const trail3X = useSpring(mouseX, TRAIL_SPRINGS[2])
 const trail3Y = useSpring(mouseY, TRAIL_SPRINGS[2])

 const rotateY = useTransform(springX, [0, 1], [8, -8])
 const rotateX = useTransform(springY, [0, 1], [-6, 6])
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

 container.addEventListener("pointermove", handlePointerMove, { passive: true })
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
 {/* Cursor customizado + trilha */}
 {!reduceMotion && (
 <>
 <motion.div
 className="pointer-events-none absolute left-0 top-0 z-[57] hidden h-10 w-10 rounded-full border border-white/5 bg-white/5 blur-[2px] sm:block"
 style={{ x: trail3X, y: trail3Y, translateX: "-50%", translateY: "-50%" }}
 animate={{ opacity: showCursorFx ? 1 : 0 }}
 transition={{ duration: 0.25 }}
 />
 <motion.div
 className="pointer-events-none absolute left-0 top-0 z-[58] hidden h-8 w-8 rounded-full border border-white/10 bg-white/10 blur-[1px] sm:block"
 style={{ x: trail2X, y: trail2Y, translateX: "-50%", translateY: "-50%" }}
 animate={{ opacity: showCursorFx ? 1 : 0 }}
 transition={{ duration: 0.25 }}
 />
 <motion.div
 className="pointer-events-none absolute left-0 top-0 z-[59] hidden h-6 w-6 rounded-full border border-white/20 bg-white/10 sm:block"
 style={{ x: trail1X, y: trail1Y, translateX: "-50%", translateY: "-50%" }}
 animate={{ opacity: showCursorFx ? 1 : 0 }}
 transition={{ duration: 0.25 }}
 />



 <motion.div
 className="pointer-events-none absolute left-0 top-0 z-[60] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] sm:block"
 style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
 animate={{ opacity: showCursorFx ? 1 : 0 }}
 transition={{ duration: 0.25 }}
 />
 </>
 )}

 {/* Luz ambiente que segue o ponteiro */}
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

 {/* Frame de fundo estável */}
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
  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ delay: 0.25, duration: 0.7, ease: EASE_OUT }}
  className="mb-3 sm:mb-6 text-xs sm:text-base font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 text-center"
  >
  {t.hero.tagline}
  </motion.p>

  <motion.h1
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35, duration: 0.9, ease: EASE_OUT }}
  className="max-w-6xl text-[2rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[6rem] font-display font-bold text-white sm:leading-[1.05] tracking-tight text-center text-balance px-2 sm:px-0"
  >
  {t.hero.title}
  </motion.h1>

  <motion.p
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.65, duration: 0.6 }}
  className="mt-5 sm:mt-8 max-w-3xl text-sm sm:text-2xl leading-relaxed text-white/70 text-center px-4 sm:px-0 text-balance"
  >
  {t.hero.description}
  </motion.p>

  <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.85, duration: 0.6 }}
  className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
  >
  <Link 
  href="/diagnostico" 
  className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 sm:px-10 sm:py-5 text-[11px] sm:text-base font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
  >
  {t.hero.ctaPrimary} <ArrowRight className="size-3.5 sm:size-4" />
  </Link>
  <Link 
  href="#projetos" 
  className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 sm:px-10 sm:py-5 text-[11px] sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 hover:border-white/40 active:scale-95"
  >
  <PlayCircle className="size-3.5 sm:size-4" /> {t.hero.ctaSecondary}
  </Link>
 </motion.div>

 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.0, duration: 0.6 }}
 className="mt-5 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/50 font-mono"
 >
 <div className="flex -space-x-2">
 {[1, 2, 3, 4].map((i) => (
 <div key={i} className="size-6 sm:size-8 rounded-full border-2 border-background bg-gray-800" />
 ))}
 </div>
 <p>{t.hero.socialProof}</p>
 </motion.div>
 </div>

 </section>
 )
}