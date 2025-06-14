
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutStudio from '@/components/AboutStudio';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-gradient text-slate-100">
      <Navigation />
      <HeroSection />
      <AboutStudio />
      <Footer />
    </div>
  );
};

export default Index;
