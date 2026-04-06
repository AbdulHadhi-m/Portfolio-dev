import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Lock } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Layout className="text-fuchsia-500" size={24} />, title: "Web Development", desc: "Building beautiful, responsive, and performance-optimized frontend architectures." },
    { icon: <Server className="text-primary" size={24} />, title: "REST API", desc: "Designing robust, secure, and scalable RESTful APIs on Node and Express." },
    { icon: <Smartphone className="text-fuchsia-500" size={24} />, title: "Responsive UI", desc: "Ensuring pixel-perfect layouts across mobile, tablet, and desktop devices." },
    { icon: <Lock className="text-primary" size={24} />, title: "Authentication", desc: "Implementing secure JWT auth flows and role-based access control." }
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 flex items-center gap-4">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="glass-card p-6 md:p-8 mb-10">
          <p className="text-muted leading-relaxed mb-4 text-lg">
            My journey as a developer started with a curiosity for how things work on the web. Fast forward to today, I'm a full-stack MERN developer with a profound passion for creating flawless user experiences. 
          </p>
          <p className="text-muted leading-relaxed text-lg">
            I specialize in React and Tailwind on the frontend, and Node.js with MongoDB on the backend. When I'm not writing code, I'm exploring modern design aesthetics, optimizing performance, and learning new patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit mb-2 text-white">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
