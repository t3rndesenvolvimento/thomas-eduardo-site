"use client"

import Image from "next/image"
import { CtaLink } from "@/components/ui/cta"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { TechIcon } from "@/components/tech-icon"
import { PageAnimator } from "@/components/page-animator"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import FadeThrough from "@/components/ui/smoothui/fade-through"
import DepthParallaxWords from "@/components/ui/smoothui/depth-parallax-words"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section"

const METRICS = [
  { value: "3+", label: "Anos", detail: "Produto e sistemas" },
  { value: "10+", label: "Projetos", detail: "Em produção" },
  { value: "TS", label: "TypeScript", detail: "Código tipado" },
  { value: "E2E", label: "Ownership", detail: "UI → API → deploy" },
]

const PILLARS = [
  {
    n: "01",
    title: "Produto",
    text: "Decisões técnicas amarradas ao problema de negócio e à métrica que importa — não à stack da moda.",
  },
  {
    n: "02",
    title: "Engenharia",
    text: "TypeScript, APIs claras, código legível e deploys previsíveis. Sistemas pensados para manutenção, não só para o dia do go-live.",
  },
  {
    n: "03",
    title: "Comunicação",
    text: "Escopo explícito, prazos honestos e atualização constante. O time e o stakeholder sabem o que está pronto.",
  },
]

const TIMELINE = [
  {
    date: "08/2023 – atual",
    title: "Full Stack / Product Engineer — independente",
    text: "Produtos web e sistemas sob demanda: Next.js/React, Node, autenticação, painéis e deploy (Vercel, AWS, Linux). Cases em produção com clientes reais.",
  },
  {
    date: "2024",
    title: "AWS re/Start + certificações",
    text: "AWS re/Start, API REST & JWT (Ada), UX (FIAP) e IT Essentials (Cisco).",
    certs: true,
  },
  {
    date: "Em andamento",
    title: "Engenharia de Software — Anhanguera",
    text: "Arquitetura de software, cloud e sistemas distribuídos.",
    badge: "Cursando",
  },
]

const STACK = [
  {
    category: "Frontend",
    description: "Interfaces tipadas e performáticas em produção.",
    tools: [
      { name: "React", note: "SPA e interfaces reativas" },
      { name: "Next.js", note: "App Router, SSR/SSG" },
      { name: "TypeScript", note: "Código escalável" },
      { name: "Tailwind CSS", note: "UI consistente" },
    ],
  },
  {
    category: "Backend & dados",
    description: "APIs e persistência alinhadas ao domínio.",
    tools: [
      { name: "Node.js", note: "Runtime server-side" },
      { name: "PostgreSQL", note: "Relacional" },
      { name: "MongoDB", note: "Documentos" },
      { name: "Prisma", note: "ORM type-safe" },
      { name: "Firebase", note: "Auth quando faz sentido" },
    ],
  },
  {
    category: "Infra & entrega",
    description: "Do repositório à produção com pipeline simples.",
    tools: [
      { name: "Vercel", note: "Deploy e edge" },
      { name: "AWS", note: "Cloud" },
      { name: "Docker", note: "Containers" },
      { name: "Git", note: "Versionamento" },
    ],
  },
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
          <section className="relative min-h-[85svh] w-full flex items-end pb-16 lg:pb-0 lg:items-center overflow-hidden">
            <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-0 opacity-40 lg:opacity-60">
              <video
                src="/about-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 lg:bg-gradient-to-r lg:from-transparent lg:via-[#0a0a0a]/50 lg:to-[#0a0a0a]" />
            </div>

            <div className="site-shell relative z-10 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="hidden lg:block lg:w-1/2" />
                <div className="lg:w-1/2 lg:pl-16 pt-32 pb-8 lg:py-0 mt-auto lg:mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="label-kicker mb-6 text-white/70">
                      Sobre · São Paulo
                    </p>
                    <h1 className="text-[3.5rem] sm:text-7xl lg:text-[6.5rem] font-display font-bold text-white leading-[0.9] tracking-tight mb-8">
                      Thomas
                      <br />
                      Eduardo.
                    </h1>
                    <p className="max-w-xl text-lg sm:text-2xl font-light leading-relaxed text-white/80">
                      Full Stack / Product Engineer.{" "}
                      <br className="hidden sm:block" />
                      Produtos digitais do zero à{" "}
                      <span className="font-medium text-white inline-block">
                        <FadeThrough
                          phrases={["produção.", "escala.", "métrica."]}
                        />
                      </span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </ScrollRevealSection>

        <ScrollRevealSection index={0} className="bg-white py-16 sm:py-24 relative">
          <div className="site-shell max-w-5xl mx-auto relative z-10">
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div className="flex flex-col items-start lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-8 flex items-center gap-3"
                >
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-black/60">
                    Perfil
                  </span>
                  <div className="h-px w-10 bg-black/20" />
                </motion.div>

                <h2 className="text-h2 font-normal tracking-[-0.02em] text-black mb-6 sm:mb-10">
                  <DepthParallaxWords triggerOnView delay={100} stagger={60}>
                    Engenharia de produto
                  </DepthParallaxWords>
                  <br />
                  <span className="text-black/60">
                    <DepthParallaxWords triggerOnView delay={300} stagger={60}>
                      com ownership real.
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
                  <CtaLink
                    href={CONTACT.linkedin}
                    variant="solid"
                    size="md"
                    external
                    className="bg-black text-white hover:scale-105 active:scale-95 border-none"
                  >
                    LinkedIn
                  </CtaLink>
                  <Link
                    href="/projetos/teron-os"
                    className="btn-cta group/cta inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.08em] transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-px active:translate-y-0 active:scale-[0.98] h-9 gap-1.5 px-3.5 text-[11px] bg-black/5 text-black hover:bg-black/10"
                  >
                    Case TERON OS
                  </Link>
                </motion.div>
              </div>

              <div className="flex flex-col gap-8 sm:gap-12 lg:pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4 text-[15px] sm:text-lg leading-relaxed text-black/75 max-w-[48ch]"
                >
                  <p>
                    Sou Full Stack / Product Engineer em São Paulo. Desde 2023
                    entrego aplicações web e sistemas em produção — do frontend
                    (React, Next.js, TypeScript) ao backend (Node, APIs, dados)
                    e deploy.
                  </p>
                  <p>
                    Busco oportunidades em times de produto e engenharia (CLT ou
                    PJ) onde ownership e entrega contínua importem mais do que
                    slide de tecnologia.
                  </p>
                  <p>
                    Também atendo projetos sob demanda em{" "}
                    <Link href="/freelance" className="underline underline-offset-2 text-black/90">
                      /freelance
                    </Link>
                    . O case mais representativo de sistema completo é o{" "}
                    <Link href="/projetos/teron-os" className="underline underline-offset-2 text-black/90">
                      TERON OS
                    </Link>
                    .
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          index={1}
          className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-12 sm:pb-24"
        >
          <div className="pb-10 sm:pb-14">
            <ClientsCarousel
              title="Empresas e marcas com quem trabalhei"
              titleClassName="text-sm font-semibold tracking-widest uppercase text-white/50"
              className="relative overflow-hidden py-6 sm:py-9"
              fadeClassName="from-background"
            />
          </div>

          <div className="relative overflow-hidden">
            <div className="site-shell relative z-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {METRICS.map((m, i) => (
                  <motion.div
                    key={m.label}
                    {...fade}
                    transition={{ delay: i * 0.04 }}
                    className={`px-4 py-8 sm:px-6 sm:py-10 ${i % 2 === 0 ? "border-r border-border/25" : ""} ${i < 2 ? "border-b border-border/25 lg:border-b-0" : ""} ${i < 3 ? "lg:border-r lg:border-border/25" : "lg:border-r-0"}`}
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

        <ScrollRevealSection
          index={2}
          className="py-16 sm:py-24 relative overflow-hidden bg-white text-black"
        >
          <div className="site-shell relative z-10">
            <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
              <div>
                <p className="label-kicker mb-2 text-black/45">Abordagem</p>
                <h2 className="text-h2 text-black mb-3">Como trabalho.</h2>
                <p className="max-w-md text-sm sm:text-base leading-relaxed text-black/70">
                  O desenvolvimento serve ao objetivo do negócio. Técnica boa é
                  a que o time consegue manter e evoluir.
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
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          index={3}
          className="py-16 sm:py-24 bg-background relative overflow-hidden"
        >
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

        <ScrollRevealSection
          index={4}
          className="bg-white text-black py-14 sm:py-24 relative overflow-hidden"
        >
          <div className="site-shell relative z-10">
            <div className="mb-10 sm:mb-14">
              <p className="label-kicker mb-2 text-black/45">Stack</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-lg">
                  <h2 className="text-h2 text-black mb-3">
                    Ferramentas do dia a dia.
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-black/60">
                    Stack usada em projetos reais — não lista de buzzwords.
                  </p>
                </div>
                <Link
                  href="/projetos"
                  className="btn-cta group/cta inline-flex w-fit items-center justify-center rounded-full font-medium uppercase tracking-[0.08em] h-9 gap-1.5 px-4 text-[11px] bg-black/5 text-black hover:bg-black/10 shrink-0"
                >
                  Ver em projetos
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8">
              {STACK.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.07 }}
                  className="py-5 sm:py-7"
                >
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-black/30">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-semibold tracking-tight text-black">
                      {group.category}
                    </h3>
                    <span className="hidden sm:block text-xs text-black/45 font-light">
                      {group.description}
                    </span>
                  </div>
                  <p className="block sm:hidden text-xs leading-relaxed text-black/50 mb-4">
                    {group.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="group flex items-center gap-2.5 rounded-xl border border-black/10 bg-black/[0.02] px-3 py-2.5 hover:border-black/20 hover:bg-black/[0.04] transition-all cursor-default"
                      >
                        <TechIcon
                          name={tool.name}
                          className="size-4 shrink-0"
                          showLabel={false}
                          theme="light"
                        />
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-black/75 group-hover:text-black leading-tight truncate">
                            {tool.name}
                          </p>
                          <p className="text-[10px] text-black/40 mt-0.5 leading-tight truncate">
                            {tool.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          index={5}
          className="relative overflow-hidden bg-background py-14 sm:py-20"
        >
          <div className="site-shell relative text-center z-10">
            <p className="label-kicker mb-4 text-white/45">Próximo passo</p>
            <h2 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight text-white">
              Aberto a oportunidades
              <br />
              <span className="text-white/50">em engenharia de produto</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base sm:text-lg font-light text-white/60 leading-relaxed">
              CLT ou PJ. Prefiro conversa direta no LinkedIn — ou um briefing se
              for projeto sob demanda.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row">
              <CtaLink href={CONTACT.linkedin} variant="solid" size="lg" external>
                LinkedIn
              </CtaLink>
              <CtaLink href="/projetos/teron-os" variant="soft" size="lg">
                Case TERON OS
              </CtaLink>
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </main>
  )
}
