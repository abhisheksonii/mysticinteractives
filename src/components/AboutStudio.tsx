
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Heart, Globe, Users, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutStudio = () => {
  const innovations = [
    {
      title: "Myth-AI NPC Dialogue System",
      description: "Wisdom isn't scripted it's simulated. Our NPCs use LLMs trained on Indian philosophical texts. Players can ask spiritual or tactical questions and receive dynamic responses based on karma and vow paths."
    },
    {
      title: "Adaptive Combat AI",
      description: "Bosses adapt to repeated strategies. Beat them once? Try that again and they'll remember your ways."
    },
    {
      title: "Sacred Library Integration",
      description: "A highly optimised, immersive and free in-game sacred text library lets you explore Vedas, Puranas, and Upanishads used both for learning and gameplay referencing."
    },
    {
      title: "Living Indian Themes",
      description: "At Mystic Interactives ancient culture doesn't decorate our world, it defines the narrative. The classical theme isn't limited to clothing, UI, or music but integrated into every layer of gameplay be it combat mechanics, league system, and new concepts like vow system."
    }
  ];

  const achievements = [
    "Honorable mention in Unreal Engine Sizzle Reel (Unreal Engine is World's leading game distributor & game engine)",
    "Toycathon Grand Finalist organised by Govt. of India",
    "Finalist of business plan event at IIT Roorkee & NIT Bhopal",
    "Featured in Udgam'25 the Annual Entrepreneurship Summit of IIT Guwahati",
    "Featured twice in regional newspapers",
    "Shortlisted for ANRF-INAE Conclave 2025 on Aatmanirbhar Tech at NIAMT, Ranchi",
    "Shortlisted by STPI Hyderabad (IMAGE CoE) & OctaNE OCP 6.0"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <div className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 rounded-3xl p-8 shadow-xl shadow-amber-500/10">
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Mystic Interactives is Established to Enable Audience Across The Globe To Interact And Explore Ancient Indian Heritage Via Immersive Experiences And Create a Sense of "Info-Tainment". With First-of-its-Kind Concepts & Groundbreaking Strategies, Mystic Interactives is all Set to Become India's First Gaming & eSports Giant.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              With support of Incubation Cell of Sarala Birla University, Ranchi, we are able to bring this vision to reality.
            </p>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-amber-400 mb-8 text-center">
            Our Featured Innovations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 group">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-amber-400 mb-3">
                    {innovation.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {innovation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-amber-400 mb-8 text-center">
            Achievements
          </h3>
          <div className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 rounded-3xl p-8 shadow-xl shadow-amber-500/10">
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-amber-400 mb-8 text-center">
            Founder
          </h3>
          <div className="backdrop-blur-sm bg-slate-800/40 border border-amber-500/20 rounded-3xl p-8 shadow-xl shadow-amber-500/10 text-center">
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              With over 5 years of working experience with international clients, Ayush has been recognized with multiple national awards from leading institutions such as IITs, NITs, and the Government of India. He brings a dynamic skillset & connections.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              onClick={() => window.open('https://www.linkedin.com/in/ayush-pandey-14a9961b8', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;
