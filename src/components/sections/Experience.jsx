import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2024",
    title: "Full MERN Stack Developer",
    subtitle: "Real-world projects & Freelance",
    description: "Built complete applications like Rentora and GoPath. Deepened knowledge in JWT auth, Redux, and modern UI practices. Transitioned into focusing on premium web experiences."
  },
  {
    year: "2023",
    title: "Mastering React & Frontend",
    subtitle: "Self-learning & Personal Projects",
    description: "Focused heavily on UI/UX, React context, hooks, and CSS frameworks like Tailwind. Started building responsive and interactive layouts."
  },
  {
    year: "2022",
    title: "The Beginning",
    subtitle: "Foundations",
    description: "Learned the core basics: HTML, CSS, JavaScript. Built small vanilla JS apps and discovered a passion for programming."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-10 flex items-center gap-4">
          My <span className="text-gradient">Journey</span>
        </h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 pb-4">
          {milestones.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1 w-6 h-6 rounded-full bg-surface border-4 border-primary flex items-center justify-center glow-primary">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold font-outfit text-xl block mb-2">{item.year}</span>
                <h3 className="text-2xl font-bold font-outfit text-white mb-1">{item.title}</h3>
                <h4 className="text-muted font-medium mb-4">{item.subtitle}</h4>
                <p className="text-muted/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
