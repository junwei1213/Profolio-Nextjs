"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Tan Jun Wei (Justin). Built with AI-powered tools. The source code is available on{" "}
                        <Link
                            href="https://github.com/junwei1213"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="https://github.com/junwei1213" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://x.com/junwei1213" target="_blank" rel="noreferrer">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/tan-jun-wei-91a715180/" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
