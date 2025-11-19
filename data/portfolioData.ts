import type { Skill, Experience, Project, BlogPost } from "@/types/portfolio"

export const skills: Skill[] = [
  // AI & Modern Development
  "AI-Assisted Development (Claude Code, Cursor)",
  "LLM Integration (ChatGPT, Claude API)",
  "Prompt Engineering",
  "AI Workflow Automation",

  // Frontend
  "Next.js 14/15",
  "React.js",
  "Vue.js",
  "TypeScript",
  "Tailwind CSS",

  // Mobile
  "React Native",
  "Android (Java/Kotlin)",
  "iOS Development",

  // Backend & Database
  "Node.js",
  "API Development",
  "MS-SQL",
  "Firebase",

  // Tools & Deployment
  "Vercel / Netlify",
  "Git & CI/CD",
  "Performance Optimization",
  "SEO Technical Implementation",
]

export const projects: Project[] = [
  {
    title: "Vending Machine System",
    description: "Android application for streamlined vending machine interactions with facial recognition",
    tech: ["Java", "Android Studio", "MS-SQL", "Facial Recognition API"],
    details:
      "Designed and implemented a high-performance Android application integrating facial recognition technology for secure, contactless vending machine operations. Features include real-time product browsing, virtual cart management, and multi-payment gateway integration (cashless/QR). Reduced transaction time by 40% and improved user experience with intuitive UI/UX design. Deployed to production serving 50+ vending machines across Singapore.",
  },
  {
    title: "CRM System",
    description: "Enterprise-level CRM system for customer lifecycle management and sales optimization",
    tech: ["Java", "Apache Tomcat", "Struts", "MS-SQL", "RESTful API"],
    details:
      "Developed a comprehensive CRM system for enterprise client, achieving 25% improvement in system efficiency through database optimization and caching strategies. Built using Struts Framework and Apache Tomcat with robust API integrations. Key features: customer segmentation, automated follow-up workflows, sales pipeline tracking, and advanced reporting dashboards. Managed system maintenance and created detailed technical documentation for seamless knowledge transfer.",
  },
  {
    title: "QuizMaster Mobile App",
    description: "Cross-platform quiz application with real-time leaderboards and gamification",
    tech: ["React Native", "JavaScript", "Firebase", "MySQL"],
    details:
      "Built a feature-rich, cross-platform quiz application using React Native for iOS and Android. Implemented real-time score tracking, global leaderboards, and user authentication with Firebase backend. Features 10+ quiz categories, timed challenges, and progress analytics. Optimized app performance achieving <2s load time and smooth 60fps animations. Demonstrated rapid prototyping skills by delivering MVP in 3 weeks.",
  },
  {
    title: "AI-Powered Portfolio Website (This Site!)",
    description: "High-performance Next.js portfolio built 70% faster using AI-assisted development",
    tech: ["Next.js 15", "TypeScript", "next-intl (i18n)", "Shadcn UI", "Claude Code", "Vercel"],
    details:
      "Built this portfolio in 3 days instead of 2 weeks by leveraging Claude Code for component generation and debugging. Achieved 95+ PageSpeed score through AI-suggested optimizations. Features: multi-language support (EN/ZH/MS) via next-intl, responsive design with Tailwind, dark/light themes, and SEO-optimized metadata per language. The entire codebase is self-documented via AI-generated comments. Demonstrates real-world AI-native development workflow—fast iteration, clean code, production-ready.",
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
    title: "Remote Work as a Developer in Singapore & Malaysia: My 2-Year Journey",
    slug: "remote-work-developer-singapore-malaysia-journey",
    date: "2024-11-10",
    excerpt:
      "Lessons learned working remotely across SG and MY markets. From timezone management to client communication, here's what actually works for freelance developers in Southeast Asia.",
    content:
      "After 2+ years of remote development work spanning Singapore and Malaysia, I've learned what separates successful remote developers from those who struggle. In this post, I share practical strategies for managing clients across borders, optimizing your remote workflow, and building trust without face-to-face meetings. Topics include: timezone optimization, asynchronous communication best practices, invoice & payment systems for cross-border work, and how to position yourself as a premium remote developer in the SEA market.",
  },
  {
    title: "Next.js 14 Performance Optimization: Achieving 95+ PageSpeed Score",
    slug: "nextjs-14-performance-optimization-pagespeed",
    date: "2024-11-05",
    excerpt: "Step-by-step guide to optimizing your Next.js application for maximum performance. Real techniques I used to achieve 95+ Google PageSpeed score on this portfolio.",
    content:
      "Google PageSpeed scores directly impact SEO rankings and user experience. In this detailed guide, I break down the exact optimizations I implemented to achieve a 95+ PageSpeed score on this Next.js 14 portfolio site. You'll learn: Image optimization strategies (WebP, blur placeholders, lazy loading), Code splitting and bundle size reduction, Font optimization with next/font, Server-side rendering vs. Static generation trade-offs, Core Web Vitals optimization (LCP, FID, CLS), Vercel deployment best practices. Includes before/after metrics and code examples you can copy-paste into your own projects.",
  },
  {
    title: "Rapid Prototyping with React Native: MVP to Production in 3 Weeks",
    slug: "rapid-prototyping-react-native-mvp-production",
    date: "2024-10-28",
    excerpt: "How I built and deployed a cross-platform mobile app in just 3 weeks using React Native, Firebase, and smart tooling choices. A case study of the QuizMaster app.",
    content:
      "Speed is everything when validating a product idea. This case study walks through how I took the QuizMaster mobile app from concept to production in just 3 weeks using React Native. You'll discover: My rapid prototyping workflow and tooling setup, How to choose between Expo and React Native CLI, Firebase integration for quick backend setup (auth, real-time database, analytics), Performance optimization techniques for 60fps animations, App Store & Google Play deployment strategies, Common pitfalls to avoid when building cross-platform apps. Perfect for founders and developers who need to move fast without sacrificing quality.",
  },
  {
    title: "Technical SEO for Developers: What Actually Moves the Needle",
    slug: "technical-seo-for-developers-guide",
    date: "2024-10-15",
    excerpt: "Forget keyword stuffing. Here's the technical SEO checklist that actually improves rankings - from a developer who's implemented it dozens of times.",
    content:
      "As a developer who's implemented SEO for multiple clients, I've learned that technical SEO matters more than content marketing promises. This guide covers the developer-focused SEO techniques that actually impact rankings: Structured data implementation (Schema.org, JSON-LD), Meta tag optimization and Open Graph protocol, XML sitemaps and robots.txt configuration, Core Web Vitals and how they affect SEO, Mobile-first indexing requirements, Internal linking architecture, Canonical URLs and duplicate content handling. I also share SEO-specific Next.js configurations and real examples from client projects with measurable results.",
  },
]

