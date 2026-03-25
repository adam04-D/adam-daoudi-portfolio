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

          {/* macOS System Status Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            className="pt-16 flex justify-center"
          >
            <div className="relative group cursor-default">
              {/* Dynamic Aura */}
              <div className="absolute -inset-4 bg-text-main/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* macOS Control Center Style Pill */}
              <div className="relative flex items-center gap-4 px-8 py-4 bg-primary/40 backdrop-blur-3xl border border-white/20 dark:border-white/5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] group-hover:-translate-y-1">
                
                {/* Refined Pulsing Status Indicator */}
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/50 leading-none mb-1">Current Status</span>
                  <span className="text-sm md:text-base font-bold tracking-tight text-text-main">
                    {ABOUT_ME.currentFocus}
                  </span>
                </div>

                {/* macOS Style Interactive Icon */}
                <div className="ml-4 pl-4 border-l border-border/50">
                   <div className="w-8 h-8 rounded-full bg-text-main/5 flex items-center justify-center group-hover:bg-text-main group-hover:text-primary transition-all duration-500">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-0.5 transition-transform">
                        <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
