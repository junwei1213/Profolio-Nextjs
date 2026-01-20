import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
    const experiences = [
        {
            title: "Freelance Full-Stack Developer",
            company: "Self-Employed (SG/MY)",
            period: "2024 - Present",
            description:
                "Building AI-integrated web and mobile applications using Next.js 15, React Native, and AI APIs. Delivering 3-week MVPs leveraging Claude Code and GPT-4 for 10x faster development.",
        },
        {
            title: "AI-Enhanced Development Specialist",
            company: "Various Clients",
            period: "2023 - 2024",
            description:
                "Pioneering AI-assisted development workflows with Cursor AI, v0.dev, and Windsurf. Integrated ChatGPT/Claude APIs into iOS/Android apps for intelligent features that create competitive advantages.",
        },
        {
            title: "SEO & Web Performance Consultant",
            company: "Digital Projects",
            period: "2022 - Present",
            description:
                "Optimizing Next.js applications for search engines and performance. Achieving 95+ PageSpeed scores through AI-powered code optimization and modern web techniques.",
        },
    ]

    return (
        <section id="experience" className="py-16 md:py-24 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Experience
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Professional journey in AI-powered development
                    </p>
                </div>
                <div className="grid gap-6 max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{exp.title}</CardTitle>
                                <CardDescription>
                                    {exp.company} · {exp.period}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{exp.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
