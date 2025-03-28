"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  Linkedin,
  Moon,
  Sun,
  FileDown,
  ChevronDown,
  Github,
} from "lucide-react";
import NavLink from "./NavLink";
import SocialLink from "./SocialLink";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import BlogPostCard from "./BlogPostCard";
import { skills, experiences, projects, blogPosts } from "@/data/portfolioData";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import fs from "fs";

interface PortfolioProps {
  blurDataURL: string; // Define the prop type
}

const Portfolio: React.FC<PortfolioProps> = ({ blurDataURL }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const mobileOptimizedVariants = {
    hidden: {
      opacity: 0,
      translateX: 20,
      scale: 1,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        mass: 0.5,
        stiffness: 120,
        damping: 10,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <nav className="bg-background border-b border-border fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Image
                  src={
                    theme === "light"
                      ? "/icons/logo-light.png"
                      : "/icons/logo-dark.png"
                  }
                  alt="JT Logo"
                  width={40}
                  height={40}
                  className="h-9 w-auto transition-all duration-200 mr-2"
                  priority
                />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Tan Jun Wei
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#blog">Blog</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="hover:scale-110 transition-transform"
                >
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-background/80">
                <NavLink href="#about" mobile>
                  About
                </NavLink>
                <NavLink href="#experience" mobile>
                  Experience
                </NavLink>
                <NavLink href="#projects" mobile>
                  Projects
                </NavLink>
                <NavLink href="#blog" mobile>
                  Blog
                </NavLink>
                <NavLink href="#contact" mobile>
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section
          id="about"
          className="pt-24 pb-16 px-4 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                    Tan Jun Wei (Justin)
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Software Developer
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="group">
                    Contact Me
                    <ExternalLink
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() =>
                      window.open("/resume-tan-jun-wei.pdf", "_blank")
                    }
                  >
                    Download CV
                    <FileDown
                      className="ml-2 group-hover:translate-y-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </div>
                <div className="flex justify-center md:justify-start space-x-4">
                  <SocialLink
                    href="mailto:junweidec@gmail.com"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/tan-jun-wei-91a715180/"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </SocialLink>
                  {/* github */}
                  <SocialLink
                    href="https://github.com/junwei1213"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </SocialLink>
                </div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={!isMobile && "hidden"}
                  animate={!isMobile && "visible"}
                  variants={isMobile ? undefined : mobileOptimizedVariants}
                  className="relative optimize-animation"
                >
                  <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96 gpu-accelerate">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse" />
                    <div className="relative rounded-full overflow-hidden border-4 border-primary/20">
                      {isMobile ? (
                        <Image
                          src="/profile-mobile.webp"
                          alt="Tan Jun Wei - Profile"
                          width={256}
                          height={256}
                          sizes="256px"
                          quality={85}
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src="/profile.webp"
                          alt="Tan Jun Wei - Profile"
                          width={400}
                          height={400}
                          sizes="384px"
                          quality={85}
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Skills & Expertise
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  A comprehensive list of my technical skills and areas of
                  expertise
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "p-6 rounded-lg backdrop-blur-sm border border-border",
                      "bg-gradient-to-br from-background/50 to-background hover:from-primary/5 hover:to-primary/10",
                      "transition-all duration-300 ease-out"
                    )}
                  >
                    <p className="text-center font-medium">{skill}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Work Experience
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  My professional journey and achievements
                </motion.p>
              </div>

              <motion.div variants={containerVariants} className="space-y-8">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Featured Projects
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  A selection of my most impactful work
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        
        {/* Blog Section */}
        <section id="blog" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Latest Articles
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  Thoughts and insights about software development
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-8"
              >
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={index} post={post} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  I'm currently available for new opportunities
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <Button asChild size="lg" className="group">
                  <Link href="mailto:junweidec@gmail.com">
                    Contact Me
                    <ExternalLink
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Tan Jun Wei (Justin). All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
