import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, CornerDownLeft } from 'lucide-react';
import { PROJECTS, PROFESSIONAL_EXPERIENCES, EXTRACURRICULAR_ACTIVITIES, EDUCATION } from '../constants';

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const Spotlight: React.FC<SpotlightProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      return;
    }

    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const searchData = [
      ...PROJECTS.map(p => ({ ...p, type: 'Project', section: 'projects' })),
      ...PROFESSIONAL_EXPERIENCES.map(e => ({ ...e, title: e.role, desc: e.company, type: 'Experience', section: 'experience' })),
      ...EXTRACURRICULAR_ACTIVITIES.map(e => ({ ...e, title: e.role, desc: e.company, type: 'Extracurricular', section: 'experience' })),
      ...EDUCATION.map(e => ({ ...e, title: e.school, desc: e.degree, type: 'Education', section: 'education' }))
    ];

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(searchTerm) || 
      (item.desc && item.desc.toLowerCase().includes(searchTerm)) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchTerm)))
    ).slice(0, 5); // Limit to top 5 results

    setResults(filtered);
  }, [query, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-primary/95 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl border border-border/50"
          >
            {/* Search Input */}
            <div className="flex items-center px-6 py-4 border-b border-border/50">
              <Search size={24} className="text-text-muted mr-4" strokeWidth={1.5} />
              <input
                autoFocus
                type="text"
                placeholder="Ask AI or search portfolio..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xl text-text-main placeholder:text-text-muted/50 font-medium"
              />
              <div className="flex items-center gap-1 text-[10px] font-bold text-text-muted/50 uppercase tracking-widest bg-secondary px-2 py-1 rounded-md border border-border/50">
                <span>ESC</span> to close
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto no-scrollbar py-2">
              {query.length === 0 ? (
                <div className="px-6 py-8 text-center text-text-muted flex flex-col items-center gap-4">
                  <Command size={48} strokeWidth={1} className="opacity-20" />
                  <p>Search for projects, roles, tools, or ask a question.</p>
                </div>
              ) : results.length > 0 ? (
                <ul className="px-2">
                  {results.map((res, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => {
                          onNavigate(res.section);
                          onClose();
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-secondary/50 rounded-xl flex flex-col gap-1 transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-text-main group-hover:text-text-main">{res.title}</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted/50 bg-secondary/50 px-2 py-0.5 rounded border border-border/30">{res.type}</span>
                        </div>
                        <span className="text-sm text-text-muted truncate block">{res.desc}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-6 py-8 text-center text-text-muted">
                  <p>No direct matches found. Press <span className="inline-flex items-center justify-center bg-secondary rounded text-[10px] px-1.5 py-0.5 border border-border mx-1"><CornerDownLeft size={10} /></span> to ask AI.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Spotlight;
