import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Greenflow Rabat',
      date: '2026',
      desc: 'Deep learning object detection system for urban traffic analysis. Identifies and tracks vehicles using bounding boxes to optimize traffic flow.',
      video: 'https://videos.pexels.com/video-files/854745/854745-hd_1920_1080_30fps.mp4',
      tags: ['Computer Vision', 'YOLO', 'Deep Learning', 'Python']
    },
    {
      title: 'SPI-NDVI Forecasting',
      date: 'Dec 2025',
      desc: 'Time series forecasting for vegetation index prediction using satellite-derived data to monitor drought conditions.',
      image: '', // Empty to show placeholder
      tags: ['TensorFlow', 'Keras', 'GeoPandas']
    },
    {
      title: 'OmniSentinel',
      date: 'Dec 2025',
      desc: 'Intelligent AI audit system and chatbot for banking information retrieval, built with cloud-first architecture.',
      image: '', // Empty to show placeholder
      tags: ['NLP', 'Hugging Face', 'n8n', 'REST API']
    }
  ];

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
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.2, 1, 0.3, 1] }}
            className="group cursor-pointer flex flex-col"
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
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-serif font-medium text-text-main">{project.title}</h3>
              <span className="text-xs font-medium tracking-widest text-text-muted uppercase">{project.date}</span>
            </div>
            <p className="text-sm text-text-muted mb-6 leading-relaxed flex-grow">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-border text-text-muted text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
