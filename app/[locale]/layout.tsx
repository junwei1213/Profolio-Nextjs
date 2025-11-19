import type React from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata by locale
const metadataByLocale = {
  en: {
    title: "Tan Jun Wei | AI-Powered Full-Stack Developer | Next.js, React Native & AI Integration SG/MY",
    description: "AI-native developer (SG/MY) leveraging Claude Code & GPT-4 for 10x faster development. Specializing in AI-integrated apps, Next.js 15, React Native & ChatGPT API integration. 3-week MVP delivery standard.",
    keywords: "AI-powered developer Singapore, AI-integrated app development Malaysia, ChatGPT integration iOS developer, Next.js AI-enhanced development, rapid prototyping with AI tools, Claude Code developer, AI-assisted web development, GPT-4 API integration services"
  },
  zh: {
    title: "陈骏玮 | AI 驱动全栈开发者 | Next.js、React Native 与 AI 集成 新加坡/马来西亚",
    description: "AI 原生开发者(新加坡/马来西亚),使用 Claude Code 与 GPT-4 实现 10 倍开发速度。专注于 AI 集成应用、Next.js 15、React Native 与 ChatGPT API 集成。3 周 MVP 交付为标准。",
    keywords: "新加坡 AI 开发者, 马来西亚 AI 集成应用开发, iOS ChatGPT 集成开发, Next.js AI 增强开发, AI 工具快速原型开发, Claude Code 开发者, AI 辅助 Web 开发, GPT-4 API 集成服务"
  },
  ms: {
    title: "Tan Jun Wei | Pembangun Full-Stack Berkuasa AI | Next.js, React Native & Integrasi AI SG/MY",
    description: "Pembangun AI-native (SG/MY) menggunakan Claude Code & GPT-4 untuk pembangunan 10x lebih pantas. Pakar dalam aplikasi bersepadu AI, Next.js 15, React Native & integrasi ChatGPT API. Penyampaian MVP 3 minggu standard.",
    keywords: "pembangun AI Singapura, pembangunan aplikasi AI Malaysia, integrasi ChatGPT iOS, pembangunan Next.js AI, prototaip pantas alat AI, pembangun Claude Code, pembangunan web AI, perkhidmatan integrasi GPT-4 API"
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as keyof typeof metadataByLocale;
  const meta = metadataByLocale[locale] || metadataByLocale.en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "website",
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ms' ? 'ms_MY' : 'en_US',
      url: `https://justintan.my${locale === 'en' ? '' : `/${locale}`}`,
      siteName: "Tan Jun Wei - Full-Stack Developer",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "https://justintan.my/profile.webp",
          width: 400,
          height: 400,
          alt: "Tan Jun Wei - Full-Stack Developer Profile",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@junwei1213",
      creator: "@junwei1213",
      title: meta.title,
      description: meta.description,
      images: ["https://justintan.my/profile.webp"],
    },
    generator: "v0.dev",
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="z6gftbehgp519taiykymcg3w8smlsc" />
        {/* Google Analytics */}
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
        {/* Favicons */}
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
        {/* Schema Markup */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tan Jun Wei (Justin)",
              "url": "https://justintan.my",
              "image": "https://justintan.my/profile.webp",
              "sameAs": [
                "https://www.linkedin.com/in/tan-jun-wei-91a715180/",
                "https://github.com/junwei1213"
              ],
              "jobTitle": "Freelance Full-Stack Developer & SEO Consultant",
              "knowsAbout": ["Next.js", "React", "Vue.js", "Android Development", "iOS Development", "SEO Optimization", "Web Development", "Mobile App Development", "UI/UX Design", "Rapid Prototyping"]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
