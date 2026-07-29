"use client"

import Image from "next/image"
import { PROJECTS, CONTACT } from "@/lib/data"
import { motion } from "framer-motion"

import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { TechIconRow } from "@/components/tech-icon"
import { CtaLink } from "@/components/ui/cta"
import { ExternalLink } from "lucide-react"
import { Shape7, Shape1 } from "@/components/ui/abstract-shapes"
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section"



function ProjectItem({
 project,
 index,
 isBlack,
}: {
 project: (typeof PROJECTS)[0]
 index: number
 isBlack: boolean
}) {
 const textColor = isBlack ? "text-white" : "text-black"
 const mutedColor = isBlack ? "text-white/65" : "text-black/65"
 const softColor = isBlack ? "text-white/45" : "text-black/45"
 const borderColor = isBlack ? "border-white/10" : "border-black/10"

 return (
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{ duration: 0.4 }}
 className="site-shell w-full py-16 sm:py-24 flex items-center min-h-[100svh]"
 >
 <div className="flex w-full flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 <div className="relative aspect-[16/10] bg-black lg:aspect-auto lg:min-h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
 <Image
 src={project.image}
 alt={project.title}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
 <div className="absolute left-4 top-4 flex flex-wrap gap-2">
 <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white/90 backdrop-blur-md">
 {String(index + 1).padStart(2, "0")}
 </span>
 {project.year && (
 <span className="rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[9px] text-white/70 backdrop-blur-sm">
 {project.year}
 </span>
 )}
 </div>
 </div>



 <div className="flex flex-col justify-center">
 <div>
 <p className={`label-kicker ${softColor}`}>{project.tag}</p>
 <h2 className={`mt-3 text-3xl font-display font-bold tracking-tight ${textColor} sm:text-5xl md:text-6xl`}>
 {project.title}
 </h2>
 <p className={`mt-4 text-xl font-medium ${mutedColor} sm:text-2xl`}>
 {project.subtitle}
 </p>
 <p className={`mt-5 text-lg leading-relaxed ${mutedColor} sm:text-xl`}>
 {project.description}
 </p>
 <div className="mt-6">
 <p className={`label-kicker mb-2 ${softColor}`}>Resultado</p>
 <p className={`text-lg leading-relaxed ${textColor} sm:text-xl font-medium`}>
 {project.result}
 </p>
 </div>
 </div>

 {project.gallery && project.gallery.length > 0 && (
 <div className={`mt-8 pt-6 border-t ${borderColor}`}>
 <p className={`label-kicker ${softColor} mb-2`}>Galeria</p>
 <h3 className={`text-base font-medium tracking-tight ${textColor} mb-4`}>
 Interface e arquitetura em profundidade.
 </h3>
 <div className="grid grid-cols-3 gap-3">
 {project.gallery.map((img, idx) => (
 <div key={img} className={`group/gallery relative aspect-video rounded-lg overflow-hidden bg-black/10`}>
 <Image
 src={img}
 alt={`${project.title} - Galeria ${idx + 1}`}
 fill
 className="object-cover opacity-80 transition-all duration-500 group-hover/gallery:scale-105 group-hover/gallery:opacity-100"
 sizes="(max-width: 640px) 33vw, 15vw"
 />
 </div>
 ))}
 </div>
 </div>
 )}

 <div className={`mt-8 flex flex-col gap-5 pt-6 border-t ${borderColor}`}>
 <TechIconRow stack={project.stack} max={6} theme={isBlack ? "dark" : "light"} />
 <div className="flex flex-wrap items-center gap-3">
 {project.href ? (
 <CtaLink href={project.href} variant="solid" size="sm" external className="w-fit">
 Ver projeto
 </CtaLink>
 ) : (
 <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-black/40">
 <ExternalLink className="size-3" /> Em breve
 </span>
 )}
 {project.github && (
 <CtaLink href={project.github} variant={isBlack ? "soft" : "ghost"} size="sm" external className="w-fit">
 GitHub
 </CtaLink>
 )}
 </div>
 </div>

 </div>
 </div>
 </motion.div>
 )
}

export default function ProjetosPage() {
 return (
 <main className="min-h-screen bg-background">
 <PageAnimator />

 <div className="relative z-10 flex flex-col space-y-[-2rem] sm:space-y-[-3rem]">
 <ScrollRevealSection index={0} className="bg-background flex flex-col justify-center">
 <PageHero
 kicker="Portfólio · Casos Reais"
 lines={["Projetos selecionados."]}
 description="Soluções testadas no mercado. Veja como transformei gargalos de empresas reais em faturamento rápido, velocidade e conversão."
 light
 />
 </ScrollRevealSection>


  {PROJECTS.map((project, i) => {
  const isBlack = i % 2 === 0
  return (
  <ScrollRevealSection key={project.title} index={2 + i} className={`${isBlack ? "bg-black text-white" : "bg-white text-black"} flex flex-col justify-center`}>
  <ProjectItem project={project} index={i} isBlack={isBlack} />
  </ScrollRevealSection>
  )
  })}

  <ScrollRevealSection index={2 + PROJECTS.length} className="bg-white flex flex-col justify-center min-h-[70svh]">
  <div className="site-shell py-16 sm:py-24">
 <div className="mt-12 sm:mt-16 overflow-hidden rounded-xl bg-white sm:rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
 <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent pointer-events-none" />
 <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8 md:p-10 items-center">
 <div className="relative z-10">
 <p className="label-kicker text-black/45 mb-2">Open Source</p>
 <h3 className="text-2xl sm:text-3xl font-display font-semibold text-black tracking-tight mb-3">
 Quer ver o código por trás dos projetos?
 </h3>
 <p className="text-black/70 leading-relaxed mb-6 max-w-md text-sm sm:text-base">
 Arquitetura, padrões de código e decisões técnicas detalhadas nos repositórios. Um portfólio aberto de como construo software de qualidade.
 </p>
 <CtaLink href={CONTACT.github} variant="solid" size="md" external>
 Acessar meu GitHub
 </CtaLink>
 </div>
 <div className="relative z-10 aspect-[16/10] sm:aspect-video rounded-lg overflow-hidden shadow-lg bg-black/5 flex items-center justify-center">
 <p className="text-black/30 text-xs absolute z-0">Salve a imagem em public/images/github-profile.png</p>
 <Image
 src="/images/github-profile.png"
 alt="Thomas Eduardo GitHub Profile"
 fill
 className="object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500 z-10"
 />
 </div>
 </div>
 </div>
  </div>
  </ScrollRevealSection>
 </div>
 </main>
 )
}
