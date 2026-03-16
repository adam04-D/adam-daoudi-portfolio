import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Experience</h2>
      </motion.div>
      
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="border-t border-border pt-8 flex flex-col md:flex-row gap-8"
        >
          <div className="md:w-1/3 shrink-0">
            <span className="text-sm font-medium tracking-widest text-text-muted uppercase block mb-2">
              July - August 2025
            </span>
            <h3 className="text-xl font-serif font-medium text-text-main">Data Science Intern</h3>
            <p className="text-text-muted mt-1">Pôle Digital de l'Agriculture</p>
            <p className="text-sm text-text-muted mt-1">Rabat</p>
          </div>
          
          <div className="md:w-2/3">
            <ul className="space-y-4 text-text-muted leading-relaxed list-none">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-text-muted before:rounded-full">
                Developed ML models for drought monitoring using SPI-NDVI indices, enabling accurate prediction of vegetation stress patterns.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-text-muted before:rounded-full">
                Built end-to-end data pipelines for processing satellite imagery and climate data from multiple sources.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-text-muted before:rounded-full">
                Created predictive models achieving high accuracy in forecasting drought conditions.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-text-muted before:rounded-full">
                Designed interactive data visualizations and dashboards for stakeholder presentations.
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {['Python', 'Machine Learning', 'QGIS', 'Pandas', 'Scikit-Learn'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-border text-text-muted text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
