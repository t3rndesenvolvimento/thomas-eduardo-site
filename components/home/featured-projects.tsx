"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PROJECTS } from "@/lib/data"
import { ArrowOutIcon } from "@/components/brand-icons"

type Card = {
  title: string
  category: string
  year: string
  body: string
  metrics: [string, string][]
  href: string
  image: string
}

function buildCards(): Card[] {
  const picks = ["TERON OS", "Minuta Fácil", "Áurea", "Yázigi Swiss Park"]
  return picks
    .map((t) => PROJECTS.find((p) => p.title === t))
    .filter(Boolean)
    .map((p, i) => {
      const project = p!
      const href =
        project.title === "TERON OS"
          ? "/projetos/teron-os"
          : project.href?.startsWith("/")
            ? project.href
            : project.href || "/projetos"
      const metricSets: [string, string][][] = [
        [
          ["Full system", "Auth to deploy"],
          ["Ownership", "End-to-end"],
        ],
        [
          ["Faster", "Document flow"],
          ["Live", "In production"],
        ],
        [
          ["Brand + UI", "Product feel"],
          ["Ship", "Web product"],
        ],
        [
          ["Conversion", "Lead focus"],
          ["Mobile", "First"],
        ],
      ]
      return {
        title: project.title,
        category: project.tag || "Product",
        year: "2024",
        body: project.result || project.description,
        metrics: metricSets[i] || metricSets[0],
        href,
        image: project.image,
      }
    })
}

export function FeaturedProjects() {
  const cards = buildCards()

  return (
    <div id="work" className="site-shell w-full py-16 sm:py-20 md:py-24">
      <div className="mb-3 text-sm font-medium text-brand">Selected works</div>
      <h2 className="max-w-[18ch] font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
        Featured case studies
      </h2>
      <p className="mt-4 max-w-lg text-neutral-600 leading-relaxed">
        Systems and products shipped to production — stack, context and outcome.
      </p>

      <div className="mt-12 space-y-8">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05 }}
            className="grid overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-sm sm:grid-cols-[1.05fr_1fr]"
          >
            <div className="relative aspect-[16/11] sm:aspect-auto sm:min-h-[280px] bg-neutral-200">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-medium tracking-wide text-brand">
                {card.category} · {card.year}
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black">
                {card.title}
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
                {card.body}
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                {card.metrics.map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-lg font-bold text-black">{value}</dt>
                    <dd className="text-xs text-neutral-500">{label}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href={card.href}
                {...(card.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                View case study
                <ArrowOutIcon size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black hover:border-brand hover:text-brand"
        >
          All case studies
          <ArrowOutIcon size={16} />
        </Link>
      </div>
    </div>
  )
}
