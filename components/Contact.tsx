import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 relative overflow-hidden bg-primary transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50 mb-4">
             <Sparkles size={14} className="text-text-main" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Available for Internships</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-serif font-medium text-text-main leading-tight tracking-tight">
            Ready to turn <span className="italic text-text-muted">data</span> <br /> 
            into <span className="italic">intelligence?</span>
          </h2>
          
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            As a dedicated advocate for the AI community with a relentless passion for data-driven innovation, I am seeking a <span className="text-text-main font-medium">Data Science internship</span>. I am ready to apply my holistic expertise—spanning the entire Data Science lifecycle, Machine Learning, and Reinforcement Learning—to architect solutions for high-impact challenges.
          </p>
          
          <div className="pt-12 flex flex-col items-center gap-8">
            <motion.a 
              href={`mailto:${EMAIL}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-4 bg-text-main text-primary px-12 py-6 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Mail size={20} strokeWidth={1.5} />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{EMAIL}</span>
              <ArrowRight size={20} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted/40 mt-4">
               Based in Rabat • Open to Remote
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
