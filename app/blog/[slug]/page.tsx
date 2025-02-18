import { blogPosts } from "@/data/portfolioData"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-8">{post.date}</p>
      <div className="prose dark:prose-invert">{post.content}</div>
    </div>
  )
}

