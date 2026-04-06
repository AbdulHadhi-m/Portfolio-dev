import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MongoDB', 'Mongoose'],
  Tools: ['Git', 'GitHub', 'Postman', 'Vercel', 'Cloudinary']
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 flex items-center gap-4">
          Tech <span className="text-gradient">Arsenal</span>
        </h2>

        <div className="flex flex-col gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-xl font-bold font-outfit mb-4 text-white/90">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-surface border border-white/5 text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
