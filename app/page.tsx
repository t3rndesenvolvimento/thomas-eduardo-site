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

      {/* Sticky Stacking Cards Scroll Reveal for the ENTIRE page */}
      <div className="relative z-10 flex flex-col space-y-[-2rem] sm:space-y-[-3rem]">
        {/* 1. Hero */}
        <ScrollRevealSection index={0} className="bg-[#000000]">
          <Hero />
        </ScrollRevealSection>

        {/* 2 & 3. Marcas & Parceiros + Agitação da dor */}
        <ScrollRevealSection index={1} className="bg-black">
          <div className="flex flex-col w-full h-full justify-center">
            <ClientsCarousel className="relative overflow-hidden bg-black text-white pt-10 pb-6 sm:pt-14 sm:pb-9" />
            <PainPoints />
          </div>
        </ScrollRevealSection>

        {/* 4. Portfólio / Projetos */}
        <div className="relative z-[3] bg-white rounded-t-[2rem] sm:rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)]">
          <ProjectsStack />
        </div>

        {/* 5. Solução e benefícios */}
        <ScrollRevealSection index={4} className="bg-black">
          <Benefits />
        </ScrollRevealSection>

        {/* 6. Sobre */}
        <ScrollRevealSection index={6} className="bg-white">
          <About />
        </ScrollRevealSection>

        {/* 7. Depoimentos */}
        <ScrollRevealSection index={5} className="bg-black">
          <Testimonials />
        </ScrollRevealSection>



        {/* 9. Stack técnica */}
        <ScrollRevealSection index={8} className="bg-white">
          <TechExpertise />
        </ScrollRevealSection>


        {/* 11. CTA Final */}
        <ScrollRevealSection index={10} className="bg-[#0a0a0a]">
          <HomeCta />
        </ScrollRevealSection>
      </div>
    </>
  )
}
