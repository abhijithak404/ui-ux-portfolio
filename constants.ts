import { Project, Experience, Education, JobProject } from './types';

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
  { name: "HTML/CSS", level: "Advanced", category: "Development" },
  { name: "JS", level: "Intermediate", category: "Development" },
  { name: "Adobe Photoshop", level: "Advanced", category: "Motion" },
  { name: "Adobe Illustrtor", level: "Advanced", category: "Productivity" },
  { name: "Webflow", level: "Intermediate", category: "Development" },
  { name: "Blender", level: "Intermediate", category: "3D" },
  { name: "Notion", level: "Intermediate", category: "Productivity" },
  { name: "Protopie", level: "Intermediate", category: "Prototyping" },
];

export const SERVICES = [
  {
    title: "UI Design",
    description: "Crafting intuitive and visually engaging interfaces that delight users and enhance digital experiences.",
  },
  {
    title: "UX Research",
    description: "Understanding users through research and testing to create meaningful and seamless interactions.",
  },
  {
    title: "Visual Design",
    description: "Designing compelling visuals that communicate brand stories and captivate audiences.",
    highlight: true
  },
  {
    title: "Branding",
    description: "Building cohesive brand identities that resonate, inspire trust, and stand out in the market.",
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
    title: "GameCore",
    category: "Mobile Application",
    summary: "A bold, futuristic e-commerce app that blends immersive visuals with a seamless shopping experience.",
    description: "Gamecore is a concept project focused on designing a modern e-commerce app for gaming products. The goal was to combine a futuristic visual style with an effortless shopping journey for players.",
    thumbnail: "Assets/gamecore.png",
    images: [
      "Assets/gamecoe-img1.png",
      "Assets/gamecoe-img2.png"
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    challenge: "To design a visually striking interface that reflects gaming culture while keeping the e-commerce experience intuitive and fast. Balancing style with usability was key.",
    solution: "The solution focused on creating a visually engaging yet highly functional shopping experience. A dark, futuristic theme with neon accents was combined with clear layouts and intuitive navigation, ensuring users could explore and purchase products effortlessly. Every interaction was designed to feel smooth, responsive, and true to the energy of gaming culture."
  },
  {
    id: "travel-app",
    title: "DoPack",
    category: "Website Design",
    summary: "A seamless courier booking and tracking web experience — designed to make delivery management fast, clear, and effortless.",
    description: "This project focuses on designing a modern and user-friendly courier booking platform that simplifies the process of sending and tracking shipments. The goal was to create a clean, reliable, and easy-to-navigate interface for customers and admins.",
    thumbnail: "Assets/dopack.png",
    images: [
      "Assets/DoPack-img1.png",
      "Assets/DoPack-img2.png"
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    challenge: "Trust is a major barrier in P2P travel services. The app needed to convey safety and authenticity immediately.",
    solution: "Introduced 'Video Introductions' for guides and a transparent review system that highlights specific attributes like 'punctuality' and 'local knowledge'."
  },
  {
    id: "eco-commerce",
    title: "EduSpark",
    category: "Mobile Application",
    summary: "Learn. Grow. Achieve.",
    description: "Eduspark is an online learning platform that allows students and professionals to explore, purchase, and learn from a wide range of courses. The app supports both free and paid learning, complete with progress tracking and certificate generation.",
    thumbnail: "Assets/eduspark.png",
    images: [
      "Assets/eduspark-folio-img1.png",
      "Assets/eduspark-folio-img2.png"
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    challenge: "Design a learning platform that presents a wide variety of courses without overwhelming users, while ensuring a smooth flow from discovery to certification. The experience needed to stay intuitive, engaging, and easy to navigate for learners of all levels.",
    solution: "I designed Eduspark with a clear, learner-focused interface that simplifies course exploration and makes learning sessions smooth and distraction-free. The visual hierarchy, clean navigation, and structured layouts help users quickly find courses, track their progress, and earn certificates with ease."
  }
];

export const JOB_PROJECTS: JobProject[] = [
  {
    id: "jp-1",
    title: "HealthTrack Pro",
    company: "TechFlow Solutions",
    role: "Lead Designer",
    year: "2023",
    image: "Assets/BillerQ-CableTV_CRM.png",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%.",
    overview: "Detailed insights into the design process, challenges faced, and the solutions implemented during my tenure at TechFlow Solutions. We aimed to bridge the gap between complex medical data and patient understanding.",
    deliverables: ['User Interface Design', 'Experience Strategy', 'Interactive Prototypes', 'Accessibility Audit'],
    challenge: "The primary objective was to modernize the existing platform while ensuring zero disruption to the user base. We faced specific challenges regarding data visualization complexity and mobile responsiveness. The legacy system was cluttered, leading to patient anxiety.",
    approach: "As the Lead Designer, I initiated the process with a deep dive into user analytics and stakeholder interviews. We conducted workshops with doctors and patients to align business goals with user needs.",
    approachSteps: [
      { number: "01", title: "Discovery", description: "Understanding the core problems through research and patient interviews." },
      { number: "02", title: "Ideation", description: "Wireframing and prototyping multiple solutions with a mobile-first mindset." }
    ],
    solution: "We delivered a robust solution that improved key metrics. The new interface streamlined workflows, reducing the average time-to-task by significant margins. Feedback from the users highlighted the improved clarity and aesthetic appeal of the new design system."
  },
  {
    id: "jp-2",
    title: "BankCorp Mobile",
    company: "CreativePulse Agency",
    role: "UX Researcher",
    year: "2022",
    image: "Assets/2ndvahan.png",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%.",
    overview: "Detailed insights into the design process, challenges faced, and the solutions implemented during my tenure at TechFlow Solutions. We aimed to bridge the gap between complex medical data and patient understanding.",
    deliverables: ['User Interface Design', 'Experience Strategy', 'Interactive Prototypes', 'Accessibility Audit'],
    challenge: "The primary objective was to modernize the existing platform while ensuring zero disruption to the user base. We faced specific challenges regarding data visualization complexity and mobile responsiveness. The legacy system was cluttered, leading to patient anxiety.",
    approach: "As the Lead Designer, I initiated the process with a deep dive into user analytics and stakeholder interviews. We conducted workshops with doctors and patients to align business goals with user needs.",
    approachSteps: [
      { number: "01", title: "Discovery", description: "Understanding the core problems through research and patient interviews." },
      { number: "02", title: "Ideation", description: "Wireframing and prototyping multiple solutions with a mobile-first mindset." }
    ],
    solution: "We delivered a robust solution that improved key metrics. The new interface streamlined workflows, reducing the average time-to-task by significant margins. Feedback from the users highlighted the improved clarity and aesthetic appeal of the new design system."
  },
  {
    id: "jp-3",
    title: "EduLearn LMS",
    company: "TechFlow Solutions",
    role: "UI Designer",
    year: "2021",
    image: "Assets/BillerQ-WaterCRM.png",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%.",
    overview: "Detailed insights into the design process, challenges faced, and the solutions implemented during my tenure at TechFlow Solutions. We aimed to bridge the gap between complex medical data and patient understanding.",
    deliverables: ['User Interface Design', 'Experience Strategy', 'Interactive Prototypes', 'Accessibility Audit'],
    challenge: "The primary objective was to modernize the existing platform while ensuring zero disruption to the user base. We faced specific challenges regarding data visualization complexity and mobile responsiveness. The legacy system was cluttered, leading to patient anxiety.",
    approach: "As the Lead Designer, I initiated the process with a deep dive into user analytics and stakeholder interviews. We conducted workshops with doctors and patients to align business goals with user needs.",
    approachSteps: [
      { number: "01", title: "Discovery", description: "Understanding the core problems through research and patient interviews." },
      { number: "02", title: "Ideation", description: "Wireframing and prototyping multiple solutions with a mobile-first mindset." }
    ],
    solution: "We delivered a robust solution that improved key metrics. The new interface streamlined workflows, reducing the average time-to-task by significant margins. Feedback from the users highlighted the improved clarity and aesthetic appeal of the new design system."
  },
  {
    id: "jp-4",
    title: "LogiStream Analytics",
    company: "Freelance",
    role: "Product Designer",
    year: "2020",
    image: "Assets/ESSAR.png",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%.",
    overview: "Detailed insights into the design process, challenges faced, and the solutions implemented during my tenure at TechFlow Solutions. We aimed to bridge the gap between complex medical data and patient understanding.",
    deliverables: ['User Interface Design', 'Experience Strategy', 'Interactive Prototypes', 'Accessibility Audit'],
    challenge: "The primary objective was to modernize the existing platform while ensuring zero disruption to the user base. We faced specific challenges regarding data visualization complexity and mobile responsiveness. The legacy system was cluttered, leading to patient anxiety.",
    approach: "As the Lead Designer, I initiated the process with a deep dive into user analytics and stakeholder interviews. We conducted workshops with doctors and patients to align business goals with user needs.",
    approachSteps: [
      { number: "01", title: "Discovery", description: "Understanding the core problems through research and patient interviews." },
      { number: "02", title: "Ideation", description: "Wireframing and prototyping multiple solutions with a mobile-first mindset." }
    ],
    solution: "We delivered a robust solution that improved key metrics. The new interface streamlined workflows, reducing the average time-to-task by significant margins. Feedback from the users highlighted the improved clarity and aesthetic appeal of the new design system."
  },
  {
    id: "jp-4",
    title: "LogiStream Analytics",
    company: "Freelance",
    role: "Product Designer",
    year: "2020",
    image: "Assets/RKS.png",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%.",
    overview: "Detailed insights into the design process, challenges faced, and the solutions implemented during my tenure at TechFlow Solutions. We aimed to bridge the gap between complex medical data and patient understanding.",
    deliverables: ['User Interface Design', 'Experience Strategy', 'Interactive Prototypes', 'Accessibility Audit'],
    challenge: "The primary objective was to modernize the existing platform while ensuring zero disruption to the user base. We faced specific challenges regarding data visualization complexity and mobile responsiveness. The legacy system was cluttered, leading to patient anxiety.",
    approach: "As the Lead Designer, I initiated the process with a deep dive into user analytics and stakeholder interviews. We conducted workshops with doctors and patients to align business goals with user needs.",
    approachSteps: [
      { number: "01", title: "Discovery", description: "Understanding the core problems through research and patient interviews." },
      { number: "02", title: "Ideation", description: "Wireframing and prototyping multiple solutions with a mobile-first mindset." }
    ],
    solution: "We delivered a robust solution that improved key metrics. The new interface streamlined workflows, reducing the average time-to-task by significant margins. Feedback from the users highlighted the improved clarity and aesthetic appeal of the new design system."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "UI UX Designer",
    company: "Quadleo Techno Solutions",
    period: "2024 - Now",
    description: "Designing intuitive and engaging user experiences for web and mobile applications. • Collaborating with developers, product managers, and stakeholders to ensure seamless UI implementation.",
    skills: ["Visual Design", "Branding"]
  },
  {
    id: "2",
    role: "Professional Development",
    company: "UI UX Designing & Freelance Job",
    period: "2022 - 2024",
    description: "",
    skills: ["Prototyping", "Wireframing"]
  },
  {
    id: "3",
    role: "Inventory Management",
    company: "Kuwait",
    period: "2019 - 2022",
    description: "Managed stock levels, tracking, and replenishment to ensure efficient inventory control. • Maintained accurate records of inventory transactions and reports.",
    skills: ["Research", "User Testing"]
  },
  {
    id: "4",
    role: "Graphic Designer",
    company: "Enzapps Software Solutions",
    period: "2017 - 2018",
    description: "Designed visuals for web-based platforms and print media, ensuring brand consistency.",
    skills: ["Product Design", "System Design"]
  },
  {
    id: "5",
    role: "Graphic Designer",
    company: "Fashion Runway International",
    period: "2016 - 2017",
    description: "Designed high-quality print materials and logos for fashion branding and promotions. • Utilized Adobe Photoshop, Illustrator, and other design tools to produce compelling graphics.",
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