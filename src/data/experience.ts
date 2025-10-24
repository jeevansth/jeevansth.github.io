import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'exp1',
    company: 'Southeast Missouri State University',
    role: 'Graduate Research Assistant',
    duration: 'Aug 2024 – May 2025',
    achievements: [
      'Researched and developed course materials on software supply chain security, threat modeling and vulnerability analysis',
      'Tested and evaluated open-source security tools including OWASP Dependency-Check, Threat Dragon, and SIEM systems for lab integration',
      'Created quizzes, case studies, and hands-on labs covering dependency scanning and secure software design principles',
      'Implemented a secure C login system using MySQL/Oracle with SHA256 hashing to teach vulnerability mitigation'
    ]
  },
  {
    id: 'exp2',
    company: 'Code Asterisk Pvt. Ltd.',
    role: 'Software Engineer Intern',
    duration: 'Nov 2021 – May 2022',
    achievements: [
      'Built a responsive Vue.js storefront with performance optimizations improving engagement',
      'Developed frontend components with CI/CD and automated regression tests (Cucumber BDD)',
      'Collaborated on SQL/Oracle database design to improve query performance'
    ]
  }
]
