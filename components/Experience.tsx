import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Experience</h2>
      </motion.div>
      
      <div className="space-y-20">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div 
            key={exp.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.2, 1, 0.3, 1] }}
            className="border-t border-border pt-12 flex flex-col md:flex-row gap-12"
          >
            <div className="md:w-1/3 shrink-0">
              {exp.image && (
                <div 
                  className="aspect-[4/3] bg-secondary rounded-sm overflow-hidden mb-6 border border-border cursor-pointer group relative"
                  onClick={() => setSelectedImg(exp.image || null)}
                >
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium tracking-widest uppercase bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">View Media</span>
                  </div>
                </div>
              )}
              <span className="text-sm font-medium tracking-widest text-text-muted uppercase block mb-2">
                {exp.period}
              </span>
              <h3 className="text-xl font-serif font-medium text-text-main">{exp.role}</h3>
              <p className="text-text-muted mt-1">{exp.company}</p>
              <p className="text-sm text-text-muted mt-1">{exp.location}</p>
            </div>
            
            <div className="md:w-2/3">
              <ul className="space-y-4 text-text-muted leading-relaxed list-none">
                {exp.description.map((item, i) => (
                  <li key={i} className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-text-muted/40 before:rounded-full">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-border text-text-muted text-[10px] tracking-widest uppercase font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* macOS-style Window Modal */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#F5F2EB] dark:bg-[#141417] rounded-xl overflow-hidden shadow-2xl border border-border"
            >
              {/* macOS Window Header */}
              <div className="h-10 bg-[#E8E4D9] dark:bg-[#1A1A1A] flex items-center px-4 gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div 
                    onClick={() => setSelectedImg(null)} 
                    className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:brightness-90 transition-all"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[11px] font-medium text-text-muted tracking-tight opacity-50 uppercase">Preview</span>
                </div>
              </div>

              {/* Image Content */}
              <div className="aspect-video w-full bg-black/5 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedImg} 
                  alt="Experience media" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Window Footer/Close Button (Mobile only) */}
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-12 right-4 md:hidden bg-black/50 p-2 rounded-full text-white backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
