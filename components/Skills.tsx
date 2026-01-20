"use client"

import { Badge } from "@/components/ui/badge"

export function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["Next.js 15/14", "React 19", "TypeScript", "Tailwind CSS", "Vue.js", "shadcn/ui"],
        },
        {
            title: "Backend & Mobile",
            skills: ["Node.js", "React Native", "Expo", "PostgreSQL", "Supabase", "API Integration"],
        },
        {
            title: "AI & Tools",
            skills: ["Claude Code", "Cursor AI", "GPT-4 API", "v0.dev", "AI Prompt Engineering", "Windsurf"],
        },
        {
            title: "DevOps & SEO",
            skills: ["Vercel", "Git", "Next.js SEO", "Analytics", "Performance Optimization", "PWA"],
        },
    ]

    return (
        <section id="skills" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Skills & Expertise
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Comprehensive tech stack powered by AI-assisted development
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="flex flex-col space-y-4">
                            <h3 className="text-xl font-bold">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="outline" className="bg-secondary/50">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
