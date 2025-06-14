
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950/30 to-cosmic-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to embark on a mythological gaming journey? Let's bring ancient legends to life together.
          </p>
          <div className="w-24 h-1 bg-mythic-gold mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-effect mythic-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-mythic-gold mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-700 text-slate-100 focus:border-mythic-gold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-700 text-slate-100 focus:border-mythic-gold"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-800/50 border-slate-700 text-slate-100 focus:border-mythic-gold"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-slate-800/50 border-slate-700 text-slate-100 focus:border-mythic-gold resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-bronze-gradient hover:scale-105 transition-all duration-300 text-cosmic-950 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-effect mythic-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-mythic-gold mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-bronze-gradient rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cosmic-950" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">Email</p>
                      <p className="text-slate-400">hello@mysticinteractives.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-bronze-gradient rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cosmic-950" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">Phone</p>
                      <p className="text-slate-400">+91 XXX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-bronze-gradient rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-cosmic-950" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">Location</p>
                      <p className="text-slate-400">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-effect mythic-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-mythic-gold mb-6">
                  Follow Our Journey
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center space-x-3 p-4 glass-effect rounded-xl hover:bg-mythic-gold/10 transition-all duration-300 group"
                    >
                      <social.icon className="w-6 h-6 text-mythic-gold group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-slate-300 font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-slate-400 text-sm">
                    @mystic_interactives
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="glass-effect mythic-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-display font-bold text-mythic-gold mb-4">
                  Join Our Community
                </h3>
                <p className="text-slate-400 mb-6">
                  Stay updated with our latest games, behind-the-scenes content, and mythological insights.
                </p>
                <Button className="bg-bronze-gradient hover:scale-105 transition-all duration-300 text-cosmic-950 font-semibold">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
