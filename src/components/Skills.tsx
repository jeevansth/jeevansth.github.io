import React from 'react'
import type { Skill } from '../types'
import { FaPython, FaReact, FaAws, FaDocker, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa'
import { SiTensorflow, SiOpencv, SiKubernetes, SiMongodb, SiTypescript, SiScikitlearn, SiPytorch, SiFastapi, SiPostgresql, SiRedis, SiJest, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { BackgroundCanvas } from './BackgroundCanvas'

type Props = { skills: Skill[] }

const ProfessionalSkills: React.FC<Props> = ({ skills }) => {
  const importantSkills = skills.filter(skill =>
    [
      'python', 'tensorflow', 'pytorch', 'scikit-learn', 'opencv', 'fastapi', 'pandas', 'numpy',
      'react', 'typescript', 'nodejs', 'nextjs', 'tailwindcss', 'jest', 'html', 'css', 'javascript',
      'aws', 'docker', 'kubernetes', 'mongodb', 'postgresql', 'redis', 'git'
    ].includes(skill.id)
  )

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <SiTensorflow className="text-xl text-orange-600" />,
      skills: importantSkills.filter(s =>
        ['python', 'tensorflow', 'pytorch', 'scikit-learn', 'computer-vision', 'fastapi', 'pandas', 'numpy'].includes(s.id)
      )
    },
    {
      title: "Frontend & Full Stack",
      icon: <FaReact className="text-xl text-blue-600" />,
      skills: importantSkills.filter(s =>
        ['react', 'typescript', 'nodejs', 'nextjs', 'tailwindcss', 'jest', 'html', 'css', 'javascript'].includes(s.id)
      )
    },
    {
      title: "Cloud & Infrastructure",
      icon: <FaAws className="text-xl text-yellow-600" />,
      skills: importantSkills.filter(s =>
        ['aws', 'docker', 'kubernetes', 'mongodb', 'postgresql', 'redis', 'git'].includes(s.id)
      )
    }
  ]

  const getSkillIcon = (skillId: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'python': <FaPython className="text-2xl text-blue-500" />,
      'tensorflow': <SiTensorflow className="text-2xl text-orange-500" />,
      'pytorch': <SiPytorch className="text-2xl text-red-500" />,
      'scikit-learn': <SiScikitlearn className="text-2xl text-indigo-500" />,
      'computer-vision': <SiOpencv className="text-2xl text-green-500" />,
      'fastapi': <SiFastapi className="text-2xl text-teal-500" />,
      'pandas': <FaPython className="text-2xl text-yellow-600" />,
      'numpy': <FaPython className="text-2xl text-blue-600" />,
      'react': <FaReact className="text-2xl text-cyan-500" />,
      'typescript': <SiTypescript className="text-2xl text-blue-600" />,
      'nodejs': <FaNodeJs className="text-2xl text-green-600" />,
      'nextjs': <SiNextdotjs className="text-2xl text-gray-800" />,
      'tailwindcss': <SiTailwindcss className="text-2xl text-cyan-400" />,
      'jest': <SiJest className="text-2xl text-red-600" />,
      'html': <FaReact className="text-2xl text-orange-500" />,
      'css': <FaReact className="text-2xl text-blue-500" />,
      'javascript': <FaReact className="text-2xl text-yellow-500" />,
      'aws': <FaAws className="text-2xl text-yellow-500" />,
      'docker': <FaDocker className="text-2xl text-blue-400" />,
      'kubernetes': <SiKubernetes className="text-2xl text-blue-600" />,
      'mongodb': <SiMongodb className="text-2xl text-green-500" />,
      'postgresql': <SiPostgresql className="text-2xl text-blue-700" />,
      'redis': <SiRedis className="text-2xl text-red-500" />,
      'git': <FaGitAlt className="text-2xl text-orange-600" />
    }
    return icons[skillId] || <FaPython className="text-2xl text-gray-500" />
  }

  return (
    <section id="skills" className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Core Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused expertise in modern software development and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all">
                    <div className="mb-2">{getSkillIcon(skill.id)}</div>
                    <div className="text-center font-medium text-gray-900 text-xs">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-light text-gray-900 mb-2">Technical Focus Areas</h3>
            <p className="text-gray-600 text-sm">Building scalable solutions with cutting-edge technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2"><SiTensorflow className="text-2xl text-blue-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Machine Learning</h4>
              <p className="text-gray-600 text-xs">TensorFlow, PyTorch, scikit-learn, model deployment</p>
            </div>

            <div className="text-center p-4">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2"><SiOpencv className="text-2xl text-green-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Computer Vision</h4>
              <p className="text-gray-600 text-xs">Object detection, image processing, AI vision</p>
            </div>

            <div className="text-center p-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2"><FaReact className="text-2xl text-purple-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Full Stack</h4>
              <p className="text-gray-600 text-xs">React, Node.js, TypeScript, modern web development</p>
            </div>

            <div className="text-center p-4">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2"><FaAws className="text-2xl text-orange-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Cloud & DevOps</h4>
              <p className="text-gray-600 text-xs">AWS, Docker, Kubernetes, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSkills