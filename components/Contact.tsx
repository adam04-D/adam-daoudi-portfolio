import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-text-main mb-8">
          Let's build something quiet, yet powerful.
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm currently seeking internship opportunities in Deep Learning and Data Science. If you have an exciting project, I'd love to hear from you.
        </p>
        
        <a href="mailto:adamdaoudi04@gmail.com" className="inline-block bg-btn-bg text-btn-text px-10 py-5 text-sm font-medium tracking-wide hover:bg-btn-hover transition-colors">
          adamdaoudi04@gmail.com
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
