/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="bg-secondary transition-colors duration-300">
      {/* Philosophy Block 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="order-2 lg:order-1 relative h-[400px] lg:h-auto overflow-hidden"
        >
           <img 
             src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200" 
             alt="Neural Network Abstract" 
             className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] mix-blend-multiply opacity-80"
           />
           <div className="absolute inset-0 bg-primary/20"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24"
        >
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">Philosophy</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-text-main leading-tight">
             Finding the <br/> Quiet Manifold.
           </h3>
           <p className="text-lg text-text-muted font-light leading-relaxed max-w-md">
             In a world of high-dimensional noise, I search for the underlying structure. Data isn't just numbers; it's a footprint of reality waiting for the right model to give it a voice.
           </p>
        </motion.div>
      </div>

      {/* Philosophy Block 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="flex flex-col justify-center p-12 lg:p-24 bg-text-main text-primary"
        >
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">Execution</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
             Intelligence, <br/> Transparent by Default.
           </h3>
           <p className="text-lg opacity-80 font-light leading-relaxed max-w-md">
             A model is only as good as the trust it inspires. I build AI systems that don't just predict, but explain—bridging the gap between complex mathematics and human-centric utility.
           </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative h-[400px] lg:h-auto overflow-hidden"
        >
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
             alt="Digital Landscape" 
             className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] brightness-75"
           />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
