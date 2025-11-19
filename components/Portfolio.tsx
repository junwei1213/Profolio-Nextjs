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
  MessageCircle,
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
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface PortfolioProps {
  blurDataURL: string; // Define the prop type
}

const Portfolio: React.FC<PortfolioProps> = ({ blurDataURL }) => {
  const t = useTranslations();
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
                <NavLink href="#about">{t('nav.about')}</NavLink>
                <NavLink href="#experience">{t('nav.experience')}</NavLink>
                <NavLink href="#projects">{t('nav.projects')}</NavLink>
                <NavLink href="#blog">{t('nav.blog')}</NavLink>
                <NavLink href="#contact">{t('nav.contact')}</NavLink>
                <LanguageSwitcher />
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
                <LanguageSwitcher />
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
                  {t('nav.about')}
                </NavLink>
                <NavLink href="#experience" mobile>
                  {t('nav.experience')}
                </NavLink>
                <NavLink href="#projects" mobile>
                  {t('nav.projects')}
                </NavLink>
                <NavLink href="#blog" mobile>
                  {t('nav.blog')}
                </NavLink>
                <NavLink href="#contact" mobile>
                  {t('nav.contact')}
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
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                    {t('hero.title')}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="group">
                    {t('hero.contactBtn')}
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
                    {t('hero.downloadCV')}
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

        {/* Core Value Proposition Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-16"
            >
              {/* Main Value Proposition */}
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold"
                >
                  {t('valueProposition.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                  {t('valueProposition.subtitle')}
                </motion.p>
              </div>

              {/* Core Competencies Grid */}
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-3 gap-8"
              >
                {/* Rapid Prototyping */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold">{t('valueProposition.rapidPrototyping.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('valueProposition.rapidPrototyping.description')}
                  </p>
                </motion.div>

                {/* UI/UX Sensitivity */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold">{t('valueProposition.uiux.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('valueProposition.uiux.description')}
                  </p>
                </motion.div>

                {/* Performance-First */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold">{t('valueProposition.performance.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('valueProposition.performance.description')}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold"
                >
                  {t('services.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-muted-foreground max-w-3xl mx-auto"
                >
                  {t('services.subtitle')}
                </motion.p>
              </div>

              {/* Service Cards */}
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-3 gap-8"
              >
                {/* Web Development */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 p-8 rounded-lg border border-border bg-background hover:shadow-xl transition-all hover:border-primary/50"
                >
                  <h3 className="text-2xl font-bold">{t('services.web.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('services.web.description')}
                  </p>
                  <div className="pt-4">
                    <Badge variant="outline" className="mr-2">Next.js</Badge>
                    <Badge variant="outline" className="mr-2">React</Badge>
                    <Badge variant="outline">Vue</Badge>
                  </div>
                </motion.div>

                {/* Mobile Development */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 p-8 rounded-lg border border-border bg-background hover:shadow-xl transition-all hover:border-primary/50"
                >
                  <h3 className="text-2xl font-bold">{t('services.mobile.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('services.mobile.description')}
                  </p>
                  <div className="pt-4">
                    <Badge variant="outline" className="mr-2">React Native</Badge>
                    <Badge variant="outline" className="mr-2">Android</Badge>
                    <Badge variant="outline">iOS</Badge>
                  </div>
                </motion.div>

                {/* SEO Consulting */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 p-8 rounded-lg border border-border bg-background hover:shadow-xl transition-all hover:border-primary/50"
                >
                  <h3 className="text-2xl font-bold">{t('services.seo.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('services.seo.description')}
                  </p>
                  <div className="pt-4">
                    <Badge variant="outline" className="mr-2">Technical SEO</Badge>
                    <Badge variant="outline" className="mr-2">Analytics</Badge>
                    <Badge variant="outline">Core Web Vitals</Badge>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

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
                  {t('skills.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  {t('skills.subtitle')}
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
                  {t('experience.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  {t('experience.subtitle')}
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
                  {t('projects.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  {t('projects.subtitle')}
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
                  {t('blog.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  {t('blog.subtitle')}
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
                  {t('contact.title')}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground max-w-2xl mx-auto"
                >
                  {t('contact.subtitle')}
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button asChild size="lg" className="group">
                  <Link href="mailto:junweidec@gmail.com">
                    <Mail className="mr-2" size={20} />
                    {t('contact.emailButton')}
                    <ExternalLink
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group">
                  <Link href="https://api.whatsapp.com/send/?phone=601111427780&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={20} />
                    {t('contact.whatsappButton')}
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
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
