import React, { useState, useEffect } from 'react';
import { Home, User, Code2, Briefcase, Award, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Skills', href: '#skills', icon: <Code2 size={18} /> },
  { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
  // { name: 'Experience', href: '#experience', icon: <Award size={18} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = navItems.map(item => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, name, href) => {
    e.preventDefault();
    setActiveItem(name);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[90%] md:w-auto' : 'w-[90%] md:w-auto'}`}>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-card px-2 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.name, item.href)}
              className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeItem === item.name ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {activeItem === item.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {/* {item.icon} */} {/* Uncomment if icons are desired on desktop */}
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex justify-end w-full">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-4 mt-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.name, item.href)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    activeItem === item.name 
                      ? 'bg-primary/20 text-white border border-primary/50' 
                      : 'glass-card text-muted hover:text-white'
                  }`}
                >
                  <span className={activeItem === item.name ? "text-primary" : ""}>{item.icon}</span>
                  <span className="text-lg font-outfit font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
