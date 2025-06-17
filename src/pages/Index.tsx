
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CourseLevels from '@/components/CourseLevels';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CourseLevels />
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
