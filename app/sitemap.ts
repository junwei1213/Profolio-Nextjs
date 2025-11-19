import { MetadataRoute } from 'next'
import { locales } from '@/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://justintan.my'

  // Generate URLs for all locales
  const localeUrls = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'en' ? 1.0 : 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          zh: `${baseUrl}/zh`,
          ms: `${baseUrl}/ms`,
        },
      },
    },
  ])

  return localeUrls
}
