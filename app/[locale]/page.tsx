import { unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/i18n'
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Contact } from "@/components/Contact"

// Generate static pages for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
