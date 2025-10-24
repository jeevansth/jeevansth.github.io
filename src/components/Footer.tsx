import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex justify-center md:justify-start gap-4">
          <a 
            href="#" 
            aria-label="GitHub" 
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all"
          >
            <Github size={18} />
          </a>
          <a 
            href="#" 
            aria-label="LinkedIn" 
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="#" 
            aria-label="Twitter" 
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all"
          >
            <Twitter size={18} />
          </a>
        </div>

        <div className="text-center md:text-right text-sm text-gray-600">
          © {new Date().getFullYear()} Jeevan Shrestha. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
