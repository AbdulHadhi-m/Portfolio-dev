import React from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3, FaJs, FaAws } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiFramer, SiVercel, SiCloudinary, SiRedux, SiNextdotjs, SiFirebase, SiDocker, SiNginx, SiLinux, SiFigma, SiTrello, SiNotion, SiNpm, SiPostgresql } from 'react-icons/si';
import { Lock, Database, Wrench, Cloud } from 'lucide-react';
import { VscVscode } from 'react-icons/vsc';

const skillGroups = [
  {
    icon: <FaReact size={28} />, title: 'Frontend',
    items: [
      { icon: <FaReact />, label: 'React.js' }, { icon: <SiNextdotjs />, label: 'Next.js' }, { icon: <FaHtml5 />, label: 'HTML5' },
      { icon: <FaCss3 />, label: 'CSS' }, { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
      { icon: <SiFramer />, label: 'Framer Motion' }, { icon: <SiRedux />, label: 'Redux' }, { label: 'Bootstrap' },
    ],
  },
  {
    icon: <FaJs size={28} />, title: 'Languages',
    items: [
      { icon: <FaJs />, label: 'JavaScript' }, { label: 'TypeScript' },
    ],
  },
  {
    icon: <FaNodeJs size={28} />, title: 'Backend',
    items: [
      { icon: <FaNodeJs />, label: 'Node.js' }, { icon: <SiExpress />, label: 'Express.js' },
      { label: 'REST APIs' }, { icon: <Lock size={14} />, label: 'JWT Auth' }, { label: 'Socket.IO' }, { label: 'OAuth' },
    ],
  },
  {
    icon: <Cloud size={28} />, title: 'Cloud & DevOps',
    items: [
      { icon: <SiVercel />, label: 'Vercel' }, { label: 'Render' },
      { icon: <FaGitAlt />, label: 'Git' }, { icon: <FaGithub />, label: 'GitHub' },
      { icon: <SiDocker />, label: 'Docker' }, { icon: <FaAws />, label: 'AWS EC2' },
      { icon: <SiNginx />, label: 'Nginx' }, { icon: <SiLinux />, label: 'Linux' },
      { icon: <Lock size={14} />, label: 'SSL/HTTPS' },
    ],
  },
  {
    icon: <SiMongodb size={28} />, title: 'Databases',
    items: [
      { icon: <SiMongodb />, label: 'MongoDB' }, { icon: <Database size={14} />, label: 'Mongoose' }, { icon: <SiFirebase />, label: 'Firebase' }, { icon: <SiPostgresql />, label: 'PostgreSQL' },
    ],
  },
  {
    icon: <Wrench size={28} />, title: 'Tools & More',
    items: [
      { icon: <SiPostman />, label: 'Postman' }, { icon: <SiCloudinary />, label: 'Cloudinary' },
      { icon: <VscVscode />, label: 'VS Code' }, { icon: <SiFigma />, label: 'Figma' },
      { icon: <SiVercel />, label: 'Vercel' }, { icon: <SiTrello />, label: 'Trello' },
      { icon: <SiNotion />, label: 'Notion' }, { icon: <SiNpm />, label: 'npm' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const groupVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.04, type: "spring", stiffness: 200, damping: 15 } }),
};

const Skills = () => {
  const isTouch = useIsTouchDevice();

  const hoverPush = isTouch ? {} : { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' };
  const hoverTag = isTouch ? {} : { x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' };
  const tapPush = { x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' };
  const tapTag = { x: 2, y: 2, boxShadow: '0 0 0 #1a1a1a', backgroundColor: '#ffd93d' };

  return (
    <section id="skills">
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
          SKILLS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-sans mb-8"
        >
          My <span className="bg-cyan border-3 border-ink px-2">Tech Stack</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={groupVariants}
              className="bg-surface border-3 border-ink p-6"
              style={{ boxShadow: '5px 5px 0 #1a1a1a' }}
              whileHover={hoverPush}
              whileTap={tapPush}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-yellow border-2 border-ink flex items-center justify-center"
                  whileHover={isTouch ? {} : { rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {group.icon}
                </motion.div>
                <h3 className="text-xl font-bold font-sans">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill.label}
                    custom={si}
                    variants={tagVariants}
                    className="bg-surface border-2 border-ink px-3 py-1 text-sm font-semibold inline-flex items-center gap-1.5"
                    style={{ boxShadow: '2px 2px 0 #1a1a1a' }}
                    whileHover={hoverTag}
                    whileTap={tapTag}
                  >
                    {skill.icon && (
                      <motion.span className="text-sm" whileHover={isTouch ? {} : { rotate: 360 }} transition={{ duration: 0.5 }}>
                        {skill.icon}
                      </motion.span>
                    )}
                    {skill.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
