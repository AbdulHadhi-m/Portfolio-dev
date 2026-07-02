import React from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "MERN Stack Developer @ Freelance",
    date: "2024 - Present",
    description: "Building modern full-stack web applications using React, Node.js, Express, and MongoDB. Delivering scalable, user-centric solutions for diverse client requirements.",
    location: "Kerala, India (Remote)",
    color: "bg-cyan",
  },
  {
    title: "Web Development Intern",
    date: "2023 - 2024",
    description: "Developed responsive web applications and REST APIs. Collaborated on frontend architecture using React and Tailwind CSS. Gained hands-on experience in version control and deployment.",
    location: "Kerala, India",
    color: "bg-yellow",
  },
  {
    title: "Freelance Web Developer",
    date: "2022 - 2023",
    description: "Started journey building websites for local businesses. Mastered HTML, CSS, JavaScript, and React fundamentals while delivering real-world projects.",
    location: "Kerala, India",
    color: "bg-green",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
  const isTouch = useIsTouchDevice();
  return (
    <section id="experience">
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
          JOURNEY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-sans mb-8"
        >
          My <span className="bg-pink border-3 border-ink px-2">Journey</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-surface border-3 border-ink p-6 md:p-8 relative overflow-hidden"
          style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
        >
          <div className="absolute left-[23px] md:left-[31px] top-16 bottom-16 w-1 bg-ink/20"></div>

          <div className="flex flex-col gap-8 relative">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex gap-4 md:gap-6 group"
              >
                <div className="flex flex-col items-center relative z-10">
                  <motion.div
                    className={`w-12 h-12 md:w-14 md:h-14 ${exp.color} border-3 border-ink flex items-center justify-center shrink-0`}
                    style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
                    whileHover={isTouch ? {} : { scale: 1.15, rotate: 5 }}
                  >
                    <Briefcase size={20} />
                  </motion.div>
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                    <h3 className="text-lg md:text-xl font-bold font-sans">{exp.title}</h3>
                    <motion.span
                      className="font-mono text-xs font-bold text-ink-light px-2 py-0.5 bg-yellow border-2 border-ink"
                      whileHover={isTouch ? {} : { x: 2, y: 2, boxShadow: 'none' }}
                      whileTap={{ x: 2, y: 2, boxShadow: 'none' }}
                      style={{ boxShadow: '2px 2px 0 #1a1a1a' }}
                    >
                      {exp.date}
                    </motion.span>
                  </div>
                  <p className="text-ink-light leading-relaxed mb-2 text-sm md:text-base">{exp.description}</p>
                  <motion.p
                    className="text-xs font-mono text-ink-light flex items-center gap-1"
                    whileHover={isTouch ? {} : { x: 2 }}
                  >
                    <MapPin size={12} /> {exp.location}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
