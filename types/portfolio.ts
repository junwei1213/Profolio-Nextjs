export type Skill = string

export interface Experience {
  company: string
  role: string
  period: string
  achievements: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  details: string
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
}

