// Ícones reais das tecnologias usando Iconify (Simple Icons / Devicons)

import { Icon } from "@iconify/react"

type TechIconProps = {
  name: string
  className?: string
  showLabel?: boolean
  theme?: "dark" | "light"
}

const TECH_ICON_MAP: Record<string, { icon: string; color: string }> = {
  React: { icon: "logos:react", color: "#61DAFB" },
  "Next.js": { icon: "simple-icons:nextdotjs", color: "#FFFFFF" },
  TypeScript: { icon: "logos:typescript-icon", color: "#3178C6" },
  "Vue.js": { icon: "logos:vue", color: "#4FC08D" },
  "Nuxt.js": { icon: "logos:nuxt-icon", color: "#00DC82" },
  Angular: { icon: "logos:angular-icon", color: "#DD0031" },
  Svelte: { icon: "logos:svelte-icon", color: "#FF3E00" },
  "Node.js": { icon: "logos:nodejs-icon", color: "#339933" },
  Fastify: { icon: "simple-icons:fastify", color: "#FFFFFF" },
  Express: { icon: "simple-icons:express", color: "#FFFFFF" },
  NestJS: { icon: "logos:nestjs", color: "#E0234E" },
  FastAPI: { icon: "logos:fastapi", color: "#009688" },
  GraphQL: { icon: "logos:graphql", color: "#E10098" },
  PostgreSQL: { icon: "logos:postgresql", color: "#4169E1" },
  Prisma: { icon: "simple-icons:prisma", color: "#FFFFFF" },
  Redis: { icon: "logos:redis", color: "#DC382D" },
  MongoDB: { icon: "logos:mongodb-icon", color: "#47A248" },
  Supabase: { icon: "logos:supabase-icon", color: "#3ECF8E" },
  Firebase: { icon: "logos:firebase", color: "#FFCA28" },
  Docker: { icon: "logos:docker-icon", color: "#2496ED" },
  Kubernetes: { icon: "logos:kubernetes", color: "#326CE5" },
  Linux: { icon: "logos:linux-tux", color: "#FCC624" },
  AWS: { icon: "logos:aws", color: "#FF9900" },
  "Google Cloud": { icon: "logos:google-cloud", color: "#4285F4" },
  Vercel: { icon: "simple-icons:vercel", color: "#FFFFFF" },
  JWT: { icon: "simple-icons:jsonwebtokens", color: "#D63AFF" },
  "Tailwind CSS": { icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  Tailwind: { icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  Python: { icon: "logos:python", color: "#3776AB" },
  "Shell Script": { icon: "simple-icons:gnubash", color: "#4EAA25" },
  "VS Code API": { icon: "logos:visual-studio-code", color: "#007ACC" },
  Git: { icon: "logos:git-icon", color: "#F05032" },
  Figma: { icon: "logos:figma", color: "#F24E1E" },
  Framer: { icon: "logos:framer", color: "#0055FF" },
  Webflow: { icon: "logos:webflow", color: "#4353FF" },
  Notion: { icon: "logos:notion-icon", color: "#000000" },
  Miro: { icon: "logos:miro-icon", color: "#050038" },
  "Adobe CC": { icon: "logos:adobe-creative-cloud", color: "#DA1F26" },
  Vite: { icon: "logos:vitejs", color: "#646CFF" },
  Flutter: { icon: "logos:flutter", color: "#02569B" },
}

export function TechIcon({
  name,
  className = "size-5",
  showLabel = false,
  theme = "dark",
}: TechIconProps) {
  const tech = TECH_ICON_MAP[name]

  if (!tech) {
    return (
      <span className={`rounded-md border px-2 py-1 font-mono text-[11px] ${
        theme === "light" ? "border-black/15 bg-black/5 text-black/80" : "border-white/15 bg-white/10 text-white/80"
      }`}>
        {name}
      </span>
    )
  }

  if (showLabel) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className={`flex size-12 items-center justify-center rounded-xl border shadow-sm transition-all hover:scale-105 ${
          theme === "light" ? "border-black/10 bg-black/[0.02] hover:border-black/20" : "border-white/15 bg-[#1a1a1a] hover:border-white/30"
        }`}>
          <Icon icon={tech.icon} className={className} style={{ color: tech.color }} />
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-wider ${
          theme === "light" ? "text-black/55" : "text-white/55"
        }`}>
          {name}
        </span>
      </div>
    )
  }

  return (
    <div
      className="group/icon flex size-9 items-center justify-center rounded-lg border border-white/15 bg-[#1c1c1c] shadow-sm transition-all hover:scale-110 hover:border-white/30 sm:size-10"
      title={name}
    >
      <Icon
        icon={tech.icon}
        className={className}
        style={{ color: tech.color }}
      />
    </div>
  )
}

export function TechIconRow({ stack, max = 6, theme = "dark" }: { stack: string[]; max?: number; theme?: "dark" | "light" }) {
  const visible = stack.slice(0, max)
  const rest = stack.length - max

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((tech) => (
        <TechIcon key={tech} name={tech} className="size-5" theme={theme} />
      ))}
      {rest > 0 && (
        <div className={`flex size-9 items-center justify-center rounded-lg border font-mono text-[10px] sm:size-10 ${
          theme === "light" ? "border-black/10 bg-black/[0.02] text-black/70" : "border-white/15 bg-[#1c1c1c] text-white/70"
        }`}>
          +{rest}
        </div>
      )}
    </div>
  )
}

export function TechGrid({ stack, theme = "dark" }: { stack: string[]; theme?: "dark" | "light" }) {
  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((tech) => (
        <TechIcon key={tech} name={tech} className="size-5" showLabel theme={theme} />
      ))}
    </div>
  )
}
