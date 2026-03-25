import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles } from 'lucide-react';

const MacOSNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate appearance
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 400, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          // Clears the menu bar
          className="fixed top-24 right-6 md:right-12 z-[100] w-[360px] md:w-[420px] group"
        >
          {/* Ultra-Glassmorphism Container */}
          <div className="bg-primary/60 dark:bg-black/40 backdrop-blur-3xl border border-white/20 dark:border-white/5 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.2)] p-7 relative overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-5 right-7 text-text-muted/60 hover:text-text-main transition-colors opacity-0 group-hover:opacity-100 z-20"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="flex items-center gap-6 relative z-10">
              {/* macOS Message Icon instead of Portrait */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-[#53d769] to-[#4cd964] flex items-center justify-center shadow-xl border border-white/30">
                  <MessageCircle size={36} className="text-white fill-white/10" />
                </div>
                {/* Notification Badge */}
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-red-500 rounded-full border-[3px] border-primary flex items-center justify-center shadow-lg">
                   <span className="text-[10px] font-bold text-white">1</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={12} className="text-text-main" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-main/60">New Message</span>
                </div>
                <h4 className="text-xl font-serif font-medium text-text-main leading-tight">Adam Daoudi</h4>
                <p className="text-[12px] text-text-muted font-medium mt-1.5 leading-relaxed">
                  "I'm the missing variable in your team's success equation. Skilled, passionate, and ready to deploy."
                </p>
              </div>
            </div>

            {/* Premium Action Bar */}
            <div className="mt-7 flex items-center gap-3 relative z-10">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsVisible(false);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-[2] py-3.5 bg-text-main text-primary rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-text-main/10 text-center"
              >
                Reply & Hire
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 py-3.5 border border-border/50 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-text-main transition-all"
              >
                Later
              </button>
            </div>
          </div>
          
          {/* Subtle Progress Bar */}
          <div className="absolute bottom-0 left-10 right-10 h-1 bg-text-main/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: "100%" }}
               animate={{ width: "0%" }}
               transition={{ duration: 15, ease: "linear" }}
               onAnimationComplete={() => setIsVisible(false)}
               className="h-full bg-text-main/20"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MacOSNotification;
