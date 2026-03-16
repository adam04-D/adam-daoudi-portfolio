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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-sm py-4 border-b border-border' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" onClick={(e) => onNavClick(e, 'home')} className="text-2xl font-serif font-semibold tracking-tight text-text-main">
          AD
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`} 
              onClick={(e) => onNavClick(e, link.id)}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-border">
            <button onClick={toggleDarkMode} className="text-text-muted hover:text-text-main transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" onClick={(e) => onNavClick(e, 'contact')} className="px-5 py-2 border border-text-main text-text-main text-sm font-medium hover:bg-text-main hover:text-primary transition-colors">
              Resume
            </a>
          </div>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-primary shadow-md py-4 px-6 flex flex-col space-y-4 border-b border-border">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`} 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                onNavClick(e, link.id);
              }}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => { setIsMobileMenuOpen(false); onNavClick(e, 'contact'); }} className="text-sm font-medium text-text-main">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
