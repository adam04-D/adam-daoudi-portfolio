import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden bg-secondary/50 transition-colors duration-300">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 border border-text-main rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 border border-text-main rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, tracking: "0.2em" }}
              whileInView={{ opacity: 0.5, tracking: "0.5em" }}
              transition={{ duration: 1.5 }}
              className="text-[10px] uppercase font-medium text-text-muted block"
            >
              The Philosophy
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif italic font-medium text-text-main leading-[1.1]">
              {ABOUT_ME.title}
            </h2>
          </div>

          {/* Paragraphs with Staggered Animation */}
          <div className="space-y-8 text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-light">
            {ABOUT_ME.paragraphs.map((p, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.2) }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Current Focus with High-Visibility HR Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring" }}
            className="pt-12 flex justify-center"
          >
            <div className="relative group">
              {/* Pulsing Background Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-text-main/20 to-text-main/5 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative flex items-center gap-3 px-6 py-3 bg-primary border border-text-main/20 rounded-full shadow-xl overflow-hidden">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                
                <span className="text-sm font-semibold tracking-wide text-text-main">
                  {ABOUT_ME.currentFocus}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-text-main/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
