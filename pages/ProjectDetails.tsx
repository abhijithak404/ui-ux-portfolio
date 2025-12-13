import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Calendar, Code, ExternalLink, ArrowRight, Figma } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-primary-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-950 min-h-screen pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation */}
        <Link to="/#work" className="inline-flex items-center text-slate-500 hover:text-primary-500 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-slate-200 dark:border-slate-800 mb-12">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" /> Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-slate-600 dark:text-slate-400 text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Timeline
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">2 week</p>
            </div>
            <div>

              {project.figma && (
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Figma className="w-4 h-4" /> Design File
                  </h3>
                  <a href={project.figma} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 text-sm hover:underline font-medium">View Figma File</a>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl mb-16"
        >
          <img src={project.images[0]} alt="Project Hero" className="w-full h-auto" />
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Secondary Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-xl mb-16"
        >
          <img src={project.images[1]} alt="Project Detail" className="w-full h-auto" />
        </motion.div>

        {/* Next Project Nav (Simple) */}
        <div className="text-center pt-12 border-t border-slate-200 dark:border-slate-800">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            See all projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </article>
    </div>
  );
};