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
  "E-commerce Operations",
  "Multi-platform Management",
  "Supply Chain Management",
  "Cross-border E-commerce",
  "Inventory Management",
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
  {
    title: "QuizMaster Mobile App",
    description: "Interactive quiz application for Android with multiple categories",
    tech: ["React Native", "JavaScript", "MySQL"],
    details:
      "Developed a cross-platform quiz application using React Native that features multiple quiz categories, timed challenges, and a global leaderboard. Implemented user authentication and real-time score tracking with Firebase backend.",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website with blog functionality",
    tech: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS", "Vercel"],
    details:
      "Designed and developed a personal portfolio website using Next.js and TypeScript. Implemented responsive design with Tailwind CSS and Shadcn UI components for a polished user interface. Deployed on Vercel for optimal performance with analytics integration. Features include dark/light mode, blog section, and SEO optimization.",
  },
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
  {
    company: "Insight Alpha",
    role: "PHP Developer Intern",
    period: "May 2022 - Sep 2022",
    achievements: [
      "Developed and maintained WordPress websites for clients",
      "Gained hands-on experience with modern JavaScript frameworks including React, Angular, and React Native",
      "Built responsive web interfaces using Bootstrap and Node.js",
      "Collaborated with senior developers on full-stack web applications",
      "Participated in code reviews and agile development processes",
    ],
  },
  {
    company: "E-commerce Project Experience",
    role: "E-commerce Operations",
    period: "Jun 2020 - Oct 2022",
    achievements: [
      "Gained expertise in multi-platform e-commerce operations across Shopee, Lazada, and TikTok Shop",
      "Developed skills in product listings optimization and inventory management",
      "Established knowledge of international shipping logistics and supplier relations",
      "Learned cross-platform inventory synchronization techniques",
      "Built understanding of Chinese market supply chains and quality control processes",
    ],
  },
  {
    company: "PS Global Sdn Bhd",
    role: "IT Support Intern",
    period: "May 2019 - Aug 2019",
    achievements: [
      "Provided technical support for Google Cloud products including Docs, Sheets, and Firebase",
      "Troubleshot hardware and software issues for staff across departments",
      "Created documentation for internal IT processes and user guides",
      "Collaborated with the IT team to improve system efficiency and user experience",
    ],
  },
  {
    company: "E Cytech Dot Com",
    role: "Sales Assistant",
    period: "Dec 2017 - Mar 2018",
    achievements: [
      "Provided technical advice and product recommendations to customers in a computer retail shop",
      "Assisted with inventory management and product displays",
      "Handled point-of-sale transactions and customer inquiries",
      "Gained knowledge of computer hardware components and peripherals",
      "Developed customer service and technical communication skills",
    ],
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

