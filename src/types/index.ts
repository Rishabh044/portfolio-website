export interface Experience {
  company: string
  role: string
  duration: string
  location: string
  description?: string
  highlights?: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
}

export interface Skill {
  category: string
  items: string[]
}

export interface Certification {
  name: string
  issuer: string
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  github: string
  summary: string
}
