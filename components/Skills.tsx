import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Layers, 
  Terminal, 
  Wrench, 
  Award, 
  Cpu, 
  Code2, 
  GitBranch, 
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../constants';

const categoryIcons: Record<string, React.ReactNode> = {
  'AI & Machine Learning': <Cpu size={24} strokeWidth={1.5} />,
  'Frameworks': <Layers size={24} strokeWidth={1.5} />,
  'Programming': <Code2 size={24} strokeWidth={1.5} />,
  'Tools': <Terminal size={24} strokeWidth={1.5} />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-primary relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Grain/Texture could go here if needed */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted/50 block">Capabilities</span>
             <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main">Expertise & Skills</h2>
          </div>
          <p className="text-text-muted max-w-sm text-sm leading-relaxed italic">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
          </p>
        </motion.div>
        
        {/* macOS Style Widget Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-secondary/30 backdrop-blur-sm rounded-3xl p-6 border border-border/50 hover:bg-secondary/50 hover:border-text-main/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-text-main shadow-inner border border-border/30 group-hover:scale-110 transition-transform duration-500">
                  {categoryIcons[cat.title] || <Wrench size={24} strokeWidth={1.5} />}
                </div>
                <h3 className="font-serif font-medium text-lg text-text-main">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-primary/60 rounded-xl text-[11px] font-semibold text-text-muted border border-border/50 hover:border-text-main/30 hover:text-text-main transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles size={14} className="text-text-main/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section - "List View" Style Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary/20 rounded-3xl border border-border/50 overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-border/50 flex items-center justify-between bg-secondary/30">
            <div className="flex items-center gap-3">
               <Award size={20} className="text-text-main" strokeWidth={1.5} />
               <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text-main">Certifications & Achievements</h3>
            </div>
            <span className="text-[10px] font-medium text-text-muted/60 bg-primary/50 px-3 py-1 rounded-full border border-border/30">Verified Academic Record</span>
          </div>

          <div className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div 
                key={cert.title}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-text-muted group-hover:text-text-main border border-border/30 transition-all">
                  <span className="text-xs font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-main">{cert.title}</h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
