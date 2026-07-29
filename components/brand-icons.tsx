import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function svgProps(props: IconProps) {
  const { size = 24, className, ...rest } = props
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className,
    fill: "none" as const,
    xmlns: "http://www.w3.org/2000/svg" as const,
    "aria-hidden": true as const,
    ...rest,
  }
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.58.69.48A10.3 10.3 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3ZM9 16.75H6.75V9.5H9v7.25ZM7.88 8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4ZM17.25 16.75H15v-3.9c0-.93-.02-2.12-1.29-2.12-1.3 0-1.5 1.01-1.5 2.05v3.97H10v-7.25h2.16v1h.03c.3-.57 1.04-1.17 2.14-1.17 2.29 0 2.72 1.5 2.72 3.46v3.96Z" />
    </svg>
  )
}

export function ArrowOutIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <rect x="2" y="2" width="20" height="20" rx="7" fill="currentColor" opacity="0.14" />
      <path d="M9 15.5 15.5 9M10.5 9H15.5V14" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M5 7.5h14M5 12h14M5 16.5h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12" />
      <path d="m9 9 6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" />
    </svg>
  )
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="M12 3.5c.4 2.8 1.7 4.1 4.5 4.5-2.8.4-4.1 1.7-4.5 4.5-.4-2.8-1.7-4.1-4.5-4.5 2.8-.4 4.1-1.7 4.5-4.5Z" />
      <path d="M18.5 14c.2 1.4.85 2.05 2.25 2.25-1.4.2-2.05.85-2.25 2.25-.2-1.4-.85-2.05-2.25-2.25 1.4-.2 2.05-.85 2.25-2.25Z" opacity="0.7" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor" opacity="0.14" />
      <path d="m8 12 2.8 2.8L16.5 9" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StackIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M12 4 4.5 8 12 12l7.5-4L12 4Z" fill="currentColor" opacity="0.9" />
      <path d="m4.5 12 7.5 4 7.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <path d="m4.5 15.5 7.5 4 7.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    </svg>
  )
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M12 3c3.5 1.2 5.5 4.2 6 8.5-1.8.4-3.3 1.2-4.5 2.4L12 15.5l-1.5-1.6c-1.2-1.2-2.7-2-4.5-2.4.5-4.3 2.5-7.3 6-8.5Z" fill="currentColor" opacity="0.9" />
      <circle cx="12" cy="9.5" r="1.4" fill="#0a0a0a" />
      <path d="M8.5 15.5c-.8 1.4-1.2 2.8-1 3.8.9-.3 2-.8 3-1.8M15.5 15.5c.8 1.4 1.2 2.8 1 3.8-.9-.3-2-.8-3-1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
