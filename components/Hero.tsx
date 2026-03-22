import React from 'react';
import { Github, Linkedin, Mail, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_NAME, ROLE, EMAIL, SOCIAL_LINKS } from '../constants';
const adamImg = '/adam.webp';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="md:w-1/2 space-y-8 z-10"
      >
        <div className="inline-block border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-text-muted">
          {ROLE}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-text-main">
          {BRAND_NAME}.
        </h1>
        <p className="text-lg text-text-muted max-w-md leading-relaxed">
          Transforming complex data into elegant, actionable insights through deep learning and statistical modeling.
        </p>
        <div className="pt-4 flex items-center space-x-6">
          <a href="#projects" className="inline-block bg-btn-bg text-btn-text px-8 py-4 text-sm font-medium tracking-wide hover:bg-btn-hover transition-colors">
            View Projects
          </a>
          <div className="flex space-x-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors" title="LinkedIn">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors" title="GitHub">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href={SOCIAL_LINKS.sardia} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors" title="Literature Portfolio">
              <Book size={20} strokeWidth={1.5} />
            </a>
            <a href={`mailto:${EMAIL}`} className="text-text-muted hover:text-text-main transition-colors" title="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
        className="md:w-1/2 mt-16 md:mt-0 relative"
      >
        <div className="aspect-[4/5] md:aspect-square bg-secondary rounded-t-full overflow-hidden relative border border-border flex flex-col items-center justify-end text-text-muted">
          <img src={adamImg} alt={`${BRAND_NAME} Portrait`} className="w-[105%] h-[105%] object-contain object-bottom -mb-8 mt-auto" fetchPriority="high" loading="eager" />
        </div>
        {/* Decorative element */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-border rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
