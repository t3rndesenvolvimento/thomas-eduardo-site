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
  { loading: () => <div className="h-80 bg-canvas" /> },
)

export const metadata: Metadata = {
  title: "Full Stack & Product Engineer | Thomas Eduardo",
  description:
    "Portfólio de Thomas Eduardo — Full Stack / Product Engineer em São Paulo. Next.js, React, TypeScript, Node.js. Cases com métricas e disponibilidade para CLT, PJ ou projetos.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <PageAnimator />

      <div className="relative z-10">
        <ScrollRevealSection index={0} className="bg-canvas">
          <Hero />
        </ScrollRevealSection>

        <ScrollRevealSection index={1} className="bg-canvas" sticky={false}>
          <ClientsCarousel />
        </ScrollRevealSection>

        {/* Horizontal projects — own scroll space, not sticky-over */}
        <div className="relative z-[20]">
          <ProjectsStack />
        </div>

        <ScrollRevealSection index={3} className="bg-neutral-50 text-black">
          <About />
        </ScrollRevealSection>

        <ScrollRevealSection index={4} className="bg-canvas text-white">
          <TechExpertise />
        </ScrollRevealSection>

        <ScrollRevealSection index={5} className="bg-neutral-50 text-black">
          <Testimonials />
        </ScrollRevealSection>

        <ScrollRevealSection index={6} className="bg-canvas text-white">
          <HomeCta />
        </ScrollRevealSection>
      </div>
    </>
  )
}
