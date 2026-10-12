import type { Project } from '../types'
import aiStudyTrackerImg from '../images/ai-study-tracker.png'

export const projects: Project[] = [
  {
    id: 'ai-study-tracker',
    title: 'AI-Study Tracker',
    description:
      'Created a React.js and Tailwind CSS study tracker with session logging and analytics, enabling tracking of 50+ weekly sessions across 5+ subjects. Built AI-ready recommendation and quiz modules with 20+ automated questions per subject for balanced study habits. Engineered scalable AI features for topic tracking and analytics, producing 100+ personalized learning insights across subjects.',
    tech: ['React', 'TailwindCSS', 'Node.js', 'Gemini API', 'MongoDB'],
    github: 'https://github.com/shresthajeevan/AI-Study-Tracker.git',
    image: aiStudyTrackerImg
  }
]
