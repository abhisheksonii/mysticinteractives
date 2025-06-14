
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';
import Footer from '@/components/Footer';

const Games = () => {
  return (
    <div className="min-h-screen bg-cosmic-gradient text-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Mythological Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/kalki-achievement.png"
            alt="Games Background"
            className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6">
              Our Games
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Immersive mythology-based gaming experiences that bring ancient wisdom to life through cutting-edge technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Kalki Card */}
            <Card className="backdrop-blur-sm bg-slate-800/60 border border-slate-600/30 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group">
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-700/20 to-slate-800/20 flex items-center justify-center p-8">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/kalki.png" 
                    alt="Kalki - The Rising Story"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-lg"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    Available Now
                  </span>
                </div>
              </div>

              <CardContent className="p-8 bg-slate-800/80">
                <h3 className="text-4xl font-display font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
                  KALKI - THE BEGINNING
                </h3>
                <p className="text-slate-200 leading-relaxed mb-6">
                  As Demon Kali's influence becomes stronger, it's time to bring the legendary immortals out of their trance. Join Kalki in his epic quest to save all three realms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => window.location.href = '/games/kalki'}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 text-slate-900 font-semibold"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Trailer
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mahabharat Card */}
            <Card className="backdrop-blur-sm bg-slate-800/60 border border-slate-600/30 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group">
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-700/20 to-slate-800/20 flex items-center justify-center p-8">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/mahabharat.png" 
                    alt="Mahabharat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-lg"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900">
                    Coming Soon!
                  </span>
                </div>
              </div>

              <CardContent className="p-8 bg-slate-800/80">
                <h3 className="text-4xl font-display font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
                  MAHABHARAT
                </h3>
                <p className="text-slate-200 leading-relaxed mb-6">
                  The time has come, armies will gather, extraordinary war will take place, with extraordinary warriors. Featuring the epic Mahabharat in various game modes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    disabled
                    className="bg-gradient-to-r from-slate-500 to-slate-600 text-slate-300 cursor-not-allowed"
                  >
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Games;
