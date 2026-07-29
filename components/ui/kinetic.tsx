import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ *
 * Kinetic design kit
 * Shared primitives (kicker, pill, panel, buttons, stats) so every
 * page uses the exact same card and button language.
 * ------------------------------------------------------------------ */

/** Small dash + mono uppercase label that opens every section. */
export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-8 bg-brand" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
        {children}
      </span>
    </p>
  )
}

/** Bordered mono tag used on cases, stack items and cards. */
export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode
  tone?: "default" | "brand"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
        tone === "brand"
          ? "border-brand/40 bg-brand/10 text-brand"
          : "border-white/12 bg-white/[0.04] text-white/60",
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Base dark card. Every card on the site derives from this. */
export function Panel({
  children,
  className,
  interactive = false,
  as: As = "div",
}: {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  as?: React.ElementType
}) {
  return (
    <As
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#0e0e0e]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.14] before:to-transparent",
        interactive &&
          "transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand/35 hover:bg-[#121212]",
        className,
      )}
    >
      {children}
    </As>
  )
}

/** Rounded square that holds a card icon. */
export function IconTile({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand",
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Mono index marker, e.g. 01 / 04. */
export function Index({
  value,
  total,
  className,
}: {
  value: string | number
  total?: string | number
  className?: string
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] tracking-[0.2em] text-white/30",
        className,
      )}
    >
      {value}
      {total ? ` / ${total}` : null}
    </span>
  )
}

/** Big number + mono caption, with the reference hairline above. */
export function Stat({
  value,
  label,
  className,
}: {
  value: string
  label: string
  className?: string
}) {
  return (
    <div className={cn("border-t border-white/10 pt-3", className)}>
      <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
        {label}
      </p>
    </div>
  )
}

/* --------------------------------- buttons -------------------------------- */

const BTN_BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"

const BTN_VARIANTS = {
  primary: "bg-brand text-black hover:brightness-110",
  outline:
    "border border-white/14 bg-white/[0.02] font-medium text-white hover:border-white/30 hover:bg-white/[0.06]",
  ghost: "font-medium text-white/70 hover:text-white",
} as const

type Variant = keyof typeof BTN_VARIANTS

export function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  ...rest
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  external?: boolean
  className?: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(BTN_BASE, BTN_VARIANTS[variant], className)
  const isExternal = external || /^(https?:|mailto:|tel:)/.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}

/** Inline "Ver estudo de caso →" link in brand color. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const classes = cn(
    "group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand transition-colors hover:text-white",
    className,
  )
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)

  const inner = (
    <>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        &rarr;
      </span>
    </>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  )
}

/* -------------------------------- sections -------------------------------- */

/** Consistent section wrapper with the reference vertical rhythm. */
export function Section({
  id,
  children,
  className,
  grid = false,
}: {
  id?: string
  children: React.ReactNode
  className?: string
  grid?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t border-white/[0.06] bg-canvas py-20 sm:py-24 md:py-28",
        className,
      )}
    >
      {grid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent)]"
        />
      )}
      <div className="site-shell relative">{children}</div>
    </section>
  )
}

/** Kicker + display title + optional lead paragraph. */
export function SectionIntro({
  kicker,
  title,
  lead,
  className,
}: {
  kicker: string
  title: React.ReactNode
  lead?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white text-balance sm:text-4xl md:text-[3.25rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-base">
          {lead}
        </p>
      )}
    </div>
  )
}
