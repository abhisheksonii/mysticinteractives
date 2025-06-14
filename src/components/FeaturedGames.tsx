
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';

const FeaturedGames = () => {
  return (
    <section id="games" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background with mythological image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/f7b9a879-011f-46a5-ae04-68446e4b0689.png"
          alt="Sage Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6">
            Our Games
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            At Mystic Interactives we are not just developing games but creating experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Featured Games - Single Kalki Card */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Kalki Card */}
          <Card className="backdrop-blur-sm bg-slate-800/60 border border-slate-600/30 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-700/20 to-slate-800/20 flex items-center justify-center p-8">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/e31ca659-1fa1-4598-af24-d9c23d5e066f.png" 
                  alt="Kalki - The Beginning"
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
