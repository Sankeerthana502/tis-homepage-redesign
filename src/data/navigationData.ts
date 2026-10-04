import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'About TIS',
    href: '#about',
    children: [
      { label: 'The Modern Gurukul Ethos', href: '#about', description: 'Values, heritage and future-ready mission' },
      { label: 'Himalayan Campus & Infrastructure', href: '#campus', description: '22+ acre pollution-free environment' },
      { label: 'Founder & Leadership Vision', href: '#about', description: 'Pioneered by Rishabh Educational Trust' },
    ]
  },
  {
    label: 'Academics',
    href: '#academics',
    children: [
      { label: 'Middle School (Class IV-VIII)', href: '#academics', description: 'Foundations of inquiry & creativity' },
      { label: 'Secondary (Class IX-X)', href: '#academics', description: 'CBSE national board excellence' },
      { label: 'Senior Secondary (Class XI-XII)', href: '#academics', description: 'Science, Commerce & Humanities' },
      { label: 'STEM & Robotics Innovation', href: '#academics', description: 'Hands-on AI, IoT & 3D prototyping' },
    ]
  },
  {
    label: 'Boarding Life',
    href: '#boarding',
    children: [
      { label: 'Pastoral Care & Mentorship', href: '#boarding', description: '1:8 ratio with resident houseparents' },
      { label: 'Nutritious Organic Dining', href: '#boarding', description: '4 daily chef-curated balanced meals' },
      { label: 'Health & 24/7 Infirmary', href: '#boarding', description: 'Resident doctor & emergency care' },
    ]
  },
  {
    label: 'Sports & Arts',
    href: '#sports',
    children: [
      { label: '16+ Olympic Disciplines', href: '#sports', description: 'Equestrian, Shooting, Archery & Squash' },
      { label: 'Performing & Visual Arts', href: '#campus', description: 'Music studio, Dance, and Amphitheater' },
      { label: 'Clubs & Model UN', href: '#academics', description: 'Leadership, Debating & Astronomy clubs' },
    ]
  },
  {
    label: 'Virtual Tour',
    href: '#campus',
    badge: '360°'
  },
  {
    label: 'Fee Calculator',
    href: '#fee-estimator'
  },
  {
    label: 'Admissions',
    href: '#admissions',
    children: [
      { label: 'Admission Roadmap 2025-26', href: '#admissions', description: 'Step-by-step registration process' },
      { label: 'Fee Structure & Scholarships', href: '#fee-estimator', description: 'Transparent fee schedule & merit aid' },
      { label: 'Book a Campus Visit', href: '#inquire', description: 'Experience the Himalayan sanctuary' },
    ]
  }
];
