import React from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { ExternalLink } from 'lucide-react';
import gopathImage from '../../assets/PR1.png';

const projects = [
  {
    title: "GoPath", color: "bg-cyan", image: gopathImage,
    description: "Complete bus booking platform featuring seat selection, secure payment integration, and roles for operator/admin/user.",
    tech: ["React", "Express", "MongoDB", "Redux", "Tailwind CSS", "Node.js"],
    demoLink: "https://go-path-ten.vercel.app/",
  },
{
    title: "Quizivo", color: "bg-yellow", image: "quiz1.png",
    description: "AI-powered MERN quiz platform featuring timed challenges, dynamic question generation with Gemini API, real-time leaderboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Gemini API"],
    demoLink: "https://quizivo-client.vercel.app/",
  },
  {
    title: "WhoPay.me", color: "bg-green", image: "whopay1.png",
    description: "Fun web app that randomly selects who pays the bill using a virtual spin wheel or dice roll.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB"],
    demoLink: "https://www.whopay.me/",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const isTouch = useIsTouchDevice();
  const hoverCard = isTouch ? {} : { x: 4, y: 4, boxShadow: '0 0 0 #1a1a1a' };
  const hoverTag = isTouch ? {} : { x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' };
  const hoverBtn = isTouch ? {} : { x: 4, y: 4, boxShadow: '0 0 0 #1a1a1a' };
  return (
    <section id="projects">
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
          PROJECTS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-sans mb-8"
        >
          Things I've <span className="bg-green border-3 border-ink px-2">Built</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={projectVariants}
              className="bg-surface border-3 border-ink overflow-hidden flex flex-col xl:flex-row"
              style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
              whileHover={hoverCard}
            >
              <div className="xl:w-2/5 aspect-video xl:aspect-auto overflow-hidden border-b xl:border-b-0 xl:border-r-3 border-ink bg-surface">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={isTouch ? {} : { scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-6 md:p-8 xl:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className={`w-4 h-4 ${project.color} border-2 border-ink`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <h3 className="text-2xl font-bold font-sans">{project.title}</h3>
                </div>

                <p className="text-ink-light leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-surface border-2 border-ink px-3 py-1 text-xs font-semibold"
                      style={{ boxShadow: '2px 2px 0 #1a1a1a' }}
                      whileHover={hoverTag}
                      whileTap={{ x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-cyan border-3 border-ink font-bold font-sans text-sm flex items-center gap-2"
                    style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
                    whileHover={hoverBtn}
                    whileTap={{ x: 5, y: 5, boxShadow: 'none' }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
