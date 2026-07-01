import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar';

const PaperTearTop = () => (
  <svg width="100%" height="30" viewBox="0 0 1440 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', width: '100%', height: '30px' }}
  >
    <path d="M0,0 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,0 Z" fill="#ffffff" stroke="none"/>
    <path d="M0,30 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,30 Z" fill="#d0d0d0" stroke="none"/>
    <path d="M0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PaperTearBottom = () => (
  <svg width="100%" height="30" viewBox="0 0 1440 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', width: '100%', height: '30px' }}
  >
    <path d="M0,0 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,0 Z" fill="#d0d0d0" stroke="none"/>
    <path d="M0,30 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,30 Z" fill="#ffffff" stroke="none"/>
    <path d="M0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
      {/* Floating SVGs */}
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

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="min-h-screen bg-bg pt-3 px-3 md:px-5 selection:bg-yellow/70">
        <div className="page-wrapper">
          {/* Navbar inside wrapper - sticky */}
          <div className="sticky top-4 z-50 mx-4 mt-4">
            <Navbar />
          </div>

          <div className="px-4 sm:px-8 md:px-12">
            {children[0]}

            <PaperTearTop />

            <div className="page-gap bg-[#d0d0d0] relative" style={{ minHeight: '240px' }}>
              {/* Tape sticker */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-10 bg-yellow/80 border-2 border-ink/20 rounded-sm z-10 flex items-center justify-center"
                style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.12)', rotate: '-3deg' }}
                animate={{ rotate: [-3, 2, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-hand text-lg font-bold text-ink/60 select-none">✦ designed with ✦</span>
              </motion.div>
            </div>

            <PaperTearBottom />

            <div className="py-8 md:py-12">
              <div className="flex flex-col gap-20 md:gap-28">
                {React.Children.map(children, (child, i) => {
                  if (i === 0) return null;
                  return child;
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
