import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { experience } from './data/experience'

const App: React.FC = () => {
  return (
    <div className="min-h-screen antialiased bg-gradient-to-b from-white to-gray-50 dark:from-[#071029] dark:to-[#041027]">
      <Header />
      <main className="pt-20">
        <About />
        <Skills skills={skills} />
        <Experience items={experience} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
