import React, { useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { experience } from './data/experience'
import resumeFile from './data/Jeevan_Shrestha.pdf'
import './portfolio.css'

const nav = [
  { id: 'work', no: '01', label: 'Work' },
  { id: 'about', no: '02', label: 'About' },
  { id: 'experience', no: '03', label: 'Experience' },
  { id: 'stack', no: '04', label: 'Stack' },
  { id: 'contact', no: '05', label: 'Contact' },
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
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent('Portfolio inquiry from ' + form.name)
    const body = encodeURIComponent('Hi Jeevan,\n\n' + form.message + '\n\nFrom: ' + form.name + '\nEmail: ' + form.email)
    window.location.href = 'mailto:shresthajeevan880@gmail.com?subject=' + subject + '&body=' + body
  }

  const mobileNav = () => setMenuOpen(false)

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>

      <aside className="side-rail" aria-label="Main navigation">
        <a className="rail-mark" href="#home" aria-label="Jeevan Shrestha home">JS<span>.</span></a>
        <div className="rail-rule" />
        <nav className="rail-nav">
          {nav.map((item) => (
            <a key={item.id} href={'#' + item.id} className="rail-link" aria-label={item.no + ' ' + item.label}>
              <span className="rail-no">{item.no}</span>
              <span className="rail-label">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="rail-bottom"><span>SOFTWARE ENGINEER · SEATTLE, WA</span><i /></div>
      </aside>

      <header className="mobile-header">
        <a className="mobile-mark" href="#home">JS<span>.</span></a>
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
            <span className="eyebrow"><i className="status-dot" /> SOFTWARE ENGINEER / AI & WEB</span>
            <span className="micro-note">PERSONAL PORTFOLIO <b>—</b> 2026</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="pretitle">Hello, I’m</p>
              <h1>Jeevan<br /><em>Shrestha.</em></h1>
              <div className="intro-line"><i /><p>I build useful software at the intersection of <strong>AI, data,</strong> and <strong>the web.</strong> I care about clear thinking, practical systems, and the details people actually use.</p></div>
              <div className="hero-actions">
                <a className="text-link strong-link" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
                <a className="text-link" href={resumeFile} download="Jeevan_Shrestha.pdf">Download résumé <ArrowDown size={15} /></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Jeevan Shrestha monogram">
              <div className="art-top"><span>INDEPENDENT THINKING</span><span>JS / 001</span></div>
              <div className="monogram">J<span>S</span></div>
              <div className="art-bottom"><span>BUILD<br />WITH PURPOSE.</span><span>AI / WEB / SYSTEMS</span></div>
            </div>
          </div>
          <div className="hero-foot">
            <span><MapPin size={14} /> Seattle, Washington</span>
            <span><i className="status-dot" /> Open to full-time opportunities</span>
            <a href="#work">Scroll to explore <ArrowDown size={14} /></a>
          </div>
        </section>

        <section className="section section-border" id="work">
          <div className="section-heading">
            <div className="section-kicker"><b>01</b><span>SELECTED WORK</span></div>
            <div className="heading-content"><h2>Things I’ve<br /><em>worked on.</em></h2><p>Projects built to solve a problem, test an idea, or make a process a little better.</p></div>
            <span className="heading-count">{String(projects.length).padStart(2, '0')} PROJECTS</span>
          </div>
          {projects[0] && <article className="featured-project">
            <a className="featured-image" href={projects[0].github || '#work'} target={projects[0].github ? '_blank' : undefined} rel={projects[0].github ? 'noreferrer' : undefined} aria-label={'Open ' + projects[0].title + ' source'}>
              {projects[0].image ? <img src={projects[0].image} alt={projects[0].title + ' preview'} loading="lazy" /> : <div className="image-fallback"><b>{projects[0].title.slice(0, 2).toUpperCase()}</b></div>}
              <span>FEATURED <ArrowUpRight size={15} /></span>
            </a>
            <div className="featured-copy">
              <div className="project-meta"><span>01 / FEATURED</span><span>PRODUCT ENGINEERING</span></div>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].description}</p>
              <div className="tech-line">{projects[0].tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              {projects[0].github && <a className="text-link strong-link project-visit" href={projects[0].github} target="_blank" rel="noreferrer">View source code <ArrowUpRight size={16} /></a>}
            </div>
          </article>}
          <div className="project-list">
            {projects.slice(1).map((project, index) => <article className="project-row" key={project.id}>
              <span className="project-number">{String(index + 2).padStart(2, '0')}</span>
              <a className="project-thumb" href={project.github || '#work'} target={project.github ? '_blank' : undefined} rel={project.github ? 'noreferrer' : undefined} aria-label={'Open ' + project.title}>
                {project.image ? <img src={project.image} alt="" loading="lazy" /> : <b>{project.title.slice(0, 2).toUpperCase()}</b>}
              </a>
              <div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tech-line small-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              <a className="row-arrow" href={project.github || '#work'} target={project.github ? '_blank' : undefined} rel={project.github ? 'noreferrer' : undefined} aria-label={'View ' + project.title + ' source code'}><ArrowUpRight size={20} /></a>
            </article>)}
          </div>
          <div className="endnote"><span>END OF INDEX</span><span>MORE CURIOSITY, LESS NOISE.</span></div>
        </section>

        <section className="section section-border" id="about">
          <div className="section-heading short-heading"><div className="section-kicker"><b>02</b><span>A LITTLE ABOUT ME</span></div><div className="heading-content"><h2>Engineer by work.<br /><em>Curious by default.</em></h2></div></div>
          <div className="about-grid">
            <div className="about-statement">
              <span className="quote-mark">“</span>
              <p>I’m a software engineer with experience in AI, machine learning, and modern web development. I enjoy turning complex problems into useful, understandable tools—and learning what makes them work well.</p>
              <div className="location-note"><MapPin size={14} /><span>Seattle, Washington</span><i />Open to remote opportunities and relocation</div>
              <a className="text-link strong-link" href={resumeFile} download="Jeevan_Shrestha.pdf">More on my background <ArrowDown size={15} /></a>
            </div>
            <div className="education">
              <div className="subheading">EDUCATION <span>02 RECORDS</span></div>
              <article className="education-row"><span className="education-year">2025</span><div><h3>M.Sc. Applied Computer Science</h3><p>Southeast Missouri State University</p><div className="education-meta"><span>GPA 3.9 / 4.0</span><span>Master’s degree</span></div></div></article>
              <article className="education-row"><span className="education-year">2022</span><div><h3>B.Sc. Computer Science</h3><p>Islington College</p><div className="education-meta"><span>Bachelor’s degree</span><span>Graduated May 2022</span></div></div></article>
              <div className="focus-box"><span>↗</span><div><small>CURRENT FOCUS</small><strong>Building, learning, and looking for the next meaningful problem.</strong></div></div>
            </div>
          </div>
        </section>

        <section className="section section-border" id="experience">
          <div className="section-heading"><div className="section-kicker"><b>03</b><span>CAREER NOTES</span></div><div className="heading-content"><h2>Where I’ve<br /><em>made a difference.</em></h2><p>A record of the teams, products, and learning environments I’ve been part of.</p></div></div>
          <div className="experience-list">
            {orderedExperience.map((item, index) => <article className="experience-row" key={item.id}>
              <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="experience-title"><h3>{item.role}</h3><p>{item.company}</p><span className="period-mobile">{item.duration}</span></div>
              <ul>{item.achievements.map((achievement, i) => <li key={item.id + '-' + i}>{achievement}</li>)}</ul>
              <span className="experience-period">{item.duration}</span>
            </article>)}
          </div>
        </section>

        <section className="section section-border" id="stack">
          <div className="section-heading"><div className="section-kicker"><b>04</b><span>TOOLS OF THE TRADE</span></div><div className="heading-content"><h2>A stack built<br /><em>for the problem.</em></h2><p>Tools I’ve worked with across application development, AI, data, and infrastructure.</p></div></div>
          <div className="skills-index">{skillGroups.map((group, index) => {
            const groupSkills = group.ids.map((id) => skills.find((skill) => skill.id === id)).filter((skill): skill is (typeof skills)[number] => Boolean(skill))
            return <div className="skills-group" key={group.title}><span className="skills-no">0{index + 1}</span><h3>{group.title}</h3><ul>{groupSkills.map((skill) => <li key={skill.id}><span>{skill.name}</span><small>{skill.level || '—'}</small></li>)}</ul></div>
          })}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-topline"><span>05 / CONTACT</span><span>GOOD WORK STARTS WITH A CONVERSATION.</span></div>
          <div className="contact-grid">
            <div className="contact-copy"><p className="eyebrow">HAVE A GOOD PROBLEM?</p><h2>Let’s make<br /><em>something useful.</em></h2><p className="contact-intro">Open to full-time opportunities, thoughtful collaborations, and interesting problems worth working on.</p>
              <a className="email-link" href="mailto:shresthajeevan880@gmail.com">shresthajeevan880@gmail.com <ArrowUpRight size={18} /></a>
              <div className="social-links"><a href="https://github.com/shresthajeevan" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/shrestha-jeevan/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a></div>
              <div className="contact-details"><span><Phone size={13} /> (206) 291-0589</span><span><MapPin size={13} /> Seattle, WA</span></div>
            </div>
            <form className="contact-form" onSubmit={sendMessage}>
              <div className="form-title"><span>SEND A NOTE</span><span>↘</span></div>
              <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name" required />
              <label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" required />
              <label htmlFor="contact-message">What’s on your mind?</label><textarea id="contact-message" name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about it…" rows={4} required />
              <button className="submit-button" type="submit">Prepare email <ArrowUpRight size={16} /></button>
              <p className="form-note"><Mail size={12} /> Opens your default email app with your message ready to send.</p>
            </form>
          </div>
          <footer className="site-footer"><a className="footer-mark" href="#home">JS<span>.</span></a><span>© {new Date().getFullYear()} Jeevan Shrestha</span><a href="#home">Back to top <ArrowUpRight size={13} /></a><span className="footer-note">DESIGNED TO STAY OUT OF THE WAY.</span></footer>
        </section>
      </main>
    </div>
  )
}

export default PortfolioRedesign
