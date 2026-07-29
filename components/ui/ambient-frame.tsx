"use client"

import { motion, useReducedMotion } from "framer-motion"

type Tone = "dark" | "light"

/**
 * Refined geometric backdrop — grid, rings, soft orbs.
 * Minimal, intentional, not random spinning blobs.
 */
export function AmbientFrame({
  tone = "dark",
  variant = "grid",
  className = "",
}: {
  tone?: Tone
  variant?: "grid" | "rings" | "corner" | "mesh"
  className?: string
}) {
  const reduce = useReducedMotion()
  const stroke = tone === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"
  const strokeSoft = tone === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.035)"
  const fill = tone === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.025)"

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variant === "grid" && (
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="af-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path
                d="M56 0H0V56"
                fill="none"
                stroke={strokeSoft}
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="af-fade" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="af-mask">
              <rect width="100%" height="100%" fill="url(#af-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#af-grid)" mask="url(#af-mask)" />
        </svg>
      )}

      {variant === "rings" && (
        <svg
          className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[120, 200, 280, 360, 440].map((r, i) => (
            <motion.circle
              key={r}
              cx="400"
              cy="400"
              r={r}
              stroke={stroke}
              strokeWidth="1"
              initial={false}
              animate={
                reduce
                  ? undefined
                  : { opacity: [0.35, 0.7, 0.35], scale: [1, 1.02, 1] }
              }
              transition={{
                duration: 8 + i * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
          <circle cx="400" cy="400" r="3" fill={fill} />
        </svg>
      )}

      {variant === "corner" && (
        <svg
          className="absolute -right-8 -top-8 h-64 w-64 sm:h-80 sm:w-80 opacity-80"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ originX: "160px", originY: "160px" }}
          >
            <circle cx="160" cy="160" r="140" stroke={strokeSoft} strokeWidth="1" />
            <circle cx="160" cy="160" r="100" stroke={stroke} strokeWidth="1" />
            <circle cx="160" cy="160" r="60" stroke={strokeSoft} strokeWidth="1" />
            <path
              d="M160 20 L160 300 M20 160 L300 160"
              stroke={strokeSoft}
              strokeWidth="1"
            />
          </motion.g>
          <circle cx="160" cy="160" r="4" fill={tone === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"} />
        </svg>
      )}

      {variant === "mesh" && (
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="af-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={tone === "dark" ? "#fff" : "#000"} stopOpacity="0.04" />
              <stop offset="50%" stopColor={tone === "dark" ? "#fff" : "#000"} stopOpacity="0" />
              <stop offset="100%" stopColor={tone === "dark" ? "#fff" : "#000"} stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#af-mesh)" />
          <motion.path
            d="M0 80 Q200 20 400 90 T800 60"
            fill="none"
            stroke={strokeSoft}
            strokeWidth="1"
            animate={reduce ? undefined : { pathLength: [0.3, 1, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 200 Q250 140 500 210 T1000 180"
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            animate={reduce ? undefined : { pathLength: [0.4, 1, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      )}
    </div>
  )
}

/** Content frame — thin border, soft radius, optional padding */
export function ContentFrame({
  children,
  className = "",
  tone = "dark",
}: {
  children: React.ReactNode
  className?: string
  tone?: Tone
}) {
  const border =
    tone === "dark" ? "border-white/10" : "border-black/10"
  const bg =
    tone === "dark" ? "bg-white/[0.02]" : "bg-black/[0.02]"

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${border} ${bg} ${className}`}
    >
      {children}
    </div>
  )
}
