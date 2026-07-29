"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import {
  ArrowOutIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon,
  RocketIcon,
} from "@/components/brand-icons"

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "Vercel",
]

export function About() {
  return (
    <div className="site-shell w-full py-16 sm:py-20 md:py-24">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
        <RocketIcon size={16} className="text-brand" />
        Sobre
      </p>
      <h2 className="max-w-[18ch] font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
        Product engineer com{