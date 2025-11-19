import fs from 'fs'
import path from 'path'
import { setRequestLocale } from 'next-intl/server'
import Portfolio from "@/components/Portfolio"
import { locales } from '@/i18n'

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
  setRequestLocale(locale)

  const blurDataURL = fs.readFileSync(path.join(process.cwd(), 'public/profile-blurDataURL.txt'), 'utf8')

  return <Portfolio blurDataURL={blurDataURL} />
}
