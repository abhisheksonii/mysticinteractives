
const Footer = () => {
  return (
    <footer className="bg-cosmic-950 border-t border-mythic-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-bronze-gradient rounded-lg flex items-center justify-center">
                <div className="text-cosmic-950 font-bold text-lg">MI</div>
              </div>
              <div>
                <div className="text-mythic-gold font-display font-bold text-xl">Mystic</div>
                <div className="text-xs text-slate-400 -mt-1">INTERACTIVES</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Pioneering mythology-based gaming experiences that bridge ancient Indian heritage with modern interactive entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-mythic-gold font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-mythic-gold transition-colors">Home</a></li>
              <li><a href="#games" className="text-slate-400 hover:text-mythic-gold transition-colors">Games</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-mythic-gold transition-colors">About</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-mythic-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-mythic-gold font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-mythic-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-mythic-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-mythic-gold transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Mystic Interactives. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
