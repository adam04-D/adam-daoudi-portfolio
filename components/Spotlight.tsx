import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, CornerDownLeft, Loader2 } from 'lucide-react';
import { PROJECTS, PROFESSIONAL_EXPERIENCES, EXTRACURRICULAR_ACTIVITIES, EDUCATION } from '../constants';

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  desc?: string;
  type: string;
  section: string;
  tags?: string[];
}

const Spotlight: React.FC<SpotlightProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset state when Spotlight is opened/closed
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle local search
  useEffect(() => {
    const searchTerm = query.trim().toLowerCase();
    if (searchTerm.length === 0) {
      setResults([]);
      return;
    }

    const searchData: SearchItem[] = [
      ...PROJECTS.map(p => ({ id: p.id, title: p.title, desc: p.desc, tags: p.tags, type: 'Project', section: 'projects' })),
      ...PROFESSIONAL_EXPERIENCES.map(e => ({ id: e.id, title: e.role, desc: e.company, type: 'Experience', section: 'experience' })),
      ...EXTRACURRICULAR_ACTIVITIES.map(e => ({ id: e.id, title: e.role, desc: e.company, type: 'Extracurricular', section: 'experience' })),
      ...EDUCATION.map(e => ({ id: e.id, title: e.school, desc: e.degree, type: 'Education', section: 'education' }))
    ];

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(searchTerm) || 
      (item.desc && item.desc.toLowerCase().includes(searchTerm)) ||
      (item.tags && item.tags.some((t: string) => t.toLowerCase().includes(searchTerm)))
    ).slice(0, 5);

    setResults(filtered);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="spotlight-label"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-primary/80 dark:bg-[#1C1C1E]/90 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Search Header */}
            <div className="flex items-center px-6 py-5 border-b border-border/50">
              <div className="mr-4 flex items-center justify-center">
                <Search size={22} className="text-text-muted" strokeWidth={1.5} />
              </div>
              <label id="spotlight-label" className="sr-only">Search portfolio</label>
              <input
                autoFocus
                type="text"
                placeholder="Search portfolio..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xl text-text-main placeholder:text-text-muted/40 font-medium"
              />
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-text-muted/50 uppercase tracking-widest bg-secondary/50 px-2 py-1 rounded-md border border-border/50">
                   <CornerDownLeft size={10} />
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div ref={scrollRef} className="max-h-[60vh] overflow-y-auto no-scrollbar py-4 px-4">
              
              {/* Search Results Mode */}
              {query.length === 0 ? (
                <div className="py-12 text-center text-text-muted flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-2">
                    <Command size={32} strokeWidth={1} className="opacity-40" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-text-main/60">Spotlight Search</p>
                    <p className="text-sm opacity-50 max-w-[280px] mx-auto mt-2">Search for projects, experience, or skills.</p>
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-1">
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted/40">Found in Portfolio</div>
                  {results.map((res, idx) => (
                    <motion.button 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => {
                        onNavigate(res.section);
                        onClose();
                      }}
                      className="w-full text-left px-4 py-4 hover:bg-secondary/50 rounded-2xl flex items-center justify-between transition-all group"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-text-main group-hover:text-text-main transition-colors">{res.title}</span>
                        <span className="text-xs text-text-muted line-clamp-1">{res.desc}</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="text-[9px] uppercase tracking-widest font-bold text-text-muted/40 bg-secondary/40 px-2 py-1 rounded border border-border/30">{res.type}</span>
                         <CornerDownLeft size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-text-muted">
                  <p className="text-base font-medium">No results found for "{query}"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-secondary/20 border-t border-border/50 flex justify-between items-center text-[10px] font-bold text-text-muted/40 uppercase tracking-[0.2em]">
              <div className="flex gap-4">
                <span><span className="text-text-main/50">↑↓</span> to navigate</span>
                <span><span className="text-text-main/50">↵</span> to select</span>
              </div>
              <span>Spotlight v1.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Spotlight;
