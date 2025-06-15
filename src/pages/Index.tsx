
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutStudio from '@/components/AboutStudio';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-gradient text-slate-100">
      <Navigation />
      <HeroSection />
      <div className="space-y-8">
        <AboutStudio />
        <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-display font-bold text-blue-400 mb-4">Contact Us</h2>
          <p className="text-lg text-slate-300 mb-4 font-geometric">Any queries or want to work with us?</p>
          <p className="text-base text-slate-400 mb-6 font-geometric">Don't hesitate to drop us a hii on</p>
          <div className="grid gap-4 max-w-lg mx-auto">
            <a 
              href="mailto:workwithayush.p@gmail.com" 
              className="group flex items-center justify-center space-x-3 p-3 rounded-lg hover:bg-blue-900/20 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-base text-blue-400 group-hover:text-blue-300 transition-colors font-geometric">
                workwithayush.p@gmail.com
              </span>
            </a>
            <a 
              href="mailto:info@mystic.co.in" 
              className="group flex items-center justify-center space-x-3 p-3 rounded-lg hover:bg-blue-900/20 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-base text-blue-400 group-hover:text-blue-300 transition-colors font-geometric">
                info@mystic.co.in
              </span>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
