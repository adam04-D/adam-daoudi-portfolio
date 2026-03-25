import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Brain, 
  BarChart3, 
  Code2, 
  Globe, 
  Zap
} from 'lucide-react';

const services = [
  {
    title: 'Data Science & Analysis',
    desc: 'Extracting actionable narratives from noise using advanced statistical methods and predictive modeling.',
    icon: <BarChart3 className="text-blue-500" size={28} />,
    color: 'from-blue-500/20 to-transparent'
  },
  {
    title: 'Deep Learning & Neural Architectures',
    desc: 'Designing and training bespoke neural networks (CNNs, Transformers, GANs) for complex pattern recognition.',
    icon: <Brain className="text-purple-500" size={28} />,
    color: 'from-purple-500/20 to-transparent'
  },
  {
    title: 'Reinforcement Learning',
    desc: 'Building autonomous agents and optimization systems that learn through environment interaction.',
    icon: <Zap className="text-yellow-500" size={28} />,
    color: 'from-yellow-500/20 to-transparent'
  },
  {
    title: 'Data Engineering & Pipelines',
    desc: 'Architecting scalable, production-ready ETL pipelines and robust data infrastructure.',
    icon: <Database className="text-emerald-500" size={28} />,
    color: 'from-emerald-500/20 to-transparent'
  },
  {
    title: 'Software Engineering',
    desc: 'End-to-end full-stack development with a focus on AI integration and high-performance backends.',
    icon: <Code2 className="text-rose-500" size={28} />,
    color: 'from-rose-500/20 to-transparent'
  },
  {
    title: 'AI Consultation',
    desc: 'Strategic guidance on leveraging generative AI and LLMs to solve specific business bottlenecks.',
    icon: <Globe className="text-cyan-500" size={28} />,
    color: 'from-cyan-500/20 to-transparent'
  }
];

const Freelance: React.FC = () => {
  return (
    <section id="freelance" className="py-32 px-6 md:px-12 bg-primary transition-colors duration-300 overflow-hidden relative">
      {/* Decorative Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Available for Freelance</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-medium text-text-main leading-none">
            Strategic <span className="italic text-text-muted">Partnerships.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed font-light">
            I collaborate with forward-thinking organizations to architect high-performance AI solutions, transforming raw data into competitive advantages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-secondary/20 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-10 overflow-hidden hover:bg-secondary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5"
            >
              {/* macOS Style Inner Glow */}
              <div className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${service.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg border border-border/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-medium text-text-main group-hover:text-text-main transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed group-hover:text-text-main/80 transition-colors font-light">
                    {service.desc}
                  </p>
                </div>
                
                <div className="pt-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted group-hover:text-text-main transition-all cursor-pointer">
                  <span>Inquire Now</span>
                  <div className="w-8 h-px bg-text-muted/30 group-hover:w-12 group-hover:bg-text-main transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
