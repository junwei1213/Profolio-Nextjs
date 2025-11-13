import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Title 保持不变：完美
  title: "Tan Jun Wei | High-Performance Web/App Dev & SEO Expert SG/MY",

  // 优化 Description：强调远程和解决方案驱动 (160 字符)
  description:
    "Remote dev (SG/MY exp.) specializing in rapid prototyping, UI/UX sensitivity, Next.js/React Native & SEO. Your solution-driven expert. Let's build it!",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justin-tan.my",
    site_name: "Tan Jun Wei - Full-Stack Developer",
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
        <meta name="facebook-domain-verification" content="z6gftbehgp519taiykymcg3w8smlsc" />
        {/* Google Analytics - 最佳实践 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HVH8LDY8RQ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HVH8LDY8RQ');
          `}
        </Script>
        {/* Favicons & Manifests */}
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
        {/* 优化后的 Schema Markup */}
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
              "jobTitle": "Freelance Full-Stack Developer & SEO Consultant",
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
              "knowsAbout": ["Next.js", "React", "Vue.js", "Android Development", "iOS Development", "SEO Optimization", "Web Development", "Mobile App Development", "UI/UX Design", "Rapid Prototyping"]
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
