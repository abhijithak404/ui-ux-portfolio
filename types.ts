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
  challenge: string;
  solution: string;
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