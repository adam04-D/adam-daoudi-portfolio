import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      school: 'INSEA Rabat',
      degree: 'Data Science Engineering',
      date: '2024 - 2027',
      desc: 'Currently in 2nd year, focusing on advanced machine learning techniques, statistical analysis, and data-driven decision making.'
    },
    {
      school: 'CPGE Ibn Abdoun',
      degree: 'Preparatory Classes - MPSI/MP',
      date: '2022 - 2024',
      desc: 'Intensive program in Mathematics, Physics, and Engineering Sciences. Built strong foundations in analytical thinking and problem-solving.'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-4xl mx-auto bg-secondary transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Education</h2>
      </motion.div>
      
      <div className="space-y-12">
        {education.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.2, 1, 0.3, 1] }}
            className="border-t border-border pt-8 flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-1/3 shrink-0">
              <span className="text-sm font-medium tracking-widest text-text-muted uppercase block mb-2">
                {item.date}
              </span>
              <h3 className="text-xl font-serif font-medium text-text-main">{item.school}</h3>
            </div>
            
            <div className="md:w-2/3">
              <h4 className="text-lg font-medium text-text-main mb-3">{item.degree}</h4>
              <p className="text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
