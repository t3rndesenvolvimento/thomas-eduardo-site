import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/home/hero"
import { ClientsCarousel } from "@/components/home/clients-carousel"
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

export const metadata: Metadata = {
  title: "Full Stack & Product Engineer | Thomas Eduardo",
  description:
    "Portfólio de Thomas Eduardo — Full Stack / Product Engineer em São Paulo. Next.js, React, TypeScript, Node.js. Cases com métricas e disponibilidade para CLT, PJ ou projetos.",
  alternates: { canonical: "/" },
}

/**
 * Home orientada a emprego / credibilidade técnica.
 * Funil comercial fica em /freelance.
 */
export default function HomePage() {
  return (
    <>
      <PageAnimator />

      <div className="relative z-10 flex flex-col space-y-[-2rem] sm:space-y-[-3rem]">
        <ScrollRevealSection index={0} className="bg-[#000000]">
          <Hero />
        </ScrollRevealSection>

        <ScrollRevealSection index={1} className="bg-black">
          <ClientsCarousel className="relative overflow-hidden bg-black text-white pt-10 pb-10 sm:pt-14 sm:pb-14" />
        </ScrollRevealSection>

        <div className="relative z-[3] bg-white rounded-t-[2rem] sm:rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)]">
          <ProjectsStack />
        </div>

        <ScrollRevealSection index={3} className="bg-white">
          <About />
        </ScrollRevealSection>

        <ScrollRevealSection index={4} className="bg-white">
          <TechExpertise />
        </ScrollRevealSection>

        <ScrollRevealSection index={5} className="bg-black">
          <Testimonials />
        </ScrollRevealSection>

        <ScrollRevealSection index={6} className="bg-[#0a0a0a]">
          <HomeCta />
        </ScrollRevealSection>
      </div>
    </>
  )
}
