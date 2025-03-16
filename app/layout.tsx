import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tan Jun Wei (Justin) - Software Developer Portfolio",
  description:
    "Portfolio of Tan Jun Wei (Justin), a software developer with experience in web and mobile development.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justin-tan.my",
    site_name: "Justin Tan Portfolio",
  },
  twitter: {
    handle: "@junwei1213",
    site: "@junwei1213",
    cardType: "summary_large_image",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tan Jun Wei (Justin)",
              "url": "https://justin-tan.my",
              "image": "/profile.webp",
              "sameAs": [
                "https://www.linkedin.com/in/tan-jun-wei-91a715180/",
                "https://github.com/junwei1213"
              ],
              "jobTitle": "Software Developer with E-commerce Background",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Le Tach Pte Ltd"
                }
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "E-commerce Operations",
                "validFrom": "2020"
              },
              "knowsAbout": ["Software Development", "E-commerce Operations", "Supply Chain Management", "Cross-border E-commerce"]
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
  );
}
