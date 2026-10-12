import React from 'react'

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section section-border">
      <div className="section-heading short-heading">
        <div className="section-kicker"><b>02</b><span>EDUCATION</span></div>
        <div className="heading-content">
          <h2>Formal training.<br /><em>Built for problem solving.</em></h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-statement">
          <span className="quote-mark">“</span>
          <p>My education gave me the foundation for systems thinking, software design, and solving real-world problems through code.</p>
        </div>

        <div className="education">
          <article className="education-row">
            <span className="education-year">2025</span>
            <div>
              <h3>M.Sc. Applied Computer Science</h3>
              <p>Southeast Missouri State University</p>
              <div className="education-meta"><span>GPA 3.9 / 4.0</span><span>Master’s degree</span></div>
            </div>
          </article>

          <article className="education-row">
            <span className="education-year">2022</span>
            <div>
              <h3>B.Sc. Computer Science</h3>
              <p>Islington College</p>
              <div className="education-meta"><span>Bachelor’s degree</span><span>Graduated May 2022</span></div>
            </div>
          </article>

          <div className="focus-box">
            <span>↗</span>
            <div><small>CURRENT FOCUS</small><strong>Building, learning, and looking for the next meaningful problem.</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
