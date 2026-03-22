import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = "Preview", children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              y: 100,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }}
            exit={{ 
              opacity: [1, 1, 0],
              y: [0, 400, 1000],
              scaleX: [1, 0.2, 0],
              scaleY: [1, 0.3, 0],
              filter: ["blur(0px)", "blur(8px)", "blur(20px)"],
              clipPath: [
                "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(35% 0%, 65% 0%, 52% 100%, 48% 100%)",
                "polygon(50% 100%, 50% 100%, 50% 100%, 50% 100%)"
              ],
              transition: { 
                duration: 0.45, 
                times: [0, 0.7, 1],
                ease: "circIn"
              }
            }}
            transition={{ 
              type: "spring", 
              damping: 28, 
              stiffness: 250 
            }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-primary rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] border border-border flex flex-col origin-bottom"
          >
            {/* macOS Window Header */}
            <div className="h-12 bg-secondary/80 backdrop-blur-md flex items-center px-6 gap-2 border-b border-border shrink-0">
              <div className="flex gap-2">
                <div 
                  onClick={onClose} 
                  className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:brightness-90 transition-all shadow-inner"
                />
                <div 
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:brightness-90 transition-all shadow-inner"
                />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="flex-1 text-center pr-16">
                <span className="text-[10px] font-extrabold text-text-muted/40 tracking-[0.2em] uppercase">{title}</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto no-scrollbar overflow-x-hidden bg-primary/50">
              {children}
            </div>

            {/* Mobile Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-14 right-6 md:hidden bg-black/50 p-2 rounded-full text-white backdrop-blur-md z-50"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(modalContent, document.body);
};

export default Modal;
