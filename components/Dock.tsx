import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { User, Briefcase, GraduationCap, Wrench, Mail, Code, Search } from 'lucide-react';

interface DockProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  openSpotlight: () => void;
}

const Dock: React.FC<DockProps> = ({ onNavClick, openSpotlight }) => {
  const mouseX = useMotionValue(Infinity);

  const items = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Journey' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Wrench, label: 'Expertise' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-20 gap-4 px-6 pb-4 bg-secondary/80 dark:bg-[#141417]/80 backdrop-blur-2xl border border-border/50 rounded-[2rem] shadow-2xl"
      >
        <DockItem onClick={openSpotlight} icon={Search} label="Spotlight (⌘K)" mouseX={mouseX} />
        
        <div className="w-px h-10 bg-text-main/10 mx-3 self-center"></div>

        {items.map((item) => (
          <DockItem 
            key={item.id} 
            onClick={(e) => onNavClick(e as any, item.id)} 
            icon={item.icon} 
            label={item.label} 
            mouseX={mouseX} 
            href={`#${item.id}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

interface DockItemProps {
  icon: React.ElementType;
  label: string;
  mouseX: any;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
}

const DockItem: React.FC<DockItemProps> = ({ icon: Icon, label, mouseX, onClick, href }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate distance from mouse to center of icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform distance into a scale value
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.8, 1]);
  // Apply spring physics to the scale for that bouncy macOS feel
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Comp = href ? 'a' : 'button';

  return (
    <div className="relative group flex items-end justify-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -15, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.8 }}
            className="absolute -top-14 px-4 py-2 bg-text-main text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={ref}
        style={{ scale }}
        className="w-14 h-14 origin-bottom bg-primary rounded-2xl flex items-center justify-center border border-border/30 shadow-sm cursor-pointer hover:bg-secondary transition-colors"
      >
        <Comp href={href} onClick={onClick as any} className="w-full h-full flex items-center justify-center text-text-muted hover:text-text-main">
          <Icon size={22} strokeWidth={1.5} />
        </Comp>
      </motion.div>
      {/* Active Indicator Dot (optional, but very macOS) */}
      <div className="absolute -bottom-1.5 w-1 h-1 bg-text-main/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default Dock;