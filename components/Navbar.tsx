import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Eye } from 'lucide-react';
import path from 'path';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Services', path: '#services' },
    { name: 'About', path: '/#about' },
    // { name: 'Skills', path: '/#skills' },
    // { name: 'Experience', path: '/#experience' },
    { name: 'Works', path: '/#work' },
    { name: 'Projects', path: '/#professional-work' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-6xl rounded-full px-6 py-4 flex justify-between items-center ${isScrolled
          ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-lg border border-slate-200 dark:border-slate-800 shadow-xl'
          : 'bg-transparent backdrop-blur-sm border border-transparent'
          }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-display font-bold text-slate-900 dark:text-white"
        >
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-white dark:text-slate-900 text-xs">AJ</span>
          </div>
          Abhijith
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 bg-slate-100 dark:bg-slate-900/50 px-8 py-2 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="Assets/Abhijith-Ak-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <Eye size={16} />
            View Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl pt-32 px-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 text-center pb-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-slate-900 dark:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="Assets/Abhijith-Ak-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mx-auto inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg"
            >
              <Eye size={20} />
              View Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};