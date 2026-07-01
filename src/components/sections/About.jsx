import React from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { Layout, Server, Smartphone, Lock } from 'lucide-react';

const cards = [
  { icon: <Layout size={24} />, title: "Web Development", desc: "Building beautiful, responsive, and performance-optimized frontend architectures.", color: "bg-pink" },
  { icon: <Server size={24} />, title: "REST API", desc: "Designing robust, secure, and scalable RESTful APIs on Node and Express.", color: "bg-cyan" },
  { icon: <Smartphone size={24} />, title: "Responsive UI", desc: "Ensuring pixel-perfect layouts across mobile, tablet, and desktop devices.", color: "bg-green" },
  { icon: <Lock size={24} />, title: "Authentication", desc: "JWT auth, Google OAuth, protected APIs, and role-based access control.", color: "bg-yellow" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  const isTouch = useIsTouchDevice();
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-yellow border-3 border-ink px-4 py-1 font-bold font-mono text-sm tracking-wider mb-6"
          style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
        >
          ABOUT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-sans mb-8"
        >
          Who <span className="bg-yellow border-3 border-ink px-2">I Am</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-surface border-3 border-ink p-6 md:p-8 mb-10"
          style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
        >
          <motion.p className="text-lg leading-relaxed mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
            My journey as a developer started with curiosity about how the web works. Today, I'm a{' '}
            <span className="highlight-yellow">Full-Stack MERN Developer</span> passionate about building{' '}
            <span className="highlight-cyan">scalable applications</span> with seamless user experiences.
          </motion.p>
          <motion.p className="text-lg leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}>
            I specialize in <span className="highlight-green">React and Tailwind CSS</span> for modern frontend development,
            combined with <span className="highlight-pink">Node.js, Express, and MongoDB</span> for robust backend systems.
            I enjoy creating clean UI, optimizing performance, and constantly learning{' '}
            <span className="highlight-yellow">new technologies and design patterns</span>.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-surface border-3 border-ink p-6 group cursor-default"
              style={{ boxShadow: '5px 5px 0 #1a1a1a' }}
              whileHover={isTouch ? {} : { x: 4, y: 4, boxShadow: '0 0 0 #1a1a1a' }}
              whileTap={{ x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
            >
              <motion.div
                className={`w-12 h-12 ${card.color} border-2 border-ink flex items-center justify-center mb-4`}
                whileHover={isTouch ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                whileTap={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-ink-light leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
