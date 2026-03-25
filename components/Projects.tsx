import React, { useState } from 'react';
import { Image as ImageIcon, ArrowUpRight, Github, ExternalLink, Cpu, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Modal from './Modal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Featured Projects</h2>
          <p className="text-text-muted mt-4 max-w-md">A selection of my recent work in deep learning, computer vision, and data engineering.</p>
        </div>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.2, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <button 
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col h-full cursor-pointer text-left bg-transparent border-none p-0 outline-none focus-visible:ring-2 focus-visible:ring-text-main rounded-sm transition-shadow"
              aria-label={`View details for ${project.title}`}
            >
              <div className="aspect-[4/5] bg-secondary overflow-hidden mb-6 relative rounded-sm border border-border flex items-center justify-center w-full">
                {project.video ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : project.image ? (
                  <img 
                    src={project.image} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-text-muted">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium tracking-widest uppercase">Project Cover Here</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium tracking-widest uppercase bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">View Details</span>
                </div>
                
                {project.status && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full border border-border/50 shadow-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'Deployed' ? 'bg-green-500' : 
                      project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-text-main">{project.status}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-medium text-text-main group-hover:text-text-muted transition-colors">{project.title}</h3>
                <span className="text-xs font-medium tracking-widest text-text-muted uppercase">{project.date}</span>
              </div>
              <p className="text-sm text-text-muted mb-6 leading-relaxed flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-3 py-1 border border-border text-text-muted text-[10px] tracking-widest uppercase font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="flex flex-col lg:flex-row h-full">
            {/* Media Section */}
            <div className="lg:w-1/2 bg-black/5 border-b lg:border-b-0 lg:border-r border-border">
              <div className="sticky top-0 h-full flex flex-col">
                <div className="aspect-video lg:aspect-square w-full">
                  {selectedProject.video ? (
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={selectedProject.video} type="video/mp4" />
                    </video>
                  ) : selectedProject.image ? (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary"><ImageIcon size={48} /></div>
                  )}
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-secondary text-text-muted text-[10px] tracking-widest uppercase font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-text-main text-primary py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-text-muted transition-colors">
                        <ExternalLink size={16} /> Live Project
                      </a>
                    )}
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 border border-border py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-secondary transition-colors">
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 space-y-12 overflow-y-auto">
              <div>
                <span className="text-xs font-medium tracking-widest text-text-muted uppercase mb-4 block">{selectedProject.date}</span>
                <h2 className="text-4xl font-serif font-medium text-text-main mb-6">{selectedProject.title}</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {selectedProject.longDesc || selectedProject.desc}
                </p>
              </div>

              {selectedProject.architecture && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-text-main">
                    <Cpu size={20} strokeWidth={1.5} />
                    <h3 className="text-sm font-medium tracking-widest uppercase">Technical Architecture</h3>
                  </div>
                  <ul className="grid gap-4">
                    {selectedProject.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-text-muted group">
                        <span className="w-1.5 h-1.5 bg-text-muted/40 rounded-full mt-2 group-hover:bg-text-main transition-colors" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.challenges && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-text-main">
                    <AlertCircle size={20} strokeWidth={1.5} />
                    <h3 className="text-sm font-medium tracking-widest uppercase">Challenges & Solutions</h3>
                  </div>
                  <ul className="grid gap-4">
                    {selectedProject.challenges.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-text-muted group">
                        <span className="w-1.5 h-1.5 bg-text-muted/40 rounded-full mt-2 group-hover:bg-text-main transition-colors" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
