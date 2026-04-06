import React from 'react';
import { Code, Briefcase, Mail, Image, MapPin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card w-full rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center glow-primary"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 mb-6 bg-gradient-to-br from-primary/20 to-fuchsia-500/20 relative">
        <img 
          src="/profile.png" 
          alt="Abdul Hadi" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-outfit font-bold mb-2">Abdul Hadhi M</h1>
      <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
        MERN Stack Developer
      </p>
      
      <p className="text-muted text-sm mb-6 leading-relaxed">
        I build modern, scalable, and user-friendly web applications.
      </p>

      <div className="w-full flex items-center justify-center gap-2 text-muted text-sm mb-8 pb-6 border-b border-white/5">
        <MapPin size={16} />
        <span>Kerala, India</span>
      </div>

      <div className="flex gap-4 mb-8">
        {[
          { icon: <Code size={20} />, href: "https://github.com/AbdulHadhi-m" },
          { icon: <Briefcase size={20} />, href: "https://www.linkedin.com/in/abdul-hadhi-m/" },
          { icon: <Mail size={20} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdulhadhi.work@gmail.com" },
          { icon: <Image size={20} />, href: "https://www.instagram.com/_hadhi__7?igsh=a3huMDV6aHZ2a3l2" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:-translate-y-1 hover:text-primary"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <a 
        href="#contact" 
        className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95 flex items-center justify-center gap-2"
      >
        <Mail size={18} />
        Let's Talk
      </a>
    </motion.div>
  );
};

export default Sidebar;
