import { NavItem, Project, Skill, Experience, Certification, ContactInfo, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    title: 'Jeff Construction Mobile App',
    description: 'A comprehensive mobile application for construction management, allowing real-time project tracking and resource allocation.',
    technologies: ['React Native', 'Node.js', 'Firebase'],
    imageUrl: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
  },
  {
    title: 'Aitstax.com',
    description: 'An AI-powered platform for data analysis and visualization, helping businesses make data-driven decisions.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
  },
  {
    title: 'Teena Mobile App',
    description: 'A social networking app for teenagers with enhanced privacy features and parental controls.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
  },
  {
    title: 'TopPlaced.com',
    description: 'A job recruitment platform connecting talented professionals with top companies around the world.',
    technologies: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  }
];

export const skills: Skill[] = [
  { name: 'HTML', level: 90, category: 'language' },
  { name: 'CSS', level: 70, category: 'language' },
  { name: 'JavaScript', level: 75, category: 'language' },
  // { name: 'TypeScript', level: 85, category: 'language' },
  { name: 'ReactJS', level: 78, category: 'framework' },
  { name: 'React Native', level: 75, category: 'framework' },
  { name: 'Node.js', level: 70, category: 'framework' },
  { name: 'Express', level: 75, category: 'framework' },
  { name: 'MongoDB', level: 75, category: 'framework' },
  { name: 'Git', level: 75, category: 'tool' },
  // { name: 'Docker', level: 70, category: 'tool' },
  { name: 'Firebase', level: 70, category: 'tool' },
];

export const experience: Experience = {
  role: 'Full Stack Web and App Developer',
  company: 'Leavecode Technologies Private Limited',
  duration: 'May 1, 2024 – Present',
  responsibilities: [
    'Developed and maintained full-stack applications using ReactJS, React Native, and Node.js',
    'Collaborated with cross-functional teams to deliver product features on time',
    'Integrated third-party APIs and Firebase for real-time functionality',
    'Managed Git-based workflows and Dockerized app environments',
    'Optimized application performance and maintained code quality standards',
    'Implemented responsive designs for cross-platform compatibility',
  ],
};

export const certifications: Certification[] = [
  {
    title: 'MERN Stack Development Internship',
    issuer: 'Leavecode Technologies',
    date: '2024',
  },
];

export const contactInfo: ContactInfo = {
  email: 'gd885973@gmail.com',
  phone: '6397484506',
  linkedin: 'https://www.linkedin.com/in/gagan-deep-7aa797264/',
  github: 'https://github.com/gagansodlan',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gagan-deep-7aa797264/',
    icon: 'Linkedin',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/gagansodlan',
    icon: 'Github',
  },
  {
    platform: 'Email',
    url: 'mailto:gd885973@gmail.com',
    icon: 'Mail',
  },
];