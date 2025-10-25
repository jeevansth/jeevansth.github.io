import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BackgroundCanvas } from './BackgroundCanvas';

const ProfessionalContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Shared background */}
      <BackgroundCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600">
            Interested in collaboration? Let's start a conversation.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email */}
            <div className="bg-white p-5 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Email</div>
                  <a href="mailto:shresthajeevan880@gmail.com" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                    shresthajeevan880@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-5 rounded-2xl border border-emerald-200 hover:border-emerald-400 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-600" size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Phone</div>
                  <div className="text-slate-900 font-semibold">(206) 291-0589</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-5 rounded-2xl border border-violet-200 hover:border-violet-400 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-violet-600" size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Location</div>
                  <div className="text-slate-900 font-semibold">Seattle, WA</div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl text-white">
              <div className="text-slate-400 text-xs font-bold uppercase mb-2">Status</div>
              <div className="font-bold mb-1">Available for Work</div>
              <div className="text-slate-300 text-sm">Full-time</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl hover:bg-slate-800 transition-all font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContact;
