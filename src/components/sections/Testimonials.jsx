import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Abdul Hadi is a fantastic developer. He took our ideas and transformed them into a beautiful, functional platform. His attention to detail in UI design is unmatched.",
    name: "John Doe",
    position: "Product Manager at TechCorp"
  },
  {
    text: "Working with him was a breeze. We needed a robust backend and a sleek frontend, and he delivered on both fronts flawlessly. Highly recommended for any MERN stack project.",
    name: "Sarah Smith",
    position: "Founder of StartupX"
  },
  {
    text: "The web application he built for us looks incredibly modern and performs blazing fast. He really understands how to create premium digital experiences.",
    name: "Michael Johnson",
    position: "Creative Director"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 flex items-center gap-4">
          Client <span className="text-gradient">Words</span>
        </h2>

        <div className="relative glass-card p-8 md:p-12 overflow-hidden">
          <Quote className="absolute top-6 right-8 text-white/5" size={120} />
          
          <div className="relative z-10 min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-primary font-bold font-outfit text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mt-8 relative z-10">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card hover:bg-white/10 flex items-center justify-center text-white transition-all hover:-translate-x-1"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full glass-card hover:bg-white/10 flex items-center justify-center text-white transition-all hover:translate-x-1"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
