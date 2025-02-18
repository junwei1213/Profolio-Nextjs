"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, Mail, ExternalLink, Linkedin } from "lucide-react"

// Define types for our data structures
type Skill = string

interface Experience {
  company: string
  role: string
  period: string
  achievements: string[]
}

interface Project {
  title: string
  description: string
  tech: string[]
  details: string
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills: Skill[] = [
    "Java",
    "React.js",
    "Vue.js",
    "Android",
    "MS-SQL",
    "Apache Tomcat",
    "Struts",
    "API Integration",
  ]

  const experiences: Experience[] = [
    {
      company: "Le Tach Pte Ltd",
      role: "Software Developer",
      period: "Aug 2023 - Sep 2024",
      achievements: [
        "Improved system efficiency by 25% through optimizations",
        "Created comprehensive documentation and training materials",
        "Managed CRM system built on Tomcat and Java",
      ],
    },
    {
      company: "Pan United Corporation Ltd",
      role: "Software Developer",
      period: "Oct 2022 - Jun 2023",
      achievements: [
        "Integrated facial recognition into vending machines",
        "Implemented automated monitoring systems",
        "Developed dynamic web applications using Vue.js and React.js",
      ],
    },
  ]

  const projects: Project[] = [
    {
      title: "Vending Machine System",
      description: "Android application for streamlined vending machine interactions",
      tech: ["Java", "Android Studio", "MS-SQL"],
      details:
        "Designed and implemented an Android application with features for product browsing, virtual cart management, and cashless payment integration.",
    },
    {
      title: "CRM System",
      description: "Enterprise-level CRM system for customer lifecycle management",
      tech: ["Java", "Apache Tomcat", "Struts", "MS-SQL"],
      details:
        "Developed a comprehensive CRM system focusing on customer retention and sales growth, utilizing Struts Framework and Apache Tomcat.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Tan Jun Wei</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#about" mobile>
                About
              </NavLink>
              <NavLink href="#experience" mobile>
                Experience
              </NavLink>
              <NavLink href="#projects" mobile>
                Projects
              </NavLink>
              <NavLink href="#contact" mobile>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Software Developer</h1>
          <p className="text-xl text-gray-600 mb-8">
            Passionate about creating efficient, scalable applications with over 2 years of experience in web and mobile
            development.
          </p>
          <div className="flex justify-center space-x-4">
            <SocialLink href="mailto:junweidec@gmail.com" aria-label="Email">
              <Mail size={24} />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <Linkedin size={24} />
            </SocialLink>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">I'm currently available for new opportunities.</p>
          <a
            href="mailto:junweidec@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Me
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}

// Reusable components
const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean }> = ({
  href,
  children,
  mobile,
}) => (
  <a
    href={href}
    className={`${
      mobile ? "block" : "inline-block"
    } px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200`}
  >
    {children}
  </a>
)

const SocialLink: React.FC<{ href: string; "aria-label": string; children: React.ReactNode }> = ({
  href,
  "aria-label": ariaLabel,
  children,
}) => (
  <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors duration-200" aria-label={ariaLabel}>
    {children}
  </a>
)

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
    <p className="text-gray-600 mb-2">
      {experience.role} | {experience.period}
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {experience.achievements.map((achievement, i) => (
        <li key={i}>{achievement}</li>
      ))}
    </ul>
  </div>
)

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
    <p className="text-gray-600 mb-4">{project.description}</p>
    <div className="mb-4">
      {project.tech.map((tech, i) => (
        <span key={i} className="inline-block px-3 py-1 mr-2 mb-2 bg-blue-100 text-blue-800 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    <p className="text-gray-700">{project.details}</p>
  </div>
)

export default Portfolio

