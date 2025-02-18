import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Justin Tan (Tan Jun Wei) - Software Developer Portfolio",
  description:
    "Portfolio of Justin Tan (Tan Jun Wei), a software developer with experience in web and mobile development.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justin-tan.my",
    site_name: "Justin Tan Portfolio",
  },
  twitter: {
    handle: "@yourtwitterhandle", // Replace with your actual Twitter handle
    site: "@yourtwitterhandle",
    cardType: "summary_large_image",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Justin Tan (Tan Jun Wei)",
              "url": "https://justin-tan.my",
              "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-18%20at%2018.23.27_ed4dcf0e.jpg-DcSAw04F7twEPUc07kKP1F4VYvQQTb.jpeg",
              "sameAs": [
                "https://www.linkedin.com/in/yourusername",
                "https://github.com/yourusername"
              ],
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Your Current Company"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

import './globals.css'