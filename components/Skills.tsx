import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'RAG']
    },
    {
      title: 'Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Pandas', 'Scikit-learn', 'NumPy']
    },
    {
      title: 'Programming',
      skills: ['Python', 'C', 'Java', 'JavaScript']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'SQL', 'n8n']
    }
  ];

  const certifications = [
    { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA' },
    { title: 'Deep Learning in Python', issuer: 'DataCamp' },
    { title: 'Advanced Deep Learning with Keras', issuer: 'DataCamp' }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Expertise</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-medium tracking-widest text-text-muted uppercase mb-8 border-b border-border pb-4">Technical Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-serif font-medium text-text-main mb-3">{cat.title}</h4>
                  <p className="text-text-muted leading-relaxed">
                    {cat.skills.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-medium tracking-widest text-text-muted uppercase mb-8 border-b border-border pb-4">Certifications</h3>
            <div className="space-y-8">
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-serif font-medium text-text-main mb-1">{cert.title}</h4>
                  <p className="text-text-muted text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
