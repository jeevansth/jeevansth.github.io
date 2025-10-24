import React from 'react';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { BackgroundCanvas } from './BackgroundCanvas';

type Props = { projects: Project[] };

const Projects: React.FC<Props> = ({ projects }) => {
  const colors = ['blue', 'violet', 'emerald', 'orange', 'pink', 'cyan'];

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Canvas */}
      <BackgroundCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600">A showcase of my recent work and experiments</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => {
            const color = colors[idx % colors.length];
            return (
              <div
                key={p.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={p.image || `https://source.unsplash.com/600x400/?tech,${p.title}`}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-3 pb-6">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white rounded-xl hover:bg-slate-100 transition-colors"
                      >
                        <ExternalLink size={18} className="text-slate-900" />
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white rounded-xl hover:bg-slate-100 transition-colors"
                      >
                        <Github size={18} className="text-slate-900" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">{p.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 text-xs font-semibold bg-${color}-50 text-${color}-700 border border-${color}-200 rounded-lg`}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-lg">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
