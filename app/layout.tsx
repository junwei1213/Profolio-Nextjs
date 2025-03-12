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
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Your Current Company"
              }
            }
          `}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5RCLD4QD');
          `}
        </Script>
      </head>
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="HlYWyMXM3R+9y9l4ru0kMg" async></script>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RCLD4QD"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
