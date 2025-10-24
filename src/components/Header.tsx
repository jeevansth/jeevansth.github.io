import React from 'react';
import { BackgroundCanvas } from './BackgroundCanvas'; // your professional canvas

type NavItem = {
  id: string;
  label: string;
};

const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 h-20 lg:h-24">
      {/* Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <BackgroundCanvas />
      </div>

      {/* Header Content */}
      <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:scale-105 transform transition duration-300"
        >
          Jeevan Shrestha
        </a>

        <nav className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 items-center">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
