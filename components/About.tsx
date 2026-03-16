import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import adamImg from '../adam.png';
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="md:w-1/2 w-full"
        >
          <div className="w-full h-[600px] bg-primary rounded-sm flex flex-col items-center justify-end text-text-muted border border-border overflow-hidden">
            <img src={adamImg} alt="Adam Daoudi Portrait" className="w-[100%] h-[100%] object-contain object-bottom" />



          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="md:w-1/2 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-main leading-tight">
            Designed for impact.
          </h2>
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>
              I am a 2nd year Data Science Engineering student at INSEA Rabat. I believe that behind every complex dataset lies a quiet, elegant truth waiting to be uncovered.
            </p>
            <p>
              My specialization lies in Deep Learning and Statistical Modeling. I strip away the noise, combining theoretical knowledge with hands-on experience to build intelligent systems that make a real impact.
            </p>
            <p>
              Proficient in Machine Learning and Data Engineering, with strong skills in Python and SQL. Driven by curiosity and a desire to continuously learn in the ever-evolving field of Data Science.
            </p>
          </div>
          <div className="pt-4">
            <div className="inline-block border-b border-text-main pb-1 text-text-main font-medium">
              Currently seeking PFA internship opportunities in Deep Learning
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
