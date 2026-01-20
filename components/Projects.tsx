"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
    const projects = [
        {
            title: "AI-Powered Portfolio Generator",
            description:
                "Next.js 15 app that generates personalized portfolios using GPT-4 API. Features AI-driven content suggestions and automatic SEO optimization.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["Next.js 15", "TypeScript", "GPT-4 API", "Tailwind CSS", "Vercel"],
            github: "https://github.com/junwei1213",
            demo: "https://justintan.my",
        },
        {
            title: "React Native Fitness Tracker",
            description:
                "Cross-platform mobile app with AI workout recommendations. Integrates Claude API for personalized training plans based on user progress.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["React Native", "Expo", "Claude API", "Supabase", "TypeScript"],
            github: "https://github.com/junwei1213",
            demo: "https://justintan.my",
        },
        {
            title: "E-Commerce Dashboard",
            description:
                "Admin dashboard with real-time analytics built with Next.js 14. Features AI-powered inventory predictions and customer insights.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["Next.js", "PostgreSQL", "shadcn/ui", "AI Analytics", "Vercel"],
            github: "https://github.com/junwei1213",
            demo: "https://justintan.my",
        },
    ]

    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        AI-enhanced applications built with modern technologies
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-4">
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
