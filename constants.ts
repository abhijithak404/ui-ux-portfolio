import { Project, Experience, Education } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "abhijithak3@gmail.com"
};

export const BRANDS = [
  { name: "Figma", icon: "figma" },
  { name: "Sketch", icon: "sketch" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Illustrator", icon: "Illustrator" },
  { name: "Webflow", icon: "webflow" },
];

export const SKILLS = [
  { name: "Figma", level: "Expert", category: "Design" },
  { name: "Adobe XD", level: "Expert", category: "Design" },
  { name: "Sketch", level: "Expert", category: "Design" },
  { name: "HTML/CSS", level: "Intermediate", category: "Development" },
  { name: "JS", level: "Advanced", category: "Development" },
  { name: "Adobe Photoshop", level: "Advanced", category: "Motion" },
  { name: "Adobe Illustrtor", level: "Expert", category: "Productivity" },
  { name: "Webflow", level: "Expert", category: "Development" },
  { name: "Blender", level: "Intermediate", category: "3D" },
  { name: "Notion", level: "Advanced", category: "Productivity" },
  { name: "Protopie", level: "Advanced", category: "Prototyping" },
];

export const SERVICES = [
  {
    title: "Social Ads",
    description: "Strategic and creative social media advertising to reach the right audience.",
  },
  {
    title: "Search Engineer",
    description: "Optimize your website visibility and ranking with effective SEO strategies.",
  },
  {
    title: "Content Marketing",
    description: "We create strategic and engaging content to build brand awareness.",
    highlight: true
  },
  {
    title: "Saas Marketing",
    description: "We help your SaaS product reach the right audience with a data-driven strategy.",
  }
];

export const TESTIMONIALS = [
  {
    quote: "Without Journey Commerce, we would never have been able to implement this system ourselves. Being a small team we don't have enough hours in the day. The team at Journey Commerce researched our brand, planned the content and provided weekly feedback.",
    author: "Dhimmo Reijnder",
    role: "Founder, The Dewa",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The attention to detail and user-centric approach completely transformed our product. We saw a 200% increase in user engagement within the first month of launch. Highly recommended for any serious SaaS business.",
    author: "Sarah Jenks",
    role: "CTO, FinFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Exceptional creativity mixed with deep technical understanding. Duwy bridged the gap between our design and engineering teams effortlessly, resulting in a flawless product release.",
    author: "Marcus Chen",
    role: "Product Director, TechSpace",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "fintech-dashboard",
    title: "Nova Fintech Dashboard",
    category: "Web Application",
    summary: "A comprehensive financial analytics dashboard for enterprise clients.",
    description: "Nova is a B2B SaaS platform designed to help financial institutions visualize complex datasets. The goal was to reduce cognitive load while displaying real-time market data.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    ],
    technologies: ["React", "D3.js", "Tailwind CSS", "Figma"],
    challenge: "Users were overwhelmed by the density of data in the legacy system, leading to slow decision-making processes.",
    solution: "We implemented a modular widget system allowing users to customize their view, coupled with a 'focus mode' for deep dives into specific metrics."
  },
  {
    id: "travel-app",
    title: "Wanderlust Mobile App",
    category: "Mobile Design",
    summary: "An experiential travel booking app focused on local experiences.",
    description: "Wanderlust connects travelers with local guides. The design focuses on immersive imagery and a seamless booking flow that feels like a conversation.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop"
    ],
    technologies: ["iOS", "Figma", "Protopie", "SwiftUI"],
    challenge: "Trust is a major barrier in P2P travel services. The app needed to convey safety and authenticity immediately.",
    solution: "Introduced 'Video Introductions' for guides and a transparent review system that highlights specific attributes like 'punctuality' and 'local knowledge'."
  },
  {
    id: "eco-commerce",
    title: "Leaf & Loam E-commerce",
    category: "E-commerce",
    summary: "A sustainable plant shop with AR visualization features.",
    description: "Leaf & Loam is a boutique plant shop. The website features an AR tool to see how plants fit in your space before buying.",
    thumbnail: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2149&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2149&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2090&auto=format&fit=crop"
    ],
    technologies: ["Shopify", "WebGL", "Blender", "Sass"],
    challenge: "High return rates due to customers misjudging plant sizes.",
    solution: "Integrated a WebXR viewer that projects the plant into the user's room at true scale, reducing returns by 40%."
  }
];

export const JOB_PROJECTS = [
  {
    id: "jp-1",
    title: "HealthTrack Pro",
    company: "TechFlow Solutions",
    role: "Lead Designer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%."
  },
  {
    id: "jp-2",
    title: "BankCorp Mobile",
    company: "CreativePulse Agency",
    role: "UX Researcher",
    year: "2022",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    description: "Conducted user research and wireframing for a regional bank's mobile banking application."
  },
  {
    id: "jp-3",
    title: "EduLearn LMS",
    company: "TechFlow Solutions",
    role: "UI Designer",
    year: "2021",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    description: "Created the design system for an internal Learning Management System used by 5000+ employees."
  },
  {
    id: "jp-4",
    title: "LogiStream Analytics",
    company: "Freelance",
    role: "Product Designer",
    year: "2020",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Designed a logistics tracking dashboard for supply chain managers with real-time map visualization."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Graphic Designer",
    company: "Dewa-Dewi Tech",
    period: "2015 - 2017",
    description: "Graphic Designer at Dewa-Dewi Tech, creating creative and functional visual designs to support brands and digital products.",
    skills: ["Visual Design", "Branding"]
  },
  {
    id: "2",
    role: "UI/UX Designer",
    company: "Odama Studio",
    period: "2017 - 2019",
    description: "UI/UX Designer at Odama Studio, creating intuitive and engaging digital experiences through functional and aesthetic design.",
    skills: ["Prototyping", "Wireframing"]
  },
  {
    id: "3",
    role: "UX Researcher",
    company: "Korsa Studio",
    period: "2018 - 2021",
    description: "UX Researcher at Korsa Studio, connecting data and design to create intuitive and effective user experiences.",
    skills: ["Research", "User Testing"]
  },
  {
    id: "4",
    role: "Product Designer",
    company: "Apple. Inc",
    period: "2021 - Now",
    description: "Product Designer at Apple Inc., designing innovative experiences that connect technology and aesthetics to create iconic products.",
    skills: ["Product Design", "System Design"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Master of Interaction Design",
    institution: "Design Academy of Arts",
    year: "2016",
    description: "Thesis on 'Emotive Interfaces in Fintech Applications'."
  },
  {
    id: "2",
    degree: "Bachelor of Computer Science",
    institution: "State University",
    year: "2014",
    description: "Minor in Graphic Design."
  }
];