import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-dark-900 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">alex.design</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
            <Github size={20} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
            <Twitter size={20} />
          </a>
           <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-primary-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};