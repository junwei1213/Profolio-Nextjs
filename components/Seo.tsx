import type React from "react"
import Head from "next/head"

interface SeoProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
}

const Seo: React.FC<SeoProps> = ({ title, description, image, article }) => {
  const defaultTitle = "Justin Tan (Tan Jun Wei) - Software Developer"
  const defaultDescription =
    "Portfolio of Justin Tan (Tan Jun Wei), a software developer with experience in web and mobile development."
  const defaultImage =
    "/profile.webp" // Replace with your actual default image URL

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: "https://justin-tan.my", // Static URL as dynamic paths are not available in App Router
  }

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Head>
  )
}

export default Seo

