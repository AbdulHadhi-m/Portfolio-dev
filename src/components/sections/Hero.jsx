import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-8 md:pt-12 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-bold tracking-tight mb-6 leading-tight">
          Transforming Ideas into <br className="hidden sm:block" />
          <span className="text-gradient">Digital Reality</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl">
          I'm a passionate MERN stack developer dedicated to building scalable, user-centric, and visually stunning web applications. I bridge the gap between frontend aesthetics and backend robust engineering.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a 
            href="#projects" 
            className="px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 glow-primary"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3.5 rounded-full glass-card hover:bg-white/10 text-white font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Contact Me
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-y border-white/5 py-8">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "9+", label: "Projects Completed" },
            { value: "15+", label: "Technologies Mastered" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
