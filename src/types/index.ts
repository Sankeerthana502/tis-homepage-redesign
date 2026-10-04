export interface SchoolStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface SportItem {
  id: string;
  name: string;
  category: 'Olympic' | 'Modern' | 'Traditional' | 'Adventure';
  image: string;
  description: string;
  highlights: string[];
}

export interface CurriculumItem {
  id: string;
  title: string;
  subtitle: string;
  board: string;
  grades: string;
  features: string[];
  color: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Academics' | 'Sports' | 'Boarding' | 'Arts' | 'Campus';
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  batch?: string;
  rating: number;
  highlight: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    description?: string;
    href: string;
  }[];
}
