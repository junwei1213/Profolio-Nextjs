"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                            <p className="text-muted-foreground md:text-xl">
                                Have a project in mind or just want to say hi? I'd love to hear from you.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <Mail className="h-6 w-6 text-primary" />
                                <span>junweidec@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="h-6 w-6 text-primary" />
                                <span>+(60) 1111427780</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-6 w-6 text-primary" />
                                <span>Singapore / Malaysia</span>
                            </div>
                        </div>
                    </div>
                    <Card className="border-border/50 bg-background/60 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Input placeholder="First Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Input type="email" placeholder="Email" />
                                </div>
                                <div className="space-y-2">
                                    <Textarea placeholder="Message" className="min-h-[150px]" />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
