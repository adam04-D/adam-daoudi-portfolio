import React from 'react';
import { Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
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
            <a 
              href={project.link || "#"} 
              target={project.link ? "_blank" : "_self"} 
              rel={project.link ? "noopener noreferrer" : ""}
              className={`group flex flex-col h-full ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="aspect-[4/5] bg-secondary overflow-hidden mb-6 relative rounded-sm border border-border flex items-center justify-center">
                {project.video ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-text-muted">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium tracking-widest uppercase">Project Cover Here</span>
                  </div>
                )}
                
                {project.link && (
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm border border-border">
                    <ArrowUpRight size={18} className="text-text-main" />
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-medium text-text-main group-hover:text-text-muted transition-colors">{project.title}</h3>
                <span className="text-xs font-medium tracking-widest text-text-muted uppercase">{project.date}</span>
              </div>
              <p className="text-sm text-text-muted mb-6 leading-relaxed flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-border text-text-muted text-[10px] tracking-widest uppercase font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
