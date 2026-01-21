export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  link?: string;
  figma?: string;
  behance?: string;
  challenge: string;
  solution: string;
}

export interface JobProject {
  id: string;
  title: string;
  company: string;
  role: string;
  year: string;
  image: string;
  description: string;
  overview: string;
  deliverables: string[];
  challenge: string;
  approach: string;
  approachSteps: { number: string; title: string; description: string }[];
  solution: string;
  links?: {
    web?: string;
    ios?: string;
    android?: string;
    figma?: string;
    behance?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export type Theme = 'light' | 'dark';