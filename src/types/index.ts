export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool';
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Certification {
  title: string;
  issuer?: string;
  date?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}