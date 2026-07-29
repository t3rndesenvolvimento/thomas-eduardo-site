import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2", className)}
      aria-label="devthomas - página inicial"
    >
      <Image
        src="/logo-mark.png"
        alt="Logo devthomas"
        width={size}
        height={size}
        className="rounded-md transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <span className="hidden font-display text-xs font-semibold lowercase tracking-[0.14em] text-white sm:inline sm:text-[13px]">
        devthomas
      </span>
    </Link>
  )
}
