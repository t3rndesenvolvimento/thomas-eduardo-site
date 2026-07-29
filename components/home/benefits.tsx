"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Layers, ShieldCheck } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { Shape1 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

const ICONS = [TrendingUp, Target, Layers, ShieldCheck]

export function Benefits() {
 const { t } = useI18n()
 return (
 <section
 id="solucao"
 className="relative overflow-hidden bg-black text-white py-28 sm:py-24 md:py-32 min-h-[100svh] flex flex-col justify-center"
 >
 {/* subtle radial accent */}
 <div
 aria-hidden
 className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_50%_100%,rgba(255,255,255,0.05),transparent_70%)]"
 />

 {/* Abstract shape decoration */}
 <motion.div
 className="pointer-events-none absolute -left-10 top-20 z-0 w-28 opacity-15 sm:w-36 mix-blend-screen"
 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
 >
 <Shape1 />
 </motion.div>

 <div className="site-shell relative z-10 max-w-4xl mx-auto">
 {/* Section header */}
 <div className="mb-4 grid items-end gap-4 sm:mb-10 sm:grid-cols-[1fr_auto] sm:gap-6">
 <div>
 <motion.p
 initial={{ opacity: 0, y: 8 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60 mb-2"
 >
 {t.benefits.kicker}
 </motion.p>
 <motion.h2
 initial={{ opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight"
 >
 {t.benefits.heading}
 </motion.h2>
 </div>

 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="hidden sm:block"
 >
 <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external className="bg-white text-black hover:scale-105 active:scale-95 border-none font-bold">
 {t.benefits.cta}
 </CtaLink>
 </motion.div>
 </div>

 {/* Benefit cards - Same dark theme as Testimonials */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
 {t.benefits.items.map((item, index) => {
 const Icon = ICONS[index % ICONS.length]
 const num = String(index + 1).padStart(2, "0")
 return (
 <motion.div
 key={num}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileHover={{ y: -3 }}
 transition={{
 duration: 0.45,
 delay: index * 0.06,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="group relative flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#0d0e14] p-5 sm:p-8 lg:p-10 text-white transition-all duration-300 hover:border-white/20 hover:bg-[#131522] shadow-lg"
 >
 <div>
 <div className="mb-2 sm:mb-4 flex items-center justify-between">
 <div className="flex items-center gap-2.5">
 <div className="flex size-6 sm:size-8 items-center justify-center rounded-lg sm:rounded-xl bg-white text-black shadow-sm">
 <Icon className="size-3 sm:size-4 text-black" strokeWidth={2} />
 </div>
 <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-white/40">
 {num}
 </span>
 </div>
 </div>
 <p className="mb-1 sm:mb-1.5 font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
 {item.accent}
 </p>
 <h3 className="mb-1 sm:mb-2 font-display text-base sm:text-xl lg:text-2xl font-bold leading-snug tracking-tight text-white">
 {item.headline}
 </h3>
 <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/80 line-clamp-3 sm:line-clamp-none">
 {item.copy}
 </p>
 </div>
 </motion.div>
 )
 })}
 </div>

 {/* Mobile CTA */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="mt-8 flex justify-center sm:hidden"
 >
 <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external className="w-full bg-white text-black font-bold">
 {t.benefits.cta}
 </CtaLink>
 </motion.div>
 </div>
 </section>
 )
}
