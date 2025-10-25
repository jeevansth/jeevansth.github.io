export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  image?: string 
}

export type Skill = {
  id: string
  name: string
  level?: string
}

export type Experience = {
  id: string
  company: string
  role: string
  duration: string
  achievements: string[]
}
