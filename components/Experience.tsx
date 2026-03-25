import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCES, EXTRACURRICULAR_ACTIVITIES } from '../constants';
import Modal from './Modal';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'extracurricular'>('professional');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const experiences = activeTab === 'professional' ? PROFESSIONAL_EXPERIENCES : EXTRACURRICULAR_ACTIVITIES;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Journey</h2>
          <p className="text-text-muted mt-4 max-w-md">My professional path and contributions to the tech community.</p>
        </div>

        {/* macOS Style Tab Switcher */}
        <div className="bg-secondary/50 p-1 rounded-xl border border-border flex self-start md:self-auto">
          <button 
            onClick={() => setActiveTab('professional')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'professional' ? 'bg-primary shadow-sm text-text-main border border-border/50' : 'text-text-muted hover:text-text-main'}`}
          >
            <Briefcase size={16} strokeWidth={activeTab === 'professional' ? 2 : 1.5} />
            Professional
          </button>
          <button 
            onClick={() => setActiveTab('extracurricular')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'extracurricular' ? 'bg-primary shadow-sm text-text-main border border-border/50' : 'text-text-muted hover:text-text-main'}`}
          >
            <Users size={16} strokeWidth={activeTab === 'extracurricular' ? 2 : 1.5} />
            Extracurricular
          </button>
        </div>
      </motion.div>
      
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="group relative bg-secondary/20 rounded-2xl p-8 md:p-12 border border-transparent hover:border-border hover:bg-secondary/30 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Left Column: Info */}
                  <div className="lg:w-1/3 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted/60 mb-4">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-medium text-text-main mb-2 leading-tight">
                        {exp.role}
                      </h3>
                      <div className="text-lg text-text-muted font-medium flex items-center gap-2">
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-text-muted/60 mt-2 italic">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    {exp.image && (
                      <div 
                        className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-border shadow-sm group-hover:shadow-md transition-all duration-500"
                        onClick={() => setSelectedImg(exp.image || null)}
                      >
                        <img 
                          src={exp.image} 
                          alt={exp.company} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-black flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Gallery <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Details */}
                  <div className="lg:w-2/3">
                    <ul className="space-y-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-text-muted leading-relaxed relative pl-8 before:absolute before:left-0 before:top-3 before:w-2 before:h-[1px] before:bg-text-main/30">
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-12">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-primary/50 border border-border text-text-muted text-[10px] tracking-widest uppercase font-bold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Modal isOpen={!!selectedImg} onClose={() => setSelectedImg(null)}>
        <div className="aspect-video w-full bg-black/5 flex items-center justify-center overflow-hidden">
          {selectedImg && (
            <img 
              src={selectedImg} 
              alt="Experience media" 
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Experience;
