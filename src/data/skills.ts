import type { Skill } from '../types'

export const skills: Skill[] = [
  // Languages
  { id: 'python', name: 'Python', level: 'Advanced' },
  { id: 'java', name: 'Java', level: 'Advanced' },
  { id: 'ts', name: 'TypeScript', level: 'Advanced' },
  { id: 'js', name: 'JavaScript (ES6+)', level: 'Advanced' },
  { id: 'sql', name: 'SQL', level: 'Intermediate' },
  { id: 'scala', name: 'Scala', level: 'Intermediate' },

  // Frameworks / Libraries / DB
  { id: 'react', name: 'React.js', level: 'Advanced' },
  { id: 'next', name: 'Next.js', level: 'Intermediate' },
  { id: 'django', name: 'Django', level: 'Intermediate' },
  { id: 'pandas', name: 'Pandas', level: 'Advanced' },
  { id: 'postgres', name: 'PostgreSQL', level: 'Intermediate' },
  { id: 'mongodb', name: 'MongoDB', level: 'Intermediate' },

  // Tools
  { id: 'tailwind', name: 'TailwindCSS', level: 'Advanced' },
  { id: 'docker', name: 'Docker', level: 'Intermediate' },
  { id: 'k8s', name: 'Kubernetes', level: 'Basic' },
  { id: 'aws', name: 'AWS (EC2, S3, RDS)', level: 'Intermediate' },
  { id: 'ci', name: 'CI/CD & GitHub', level: 'Intermediate' }
]
