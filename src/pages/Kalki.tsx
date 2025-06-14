
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Download, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Kalki = () => {
  const features = [
    {
      title: "MARVELOUS GRAPHICS",
      description: "All of the game's aesthetics have been developed with meticulous attention to detail in order to make the gaming sensation as realistic as possible."
    },
    {
      title: "KNOWLEDGE OF ANCIENT SCRIPTURES",
      description: "The game provides knowledge of texts like Upanishad, Epic, Puran and Geeta using different in-game sources including cinematic, conversations, and loading screens."
    },
    {
      title: "UNIQUE BATTLE MECHANISM",
      description: "With heavenly gear, legendary arts of illusions and weaponry. The game features breathtaking vfx for combat system, which is the first of its type in a videogame"
    },
    {
      title: "DEDICATED LIBRARY",
      description: "Featuring in-game library with a number of ancient manuscripts available for free to enlighten players with old knowledge and eliminate myths."
    },
    {
      title: "STRATEGIC WARFARE",
      description: "Along with classic weapons like the sword, axe, bow and arrow, and spear, the game has a variety of cosmic astra, each with its own mechanism."
    },
    {
      title: "IT'S ALL ABOUT CHOICES",
      description: "Player can pick between many options at different stages of the game. These decisions can have an impact on the player's abilities and, in certain cases, the core scenario."
    }
  ];

  const awards = [
    "Featured in Unreal Engine Sizzle Reel",
    "Finalist Youth Conclave 2023 by INAE",
    "Grand Finalist Toycathon 2021",
    "Winner AXIS Tech Fest of NIT, Nagpur",
    "Selected Image CoE 4 Cohort"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/kalki.png"
            alt="Kalki - The Rising Story"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/games">
            <Button 
              variant="outline"
              className="absolute top-4 left-4 border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Games
            </Button>
          </Link>

          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-display font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6">
              KALKI
            </h1>
            <p className="text-3xl md:text-4xl text-amber-400 font-light tracking-[0.2em] mb-8">
              THE RISING STORY
            </p>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-12">
              As Demon Kali's influence becomes stronger, it's time to bring the legendary immortals out of their trance. Join Kalki, the manifestation of God of Preservance in his epic quest to find the immortals and save all three realms from Kali's wrath.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg shadow-xl"
                onClick={() => window.open('https://drive.google.com/file/d/19Jzw32Z2xo_PS9RJbJPCrOmQ3LuQnV4E/view', '_blank')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Trailer
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 text-slate-900 font-semibold px-8 py-4 text-lg shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Game
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Images Gallery */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-16">
            Game Gallery
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 cursor-pointer"
              onClick={() => window.open('/lovable-uploads/kalki-achievement.png', '_blank')}
            >
              <img 
                src="/lovable-uploads/kalki-achievement.png"
                alt="Kalki Game Screenshot 2"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
            
            <Card 
              className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 cursor-pointer"
              onClick={() => window.open('/lovable-uploads/mi.png', '_blank')}
            >
              <img 
                src="/lovable-uploads/mi.png"
                alt="Kalki Game Screenshot 3"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-16">
            Game Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 p-6 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-16">
            Awards & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 p-6 text-center hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <p className="text-slate-200 font-medium">{award}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-8">
            Coming Soon For
          </h2>
          
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-6xl">🎮</div>
            <div className="text-6xl">💻</div>
            <div className="text-6xl">📱</div>
            <div className="text-6xl">🍎</div>
          </div>
          
          <p className="text-xl text-slate-300 mb-8">
            Xbox • Windows • Android • iOS
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 text-slate-900 font-semibold px-8 py-4 text-lg"
          >
            Get Notified
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kalki;
