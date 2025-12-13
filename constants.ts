import { Project, Experience, Education, JobProject } from './types';

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
  { name: "HTML/CSS", level: "Advanced", category: "Development" },
  { name: "JS", level: "Intermediate", category: "Development" },
  { name: "Adobe Photoshop", level: "Advanced", category: "Design" },
  { name: "Adobe Illustrator", level: "Advanced", category: "Design" },
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
    thumbnail: "Assets/gamecore.webp",
    images: [
      "Assets/gamecoe-img1.png",
      "Assets/gamecoe-img2.png"
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    figma: "https://www.figma.com/design/xYAbDBHJYt4YAUpDJHVPA3/GameCore?node-id=0-1&t=DT4UVJVfU3DTfXmV-1",
    challenge: "To design a visually striking interface that reflects gaming culture while keeping the e-commerce experience intuitive and fast. Balancing style with usability was key.",
    solution: "The solution focused on creating a visually engaging yet highly functional shopping experience. A dark, futuristic theme with neon accents was combined with clear layouts and intuitive navigation, ensuring users could explore and purchase products effortlessly. Every interaction was designed to feel smooth, responsive, and true to the energy of gaming culture."
  },
  {
    id: "travel-app",
    title: "DoPack",
    category: "Website Design",
    summary: "A seamless courier booking and tracking web experience — designed to make delivery management fast, clear, and effortless.",
    description: "This project focuses on designing a modern and user-friendly courier booking platform that simplifies the process of sending and tracking shipments. The goal was to create a clean, reliable, and easy-to-navigate interface for customers and admins.",
    thumbnail: "Assets/dopack.webp",
    images: [
      "Assets/DoPack-img1.webp",
      "Assets/DoPack-img2.webp"
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    figma: "https://www.figma.com/design/0yRClX9rb1satfG7XVLfqA/Courier-Booking?node-id=0-1&p=f&t=xC0yuYnrU2ELAp0q-0",
    challenge: "Trust is a major barrier in P2P travel services. The app needed to convey safety and authenticity immediately.",
    solution: "Introduced 'Video Introductions' for guides and a transparent review system that highlights specific attributes like 'punctuality' and 'local knowledge'."
  },
  {
    id: "eco-commerce",
    title: "EduSpark",
    category: "Mobile Application",
    summary: "Learn. Grow. Achieve.",
    description: "Eduspark is an online learning platform that allows students and professionals to explore, purchase, and learn from a wide range of courses. The app supports both free and paid learning, complete with progress tracking and certificate generation.",
    thumbnail: "Assets/eduspark.webp",
    images: [
      "Assets/eduspark-folio-img1.webp",
      "Assets/eduspark-folio-img2.png"
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    figma: "https://www.figma.com/design/Z4Aiv4TVx10JTa6Pp59Vu6/Untitled?node-id=0-1&p=f&t=yJtgFnz8YrSIsVCW-0",
    challenge: "Design a learning platform that presents a wide variety of courses without overwhelming users, while ensuring a smooth flow from discovery to certification. The experience needed to stay intuitive, engaging, and easy to navigate for learners of all levels.",
    solution: "I designed Eduspark with a clear, learner-focused interface that simplifies course exploration and makes learning sessions smooth and distraction-free. The visual hierarchy, clean navigation, and structured layouts help users quickly find courses, track their progress, and earn certificates with ease."
  }
];

export const JOB_PROJECTS: JobProject[] = [
  {
    id: "jp-1",
    title: "BillerQ - Cable TV CRM",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "2024",
    image: "Assets/BillerQ-CableTV_CRM.webp",
    description: "BillerQ – Cable TV CRM is a comprehensive customer and service management platform built for cable TV and broadband operators. The system includes multiple role-based applications designed to simplify subscription management, billing, payments, and customer support workflows while improving operational efficiency and user satisfaction.",
    overview: "BillerQ was designed as an all-in-one CRM ecosystem serving customers, agents, and support teams. The platform focuses on reducing manual work, improving response times for complaints, and providing users with a seamless experience across mobile applications. The UI/UX design emphasizes clarity, speed, and ease of use for both end customers and operational staff.",
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
    title: "2ndvahan.com",
    company: "Quadleo Techno Solutions",
    role: "UI UX Designer",
    year: "2024",
    image: "Assets/2ndvahan.webp",
    description: "2nd Vahan is a digital used-vehicle selling platform that connects customers, dealerships, and internal teams through a unified multi-platform system. The platform streamlines vehicle listing, inspection, approval, and sales processes while providing customers with an easy and transparent way to browse and inquire about used vehicles.",
    overview: "2nd Vahan was designed as an end-to-end vehicle marketplace with role-based applications for administrators, staff, and customers. The focus of the UI/UX design was to simplify complex operational workflows, ensure data accuracy across platforms, and deliver a smooth browsing experience for customers. The design emphasizes trust, clarity, and ease of navigation across web and mobile interfaces.",
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
    year: "2025",
    image: "Assets/ESSAR.webp",
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
    title: "RKS",
    company: "Freelance",
    role: "Product Designer",
    year: "2020",
    image: "Assets/RKS.webp",
    description: "RKS is a comprehensive waste management application designed to digitize and streamline waste collection operations for municipalities and service providers. The platform connects administrators, customers, field agents, and drivers through a unified system to improve operational efficiency, service transparency, and user engagement.",
    overview: "The RKS platform was designed as a multi-role ecosystem consisting of an Admin Web App and multiple mobile applications for customers, agents, and drivers. The system supports end-to-end waste management workflows—from service requests and task assignments to collection tracking and real-time updates. The UI/UX design emphasizes simplicity, accessibility, and efficient task execution across all user roles.",
    deliverables: ['UI/UX design for Admin Web App, Customer Mobile App, Agent Mobile App, and Driver Mobile App', 'Role-based user flows and journey maps', 'Low-fidelity and high-fidelity wireframes', 'Interactive prototypes for key workflows', 'Accessible and responsive UI components', 'Design system and developer handoff assets'],
    challenge: "The key challenge was designing a complex, multi-role operational system that could support real-time coordination between administrators, field agents, drivers, and customers while maintaining a simple and intuitive user experience. Balancing operational control with ease of use, ensuring accessibility across diverse user groups, and minimizing friction in time-sensitive workflows such as task assignment, navigation, and collection tracking were critical challenges.",
    approach: "A user-centered, workflow-driven approach was adopted to understand real-world waste management operations and user expectations. The design focused on reducing task complexity, improving visibility of service status, and creating consistent UI patterns across web and mobile platforms.",
    approachSteps: [
      { number: "01", title: "Research & Workflow Mapping", description: "Analyzed operational processes, user roles, and field constraints to define clear workflows for service requests, task assignments, collection schedules, and real-time updates." },
      { number: "02", title: "Design, Prototyping & Optimization", description: "Developed wireframes and interactive prototypes, refined high-fidelity UI designs, and optimized usability to ensure smooth navigation and efficient task completion for all users." }
    ],
    solution: "The final solution delivered an integrated waste management platform that improved coordination and transparency across all roles. Administrators gained better operational visibility and control, customers could easily request and track waste collection, agents efficiently coordinated tasks, and drivers received clear schedules and navigation support. The design enhanced service reliability, user engagement, and overall operational efficiency.",
    links: {
      web: "https://healthtrack-example.com",
      ios: "https://apps.apple.com/us/app/healthtrack",
      android: "https://play.google.com/store/apps/details?id=com.healthtrack"
    }
  },
  {
    id: "jp-5",
    title: "LogiStream Analytics",
    company: "Freelance",
    role: "Product Designer",
    year: "2020",
    image: "Assets/BillerQ-WaterCRM.webp",
    description: "Redesigned the patient portal for a major healthcare provider, improving accessibility scores by 40%.",
    overview: "Detailed insights into the design process, challenges faced, and the solutions implemented during my tenure at TechFlow Solutions. We aimed to bridge the gap between complex medical data and patient understanding.",
    deliverables: ['User Interface Design', 'Experience Strategy', 'Interactive Prototypes', 'Accessibility Audit'],
    challenge: "The primary objective was to modernize the existing platform while ensuring zero disruption to the user base. We faced specific challenges regarding data visualization complexity and mobile responsiveness. The legacy system was cluttered, leading to patient anxiety.",
    approach: "As the Lead Designer, I initiated the process with a deep dive into user analytics and stakeholder interviews. We conducted workshops with doctors and patients to align business goals with user needs.",
    approachSteps: [
      { number: "01", title: "Discovery", description: "Understanding the core problems through research and patient interviews." },
      { number: "02", title: "Ideation", description: "Wireframing and prototyping multiple solutions with a mobile-first mindset." }
    ],
    solution: "We delivered a robust solution that improved key metrics. The new interface streamlined workflows, reducing the average time-to-task by significant margins. Feedback from the users highlighted the improved clarity and aesthetic appeal of the new design system.",
    links: {
      web: "https://healthtrack-example.com",
      ios: "https://apps.apple.com/us/app/healthtrack",
      android: "https://play.google.com/store/apps/details?id=com.healthtrack"
    }
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