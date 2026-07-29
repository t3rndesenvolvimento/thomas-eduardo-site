"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, MessageCircleQuestion } from "lucide-react"
import { CONTACT, SERVICES } from "@/lib/data"
import { motion } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"
import { Icon } from "@iconify/react"
import { CtaLink } from "@/components/ui/cta"
import { PageHero } from "@/components/page-hero"
import { Shape1, Shape3, Shape5, Shape6, Shape8 } from "@/components/ui/abstract-shapes"
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section"
import { EngineeringApproach } from "@/components/home/engineering-approach"
import { Coolshape } from "coolshapes-react"

const STEPS = [
 { step: "01", title: "Conversa", text: "Você explica a ideia e o objetivo.", image: "/images/process/process_conversa.png" },
 { step: "02", title: "Análise", text: "Desafios e melhor solução técnica.", image: "/images/process/process_analise.png" },
 { step: "03", title: "Proposta", text: "Escopo, cronograma e investimento.", image: "/images/process/process_proposta.png" },
 { step: "04", title: "Aprovação", text: "Início após alinhamento e sinal.", image: "/images/process/process_aprovacao.png" },
 { step: "05", title: "Desenvolvimento", text: "Acompanhamento passo a passo.", image: "/images/process/process_desenvolvimento.png" },
 { step: "06", title: "Entrega", text: "Deploy, validação e suporte inicial.", image: "/images/process/process_entrega.png" },
]



const DELIVERABLES = [
 { id: "01", title: "Proposta Comercial", text: "Documento detalhado com o escopo técnico, valores e visão do projeto." },
 { id: "02", title: "Cronograma", text: "Previsão clara de todas as etapas, validações e entregas." },
 { id: "03", title: "Contrato", text: "Garantia jurídica e transparência total de direitos para ambos." },
 { id: "04", title: "Canal Direto", text: "Comunicação ágil e sem ruídos via WhatsApp ou Slack." },
 { id: "05", title: "Deploy e Suporte", text: "Publicação do projeto no ar e acompanhamento nos primeiros dias." },
]

const PROBLEM_CARDS = [
 { title: "Sua equipe depende de planilhas?", text: "Automatizamos processos para reduzir erros e tempo gasto.", icon: "ph:table-bold" },
 { title: "Os sistemas atuais não atendem mais?", text: "Desenvolvemos soluções sob medida para sua operação.", icon: "ph:warning-circle-bold" },
 { title: "Você perde clientes por demora?", text: "Criamos plataformas rápidas e preparadas para crescer.", icon: "ph:clock-countdown-bold" },
 { title: "Tem uma ideia mas não sabe por onde começar?", text: "Transformamos sua ideia em um produto digital validado.", icon: "ph:lightbulb-bold" }
]



const INCLUDED = [
 { label: "Desenvolvimento sob medida", icon: "ph:code-bold" },
 { label: "Código limpo e escalável", icon: "ph:tree-structure-bold" },
 { label: "Arquitetura moderna", icon: "ph:buildings-bold" },
 { label: "APIs e integrações", icon: "ph:plugs-connected-bold" },
 { label: "Performance", icon: "ph:lightning-bold" },
 { label: "Segurança", icon: "ph:shield-check-bold" },
 { label: "Documentação", icon: "ph:file-text-bold" },
 { label: "Suporte após entrega", icon: "ph:headset-bold" },
]

const PROJECT_TYPES = [
 { label: "Sistema de gestão", icon: "ph:kanban-bold" },
 { label: "CRM", icon: "ph:users-three-bold" },
 { label: "ERP", icon: "ph:factory-bold" },
 { label: "Marketplace", icon: "ph:storefront-bold" },
 { label: "Plataforma SaaS", icon: "ph:cloud-check-bold" },
 { label: "Portal Corporativo", icon: "ph:briefcase-bold" },
 { label: "Aplicativo", icon: "ph:device-mobile-bold" },
 { label: "Dashboard", icon: "ph:chart-bar-bold" },
 { label: "API", icon: "ph:plugs-bold" }
]

const FAQ = [
 {
 q: "Quanto custa um sistema?",
 a: "Não existe preço fixo. Cada projeto é analisado conforme funcionalidades, integrações, complexidade e prazo. Você recebe uma proposta detalhada após a análise.",
 },
 {
 q: "Quanto tempo leva?",
 a: "Depende do escopo. Landing pages podem levar 2 semanas, sistemas complexos podem levar meses. O cronograma exato é definido antes do início.",
 },
 {
 q: "O código é meu?",
 a: "Sim. Todo o código fonte e propriedade intelectual do sistema são 100% transferidos para você após a quitação do projeto.",
 },
 {
 q: "Posso solicitar alterações?",
 a: "Sim, o processo inclui etapas de validação. Mudanças fora do escopo inicial são analisadas e orçadas à parte com total transparência.",
 },
 {
 q: "Como funciona o pagamento?",
 a: "Normalmente dividido: um sinal para reserva de agenda/início e o saldo na entrega final, ou parcelado conforme marcos do cronograma.",
 },
 {
 q: "Existe suporte após entrega?",
 a: "Sim. Todos os projetos incluem um período de suporte inicial para ajustes. Após isso, ofereço planos de manutenção opcionais.",
 }
]

const fadeUp = {
 initial: { opacity: 0, y: 14 },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true },
}

export default function ProcessPage() {

 const [activeDeliverable, setActiveDeliverable] = useState(0)

 return (
 <main className="min-h-screen bg-background text-foreground">
 <PageAnimator />

 <div className="relative z-10 flex flex-col space-y-[-2rem] sm:space-y-[-3rem]">
 <ScrollRevealSection index={0} className="bg-background flex flex-col justify-center relative overflow-hidden">
  <motion.div
  className="pointer-events-none absolute left-10 top-1/4 z-0 opacity-20 mix-blend-screen"
  animate={{ rotate: -360, scale: [1, 1.05, 1] }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
  <div className="size-32 sm:size-48">
  <Coolshape type="polygon" index={1} noise={true} />
  </div>
  </motion.div>
 <div>
 <PageHero
 kicker=""
 lines={["Seu software não", "precisa ser complicado."]}
 description="Transformo processos manuais em sistemas rápidos, escaláveis e feitos para o seu negócio."
 light
 align="center"
 />

 <div className="site-shell -mt-2 mb-16 flex flex-col gap-2.5 min-[420px]:flex-row sm:mb-20 justify-center">
 <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
 Solicitar orçamento
 </CtaLink>
 <CtaLink href="/projetos" variant="soft" size="md">
 Ver projetos
 </CtaLink>
 </div>
 </div>
 </ScrollRevealSection>
 {/* Dores */}
 <ScrollRevealSection index={0} className="py-16 sm:py-24 bg-white relative overflow-hidden">
 <motion.div
 className="pointer-events-none absolute -left-10 top-20 z-0 w-32 opacity-25 sm:w-40"
 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
 >
 <Shape1 />
 </motion.div>
 <div className="site-shell relative z-10">
 <div className="mb-12 text-center">
 <h2 className="text-h2 text-black text-balance">Você está enfrentando algum destes problemas?</h2>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
 {PROBLEM_CARDS.map((card) => (
 <div key={card.title} className="group rounded-2xl border border-black/10 bg-white shadow-sm p-6 sm:p-8 hover:border-black/20 hover:bg-black/[0.02] transition-colors relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
 <div className="relative z-10">
 <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-black/60 transition-colors group-hover:border-black/20 group-hover:text-black shadow-inner">
 <Icon icon={card.icon} className="size-6" />
 </div>
 <h3 className="mb-3 text-lg sm:text-xl font-semibold text-black tracking-tight">{card.title}</h3>
 <p className="text-[15px] leading-relaxed text-black/70 group-hover:text-black/90 transition-colors">{card.text}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </ScrollRevealSection>

  {/* Processo Direto (Engineering Approach) */}
  <ScrollRevealSection index={1} className="bg-black">
  <EngineeringApproach />
  </ScrollRevealSection>

  {/* Included */}
 <ScrollRevealSection index={2} className="py-16 sm:py-24 relative overflow-hidden bg-white">
 <motion.div
 className="pointer-events-none absolute right-10 top-10 z-0 w-32 opacity-25 sm:w-40"
 animate={{ rotate: 180, scale: [1, 1.1, 1] }}
 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
 >
 <Shape5 />
 </motion.div>
 <div className="absolute inset-0 bg-grid-fade opacity-30 pointer-events-none" />
 <div className="site-shell relative z-10">
 <div className="mb-10 text-center sm:mb-16">
 <p className="label-kicker mb-3 text-black/45">Incluso no escopo</p>
 <h2 className="text-h2 text-black">Tudo que você precisa.</h2>
 </div>
 <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
 {INCLUDED.map((item, i) => (
 <motion.div
 key={item.label}
 {...fadeUp}
 transition={{ delay: i * 0.03 }}
 className="card-animate group flex flex-col items-center gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center transition-colors hover:border-black/20 hover:bg-black/[0.02]"
 >
 <div className="flex size-12 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-black/60 shadow-inner transition-colors group-hover:border-black/20 group-hover:text-black">
 <Icon icon={item.icon} className="size-6" />
 </div>
 <span className="font-mono text-xs uppercase tracking-widest text-black/70 group-hover:text-black transition-colors">
 {item.label}
 </span>
 </motion.div>
 ))}
 </div>
 </div>
 </ScrollRevealSection>

  {/* Transparency */}
  <ScrollRevealSection index={3} className="py-16 sm:py-24 bg-background relative overflow-hidden">
  <motion.div
  className="pointer-events-none absolute right-0 top-1/3 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
  animate={{ rotate: -180, scale: [1, 1.05, 1] }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
  <Shape6 />
  </motion.div>
  <div className="site-shell relative z-10">
  <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
  <div className="relative">
  <div className="relative z-10">
  <p className="label-kicker mb-3">Transparência</p>
  <h2 className="text-h2 text-white text-balance">Sem surpresas durante o projeto.</h2>
  <ul className="mt-8 space-y-4">
  {[
  "Cronograma definido.",
  "Escopo documentado.",
  "Aprovação em cada etapa.",
  "Comunicação constante.",
  "Código entregue ao cliente.",
  ].map((t) => (
  <li key={t} className="flex items-start gap-4 text-[15px] font-light text-white/80">
  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
  <Check className="size-3 text-white" />
  </span>
  {t}
  </li>
  ))}
  </ul>
  </div>
  </div>

  <div className="relative">
  <div className="relative z-10">
  <p className="label-kicker mb-3">Investimento</p>
  <h2 className="text-h2 text-white text-balance">Quanto custa desenvolver um software?</h2>
  <p className="mt-6 text-[15px] leading-relaxed font-light text-white/70 text-pretty">
  Não existe preço fixo. Cada projeto é analisado conforme:
  </p>
  <ul className="mt-4 space-y-2 mb-6">
  {["Funcionalidades", "Integrações", "Complexidade", "Prazo", "Infraestrutura"].map((t) => (
  <li key={t} className="flex items-center gap-2 text-sm text-white/60">
  <span className="size-1.5 rounded-full bg-white/20" /> {t}
  </li>
  ))}
  </ul>
  
  <CtaLink href={CONTACT.whatsapp} variant="ghost" size="sm" external>
  Solicite uma análise gratuita
  </CtaLink>
  </div>
  </div>
  </div>
  </div>
  </ScrollRevealSection>

 {/* Services / Types of Projects */}
 <ScrollRevealSection index={4} className="py-16 sm:py-24 bg-white relative overflow-hidden">
 <motion.div
 className="pointer-events-none absolute right-10 bottom-10 z-0 w-32 opacity-25 sm:w-40"
 animate={{ rotate: -360, scale: [1, 1.05, 1] }}
 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
 >
 <Shape3 />
 </motion.div>
 <div className="site-shell relative z-10">
 <div className="mb-16 sm:mb-24 max-w-2xl">
 <p className="label-kicker mb-3 text-black/45">O que fazemos</p>
 <h2 className="text-h2 text-black">O que podemos desenvolver.</h2>
 </div>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {PROJECT_TYPES.map((item) => (
 <div key={item.label} className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 hover:border-black/20 hover:bg-black/[0.02] transition-colors relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
 <div className="relative z-10 flex items-center gap-4">
 <div className="flex size-10 items-center justify-center rounded-xl bg-black/5 border border-black/10 text-black/50 transition-colors group-hover:bg-black/10 group-hover:text-black">
 <Icon icon={item.icon} className="size-5" />
 </div>
 <h3 className="font-display text-lg font-medium tracking-tight text-black/80 group-hover:text-black transition-colors">
 {item.label}
 </h3>
 </div>
 </div>
 ))}
 </div>
 </div>
 </ScrollRevealSection>

 {/* FAQ */}
 <ScrollRevealSection index={5} className="py-20 sm:py-32 relative overflow-hidden bg-background">
 <motion.div
 className="pointer-events-none absolute left-10 top-1/4 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
 animate={{ rotate: -180, scale: [1, 1.05, 1] }}
 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
 >
 <Shape6 />
 </motion.div>
 <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 relative z-10">
 <div className="mb-12 sm:mb-16 text-center">
 <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Dúvidas?</p>
 <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-white">Perguntas frequentes.</h2>
 </div>
 <div className="divide-y divide-white/10">
 {FAQ.map((item, i) => (
 <motion.div
 key={item.q}
 {...fadeUp}
 transition={{ delay: i * 0.04 }}
 className="py-6 sm:py-8 group"
 >
 <h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
 {item.q}
 </h3>
 <p className="mt-3 text-[15px] font-light leading-relaxed text-white/60 max-w-2xl text-pretty">
 {item.a}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </ScrollRevealSection>

  {/* CTA */}
  <ScrollRevealSection index={6} className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 bg-white relative overflow-hidden flex flex-col justify-center min-h-[50svh]">
  <motion.div
  className="pointer-events-none absolute left-0 bottom-0 z-0 opacity-20 mix-blend-multiply"
  animate={{ rotate: 180, scale: [1, 1.1, 1] }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
  <div className="size-32 sm:size-48">
  <Coolshape type="star" index={6} noise={true} />
  </div>
  </motion.div>
  <div className="site-shell mx-auto max-w-5xl text-center px-4 sm:px-6 relative z-10">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-black mb-6 sm:mb-8 text-balance leading-[1.1]">
  O próximo sistema da sua empresa pode começar hoje.
  </h2>
  <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-black/70 mb-10 sm:mb-12 text-balance">
  Solicite uma análise gratuita do seu projeto. Em até 24 horas você recebe um plano inicial com escopo, prazo e estimativa de investimento.
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <CtaLink href={CONTACT.whatsapp} variant="solid" size="lg" className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 text-sm sm:text-base bg-black text-white hover:bg-black/90 uppercase tracking-widest shadow-xl rounded-full" external>
  Solicitar análise gratuita
  </CtaLink>
  </div>
  </div>
  </ScrollRevealSection>
 </div>
 </main>
 )
}
