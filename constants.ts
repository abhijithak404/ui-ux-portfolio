import { Project, Experience, Education, JobProject } from './types';
// --- ASSET IMPORTS ---
// Please ensure these files exist in your 'assets' folder
import projectNovaThumb from './Assets/image1.png';

import dopack_img1 from './Assets/DoPack-img1.webp';
import dopack_img2 from './Assets/DoPack-img2.webp';
import dopack_thumb from './Assets/dopack.webp';

import eduspark_img1 from './Assets/eduspark-folio-img1.webp';
import eduspark_img2 from './Assets/eduspark-folio-img2.png';
import eduspark_thumb from './Assets/eduspark.webp';

import gamecoreImg1 from "./Assets/gamecoe-img1.png";
import gamecoreImg2 from "./Assets/gamecoe-img2.png";
import gamecoreThumb from "./Assets/gamecore.webp";

import secondvahan from './Assets/2ndvahan.webp';
import billerq_cabletv from './Assets/BillerQ-CableTV_CRM.webp';
import billerq_watercrm from './Assets/BillerQ-WaterCRM.webp';
import essar from './Assets/ESSAR.webp';
import rks from './Assets/RKS.webp';

import abhilash from './Assets/Abhilash.jpeg';
import ashiqu from './Assets/Ashiqu.jpeg';
import abhinand from './Assets/abhinand.jpg';

import samaro_foods from './Assets/samaro-foods.webp';
import quadleo_website from './Assets/quadleo-website.webp';
import billerq_lite from './Assets/billerq-lite.webp';
import misk_website from './Assets/misk-website.webp';
import kfca_awards from './Assets/kfca-awards.webp';


export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/abhijithak/",
  twitter: "https://twitter.com",
  email: "abhijithak3@gmail.com",
  behance: "https://www.behance.net/AbhijithAk",
  instagram: "https://www.instagram.com/abhi.dsgn"
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
  { name: "Adobe Photoshop", level: "Advanced", category: "Design" },
  { name: "Adobe Illustrator", level: "Advanced", category: "Design" },
  { name: "HTML/CSS", level: "Advanced", category: "Development" },
  { name: "JS", level: "Intermediate", category: "Development" },
  { name: "Webflow", level: "Intermediate", category: "Development" },
  { name: "React", level: "Beginner", category: "Development" },
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
    quote: "I had the opportunity to work closely with Abhijith, where he focused on UI/UX design and I handled frontend development. His designs consistently made development seamless, as they were well-structured, practical, and highly user-friendly. He brings a strong creative vision, attention to detail, and a collaborative mindset that makes working with him both productive and enjoyable.",
    author: "Abhinand PK",
    role: "React Developer, Quadleo Techno Solutions",
    image: abhinand
  },
  {
    quote: "Abhijith AK is a highly talented UI/UX designer with a knack for creating simple, minimal, and user-friendly designs. His work carries a professional touch, ensuring a seamless experience for users while maintaining clean aesthetics. With a strong understanding of usability and functionality, he consistently delivers designs that are both visually appealing and intuitive. His ability to blend creativity with practicality makes him a valuable asset in any design team.",
    author: "Ashiqu Ali",
    role: "Flutter Developer, Quadleo Techno Solutions",
    image: ashiqu
  },
  {
    quote: "I worked with Abhijith at Quadleo Techno Solutions, and he’s an excellent UI/UX designer. His designs are clean, intuitive, and strongly aligned with material design and mobile-first principles, making development smooth and efficient. As a Flutter developer, I really appreciate how practical and well-structured his prototypes are—there’s always clarity when translating them into code. He’s also a great collaborator, open to feedback, and genuinely focused on delivering the best user experience.",
    author: "Abhilash P",
    role: "Software Engineer, Ahex Technologies",
    image: abhilash
  }
];

export const PROJECTS: Project[] = [
  {
    id: "fintech-dashboard",
    title: "GameCore",
    category: "Mobile Application",
    summary: "A bold, futuristic e-commerce app that blends immersive visuals with a seamless shopping experience.",
    description: "Gamecore is a concept project focused on designing a modern e-commerce app for gaming products. The goal was to combine a futuristic visual style with an effortless shopping journey for players.",
    thumbnail: gamecoreThumb,
    images: [
      gamecoreImg1, gamecoreImg2
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    figma: "https://www.figma.com/design/xYAbDBHJYt4YAUpDJHVPA3/GameCore?node-id=0-1&t=DT4UVJVfU3DTfXmV-1",
    behance: "https://www.behance.net/gallery/232587929/Gamecore-Gaming-E-Commerce-App-UIUX-Design",
    challenge: "To design a visually striking interface that reflects gaming culture while keeping the e-commerce experience intuitive and fast. Balancing style with usability was key.",
    solution: "The solution focused on creating a visually engaging yet highly functional shopping experience. A dark, futuristic theme with neon accents was combined with clear layouts and intuitive navigation, ensuring users could explore and purchase products effortlessly. Every interaction was designed to feel smooth, responsive, and true to the energy of gaming culture."
  },
  {
    id: "travel-app",
    title: "DoPack",
    category: "Website Design",
    summary: "A seamless courier booking and tracking web experience — designed to make delivery management fast, clear, and effortless.",
    description: "This project focuses on designing a modern and user-friendly courier booking platform that simplifies the process of sending and tracking shipments. The goal was to create a clean, reliable, and easy-to-navigate interface for customers and admins.",
    thumbnail: dopack_thumb,
    images: [dopack_img1, dopack_img2],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    figma: "https://www.figma.com/design/0yRClX9rb1satfG7XVLfqA/Courier-Booking?node-id=0-1&p=f&t=xC0yuYnrU2ELAp0q-0",
    behance: "https://www.behance.net/gallery/235973605/Courier-Service-Website-Booking-Tracking-Platform",
    challenge: "Trust is a major barrier in P2P travel services. The app needed to convey safety and authenticity immediately.",
    solution: "Introduced 'Video Introductions' for guides and a transparent review system that highlights specific attributes like 'punctuality' and 'local knowledge'."
  },
  {
    id: "eco-commerce",
    title: "EduSpark",
    category: "Mobile Application",
    summary: "Learn. Grow. Achieve.",
    description: "Eduspark is an online learning platform that allows students and professionals to explore, purchase, and learn from a wide range of courses. The app supports both free and paid learning, complete with progress tracking and certificate generation.",
    thumbnail: eduspark_thumb,
    images: [
      eduspark_img1, eduspark_img2
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    figma: "https://www.figma.com/design/Z4Aiv4TVx10JTa6Pp59Vu6/Untitled?node-id=0-1&p=f&t=yJtgFnz8YrSIsVCW-0",
    behance: "https://www.behance.net/gallery/exa mple/nova",
    challenge: "Design a learning platform that presents a wide variety of courses without overwhelming users, while ensuring a smooth flow from discovery to certification. The experience needed to stay intuitive, engaging, and easy to navigate for learners of all levels.",
    solution: "I designed Eduspark with a clear, learner-focused interface that simplifies course exploration and makes learning sessions smooth and distraction-free. The visual hierarchy, clean navigation, and structured layouts help users quickly find courses, track their progress, and earn certificates with ease."
  }
];

export const JOB_PROJECTS: JobProject[] = [
  {
    id: "jp-1",
    title: "Cable TV CRM",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "",
    image: billerq_cabletv,
    description: "Cable TV CRM is a comprehensive customer and service management platform built for cable TV and broadband operators. The system includes multiple role-based applications designed to simplify subscription management, billing, payments, and customer support workflows while improving operational efficiency and user satisfaction.",
    overview: "This CRM was designed as an all-in-one CRM ecosystem serving customers, agents, and support teams. The platform focuses on reducing manual work, improving response times for complaints, and providing users with a seamless experience across mobile applications. The UI/UX design emphasizes clarity, speed, and ease of use for both end customers and operational staff.",
    deliverables: ['End-to-end UI/UX design for 3 mobile applications', 'Low-fidelity and high-fidelity wireframes', 'Interactive prototypes for key user flows', 'Design system (colors, typography, components)', 'User journey maps and task flows', 'Developer-ready UI screens'],
    challenge: "The primary challenge was designing a multi-app CRM ecosystem that served different user roles—customers, agents, and support teams—while maintaining a consistent and intuitive experience across all platforms. The system needed to simplify complex billing, subscription, and complaint workflows for non-technical users, reduce task completion time for agents managing high customer volumes, and ensure clarity and ease of navigation without overwhelming users with operational complexity.",
    approach: "A user-centered design approach was followed to understand real-world usage patterns of customers, agents, and support staff. The focus was on minimizing cognitive load, reducing steps in critical flows, and creating a scalable UI system that could grow with future features.",
    approachSteps: [
      { number: "01", title: "Research & Flow Mapping", description: "Analyzed user roles, business requirements, and pain points to define clear user flows for payments, complaints, and account management." },
      { number: "02", title: "Design & Validation", description: "Created wireframes and interactive prototypes, iterated based on usability considerations, and refined UI components to ensure consistency and efficiency across all apps." }
    ],
    solution: "The final solution delivered a unified, intuitive CRM experience across customer, complaint, and agent applications. Customers gained easy control over subscriptions and payments, agents could manage accounts and service requests efficiently, and support teams benefited from streamlined complaint handling. The result was a scalable, user-friendly design system that improved operational workflows and enhanced overall user experience.",
    links: {
      web: "https://billerq.com",
      // ios: "https://apps.apple.com/us/app/healthtrack",
      android: "https://play.google.com/store/apps/details?id=com.quadleo.billerq&pcampaignid=web_share"
    }
  },
  {
    id: "jp-2",
    title: "Used Vehicles Selling Platform",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "",
    image: secondvahan,
    description: "This is a digital used-vehicle selling platform that connects customers, dealerships, and internal teams through a unified multi-platform system. The platform streamlines vehicle listing, inspection, approval, and sales processes while providing customers with an easy and transparent way to browse and inquire about used vehicles.",
    overview: "This app was designed as an end-to-end vehicle marketplace with role-based applications for administrators, staff, and customers. The focus of the UI/UX design was to simplify complex operational workflows, ensure data accuracy across platforms, and deliver a smooth browsing experience for customers. The design emphasizes trust, clarity, and ease of navigation across web and mobile interfaces.",
    deliverables: ['UI/UX design for Admin Web App, Staff Mobile App, and Customer Mobile App', 'User research insights and role-based user flows', 'Low-fidelity and high-fidelity wireframes', 'Interactive prototypes for key workflows', 'Responsive and accessible UI components', 'Design handoff assets for development'],
    challenge: "The main challenge was designing a scalable multi-platform system that supported different user roles while maintaining consistency across web and mobile experiences. The platform needed to manage complex processes such as vehicle inspections, approvals, pricing, and dealer coordination, while keeping the customer journey simple and trustworthy. Balancing operational efficiency for staff and admins with an intuitive browsing and inquiry experience for customers was critical.",
    approach: "A research-driven, collaborative design approach was followed to understand dealership operations, staff workflows, and customer expectations. The design process focused on reducing friction in critical tasks, improving clarity in vehicle information, and ensuring accessibility and responsiveness across devices.",
    approachSteps: [
      { number: "01", title: "UX Research & Flow Definition", description: "Studied user roles, business rules, and real-world dealership workflows to define clear user journeys for listing management, inspections, approvals, and customer inquiries." },
      { number: "02", title: "Design, Testing & Collaboration", description: "Created wireframes and interactive prototypes, validated usability through testing, and collaborated closely with developers to implement responsive, accessible, and development-ready UI components." }
    ],
    solution: "The final solution delivered a cohesive used-vehicle marketplace experience across admin, staff, and customer platforms. Administrators gained efficient tools to manage listings and transactions, staff could perform inspections and approvals seamlessly, and customers enjoyed a clean, intuitive interface for discovering vehicles and connecting with dealerships. The design improved operational clarity, reduced workflow friction, and enhanced overall user trust and engagement.",
    links: {
      web: "2ndvahan.com",
      ios: "https://apps.apple.com/us/app/healthtrack",
      android: "https://play.google.com/store/apps/details?id=com.quadleo.secondvahanstaff&pcampaignid=web_share"
      // android: "https://play.google.com/store/apps/details?id=com.secondvahan.dealer&pcampaignid=web_share"

    }
  },
  {
    id: "jp-3",
    title: "Healthcare HR",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "",
    image: essar,
    description: "Healthcare HR is a comprehensive workforce and recruitment management system designed for healthcare staffing agencies. The platform enables agencies to efficiently match hospital manpower requirements with qualified healthcare professionals, while providing end-to-end tools for recruitment, attendance tracking, timesheets, and workforce administration.",
    overview: "Healthcare HR was designed as a role-based platform serving administrators, healthcare agencies, hospitals, and healthcare professionals. The system supports the complete staffing lifecycle—from candidate registration and job application to attendance submission, timesheet approval, and invoicing. The UI/UX design focuses on clarity, compliance, and efficiency in managing large volumes of healthcare workforce data.",
    deliverables: ['UI/UX design for Admin Web Application', 'UI/UX design for Healthcare Professionals’ Mobile App', 'User flows and role-based journey mapping', 'Low-fidelity and high-fidelity wireframes', 'Interactive prototypes for key workflows', 'Scalable UI components and design system', 'Developer handoff assets'],
    challenge: "The primary challenge was designing a complex workforce management system that could handle recruitment, documentation, attendance, and payroll-related workflows while remaining easy to use for both administrators and healthcare professionals. Ensuring accurate role-based access, reducing operational complexity, and maintaining clarity across compliance-heavy processes such as document verification and timesheet management were key challenges.",
    approach: "A user-centered and process-driven approach was followed to understand healthcare staffing operations and compliance requirements. The design prioritized reducing manual effort, minimizing errors in workforce data, and creating intuitive workflows for both administrative users and healthcare professionals.",
    approachSteps: [
      { number: "01", title: "Research & Workflow Definition", description: "Studied healthcare staffing processes, user roles, and compliance needs to define structured workflows for recruitment, job assignment, attendance tracking, and invoicing." },
      { number: "02", title: "Design, Prototyping & Validation", description: "Created wireframes and interactive prototypes, refined high-fidelity UI designs, and validated usability to ensure efficiency, accuracy, and ease of navigation across the system." }
    ],
    solution: "The final solution delivered a robust and intuitive Healthcare HR platform that streamlined workforce recruitment and management for healthcare staffing agencies. Administrators gained complete control over employee records, job assignments, timesheets, and invoicing, while healthcare professionals benefited from a seamless mobile experience for job applications, attendance, and timesheet submissions. The design improved operational efficiency, data accuracy, and overall user satisfaction across the staffing lifecycle.",
    links: {
      web: "https://healthtrack-example.com",
      ios: "https://apps.apple.com/us/app/healthtrack",
      android: "https://play.google.com/store/apps/details?id=com.healthtrack"
    }
  },
  {
    id: "jp-4",
    title: "Waste Management Platform",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "",
    image: rks,
    description: "This is a comprehensive waste management application designed to digitize and streamline waste collection operations for municipalities and service providers. The platform connects administrators, customers, field agents, and drivers through a unified system to improve operational efficiency, service transparency, and user engagement.",
    overview: "This platform was designed as a multi-role ecosystem consisting of an Admin Web App and multiple mobile applications for customers, agents, and drivers. The system supports end-to-end waste management workflows—from service requests and task assignments to collection tracking and real-time updates. The UI/UX design emphasizes simplicity, accessibility, and efficient task execution across all user roles.",
    deliverables: ['UI/UX design for Admin Web App, Customer Mobile App, Agent Mobile App, and Driver Mobile App', 'Role-based user flows and journey maps', 'Low-fidelity and high-fidelity wireframes', 'Interactive prototypes for key workflows', 'Accessible and responsive UI components', 'Design system and developer handoff assets'],
    challenge: "The key challenge was designing a complex, multi-role operational system that could support real-time coordination between administrators, field agents, drivers, and customers while maintaining a simple and intuitive user experience. Balancing operational control with ease of use, ensuring accessibility across diverse user groups, and minimizing friction in time-sensitive workflows such as task assignment, navigation, and collection tracking were critical challenges.",
    approach: "A user-centered, workflow-driven approach was adopted to understand real-world waste management operations and user expectations. The design focused on reducing task complexity, improving visibility of service status, and creating consistent UI patterns across web and mobile platforms.",
    approachSteps: [
      { number: "01", title: "Research & Workflow Mapping", description: "Analyzed operational processes, user roles, and field constraints to define clear workflows for service requests, task assignments, collection schedules, and real-time updates." },
      { number: "02", title: "Design, Prototyping & Optimization", description: "Developed wireframes and interactive prototypes, refined high-fidelity UI designs, and optimized usability to ensure smooth navigation and efficient task completion for all users." }
    ],
    solution: "The final solution delivered an integrated waste management platform that improved coordination and transparency across all roles. Administrators gained better operational visibility and control, customers could easily request and track waste collection, agents efficiently coordinated tasks, and drivers received clear schedules and navigation support. The design enhanced service reliability, user engagement, and overall operational efficiency.",
    links: {
      // web: "https://healthtrack-example.com",
      ios: "https://apps.apple.com/us/app/healthtrack",
      android: "https://play.google.com/store/apps/details?id=com.healthtrack"
    }
  },
  {
    id: "jp-5",
    title: "Water Purifier Sales & Service Management",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "",
    image: billerq_watercrm,
    description: "Designed an Admin Web App with dashboard, billing, and service-management interfaces, alongside a Technician Mobile App for task assignment, service tracking, and customer updates, plus an Admin Mobile App for centralized service and technician management.",
    overview: "Water Purifier Sales & Service Management is an end-to-end multi-platform CRM and field operations system built for water purifier enterprises. The platform streamlines product sales, recurring Annual Maintenance Contracts (AMC), billing, and real-time technician coordination across web and mobile applications.",
    deliverables: [
      'Admin Web App (Dashboard, Billing & Service Management)',
      'Technician Mobile App (Task Assignment & Service Tracking)',
      'Admin Mobile App (Centralized Service & Field Management)',
      'Role-based user flows and service lifecycle mapping',
      'Low-fidelity and high-fidelity wireframes',
      'Interactive prototypes for field technician tasks',
      'Design system and developer handoff assets'
    ],
    challenge: "Designing a synchronized platform for three distinct user roles—administrators, field technicians, and service managers—with varying technical proficiency. The system required managing complex customer AMC subscriptions, automated recurring billing, and real-time technician task dispatching without complicating user interactions or slowing down field operations.",
    approach: "Followed a user-centric and workflow-driven design strategy. Mapped end-to-end service ticket lifecycles—from initial customer inquiry and installation to periodic filter replacements and complaint resolutions. Created a high-density, easily scannable web dashboard for administrators and high-contrast, one-handed mobile flows for on-field technicians.",
    approachSteps: [
      { number: "01", title: "Workflow Discovery & Role Mapping", description: "Analyzed field service bottlenecks, customer billing lifecycles, and technician task logging requirements to construct seamless multi-role user journeys." },
      { number: "02", title: "Cross-Platform UI Prototyping", description: "Developed wireframes, scalable UI components, and interactive prototypes for web and mobile interfaces to ensure rapid task execution and minimal cognitive load." }
    ],
    solution: "The delivered solution transformed water purifier sales and service operations by connecting web administrators directly with field technicians. Technicians can now accept jobs, navigate to customer locations, and log completed maintenance on the go, while administrators enjoy automated billing, live technician tracking, and complete visibility over service SLAs.",
    links: {
      web: "https://billerq.com",
      android: "https://play.google.com/store/apps/details?id=com.quadleo.billerq&pcampaignid=web_share"
    }
  },
  {
    id: "jp-6",
    title: "Samaro Foods Website",
    company: "Samaro Foods",
    role: "UI/UX Designer & Web Developer",
    year: "",
    image: samaro_foods,
    description: "Designed and developed a fully responsive brand website in Figma, HTML, CSS, and JavaScript, prioritizing visual hierarchy, brand consistency, and fast load times.",
    overview: "Samaro Foods is a modern organic food and culinary products brand. The project involved end-to-end UX research, visual design in Figma, and front-end development using responsive HTML, CSS, and JavaScript. The website emphasizes high-conversion product discovery, brand storytelling, and smooth performance across all mobile and desktop devices.",
    deliverables: [
      'Responsive Website Design (Figma)',
      'Front-End Web Development (HTML5, CSS3, JavaScript)',
      'Product Catalog & Brand Storytelling Layouts',
      'Performance & Page Speed Optimization',
      'Interactive Micro-Animations & Mobile Navigation',
      'SEO & Cross-Browser Compatibility'
    ],
    challenge: "Creating a digital brand presence that communicated the organic purity and premium quality of Samaro Foods while ensuring fast load times on mobile networks. The challenge was structuring product categories, visual assets, and culinary highlights into a clean, intuitive layout without clutter or performance bottlenecks.",
    approach: "Applied a content-first, minimalist design system with rich imagery and clean whitespace. Prototyped interactive product showcases in Figma before translating them into semantic, lightweight HTML/CSS and vanilla JavaScript for maximum speed and accessibility.",
    approachSteps: [
      { number: "01", title: "Brand Discovery & Wireframing", description: "Established the visual identity, moodboards, and responsive wireframes focusing on product showcase clarity and customer trust." },
      { number: "02", title: "Design Systems & Frontend Coding", description: "Built customized responsive components, optimized media assets for swift loading, and implemented fluid transitions." }
    ],
    solution: "Delivered an engaging, high-speed brand website that elevated Samaro Foods' digital presence. The website features seamless mobile responsiveness, intuitive product browsing, and clear call-to-actions, resulting in enhanced brand credibility and user engagement.",
    links: {
      web: "https://samarofoods.com"
    }
  },
  {
    id: "jp-7",
    title: "Quadleo Company Website",
    company: "Quadleo Techno Solutions",
    role: "UI/UX Designer & Frontend Developer",
    year: "",
    image: quadleo_website,
    description: "Designed and developed the company website, aligning visual design with brand identity and usability standards.",
    overview: "Quadleo Techno Solutions required a refreshed corporate website to showcase its suite of enterprise software solutions, CRM systems, and digital product design services. The project encompassed brand alignment, interactive UI design, and responsive frontend implementation reflecting technical innovation and credibility.",
    deliverables: [
      'Corporate Website UI/UX Design',
      'Responsive Frontend Web Development',
      'Services & Solutions Showcase Pages',
      'Interactive Portfolio & Case Study Showcase',
      'Brand Identity Alignment & Typography System',
      'Lead Capture & Contact Funnel Optimization'
    ],
    challenge: "Communicating the breadth of Quadleo's technical capabilities—ranging from enterprise CRMs to custom mobile apps—while maintaining an elegant, easy-to-navigate interface. The site had to appeal to enterprise stakeholders looking for reliable software partners.",
    approach: "Developed a modern dark-themed aesthetic with sleek typography, high-contrast accents, and modular service cards. Engineered smooth scroll animations and clear information hierarchy to guide visitors toward project inquiries.",
    approachSteps: [
      { number: "01", title: "Information Architecture & Layouts", description: "Structured core offerings, case studies, and corporate milestones to create a compelling B2B user journey." },
      { number: "02", title: "Design & High-Performance Execution", description: "Designed high-fidelity mockups and developed responsive, interactive components with optimized load times." }
    ],
    solution: "Launched a modern corporate website that established Quadleo as a forward-thinking technology agency. The new platform improved inbound client inquiries and streamlined service discovery.",
    links: {
      web: "https://quadleo.com"
    }
  },
  {
    id: "jp-8",
    title: "BillerQ-Lite Mobile App",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "",
    image: billerq_lite,
    description: "Designed a mobile app for service-based businesses to manage recurring billing, customer records, payment tracking, and invoicing through an intuitive interface. Streamlined daily billing operations by simplifying navigation and consolidating core tasks into a single mobile workflow.",
    overview: "BillerQ-Lite is a lightweight mobile billing application tailored for small-to-medium service providers and field operators. It condenses complex billing systems into an effortless mobile experience where businesses can generate invoices, track pending dues, send payment reminders, and manage customer histories in seconds.",
    deliverables: [
      'Mobile Application UI/UX Design (iOS & Android)',
      'Fast Invoice Creation & Share Flow',
      'Payment Tracking & Outstanding Dues Dashboard',
      'Customer Directory & History Management',
      'Mobile-First Design System & Micro-Interactions',
      'Developer Handoff & Prototype Walkthroughs'
    ],
    challenge: "Traditional desktop billing software is overloaded with complicated accounting features that slow down on-the-go business owners. The core challenge was boiling down invoice generation, receipts, and customer ledgers into a quick, frictionless 3-tap mobile workflow.",
    approach: "Conducted usability tests with small business merchants and technicians. Designed large tap targets, high-visibility status tags for invoices (Paid, Pending, Overdue), and automated invoice sharing via WhatsApp/SMS.",
    approachSteps: [
      { number: "01", title: "Simplification & Flow Optimization", description: "Mapped out rapid invoice generation, payment logging, and customer lookup flows to eliminate redundant steps." },
      { number: "02", title: "UI Prototyping & Usability Testing", description: "Created high-contrast light and dark mobile UI screens, testing readability in bright outdoor working environments." }
    ],
    solution: "Created an intuitive, high-speed mobile app that reduced billing time per customer by over 60%. Business owners can now generate and send receipts instantly with total visibility over their cash flow.",
    links: {
      web: "https://billerq.com",
      android: "https://play.google.com/store/apps/details?id=com.quadleo.billerqlite"
    }
  },
  {
    id: "jp-9",
    title: "Misk Website Design & Development",
    company: "Misk",
    role: "UI/UX Designer & Web Developer",
    year: "",
    image: misk_website,
    description: "Designed and developed a responsive website, applying consistent visual design and usability principles.",
    overview: "Misk is a refined lifestyle and curated essentials brand. The project entailed crafting a minimalist, editorial-style responsive website that showcases collections with artistic restraint, luxurious typography, and seamless responsive interactions across screen sizes.",
    deliverables: [
      'Responsive Website UI/UX Design',
      'Frontend Development & Responsive Layouts',
      'Curated Collection & Gallery Showcase',
      'Minimalist Design System & Typography Hierarchy',
      'Subtle Micro-Interactions & Transitions',
      'Performance & Mobile Optimization'
    ],
    challenge: "Achieving an understated luxury aesthetic where whitespace and typography drive the narrative without feeling empty or sparse. Ensuring that large imagery loaded quickly and smoothly on mobile devices without degrading visual fidelity.",
    approach: "Adopted a refined Scandinavian/editorial aesthetic with bespoke serif headings, fluid grid systems, and subtle motion transitions. Implemented responsive images and clean semantic code for effortless browsing.",
    approachSteps: [
      { number: "01", title: "Visual Identity & Concept Exploration", description: "Curated aesthetic typography, color palettes, and editorial layout compositions in Figma." },
      { number: "02", title: "Development & Motion Design", description: "Built fluid responsive templates with gentle reveal animations and optimized image delivery." }
    ],
    solution: "Delivered a visually captivating, responsive brand website that positioned Misk as a premium lifestyle label. The intuitive browsing experience and clean aesthetics resulted in strong brand engagement and positive user feedback.",
    links: {
      web: "https://misk.example.com"
    }
  },
  {
    id: "jp-10",
    title: "49th Kerala Film Critics Awards 2026",
    company: "Kerala Film Critics Association",
    role: "UI/UX Designer & Web Developer",
    year: "2026",
    image: kfca_awards,
    description: "Designed and developed the official website for the 49th Kerala Film Critics Awards 2026, delivering an immersive, responsive event platform highlighting award categories, nominees, jury panels, and event schedules.",
    overview: "The 49th Kerala Film Critics Awards 2026 is one of the most prestigious cinema award ceremonies celebrating excellence in Malayalam film. The objective was to design and develop a grand, cinematic, responsive web portal that honored the rich heritage of Kerala cinema while providing attendees, film fraternity members, and fans with event schedules, nominee lists, jury highlights, and media press releases.",
    deliverables: [
      'Official Event Website UI/UX Design (Figma)',
      'Responsive Frontend Web Development',
      'Nominees & Award Categories Showcase',
      'Jury Panel & Special Honors Presentation',
      'Live Event Schedule & Venue Information',
      'Media Kit & Press Release Downloads'
    ],
    challenge: "Balancing an opulent, cinematic aesthetic with fast loading speeds across mobile devices during high-traffic announcement periods. The website needed to present extensive nominee rosters, jury biographies, and high-resolution media galleries in an intuitive, accessible manner without visual clutter.",
    approach: "Crafted a luxury dark-mode visual system featuring gold accents, cinematic film typography, and subtle micro-interactions. Optimized image assets and implemented modular UI cards for easy category browsing across smartphones and desktops.",
    approachSteps: [
      { number: "01", title: "Visual Theme & Information Architecture", description: "Designed a cinematic layout inspired by silver-screen heritage, organizing categories, jury, and event timelines into frictionless user flows." },
      { number: "02", title: "Responsive Development & Media Optimization", description: "Built mobile-first responsive components, optimized high-res assets for rapid delivery during peak traffic, and integrated live event links." }
    ],
    solution: "Successfully launched the official 49th Kerala Film Critics Awards website, providing a memorable, seamless digital gateway for film enthusiasts, media journalists, and jury members worldwide.",
    links: {
      web: "https://kfca49.com/"
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "UI UX Designer",
    company: "Quadleo Techno Solutions",
    period: "2024 - Present",
    description: "Designing intuitive and engaging user experiences for web and mobile applications. • Collaborating with developers, product managers, and stakeholders to ensure seamless UI implementation.",
    skills: ["Visual Design", "Branding"]
  },
  {
    id: "2",
    role: "Freelance UI/UX Designer",
    company: "Independent / Contract Projects",
    period: "2022 - 2024",
    description: "",
    skills: ["Prototyping", "Wireframing"]
  },
  {
    id: "3",
    role: "Inventory Coordinator",
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
    degree: "Diploma in Advertising",
    institution: "Image Creative Education",
    year: "2017",
    description: "Learned and applied skills in Adobe Photoshop, Illustrator, HTML, and CSS for design and web development."
  },
  {
    id: "2",
    degree: "Bachelor of Commerce",
    institution: "Calicut University",
    year: "2015",
    description: " "
  }
];