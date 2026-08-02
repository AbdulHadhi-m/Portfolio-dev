import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import pr0Image1 from '../../assets/PR0.png';
import pr0Image2 from '../../assets/PR00.png';
import pr1Image1 from '../../assets/PR1.png';
import pr1Image2 from '../../assets/PR11.png';
import pr2Image1 from '../../assets/PR2.png';
import pr2Image2 from '../../assets/PR22.png';
import pr3Image1 from '../../assets/PR3.png';
import pr3Image2 from '../../assets/PR33.png';

const projects = [
  {
    title: "Logiflow-ERP",
    color: "bg-cyan",
    images: [pr0Image1, pr0Image2],
    description: "Drivers update shipments through WhatsApp. AI automatically updates your ERP, timelines, and operations dashboard in real time.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    demoLink: "https://logiflow-frontend-pink.vercel.app/",
  },
  {
    title: "GoPath",
    color: "bg-cyan",
    images: [pr1Image1, pr1Image2],
    description: "Complete bus booking platform featuring seat selection, secure payment integration, and roles for operator/admin/user.",
    tech: ["React", "Express", "MongoDB", "Redux", "Tailwind CSS", "Node.js"],
    demoLink: "https://go-path-ten.vercel.app/",
  },
  {
    title: "Quizivo",
    color: "bg-yellow",
    images: [pr2Image1, pr2Image2],
    description: "AI-powered MERN quiz platform featuring timed challenges, dynamic question generation with Gemini API, real-time leaderboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Gemini API"],
    demoLink: "https://quizivo-client.vercel.app/",
  },
  {
    title: "WhoPay.me",
    color: "bg-green",
    images: [pr3Image1, pr3Image2],
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

const ProjectCard = ({ project, isTouch, hoverCard, hoverTag, hoverBtn }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = Array.isArray(project.images) ? project.images : [project.image];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      variants={projectVariants}
      className="bg-surface border-3 border-ink overflow-hidden flex flex-col xl:flex-row"
      style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
      whileHover={hoverCard}
    >
      <div className="xl:w-2/5 aspect-video xl:aspect-auto overflow-hidden border-b xl:border-b-0 xl:border-r-3 border-ink bg-surface relative group">
        <motion.img
          key={currentImgIndex}
          src={images[currentImgIndex]}
          alt={`${project.title} preview ${currentImgIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={isTouch ? {} : { scale: 1.05 }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-yellow border-2 border-ink p-1.5 font-bold shadow-[2px_2px_0_#1a1a1a] hover:bg-cyan active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all z-10 opacity-90 group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow border-2 border-ink p-1.5 font-bold shadow-[2px_2px_0_#1a1a1a] hover:bg-cyan active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all z-10 opacity-90 group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-surface/90 px-3 py-1 border-2 border-ink shadow-[2px_2px_0_#1a1a1a]">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`h-2.5 rounded-none border border-ink transition-all ${
                    idx === currentImgIndex ? 'w-6 bg-cyan' : 'w-2.5 bg-yellow/80 hover:bg-yellow'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
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
  );
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
            <ProjectCard
              key={i}
              project={project}
              isTouch={isTouch}
              hoverCard={hoverCard}
              hoverTag={hoverTag}
              hoverBtn={hoverBtn}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
