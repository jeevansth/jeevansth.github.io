import React from 'react';
import { BackgroundCanvas } from './BackgroundCanvas';
import resumeFile from '../data/Jeevan_Shrestha.pdf'; // make sure the path is correct

const ProfessionalAbout: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Shared Canvas */}
      <BackgroundCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                Jeevan
                <br />
                <span className="font-semibold">Shrestha</span>
              </h1>
              
              <div className="mt-6 pl-1 border-l-4 border-blue-600">
                <p className="text-xl text-gray-600 leading-relaxed">
                  I’m Jeevan, a software engineer with experience in AI, ML, and modern web development. 
                  Currently seeking new opportunities to apply my skills and tackle real-world problems.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-blue-600 text-sm font-medium uppercase tracking-wide">Masters Degree</div>
                <h3 className="font-semibold text-gray-900 mt-2">M.Sc. Applied Computer Science</h3>
                <p className="text-gray-600 text-sm mt-1">Southeast Missouri State University</p>
                <div className="flex items-center mt-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    GPA: 3.9/4.0
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">May 2025</span>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="text-purple-600 text-sm font-medium uppercase tracking-wide">Bachelors Degree</div>
                <h3 className="font-semibold text-gray-900 mt-2">B.Sc. Computer Science</h3>
                <p className="text-gray-600 text-sm mt-1">Islington College</p>
                <div className="mt-3 text-gray-500 text-sm">Graduated May 2022</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Scroll to Projects */}
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                View Projects
              </button>

              {/* Download Resume */}
              <a
                href={resumeFile}
                download="Jeevan_Shrestha.pdf"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Skills & Location */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
              <div className="text-gray-400 text-sm font-medium">Current Location</div>
              <div className="text-2xl font-semibold mt-2">Seattle, Washington</div>
              <div className="text-gray-300 mt-4">Open to remote opportunities and relocation</div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Machine Learning', color: 'text-blue-600' },
                { name: 'Computer Vision', color: 'text-purple-600' },
                { name: 'Cloud Systems', color: 'text-green-600' },
                { name: 'Full Stack', color: 'text-orange-600' }
              ].map((skill) => (
                <div 
                  key={skill.name}
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className={`font-semibold text-gray-900 group-hover:${skill.color} transition-colors`}>
                    {skill.name}
                  </div>
                  <div className="text-gray-500 text-sm mt-2">Explore →</div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="text-blue-700 text-sm font-medium">Current Focus</div>
              {/* <div className="text-gray-900 font-semibold mt-2">Advanced AI Research & Scalable Systems</div> */}
              <div className="text-gray-600 text-sm mt-2">Seeking full-time opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAbout;
