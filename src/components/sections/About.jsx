import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Lock } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Layout className="text-fuchsia-500" size={24} />, title: "Web Development", desc: "Building beautiful, responsive, and performance-optimized frontend architectures." },
    { icon: <Server className="text-primary" size={24} />, title: "REST API", desc: "Designing robust, secure, and scalable RESTful APIs on Node and Express." },
    { icon: <Smartphone className="text-fuchsia-500" size={24} />, title: "Responsive UI", desc: "Ensuring pixel-perfect layouts across mobile, tablet, and desktop devices." },
    { icon: <Lock className="text-primary" size={24} />, title: "Authentication", desc: "JWT auth, Google OAuth, protected APIs, and role-based access control." }
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
            My journey as a developer started with curiosity about how the web works. Today, I’m a Full-Stack MERN Developer passionate about building scalable applications with seamless user experiences.
 
          </p>
          <p className="text-muted leading-relaxed text-lg">
            I specialize in React and Tailwind CSS for modern frontend development, combined with Node.js, Express, and MongoDB for robust backend systems. I enjoy creating clean UI, optimizing performance, and constantly learning new technologies and design patterns.
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
