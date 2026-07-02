import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';
import SketchbookSection from './SketchbookSection';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 15 + 5;
        return next >= 100 ? (clearInterval(interval), setTimeout(onFinish, 300), 100) : next;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-yellow flex flex-col items-center justify-center gap-12"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="absolute top-[15%] left-[10%] animate-bounce" style={{ animationDuration: '3s' }}>
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" strokeWidth="4"/>
          <rect x="3" y="3" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" strokeWidth="4"/>
          <path d="M35 40 L20 50 L35 60" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M65 40 L80 50 L65 60" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="55" y1="35" x2="45" y2="65" stroke="#000" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="absolute top-[20%] right-[15%] animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="88" height="88" rx="8" fill="#ffd93d" stroke="#000" strokeWidth="4"/>
          <path d="M25 35 L40 50 L25 65" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="50" y1="65" x2="75" y2="65" stroke="#000" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[15%] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" strokeWidth="4"/>
          <rect x="20" y="20" width="60" height="60" rx="3" fill="#ffd93d" stroke="#000" strokeWidth="4"/>
          <rect x="30" y="20" width="40" height="20" fill="#66d9ef" stroke="#000" strokeWidth="3"/>
          <rect x="35" y="55" width="30" height="15" rx="2" fill="#000"/>
          <circle cx="50" cy="35" r="3" fill="#000"/>
        </svg>
      </div>

      <div className="flex gap-6 items-center relative z-10">
        {['A', 'H'].map((letter, i) => (
          <motion.span
            key={i}
            className="text-6xl md:text-7xl font-bold font-sans w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center border-6 border-ink"
            style={{
              background: i === 0 ? '#66d9ef' : '#ff6b9d',
              boxShadow: '12px 12px 0 #1a1a1a',
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i === 0 ? 0.1 : 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="w-[300px] h-5 bg-surface border-4 border-ink relative z-10" style={{ boxShadow: '6px 6px 0 #1a1a1a' }}>
        <motion.div
          className="h-full bg-yellow"
          style={{ width: `${progress}%`, borderRight: '4px solid #1a1a1a' }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const MainLayout = ({ children }) => {
  const isTouch = useIsTouchDevice();
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="min-h-screen bg-bg pt-3 px-3 md:px-5 selection:bg-yellow/70">
        <div className="page-wrapper">
          <div className="sticky top-4 z-50 mx-4 mt-4">
            <Navbar />
          </div>

          <div className="px-4 sm:px-8 md:px-12">
            {children[0]}
          </div>

            <SketchbookSection />

          <div className="px-4 sm:px-8 md:px-12">
            <div className="py-8 md:py-12">
              <div className="flex flex-col gap-16 md:gap-24">
                {React.Children.map(children, (child, i) => {
                  if (i === 0) return null;
                  return (
                    <AnimatedSection key={i} index={i}>
                      {i > 1 && <SectionDivider />}
                      {child}
                    </AnimatedSection>
                  );
                })}
              </div>

              <motion.footer
                className="mt-20 pt-8 border-t-3 border-ink"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <strong className="text-lg font-bold">ABDUL HADHI M</strong>
                    <p className="text-ink-light text-sm font-mono">MERN Stack Developer</p>
                    <div className="flex gap-3 mt-3 justify-center md:justify-start">
                      {[
                        { icon: <FaGithub size={18} />, href: 'https://github.com/AbdulHadhi-m' },
                        { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/abdul-hadhi-m/' },
                        { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/_hadhi__7?igsh=a3huMDV6aHZ2a3l2' },
                        { icon: <FaTwitter size={18} />, href: 'https://x.com/your-twitter' },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 bg-surface border-2 border-ink flex items-center justify-center"
                          style={{ boxShadow: '2px 2px 0 #1a1a1a' }}
                          whileHover={isTouch ? {} : { x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' }}
                          whileTap={{ x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-6 font-mono text-sm font-semibold">
                    <a href="#hero" className="hover:underline underline-offset-4">Home</a>
                    <a href="#about" className="hover:underline underline-offset-4">About</a>
                    <a href="#skills" className="hover:underline underline-offset-4">Skills</a>
                    <a href="#experience" className="hover:underline underline-offset-4">Journey</a>
                    <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
                  </div>
                  <div className="font-mono text-xs text-ink-light">
                    &copy; {new Date().getFullYear()} All rights reserved.
                  </div>
                </div>
              </motion.footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
