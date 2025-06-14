
import { Button } from '@/components/ui/button';
import { Play, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Mythological Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/logo.png"
          alt="Kalki Background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/50"></div>
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-amber-500/20 rotate-45 floating-element"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-amber-500/10 rounded-full floating-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-orange-500/15 rounded-lg floating-element" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Tagline */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-geometric font-light text-slate-100 mb-6 leading-relaxed">
              Bridging Ancient <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-medium">Mythology</span><br />
              with Modern <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-medium">Gaming</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              India's pioneering mythology-based gaming studio creating immersive 
              info-tainment experiences that bring ancient wisdom to life through cutting-edge technology.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 text-slate-900 font-semibold px-8 py-4 text-lg shadow-xl shadow-amber-500/20"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Our Games
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
            >
              Watch Studio Reel
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
