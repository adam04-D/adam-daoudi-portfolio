import React from 'react';
import { motion } from 'framer-motion';
const adamImg = '/adam.png';
import { ABOUT_ME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="md:w-1/2 w-full relative group"
        >
          <div className="aspect-[3/4] md:aspect-square bg-primary rounded-sm flex flex-col items-center justify-end text-text-muted border border-border overflow-hidden relative z-10">
            <img src={adamImg} alt="Adam Daoudi Portrait" className="w-[100%] h-[100%] object-contain object-bottom group-hover:scale-105 transition-transform duration-700" />
          </div>
          {/* Decorative design elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border border-border rounded-full z-0 opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-12 bg-border/20 z-0"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="md:w-1/2 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main leading-tight">
            {ABOUT_ME.title}
          </h2>
          <div className="space-y-6 text-text-muted leading-relaxed">
            {ABOUT_ME.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="pt-4">
            <div className="inline-block border-b border-text-main pb-1 text-text-main font-medium italic">
              {ABOUT_ME.currentFocus}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
