import React from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { GraduationCap, Globe, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's in Computer Applications",
    institution: "Indira Gandhi National Open University",
    year: "2025 - Present",
    description: "Focused on software development, data structures, and web technologies. Built a strong foundation in programming principles and modern web development.",
    color: "bg-cyan",
  },
];

const languages = [
  { lang: 'English', level: 'Professional', bar: 'w-[90%]' },
  { lang: 'Malayalam', level: 'Native', bar: 'w-full' },
];

const Education = () => {
  const isTouch = useIsTouchDevice();
  return (
    <section id="education">
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
          EDUCATION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-sans mb-8"
        >
          Learning <span className="bg-cyan border-3 border-ink px-2">Curve</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface border-3 border-ink p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
          >
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className={`w-14 h-14 ${edu.color} border-3 border-ink flex items-center justify-center shrink-0`}
                    style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
                    whileHover={isTouch ? {} : { scale: 1.1, rotate: 5 }}
                  >
                    <GraduationCap size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold font-sans">{edu.degree}</h3>
                    <p className="font-mono text-sm text-ink-light">{edu.institution}</p>
                  </div>
                </div>
                <motion.span
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2 py-1 bg-yellow border-2 border-ink mb-4"
                  style={{ boxShadow: '2px 2px 0 #1a1a1a' }}
                  whileHover={isTouch ? {} : { x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a' }}
                  whileTap={{ x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a' }}
                >
                  <Calendar size={12} /> {edu.year}
                </motion.span>
                <p className="text-ink-light leading-relaxed text-sm md:text-base mt-3">{edu.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border-3 border-ink p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-14 h-14 bg-pink border-3 border-ink flex items-center justify-center shrink-0"
                style={{ boxShadow: '3px 3px 0 #1a1a1a' }}
                whileHover={isTouch ? {} : { scale: 1.1, rotate: -5 }}
              >
                <Globe size={24} />
              </motion.div>
              <h3 className="text-xl font-bold font-sans">Languages</h3>
            </div>
            <div className="flex flex-col gap-5">
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-sans text-sm">{lang.lang}</span>
                    <span className="font-mono text-xs text-ink-light">{lang.level}</span>
                  </div>
                  <div className="w-full h-3 bg-[#d0d0d0] border-2 border-ink">
                    <motion.div
                      className={`h-full bg-yellow border-r-2 border-ink ${lang.bar}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.bar }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
