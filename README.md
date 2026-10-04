# Tulas International School (TIS) - Homepage Redesign

A modern, animated, high-converting redesign of the **Tulas International School (TIS)** homepage ([tis.edu.in](https://tis.edu.in/)) focusing on high conversion, fluid animations, mobile responsiveness, and brand identity preservation.

---

## 🚀 Live Demo & Repository

- **Live URL:** [https://tis-homepage-redesign.vercel.app/](https://tis-homepage-redesign.vercel.app/) *(or your deployed Vercel/Netlify URL)*
- **GitHub Repository:** [https://github.com/Sankeerthana502/tis-homepage-redesign](https://github.com/Sankeerthana502/tis-homepage-redesign)

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite (TypeScript)
- **Styling:** Tailwind CSS + PostCSS + CSS Variables
- **Animations:** Framer Motion (Spring physics, Staggered Viewport Reveals)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas-Confetti
- **Deployment:** Vercel / Netlify / GitHub Pages

---

## ✨ Standout Features Implemented (All 4 Included)

### 1. **Custom Interactive Cursor (`CustomCursor.tsx`)**
- Spring-driven trailing ring and center pinpoint dot utilizing Framer Motion springs (`damping: 28, stiffness: 350`) to eliminate layout thrashing and maintain constant 60 FPS.
- Interactive hover expansion, color shifting, and blend mode adaptation when hovering over links, buttons, and interactive cards.
- Automatically disabled on touch & mobile screens via `@media (pointer: coarse)` and touch listeners.

### 2. **Scroll-Triggered Viewport Reveals (`ScrollReveal.tsx` & `StaggerContainer.tsx`)**
- Responsive staggered reveal orchestration using Framer Motion’s `whileInView` and `viewport={{ once: true, margin: '-50px' }}`.
- Refined ease-out cubic curves with animation durations between `0.4s` and `0.6s` to deliver a premium feel without interrupting scroll pace.

### 3. **Animated Dark / Light Theme Switcher (`ThemeToggle.tsx` & `useTheme.ts`)**
- Smooth theme toggle with rotation and scale transitions between Sun and Moon states.
- Persisted in `localStorage` with initial system preference fallback (`prefers-color-scheme`).
- High-contrast color palette meticulously designed for both light mode and dark obsidian mode (`#0c1015`).

### 4. **Fixed Spring Scroll Progress Bar (`ScrollProgress.tsx`)**
- Top-anchored reading depth indicator driven by `useScroll()` and `useSpring()`.
- Vibrant gradient styling (`#B90124` Crimson → `#C09D59` Gold → `#60BAB1` Teal) with a subtle ambient glow.

---

## 🏛️ High-Converting Sections Built

1. **Top Announcement & Helpline Bar:** Admissions 2025-26 notification, helpline phone, direct email, virtual tour shortcut, and quick inquiry trigger.
2. **Dynamic Glassmorphism Navbar:** Brand crest, multi-level dropdowns, prospectus download, mobile navigation drawer, and theme switch.
3. **Hero Section:** Value proposition *"Where Gurukul Values Meet Modern Global Excellence"*, 4 floating trust pills, video reel trigger, and conversion CTAs.
4. **Instant 1-Click Inquiry Funnel:** Sticky lead capture with Parent Name, Phone, Grade (Class IV-XII), and State selector with confetti celebration.
5. **Key Statistics Counter Grid:** Animated cubic counters highlighting Rank #1 in Uttarakhand, 22+ Acres, 100% Placements, and 1:8 Student-Teacher Ratio.
6. **The Modern Gurukul Ethos:** Founded in 2012 by Rishabh Educational Trust, showcasing the 4 pillars of Intellectual Rigor, Moral Character, Olympic Athletics, and Pastoral Care.
7. **Academic Curricula:** Interactive tabs for Middle School (Class IV-VIII), Secondary CBSE (IX-X), Senior Secondary Science (PCM/PCB), and Commerce & Humanities.
8. **16+ Sports Foundation:** Retaining TIS signature ethos *"Sports? It’s not just a facility. At Tulas it’s the foundation!"* with filterable categories (Olympic, Modern, Traditional) and interactive thumbnail switcher.
9. **Boarding Life & Pastoral Care:** Dormitory houses, 4-meal organic nutrition dining, 24/7 infirmary & doctor, and gated biometric security.
10. **Interactive Virtual Campus Tour:** Filterable 360° campus gallery and modal viewer.
11. **Transparent Fee Calculator:** Interactive grade tier selector (IV-V, VI-VIII, IX-X, XI-XII) with full cost breakdown.
12. **Parent, Student & Alumni Testimonials:** Verified reviews, star ratings, and university success statistics.
13. **Interactive FAQ Accordion:** Common questions regarding residential safety, CBSE curriculum, dining, and admission steps.
14. **Floating Quick Actions:** Sticky WhatsApp button, Quick Enquire pill, and smooth Scroll-To-Top button.
15. **Institutional Footer:** Full campus address at Dhoolkot, Selaqui, Dehradun, accreditation badges, and newsletter subscription.

---

## 📦 Getting Started Locally

### 1. Clone the repository:
```bash
git clone https://github.com/Sankeerthana502/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production:
```bash
npm run build
```

---

## 📂 Component Architecture Overview

```
src/
├── components/
│   ├── animation/
│   │   ├── CustomCursor.tsx       # Standout Feature A: Mouse follower
│   │   ├── ScrollProgress.tsx     # Standout Feature D: Top reading bar
│   │   ├── ScrollReveal.tsx       # Standout Feature B: Viewport reveals
│   │   └── CounterAnimation.tsx   # Eased numerical counters
│   ├── layout/
│   │   ├── TopAnnouncementBar.tsx # Admissions & contact strip
│   │   ├── Navbar.tsx             # Sticky glassmorphism header
│   │   ├── MobileNav.tsx          # Responsive mobile menu
│   │   ├── Footer.tsx             # Institutional footer
│   │   ├── FloatingQuickActions.tsx # WhatsApp, Enquire & Top scroll
│   │   └── ThemeToggle.tsx        # Standout Feature C: Theme switcher
│   ├── modals/
│   │   ├── EnquireModal.tsx       # Lead capture & mock OTP verification
│   │   ├── VirtualTourModal.tsx   # 360° interactive campus viewer
│   │   └── ProspectusModal.tsx    # PDF dossier download modal
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── QuickInquiryBar.tsx
│   │   ├── KeyStatsSection.tsx
│   │   ├── ModernGurukulSection.tsx
│   │   ├── AcademicsSection.tsx
│   │   ├── SportsFoundationSection.tsx
│   │   ├── BoardingLifeSection.tsx
│   │   ├── VirtualCampusTourSection.tsx
│   │   ├── AdmissionJourneySection.tsx
│   │   ├── FeeCalculatorSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── CtaBannerSection.tsx
│   └── ui/
│       ├── Button.tsx             # Reusable Framer Motion buttons
│       ├── Card.tsx               # Glass & elevated cards
│       ├── Badge.tsx              # Colored pill badges
│       ├── SectionHeading.tsx     # Standardized section headers
│       └── Accordion.tsx          # Smooth collapsible FAQ drawer
├── data/
│   ├── schoolData.ts              # Authentic TIS stats, sports & curricula
│   ├── navigationData.ts          # Nav links & dropdown menus
│   └── testimonialsData.ts        # Parent & alumni reviews
├── hooks/
│   ├── useTheme.ts                # Dark/light theme state & localStorage
│   ├── useScrollProgress.ts       # Scroll depth tracking
│   └── useMousePosition.ts        # Pointer coordinates & hover detection
├── styles/
│   └── globals.css                # Custom utilities, animations & glass effects
└── types/
    └── index.ts                   # Strict TypeScript definitions
```

---

## 🎨 Brand Identity Retained

- **Primary Colors:** TIS Crimson (`#B90124`), Warm Gold (`#C09D59`), Himalayan Teal (`#60BAB1` / `#007A83`), Dark Charcoal (`#0c1015`).
- **Core Ethos:** *"The Modern Gurukul"* — Founded in 2012 by Rishabh Educational Trust, Dehradun, Uttarakhand.
- **Official Copy & Heritage:** Retained from [tis.edu.in](https://tis.edu.in/).

---

## 🚀 Deployment to Vercel (1-Click)

1. Push this repository to your GitHub account (`Sankeerthana502`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import `tis-homepage-redesign`.
4. Click **Deploy**. Vercel will automatically build and assign a free live URL!
