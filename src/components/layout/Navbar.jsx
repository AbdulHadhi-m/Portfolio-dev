import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#experience' },
  { name: 'Works', href: '#projects' },
];

const Navbar = () => {
  const isTouch = useIsTouchDevice();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navbarHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      setTimeout(() => {
        window.scrollTo({ top, behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <>
      <motion.nav
        className="bg-yellow border-4 border-ink relative"
        style={{ boxShadow: '8px 8px 0 #1a1a1a' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <motion.a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="text-xl font-bold font-sans px-3 py-1.5 bg-cyan border-3 border-ink inline-block"
            style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
            whileHover={isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
            whileTap={{ x: 4, y: 4, boxShadow: 'none' }}
          >
            AH
          </motion.a>

          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative font-bold text-base font-sans transition-colors ${
                    isActive ? 'text-ink' : 'text-ink/80 hover:text-ink'
                  }`}
                  whileHover={isTouch ? {} : { y: -3, rotate: -2, scale: 1.1 }}
                  style={{ transformOrigin: 'right bottom' }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            <motion.a
              href="https://github.com/AbdulHadhi-m"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-bold text-sm font-mono text-ink/70 hover:text-ink"
              whileHover={isTouch ? {} : { y: -3, rotate: -2, scale: 1.1 }}
              style={{ transformOrigin: 'right bottom' }}
            >
              <span className="text-xs border border-ink px-1 py-0.5 bg-surface">Git</span>
              Projects
              <ExternalLink size={12} />
            </motion.a>

            <motion.button
              onClick={toggle}
              className="px-3 py-2 bg-cyan border-3 border-ink flex items-center justify-center"
              style={{ boxShadow: '3px 3px 0 #1a1a1a', minHeight: '40px' }}
              whileHover={isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
              whileTap={{ x: 4, y: 4, boxShadow: 'none' }}
              aria-label="Toggle theme"
            >
              <motion.span
                key={dark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-4 py-2 bg-cyan border-3 border-ink font-bold font-sans text-sm"
              style={{ boxShadow: '3px 3px 0 #1a1a1a', minHeight: '40px', display: 'inline-flex', alignItems: 'center' }}
              whileHover={isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
              whileTap={{ x: 4, y: 4, boxShadow: 'none' }}
            >
              Get in Touch!
            </motion.a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggle}
              className="w-10 h-10 border-3 border-ink bg-cyan flex items-center justify-center"
              style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-10 h-10 border-3 border-ink bg-surface flex items-center justify-center"
              style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-yellow border-x-4 border-b-4 border-ink overflow-hidden"
            style={{ boxShadow: '8px 8px 0 #1a1a1a', marginTop: '-4px' }}
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="bg-surface border-3 border-ink px-5 py-3 font-bold font-sans text-base"
                  style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="bg-cyan border-3 border-ink px-5 py-3 font-bold font-sans text-base text-center"
                style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
              >
                Get in Touch!
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
