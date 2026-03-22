import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-primary/80 backdrop-blur-lg border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" onClick={(e) => onNavClick(e, 'home')} className="text-2xl font-serif font-semibold tracking-tighter text-text-main group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-text-main text-primary flex items-center justify-center text-sm font-sans transition-transform group-hover:rotate-12">AD</span>
          <span className="hidden sm:inline-block">Adam Daoudi</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center bg-secondary/30 backdrop-blur-md border border-border/50 rounded-full px-6 py-2">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={`#${link.id}`} 
                  onClick={(e) => onNavClick(e, link.id)}
                  className="text-xs font-medium tracking-widest uppercase text-text-muted hover:text-text-main transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-text-main transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border/50">
              <button onClick={toggleDarkMode} className="text-text-muted hover:text-text-main transition-colors transform hover:scale-110 active:scale-95 duration-200">
                {isDarkMode ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-6 py-2.5 bg-text-main text-primary rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-text-muted hover:text-text-main transition-colors">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl shadow-2xl py-8 px-6 flex flex-col items-center space-y-6 border-b border-border animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`} 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                onNavClick(e, link.id);
              }}
              className="text-lg font-serif font-medium text-text-main hover:text-text-muted transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-px bg-border my-2"></div>
          <a href="/resume.pdf" target="_blank" className="text-sm font-medium tracking-widest uppercase text-text-muted">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
