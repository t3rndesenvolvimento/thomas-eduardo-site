import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { About } from "@/components/home/about"
import { PageAnimator } from "@/components/page-animator"
import { HomeCta } from "@/components/home/home-cta"

export const metadata: Metadata = {
  title: "Full Stack & Product Engineer | Thomas Eduardo",
  description:
    "Portfólio de Thomas Eduardo — Full Stack / Product Engineer em São Paulo. Next.js, React, TypeScript, Node.js.",
  alternates: { canonical: "/" },
}

/** Home no modelo Brittany Chiang: hero → featured list → about → CTA */
export default function HomePage() {
  return (
    <>
      <PageAnimator />
      <main className="bg-canvas">
        <Hero />
        <FeaturedProjects />
        <About />
        <HomeCta />
      </main>
    </>
  )
}
