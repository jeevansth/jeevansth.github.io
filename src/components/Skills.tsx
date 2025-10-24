import React from 'react';
import type { Skill } from '../types';
import { FaPython, FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiKubernetes, SiMongodb, SiTypescript } from 'react-icons/si';
import { BackgroundCanvas } from './BackgroundCanvas';

type Props = { skills: Skill[] }

const ProfessionalSkills: React.FC<Props> = ({ skills }) => {
  const importantSkills = skills.filter(skill =>
    ['python', 'tensorflow', 'react', 'typescript', 'computer-vision',
     'aws', 'docker', 'kubernetes', 'mongodb'].includes(skill.id)
  );

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <SiTensorflow className="text-2xl text-orange-600" />,
      skills: importantSkills.filter(s => ['python', 'tensorflow', 'computer-vision'].includes(s.id))
    },
    {
      title: "Frontend & Full Stack",
      icon: <FaReact className="text-2xl text-blue-600" />,
      skills: importantSkills.filter(s => ['react', 'typescript'].includes(s.id))
    },
    {
      title: "Cloud & Infrastructure",
      icon: <FaAws className="text-2xl text-yellow-600" />,
      skills: importantSkills.filter(s => ['aws', 'docker', 'kubernetes', 'mongodb'].includes(s.id))
    }
  ];

  const getSkillIcon = (skillId: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'python': <FaPython className="text-3xl text-blue-500" />,
      'tensorflow': <SiTensorflow className="text-3xl text-orange-500" />,
      'computer-vision': <SiOpencv className="text-3xl text-green-500" />,
      'react': <FaReact className="text-3xl text-cyan-500" />,
      'typescript': <SiTypescript className="text-3xl text-blue-600" />,
      'aws': <FaAws className="text-3xl text-yellow-500" />,
      'docker': <FaDocker className="text-3xl text-blue-400" />,
      'kubernetes': <SiKubernetes className="text-3xl text-blue-600" />,
      'mongodb': <SiMongodb className="text-3xl text-green-500" />
    };
    return icons[skillId] || <FaPython className="text-3xl text-gray-500" />;
  };

  return (
    <section id="skills" className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Core Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Focused expertise in modern software development and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                    <div className="mb-3">{getSkillIcon(skill.id)}</div>
                    <div className="text-center font-medium text-gray-900 text-sm">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">Technical Focus Areas</h3>
            <p className="text-gray-600 text-lg">Building scalable solutions with cutting-edge technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Machine Learning */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><SiTensorflow className="text-3xl text-blue-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-2">Machine Learning</h4>
              <p className="text-gray-600 text-sm">TensorFlow, PyTorch, model deployment</p>
            </div>
            {/* Computer Vision */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><SiOpencv className="text-3xl text-green-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-2">Computer Vision</h4>
              <p className="text-gray-600 text-sm">Object detection, image processing, AI vision</p>
            </div>
            {/* Full Stack */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><FaReact className="text-3xl text-purple-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-2">Full Stack</h4>
              <p className="text-gray-600 text-sm">React, TypeScript, modern web development</p>
            </div>
            {/* Cloud & DevOps */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><FaAws className="text-3xl text-orange-600" /></div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud & DevOps</h4>
              <p className="text-gray-600 text-sm">AWS, Docker, Kubernetes, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSkills;
