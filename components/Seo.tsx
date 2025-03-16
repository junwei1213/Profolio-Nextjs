import type React from "react"
import Head from "next/head"

interface SeoProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
  keywords?: string // Add keywords prop
}

const Seo: React.FC<SeoProps> = ({ title, description, image, article, keywords }) => {
  const defaultTitle = "Justin Tan (Tan Jun Wei) - Software Developer"
  const defaultDescription =
    "Portfolio of Justin Tan (Tan Jun Wei), a software developer specializing in web and mobile development, React, Vue.js, and Java applications."
  const defaultImage = "/profile.webp"
  const defaultKeywords = "software developer, web development, mobile development, React, Vue.js, Java, Justin Tan, Tan Jun Wei"

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    keywords: keywords || defaultKeywords,
    url: "https://justin-tan.my",
  };

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
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tan Jun Wei (Justin)" />
      <link rel="canonical" href={seo.url} />
    </Head>
  );
};

export default Seo

