import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOB_PROJECTS } from '../constants';
import { ArrowLeft, Calendar, Briefcase, Building2, Layout, ExternalLink, Globe, Smartphone, ArrowUpRight, Figma } from 'lucide-react';
import { motion } from 'framer-motion';

export const JobProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = JOB_PROJECTS.find(p => p.id === id);

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
            <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation */}
                <Link to="/#professional-work" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-12 group font-medium">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Professional Work
                </Link>

                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end"
                >
                    <div className="lg:col-span-8">
                        <span className="inline-block px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-6">
                            Professional Case Study
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end space-y-6 lg:pl-12 lg:border-l border-slate-200 dark:border-slate-800">
                        <div className="pt-2">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">Company</span>
                            <div className="flex items-center gap-3 text-xl font-medium text-slate-900 dark:text-white">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                {project.company}
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">Role</span>
                            <div className="flex items-center gap-3 text-xl font-medium text-slate-900 dark:text-white">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                {project.role}
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">Year</span>
                            <div className="flex items-center gap-3 text-xl font-medium text-slate-900 dark:text-white">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                {project.year}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-24 aspect-video bg-slate-100 dark:bg-slate-900"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Generated Content Structure */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Project Overview</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                                {project.overview}
                            </p>

                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Layout className="w-5 h-5" /> Key Deliverables
                                </h4>
                                <ul className="space-y-3">
                                    {project.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* PROJECT LINKS SECTION */}
                            {project.links && (
                                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <ExternalLink className="w-5 h-5" /> Live Project
                                    </h4>
                                    <div className="space-y-3">
                                        {project.links.web && (
                                            <a href={project.links.web} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white transition-colors group">
                                                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                                                    <Globe className="w-5 h-5 text-slate-900 dark:text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className="block text-sm font-bold text-slate-900 dark:text-white">Website</span>
                                                    <span className="block text-xs text-slate-500">View Live Site</span>
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                                            </a>
                                        )}
                                        {project.links.ios && (
                                            <a href={project.links.ios} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white transition-colors group">
                                                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                                                    <Smartphone className="w-5 h-5 text-slate-900 dark:text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className="block text-sm font-bold text-slate-900 dark:text-white">iOS App</span>
                                                    <span className="block text-xs text-slate-500">App Store</span>
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                                            </a>
                                        )}
                                        {project.links.android && (
                                            <a href={project.links.android} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white transition-colors group">
                                                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                                                    <Smartphone className="w-5 h-5 text-slate-900 dark:text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className="block text-sm font-bold text-slate-900 dark:text-white">Android App</span>
                                                    <span className="block text-xs text-slate-500">Google Play</span>
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {project.challenge}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Approach</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                {project.approach}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.approachSteps.map((step, i) => (
                                    <div key={i} className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
                                        <div className="text-4xl font-bold text-slate-200 dark:text-slate-800 mb-2">{step.number}</div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                                        <p className="text-sm text-slate-500">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {project.solution}
                            </p>
                        </section>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>

            </article>
        </div>
    );
};
