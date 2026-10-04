import { SchoolStat, SportItem, CurriculumItem, FacilityItem, FaqItem } from '../types';

export const SCHOOL_INFO = {
  name: "Tulas International School",
  shortName: "TIS Dehradun",
  tagline: "The Modern Gurukul",
  motto: "Where Traditional Values Meet Global Excellence",
  founded: "2012",
  trust: "Rishabh Educational Trust",
  affiliation: "CBSE Affiliated & Cambridge Pathway",
  phone: "+91-9837983791",
  landline: "0135-2699444 / 2699666",
  email: "info@tis.edu.in",
  admissionsEmail: "admissions@tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand, India",
  googleMapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  campusSize: "22+ Lush Green Acres",
  ratio: "1:8 Teacher to Student",
  boardType: "Co-Educational Residential & Day Boarding",
  classesOffered: "Class IV to Class XII (Ages 9 to 18)",
};

export const KEY_STATS: SchoolStat[] = [
  {
    id: 'rank',
    value: 1,
    suffix: '#',
    label: 'Rank #1 Boarding School',
    description: 'Top Co-Ed Boarding School in Uttarakhand & North India'
  },
  {
    id: 'campus',
    value: 22,
    suffix: '+ Acres',
    label: 'Lush Himalayan Campus',
    description: 'Pollution-free, scenic learning sanctuary in Dehradun foothills'
  },
  {
    id: 'sports',
    value: 16,
    suffix: '+ Sports',
    label: 'Olympic Sports Facilities',
    description: 'Horse riding, shooting range, archery, swimming & squash'
  },
  {
    id: 'placements',
    value: 100,
    suffix: '%',
    label: 'Global University Offers',
    description: 'Alumni placed in Oxford, Stanford, IITs, BITS, and NUS'
  },
  {
    id: 'ratio',
    value: 8,
    suffix: ':1',
    label: 'Student-Mentor Ratio',
    description: 'Unmatched individualized attention and pastoral mentoring'
  },
  {
    id: 'nationalities',
    value: 28,
    suffix: '+ States & Countries',
    label: 'Vibrant Global Community',
    description: 'Cultural diversity cultivating cosmopolitan leaders'
  }
];

export const GURUKUL_PILLARS = [
  {
    id: 'mind',
    title: 'Intellectual Rigor & STEM',
    description: 'Deep conceptual learning through experiential inquiry, AI & Robotics labs, and personalized academic roadmaps.',
    icon: 'Brain',
    badge: 'Cognitive Excellence',
    stat: '98.4% Top CBSE Average'
  },
  {
    id: 'character',
    title: 'Character & Ancient Values',
    description: 'Modern Gurukul ethos instilling humility, integrity, mindfulness meditation, yoga, and ecological respect.',
    icon: 'HeartHandshake',
    badge: 'Moral Foundation',
    stat: 'Daily Mentorship & Mindfulness'
  },
  {
    id: 'sports',
    title: 'Olympic Sports & Physicality',
    description: 'World-class sports infrastructure designed to build grit, discipline, teamwork, and athletic mastery.',
    icon: 'Trophy',
    badge: 'Athletic Mastery',
    stat: '16+ Certified Sports'
  },
  {
    id: 'care',
    title: '24/7 Pastoral Care & Well-being',
    description: 'Safe, gated campus with dedicated housemasters, organic culinary nutrition, and around-the-clock infirmary.',
    icon: 'ShieldCheck',
    badge: 'Home Away From Home',
    stat: '100% Secure Residential Care'
  }
];

export const CURRICULA: CurriculumItem[] = [
  {
    id: 'middle',
    title: 'Middle School Program',
    subtitle: 'Foundation of Discovery & Character',
    board: 'Class IV to VIII',
    grades: 'Grades 4 - 8',
    features: [
      'Activity-based STEAM learning',
      'Linguistic mastery (English, Hindi, French, Sanskrit)',
      'Compulsory athletics & fine arts immersion',
      'Foundational coding & robotics workshops'
    ],
    color: 'from-amber-500/20 to-tis-gold/10',
    iconName: 'Sparkles'
  },
  {
    id: 'secondary',
    title: 'Secondary CBSE Schooling',
    subtitle: 'Academic Brilliance & National Benchmarks',
    board: 'Class IX & X (CBSE Board)',
    grades: 'Grades 9 - 10',
    features: [
      'NCERT enriched curriculum with experiential labs',
      'National Olympiad, NTSE & Kishore Vaigyanik training',
      'Leadership conclaves & Model United Nations (MUN)',
      'Integrated personality & public speaking training'
    ],
    color: 'from-tis-crimson/20 to-red-500/10',
    iconName: 'Award'
  },
  {
    id: 'senior-science',
    title: 'Senior Secondary — Science & Tech',
    subtitle: 'JEE / NEET / SAT Focused Career Launchpad',
    board: 'Class XI & XII (PCM / PCB)',
    grades: 'Grades 11 - 12',
    features: [
      'Advanced Physics, Chemistry, Biology & CS Labs',
      'In-house preparation for JEE Advanced & NEET',
      'International SAT & AP Exam coaching guidance',
      'University application mentorship for top Ivy/US/UK colleges'
    ],
    color: 'from-blue-600/20 to-cyan-500/10',
    iconName: 'Atom'
  },
  {
    id: 'senior-commerce-arts',
    title: 'Senior Secondary — Commerce & Humanities',
    subtitle: 'Leadership, Economics & Creative Vision',
    board: 'Class XI & XII (Commerce / Humanities)',
    grades: 'Grades 11 - 12',
    features: [
      'Business studies, Economics, Entrepreneurship Incubator',
      'Design, Psychology, Legal Studies & Political Science',
      'Internship opportunities with industry leaders',
      'Portfolio development for global liberal arts & B-schools'
    ],
    color: 'from-emerald-600/20 to-teal-500/10',
    iconName: 'TrendingUp'
  }
];

export const SPORTS_LIST: SportItem[] = [
  {
    id: 'horse-riding',
    name: 'Equestrian & Horse Riding',
    category: 'Olympic',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    description: 'Dedicated riding arena with trained thoroughbred horses and certified equestrian instructors.',
    highlights: ['Professional dressage & showjumping', 'Weekly equestrian badges', 'Safety gear & trained groomers']
  },
  {
    id: 'shooting',
    name: '10m Air Rifle Shooting Range',
    category: 'Olympic',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1200&auto=format&fit=crop',
    description: 'State-of-the-art indoor shooting range with electronic target systems for national competitions.',
    highlights: ['ISSF standard 10m range', 'Precision focus & breathing coaching', 'State & national championship entries']
  },
  {
    id: 'swimming',
    name: 'All-Weather Swimming Complex',
    category: 'Olympic',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop',
    description: 'Half-Olympic size temperature-monitored swimming pool with certified lifeguards.',
    highlights: ['Stroke refinement programs', 'Water polo & aquatic fitness', 'Heated lanes for winter training']
  },
  {
    id: 'archery',
    name: 'Outdoor Archery Academy',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1511067007772-9d2907e8831b?q=80&w=1200&auto=format&fit=crop',
    description: 'Dedicated archery grounds developing patience, posture, and sharp hand-eye coordination.',
    highlights: ['Recurve and compound bow training', 'Tournament distance targets', 'Mental conditioning']
  },
  {
    id: 'squash-tennis',
    name: 'Squash & Synthetic Tennis Courts',
    category: 'Modern',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200&auto=format&fit=crop',
    description: 'Glass-back wooden squash courts and floodlit ITF-standard synthetic tennis arenas.',
    highlights: ['Evening floodlight play', 'ITF certified coaches', 'Annual Inter-school Trophy']
  },
  {
    id: 'football-cricket',
    name: 'FIFA-Standard Turf & Cricket Oval',
    category: 'Modern',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
    description: 'Full-sized lush grass football ground with floodlights and dedicated turf cricket nets.',
    highlights: ['BCCI certified net pitches', 'Tournaments with top boarding schools', 'Strength & conditioning gym']
  },
  {
    id: 'martial-arts',
    name: 'Taekwondo & Martial Arts Dojo',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Dedicated martial arts studio fostering self-defense, confidence, and black-belt progression.',
    highlights: ['World Taekwondo Federation syllabus', 'Belt grading sessions', 'Self-defense training']
  },
  {
    id: 'yoga-mindfulness',
    name: 'Yoga & Himalayan Meditation Pavilions',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    description: 'Open-air green pavilions overlooking the Himalayan foothills for morning Pranayama and mindfulness.',
    highlights: ['Daily morning sunrise sessions', 'Stress-relief meditation', 'Posture & holistic wellness']
  }
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Smart Tech-Enabled Classrooms',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Ergonomic, interactive digital smart-boards with high-speed campus fiber'
  },
  {
    id: 'fac-2',
    title: 'AI, Robotics & Tinkering Hub',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    caption: '3D printers, IoT kits, drone workshops, and coding stations'
  },
  {
    id: 'fac-3',
    title: 'Residential Houses & Dormitories',
    category: 'Boarding',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
    caption: 'Air-conditioned cozy rooms with personal study desks and house-parent supervision'
  },
  {
    id: 'fac-4',
    title: 'Multicuisine Organic Dining Hall',
    category: 'Boarding',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1200&auto=format&fit=crop',
    caption: 'Hygienic 4-meal daily menu planned by expert clinical pediatric nutritionists'
  },
  {
    id: 'fac-5',
    title: 'Olympic Swimming & Aquatics Arena',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop',
    caption: 'Heated all-weather pool with underwater analysis and certified coaches'
  },
  {
    id: 'fac-6',
    title: 'Amphitheater & Performing Arts Studio',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1200&auto=format&fit=crop',
    caption: 'Acoustic music suites, classical & western dance studios, and open-air theater'
  },
  {
    id: 'fac-7',
    title: '24/7 Wellness Center & Infirmary',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    caption: 'Full-time resident medical officer, nurses, and ambulance on standby'
  },
  {
    id: 'fac-8',
    title: '22-Acre Nature Walk & Organic Garden',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
    caption: 'Eco-conscious green sanctuary promoting outdoor learning and environmental stewardship'
  }
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Online Inquiry & Registration',
    desc: 'Fill out the digital registration form or connect with our admission counselors for preliminary details.',
    duration: '10 Minutes'
  },
  {
    step: '02',
    title: 'Campus Tour & Interaction',
    desc: 'Visit our scenic 22-acre Dehradun campus or schedule an immersive 360° virtual tour with faculty.',
    duration: 'Custom Date'
  },
  {
    step: '03',
    title: 'Student Aptitude & Parent Discussion',
    desc: 'An informal holistic assessment of the child’s interests, foundational aptitude, and passions.',
    duration: '1-2 Days'
  },
  {
    step: '04',
    title: 'Offer of Admission & Welcome',
    desc: 'Receive your official admission confirmation, dormitory allocation, and onboarding kit.',
    duration: 'Immediate'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'What is the admission procedure for residential students?',
    answer: 'Admissions are open for Class IV through Class XII. The process involves submitting an online inquiry, attending a friendly student-parent interaction (online or on-campus), and completing registration documents. We offer rolling admissions with primary intakes in April and mid-term admissions subject to seat availability.'
  },
  {
    id: 'faq-2',
    category: 'Boarding Life',
    question: 'How does TIS ensure the safety and emotional well-being of boarding students?',
    answer: 'Student safety is our highest priority. The campus is monitored 24/7 with CCTV and biometric security checkpoints. Each residential block is managed by resident Housemasters and Housemistresses who provide emotional care. We maintain a 1:8 student-to-mentor ratio ensuring every child receives individualized attention.'
  },
  {
    id: 'faq-3',
    category: 'Academics',
    question: 'What curriculum does Tulas International School follow?',
    answer: 'TIS is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, integrated with Cambridge international pedagogical benchmarks. In Senior Secondary (Class XI & XII), we offer Science (PCM/PCB), Commerce, and Humanities streams with specialized coaching for JEE, NEET, CLAT, SAT, and CUET.'
  },
  {
    id: 'faq-4',
    category: 'Boarding Life',
    question: 'What are the dining arrangements and dietary hygiene standards?',
    answer: 'Our state-of-the-art dining hall serves pure, wholesome, nutritious meals 4 times a day (Breakfast, Lunch, Evening Snacks, and Dinner). Menus are curated by pediatric nutritionists featuring North Indian, South Indian, Continental, and Oriental cuisines prepared under strict FSSAI hygiene guidelines.'
  },
  {
    id: 'faq-5',
    category: 'Sports & Activities',
    question: 'Which sports are available and are there professional coaches?',
    answer: 'TIS features 16+ sports including Horse Riding, 10m Indoor Shooting, Swimming, Archery, Squash, Lawn Tennis, Football, Cricket, Badminton, Taekwondo, and Skating. All disciplines are helmed by NIS-certified national and state-level coaches.'
  },
  {
    id: 'faq-6',
    category: 'Fees & Scholarships',
    question: 'Are there merit scholarships available for deserving students?',
    answer: 'Yes! TIS offers generous merit and talent scholarships for students with outstanding academic records, national-level sports achievements, and arts/cultural excellence. Please contact our admissions team for scholarship criteria and fee structure breakdown.'
  }
];
