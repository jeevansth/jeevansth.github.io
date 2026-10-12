import React, { useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { experience } from './data/experience'
import resumeFile from './data/Jeevan_Shrestha.pdf'
import portraitImage from './images/IMG_2149.jpeg'
import EducationSection from './components/Education'
import './portfolio.css'

const nav = [
  { id: 'work', no: '01', label: 'Work' },
  { id: 'education', no: '02', label: 'Education' },
  { id: 'experience', no: '03', label: 'Experience' },
  { id: 'contact', no: '04', label: 'Contact' },
]

const skillGroups = [
  { title: 'Languages & foundations', ids: ['python', 'java', 'typescript', 'javascript', 'sql', 'scala', 'html', 'css'] },
  { title: 'AI, ML & data', ids: ['tensorflow', 'pytorch', 'scikit-learn', 'computer-vision', 'pandas', 'numpy', 'gemini', 'openai'] },
  { title: 'Web & frameworks', ids: ['react', 'nextjs', 'nodejs', 'tailwindcss', 'django'] },
  { title: 'Cloud & databases', ids: ['aws', 'docker', 'mongodb', 'postgresql'] },
]

const orderedExperience = [...experience].sort((a, b) => {
  const yearA = Number((a.duration.match(/\d{4}/) || ['0'])[0])
  const yearB = Number((b.duration.match(/\d{4}/) || ['0'])[0])
  return yearB - yearA
})

const PortfolioRedesign: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHeroRevealed, setIsHeroRevealed] = useState(false)

  const mobileNav = () => setMenuOpen(false)

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>

      <aside className="side-rail" aria-label="Main navigation">
        <a className="rail-mark" href="#home" aria-label="Jeevan Shrestha home">JS</a>
        <div className="rail-rule" />
        <nav className="rail-nav">
          {nav.map((item) => (
            <a key={item.id} href={'#' + item.id} className="rail-link" aria-label={item.no + ' ' + item.label}>
              <span className="rail-no">{item.no}</span>
              <span className="rail-label">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="rail-bottom"><span>SOFTWARE ENGINEER · BEDFORD, TX 76021</span><i /></div>
      </aside>

      <header className="mobile-header">
        <a className="mobile-mark" href="#home">JS</a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">
          {nav.map((item) => <a key={item.id} href={'#' + item.id} onClick={mobileNav}><span>{item.no}</span>{item.label}<ArrowUpRight size={16} /></a>)}
        </nav>}
      </header>

      <main id="main" className="page-content">
        <section className="hero section" id="home">
          <div className="topline">
            <span className="eyebrow">SOFTWARE ENGINEER / AI & WEB</span>
            <span className="micro-note">PERSONAL PORTFOLIO <b>—</b> 2026</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="pretitle">Hello, I’m</p>
              <h1>Jeevan<br /><em>Shrestha.</em></h1>
              <div className="intro-line"><i /><p>Software engineer building practical systems for real-world problems—with thoughtful design and durable implementation.</p></div>
              <div className="hero-actions">
                <a className="text-link strong-link" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
                <a className="text-link" href={resumeFile} download="Jeevan_Shrestha.pdf">Download résumé <ArrowDown size={15} /></a>
              </div>
            </div>
            <button
              type="button"
              className={`hero-art ${isHeroRevealed ? 'is-flipped' : ''}`}
              aria-label={isHeroRevealed ? 'Hide portrait' : 'Reveal portrait'}
              aria-pressed={isHeroRevealed}
              onClick={() => setIsHeroRevealed((value) => !value)}
            >
              <span className="hero-card-inner">
                <span className="hero-card-face hero-card-front">
                  <span className="art-top"><span>INDEPENDENT THINKING</span><span>JS / 001</span></span>
                  <span className="monogram">J<span>S</span></span>
                  <span className="art-bottom"><span>BUILD<br />WITH PURPOSE.</span><span>AI / WEB / SYSTEMS</span></span>
                  <span className="flip-note">CLICK ON ME TO REVEAL ME</span>
                </span>
                <span className="hero-card-face hero-card-back">
                  <span className="portrait-badge">REVEALED</span>
                  <span className="portrait-slot" aria-label="Portrait reveal">
                    <img src={portraitImage} alt="Jeevan Shrestha portrait" />
                  </span>
                  <span className="flip-note">CLICK TO HIDE</span>
                </span>
              </span>
            </button>
          </div>
          <div className="hero-foot">
            <span><MapPin size={14} /> Bedford, Texas 76021</span>
            <span>Open to full-time opportunities</span>
            <a href="#work">Scroll to explore <ArrowDown size={14} /></a>
          </div>
        </section>

        <section className="section section-border" id="work">
          <div className="section-heading">
            <div className="section-kicker"><b>01</b><span>SELECTED WORK</span></div>
            <div className="heading-content"><h2>Things I’ve<br /><em>worked on.</em></h2><p>Projects built to solve a problem, test an idea, or make a process a little better.</p></div>
            <span className="heading-count">{String(projects.length).padStart(2, '0')} PROJECTS</span>
          </div>
          {projects[0] && <article className="featured-project single-project">
            <a className="featured-image" href={projects[0].github || '#work'} target={projects[0].github ? '_blank' : undefined} rel={projects[0].github ? 'noreferrer' : undefined} aria-label={'Open ' + projects[0].title + ' source'}>
              {projects[0].image ? <img src={projects[0].image} alt={projects[0].title + ' preview'} loading="lazy" /> : <div className="image-fallback"><b>{projects[0].title.slice(0, 2).toUpperCase()}</b></div>}
              <span>FEATURED <ArrowUpRight size={15} /></span>
            </a>
            <div className="featured-copy single-project-copy">
              <div className="project-meta"><span>01 / FEATURED</span><span>PRODUCT ENGINEERING</span></div>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].description}</p>
              <div className="tech-line">{projects[0].tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              {projects[0].github && <a className="text-link strong-link project-visit" href={projects[0].github} target="_blank" rel="noreferrer">View source code <ArrowUpRight size={16} /></a>}
            </div>
          </article>}
          <div className="endnote"><span>END OF INDEX</span><span>MORE CURIOSITY, LESS NOISE.</span></div>
        </section>

        <EducationSection />

        <section className="section section-border" id="experience">
          <div className="section-heading"><div className="section-kicker"><b>03</b><span>CAREER NOTES</span></div><div className="heading-content"><h2>Where I’ve<br /><em>made a difference.</em></h2><p>A record of the teams, products, and learning environments I’ve been part of.</p></div></div>
          <div className="experience-list">
            {orderedExperience.map((item, index) => <article className="experience-row" key={item.id}>
              <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="experience-title"><h3>{item.role}</h3><p>{item.company}</p><span className="period-mobile">{item.duration}</span></div>
              <ul>{item.achievements.map((achievement, i) => {
                const isClientLabel = achievement.startsWith('Client:')
                return <li key={item.id + '-' + i} className={isClientLabel ? 'client-label' : ''}>{achievement}</li>
              })}</ul>
              <span className="experience-period">{item.duration}</span>
            </article>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-topline"><span>04 / CONTACT</span><span>GOOD WORK STARTS WITH A CONVERSATION.</span></div>
          <div className="contact-grid">
            <div className="contact-copy"><p className="eyebrow">HAVE A GOOD PROBLEM?</p><h2>Let’s make<br /><em>something useful.</em></h2><p className="contact-intro">Open to full-time opportunities, thoughtful collaborations, and interesting problems worth working on.</p>
              <a className="email-link" href="mailto:shresthajeevan889@gmail.com">shresthajeevan889@gmail.com <ArrowUpRight size={18} /></a>
              <div className="social-links"><a href="https://github.com/shresthajeevan" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/shrestha-jeevan/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a></div>
              <div className="contact-details"><span><Phone size={13} /> (206) 291-0589</span><span><MapPin size={13} /> Bedford, TX 76021</span></div>
            </div>
            <div className="contact-card">
              <div className="form-title"><span>CONTACT</span><span>↘</span></div>
              <a className="contact-action" href="mailto:shresthajeevan889@gmail.com?subject=Portfolio%20Inquiry"><Mail size={15} /> Reach out by email</a>
              <a className="contact-action" href="https://www.linkedin.com/in/shrestha-jeevan/" target="_blank" rel="noreferrer"><Linkedin size={15} /> Connect on LinkedIn</a>
              <a className="contact-action" href="https://github.com/shresthajeevan" target="_blank" rel="noreferrer"><Github size={15} /> View GitHub</a>
            </div>
          </div>
          <footer className="site-footer"><a className="footer-mark" href="#home">JS</a><span>© {new Date().getFullYear()} Jeevan Shrestha</span><a href="#home">Back to top <ArrowUpRight size={13} /></a><span className="footer-note">DESIGNED TO STAY OUT OF THE WAY.</span></footer>
        </section>
      </main>
    </div>
  )
}

export default PortfolioRedesign
