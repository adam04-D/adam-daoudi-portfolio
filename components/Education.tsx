import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, School, BookOpen, ChevronRight } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  const [selectedId, setSelectedId] = useState(EDUCATION[0].id);
  const activeItem = EDUCATION.find(item => item.id === selectedId) || EDUCATION[0];

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-secondary/30 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Academic Background</h2>
          <p className="text-text-muted mt-4">The foundation of my journey in engineering and data science.</p>
        </motion.div>

        {/* macOS "Settings" Style Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[450px]"
        >
          {/* Sidebar / List */}
          <div className="w-full md:w-80 bg-secondary/40 border-r border-border p-4 md:p-6 space-y-2">
            <div className="px-3 py-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/50">Institutions</span>
            </div>
            {EDUCATION.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${selectedId === item.id ? 'bg-primary shadow-sm border border-border/50 text-text-main' : 'hover:bg-primary/40 text-text-muted hover:text-text-main'}`}
              >
                <div className={`w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-colors ${selectedId === item.id ? 'bg-text-main text-primary' : 'bg-secondary text-text-muted group-hover:bg-primary group-hover:text-text-main'}`}>
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.school} Logo`} className={`w-full h-full object-contain p-1 ${selectedId === item.id ? 'brightness-0 invert' : ''}`} />
                  ) : (
                    item.id === 'insea' ? <GraduationCap size={18} /> : <School size={18} />
                  )}
                </div>
                <div className="flex-1 text-left overflow-hidden">
                  <div className="text-sm font-semibold truncate">{item.school}</div>
                  <div className="text-[10px] opacity-60 tracking-wider uppercase font-medium mt-0.5">{item.period}</div>
                </div>
                <ChevronRight size={14} className={`transition-transform duration-300 ${selectedId === item.id ? 'rotate-90 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))}
          </div>

          {/* Main Content Pane */}
          <div className="flex-1 p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/50 flex items-center justify-center border border-border overflow-hidden p-2">
                    {activeItem.logo ? (
                      <img src={activeItem.logo} alt={`${activeItem.school} Logo`} className="w-full h-full object-contain" />
                    ) : (
                      <BookOpen size={36} strokeWidth={1.5} className="text-text-main" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-text-main leading-tight">{activeItem.school}</h3>
                    <p className="text-text-muted font-medium mt-1">{activeItem.period}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/50 block">Degree / Focus</span>
                    <h4 className="text-xl font-medium text-text-main bg-secondary/30 inline-block px-4 py-2 rounded-lg border border-border/30">
                      {activeItem.degree}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/50 block">Description</span>
                    <p className="text-lg text-text-muted leading-relaxed font-light">
                      {activeItem.description}
                    </p>
                  </div>
                </div>

                {/* macOS Style Action Bar */}
                <div className="mt-12 pt-8 border-t border-border flex justify-end">
                   <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-muted/40">
                     <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                     </div>
                     Verified Institution
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Ghost Background Icon */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none transform rotate-12">
               {activeItem.id === 'insea' ? <GraduationCap size={300} /> : <School size={300} />}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
