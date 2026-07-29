import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { Expertise } from "@/components/home/expertise"
import { About } from "@/components/home/about"
import { HomeCta } from "@/components/home/home-cta"
import { PageAnimator } from "@/components/page-animator"
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section"

export const metadata: Metadata = {
  title: "Full Stack & Product Engineer | Thomas Eduardo",
  description:
    "Portfolio de Thomas Eduardo — Full Stack / Product Engineer em Sao Paulo. Next.js, React, TypeScript, Node.js.",
  alternates: { canonical: "/" },
}

/** Kinetic-inspired: statement hero, metric cases, expertise, about, CTA */
export default function HomePage() {
  return (
    <>
      <PageAnimator />
      <div className="relative">
        <ScrollRevealSection index={0} className="bg-canvas text-white">
          <Hero />
        </ScrollRevealSection>

        <ScrollRevealSection index={1} className="bg-neutral-50 text-black">
          <FeaturedProjects />
        </ScrollRevealSection>

        <ScrollRevealSection index={2} className="bg-canvas text-white">
          <Expertise />
        </ScrollRevealSection>

        <ScrollRevealSection index={3} className="bg-neutral-50 text-black">
          <About light />
        </ScrollRevealSection>

        <ScrollRevealSection index={4} className="bg-canvas text-white">
          <HomeCta dark />
        </ScrollRevealSection>
      </div>
    </>
  )
}
