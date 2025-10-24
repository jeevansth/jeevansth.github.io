import React from 'react'
import type { Experience as ExpType } from '../types'
import { BackgroundCanvas } from './BackgroundCanvas'

type Props = { items: ExpType[] }

const Experience3D: React.FC<Props> = ({ items }) => {
  return (
    <section id="experience" className="min-h-screen relative overflow-hidden">
      
      {/* Use the lightweight animated background */}
      <BackgroundCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-xl text-slate-600">My professional journey and contributions</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-violet-300 to-emerald-300" />
          
          <div className="space-y-12">
            {items.map((item) => (
              <div key={item.id} className="relative pl-20">
                <div className="absolute left-5 top-6 w-7 h-7 rounded-full bg-white border-4 border-blue-500 shadow-lg" />

                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 p-8 hover:border-blue-400 hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                      <div className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{item.company}</div>
                    </div>
                    <div className="inline-block px-4 py-2 bg-slate-900 dark:bg-gray-800 text-white rounded-lg text-sm font-semibold whitespace-nowrap">
                      {item.duration}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 group">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-slate-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 p-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What's Next?</h3>
            <p className="text-slate-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready for new challenges and opportunities to make an impact.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-7 py-3.5 bg-slate-900 dark:bg-gray-800 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-gray-700 transition-all font-semibold">
                View Projects
              </button>
              <button className="px-7 py-3.5 border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 rounded-xl hover:border-slate-900 dark:hover:border-white transition-all font-semibold">
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience3D
