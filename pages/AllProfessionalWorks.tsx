import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { JOB_PROJECTS, SOCIAL_LINKS } from '../constants';
import { Particles } from '../components/Particles';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Search,
  Building2, Globe, Smartphone, Sparkles, Layers,
  ExternalLink, Instagram, Linkedin
} from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c0 5.523-4.477 10-10 10-5.523 0-10-4.477-10-10 0-5.523 4.477-10 10-10 5.523 0 10 4.477 10 10zm-22 0c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zm10.519-2.738c.677-.381 1.059-1.071 1.059-1.928 0-1.897-1.424-2.887-3.69-2.887h-3.388v7.05h3.692c1.789 0 3.322-.926 3.322-2.784 0-.824-.413-1.636-.995-1.451zm-4.329-3.235h1.611c.907 0 1.549.333 1.549 1.259 0 .845-.583 1.282-1.549 1.282h-1.611v-2.541zm1.706 5.617h-1.706v-2.713h1.706c.928 0 1.707.41 1.707 1.346 0 .976-.757 1.367-1.707 1.367z" />
  </svg>
);

export const AllProfessionalWorks: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All',
    'CRM & Enterprise',
    'Websites & Branding',
    'Mobile Apps',
    'Marketplace & Operations'
  ];

  const filteredProjects = useMemo(() => {
    return JOB_PROJECTS.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedCategory === 'All') return matchesSearch;
      if (selectedCategory === 'CRM & Enterprise') {
        return matchesSearch && (
          project.title.toLowerCase().includes('crm') ||
          project.description.toLowerCase().includes('crm') ||
          project.title.toLowerCase().includes('billing') ||
          project.description.toLowerCase().includes('billing') ||
          project.title.toLowerCase().includes('hr')
        );
      }
      if (selectedCategory === 'Websites & Branding') {
        return matchesSearch && (
          project.title.toLowerCase().includes('website') ||
          project.description.toLowerCase().includes('website') ||
          project.deliverables.some((d) => d.toLowerCase().includes('website') || d.toLowerCase().includes('web development'))
        );
      }
      if (selectedCategory === 'Mobile Apps') {
        return matchesSearch && (
          project.title.toLowerCase().includes('app') ||
          project.description.toLowerCase().includes('mobile app') ||
          project.deliverables.some((d) => d.toLowerCase().includes('mobile app') || d.toLowerCase().includes('technician'))
        );
      }
      if (selectedCategory === 'Marketplace & Operations') {
        return matchesSearch && (
          project.title.toLowerCase().includes('vehicles') ||
          project.description.toLowerCase().includes('marketplace') ||
          project.title.toLowerCase().includes('waste') ||
          project.title.toLowerCase().includes('water') ||
          project.description.toLowerCase().includes('operations') ||
          project.description.toLowerCase().includes('service')
        );
      }
      return matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-white dark:bg-dark-950 min-h-screen">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 max-w-[1440px] mx-auto overflow-hidden">
        <Particles />

        <div className="relative z-10">
          {/* Back to Home Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/#professional-work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 group backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white inline-flex items-center gap-2 uppercase tracking-wider mb-6 bg-slate-50/50 dark:bg-slate-900/50"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                Work Archive • {JOB_PROJECTS.length} Projects
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]"
              >
                All Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-400">
                  Case Studies & Works
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-light"
            >
              A comprehensive showcase of end-to-end UX/UI design systems, enterprise CRM suites, mobile applications, and web platforms built for real-world business impact.
            </motion.p>
          </div>

          {/* Search & Category Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80"
          >
            {/* Category Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3-Column Interactive Grid Section */}
      <section className="pb-32 px-4 md:px-8 max-w-[1440px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-24 text-center border border-dashed border-slate-300 dark:border-slate-800 rounded-3xl"
            >
              <Layers className="w-12 h-12 mx-auto text-slate-400 mb-4 opacity-60" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">
                No case studies match your current filter or search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col justify-between rounded-[2rem] bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-black/60 relative overflow-hidden"
                >
                  <div>
                    {/* Image Container with Hover Scale & Glass Overlay */}
                    <Link
                      to={`/professional-work/${project.id}`}
                      className="relative rounded-[1.5rem] overflow-hidden aspect-[16/10] mb-6 bg-slate-100 dark:bg-slate-800 block group/img"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-108"
                      />

                      {/* Glassmorphic Company Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/10 flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-slate-300" />
                          {project.company}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/30 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                          View Case Study <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="px-2 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {project.role} {project.year ? `• ${project.year}` : ''}
                        </span>
                      </div>

                      <Link to={`/professional-work/${project.id}`}>
                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                          {project.title}
                        </h3>
                      </Link>

                      <p className="text-slate-600 dark:text-slate-300 line-clamp-3 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Deliverables Pills */}
                      {project.deliverables && project.deliverables.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.deliverables.slice(0, 2).map((item, dIndex) => (
                            <span
                              key={dIndex}
                              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                            >
                              {item.replace(/UI\/UX design for |End-to-end /i, '')}
                            </span>
                          ))}
                          {project.deliverables.length > 2 && (
                            <span className="px-2 py-1 rounded-md text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              +{project.deliverables.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center px-2 pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                    <div className="flex items-center gap-2">
                      {project.links?.web && (
                        <a
                          href={project.links.web.startsWith('http') ? project.links.web : `https://${project.links.web}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
                          title="Website"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.links?.android && (
                        <a
                          href={project.links.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
                          title="Android App"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <Link
                      to={`/professional-work/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group/btn"
                    >
                      <span>Explore Project</span>
                      <span className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer Contact CTA Section */}
      <section id="contact" className="bg-slate-900 dark:bg-black py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
            <h2 className="text-6xl md:text-[8rem] font-display font-bold text-white leading-[0.9] mb-8 md:mb-0 tracking-tighter">
              Let's Connect <br /> There
            </h2>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-4 px-10 py-5 bg-white rounded-full text-slate-900 hover:scale-105 transition-transform group font-bold text-lg"
            >
              <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
              Hire Me Now!
            </a>
          </div>

          <div className="border-t border-white/10 pt-16 flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-3xl font-display font-bold text-white">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-slate-900 text-xs font-bold">AJ</span>
                </div>
                Abhijith
              </div>
              <p className="text-slate-400 max-w-sm">
                Creating digital products that help businesses reach their goals and inspire users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-sm text-slate-400 w-full lg:w-auto flex-1">
              <div className="w-full">
                <h4 className="font-bold text-white mb-6 text-lg">Address</h4>
                <p className="mb-2">Kozhikode, Kerala</p>
                <p>India</p>
              </div>

              <div className="w-full">
                <h4 className="font-bold text-white mb-4 md:mb-6 text-lg">Contact</h4>
                <div className="space-y-4">
                  <div>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="mb-2 hover:text-white transition-colors cursor-pointer block"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                    <p className="hover:text-white transition-colors cursor-pointer">abhi.dsgn@outlook.in</p>
                  </div>
                  <div>
                    <p className="mb-2 hover:text-white transition-colors cursor-pointer">(91) 9946 809 652</p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <h4 className="font-bold text-white mb-4 md:mb-6 text-lg">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <BehanceIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-12 mt-12 border-t border-white/5 text-sm text-slate-500">
            <p>All rights reserved @Abhijith</p>
          </div>
        </div>
      </section>
    </div>
  );
};
