import type { Skill, Experience, Project, BlogPost } from "@/types/portfolio"

export const skills: Skill[] = [
  "Java",
  "React.js",
  "Vue.js",
  "Android",
  "MS-SQL",
  "Apache Tomcat",
  "Struts",
  "API Integration",
  "Next.js",
  "TypeScript",
]

export const experiences: Experience[] = [
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

export const projects: Project[] = [
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

export const blogPosts: BlogPost[] = [
  {
    title: "The Future of Web Development: My Thoughts on Next.js 13",
    slug: "future-of-web-development-nextjs-13",
    date: "2023-05-15",
    excerpt:
      "Exploring the new features and improvements in Next.js 13 and how they're shaping the future of web development.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Mastering TypeScript: Tips and Tricks for Better Code",
    slug: "mastering-typescript-tips-and-tricks",
    date: "2023-04-22",
    excerpt: "Learn how to write cleaner, more maintainable code with these advanced TypeScript techniques.",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

