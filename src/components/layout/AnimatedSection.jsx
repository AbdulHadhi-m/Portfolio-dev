import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 50,
    x: i % 2 === 0 ? -30 : 30,
    scale: 0.97,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AnimatedSection = ({ children, index = 0 }) => (
  <motion.div
    custom={index}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
