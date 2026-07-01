import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Mail, ArrowRight } from 'lucide-react';

const CodeSvg = () => (
  <motion.svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: 'drop-shadow(6px 6px 0 #1a1a1a)' }}
  >
    <rect x="6" y="6" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" strokeWidth="4"/>
    <rect x="3" y="3" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" strokeWidth="4"/>
    <path d="M35 40 L20 50 L35 60" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M65 40 L80 50 L65 60" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="55" y1="35" x2="45" y2="65" stroke="#000" strokeWidth="5" strokeLinecap="round"/>
  </motion.svg>
);

const TerminalSvg = () => (
  <motion.svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: 'drop-shadow(5px 5px 0 #1a1a1a)' }}
  >
    <rect x="6" y="6" width="88" height="88" rx="8" fill="#ffd93d" stroke="#000" strokeWidth="4"/>
    <rect x="3" y="3" width="88" height="88" rx="8" fill="#ffd93d" stroke="#000" strokeWidth="4"/>
    <path d="M25 35 L40 50 L25 65" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="50" y1="65" x2="75" y2="65" stroke="#000" strokeWidth="5" strokeLinecap="round"/>
  </motion.svg>
);

const FloppySvg = () => (
  <motion.svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={{ x: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: 'drop-shadow(5px 5px 0 #1a1a1a)' }}
  >
    <rect x="6" y="6" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" strokeWidth="4"/>
    <rect x="3" y="3" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" strokeWidth="4"/>
    <rect x="20" y="20" width="60" height="60" rx="3" fill="#ffd93d" stroke="#000" strokeWidth="4"/>
    <rect x="30" y="20" width="40" height="20" fill="#66d9ef" stroke="#000" strokeWidth="3"/>
    <rect x="35" y="55" width="30" height="15" rx="2" fill="#000"/>
    <circle cx="50" cy="35" r="3" fill="#000"/>
  </motion.svg>
);

const stats = [
  { value: '3+', label: 'Years of Experience', color: 'bg-cyan' },
  { value: '15+', label: 'Projects Delivered', color: 'bg-green' },
  { value: '10+', label: 'Technologies', color: 'bg-pink' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: 0.4 + i * 0.08, type: "spring", stiffness: 200, damping: 15 } }),
};
const badgeVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.8 + i * 0.05, duration: 0.3 } }),
};

const techBadges = [
  { icon: <FaGithub />, label: 'Git' }, { label: 'React' }, { label: 'Node.js' },
  { label: 'Express' }, { label: 'MongoDB' }, { label: 'Tailwind CSS' },
  { label: 'JavaScript' }, { label: 'TypeScript' },
];

const TypewriterText = ({ text, className }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0; setDisplayed(''); setDone(false);
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1)); i++;
      if (i >= text.length) { clearInterval(interval); setDone(true); }
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className={className}>
      {displayed}
      {!done && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-[3px] h-[1em] bg-ink ml-1 align-middle" />}
    </span>
  );
};

const Hero = () => {
  const isTouch = useIsTouchDevice();
  const hoverSocial = isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' };
  const hoverCta = isTouch ? {} : { x: 4, y: 4, boxShadow: '0 0 0 #1a1a1a' };
  const hoverBadge = isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' };
  const hoverStat = isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' };
  return (
    <section id="hero" className="pt-8 md:pt-12 pb-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left */}
          <motion.div variants={itemVariants}>
            <motion.p variants={itemVariants} className="text-cyan font-semibold text-xl md:text-2xl mb-2 font-sans">
              <TypewriterText text="Hi there! 👋" />
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight mb-4">
              I'm{' '}
              <motion.span
                className="bg-yellow px-2 -ml-1 border-4 border-ink inline-block"
                whileHover={isTouch ? {} : { scale: 1.03, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Abdul Hadhi M.
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-ink-light leading-relaxed max-w-xl mb-6">
              Based in Kerala, India, I'm a MERN Stack Developer. I build modern, scalable, and user-friendly web applications with passion for clean UI and robust backend systems.
            </motion.p>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex gap-3 mb-6">
              {[
                { icon: <FaGithub size={20} />, href: 'https://github.com/AbdulHadhi-m' },
                { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/abdul-hadhi-m/' },
                { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/_hadhi__7?igsh=a3huMDV6aHZ2a3l2' },
                { icon: <Mail size={20} />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=abdulhadhi.work@gmail.com' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  custom={i}
                  variants={socialVariants}
                  className="w-12 h-12 bg-surface border-3 border-ink flex items-center justify-center"
                  style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
                  whileHover={hoverSocial}
                  whileTap={{ x: 4, y: 4, boxShadow: 'none' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA + Coffee */}
            <motion.div variants={itemVariants} className="relative flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-cyan border-3 border-ink font-bold font-sans flex items-center gap-2"
                style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
                whileHover={hoverCta}
                whileTap={{ x: 5, y: 5, boxShadow: 'none' }}
              >
                Get in Touch! <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={18} /></motion.span>
              </motion.a>

              {/* Coffee */}
              <div className="flex items-center gap-1">
                <motion.span
                  className="font-hand text-xl rotate-[-3deg]"
                  animate={{ rotate: [-3, 0, -3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Buy me a coffee
                </motion.span>
                <motion.img
                  src="/arrow.png"
                  alt="arrow"
                  className="w-16 md:w-20 -ml-2 -rotate-45"
                  onError={(e) => { e.target.style.display = 'none'; }}
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <a href="https://www.paypal.com/paypalme/Ballabani" target="_blank" rel="noreferrer">
                  <motion.img
                    src="/coffee.gif"
                    alt="Coffee"
                    className="w-12 h-12 md:w-14 md:h-14"
                    onError={(e) => { e.target.style.display = 'none'; }}
                    whileHover={isTouch ? {} : { scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Avatar */}
          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative inline-block">
              {/* Tape sticker */}
              <motion.div
                className="absolute -top-4 right-8 w-24 h-8 bg-yellow/70 border-2 border-ink/10 rotate-[15deg] z-10 rounded-sm"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                animate={{ rotate: [15, 18, 15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Avatar */}
              <motion.div
                className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] border-4 border-ink overflow-hidden relative bg-green"
                style={{ boxShadow: '8px 8px 0 #1a1a1a' }}
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img
                  src="/profile.png"
                  alt="Abdul Hadhi M"
                  className="w-full h-full object-cover object-top"
                whileHover={isTouch ? {} : { scale: 1.08 }}
                transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Decorations */}
              <div className="absolute -top-10 -left-10 hidden sm:block"><CodeSvg /></div>
              <div className="absolute top-1/4 -right-12 hidden sm:block"><TerminalSvg /></div>
              <div className="absolute bottom-8 -left-16 hidden sm:block"><FloppySvg /></div>

              {/* Label */}
              <motion.div
                className="absolute -bottom-5 -right-8 bg-green border-3 border-ink px-4 py-2 font-bold font-sans whitespace-nowrap z-10"
                style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
                whileHover={isTouch ? {} : { scale: 1.08, backgroundColor: '#ffd93d' }}
              >
                MERN Stack Ninja
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-wrap gap-4 mt-8 mb-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex-1 min-w-[140px] bg-surface border-3 border-ink p-4 text-center"
              style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
              whileHover={hoverStat}
            >
              <motion.span
                className={`text-3xl md:text-4xl font-bold font-sans block ${stat.color} px-1 inline-block border-2 border-ink`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1, type: 'spring', stiffness: 200, damping: 12 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-sm font-mono font-semibold text-ink-light block mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap gap-3 pb-6 border-b-3 border-ink mt-4"
        >
          {techBadges.map((tech, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="bg-surface border-3 border-ink px-4 py-2 font-semibold text-sm flex items-center gap-2"
              style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
              whileHover={hoverBadge}
            >
              {tech.icon && <motion.span className="text-base" whileHover={isTouch ? {} : { rotate: 360 }} transition={{ duration: 0.5 }}>{tech.icon}</motion.span>}
              {tech.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
