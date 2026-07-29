"use client"

import Image from "next/image"
import { CtaLink } from "@/components/ui/cta"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { TechGrid } from "@/components/tech-icon"
import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import FadeThrough from "@/components/ui/smoothui/fade-through"
import DepthParallaxWords from "@/components/ui/smoothui/depth-parallax-words"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Shape1, Shape2, Shape4 } from "@/components/ui/abstract-shapes"
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section"
import { Coolshape } from "coolshapes-react"

const METRICS = [
 { value: "3+", label: "Anos", detail: "Produto e sistemas" },
 { value: "10+", label: "Projetos", detail: "Sites, APIs, plataformas" },
 { value: "98+", label: "Lighthouse", detail: "Performance real" },
 { value: "100%", label: "Full Stack", detail: "Do UI ao deploy" },
]

const PILLARS = [
 {
 n: "01",
 title: "Produto",
 text: "Foco incansável na experiência do usuário. Cada decisão técnica é pensada e validada para maximizar o valor real entregue ao negócio.",
 },
 {
 n: "02",
 title: "Engenharia",
 text: "Arquitetura moderna e código limpo. Sistemas desenhados do zero para escalar de forma sustentável, evitando reescritas ou dívidas técnicas.",
 },
 {
 n: "03",
 title: "Confiabilidade",
 text: "Aplicações altamente disponíveis e observáveis. Deploys contínuos e infraestrutura segura para garantir estabilidade e previsibilidade total.",
 },
]

const TIMELINE = [
 {
 date: "08/2023 - Atual",
 title: "Software Engineer - Freelancer",
 text: "Aplicações web, APIs, dashboards e autenticação. Deploy em Vercel, AWS e Linux.",
 },
 {
 date: "2024",
 title: "AWS re/Start + Certificações",
 text: "AWS re/Start, API REST & JWT (Ada), UX (FIAP) e IT Essentials (Cisco).",
 certs: true,
 },
 {
 date: "Em andamento",
 title: "Engenharia de Software - Anhanguera",
 text: "Arquitetura de software, cloud e sistemas distribuídos.",
 badge: "Cursando",
 },
]

const STACK_ICONS = [
  "Figma",
  "Framer",
  "Webflow",
  "Notion",
  "Miro",
  "Adobe CC",
  "React",
  "Tailwind CSS",
]

const fade = {
 initial: { opacity: 0, y: 14 },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true, margin: "-40px" },
}

export default function SobrePage() {
 return (
 <main className="min-h-screen bg-background">
 <PageAnimator />

 <div className="relative z-10 flex flex-col space-y-[-2rem] sm:space-y-[-3rem]">
 <ScrollRevealSection index={0} className="bg-[#0a0a0a]">
 <section className="relative min-h-[100svh] w-full flex items-end pb-16 lg:pb-0 lg:items-center overflow-hidden">
 {/* Background Video on Left */}
 <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-0 opacity-40 lg:opacity-60">
 <video
 src="/about-video.mp4"
 autoPlay
 loop
 muted
 playsInline
 className="w-full h-full object-cover"
 />
 {/* Gradient mask to blend with background */}
 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 lg:bg-gradient-to-r lg:from-transparent lg:via-[#0a0a0a]/50 lg:to-[#0a0a0a]" />
 </div>

 <div className="site-shell relative z-10 w-full">
 <div className="flex flex-col lg:flex-row lg:items-center">
 {/* Left side empty space to push content to right on desktop */}
 <div className="hidden lg:block lg:w-1/2" />
 
 {/* Right Side Content */}
 <div className="lg:w-1/2 lg:pl-16 pt-32 pb-8 lg:py-0 mt-auto lg:mt-0">
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 >
  <p className="label-kicker mb-6 text-white/70">Sobre · São Paulo</p>
  <h1 className="text-[4rem] sm:text-7xl lg:text-[7.5rem] font-display font-bold text-white leading-[0.9] tracking-tight mb-8">
  Thomas<br />Eduardo.
  </h1>
  <p className="max-w-2xl text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white/80">
  Software Engineer · Full Stack. <br className="hidden sm:block" />Produtos digitais do zero à{" "}
  <span className="font-medium text-white inline-block">
  <FadeThrough phrases={["produção.", "escala.", "receita."]} />
  </span>
  </p>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 </ScrollRevealSection>

 {/* Section Redesenhada - Estilo Home */}
 <ScrollRevealSection index={0} className="bg-white py-16 sm:py-24 relative">
 {/* Animated Background SVGs */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <motion.div 
 className="absolute right-10 top-10 w-48 opacity-10 sm:w-64"
 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
 >
 <Shape1 />
 </motion.div>
 <motion.div 
 className="absolute left-10 bottom-10 w-40 opacity-10 sm:w-56"
 animate={{ rotate: -360, scale: [1, 1.1, 1] }}
 transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
 >
 <Shape2 />
 </motion.div>
 <motion.div 
 className="absolute left-1/3 top-1/2 -translate-y-1/2 w-56 opacity-[0.07] sm:w-80"
 animate={{ rotate: 180, scale: [1, 1.05, 1] }}
 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
 >
 <Shape4 />
 </motion.div>
 </div>

 <div className="site-shell max-w-5xl mx-auto relative z-10">
 <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
 
 {/* Left Column - Sticky */}
 <div className="flex flex-col items-start lg:sticky lg:top-32">
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="mb-4 sm:mb-8 flex items-center gap-3"
 >
 <span className="text-xs font-mono font-semibold uppercase tracking-widest text-black/60">Perfil</span>
 <div className="h-px w-10 bg-black/20" />
 </motion.div>

 <h2 className="text-h2 font-normal tracking-[-0.02em] text-black mb-6 sm:mb-10">
 <DepthParallaxWords triggerOnView delay={100} stagger={60}>
 Produtos digitais
 </DepthParallaxWords>
 <br />
 <span className="text-black/60">
 <DepthParallaxWords triggerOnView delay={300} stagger={60}>
 do zero à produção.
 </DepthParallaxWords>
 </span>
 </h2>
 
 <motion.div
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="flex flex-wrap gap-3"
 >
 <CtaLink href="/r/wa" variant="solid" size="md" className="bg-black text-white hover:scale-105 active:scale-95 border-none">
 Falar comigo
 </CtaLink>
 <Link
 href="/processo"
 className="btn-cta group/cta inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.08em] transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-px active:translate-y-0 active:scale-[0.98] h-9 gap-1.5 px-3.5 text-[11px] bg-black/5 text-black hover:bg-black/10"
 >
 Como trabalho
 </Link>
 </motion.div>
 </div>

 {/* Right Column - Scrolling Content */}
 <div className="flex flex-col gap-8 sm:gap-12 lg:pt-8">

 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="space-y-4 text-[15px] sm:text-lg leading-relaxed text-black/75 max-w-[48ch]"
 >
 <p>
 Sou um Engenheiro de Software Full Stack com mais de 3 anos de experiência desenhando e desenvolvendo sistemas do zero. Meu objetivo é transformar processos manuais e complexos em plataformas rápidas, seguras e fáceis de usar.
 </p>
 <p>
 Eu me envolvo em toda a vida do produto: desde entender a regra de negócio e projetar a melhor interface (UI/UX), até definir a arquitetura no backend e realizar o deploy em produção.
 </p>
 <p>
 Trabalho com as melhores tecnologias do mercado para garantir aplicações que não só resolvem o problema atual, mas que estão prontas para escalar no futuro sem precisar de reescritas dolorosas.
 </p>
 </motion.div>
 </div>
 </div>
 </div>
 </ScrollRevealSection>

  <ScrollRevealSection index={1} className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-12 sm:pb-24">
  <div className="pb-10 sm:pb-14">
  <ClientsCarousel
  title="Empresas que confiaram no meu trabalho"
  titleClassName="text-sm font-semibold tracking-widest uppercase text-white/50"
  className="relative overflow-hidden py-6 sm:py-9"
  fadeClassName="from-background"
  />
  </div>

 {/* Metrics - only on About */}
 <div className="relative overflow-hidden">
 <motion.div
 className="pointer-events-none absolute left-10 top-1/2 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen -translate-y-1/2"
 animate={{ rotate: -180, scale: [1, 1.05, 1] }}
 transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
 >
 <Shape1 />
 </motion.div>
 <div className="site-shell relative z-10">
 <div className="grid grid-cols-2 lg:grid-cols-4">
 {METRICS.map((m, i) => (
 <motion.div
 key={m.label}
 {...fade}
 transition={{ delay: i * 0.04 }}
 className={`px-4 py-8 sm:px-6 sm:py-10 ${i % 2 === 0 ? "border-r border-border/25" : ""
 } ${i < 2 ? "border-b border-border/25 lg:border-b-0" : ""} ${i < 3 ? "lg:border-r lg:border-border/25" : "lg:border-r-0"
 }`}
 >
  <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-[5rem] leading-none">
  {m.value}
  </p>
  <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80">
  {m.label}
  </p>
  <p className="mt-1 text-sm font-light text-white/60 sm:text-base">
  {m.detail}
  </p>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </ScrollRevealSection>

 {/* Pillars - modern strip */}
 <ScrollRevealSection index={2} className="py-16 sm:py-24 relative overflow-hidden bg-white text-black">
 <motion.div
 className="pointer-events-none absolute right-10 top-1/3 z-0 w-32 opacity-25 sm:w-40"
 animate={{ rotate: 180, scale: [1, 1.1, 1] }}
 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
 >
 <Shape2 />
 </motion.div>
 <div className="site-shell relative z-10">
 <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
  <div>
  <p className="label-kicker mb-2 text-black/45">Abordagem</p>
  <h2 className="text-h2 text-black mb-3">Como penso o trabalho.</h2>
  <p className="max-w-md text-sm sm:text-base leading-relaxed text-black/70">
  Acredito que o desenvolvimento deve sempre servir ao objetivo do negócio. Por isso, uno decisões técnicas de ponta com foco total na experiência e conversão do usuário.
  </p>
  </div>
 </div>

 <div className="grid gap-3 sm:grid-cols-3">
 {PILLARS.map((p, i) => (
 <motion.div
 key={p.n}
 {...fade}
 transition={{ delay: i * 0.05 }}
 className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-black/20 hover:bg-black/[0.02] sm:p-6"
 >
 <span className="font-mono text-[10px] tracking-widest text-black/40">
 {p.n}
 </span>
 <h3 className="mt-3 text-lg font-medium tracking-[0.01em] text-black">
 {p.title}
 </h3>
 <p className="mt-2 text-sm font-light leading-relaxed text-black/65">
 {p.text}
 </p>
 <div className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-black/[0.03] transition-transform group-hover:scale-125" />
 </motion.div>
 ))}
 </div>
 </div>
 </ScrollRevealSection>

  {/* Timeline - vertical modern */}
  <ScrollRevealSection index={3} className="py-16 sm:py-24 bg-background relative overflow-hidden">
  <motion.div
  className="pointer-events-none absolute left-0 bottom-0 z-0 opacity-20 mix-blend-screen"
  animate={{ rotate: 180, scale: [1, 1.1, 1] }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
  <div className="size-32 sm:size-48">
  <Coolshape type="star" index={3} noise={true} />
  </div>
  </motion.div>
  <div className="site-shell relative z-10">
 <div className="mb-8 sm:mb-10">
 <p className="label-kicker mb-2">Trajetória</p>
 <h2 className="text-h2 text-white">Experiência e formação.</h2>
 </div>

 <div className="relative">
 <div
 aria-hidden
 className="absolute bottom-2 left-[0.55rem] top-2 w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent sm:left-[0.7rem]"
 />

 <div className="space-y-0">
 {TIMELINE.map((item, i) => (
 <motion.div
 key={item.title}
 {...fade}
 transition={{ delay: i * 0.06 }}
 className="relative grid gap-3 pb-10 pl-8 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-10 sm:pb-12"
 >
 <div className="absolute left-0 top-1.5 flex size-3 items-center justify-center rounded-full border border-white/30 bg-black sm:top-2 sm:size-3.5">
 <span className="size-1 rounded-full bg-white" />
 </div>

 <div>
 <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
 {item.date}
 </p>
 {item.badge && (
 <span className="mt-2 inline-flex rounded-full border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70">
 {item.badge}
 </span>
 )}
 </div>

 <div className="min-w-0">
 <h3 className="text-base font-medium tracking-[0.01em] text-white sm:text-lg">
 {item.title}
 </h3>
 <p className="mt-1.5 max-w-xl text-sm font-light leading-relaxed text-white/65">
 {item.text}
 </p>
 {item.certs && (
 <div className="mt-4 flex flex-wrap gap-2">
 {[
 "/certificados/aws-logo.png",
 "/certificados/ada-logo.png",
 "/certificados/fiap-logo.png",
 "/certificados/cisco-logo.png",
 ].map((cert) => (
 <div
 key={cert}
 className="relative size-11 overflow-hidden rounded-xl border border-border/30 bg-black/50 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
 >
 <Image
 src={cert}
 alt="Certificado"
 fill
 className="object-cover"
 sizes="44px"
 />
 </div>
 ))}
 </div>
 )}
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </ScrollRevealSection>

 {/* Stack */}
 <ScrollRevealSection index={4} className="bg-white text-black py-16 sm:py-24 relative overflow-hidden">
 <motion.div
 className="pointer-events-none absolute left-10 top-1/4 z-0 w-32 opacity-25 sm:w-40"
 animate={{ rotate: -360, y: [0, 20, 0] }}
 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
 >
 <Shape4 />
 </motion.div>
 <div className="site-shell relative z-10">
 <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
  <div>
  <p className="label-kicker mb-2 text-black/45">Stack</p>
  <h2 className="text-h2 text-black mb-3">Ferramentas do dia a dia.</h2>
  <p className="max-w-md text-sm sm:text-base leading-relaxed text-black/70">
  Do protótipo visual à estruturação de conteúdo, utilizo as ferramentas de design e ideação mais modernas para garantir entregas refinadas e bem planejadas antes de qualquer linha de código.
  </p>
  </div>
  <Link
  href="/projetos"
  className="btn-cta group/cta inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.08em] transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-px active:translate-y-0 active:scale-[0.98] h-9 gap-1.5 px-4 text-[11px] bg-black/5 text-black hover:bg-black/10"
  >
  Ver em projetos
  <ArrowUpRight className="size-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
  </Link>
 </div>
 <TechGrid stack={STACK_ICONS} theme="light" />
 </div>
 </ScrollRevealSection>

 {/* CTA */}
 <ScrollRevealSection index={5} className="relative overflow-hidden bg-background py-14 sm:py-20">
 <div
 aria-hidden
 className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]"
 />
 <motion.div
  className="pointer-events-none absolute right-10 top-0 z-0 opacity-20 mix-blend-screen"
  animate={{ rotate: -180, scale: [1, 1.05, 1] }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
  <div className="size-32 sm:size-48">
  <Coolshape type="ellipse" index={1} noise={true} />
  </div>
  </motion.div>
  <div className="site-shell relative text-center z-10">
 <p className="label-kicker mb-4 text-white/45">Próximo passo</p>
 <h2 className="text-[3.5rem] sm:text-7xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tight text-white">
 Tem um projeto
 <br />
 <span className="text-white/50">em mente?</span>
 </h2>
 <p className="mx-auto mt-6 max-w-lg text-base sm:text-2xl font-light text-white/60 leading-relaxed">
 Vamos transformar a ideia em produto real - com clareza de escopo e
 entrega.
 </p>
 <div className="mt-10 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row">
 <CtaLink href="/r/wa" variant="solid" size="lg">
 Iniciar conversa
 </CtaLink>
 <CtaLink href="/projetos" variant="soft" size="lg">
 Ver projetos
 </CtaLink>
 </div>
 </div>
 </ScrollRevealSection>
 </div>
 </main>
 )
}
