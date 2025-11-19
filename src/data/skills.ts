import type { Skill } from '../types'

export const skills: Skill[] = [
  // Languages
  { id: 'python', name: 'Python', level: 'Advanced' },
  { id: 'java', name: 'Java', level: 'Advanced' },
  { id: 'typescript', name: 'TypeScript', level: 'Advanced' },
  { id: 'javascript', name: 'JavaScript (ES6+)', level: 'Advanced' },
  { id: 'sql', name: 'SQL', level: 'Intermediate' },
  { id: 'scala', name: 'Scala', level: 'Intermediate' },

  // AI & Machine Learning
  { id: 'tensorflow', name: 'TensorFlow', level: 'Advanced' },
  { id: 'pytorch', name: 'PyTorch', level: 'Intermediate' },
  { id: 'scikit-learn', name: 'Scikit-Learn', level: 'Advanced' },
  { id: 'computer-vision', name: 'Computer Vision', level: 'Intermediate' },
  { id: 'pandas', name: 'Pandas', level: 'Advanced' },
  { id: 'numpy', name: 'NumPy', level: 'Advanced' },

  // AI APIs & Integrations
  { id: 'gemini', name: 'Gemini API', level: 'Intermediate' },
  { id: 'openai', name: 'OpenAI GPT', level: 'Intermediate' },

  // Frontend & Full Stack
  { id: 'react', name: 'React.js', level: 'Advanced' },
  { id: 'nextjs', name: 'Next.js', level: 'Intermediate' },
  { id: 'nodejs', name: 'Node.js', level: 'Intermediate' },
  { id: 'tailwindcss', name: 'TailwindCSS', level: 'Advanced' },
  { id: 'html', name: 'HTML', level: 'Advanced' },
  { id: 'css', name: 'CSS', level: 'Advanced' },

  // Cloud & Infrastructure
  { id: 'aws', name: 'AWS (EC2, S3, RDS)', level: 'Intermediate' },
  { id: 'docker', name: 'Docker', level: 'Intermediate' },
  { id: 'mongodb', name: 'MongoDB', level: 'Intermediate' },
  { id: 'postgresql', name: 'PostgreSQL', level: 'Intermediate' },
  { id: 'django', name: 'Django', level: 'Intermediate' }
]
