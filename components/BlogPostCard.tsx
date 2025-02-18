"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPost } from "@/types/portfolio"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

export default BlogPostCard

