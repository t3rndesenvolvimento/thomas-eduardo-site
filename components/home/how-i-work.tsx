"use client"

import { motion } from "framer-motion"

const STEPS = [
 {
 n: "01",
 title: "Entender",
 text: "Problema, usuário e restrições - antes do código.",
 },
 {
 n: "02",
 title: "Construir",
 text: "Arquitetura limpa, interfaces precisas, entrega iterativa.",
 },
 {
 n: "03",
 title: "Escalar",
 text: "Performance, confiabilidade e melhoria contínua.",
 },
]

export function HowIWork() {
 return (
 <section
 id="processo"
 className="relative bg-background py-16 sm:py-24 md:py-32 min-h-[100svh] flex flex-col justify-center"
 >
 <div className="site-shell">
 <div className="mb-8 max-w-xl sm:mb-10">
 <motion.p
 initial={{ opacity: 0, y: 8 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="label-kicker mb-2 sm:mb-3"
 >
 Como trabalho
 </motion.p>
 <motion.h2
 initial={{ opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground tracking-tight"
 >
 Simples.
 <br />
 <span className="text-muted-foreground">Do problema à entrega.</span>
 </motion.h2>
 </div>

 <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
 {STEPS.map((step, i) => (
 <motion.div
 key={step.n}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-30px" }}
 transition={{ duration: 0.4, delay: i * 0.06 }}
 className="rounded-2xl border border-border/30 bg-card/25 p-6 sm:p-8 lg:p-10"
 >
 <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
 {step.n}
 </p>
 <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.04em] text-foreground sm:text-2xl">
 {step.title}
 </h3>
 <p className="mt-3 text-base lg:text-lg font-light leading-relaxed text-muted-foreground">
 {step.text}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}
