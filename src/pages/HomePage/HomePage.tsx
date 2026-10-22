import { Toaster } from 'sonner';
import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/pages/HomePage/sections/HeroSection';
import AboutSection from '@/pages/HomePage/sections/AboutSection';
import WorksSection from '@/pages/HomePage/sections/WorksSection';
import StrengthsSection from '@/pages/HomePage/sections/StrengthsSection';
import ContactSection from '@/pages/HomePage/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="film-grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <StrengthsSection />
        <ContactSection />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
