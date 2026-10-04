import { useState } from 'react';

// Standout Animated Features
import { CustomCursor } from './components/animation/CustomCursor';
import { ScrollProgress } from './components/animation/ScrollProgress';

// Layout
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingQuickActions } from './components/layout/FloatingQuickActions';

// Modals
import { EnquireModal } from './components/modals/EnquireModal';
import { VirtualTourModal } from './components/modals/VirtualTourModal';
import { ProspectusModal } from './components/modals/ProspectusModal';

// High-Converting Sections
import { HeroSection } from './components/sections/HeroSection';
import { QuickInquiryBar } from './components/sections/QuickInquiryBar';
import { KeyStatsSection } from './components/sections/KeyStatsSection';
import { ModernGurukulSection } from './components/sections/ModernGurukulSection';
import { AcademicsSection } from './components/sections/AcademicsSection';
import { SportsFoundationSection } from './components/sections/SportsFoundationSection';
import { BoardingLifeSection } from './components/sections/BoardingLifeSection';
import { VirtualCampusTourSection } from './components/sections/VirtualCampusTourSection';
import { AdmissionJourneySection } from './components/sections/AdmissionJourneySection';
import { FeeCalculatorSection } from './components/sections/FeeCalculatorSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { CtaBannerSection } from './components/sections/CtaBannerSection';

export function App() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);

  const handleOpenEnquiry = () => setIsEnquireModalOpen(true);
  const handleOpenVirtualTour = () => setIsVirtualTourOpen(true);
  const handleOpenProspectus = () => setIsProspectusOpen(true);

  return (
    <div className="min-h-screen flex flex-col relative bg-stone-50 text-stone-900 dark:bg-[#0c1015] dark:text-stone-100 transition-colors duration-300">
      
      {/* Standout Feature A: Custom Cursor */}
      <CustomCursor />

      {/* Standout Feature D: Top Fixed Scroll Progress */}
      <ScrollProgress />

      {/* Announcement Bar */}
      <TopAnnouncementBar
        onOpenVirtualTour={handleOpenVirtualTour}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Sticky Main Navbar */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenVirtualTour={handleOpenVirtualTour}
        onOpenProspectus={handleOpenProspectus}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <HeroSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenVirtualTour={handleOpenVirtualTour}
          onOpenProspectus={handleOpenProspectus}
        />

        {/* Quick Inquiry Sticky Lead Funnel */}
        <QuickInquiryBar onOpenEnquiry={handleOpenEnquiry} />

        {/* Key Stats Counter Grid */}
        <KeyStatsSection />

        {/* The Modern Gurukul Ethos & 4 Pillars */}
        <ModernGurukulSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenProspectus={handleOpenProspectus}
        />

        {/* Academic Curriculums (CBSE / Cambridge) */}
        <AcademicsSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenProspectus={handleOpenProspectus}
        />

        {/* 16+ Sports Foundation Showcase */}
        <SportsFoundationSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Boarding Life & Pastoral Care */}
        <BoardingLifeSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Interactive Virtual Campus Tour & 360 Gallery */}
        <VirtualCampusTourSection onOpenVirtualTour={handleOpenVirtualTour} />

        {/* Interactive Fee Estimator & Grade Calculator */}
        <FeeCalculatorSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenProspectus={handleOpenProspectus}
        />

        {/* 4-Step Admission Roadmap */}
        <AdmissionJourneySection onOpenEnquiry={handleOpenEnquiry} />

        {/* Parent, Student & Alumni Testimonials */}
        <TestimonialsSection />

        {/* Interactive FAQ Accordion */}
        <FaqSection onOpenEnquiry={handleOpenEnquiry} />

        {/* High-Converting CTA Banner */}
        <CtaBannerSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenVirtualTour={handleOpenVirtualTour}
          onOpenProspectus={handleOpenProspectus}
        />

      </main>

      {/* Rich Footer */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onOpenProspectus={handleOpenProspectus}
      />

      {/* Floating Action Buttons (WhatsApp, Quick Enquire, Scroll-to-Top) */}
      <FloatingQuickActions
        onOpenEnquiry={handleOpenEnquiry}
        onOpenProspectus={handleOpenProspectus}
      />

      {/* Interactive Modals */}
      <EnquireModal
        isOpen={isEnquireModalOpen}
        onClose={() => setIsEnquireModalOpen(false)}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
      />

      <ProspectusModal
        isOpen={isProspectusOpen}
        onClose={() => setIsProspectusOpen(false)}
      />

    </div>
  );
}

export default App;
