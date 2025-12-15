import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, EXPERIENCE, SERVICES, JOB_PROJECTS, BRANDS, SKILLS, TESTIMONIALS, SOCIAL_LINKS, EDUCATION } from '../constants';
import {
  ArrowRight, ArrowUpRight, Play, Instagram, Linkedin,
  ChevronLeft, ChevronRight, ArrowLeft,
  // Custom Skill Icons
  Figma, PenTool, Smartphone, Code2, Globe, Box, FileText, Zap, Gem, Braces, Image, Feather
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Particles } from '../components/Particles';
import { Project } from '../types';
import heroimage from '../Assets/image1.webp';
import aboutimage from '../Assets/work-image.webp';

// Custom SVG Icons for brands missing in standard sets or to ensure consistency
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

// Typewriter Component
const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 40); // Typing speed

    return () => clearInterval(intervalId);
  }, [hasStarted, text]);

  return (
    <h2 ref={ref} className={className}>
      {displayedText}
      <span className="inline-block w-1 h-[1em] ml-1 bg-current align-middle animate-[blink_1s_infinite]"></span>
    </h2>
  );
};

// Feature Explorer Text Item
const FeatureTextItem: React.FC<{
  project: Project;
  isActive: boolean;
  onActivate: () => void;
}> = ({ project, isActive, onActivate }) => {
  const ref = useRef(null);
  // Trigger when element is exactly in the center of the viewport
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onActivate();
    }
  }, [isInView, onActivate]);

  return (
    <div
      ref={ref}
      className={`pl-8 border-l-4 transition-all duration-500 ease-in-out py-10 ${isActive
        ? 'border-slate-900 dark:border-white opacity-100'
        : 'border-slate-200 dark:border-slate-800 opacity-30 blur-[1px]'
        }`}
    >
      <span className="block text-sm font-bold uppercase tracking-wider mb-3 text-slate-500">
        0{PROJECTS.indexOf(project) + 1}
      </span>
      <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
        {project.title}
      </h3>
      <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
        {project.summary}
      </p>

      {/* Mobile/Tablet Thumbnail - Shows below text on smaller screens */}
      <motion.div
        className="lg:hidden w-full mb-8 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-3 text-lg font-bold border-b-2 border-slate-900 dark:border-white pb-1 text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
        >
          Explore Case Study <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

// Feature Explorer Showcase (Sticky Pinning)
const FeatureExplorerShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);

  return (
    <section id="work" className="relative max-w-[1440px] mx-auto border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col lg:flex-row">

        {/* Left Column - Scrolling List */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 pt-[15vh] pb-[20vh] lg:pt-[20vh] lg:pb-[40vh]">
          <div className="mb-[10vh] lg:mb-[15vh]">
            <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white inline-block uppercase tracking-wider mb-4">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white leading-tight">
              Featured <br /> Capabilities
            </h2>
          </div>

          {/* Gap handles spacing between items */}
          <div className="flex flex-col gap-24 lg:gap-[60vh]">
            {PROJECTS.map((project) => (
              <FeatureTextItem
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onActivate={() => setActiveId(project.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Sticky Image Pinning (Desktop Only) */}
        <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center p-12">
          <div className="relative w-full aspect-square max-w-xl">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${activeId === project.id
                  ? 'opacity-100 translate-y-0 scale-100 z-10'
                  : 'opacity-0 translate-y-10 scale-95 z-0'
                  }`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


export const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case "Figma": return <Figma size={24} strokeWidth={1.5} />;
      case "Adobe XD": return <PenTool size={24} strokeWidth={1.5} />;
      case "Sketch": return <Gem size={24} strokeWidth={1.5} />;
      case "HTML/CSS": return <Code2 size={24} strokeWidth={1.5} />;
      case "JS": return <Braces size={24} strokeWidth={1.5} />;
      case "Adobe Photoshop": return <Image size={24} strokeWidth={1.5} />;
      case "Adobe Illustrator": return <Feather size={24} strokeWidth={1.5} />;
      case "Webflow": return <Globe size={24} strokeWidth={1.5} />;
      case "Blender": return <Box size={24} strokeWidth={1.5} />;
      case "Notion": return <FileText size={24} strokeWidth={1.5} />;
      case "Protopie": return <Smartphone size={24} strokeWidth={1.5} />;
      default: return <Zap size={24} strokeWidth={1.5} />;
    }
  };

  return (
    // IMPORTANT: removed 'overflow-hidden' from main to allow sticky positioning to work
    <main className="bg-white dark:bg-dark-950">

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
        <Particles />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-display font-bold text-slate-900 dark:text-white tracking-tighter mix-blend-difference">
              UI UX <br />
              <span className="ml-[10vw] text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">Designer</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
            <div className="hidden md:block md:col-span-1"></div>

            {/* Description Text */}
            <div className="md:col-span-5 pt-8">
              {/* Brand Logos */}
              <div className="flex flex-wrap gap-4 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {BRANDS.map((brand, i) => (
                  <div key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-full text-sm font-bold text-slate-500 flex items-center gap-2">
                    {brand.name}
                  </div>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
                Crafting digital experiences that merge functionality with aesthetic perfection.
              </p>
            </div>

            {/* Hero Image */}
            <div className="md:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/5] md:aspect-square w-full max-w-md ml-auto rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src={heroimage}
                  alt="UIUX Designer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-white">
                  <p className="font-medium text-lg">
                    Hi, I'm Abhijith. Creating intuitive digital experiences for global brands.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED Tools & Skills Marquee */}
      <section className="py-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 overflow-hidden transform -rotate-1 origin-left scale-105">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
              <div key={i} className="flex items-center gap-4 mx-8 text-4xl font-display font-bold uppercase opacity-80 hover:opacity-100 transition-opacity">
                <span className="w-3 h-3 rounded-full bg-current"></span>
                {skill.name}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
              <div key={i} className="flex items-center gap-4 mx-8 text-4xl font-display font-bold uppercase opacity-80 hover:opacity-100 transition-opacity">
                <span className="w-3 h-3 rounded-full bg-current"></span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 pr-8">
            <span className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white inline-block mb-6 uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white mb-6 leading-tight">
              A Comprehensive look at what we offer and how we deliver
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              We provide end-to-end design solutions that help your business grow and succeed in the digital age.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
              Start a Project <ArrowRight size={18} />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className={`p-10 rounded-[2rem] flex flex-col justify-between min-h-[320px] group transition-all duration-300 ${service.highlight
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                >
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${service.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${service.highlight ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <span className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${service.highlight ? 'border-white/30 group-hover:bg-white group-hover:text-slate-900' : 'border-slate-200 dark:border-slate-700 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900'
                      }`}>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="mb-12">
          <span className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white inline-block mb-6 uppercase tracking-wider">
            About Me
          </span>

          {/* Typewriter Effect Header */}
          <TypewriterText
            text="DDesign has always been more than just a job – it's my passion."
            className="text-4xl md:text-6xl font-display font-medium text-slate-900 dark:text-white max-w-3xl leading-tight min-h-[1.2em]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer">
            <img
              src="/Assets/work-image.webp"
              alt="Working"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 transition-transform group-hover:scale-90 border border-white/30">
                <Play fill="white" className="text-white w-10 h-10" />
              </div>
            </div> */}
          </div>

          <div className="space-y-12">
            <p className="text-xl font-light text-slate-600 dark:text-slate-300">
              I am a passionate UI/UX designer focused on crafting user-centered, intuitive, and impactful digital experiences. With a blend of creativity and functionality, I design interfaces that engage users and achieve business goals. From research to prototyping, I thrive on solving problems through design, creating seamless interactions that connect people with brands and bring ideas to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-6xl font-display font-bold text-slate-900 dark:text-white mb-2">+7</h3>
                <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="text-6xl font-display font-bold text-slate-900 dark:text-white mb-2">+20</h3>
                <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">
                  Designs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* NEW Detailed Skills Section */}
      <section id="skills" className="py-16 md:py-20 px-4 md:px-8 max-w-[1440px] mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <span className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white inline-block mb-6 uppercase tracking-wider">
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white leading-tight">
            Tools & Technologies <br /> I work with daily
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white">
                  {/* Use Custom Icon Helper */}
                  {getSkillIcon(skill.name)}
                </div>
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${skill.level === 'Expert' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  skill.level === 'Advanced' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                  {skill.level}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto bg-slate-50 dark:bg-slate-900/20 rounded-[3rem] my-20">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-950 text-sm font-bold text-slate-900 dark:text-white inline-block mb-6 uppercase tracking-wider">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white leading-tight max-w-xl">
              A Yearly snapshot of my creative growth
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm">
            An annual summary that summarizes my creative journey and development throughout the year.
          </p>
        </div>

        <div className="space-y-4">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group py-8 md:py-12 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white dark:hover:bg-slate-800/50 px-4 md:px-8 rounded-2xl transition-all duration-300"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="font-bold text-slate-900 dark:text-white">{exp.company}</span>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <p className="text-slate-500 dark:text-slate-400 max-w-lg text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                <span className="text-4xl md:text-5xl font-light text-slate-400 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white font-display tracking-tight transition-colors">
                  {exp.period}
                </span>
                <ArrowUpRight className="w-8 h-8 text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <img
                src="Assets/Education.png"
                alt="Education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 dark:border-slate-700 hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl">🎓</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Lifelong Learner</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Constantly upgrading skills</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="order-1 lg:order-2">
            <span className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white inline-block mb-6 uppercase tracking-wider">
              Education
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-slate-900 dark:text-white leading-tight mb-12">
              Academic <br /> Background
            </h2>

            <div className="space-y-12">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-slate-200 dark:border-slate-800"
                >
                  <span className="absolute -left-1.5 top-2.5 w-3 h-3 rounded-full bg-slate-900 dark:bg-white ring-4 ring-white dark:ring-dark-950 transition-colors"></span>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{edu.institution}</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-full text-slate-600 dark:text-slate-300">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE EXPLORER SHOWCASE (Selected Works) */}
      <FeatureExplorerShowcase />

      {/* Professional Projects (Job Work) - Horizontal Scroll */}
      <section id="professional-work" className="py-20 px-4 md:px-8 w-full overflow-hidden border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white inline-block mb-6 uppercase tracking-wider">
                Professional Work
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white leading-tight">
                Selected works from <br /> my professional career
              </h2>
            </div>
            {/* Scroll Navigation Controls */}
            <div className="flex gap-4 mt-6 md:mt-0">
              <button
                onClick={() => scrollProjects('left')}
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollProjects('right')}
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x scrollbar-hide -mx-4 px-4 md:-mx-8 md:px-8"
          >
            {JOB_PROJECTS.map((project, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[600px] snap-center">
                {/* Image Container - Now Linked */}
                <Link to={`/professional-work/${project.id}`} className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/9] mb-8 bg-slate-100 dark:bg-slate-900 block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-bold border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study
                    </span>
                  </div>
                </Link>

                {/* Details Below Thumbnail */}
                <div className="flex justify-between items-start px-2">
                  <div className="space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {project.company} • {project.year}
                    </p>
                    <Link to={`/professional-work/${project.id}`}>
                      <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-300 max-w-md line-clamp-2 text-lg">
                      {project.description}
                    </p>
                  </div>

                  <Link to={`/professional-work/${project.id}`} className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Rotating Testimonial Quote */}
      <section className="py-32 px-4 md:px-8 max-w-5xl mx-auto text-center relative min-h-[400px] flex flex-col justify-center">
        <div className="text-6xl md:text-8xl text-slate-200 dark:text-slate-800 font-serif leading-none mb-8 opacity-50">“</div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-4xl font-medium text-slate-900 dark:text-white italic leading-relaxed mb-12">
                "{TESTIMONIALS[currentTestimonial].quote}"
              </h3>

              <div className="flex items-center justify-center gap-4">
                <img src={TESTIMONIALS[currentTestimonial].image} alt="User" className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50 dark:ring-slate-900" />
                <div className="text-left">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{TESTIMONIALS[currentTestimonial].author}</h4>
                  <p className="text-sm text-slate-500 font-medium">{TESTIMONIALS[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentTestimonial(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-slate-900 dark:bg-white w-6' : 'bg-slate-300 dark:bg-slate-700'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="bg-slate-900 dark:bg-black py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
            <h2 className="text-6xl md:text-[8rem] font-display font-bold text-white leading-[0.9] mb-8 md:mb-0 tracking-tighter">
              Let's Connect <br /> There
            </h2>
            <a href={`mailto:abhijithak3@gmail.com`} className="flex items-center gap-4 px-10 py-5 bg-white rounded-full text-slate-900 hover:scale-105 transition-transform group font-bold text-lg">
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
              <p className="text-slate-400 max-w-sm">Creating digital products that help businesses reach their goals and inspire users.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-sm text-slate-400 w-full lg:w-auto flex-1">
              <div className="w-full">
                <h4 className="font-bold text-white mb-6 text-lg">Address</h4>
                <p className="mb-2">Kozhikode, Kerala</p>
                <p>India</p>
              </div>
              {/* Contact Column (Email + Phone) */}
              <div className="w-full">
                <h4 className="font-bold text-white mb-4 md:mb-6 text-lg">Contact</h4>
                <div className="space-y-4">
                  <div>
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="mb-2 hover:text-white transition-colors cursor-pointer block">{SOCIAL_LINKS.email}</a>
                    <p className="hover:text-white transition-colors cursor-pointer">abhi.dsgn@outlook.in</p>
                  </div>
                  <div>
                    <p className="mb-2 hover:text-white transition-colors cursor-pointer">(91) 9946 809 652</p>
                    {/* <p className="hover:text-white transition-colors cursor-pointer">+91 123 456 7890</p> */}
                  </div>
                </div>
              </div>

              {/* Social Media Column */}
              <div className="w-full">
                <h4 className="font-bold text-white mb-4 md:mb-6 text-lg">Connect with me</h4>
                <div className="flex gap-4">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                    <BehanceIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-12 mt-12 border-t border-white/5 text-sm text-slate-500">
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-6">
              <span className="hover:text-white cursor-pointer transition-colors">Templates</span>
              <span className="hover:text-white cursor-pointer transition-colors">Tools</span>
              <span className="hover:text-white cursor-pointer transition-colors">Features</span>
              <span className="hover:text-white cursor-pointer transition-colors">About Us</span>
            </div>
            <p>All rights reserved @Abhijith</p>
          </div>
        </div>
      </section>
    </main >
  );
};