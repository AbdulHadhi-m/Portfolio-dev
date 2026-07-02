import { motion } from 'framer-motion';

const shapes = ['circle', 'square', 'diamond'];

const ShapeIcon = ({ shape, delay }) => {
  const baseClass = "border-2 border-ink";

  if (shape === 'circle') {
    return (
      <motion.div
        className={`w-3 h-3 rounded-full bg-yellow ${baseClass}`}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring", stiffness: 200, damping: 12 }}
      />
    );
  }
  if (shape === 'diamond') {
    return (
      <motion.div
        className={`w-3 h-3 bg-pink ${baseClass}`}
        style={{ transform: 'rotate(45deg)' }}
        initial={{ scale: 0, rotate: -135 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring", stiffness: 200, damping: 12 }}
      />
    );
  }
  return (
    <motion.div
      className={`w-3 h-3 bg-cyan ${baseClass}`}
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 12 }}
    />
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 py-4 select-none">
    <motion.div
      className="h-px flex-1 max-w-[80px] bg-ink/30"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: 'right' }}
    />
    <div className="flex items-center gap-2">
      {shapes.map((s, i) => (
        <ShapeIcon key={s} shape={s} delay={i * 0.1} />
      ))}
    </div>
    <motion.div
      className="h-px flex-1 max-w-[80px] bg-ink/30"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: 'left' }}
    />
  </div>
);

export default SectionDivider;
