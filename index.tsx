import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  Zap, 
  Menu, 
  X, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Users, 
  Globe 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-neon-cyan/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* LEFT: Success Squad Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="flex flex-col">
              <span className="font-orbitron text-xl font-bold tracking-wider text-white leading-none drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                SUCCESS
              </span>
              <span className="font-orbitron text-xl font-bold tracking-wider text-neon-cyan leading-none drop-shadow-[0_0_5px_#00f3ff]">
                SQUAD
              </span>
            </div>
          </div>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-rajdhani font-semibold text-gray-300 hover:text-neon-cyan hover:shadow-[0_0_10px_#00f3ff] px-3 py-2 rounded-md text-lg transition-all duration-300 uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Mobile Toggle (Logo removed) */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2"
              >
                {isOpen ? <X className="h-8 w-8 text-neon-pink" /> : <Menu className="h-8 w-8 text-neon-cyan" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-b border-neon-pink/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-rajdhani text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-xl font-medium text-center border-l-2 border-transparent hover:border-neon-pink transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-20 pointer-events-none"></div>
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 text-center px-4">
        <div className="animate-float mb-6 inline-block">
          <Rocket className="h-16 w-16 md:h-24 md:w-24 text-neon-cyan drop-shadow-[0_0_15px_#00f3ff]" />
        </div>
        <h2 className="font-rajdhani text-neon-pink text-xl md:text-3xl font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_5px_#ff00ff]">
          JSPM NTC Entrepreneurship Development Cell
        </h2>
        <h1 className="font-orbitron text-5xl md:text-8xl font-black text-white mb-6 tracking-wider neon-text-cyan">
          SUCCESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">SQUAD</span>
        </h1>
        <p className="font-rajdhani text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed border-l-4 border-neon-purple pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          Igniting the spark of innovation. Empowering the leaders of tomorrow. 
          Join the revolution where ideas transform into reality.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#about" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-neon-pink transition-all hover:bg-neon-pink/10">
            <span className="relative font-orbitron font-bold tracking-widest text-neon-pink group-hover:text-white transition-colors">LEARN MORE</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-16">
    <h3 className="font-rajdhani text-neon-green font-bold tracking-widest text-xl uppercase mb-2">{subtitle}</h3>
    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white relative inline-block">
      {title}
      <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
    </h2>
  </div>
);

const VMO = () => {
  const cards = [
    {
      title: "VISION",
      icon: <Lightbulb className="w-12 h-12 text-neon-yellow" />,
      content: "To create an ecosystem that fosters innovation and entrepreneurship among students, transforming them into job creators rather than job seekers.",
      color: "border-neon-yellow",
      shadow: "hover:shadow-[0_0_20px_#faff00]"
    },
    {
      title: "MISSION",
      icon: <Target className="w-12 h-12 text-neon-cyan" />,
      content: "To provide a platform for conceptualization to commercialization of ideas by offering mentorship, resources, and industry exposure to aspiring student entrepreneurs.",
      color: "border-neon-cyan",
      shadow: "hover:shadow-[0_0_20px_#00f3ff]"
    },
    {
      title: "OBJECTIVE",
      icon: <Zap className="w-12 h-12 text-neon-pink" />,
      content: "Organize workshops, seminars, and hackathons. Facilitate industry-institute interaction. Build a strong network of investors and alumni entrepreneurs.",
      color: "border-neon-pink",
      shadow: "hover:shadow-[0_0_20px_#ff00ff]"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="OUR CORE" subtitle="Why We Exist" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div key={index} className={`glass-card p-8 rounded-xl border ${card.color} transition-all duration-500 transform hover:-translate-y-3 ${card.shadow} group`}>
              <div className="mb-6 p-4 bg-dark-800 rounded-full inline-block border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4 tracking-wide">{card.title}</h3>
              <p className="font-rajdhani text-gray-400 text-lg leading-relaxed text-justify">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-950 relative overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader title="WHO WE ARE" subtitle="About Success Squad" />
            <div className="font-rajdhani text-gray-300 text-lg space-y-6 text-justify">
              <p>
                <strong className="text-neon-cyan">Success Squad</strong> is the premier Entrepreneurship Development Cell of JSPM Narhe Technical Campus. We are a student-run organization dedicated to promoting the spirit of entrepreneurship among students.
              </p>
              <p>
                Founded with the belief that every student has the potential to change the world, we act as a bridge between innovative ideas and successful business ventures. Through our various initiatives, we strive to cultivate a startup culture within the campus.
              </p>
              <p>
                We collaborate with industry experts, angel investors, and successful alumni to provide guidance and support to our budding entrepreneurs.
              </p>
            </div>
          </div>
          
          <div className="relative group">
             {/* Neon glow container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-60 blur-xl rounded-lg group-hover:opacity-100 transition-all duration-700 animate-pulse-slow"></div>
            
            <div className="relative bg-dark-800 border-2 border-gray-800 rounded-xl p-1 overflow-hidden shadow-2xl">
               <div className="aspect-video bg-dark-700 flex items-center justify-center overflow-hidden rounded-lg relative group">
                  <img 
                    src="ss.jpg" 
                    alt="Success Squad Team" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300">
                     <div className="flex items-center gap-2">
                        <div className="h-8 w-1 bg-neon-cyan"></div>
                        <div>
                            <p className="font-orbitron text-white text-lg tracking-wider leading-none">THE SQUAD</p>
                            <p className="font-rajdhani text-neon-cyan text-sm tracking-wide">Innovators & Leaders</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-dark-950 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeader title="CONNECT WITH US" subtitle="Join the Network" />
        
        <div className="glass-card p-10 rounded-2xl border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,243,255,0.1)]">
          <p className="font-rajdhani text-xl text-gray-300 mb-10">
            Stay updated with our latest events, workshops, and startup news. Follow us on our social media platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://www.instagram.com/success_squad_8/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform duration-300 border border-pink-400/50 group"
            >
              <Instagram className="w-6 h-6 text-white" />
              <span className="font-orbitron font-bold text-white tracking-wider">INSTAGRAM</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/success-squad-003001378/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 rounded-lg hover:scale-105 transition-transform duration-300 border border-blue-400/50"
            >
              <Linkedin className="w-6 h-6 text-white" />
              <span className="font-orbitron font-bold text-white tracking-wider">LINKEDIN</span>
            </a>

            <a 
              href="mailto:ecell@jspmntc.edu.in" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-dark-700 rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-500 hover:border-neon-green"
            >
              <Mail className="w-6 h-6 text-neon-green" />
              <span className="font-orbitron font-bold text-neon-green tracking-wider">EMAIL US</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const usefulLinks = [
    { name: "E-Cell IIT Bombay", url: "https://www.ecell.in/" },
    { name: "NEC (National Entrepreneurship Challenge)", url: "https://www.ecell.in/nec/" },
    { name: "JSPM NTC", url: "https://www.jspmntc.edu.in/" },
    { name: "TSSM BSCOER", url: "https://tssm.edu.in/" },
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
              SUCCESS <span className="text-neon-cyan">SQUAD</span>
            </h2>
            <p className="font-rajdhani text-gray-400 text-lg max-w-md">
              Empowering students to build the future. The official Entrepreneurship Development Cell of JSPM Narhe Technical Campus.
            </p>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-neon-pink mb-6 tracking-wider">ECOSYSTEM</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex items-center font-rajdhani text-gray-400 hover:text-neon-cyan transition-colors text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-neon-green mb-6 tracking-wider">VISIT US</h4>
            <address className="font-rajdhani text-gray-400 not-italic text-lg space-y-2">
              <p>JSPM Narhe Technical Campus</p>
              <p>Narhe, Pune - 411041</p>
              <p>Maharashtra, India</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-rajdhani text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Success Squad EDC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="font-rajdhani text-gray-600 text-sm">
              Designed with <span className="text-neon-pink">⚡</span> by Success Squad Tech Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VMO />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

export default App;
