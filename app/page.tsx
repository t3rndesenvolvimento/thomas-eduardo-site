import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/home/hero"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { PainPoints } from "@/components/home/pain-points"
import { Benefits } from "@/components/home/benefits"
import { ProjectsStack } from "@/components/home/projects-stack"
import { Testimonials } from "@/components/home/testimonials"
import { About } from "@/components/home/about"
import { PageAnimator } from "@/components/page-animator"
import { HomeCta } from "@/components/home/home-cta"
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section"

const TechExpertise = dynamic(
  () =>
    import("@/components/home/tech-expertise").then((mod) => ({
      default: mod.TechExpertise,
    })),
  { loading: () => <div className="h-80 bg-background" /> },
)

const EngineeringApproach = dynamic(
  () =>
    import("@/components/home/engineering-approach").then((mod) => ({
      default: mod.EngineeringApproach,
    })),
  { loading: () => <div className="h-[500px] bg-background" /> },
)

const OliverParallax = dynamic(
  () =>
    import("@/components/home/oliver-parallax").then((mod) => ({
      default: mod.OliverParallax,
    })),
  { loading: () => <div className="h-[400px] bg-background" /> },
)

export const metadata: Metadata = {
  title: "Engenheiro de Software & Produto | Thomas Eduardo",
  description:
    "Desenvolvimento de landing pages e sistemas web de alta performance focados em conversão, velocidade e receita real para empresas.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <PageAnimator />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Marcas & Parceiros (Social Proof) */}
      <ClientsCarousel />

      {/* Sticky Stacking Cards Scroll Reveal após Marcas & Parceiros */}
      <div className="relative z-10 flex flex-col space-y-[-2rem] sm:space-y-[-3rem]">
        {/* 3. Agitação da dor */}
        <ScrollRevealSection index={0}>
          <PainPoints />
        </ScrollRevealSection>

        {/* 4. Portfólio / Projetos */}
        <ProjectsStack />

        {/* 5. Solução e benefícios */}
        <ScrollRevealSection index={1}>
          <Benefits />
        </ScrollRevealSection>

        {/* 6. Depoimentos */}
        <ScrollRevealSection index={2}>
          <Testimonials />
        </ScrollRevealSection>

        {/* 7. Sobre */}
        <ScrollRevealSection index={3}>
          <About />
        </ScrollRevealSection>

        {/* 8. Processo de trabalho */}
        <ScrollRevealSection index={4}>
          <EngineeringApproach />
        </ScrollRevealSection>

        {/* 9. Stack técnica */}
        <ScrollRevealSection index={5}>
          <TechExpertise />
        </ScrollRevealSection>

        {/* 10. Galeria visual */}
        <ScrollRevealSection index={6}>
          <OliverParallax />
        </ScrollRevealSection>

        {/* 11. CTA Final */}
        <ScrollRevealSection index={7}>
          <HomeCta />
        </ScrollRevealSection>
      </div>
    </>
  )
}
