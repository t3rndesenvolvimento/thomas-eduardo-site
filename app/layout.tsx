import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Syne, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LayoutShell } from "@/components/layout-shell"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
})

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
})

const signature = localFont({
  src: "../public/fonts/ShadowHand.ttf",
  variable: "--font-signature",
  display: "swap",
})

const SITE_URL = "https://thomaseduardo.com.br"
const SITE_TITLE = "Thomas Eduardo | Full Stack & Product Engineer"
const SITE_DESCRIPTION =
  "Full Stack / Product Engineer em São Paulo. Next.js, React, TypeScript e Node.js. Sistemas escaláveis, produtos digitais e cases com resultado mensurável."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Thomas Eduardo",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Thomas Eduardo",
    "Full Stack Developer São Paulo",
    "Product Engineer",
    "Next.js Developer",
    "React Developer São Paulo",
    "TypeScript",
    "Node.js",
    "Engenheiro de Software",
    "Portfólio Desenvolvedor",
  ],
  authors: [{ name: "Thomas Eduardo", url: SITE_URL }],
  creator: "Thomas Eduardo",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Thomas Eduardo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Eduardo - Full Stack & Product Engineer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Thomas Eduardo",
      url: SITE_URL,
      jobTitle: "Full Stack / Product Engineer",
      description: SITE_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressCountry: "BR",
      },
      sameAs: [
        "https://github.com/devthomaseduardo",
        "https://www.linkedin.com/in/devthomaseduardo",
        "https://www.thomaseduardo.com.br",
      ],
    },
  ],
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
}

export const icons = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon.png", type: "image/png", sizes: "32x32" },
  ],
  apple: "/favicon.png",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontVars = `${inter.variable} ${mono.variable} ${display.variable} ${signature.variable}`

  return (
    <html
      lang="pt-BR"
      className={`dark ${fontVars} bg-background loader-boot loader-active`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>{`
            html.loader-boot::before { display: none !important; }
            html.loader-active, html.loader-active body { overflow: auto !important; }
          `}</style>
        </noscript>
      </head>
      <body
        className="font-sans font-light antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9K46BCS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9K46BCS');`,
          }}
        />

        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V95BP4VGFX"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-V95BP4VGFX');`,
          }}
        />

        <Script
          id="posthog"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_wNUQSvKvfSVPCDCh7DTHk7hzkSc7A4agRv6LLAWWr2qn',{api_host:'https://us.i.posthog.com',ui_host:'https://us.posthog.com',defaults:'2026-05-30',person_profiles:'identified_only'});`,
          }}
        />

        <LayoutShell>{children}</LayoutShell>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
