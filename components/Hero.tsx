"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
            <div className="container">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <Image
                            src="/profile.webp"
                            alt="Tan Jun Wei Profile"
                            fill
                            className="rounded-full object-cover border-4 border-primary/20"
                            priority
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Full-Stack Developer <span className="text-primary">Powered by AI</span>. Design → Code → Deploy, All in One.
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            No 10-person team needed. I leverage AI tools to complete design-to-deployment workflows solo—delivering products that self-iterate, not just code.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="h-12 px-8" asChild>
                            <a href="#contact">
                                Contact Me
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8" asChild>
                            <a href="/resume-tan-jun-wei.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
