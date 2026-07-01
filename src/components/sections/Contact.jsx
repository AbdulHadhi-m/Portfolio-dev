import React from 'react';
import { motion } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Mail, MapPin, Send } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" } }),
};

const Contact = () => {
  const isTouch = useIsTouchDevice();
  const hoverSocial = isTouch ? {} : { x: 4, y: 4, boxShadow: '0 0 0 #1a1a1a' };
  const hoverBtn = isTouch ? {} : { x: 4, y: 4, boxShadow: '0 0 0 #1a1a1a' };
  const hoverRow = isTouch ? {} : { x: 3 };
  return (
    <section id="contact">
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
          CONTACT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-sans mb-4"
        >
          Get In <span className="bg-pink border-3 border-ink px-2">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-hand text-ink-light mb-8"
        >
          Let's build something amazing together ✨
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: <FaLinkedin size={40} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-hadhi-m/', bg: 'hover:bg-cyan/20' },
            { icon: <FaGithub size={40} />, label: 'GitHub', href: 'https://github.com/AbdulHadhi-m', bg: 'hover:bg-yellow/20' },
            { icon: <FaInstagram size={40} />, label: 'Instagram', href: 'https://www.instagram.com/_hadhi__7?igsh=a3huMDV6aHZ2a3l2', bg: 'hover:bg-pink/20' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="bg-surface border-3 border-ink p-8 flex flex-col items-center justify-center gap-4 group"
              style={{ boxShadow: '5px 5px 0 #1a1a1a' }}
              whileHover={hoverSocial}
              whileTap={{ x: 3, y: 3, boxShadow: '0 0 0 #1a1a1a' }}
            >
              <motion.div
                whileHover={isTouch ? {} : { scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {social.icon}
              </motion.div>
              <span className="font-bold font-sans text-lg">{social.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-surface border-3 border-ink p-6 md:p-8"
          style={{ boxShadow: '6px 6px 0 #1a1a1a' }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <motion.div className="flex items-center gap-4" whileHover={hoverRow}>
              <motion.div
                className="w-12 h-12 bg-yellow border-2 border-ink flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail size={20} />
              </motion.div>
              <div>
                <p className="text-sm font-mono font-bold text-ink-light">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulhadhi.work@gmail.com" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-2">
                  abdulhadhi.work@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div className="flex items-center gap-4" whileHover={hoverRow}>
              <motion.div
                className="w-12 h-12 bg-green border-2 border-ink flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <MapPin size={20} />
              </motion.div>
              <div>
                <p className="text-sm font-mono font-bold text-ink-light">Location</p>
                <p className="font-semibold">Kerala, India</p>
              </div>
            </motion.div>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulhadhi.work@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-yellow border-3 border-ink font-bold font-sans flex items-center gap-2 mt-4 md:mt-0 md:ml-auto"
              style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
              whileHover={hoverBtn}
              whileTap={{ x: 5, y: 5, boxShadow: 'none' }}
            >
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                <Send size={16} />
              </motion.span>
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
