import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { Snapshot } from "@/components/home/snapshot"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { Expertise } from "@/components/home/expertise"
import { Education } from "@/components/home/education"
import { About } from "@/components/home/about"
import { HomeCta } from "@/components/home/home-cta"
import { PageAnimator } from "@/components/page-animator"

export const metadata: Metadata = {
  title: "Desenvolvedor Full Stack em São Paulo | Thomas Eduardo",
  description:
    "Thomas Eduardo — estudante de Engenharia de Software e desenvolvedor Full Stack em São Paulo. React, Next.js, TypeScript e Node.js com projetos em produção. Aberto a vagas de estágio e júnior.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <PageAnimator />
      <Hero />
      <Snapshot />
      <FeaturedProjects />
      <Expertise />
      <Education />
      <About />
      <HomeCta />
    </>
  )
}
